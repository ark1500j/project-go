import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';
import ParallaxBackground from '../effects/ParallaxBackground';
import AuthLayout from '../auth/AuthLayout';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const isAuthPage = router.pathname.startsWith('/auth/');
  const isTrackingPage = router.pathname.startsWith('/flight/');
  const isProtectedPage = isAuthPage || isTrackingPage;

  if (isAuthPage) {
    return <AuthLayout>{children}</AuthLayout>;
  }

  return (
    <>
      <div className="min-h-screen bg-background relative overflow-hidden flex flex-col perspective-1000">
        <ParallaxBackground />
        <Navbar />
        <main className="relative z-10 flex-grow transform-gpu">{children}</main>
        {!isProtectedPage && <Footer />}
      </div>
      <ScrollToTop />
    </>
  );
};

export default Layout;

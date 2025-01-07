import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from './Button';

const Navbar: React.FC = () => {
  const router = useRouter();
  const isAuthPage = router.pathname.startsWith('/auth/');
  const isProtectedPage = router.pathname.startsWith('/flight/') || router.pathname === '/notifications';

  // Show only logo for auth pages
  if (isAuthPage) {
    return (
      <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">
            BoardAndGo
          </Link>
        </div>
      </nav>
    );
  }

  // Show only logo and user menu for protected pages
  if (isProtectedPage) {
    return (
      <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">
            BoardAndGo
          </Link>
          {/* TODO: Add user menu/profile here */}
        </div>
      </nav>
    );
  }

  // Full navbar for public pages
  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">
            BoardAndGo
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link 
            href="/auth/login" 
            className="text-sm hover:text-primary transition-colors"
          >
            Login
          </Link>
          <Link href="/auth/signup">
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

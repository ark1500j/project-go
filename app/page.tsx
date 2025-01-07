"use client";
import { useState } from "react";
import Button from "../components/common/Button";

import FeatureCard from "../components/common/FeatureCard";
import TestimonialCard from "../components/common/TestimonialCard";
import { features, testimonials } from "../data/content";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import AviationMenu from "../components/common/AviationMenu";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import BackgroundElements from "../components/common/BackgroundElements";
import Head from "next/head";

const BluePlane = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 307 257" fill="currentColor">
    <path d="M84.5 1c-2.2.4-3.5.8-3 .9.6.1.3.6-.5 1.1-1.3.8-1.3 1 .1 1 1.1 0 4.1 5.4 9.4 17.2 4.4 9.5 7.9 18.2 7.9 19.4.1 2.8 16.7 39.6 18.5 41 1 .8 1.6 3.3 1.7 8 .1 3.8.5 10.8.9 15.5l.8 8.6-25.4.6c-16.5.4-28.2 1.1-33.4 2.1-4.4.9-8.6 1.6-9.2 1.6-.7 0-6.7-7.3-13.4-16.3-6.7-8.9-12.9-16.8-13.7-17.5-1.4-1.1-12.2-1.8-12.2-.8 0 .2 2 8.6 4.5 18.7 2.4 10.1 4.3 18.3 4.2 18.4-.1.1-1.4.9-2.9 1.8-1.5.9-3.5 1.7-4.5 1.7-2.4.1-12.8 3.7-12.8 4.5 0 .8 10.4 4.4 12.8 4.5 1 0 3 .8 4.5 1.7 1.5.9 2.8 1.7 2.9 1.8.1.1-1.8 8.3-4.2 18.4-2.5 10.1-4.5 18.5-4.5 18.7 0 1 10.8.3 12.2-.9.8-.6 7-8.5 13.7-17.5 6.7-8.9 12.7-16.2 13.4-16.2.6 0 4.8.7 9.2 1.6 5.2 1 16.9 1.7 33.4 2.1l25.4.6-.8 8.6c-.4 4.7-.8 11.7-.9 15.5-.1 4.7-.7 7.2-1.7 8-1.8 1.4-18.4 38.2-18.5 41 0 1.2-3.5 9.9-7.9 19.3-5.3 11.9-8.3 17.3-9.4 17.3-1.4 0-1.4.2-.1 1 .8.5 1.1 1 .5 1.1-.5.1 1 .5 3.5.9 3.7.6 5.3.3 9.4-1.7 5.8-2.9 3.3-.1 37.9-43.7 17.3-21.8 28.6-35.2 29.8-35.4 1.1-.2 2.7.2 3.5.9 2 1.7 16.2 2.4 19.7 1 2.7-1 2.8-1.3 2.5-7.3l-.3-6.3-8.2-.3c-4.6-.2-8.3-.5-8.3-.7 0-1 11.4-14.5 12.2-14.5.4 0 .8-.5.8-1.1 0-.7-1-.9-2.7-.4-2.3.5-2.6.4-1.5-.7 1-1 11.1-1.4 47-1.9 45-0.6 45.9-.7 56.7-3.3 31-7.4 31-16.8 0-24.2-10.8-2.6-11.7-2.7-56.7-3.3-35.9-.5-46-.9-47-1.9-1.1-1.1-.8-1.2 1.5-.7 1.7.5 2.7.3 2.7-.4 0-.6-.4-1.1-.8-1.1-.8 0-12.2-13.5-12.2-14.5 0-.2 3.7-.5 8.3-.7l8.2-.3.3-6.3c.3-6 .2-6.3-2.5-7.3-3.5-1.4-17.7-.7-19.7 1-.8.7-2.4 1.1-3.5.9-1.2-.2-12.5-13.6-29.8-35.4-34.6-43.7-32.1-40.7-38.1-43.8-2.8-1.4-5.3-2.5-5.4-2.5-.2.1-2.1.5-4.3.9z" />
  </svg>
);

export default function HomePage() {
  // const router = useRouter();
  const [flightNumber, setFlightNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleTrackFlight = () => {
    if (!flightNumber) return;

    setIsSearching(true);

    // After animation completes, navigate or show results
    setTimeout(() => {
      // Navigate to flight tracking page or show results
      console.log("Tracking flight:", flightNumber);
    }, 1200); // Match new animation duration
  };

  return (
    <>
      <Head>
        <meta
          name="dashbo"
          content="Welcome to the home page of My Awesome Website, where we share amazing content and updates."
        />
      </Head>
      <BackgroundElements />

      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
        {/* Navigation Bar */}
        <div className="fixed top-0 left-0 right-0 h-16 px-4 sm:px-6 z-30 bg-background/80 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold">
                <Link href="/" className="gradient-text ">
                  BoardAndGo
                </Link>
              </h1>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden sm:flex items-center gap-4">
              <Link
                href="/auth/login"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link href="/auth/signup">
                <button className="bg-[#7C5DFA] hover:bg-[#8F75FF] transition-colors px-4 py-2 rounded-full text-sm font-medium text-white">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="block sm:hidden z-50">
              <AviationMenu />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-6 sm:space-y-8 pt-16 sm:pt-20">
            {/* Hero Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight relative z-10">
              Your AI Travel Partner
              <span className="gradient-text block mt-2">
                Never Miss a Flight
              </span>
            </h2>

            {/* Hero Subtitle */}
            <p className="text-base sm:text-lg text-gray-400 max-w-xl sm:max-w-2xl mx-auto relative z-10">
              AI Agents that handle your travel for you, so you can just
              Board-and-Go!
            </p>

            {/* Flight Search Bar */}
            <div className="max-w-md mx-auto px-4 sm:px-0 relative z-10">
              {/* Search bar glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-purple/20 via-accent-blue/20 to-accent-pink/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 relative">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Enter flight number..."
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value)}
                    className="w-full h-12 sm:h-14 bg-[#0A0A0B] rounded-full sm:rounded-r-none px-4 sm:px-6 
                      text-sm sm:text-base text-white placeholder-gray-400
                      border-0 focus:ring-0 focus:outline-none"
                  />
                </div>
                <button
                  onClick={handleTrackFlight}
                  disabled={isSearching}
                  className="h-12 sm:h-14 bg-[#7C5DFA] hover:bg-[#8F75FF] transition-colors 
                    px-6 sm:px-8 text-sm sm:text-base text-white font-medium 
                    rounded-full sm:rounded-l-none sm:rounded-r-full
                    relative overflow-hidden whitespace-nowrap w-full sm:w-auto"
                >
                  <span
                    className={`
                      inline-block transition-all duration-300
                      ${
                        isSearching
                          ? "opacity-0 scale-0"
                          : "opacity-100 scale-100"
                      }
                    `}
                  >
                    Track Flight
                  </span>

                  {/* Animated Plane */}
                  <span
                    className={`
                      absolute inset-0 flex items-center justify-center
                      transition-all duration-300
                      ${
                        isSearching
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-0"
                      }
                    `}
                  >
                    <BluePlane
                      className={`
                        w-6 h-6 sm:w-8 sm:h-8 text-white
                        ${isSearching ? "animate-fly-away" : ""}
                      `}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 relative px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Text Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Take BoardAndGo
                  <span className="gradient-text block mt-2">
                    Wherever You Go
                  </span>
                </h2>
                <div className="absolute -left-20 -top-20 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl animate-pulse-slow hidden sm:block" />
              </div>

              <p className="text-base sm:text-lg text-gray-400 max-w-lg">
                Download our mobile app to track flights, receive real-time
                updates, and access AI-powered insights on the go.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8">
                <a
                  href="#"
                  className="transition-all duration-300 hover:-translate-y-1 group w-[160px] xs:w-[180px] sm:w-[200px] md:w-[240px] mx-auto sm:mx-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="w-full h-auto group-hover:scale-105 transition-transform"
                  />
                </a>
                <a
                  href="#"
                  className="transition-all duration-300 hover:-translate-y-1 group w-[160px] xs:w-[180px] sm:w-[200px] md:w-[240px] mx-auto sm:mx-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/download-on-the-google-play-store.svg"
                    alt="Get it on Google Play"
                    className="w-full h-auto group-hover:scale-105 transition-transform"
                  />
                </a>
              </div>
            </div>

            {/* App Preview Images */}
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-radial from-accent-purple/20 via-transparent to-transparent blur-2xl" />
              <div className="relative flex justify-center items-center gap-4 sm:gap-8">
                {/* iOS Device */}
                <div
                  className="relative animate-float transform hover:scale-105 transition-transform duration-500"
                  style={{ animationDuration: "3s", animationDelay: "0.5s" }}
                >
                  <div className="glass-effect rounded-[2rem] sm:rounded-[2.5rem] p-1 sm:p-2 shadow-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/mockups/ios-device.png"
                      alt="BoardAndGo iOS App"
                      className="rounded-[1.5rem] sm:rounded-[2rem] w-full max-w-[160px] sm:max-w-[220px] h-auto"
                      style={{ transform: "rotate(-5deg)" }}
                    />
                  </div>
                </div>

                {/* Android Device */}
                <div
                  className="relative animate-float transform hover:scale-105 transition-transform duration-500"
                  style={{ animationDuration: "3.5s" }}
                >
                  <div className="glass-effect rounded-[2rem] sm:rounded-[2.5rem] p-1 sm:p-2 shadow-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/mockups/android-device.png"
                      alt="BoardAndGo Android App"
                      className="rounded-[1.5rem] sm:rounded-[2rem] w-full max-w-[160px] sm:max-w-[220px] h-auto"
                      style={{ transform: "rotate(5deg)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Mobile/Tablet Title - Shows above cards on smaller screens */}
            <div className="lg:hidden text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Trusted by Travelers
                <span className="gradient-text block mt-2">Worldwide</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400 mt-4 max-w-lg mx-auto">
                Join thousands of satisfied users who trust BoardAndGo for their
                travel needs.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="relative order-2 lg:order-1">
              {/* Background glow effect */}
              <div className="absolute -inset-4 bg-gradient-radial from-accent-purple/20 via-transparent to-transparent blur-2xl" />

              {/* Two column staggered grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* First column */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="transform hover:scale-[1.02] transition-all duration-300">
                    <TestimonialCard {...testimonials[0]} />
                  </div>
                  <div className="transform hover:scale-[1.02] transition-all duration-300 translate-y-0 sm:translate-y-8">
                    <TestimonialCard {...testimonials[2]} />
                  </div>
                </div>
                {/* Second column */}
                <div className="space-y-4 sm:space-y-6 translate-y-0 sm:translate-y-12">
                  <div className="transform hover:scale-[1.02] transition-all duration-300">
                    <TestimonialCard {...testimonials[1]} />
                  </div>
                  {testimonials[3] && (
                    <div className="transform hover:scale-[1.02] transition-all duration-300">
                      <TestimonialCard {...testimonials[3]} />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Desktop Text Content */}
            <div className="hidden lg:flex flex-col justify-center space-y-8 order-1 lg:order-2">
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Trusted by Travelers
                  <span className="gradient-text block mt-2">Worldwide</span>
                </h2>
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent-purple/30 rounded-full blur-3xl animate-pulse-slow" />
              </div>
              <p className="text-lg text-gray-400 max-w-lg">
                Join thousands of satisfied users who trust BoardAndGo for their
                travel needs. Experience seamless flight tracking with real-time
                updates and AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/signup">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group w-full sm:w-auto"
                  >
                    Get Started
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </Button>
                </Link>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Mobile/Tablet CTA Buttons */}
            <div className="lg:hidden flex flex-col sm:flex-row gap-4 mt-8 order-3">
              <Link href="/auth/signup" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="group w-full">
                  Get Started
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </Button>
              </Link>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden px-4">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-background" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-purple/10 via-transparent to-transparent opacity-60" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Never Miss a Flight
              <span className="gradient-text block mt-2">
                Let AI Be Your Co-Pilot
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl sm:max-w-2xl mx-auto">
              Join thousands of stress-free travelers who let our AI handle the
              complexities of flight tracking. From gate changes to delay
              predictions, we&apos;ve got you covered.
            </p>
            <div className="flex flex-col gap-4 max-w-xs mx-auto">
              <Link href="/auth/signup" className="w-full">
                <button
                  className="w-full h-[72px] bg-[#7C5DFA] hover:bg-[#8F75FF] 
                  transition-colors rounded-[32px] text-white font-medium
                  flex items-center justify-center gap-2 group"
                >
                  Get Started Free
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </Link>
              <button
                className="w-full h-[72px] bg-[#1E1E1E] hover:bg-[#2A2A2A] 
                transition-colors rounded-[32px] text-white font-medium"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -left-20 bottom-0 w-80 h-80 bg-accent-purple/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute -right-20 bottom-0 w-80 h-80 bg-accent-blue/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute left-1/4 top-1/4 w-2 h-2 bg-accent-purple/50 rounded-full animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 w-2 h-2 bg-accent-blue/50 rounded-full animate-pulse-slow" />
      </section>

      {/* Use the Footer component instead of inline footer */}
      <Footer />

      {/* Add ScrollToTop button */}
      <ScrollToTop />
    </>
  );
}

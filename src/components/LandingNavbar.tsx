import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LandingNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl">💼</span>
            <span className="text-xl font-bold tracking-tight text-text-primary">
              IntelliApply
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="#features"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Features
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              GitHub
            </a>
            <a
              href="#signin"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Sign In
            </a>
            <Button className="glow-effect">Get Started for Free</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-4 border-t border-border/40 mt-2">
            <a
              href="#features"
              className="block text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              onClick={toggleMobileMenu}
            >
              Features
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              onClick={toggleMobileMenu}
            >
              GitHub
            </a>
            <a
              href="#signin"
              className="block text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              onClick={toggleMobileMenu}
            >
              Sign In
            </a>
            <Button className="w-full glow-effect">Get Started for Free</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LandingNavbar;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Link } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="https://www.pibitech.com/" target="blank" className="">
            <div className="flex items-center space-x-4 ">
              <img
                src="/images/pibitechlogo.png"
                alt="Pi Bi Tech Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-bold leading-none gradient-text bg-blue-500 py-5">
                Pi Bi Technologies
              </span>
            </div>
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-foreground hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#curriculum"
              className="text-foreground hover:text-primary transition-colors"
            >
              Curriculum
            </a>
            <a
              href="#details"
              className="text-foreground hover:text-primary transition-colors"
            >
              Details
            </a>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-accent"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-accent"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-accent"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href="#curriculum"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Curriculum
              </a>
              <a
                href="#details"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Details
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

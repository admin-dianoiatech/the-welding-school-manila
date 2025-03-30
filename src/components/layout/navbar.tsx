import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-10 sm:h-14 w-auto"
                src="/images/logo.png"
                alt="The Welding School Manila"
              />
              <span className="ml-2 sm:ml-3 text-sm sm:text-lg font-medium text-primary sm:max-w-none">
                The Welding School Manila
              </span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center">
            <div className="flex items-center space-x-1 xl:space-x-4">
              <a
                href="/"
                className={cn(
                  "px-2 py-2 font-medium text-sm xl:text-base transition-colors",
                  isActive("/")
                    ? "font-bold border-b-2 border-orange-500"
                    : "text-primary hover:text-primary-dark hover:border-b-2 hover:border-secondary/50"
                )}
              >
                Home
              </a>
              <a
                href="/about"
                className={cn(
                  "px-2 py-2 font-medium text-sm xl:text-base transition-colors",
                  isActive("/about")
                    ? "font-bold border-b-2 border-orange-500"
                    : "text-primary hover:text-primary-dark hover:border-b-2 hover:border-secondary/50"
                )}
              >
                About Us
              </a>
              <a
                href="/courses"
                className={cn(
                  "px-2 py-2 font-medium text-sm xl:text-base transition-colors",
                  isActive("/courses")
                    ? "font-bold border-b-2 border-orange-500"
                    : "text-primary hover:text-primary-dark hover:border-b-2 hover:border-secondary/50"
                )}
              >
                Courses
              </a>
              <a
                href="/certifications"
                className={cn(
                  "px-2 py-2 font-medium text-sm xl:text-base transition-colors",
                  isActive("/certifications")
                    ? "font-bold border-b-2 border-orange-500"
                    : "text-primary hover:text-primary-dark hover:border-b-2 hover:border-secondary/50"
                )}
              >
                Certifications
              </a>
              <a
                href="/services"
                className={cn(
                  "px-2 py-2 font-medium text-sm xl:text-base transition-colors",
                  isActive("/services")
                    ? "font-bold border-b-2 border-orange-500"
                    : "text-primary hover:text-primary-dark hover:border-b-2 hover:border-secondary/50"
                )}
              >
                Services
              </a>
              <a
                href="/contact"
                className={cn(
                  "px-2 py-2 font-medium text-sm xl:text-base transition-colors",
                  isActive("/contact")
                    ? "font-bold border-b-2 border-orange-500"
                    : "text-primary hover:text-primary-dark hover:border-b-2 hover:border-secondary/50"
                )}
              >
                Contact
              </a>
            </div>
            <a
              href="/contact"
              className="ml-4 text-center gradient-secondary hover:opacity-90 text-white font-medium py-2 px-4 xl:py-3 xl:px-6 text-sm xl:text-base rounded-md transition duration-300 shadow-lg whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-dark focus:outline-none"
            >
              <svg
                className={cn(isMenuOpen ? "hidden" : "block", "h-6 w-6")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={cn(isMenuOpen ? "block" : "hidden", "h-6 w-6")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(isMenuOpen ? "block" : "hidden", "lg:hidden")}>
        <div className="pt-2 pb-3 space-y-1 border-t border-gray-200">
          <a
            href="/"
            className={cn(
              "block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
              isActive("/")
                ? "font-bold border-b-2 border-orange-500"
                : "border-transparent text-primary hover:bg-gray-50 hover:border-secondary/50"
            )}
          >
            Home
          </a>
          <a
            href="/about"
            className={cn(
              "block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
              isActive("/about")
                ? "font-bold border-b-2 border-orange-500"
                : "border-transparent text-primary hover:bg-gray-50 hover:border-secondary/50"
            )}
          >
            About Us
          </a>
          <a
            href="/courses"
            className={cn(
              "block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
              isActive("/courses")
                ? "font-bold border-b-2 border-orange-500"
                : "border-transparent text-primary hover:bg-gray-50 hover:border-secondary/50"
            )}
          >
            Courses
          </a>
          <a
            href="/certifications"
            className={cn(
              "block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
              isActive("/certifications")
                ? "font-bold border-b-2 border-orange-500"
                : "border-transparent text-primary hover:bg-gray-50 hover:border-secondary/50"
            )}
          >
            Certifications
          </a>
          <a
            href="/services"
            className={cn(
              "block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
              isActive("/services")
                ? "font-bold border-b-2 border-orange-500"
                : "border-transparent text-primary hover:bg-gray-50 hover:border-secondary/50"
            )}
          >
            Services
          </a>
          <a
            href="/contact"
            className={cn(
              "block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
              isActive("/contact")
                ? "font-bold border-b-2 border-orange-500"
                : "border-transparent text-primary hover:bg-gray-50 hover:border-secondary/50"
            )}
          >
            Contact
          </a>
          <div className="pl-3 pr-4 py-2">
            <a
              href="/contact"
              className="block w-full text-center gradient-secondary hover:opacity-90 text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

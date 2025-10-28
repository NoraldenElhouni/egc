"use client";

import { useState, useEffect, type MouseEvent } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = (e: MouseEvent, href: string) => {
    // If href contains a hash, try to scroll to the element with that id.
    if (href.includes("#")) {
      e.preventDefault();
      const [, hash] = href.split("#");
      const id = hash;

      // If element exists on the page, smooth scroll to it and update URL hash.
      const el =
        typeof document !== "undefined" ? document.getElementById(id) : null;
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        // Update the URL hash without causing a navigation.
        if (typeof window !== "undefined") {
          window.history.pushState(null, "", `#${id}`);
        }
      } else {
        // Element not present (maybe different page) — perform a navigation.
        router.push(href);
      }

      // Close mobile menu if open.
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#founders", label: "Co-Founders" },
    { href: "/#projects", label: "Projects" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/#contact", label: "Contact" },
  ];

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -6 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={(e: MouseEvent) => {
              if (pathname === "/") {
                e.preventDefault();
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  // Clear any hash without navigating
                  window.history.pushState(null, "", "/");
                }
                setIsMobileMenuOpen(false);
              }
            }}
            className={`font-serif font-semibold tracking-tight transition-all duration-300 ${
              isScrolled ? "text-xl" : "text-2xl"
            }`}
          >
            <Image
              src="/logos/egclogow-removebg-preview.png"
              alt="EGC Logo"
              width={210}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm uppercase tracking-wider hover:text-accent transition-colors ${
                  pathname === link.href ? "text-accent" : ""
                }`}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" aria-label="Change language">
              <Globe size={16} />
              <span>EN</span>
            </Button>
            <Button asChild variant="default" size="sm">
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.18 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.span>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden py-6 border-t border-border"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              <motion.div
                className="flex flex-col gap-4"
                variants={container}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={item}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`text-sm uppercase tracking-wider hover:text-accent transition-colors ${
                        pathname === link.href ? "text-accent" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="flex justify-between ">
                  <motion.div variants={item}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-4 w-full"
                      aria-label="Change language"
                    >
                      <Globe size={16} />
                      <span>EN</span>
                    </Button>
                  </motion.div>
                  <motion.div variants={item}>
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="mt-4 w-full"
                    >
                      <Link
                        href="/#contact"
                        onClick={(e) => {
                          setIsMobileMenuOpen(false);
                          handleLinkClick(e, "/#contact");
                        }}
                      >
                        Get in Touch
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

"use client";
import { useState, useEffect, type MouseEvent } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import LocaleSwitcher from "../localeSwitcher";
import { useTranslations } from "next-intl";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");

  const handleLinkClick = (e: MouseEvent, href: string) => {
    if (href.includes("#")) {
      e.preventDefault();
      const [, hash] = href.split("#");
      const id = hash;
      const el =
        typeof document !== "undefined" ? document.getElementById(id) : null;
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        if (typeof window !== "undefined") {
          window.history.pushState(null, "", `#${id}`);
        }
      } else {
        router.push(href);
      }
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/#about", label: t("about") },
    { href: "/#founders", label: t("coFounders") },
    { href: "/#projects", label: t("projects") },
    { href: "/#gallery", label: t("gallery") },
    { href: "/#contact", label: t("contact") },
  ];

  const container = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.04 } },
  };

  const item = { hidden: { opacity: 0, y: -6 }, show: { opacity: 1, y: 0 } };

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
            isScrolled ? "h-18" : "h-20"
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
                  window.history.pushState(null, "", "/");
                }
                setIsMobileMenuOpen(false);
              }
            }}
            className={`font-serif font-semibold tracking-tight transition-all duration-300 ${
              isScrolled ? "text-xl" : "text-2xl"
            }`}
          >
            {/* Desktop: full logo */}
            <Image
              src="/logos/egclogow-removebg-preview.png"
              alt="EGC Logo"
              width={210}
              height={100}
              className="hidden lg:block object-contain"
            />

            {/* Mobile: animated swap between small and full logo */}
            <div className="block lg:hidden">
              <AnimatePresence initial={false} mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="logo-full"
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center"
                  >
                    <Image
                      src="/logos/egclogow-removebg-preview.png"
                      alt="EGC Full"
                      width={190}
                      height={100}
                      className="object-contain"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="logo-small"
                    initial={{ opacity: 0, y: -4, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="flex items-center"
                  >
                    <Image
                      src="/logos/egclogow-removebg-small.png"
                      alt="EGC Small"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
            <LocaleSwitcher />
            <Button
              asChild
              variant="default"
              size="sm"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                handleLinkClick(e, "/#contact");
              }}
            >
              <Link href="/#contact">{t("contactUs")}</Link>
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
                    <div className="mt-4 w-full" aria-label="Change language">
                      <LocaleSwitcher />
                    </div>
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
                        {t("contactUs")}
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

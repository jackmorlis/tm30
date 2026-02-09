"use client";

import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogOut } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-gray-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-white"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1.5">
          <span className="text-[20px] font-bold text-dark tracking-tight">
            TM30<span className="text-primary">.ai</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[14px] text-gray-text hover:text-dark transition-colors rounded-lg hover:bg-gray-bg"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        {session ? (
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-[12px] font-semibold text-primary">
                {session.user?.name?.charAt(0) ||
                  session.user?.email?.charAt(0)?.toUpperCase() ||
                  "U"}
              </div>
              <span className="text-[14px] text-dark font-medium max-w-[140px] truncate">
                {session.user?.name || session.user?.email}
              </span>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-1.5 text-[14px] text-gray-text hover:text-dark transition-colors px-3 py-2 rounded-lg hover:bg-gray-bg"
            >
              <LogOut size={15} />
              Sign out
            </button>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/signin"
              className="text-[14px] text-gray-text hover:text-dark transition-colors px-4 py-2"
            >
              Sign in
            </a>
            <a
              href="/signup"
              className="text-[14px] font-medium px-5 py-2.5 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Get started
            </a>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-dark p-2 -mr-2"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-text hover:text-dark transition-colors py-3 border-b border-gray-border text-[15px]"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                {session ? (
                  <>
                    <div className="flex items-center gap-2.5 py-2">
                      <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-[12px] font-semibold text-primary">
                        {session.user?.name?.charAt(0) ||
                          session.user?.email?.charAt(0)?.toUpperCase() ||
                          "U"}
                      </div>
                      <span className="text-[14px] text-dark font-medium truncate">
                        {session.user?.name || session.user?.email}
                      </span>
                    </div>
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="flex items-center justify-center gap-2 font-medium px-5 py-3 rounded-lg border border-gray-border text-dark text-[15px] hover:bg-gray-bg transition-colors"
                    >
                      <LogOut size={15} />
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <a
                      href="/signin"
                      className="text-gray-text hover:text-dark py-2 text-[15px]"
                    >
                      Sign in
                    </a>
                    <a
                      href="/signup"
                      className="text-center font-medium px-5 py-3 rounded-lg bg-primary text-white"
                    >
                      Get started
                    </a>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

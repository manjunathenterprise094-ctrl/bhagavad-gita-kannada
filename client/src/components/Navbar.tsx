import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { MobileNavDrawer } from "@/pages/home";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/chapters", label: "Chapters" },
    { href: "/verses", label: "Verses" },
    { href: "/bookmarks", label: "Bookmarks" },
    { href: "/chat", label: "Ask Krishna" },
    { href: "/pravachana", label: "Listen Gita" },
    { href: "/storybook", label: "Gita Storybook" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/85 backdrop-blur">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="h-9 w-9 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-md font-bold font-serif text-lg logo-glow cursor-pointer">
              ॐ
            </Link>
            <Link href="/" className="font-bold text-lg tracking-wide hidden sm:inline-block text-gradient-gold cursor-pointer">
              Bhagavad Gita
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => {
              // Exact match or sub-paths for active styling
              const isActive = location === link.href || (link.href !== "/" && location.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link transition-colors cursor-pointer ${
                    isActive ? "active text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 rounded-xl border border-primary/20 bg-background/50 hover:bg-primary/10 transition-all active:scale-95 cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </header>

      <MobileNavDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

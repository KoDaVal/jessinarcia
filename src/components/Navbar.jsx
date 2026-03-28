"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Facebook, Instagram } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre Mí" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const showGlass = scrolled || !isHome || menuOpen;

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[100] px-4 pt-4 md:pt-6 pointer-events-none flex justify-center">
        <nav
          className={`pointer-events-auto transition-all duration-500 ease-in-out w-full max-w-5xl rounded-full px-6 py-3 flex justify-between items-center ${
            showGlass ? "glass shadow-lg bg-white/80" : "bg-transparent text-white"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/remax-logo.png"
              alt="RE/MAX Logo"
              width={100}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex gap-8 text-sm font-medium ${
              showGlass ? "text-gray-600" : "text-white/90"
            }`}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-remax-red transition-colors relative py-1 ${
                  pathname === item.href
                    ? showGlass
                      ? "text-remax-navy"
                      : "text-white font-bold"
                    : ""
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                      showGlass ? "bg-remax-red" : "bg-white"
                    }`}
                  />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-full backdrop-blur-sm transition-colors ${
              showGlass
                ? "text-remax-navy bg-remax-navy/5"
                : "text-white bg-white/20"
            }`}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-[90] flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_ITEMS.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            style={{ transitionDelay: `${menuOpen ? i * 100 : 0}ms` }}
            className={`text-4xl font-serif text-remax-navy transition-all duration-500 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } ${pathname === item.href ? "text-remax-red" : ""}`}
          >
            {item.label}
          </Link>
        ))}
        <div
          className={`mt-12 flex gap-6 transition-all duration-500 delay-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="w-12 h-12 rounded-full glass flex items-center justify-center text-remax-navy hover:bg-remax-red hover:text-white transition-colors">
            <Facebook size={20} />
          </span>
          <span className="w-12 h-12 rounded-full glass flex items-center justify-center text-remax-navy hover:bg-remax-red hover:text-white transition-colors">
            <Instagram size={20} />
          </span>
        </div>
      </div>
    </>
  );
}

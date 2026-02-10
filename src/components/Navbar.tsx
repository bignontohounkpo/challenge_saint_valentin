import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Accueil", href: "#hero" },
  { label: "Pourquoi ", href: "#why" },
  { label: "Presentation", href: "#product" },
  { label: "Avantages", href: "#benefits" },
  { label: "Prix", href: "#pricing" },
  { label: "Garantie", href: "#reassurance" },
  { label: "Avis", href: "#reviews" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpenMenu(false);

    const element = document.querySelector(href);
    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleClick("#hero")}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 shadow-sm">
            <Heart className="h-5 w-5 text-white" fill="currentColor" />
          </div>
          <span className="font-display text-lg font-bold text-foreground">
            SaintValentin
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA DESKTOP */}
        <div className="hidden lg:block">
          <Button
            variant="hero"
            className="rounded-full px-6"
            onClick={() => handleClick("#finalcta")}
          >
            OFFRIR MAINTENANT
          </Button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden flex items-center justify-center rounded-full p-2 border border-border bg-white/80 backdrop-blur"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {openMenu && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border px-4 pb-6">
          <div className="flex flex-col items-center gap-4 pt-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-center text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                {link.label}
              </button>
            ))}

            <Button
              variant="hero"
              className="rounded-full mt-2 px-8 w-auto"
              onClick={() => handleClick("#finalcta")}
            >
              Offrir
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
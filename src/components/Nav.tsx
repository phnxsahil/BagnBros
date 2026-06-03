import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import backpackerAvatar from "@/assets/backpacker-avatar.png";

const NAV_LINKS = [
  { label: "Expeditions", href: "#munsiyari" },
  { label: "Destinations", href: "#hidden" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

const WHATSAPP =
  "https://wa.me/918865848737?text=Hi%20Bag%20N%20Bros%2C%20I%27d%20like%20to%20know%20more%20about%20your%20next%20expedition.";

function handleSmoothScroll(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onAfter?: () => void,
) {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
  onAfter?.();
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        id="nav"
        className={`fixed top-0 inset-x-0 z-50 safe-top transition-all duration-[400ms] ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1500px] px-4 md:px-10 h-14 md:h-[4.5rem] flex items-center justify-between">
          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden h-11 w-11 -ml-2 flex items-center justify-center text-foreground"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          {/* Logo + Avatar */}
          <a
            href="#top"
            onClick={(e) => handleSmoothScroll(e, "#top")}
            className="md:order-none order-2 md:mx-0 mx-auto flex items-center gap-2.5 text-foreground"
            aria-label="Bag N' Bros home"
          >
            <img
              src={backpackerAvatar}
              alt="Backpacker avatar"
              className="h-8 w-8 rounded-full border-2 border-ember shadow-md object-cover"
            />
            <BrandMark compact className="h-8 md:h-9 w-auto" />
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8 label-mono">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleSmoothScroll(e, l.href)}
                className="text-foreground/70 hover:text-ember transition-colors duration-300 font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA area */}
          <div className="flex items-center gap-2 md:gap-3 md:order-none order-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp us"
              className="md:hidden h-11 w-11 -mr-2 flex items-center justify-center text-ember"
            >
              <MessageCircle size={20} strokeWidth={1.5} />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="!hidden md:!inline-flex btn-ember"
            >
              Book Expedition
            </a>
          </div>
        </div>
      </header>

      {/* Mobile sidebar overlay */}
      <div
        className={`fixed inset-0 z-[70] md:hidden transition-opacity duration-[400ms] ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Scrim */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-lg"
          onClick={() => setOpen(false)}
        />

        {/* Sidebar panel — dark theme */}
        <aside className="absolute right-0 top-0 h-full w-[84vw] max-w-[360px] bg-background/98 backdrop-blur-2xl border-l border-border shadow-2xl flex flex-col safe-top px-5 text-foreground">
          {/* Sidebar header */}
          <div className="h-14 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={backpackerAvatar}
                alt="Backpacker avatar"
                className="h-7 w-7 rounded-full border-2 border-ember shadow-sm object-cover"
              />
              <BrandMark compact className="h-8 w-auto text-foreground" />
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-11 w-11 -mr-2 flex items-center justify-center text-foreground"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          {/* Sidebar nav links */}
          <nav className="flex-1 flex flex-col justify-center gap-1">
            {NAV_LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleSmoothScroll(e, l.href, () => setOpen(false))}
                className="font-sans text-[1.45rem] font-medium tracking-tight py-3 text-foreground hover:text-ember transition-colors"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(14px)",
                  transition: `opacity 420ms ${80 + i * 45}ms ease, transform 420ms ${80 + i * 45}ms cubic-bezier(0.16,1,0.3,1)`,
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Sidebar footer */}
          <div className="pb-8 space-y-3">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ember w-full">
              <MessageCircle size={16} strokeWidth={1.8} />
              WhatsApp Us
            </a>
            <div className="label-mono text-center text-foreground/40 text-[9px]">
              +91 88658 48737 · @bag.n.bros
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

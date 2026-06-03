import { Instagram, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import backpackerAvatar from "@/assets/backpacker-avatar.png";

const WHATSAPP = "https://wa.me/918865848737";

function BackpackAvatar() {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full text-foreground/80"
    >
      <g
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-75"
      >
        {/* Main Backpack Body Outline */}
        <rect x="50" y="40" width="100" height="150" rx="8" />
        {/* Top Lid/Flap */}
        <path d="M45 40 H155 V65 H45 Z" fill="currentColor" fillOpacity="0.05" />
        <path d="M50 40 C50 30 150 30 150 40" />
        <path d="M100 25 V35" />
        {/* Lid Straps and Buckles */}
        <line x1="75" y1="65" x2="75" y2="120" />
        <line x1="125" y1="65" x2="125" y2="120" />
        <rect x="71" y="90" width="8" height="12" rx="2" fill="currentColor" />
        <rect x="121" y="90" width="8" height="12" rx="2" fill="currentColor" />
        {/* Front Pocket */}
        <rect x="70" y="115" width="60" height="55" rx="4" fill="currentColor" fillOpacity="0.05" />
        <line x1="70" y1="130" x2="130" y2="130" />
        {/* Side Pockets */}
        <rect x="34" y="90" width="16" height="70" rx="3" />
        <rect x="150" y="90" width="16" height="70" rx="3" />
        {/* Bedroll/Sleeping Pad */}
        <rect
          x="40"
          y="200"
          width="120"
          height="25"
          rx="12"
          fill="currentColor"
          fillOpacity="0.05"
        />
        <circle cx="52" cy="212.5" r="5" />
        <circle cx="148" cy="212.5" r="5" />
        <line x1="68" y1="190" x2="68" y2="225" />
        <line x1="132" y1="190" x2="132" y2="225" />
        <path d="M90 78 H110" />
        <path d="M90 84 H110" />
      </g>
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-surface pt-16 md:pt-24 pb-10 px-5 md:px-10 border-t border-border overflow-hidden"
    >
      {/* BackpackAvatar watermark in corner */}
      <div className="absolute bottom-0 right-0 w-[230px] md:w-[320px] h-auto pointer-events-none select-none opacity-[0.09] z-0">
        <BackpackAvatar />
      </div>

      {/* Ember accent line at top */}
      <div className="absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-ember/30 to-transparent" />

      <div className="mx-auto max-w-[1500px]">
        {/* Partnership Logos Bar */}
        <div className="border-b border-border pb-8 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-8 opacity-25 hover:opacity-45 transition-opacity duration-300">
            <span className="text-[9px] tracking-[0.25em] font-mono text-foreground/40 uppercase w-full lg:w-auto text-center lg:text-left mb-2 lg:mb-0">
              IN PARTNERSHIP WITH
            </span>
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-10 gap-y-5 flex-1">
              <div className="flex items-center gap-2 select-none">
                <svg
                  className="w-4 h-4 text-foreground/75"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 20L12 4L21 20H3Z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 20L12 14L15 20" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-mono text-[9px] tracking-widest font-semibold text-foreground/75">
                  MOUNTAIN LABS
                </span>
              </div>
              <div className="flex items-center gap-2 select-none">
                <svg
                  className="w-4 h-4 text-foreground/75"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
                </svg>
                <span className="font-mono text-[9px] tracking-widest font-semibold text-foreground/75">
                  TREKKER CO
                </span>
              </div>
              <div className="flex items-center gap-2 select-none">
                <svg
                  className="w-4 h-4 text-foreground/75"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M2 20L8.5 7L15 20" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20L17 11L22 20" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-mono text-[9px] tracking-widest font-semibold text-foreground/75">
                  HIMALAYAS EST. 2024
                </span>
              </div>
              <div className="flex items-center gap-2 select-none">
                <svg
                  className="w-4 h-4 text-foreground/75"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M9 20l-5-3V4l5 3 6-3 5 3v13l-5-3-6 3z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M9 7v13" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 4v13" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-mono text-[9px] tracking-widest font-semibold text-foreground/75">
                  ROAM ASSOC.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Tagline with Backpacker Avatar */}
        <div className="grid grid-cols-12 gap-6 mb-14 md:mb-16">
          <div className="col-span-12 md:col-span-9">
            <div className="flex items-center gap-5 mb-5">
              <img
                src={backpackerAvatar}
                alt="Backpacker avatar"
                className="w-16 h-16 rounded-full object-cover border-2 border-ember shadow-lg shadow-ember/20 flex-shrink-0"
              />
              <div className="label-mono text-ember">Born to Roam</div>
            </div>
            <h2 className="font-display text-display-lg leading-[0.96] max-w-3xl text-foreground/90">
              The mountains are still
              <br />
              <em className="italic text-ember">calling</em>.
            </h2>
            <p className="mt-6 text-body-lg text-foreground/75 max-w-md">
              Tell us where you want to disappear to. We will plan the rest.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ember mt-8">
              <MessageCircle size={14} strokeWidth={1.8} />
              Start a conversation
            </a>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-12 gap-y-10 gap-x-6 border-t border-border pt-12">
          {/* Brand Mark & Description */}
          <div className="col-span-12 md:col-span-4">
            <BrandMark compact className="h-10 md:h-11 w-auto text-foreground mb-5" />
            <p className="text-sm text-foreground/70 max-w-xs leading-relaxed">
              Offbeat Himalayan expeditions. Small batches. Slow roads. Real stories.
            </p>
          </div>

          {/* Explore Links */}
          <div className="col-span-6 md:col-span-2">
            <div className="label-mono mb-4 text-foreground/80">Explore</div>
            <ul className="space-y-3 text-sm text-foreground/75">
              <li>
                <a href="#munsiyari" className="hover:text-ember transition-colors">
                  Munsiyari
                </a>
              </li>
              <li>
                <a href="#hidden" className="hover:text-ember transition-colors">
                  Hidden Spots
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-ember transition-colors">
                  Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Trust Stats */}
          <div className="col-span-6 md:col-span-2">
            <div className="label-mono mb-4 text-foreground/80">Trust</div>
            <ul className="space-y-3 text-sm text-foreground/60">
              <li>10,000+ travelers</li>
              <li>100+ Google reviews</li>
              <li>4.9 star average rating</li>
              <li>Trusted properties</li>
            </ul>
          </div>

          {/* Reach Us / Social Links */}
          <div className="col-span-12 md:col-span-4">
            <div className="label-mono mb-4 text-foreground/80">Reach us</div>
            <div className="space-y-3 text-sm text-foreground/75">
              <a
                href="https://instagram.com/bag.n.bros"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group hover:text-ember transition-colors"
              >
                <Instagram size={15} strokeWidth={1.5} />
                @bag.n.bros
                <ArrowUpRight
                  size={12}
                  strokeWidth={1.5}
                  className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group hover:text-ember transition-colors"
              >
                <MessageCircle size={15} strokeWidth={1.5} />
                +91 88658 48737
              </a>
              <a
                href="mailto:hello@bagnbros.in"
                className="flex items-center gap-3 group hover:text-ember transition-colors"
              >
                <Mail size={15} strokeWidth={1.5} />
                hello@bagnbros.in
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 label-mono text-foreground/40 text-[9px]">
          <div>© {new Date().getFullYear()} Bag N' Bros · Born to Roam</div>
          <div>Manali · Delhi · The Hills</div>
        </div>
      </div>
    </footer>
  );
}

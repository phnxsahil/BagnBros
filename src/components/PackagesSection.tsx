import { useEffect, useRef, useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import { touristyImages } from "@/lib/touristy-images";

interface Package {
  name: string;
  tagline: string;
  price: string;
  duration: string;
  includes: string[];
  ideal: string;
  whatsappText: string;
  image: string;
}

const WHATSAPP_NUM = "918865848737";

const packages: Package[] = [
  {
    name: "Weekend Escape",
    tagline: "Quick mountain reset",
    price: "Rs 7,999",
    duration: "3D / 2N",
    ideal: "First-timers, short breaks",
    whatsappText:
      "Hi Bag N' Bros! I would like to book the Weekend Escape package (3D/2N at Rs 7,999/person). Please share upcoming dates and slot availability.",
    image: touristyImages.packageWeekend,
    includes: [
      "AC transport from Delhi",
      "Stay in boutique homestays",
      "All local meals included",
      "1 guided alpine meadow trek",
      "Trip captain and first-aid support",
    ],
  },
  {
    name: "Full Expedition",
    tagline: "The complete experience",
    price: "Rs 12,999",
    duration: "6D / 5N",
    ideal: "Most popular choice",
    whatsappText:
      "Hi Bag N' Bros! I'm interested in the Munsiyari Full Expedition (6D/5N at Rs 12,999/person). Please share schedule and booking steps.",
    image: touristyImages.packageFull,
    includes: [
      "Delhi to Delhi transport",
      "Premium mountain homestays",
      "All meals plus evening tea",
      "3 guided treks (Khaliya Top)",
      "High-altitude camp night",
      "Astrophotography session",
      "Medical support and insurance",
    ],
  },
  {
    name: "Custom Group",
    tagline: "Your itinerary, your pace",
    price: "Custom",
    duration: "Flexible",
    ideal: "Groups of 6+",
    whatsappText:
      "Hi Bag N' Bros! We are a group looking to plan a customized private Himalayan expedition. Please connect us with a trip designer.",
    image: touristyImages.packageCustom,
    includes: [
      "Custom dates and flexible duration",
      "Destination and activity customization",
      "Private tempo traveler or 4x4",
      "Dedicated captain and support",
      "Tailored menus and stays",
      "Complete logistics planning",
    ],
  },
];

export function PackagesSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="packages"
      ref={containerRef}
      className="relative py-16 md:py-24 px-4 md:px-10 bg-background text-foreground overflow-hidden"
    >
      <div className="mx-auto max-w-[1500px]">
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-1000 transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="label-mono text-ember mb-4">05 / Packages</div>
          <h2 className="font-display text-[8vw] sm:text-[5vw] lg:text-[3.25rem] leading-[0.96] tracking-tight text-foreground">
            Pick your{" "}
            <span className="font-display-italic text-ember italic font-normal">journey</span>.
          </h2>
          <p className="mt-5 text-sm md:text-base text-foreground/60 max-w-2xl mx-auto font-sans">
            Scenic itineraries, clear inclusions, and experiences designed for travelers who want
            real mountain memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7 items-stretch">
          {packages.map((pkg, index) => {
            const isFeatured = index === 1;
            return (
              <div
                key={pkg.name}
                className={`relative rounded-sm overflow-hidden aspect-[3/4.25] md:aspect-[3/4.1] group shadow-2xl border ${
                  isFeatured ? "border-ember md:scale-[1.02] z-10" : "border-border"
                } transition-all duration-700 ease-out transform ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 130}ms` }}
              >
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2200ms] group-hover:scale-105 img-dreamy brightness-[80%] group-hover:brightness-[65%]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

                {isFeatured && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-ember px-3 py-1 label-mono text-[9px] text-[#050505] font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7 z-20 flex flex-col justify-end h-full transition-transform duration-500 transform translate-y-12 group-hover:translate-y-0">
                  <div className="mb-4">
                    <h3 className="font-display text-2xl md:text-3xl text-white mb-1">
                      {pkg.name}
                    </h3>
                    <p className="label-mono text-ember mt-1 uppercase text-[9px] tracking-widest">
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4">
                    <div className="font-display text-3xl text-white flex items-baseline">
                      {pkg.price}
                    </div>
                    <div className="label-mono text-white/55">{pkg.duration}</div>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 space-y-4 mb-6">
                    <div className="label-mono text-white/45 text-[9px]">INCLUSIONS</div>
                    <ul className="space-y-2.5 max-h-36 overflow-y-auto pr-2">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-ember mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-white/83 leading-relaxed font-sans">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(pkg.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 font-mono text-xs tracking-wider transition-all duration-300 rounded-sm cursor-pointer ${
                      isFeatured
                        ? "bg-ember text-[#050505] font-semibold hover:bg-ember-glow hover:text-black shadow-[0_8px_24px_-6px_rgba(214,145,85,0.6)]"
                        : "border border-white/20 hover:border-ember hover:text-ember text-white bg-transparent hover:bg-white/5"
                    }`}
                  >
                    <MessageCircle size={14} strokeWidth={1.8} />
                    <span>ENQUIRE NOW</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center label-mono text-foreground/40 mt-10 text-[9px]">
          Payment plans available. Book with a Rs 2,000 deposit.
        </div>
      </div>
    </section>
  );
}

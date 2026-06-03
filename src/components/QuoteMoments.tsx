import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

type Moment = {
  quote: string;
  author: string;
  city: string;
  place: string;
  initials: string;
};

const moments: Moment[] = [
  {
    quote: "Didn't touch my phone for four days. Forgot what notifications sounded like.",
    author: "Anika Sen",
    city: "Delhi",
    place: "Khaliya Top",
    initials: "AS",
  },
  {
    quote: "The mountain slows something inside you. I came back moving at a different speed.",
    author: "Rohan Nair",
    city: "Bengaluru",
    place: "Munsiyari",
    initials: "RN",
  },
  {
    quote: "Still thinking about that sunrise. Pretty sure I left a part of my soul up there.",
    author: "Meera Joshi",
    city: "Mumbai",
    place: "The Secret Spot",
    initials: "MJ",
  },
  {
    quote: "We went in search of a holiday but came back with family.",
    author: "Kabir Malhotra",
    city: "Pune",
    place: "Bir Billing Valley",
    initials: "KM",
  },
];

export function QuoteMoments() {
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
      id="testimonials"
      ref={containerRef}
      className="relative bg-background text-foreground py-16 md:py-24 px-4 md:px-10 border-t border-border overflow-hidden"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-5">
          <div>
            <div className="label-mono text-ember mb-4">07 / Traveler Stories</div>
            <h2 className="font-display text-[8vw] sm:text-[5vw] lg:text-[3.25rem] leading-[0.96] text-foreground">
              From our{" "}
              <span className="font-display-italic text-ember italic font-normal">travelers</span>.
            </h2>
          </div>
          <p className="text-sm text-foreground/60 max-w-xs md:text-right font-sans">
            Real experiences from people who stepped off the grid and walked the mountain roads with
            us.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x-mandatory snap-start">
          {moments.map((m, i) => (
            <article
              key={i}
              className={`snap-center shrink-0 w-[82vw] sm:w-[58vw] md:w-[38vw] lg:w-[28vw] bg-surface/90 backdrop-blur-sm border border-border p-5 md:p-7 rounded-sm shadow-xl flex flex-col justify-between aspect-[4/3.35] group hover:border-ember/30 transition-all duration-500 transform ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex justify-between items-start">
                <Quote size={24} className="text-ember/35" />
                <span className="label-mono text-[9px] text-foreground/30">
                  LOG {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <blockquote className="font-display-italic italic text-base md:text-lg text-foreground leading-relaxed my-5 font-normal">
                "{m.quote}"
              </blockquote>

              <div className="flex items-center gap-3 border-t border-border pt-4">
                <div className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center label-mono text-xs text-ember font-bold select-none">
                  {m.initials}
                </div>
                <div>
                  <h4 className="font-display text-sm text-foreground leading-none mb-1.5">
                    {m.author}
                  </h4>
                  <div className="label-mono text-[8px] text-foreground/50 tracking-wider">
                    {m.city} - <span className="text-ember">{m.place}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

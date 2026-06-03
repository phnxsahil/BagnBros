import { useEffect, useRef, useState } from "react";
import storyCamp from "@/assets/story-camp.jpg";
import storyTrekker from "@/assets/story-trekker.jpg";
import prayerFlags from "@/assets/prayer-flags.png";

const journals = [
  {
    title: "The Road to Munsiyari",
    excerpt:
      "The mountains don't reveal themselves all at once. First, there's the winding road through pine forests. Then the villages where time moves differently. Finally, the peaks — distant, cold, and patient.",
    image: storyTrekker,
    date: "March 2026",
    timestamp: "[14:32:05 · BIRTHI WATERFALL]",
    hindiText: "रास्ता और यादें",
  },
  {
    title: "Morning in Bir Billing",
    excerpt:
      "5 AM. Monastery bells. Prayer flags catching first light. The valley still wrapped in mist. This is the quiet hour before the thermal pilots wake up and take to the skies.",
    image: storyCamp,
    date: "February 2026",
    timestamp: "[05:12:44 · BILLING LAUNCH]",
    hindiText: "हवा का शोर",
  },
];

export function FieldJournal() {
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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="journals"
      ref={containerRef}
      className="relative pb-24 md:pb-32 bg-surface-warm text-foreground border-t border-border overflow-hidden"
    >
      {/* Cinematic Photographic Banner of real prayer flags with slow scale transition */}
      <div className="relative w-full h-[40vh] md:h-[55vh] overflow-hidden border-b border-border mb-16 md:mb-20">
        <img
          src={prayerFlags}
          alt="Tibetan prayer flags against snowy mountains"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[75%] contrast-[1.10] transition-transform duration-[3000ms] ease-out"
          style={{
            transform: visible ? "scale(1.03)" : "scale(1.10)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-warm via-surface-warm/60 to-black/15 z-10" />

        {/* Poetic overlay metadata */}
        <div className="absolute bottom-6 left-6 md:left-12 z-20 font-mono text-[10px] tracking-[0.22em] text-white select-none drop-shadow-sm flex flex-col gap-1.5">
          <span className="text-ember font-semibold font-sans text-xs md:text-sm tracking-normal">
            हवा का शोर — The flags carry quiet stories in the wind
          </span>
          <span className="text-white/60">KHALIYA RIDGE · 3,250M · [30°04'N · 80°14'E]</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        {/* Editorial Title Block */}
        <div
          className={`grid grid-cols-12 gap-6 items-end mb-20 transition-all duration-1000 transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="col-span-12 md:col-span-8">
            <span className="label-mono text-ember mb-4 block">06 / Field Notes</span>
            <h2 className="font-display text-display-lg leading-[0.96] tracking-tight">
              Stories from <em className="italic text-ember">the trail</em>.
            </h2>
          </div>
          {/* Scratched note container */}
          <div className="col-span-12 md:col-span-4 scratch-note border border-border p-5 rounded-sm md:translate-y-4">
            <div className="label-mono text-[9px] text-foreground/40 mb-2">Expedition Log Entry</div>
            <div className="font-mono text-xs text-foreground/80 leading-relaxed">
              [ALTITUDE: 2,200m - 3,500m]
              <br />
              [DEVICE: MOUNT JOURNAL 04]
              <br />
              <span className="text-ember font-semibold font-sans mt-2 block">
                रुकना मत — हवा का शोर
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {journals.map((journal, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-1000 transform ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-sm bg-surface grain border border-border ${
                    !isEven ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={journal.image}
                    alt={journal.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105 filter grayscale-[20%] brightness-75"
                  />
                  <div className="absolute inset-0 bg-black/5" />
                  <div className="absolute inset-0 vignette opacity-20" />
                  {/* Small Hindi phrase over image */}
                  <div className="absolute bottom-4 left-4 bg-background/70 backdrop-blur-sm px-2.5 py-1 text-[9px] font-semibold text-foreground tracking-widest uppercase font-sans">
                    {journal.hindiText}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 font-mono text-[10px] text-foreground/50 select-none">
                    <span>{journal.date}</span>
                    <span>·</span>
                    <span className="text-ember font-semibold tracking-wider">
                      {journal.timestamp}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
                    {journal.title}
                  </h3>
                  <p className="text-body-lg text-foreground/85 leading-relaxed font-sans">
                    {journal.excerpt}
                  </p>
                  <a
                    href="https://wa.me/918865848737"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 label-mono text-ember hover:text-ember-glow transition-all"
                  >
                    <span>Read full story</span>
                    <span className="transition-transform duration-300 transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

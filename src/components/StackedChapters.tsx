import { useEffect, useRef, useState } from "react";
import { touristyImages } from "@/lib/touristy-images";

type Hidden = {
  no: string;
  name: string;
  region: string;
  altitude: string;
  coords: string;
  caption: string;
  line: string;
  image: string;
};

const hidden: Hidden[] = [
  {
    no: "01",
    name: "Bir Billing",
    region: "Himachal Pradesh",
    altitude: "2,400 m",
    coords: "N 32deg02' - E 76deg43'",
    caption: "The valley that learned to fly",
    line: "Where monks read scripture in the morning and pilots read thermals in the afternoon.",
    image: touristyImages.chapterBir,
  },
  {
    no: "02",
    name: "Shoja Valley",
    region: "Seraj - Himachal",
    altitude: "2,692 m",
    coords: "N 31deg34' - E 77deg22'",
    caption: "A village that the road forgot",
    line: "A quiet valley of homestays, tea stalls, and dense deodar forest.",
    image: touristyImages.chapterShoja,
  },
  {
    no: "03",
    name: "Munsiyari Ridge",
    region: "Kumaon - Uttarakhand",
    altitude: "2,200 m",
    coords: "N 30deg04' - E 80deg14'",
    caption: "Five sisters in the sky",
    line: "From the porch of the last homestay cottage, the peaks turn copper at dusk.",
    image: touristyImages.chapterMunsiyari,
  },
  {
    no: "04",
    name: "Chopta Meadows",
    region: "Garhwal - Uttarakhand",
    altitude: "2,680 m",
    coords: "N 30deg29' - E 79deg09'",
    caption: "The mini alpine heights",
    line: "Meadows that roll like a silent exhale, with horizons of ice.",
    image: touristyImages.chapterChopta,
  },
];

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

export function StackedChapters() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      const p = clamp(-rect.top / total, 0, 1);
      setProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const n = hidden.length;
  const t = progress * (n - 1);
  const activeIndex = Math.min(n - 1, Math.round(t));

  return (
    <section
      id="hidden"
      ref={sectionRef}
      className="relative bg-background text-foreground"
      style={{ height: `${(n + 0.45) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          className="absolute top-0 inset-x-0 z-[60] pt-20 md:pt-28 px-4 md:px-10 pointer-events-none transition-opacity duration-700"
          style={{ opacity: clamp(1 - progress * 4, 0, 1) }}
        >
          <div className="mx-auto max-w-[1500px] flex items-end justify-between gap-8">
            <div>
              <div className="label-mono mb-4 text-ember">04 / Hidden Chapters</div>
              <h2 className="font-display text-[8vw] sm:text-[5vw] lg:text-[3.25rem] leading-[0.96] tracking-tight max-w-2xl text-foreground">
                Four places the{" "}
                <span className="font-display-italic text-ember italic font-normal">map</span> tries
                to keep quiet.
              </h2>
            </div>
            <div className="hidden md:block label-mono text-right text-foreground/50">
              Stack - {n} chapters
              <br />
              <span className="text-foreground/30">Scroll to unfold</span>
            </div>
          </div>
        </div>

        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-[55] hidden md:flex flex-col items-end gap-4">
          {hidden.map((h, i) => {
            const isActive = i === activeIndex;
            return (
              <div key={h.no} className="flex items-center gap-3">
                <span
                  className={`label-mono transition-all duration-500 ${isActive ? "text-foreground opacity-100 font-semibold" : "text-foreground/30 opacity-60"}`}
                >
                  {h.no}
                </span>
                <span
                  className={`block h-px transition-all duration-700 ease-out ${isActive ? "w-12 bg-ember" : "w-6 bg-foreground/10"}`}
                />
              </div>
            );
          })}
        </div>

        <div
          className="absolute bottom-8 left-4 md:left-10 z-[55] label-mono pointer-events-none transition-opacity duration-500 text-foreground"
          style={{ opacity: progress > 0.02 ? 1 : 0 }}
        >
          <span className="font-display text-foreground text-2xl tracking-tight not-italic">
            {hidden[activeIndex].no}
          </span>
          <span className="text-foreground/30"> / 0{n}</span>
        </div>

        {hidden.map((card, i) => {
          const enter = clamp(t - (i - 1), 0, 1);
          const cover = clamp(t - i, 0, 1);
          const translateY = (1 - enter) * 100;
          const scale = 1 - cover * 0.06;
          const opacity = 1 - cover * 0.45;
          const blur = cover * 4;

          return (
            <article
              key={card.no}
              className="absolute inset-0 will-change-transform"
              style={{
                transform: `translate3d(0, ${translateY}%, 0) scale(${scale})`,
                opacity,
                filter: blur ? `blur(${blur}px)` : undefined,
                zIndex: i + 1,
                transition: "filter 200ms linear",
              }}
            >
              <Card card={card} parallaxY={enter} />
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Card({ card, parallaxY }: { card: Hidden; parallaxY: number }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        src={card.image}
        alt={card.name}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: `scale(1.15) translateY(${(1 - parallaxY) * -5}%)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent" />
      <div className="absolute top-8 right-8 font-display text-white/20 text-[15vw] leading-none select-none pointer-events-none">
        {card.no}
      </div>
      <div className="absolute bottom-0 inset-x-0 p-6 md:p-16 z-10">
        <div className="label-mono text-ember mb-3">
          Chapter {card.no} - {card.caption}
        </div>
        <h3 className="font-display text-[10vw] sm:text-[7vw] lg:text-[5rem] leading-[0.9] text-white mb-6">
          {card.name}
        </h3>
        <div className="flex flex-wrap gap-6 mb-6 font-mono text-[10px] text-white/50">
          <div>
            <span className="text-white/30">Region</span>
            <span className="text-white/80 block">{card.region}</span>
          </div>
          <div>
            <span className="text-white/30">Altitude</span>
            <span className="text-white/80 block">{card.altitude}</span>
          </div>
          <div>
            <span className="text-white/30">Coords</span>
            <span className="text-white/80 block">{card.coords}</span>
          </div>
        </div>
        <p className="text-sm md:text-base text-white/75 max-w-xl leading-relaxed font-sans">
          {card.line}
        </p>
      </div>
    </div>
  );
}

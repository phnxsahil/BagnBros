import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  Mountain,
  Calendar,
  Users,
  IndianRupee,
  Compass,
  ShieldCheck,
} from "lucide-react";
import { touristyImages } from "@/lib/touristy-images";

const WHATSAPP =
  "https://wa.me/918865848737?text=Hi%20Bag%20N%20Bros%2C%20I%20want%20to%20join%20the%20Munsiyari%20expedition.";

const itinerary = [
  {
    no: "Day 00",
    title: "Delhi -> Munsiyari Drive",
    body: "Overnight drive, 633 km. Group meets at the pickup point at 6:30 PM for a briefing with your trip captain, then we head into the night.",
  },
  {
    no: "Day 01",
    title: "Birthi Waterfall and Arrival",
    body: "A scenic mountain drive in. We stop at Birthi Waterfall on the way, then check into a cozy homestay tucked into the Munsiyari hills.",
  },
  {
    no: "Day 02",
    title: "Nanda Devi Temple and Khaliya Top",
    body: "Morning visit to the sacred temple, then the Khaliya Top trek with panoramic snow peaks and alpine meadows.",
  },
  {
    no: "Day 03",
    title: "Darkot Village and Secret Spot",
    body: "We descend to Darkot for heritage homes and traditional looms, then stop at a hidden viewpoint only our travelers see.",
    highlight: true,
  },
  {
    no: "Day 04",
    title: "Delhi Return",
    body: "Early morning arrival in Delhi. The group parts ways with quieter heads and full camera rolls.",
  },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible };
}

export function MunsiyariDossier() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="munsiyari" className="relative bg-background text-foreground overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-20 md:h-24 seam-top z-10 pointer-events-none" />

      {/* ── COVER ── */}
      <div className="relative h-[74svh] md:h-[88svh] w-full overflow-hidden bg-background">
        <img
          src={touristyImages.dossierCover}
          alt="Munsiyari ridgeline at dusk"
          className="absolute inset-0 h-full w-full object-cover img-dreamy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
        <div className="absolute inset-0 bg-foreground/5 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="absolute top-20 md:top-24 inset-x-0 px-4 md:px-10 mx-auto max-w-[1500px] flex justify-between label-mono text-foreground/40 select-none text-[9px]">
          <span className="text-ember">Next Expedition</span>
          <span>02 / Dossier</span>
        </div>

        <div className="relative z-10 h-full mx-auto max-w-[1500px] px-4 md:px-10 flex flex-col justify-end pb-12 md:pb-20">
          <div className="grid grid-cols-12 gap-5 items-end">
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-display text-display-xl text-foreground leading-[0.9]">
                Munsiyari
              </h2>
              <p className="mt-4 md:mt-6 font-display-italic text-display-md text-ember italic max-w-2xl leading-[1.1] font-normal">
                "The last village before the trail becomes unnamed."
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right text-foreground/70">
              <div className="label-mono mb-2">Kumaon - Uttarakhand</div>
              <div className="font-mono text-sm">30deg04'N - 80deg14'E</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── META STAT BAR ── */}
      <div
        ref={ref}
        className="relative px-4 md:px-10 py-12 md:py-16 border-y bg-surface/80 border-border backdrop-blur-md"
      >
        <div className="mx-auto max-w-[1500px] grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
          <MetaStat icon={Calendar} label="Duration" value="4 Nights / 5 Days" />
          <MetaStat icon={Mountain} label="Altitude" value="2,200 m" sub="Khaliya Top" />
          <MetaStat icon={Users} label="Group" value="Small batch" sub="Max 14" />
          <MetaStat icon={IndianRupee} label="From" value="6,999" sub="per person" accent />
        </div>
      </div>

      {/* ── EDITORIAL SPREAD ── */}
      <div className="relative px-4 md:px-10 py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-[1500px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-5">
              <div className="label-mono text-foreground/50">Editorial Spread</div>
              <h3 className="font-display text-[8vw] sm:text-[5vw] lg:text-[3.25rem] leading-[0.98] text-foreground">
                Five days,
                <br />
                one <span className="font-display-italic text-ember italic font-normal">
                  slow
                </span>{" "}
                arc.
              </h3>
              <p className="text-foreground/70 leading-relaxed font-sans text-sm md:text-base">
                Munsiyari is the kind of place the map almost forgot. Five days here reads like a
                slow film reel: temple at dawn, ridge at noon, hidden viewpoint at dusk.
              </p>
            </div>

            <div className="bg-surface/90 backdrop-blur-md border border-border p-5 md:p-6 rounded-sm space-y-5">
              <h4 className="label-mono text-ember border-b border-border pb-3 flex items-center gap-2">
                <Compass size={12} />
                Expedition Specifications
              </h4>
              <ul className="space-y-4 font-mono text-xs">
                <SpecRow label="MAX ALTITUDE" value="3,250 METERS" />
                <SpecRow label="ACCOMMODATION" value="COZY MOUNTAIN HOMESTAYS" />
                <SpecRow label="BATCH CAPACITY" value="MAX 14 EXPLORERS" />
                <SpecRow label="CREW LEADER" value="CERTIFIED MOUNTAIN CAPTAIN" />
                <SpecRow label="FITNESS LEVEL" value="MODERATE / BEGINNER READY" />
              </ul>
              <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-foreground/40 uppercase select-none">
                <ShieldCheck size={14} className="text-ember" />
                Safety certified equipment and protocols
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-12 gap-4 items-stretch mt-4 lg:mt-0">
            <div className="col-span-12 md:col-span-8 aspect-[4/5] overflow-hidden rounded-sm bg-surface/90 border border-border shadow-lg relative group">
              <img
                src={touristyImages.packageWeekend}
                alt="Cozy Himalayan camp under stars"
                className="w-full h-full object-cover img-dreamy hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-4 left-4 label-mono text-[9px] bg-surface/80 border border-border backdrop-blur-md px-2.5 py-1 text-foreground">
                CAMP TRAIL - KHALIYA
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 flex flex-col gap-4 justify-between">
              <div className="aspect-square overflow-hidden rounded-sm bg-surface/90 border border-border shadow-md relative group">
                <img
                  src={touristyImages.heroCardTwo}
                  alt="Trekker hiking along ridge path"
                  className="w-full h-full object-cover img-dreamy hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute bottom-3 left-3 label-mono text-[8px] bg-surface/80 border border-border backdrop-blur-sm px-2 py-0.5 text-foreground">
                  01 - RIDGEWALK
                </div>
              </div>

              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-surface/90 border border-border shadow-md relative group">
                <img
                  src={touristyImages.chapterMunsiyari}
                  alt="Traditional Himalayan village homes"
                  className="w-full h-full object-cover img-dreamy hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute bottom-3 left-3 label-mono text-[8px] bg-surface/80 border border-border backdrop-blur-sm px-2 py-0.5 text-foreground">
                  02 - DARKOT VILLAGE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── ITINERARY ── */}
      <div className="relative px-4 md:px-10 py-14 md:py-20 bg-background border-t border-border">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-10">
            <span className="label-mono text-ember">Expedition Flow</span>
            <h3 className="font-display text-2xl md:text-3xl text-foreground mt-2">
              The Detailed Itinerary
            </h3>
          </div>

          <ol className="border-t border-border max-w-4xl">
            {itinerary.map((d, i) => (
              <DayItem key={d.no} day={d} index={i} defaultOpen={i === 1} />
            ))}
          </ol>
        </div>
      </div>

      {/* ── SECRET SPOT (cinematic, keeps dark overlay on image) ── */}
      <div className="relative h-[70svh] md:h-[84svh] w-full overflow-hidden border-y border-border bg-[#0A0C10] text-white">
        <img
          src={touristyImages.secretSpot}
          alt="Himalayan temple in snow"
          className="absolute inset-0 h-full w-full object-cover img-dreamy opacity-75"
          style={{ filter: "brightness(0.65) contrast(1.12)" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute top-6 md:top-8 inset-x-0 z-20 px-4 md:px-10 flex justify-between items-start font-mono text-[9px] tracking-[0.2em] text-white/60 select-none">
          <div className="text-[#E8593C]">
            <div>LIVE SIGNAL</div>
            <div className="text-[7px] text-white/40 mt-0.5">TRANSMISSION ARCHIVE</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-white tracking-[0.3em]">BAG N BROS</div>
            <div className="text-[7px] text-white/40 mt-1">30deg04'N - 80deg14'E - EST. 2024</div>
          </div>
          <div className="text-[#E8593C] flex items-center gap-1.5 font-bold">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E8593C] animate-pulse" />
            REC
          </div>
        </div>
        <div className="relative z-10 h-full mx-auto max-w-[1500px] px-4 md:px-10 flex flex-col justify-end pb-16 md:pb-20">
          <div className="label-mono text-ember mb-3 tracking-[0.25em]">Archive Note</div>
          <h3 className="font-display italic text-display-md max-w-4xl leading-[1.05] mb-5 text-white">
            "The last village before the trail becomes unnamed. Where roads end and memory begins."
          </h3>
          <div className="label-mono text-white/40 text-[9px] flex gap-6">
            <span>LOCATION: CLASSIFIED</span>
            <span>ELEVATION: 2,500M</span>
          </div>
        </div>
      </div>

      {/* ── INCLUSIONS / EXCLUSIONS ── */}
      <div className="relative px-4 md:px-10 py-16 md:py-20 bg-surface-warm">
        <div className="absolute top-0 inset-x-0 h-20 md:h-24 seam-top pointer-events-none" />
        <div className="mx-auto max-w-[1500px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          <List
            label="Inclusions"
            title="What's in the bag."
            items={[
              "AC Volvo / Tempo Traveler - Delhi to Delhi",
              "2 nights homestay on sharing basis",
              "Experienced trip captain throughout",
              "Bonfire night (weather permitting)",
              "4 meals - 3 dinners, 3 breakfasts",
              "Tolls, parking, driver allowances",
            ]}
          />
          <List
            label="Exclusions"
            title="What's not."
            muted
            items={[
              "Meals and stays outside the itinerary",
              "Travel insurance, porterage, tips",
              "Entry fees and optional activities",
              "4x4 or snow chains if needed",
              "Force-majeure costs (weather, roadblocks)",
              "5% GST",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex justify-between border-b border-border pb-2">
      <span className="text-foreground/40">{label}</span>
      <span className="text-foreground/80 text-right font-semibold">{value}</span>
    </li>
  );
}

function MetaStat({
  icon: Icon,
  label,
  value,
  sub,
  accent,
}: {
  icon: typeof Calendar;
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 label-mono mb-3 text-foreground/50">
        <Icon
          size={12}
          strokeWidth={1.5}
          className={accent ? "text-ember" : "text-foreground/40"}
        />
        {label}
      </div>
      <div
        className={`font-display text-3xl md:text-4xl leading-none ${accent ? "text-ember" : "text-foreground"}`}
      >
        {accent && <span className="text-xl align-top">Rs </span>}
        {value}
      </div>
      {sub && <div className="mt-2 label-mono text-foreground/40">{sub}</div>}
    </div>
  );
}

function DayItem({
  day,
  index,
  defaultOpen,
}: {
  day: { no: string; title: string; body: string; highlight?: boolean };
  index: number;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <li className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full py-5 md:py-7 flex items-start gap-4 md:gap-8 text-left group min-h-[44px] cursor-pointer"
      >
        <div className="label-mono pt-1 w-14 md:w-20 shrink-0 text-foreground/40">
          {String(index).padStart(2, "0")}
        </div>
        <div className="flex-1 min-w-0">
          <div className="label-mono text-ember mb-2 flex items-center gap-2">
            {day.no}
            {day.highlight && (
              <span className="px-1.5 py-0.5 bg-ember/10 text-ember rounded-sm text-[10px]">
                Secret Spot
              </span>
            )}
          </div>
          <h4 className="font-display text-2xl md:text-4xl leading-[1.05] text-foreground group-hover:text-ember transition-colors">
            {day.title}
          </h4>
          <div
            className="grid transition-all duration-500 ease-out"
            style={{
              gridTemplateRows: open ? "1fr" : "0fr",
              opacity: open ? 1 : 0,
            }}
          >
            <div className="overflow-hidden">
              <p className="mt-4 md:mt-5 text-sm md:text-base text-foreground/70 leading-relaxed max-w-2xl font-sans">
                {day.body}
              </p>
            </div>
          </div>
        </div>
        <ChevronDown
          size={20}
          strokeWidth={1.5}
          className={`mt-2 shrink-0 text-foreground/40 transition-transform duration-500 ${open ? "rotate-180 text-ember" : ""}`}
        />
      </button>
    </li>
  );
}

function List({
  label,
  title,
  items,
  muted,
}: {
  label: string;
  title: string;
  items: string[];
  muted?: boolean;
}) {
  return (
    <div>
      <div className={`label-mono mb-4 ${muted ? "text-foreground/40" : "text-ember"}`}>
        {label}
      </div>
      <h4 className="font-display text-3xl md:text-4xl leading-[1.05] mb-8 text-foreground">
        {title}
      </h4>
      <ul className="space-y-4 text-sm md:text-base">
        {items.map((it) => (
          <li key={it} className="flex gap-4 text-foreground/70 leading-relaxed">
            <span className={`mt-2.5 h-px w-5 shrink-0 ${muted ? "bg-foreground/20" : "bg-ember"}`} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

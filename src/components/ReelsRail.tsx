import { useEffect, useRef, useState } from "react";
import { MessageCircle, ArrowRight, PlayCircle } from "lucide-react";
import { touristyImages } from "@/lib/touristy-images";

const WHATSAPP =
  "https://wa.me/918865848737?text=Hi%20Bag%20N%20Bros%2C%20I%20want%20to%20plan%20a%20mountain%20trip.";

type ReelItem = {
  title: string;
  body: string;
  image: string;
  kind: "image" | "video";
  videoSrc?: string;
};

const reels: ReelItem[] = [
  {
    title: "Morning roads",
    body: "Slow mountain drives and the kind of light that makes every stop feel like a postcard.",
    image: touristyImages.heroBackdrop,
    kind: "video",
    videoSrc:
      "https://player.vimeo.com/external/435674703.hd.mp4?s=7847c1775e52c502573d8eb57b6f7c9e0d9b4b3c&profile_id=170&oauth2_token_id=57447761",
  },
  {
    title: "Prayer flags in wind",
    body: "A memory wall for the clips and stills you’ll add later, ready for looping travel stories.",
    image: touristyImages.reelsTimelapse,
    kind: "video",
    videoSrc:
      "https://player.vimeo.com/external/393275722.hd.mp4?s=12e0220cb6453f2c5d808c1f964402636a0d33e5&profile_id=174&oauth2_token_id=57447761",
  },
  {
    title: "Camp nights",
    body: "Firelight, silhouettes, and the warm pause that happens after the day’s last walk.",
    image: touristyImages.bookingBackdrop,
    kind: "video",
    videoSrc:
      "https://player.vimeo.com/external/510850877.hd.mp4?s=d5d9c223c6c18e95080c4ef186c35c24e6ffcf1b&profile_id=174&oauth2_token_id=57447761",
  },
  {
    title: "Village mornings",
    body: "Homestay breakfasts, ridge views, and the quieter parts of the trip worth remembering most.",
    image: touristyImages.secretSpot,
    kind: "video",
    videoSrc:
      "https://player.vimeo.com/external/403844615.hd.mp4?s=0e21017efadcd117ffbe47ad8f8b88d89e5bf9c9&profile_id=174&oauth2_token_id=57447761",
  },
];

export function ReelsRail() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = railRef.current;
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
      id="immersive"
      className="relative bg-surface-warm py-16 md:py-20 px-4 md:px-10 overflow-hidden border-t border-border"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 md:mb-10">
          <div
            className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="label-mono text-ember mb-4">06 / Memory Rail</div>
            <h2 className="font-display text-[8vw] sm:text-[5vw] lg:text-[3.25rem] leading-[0.96] tracking-tight text-foreground">
              Reels, clips, and{" "}
              <span className="font-display-italic text-ember italic font-normal">
                moving memories
              </span>
              .
            </h2>
          </div>
          <p
            className={`text-sm md:text-base text-foreground/65 max-w-md transition-all duration-700 ease-out delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            This rail is ready for your future videos and trip memories. It stays horizontal,
            compact, and easy to browse on mobile.
          </p>
        </div>

        <div
          ref={railRef}
          className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar snap-x-mandatory pb-3 md:pb-4"
        >
          {reels.map((item, index) => (
            <article
              key={item.title}
              className={`snap-start shrink-0 w-[82vw] sm:w-[62vw] md:w-[36vw] lg:w-[28vw] min-h-[24rem] md:min-h-[28rem] rounded-sm overflow-hidden border border-border bg-surface/80 backdrop-blur-md shadow-xl transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 110}ms` }}
            >
              <div className="relative h-full min-h-[24rem] md:min-h-[28rem]">
                {item.kind === "video" && item.videoSrc ? (
                  <video
                    src={item.videoSrc}
                    poster={item.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover brightness-[85%] hover:scale-105 transition-transform duration-1000"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute inset-0 border border-border/30" />

                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-[9px] font-mono tracking-[0.22em] text-white/85">
                  {item.kind === "video" ? (
                    <PlayCircle size={12} className="text-ember" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                  )}
                  {item.kind === "video" ? "CLIP PLAYING" : "TRIP MEMORY"}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 z-10">
                  <div className="label-mono text-white/65 mb-3">
                    Memory {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-white/80 leading-relaxed max-w-sm font-sans">
                    {item.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 label-mono text-foreground/40 text-[9px]">
          <span>Horizontal memory rail</span>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-ember hover:text-ember-glow transition-colors"
          >
            Plan a trip
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}

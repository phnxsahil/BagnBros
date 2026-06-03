import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle, Mountain, ShieldCheck, Users } from "lucide-react";
import { touristyImages } from "@/lib/touristy-images";
import backpackerAvatar from "@/assets/backpacker-avatar.png";

const WHATSAPP_NUM = "918865848737";

function useParallax() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        setY(window.scrollY);
        ticking = false;
      });
      ticking = true;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

export function Hero() {
  const y = useParallax();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-background text-foreground flex flex-col justify-between pt-20 md:pt-28 pb-8 md:pb-10 px-4 md:px-10"
    >
      {/* Background mountain image — light & faded */}
      <div
        className="absolute inset-0 will-change-transform opacity-[0.12] pointer-events-none"
        style={{ transform: `translate3d(0, ${y * 0.16}px, 0) scale(1.05)` }}
      >
        <img
          src={touristyImages.heroBackdrop}
          alt="Sunrise over a Himalayan mountain range"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Light gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60 z-10 pointer-events-none" />

      {/* Main grid content */}
      <div className="relative z-20 mx-auto max-w-[1500px] w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-7 md:gap-10 items-center">
        {/* Left column — copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4 md:space-y-7">
          <div className="label-mono text-ember font-semibold flex items-center gap-2 tracking-[0.25em] animate-reveal-fade">
            <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
            Born to Roam - Offbeat Himalayas
          </div>

          <h1 className="font-display text-[10vw] sm:text-[7vw] lg:text-[4.8rem] leading-[0.95] tracking-tight text-foreground animate-reveal-up delay-200">
            Mountain journeys
            <br />
            with real{" "}
            <span className="font-display-italic text-ember italic font-normal">memories</span>.
          </h1>

          <p className="text-sm md:text-base max-w-md text-foreground/70 font-sans leading-relaxed animate-reveal-up delay-400">
            Touristy, cinematic Himalayan expeditions for people who want open roads, local warmth,
            and photos worth remembering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-reveal-up delay-700">
            <a href="#munsiyari" className="btn-ember">
              View Itineraries
              <ArrowRight size={14} strokeWidth={1.8} />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUM}`}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost border-foreground/15 text-foreground hover:border-ember hover:bg-ember/5"
            >
              <MessageCircle size={14} strokeWidth={1.8} />
              Talk to Trip Captain
            </a>
          </div>
        </div>

        {/* Right column — backpacker avatar + photo cards */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative w-full mt-4 lg:mt-0">
          <div className="relative w-full max-w-lg h-[320px] md:h-[420px] flex items-center justify-center select-none animate-reveal-fade delay-400">
            {/* Warm glow behind avatar */}
            <div className="absolute w-72 h-72 rounded-full bg-ember/15 blur-3xl pointer-events-none z-0" />
            <div className="absolute w-56 h-56 rounded-full bg-amber-300/10 blur-2xl pointer-events-none z-0 translate-x-8 -translate-y-4" />

            {/* Backpacker avatar illustration */}
            <img
              src={backpackerAvatar}
              alt="Backpacker illustration"
              className="absolute inset-0 w-full h-full object-contain opacity-90 pointer-events-none z-[1]"
            />

            {/* Photo card 1 */}
            <div className="absolute w-[180px] h-[232px] sm:w-[210px] sm:h-[268px] md:w-[240px] md:h-[320px] -translate-x-12 -translate-y-8 rounded-sm overflow-hidden border border-border shadow-xl bg-surface/80 backdrop-blur-md transition-transform duration-700 hover:-translate-y-10 z-10">
              <img
                src={touristyImages.heroCardOne}
                alt="Snowy mountain pass"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-2 left-2 label-mono text-[8px] text-foreground/70 bg-surface/75 px-2 py-0.5 rounded-sm">
                RIDGE VIEW
              </div>
            </div>

            {/* Photo card 2 */}
            <div className="absolute w-[166px] h-[214px] sm:w-[190px] sm:h-[244px] md:w-[220px] md:h-[290px] translate-x-14 translate-y-8 rounded-sm overflow-hidden border border-border shadow-lg bg-surface/80 backdrop-blur-md transition-transform duration-700 hover:translate-y-10 z-10">
              <img
                src={touristyImages.heroCardTwo}
                alt="Tourists walking a mountain trail"
                className="w-full h-full object-cover opacity-92 hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-2 left-2 label-mono text-[8px] text-foreground/70 bg-surface/75 px-2 py-0.5 rounded-sm">
                TRAIL MEMORIES
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="relative z-20 mx-auto max-w-[1500px] w-full mt-6 md:mt-8 animate-reveal-up delay-700">
        <div className="bg-surface/80 backdrop-blur-md border border-border rounded-sm p-4 md:p-5 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 shadow-lg">
          <div className="flex items-start gap-3">
            <Mountain size={15} className="text-ember mt-0.5" />
            <div>
              <div className="label-mono text-[9px] text-foreground/45">DESTINATIONS</div>
              <p className="text-sm text-foreground/70">
                Offbeat Himalayas with scenic tourist routes.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Users size={15} className="text-ember mt-0.5" />
            <div>
              <div className="label-mono text-[9px] text-foreground/45">GROUP STYLE</div>
              <p className="text-sm text-foreground/70">
                Small batches, social vibes, guided experiences.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck size={15} className="text-ember mt-0.5" />
            <div>
              <div className="label-mono text-[9px] text-foreground/45">TRIP CONFIDENCE</div>
              <p className="text-sm text-foreground/70">
                Verified stays, safety-first planning, clear coordination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

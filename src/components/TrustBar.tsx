import { useRef, useState, useEffect } from "react";

interface Stat {
  number: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { number: 23, suffix: "+", label: "Expeditions" },
  { number: 340, suffix: "+", label: "Members" },
  { number: 100, suffix: "%", label: "Safety Record" },
  { number: 6, suffix: "", label: "States Covered" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl text-ember leading-none">
      {count}
      {suffix}
    </span>
  );
}

export function TrustBar() {
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
      id="trust"
      ref={containerRef}
      className="relative py-16 md:py-24 px-5 md:px-10 bg-background border-b border-border overflow-hidden"
    >
      <div className="mx-auto max-w-[1500px] relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Editorial Trail Metrics Text Block */}
        <div className="flex-shrink-0 max-w-xs text-left">
          <div className="label-mono text-ember mb-2">TRAIL METRICS</div>
          <h4 className="font-display text-2xl text-foreground leading-tight">
            Verified local authority.
          </h4>
          <p className="text-xs text-foreground/50 mt-2 font-sans leading-relaxed">
            Small batches, certified safety captains, and offbeat local homestay ecosystems.
          </p>
        </div>

        {/* Ember dot separator — visible on md+ screens */}
        <div
          className="hidden md:flex flex-col items-center gap-1.5 self-stretch justify-center"
          aria-hidden="true"
        >
          <span className="w-1 h-1 rounded-full bg-ember/60" />
          <span className="w-px flex-1 bg-ember/15" />
          <span className="w-1 h-1 rounded-full bg-ember/60" />
        </div>

        {/* Horizontal ember line separator — visible on small screens */}
        <div className="flex md:hidden items-center gap-3 w-full" aria-hidden="true">
          <span className="flex-1 h-px bg-ember/15" />
          <span className="w-1.5 h-1.5 rounded-full bg-ember/50" />
          <span className="flex-1 h-px bg-ember/15" />
        </div>

        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-1000 transform ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Counter target={stat.number} suffix={stat.suffix} />
              <div className="mt-2 label-mono text-foreground/50 tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

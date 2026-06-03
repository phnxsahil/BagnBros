import { useState, useRef, useEffect } from "react";
import { MessageSquare, Calendar, User, Mail, Send, Compass } from "lucide-react";
import { touristyImages } from "@/lib/touristy-images";

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "Munsiyari",
    date: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", destination: "Munsiyari", date: "", notes: "" });
    }, 4000);
  };

  return (
    <section
      id="booking"
      ref={containerRef}
      className="relative min-h-[72vh] w-full flex items-center justify-center bg-surface-warm py-14 md:py-20 px-4 md:px-10 border-t border-border overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none select-none">
        <img
          src={touristyImages.bookingBackdrop}
          alt="Travelers near mountain camp"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-surface-warm/95 via-transparent to-surface-warm/95 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1500px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 text-left space-y-4 md:space-y-5">
          <div className="label-mono text-ember mb-2">Plan your trip</div>
          <h3 className="font-display text-[8vw] sm:text-[5vw] lg:text-[3.2rem] leading-[0.98] text-foreground">
            Let&apos;s design your
            <br />
            next <span className="font-display italic text-ember font-normal">mountain escape</span>
            .
          </h3>
          <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-sans max-w-lg">
            Tell us your destination, preferred dates, and travel style. Our trip captain will
            respond within 24 hours with a curated plan.
          </p>
        </div>

        <div
          className={`lg:col-span-6 w-full max-w-xl mx-auto bg-surface/90 border border-border backdrop-blur-lg p-5 md:p-8 rounded-sm shadow-xl transition-all duration-1000 transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {submitted ? (
            <div className="text-center py-14 space-y-4">
              <div className="h-12 w-12 rounded-full bg-ember/15 border border-ember/30 flex items-center justify-center mx-auto text-ember animate-bounce">
                <Send size={18} />
              </div>
              <h4 className="font-display text-xl text-foreground">Request Sent</h4>
              <p className="text-xs text-foreground/60 max-w-xs mx-auto font-sans leading-relaxed">
                Thanks. Our team will reach out shortly on WhatsApp and email with next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left text-foreground">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="label-mono text-[9px] text-foreground/40 flex items-center gap-1">
                    <User size={10} className="text-ember" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border border-border rounded-sm px-3.5 py-2.5 font-sans text-xs focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/30 transition-colors text-foreground placeholder:text-foreground/30"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="label-mono text-[9px] text-foreground/40 flex items-center gap-1">
                    <Mail size={10} className="text-ember" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border border-border rounded-sm px-3.5 py-2.5 font-sans text-xs focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/30 transition-colors text-foreground placeholder:text-foreground/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="label-mono text-[9px] text-foreground/40 flex items-center gap-1">
                    <Compass size={10} className="text-ember" />
                    Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="bg-background border border-border rounded-sm px-3.5 py-2.5 font-sans text-xs focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/30 transition-colors text-foreground cursor-pointer"
                  >
                    <option value="Munsiyari" className="bg-surface text-foreground">
                      Munsiyari (Uttarakhand)
                    </option>
                    <option value="Bir Billing" className="bg-surface text-foreground">
                      Bir Billing (Himachal)
                    </option>
                    <option value="Chopta Meadows" className="bg-surface text-foreground">
                      Chopta (Garhwal)
                    </option>
                    <option value="Zanskar" className="bg-surface text-foreground">
                      Zanskar (Ladakh)
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="label-mono text-[9px] text-foreground/40 flex items-center gap-1">
                    <Calendar size={10} className="text-ember" />
                    Preferred Departure
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="bg-background border border-border rounded-sm px-3.5 py-2.5 font-sans text-xs focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/30 transition-colors text-foreground cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="label-mono text-[9px] text-foreground/40 flex items-center gap-1">
                  <MessageSquare size={10} className="text-ember" />
                  Trip Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Group size, food preferences, pace, or any custom requests"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="bg-background border border-border rounded-sm px-3.5 py-2.5 font-sans text-xs focus:outline-none focus:border-ember/50 focus:ring-1 focus:ring-ember/30 transition-colors text-foreground resize-none placeholder:text-foreground/30"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-ember text-white hover:bg-ember-glow font-mono text-xs tracking-widest rounded-sm transition-all duration-300 shadow-md uppercase cursor-pointer"
              >
                SEND TRIP REQUEST
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { ChevronLeft, ChevronRight, Award, ShieldCheck, Truck, Users } from "lucide-react";

const slides = [
  {
    bg: "/images/hero-bg-1.jpg",
    headline: "Premium Trophy Manufacturer in India",
    sub: "Custom Awards • Corporate Trophies • Sports Medals",
  },
  {
    bg: "/images/hero-bg-2.jpg",
    headline: "Celebrate Success with Premium Awards",
    sub: "Handcrafted Excellence for Every Achievement",
  },
  {
    bg: "/images/hero-bg-3.jpg",
    headline: "Bulk Orders at Best Prices",
    sub: "Serving Schools • Corporates • Government Events",
  },
];

const trustBadges = [
  { icon: Award, label: "18+ Years Experience" },
  { icon: ShieldCheck, label: "100% Quality Assured" },
  { icon: Truck, label: "Pan India Delivery" },
  { icon: Users, label: "1000+ Happy Clients" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative">
      {/* Main Hero */}
      <div className="relative h-[60vh] sm:h-[75vh] md:h-[85vh] lg:h-[90vh] min-h-[400px] md:min-h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={slides[current].bg}
              alt={slides[current].headline}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/60 to-secondary/30" />
          </motion.div>
        </AnimatePresence>

        <div className="container relative z-10 h-full flex items-center px-4 sm:px-6">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="inline-block bg-primary/20 text-primary px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-heading font-medium mb-4 sm:mb-6 backdrop-blur-sm border border-primary/30">
                  ★ Trusted by 1000+ Organizations
                </span>
                <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-secondary-foreground leading-tight mb-4 sm:mb-6">
                  {slides[current].headline.split(" ").slice(0, -2).join(" ")}{" "}
                  <span className="text-gradient-gold">
                    {slides[current].headline.split(" ").slice(-2).join(" ")}
                  </span>
                </h1>
                <p className="text-sm sm:text-lg md:text-xl text-secondary-foreground/80 mb-6 sm:mb-10 font-body">
                  {slides[current].sub}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <Link
                    to="/contact"
                    className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-heading font-semibold text-sm sm:text-base hover:bg-gold-dark transition-all hover:scale-105 shadow-lg shadow-primary/30"
                  >
                    Get Free Quote
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-heading font-semibold text-sm sm:text-base hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <button onClick={prev} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-secondary/50 backdrop-blur-sm text-secondary-foreground p-2 sm:p-3 rounded-full hover:bg-primary transition-colors" aria-label="Previous slide">
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button onClick={next} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-secondary/50 backdrop-blur-sm text-secondary-foreground p-2 sm:p-3 rounded-full hover:bg-primary transition-colors" aria-label="Next slide">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? "w-6 sm:w-8 bg-primary" : "w-2 bg-secondary-foreground/40"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Trust Badges Bar */}
      <div className="bg-secondary border-t border-primary/20">
        <div className="container py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center justify-center gap-3 py-2">
                <badge.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-secondary-foreground text-xs sm:text-sm font-heading font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;

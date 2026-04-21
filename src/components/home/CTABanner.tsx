import { PHONE_1, WHATSAPP_URL } from "@/lib/constants";
import AnimatedSection from "@/components/AnimatedSection";
import { Trophy, Award, Medal } from "lucide-react";

const CTABanner = () => (
  <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[hsl(var(--secondary))] via-[hsl(36,20%,12%)] to-[hsl(var(--secondary))]">
    {/* Decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary/30 rounded-full" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/20 rounded-full" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/25 rounded-full" />
    </div>

    <div className="container relative z-10">
      <div className="flex items-center justify-between gap-8">
        {/* Left decorative icons */}
        <div className="hidden lg:flex flex-col items-center gap-6 opacity-30">
          <Trophy className="w-16 h-16 text-primary" />
          <div className="w-px h-20 bg-gradient-to-b from-primary/50 to-transparent" />
          <Award className="w-12 h-12 text-primary" />
        </div>

        {/* Center content */}
        <div className="text-center flex-1 py-4">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-6">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-heading font-medium uppercase tracking-wider">Premium Quality Guaranteed</span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary-foreground mb-4">
              Need Custom <span className="text-primary">Trophies?</span>
            </h2>
            <p className="text-secondary-foreground/60 mb-10 max-w-xl mx-auto text-lg">
              Get in touch with us today for premium custom trophies, awards, and medals at the best prices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${PHONE_1}`}
                className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-heading font-semibold hover:bg-gold-dark transition-all hover:scale-105"
              >
                Call Now
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary px-10 py-4 rounded-full font-heading font-semibold hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
              >
                WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Right decorative icons */}
        <div className="hidden lg:flex flex-col items-center gap-6 opacity-30">
          <Medal className="w-12 h-12 text-primary" />
          <div className="w-px h-20 bg-gradient-to-b from-primary/50 to-transparent" />
          <Trophy className="w-16 h-16 text-primary" />
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;

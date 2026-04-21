import { PHONE_1, WHATSAPP_URL } from "@/lib/constants";
import AnimatedSection from "@/components/AnimatedSection";

const CTABanner = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0">
      <img src="/images/banner.png" alt="Premium Trophies" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-secondary/85" />
    </div>
    <div className="container relative z-10 text-center">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary-foreground mb-4">
          Need Custom <span className="text-primary">Trophies?</span>
        </h2>
        <p className="text-secondary-foreground/70 mb-10 max-w-xl mx-auto text-lg">
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
  </section>
);

export default CTABanner;

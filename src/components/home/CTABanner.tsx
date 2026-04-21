import { PHONE_1, WHATSAPP_URL } from "@/lib/constants";
import { categoryImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";

const CTABanner = () => (
  <section className="py-20 bg-gradient-gold overflow-hidden">
    <div className="container">
      <div className="flex items-center justify-between gap-6">
        {/* Left trophies */}
        <div className="hidden md:flex items-end gap-3 shrink-0">
          <img src={categoryImages["metal-trophy"]} alt="Metal Trophy" className="w-28 lg:w-36 h-36 lg:h-44 object-contain drop-shadow-2xl" />
          <img src={categoryImages["acrylic-trophy"]} alt="Acrylic Trophy" className="w-24 lg:w-32 h-32 lg:h-40 object-contain drop-shadow-2xl -mb-2" />
        </div>

        {/* Center content */}
        <div className="text-center flex-1 py-4">
          <AnimatedSection>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3">
              Need Custom Trophies?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-sm sm:text-base lg:text-lg">
              Get in touch with us today for premium custom trophies, awards, and medals at the best prices.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href={`tel:${PHONE_1}`}
                className="bg-secondary text-secondary-foreground px-8 sm:px-10 py-3 sm:py-4 rounded-full font-heading font-semibold hover:opacity-90 transition-all hover:scale-105 text-sm sm:text-base"
              >
                Call Now
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-secondary text-secondary px-8 sm:px-10 py-3 sm:py-4 rounded-full font-heading font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-105 text-sm sm:text-base"
              >
                WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Right trophies */}
        <div className="hidden md:flex items-end gap-3 shrink-0">
          <img src={categoryImages["fiber-trophy"]} alt="Fiber Trophy" className="w-24 lg:w-32 h-32 lg:h-40 object-contain drop-shadow-2xl -mb-2" />
          <img src={categoryImages["wooden-trophy"]} alt="Wooden Trophy" className="w-28 lg:w-36 h-36 lg:h-44 object-contain drop-shadow-2xl" />
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;

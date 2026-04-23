import { Clock, Shield, Palette, Truck, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import aboutWooden from "@/assets/about-wooden.jpg";
import aboutAcrylic from "@/assets/about-acrylic.jpg";
import aboutMetal from "@/assets/about-metal.jpg";
import awardsShowcase from "@/assets/awards-showcase.jpg";

const stats = [
  { icon: Clock, label: "Years Experience", value: "18+" },
  { icon: Shield, label: "Premium Quality", value: "100%" },
  { icon: Palette, label: "Custom Designs", value: "5000+" },
  { icon: Truck, label: "Delivery", value: "Pan India" },
];

const highlights = [
  "Premium materials & craftsmanship",
  "Custom branding & engraving",
  "Bulk orders for corporates & schools",
  "Competitive pricing guaranteed",
];

const AboutCompany = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Grid */}
        <AnimatedSection direction="left">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={awardsShowcase} alt="Awards & Trophies Showcase" loading="lazy" className="w-full h-[400px] sm:h-[500px] object-cover" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4 bg-primary text-primary-foreground px-5 py-3 rounded-2xl shadow-xl font-heading font-bold text-center">
              <span className="text-2xl block">18+</span>
              <span className="text-xs">Years Trusted</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection direction="right" delay={0.2}>
          <span className="text-primary font-heading font-medium text-sm uppercase tracking-widest mb-4 block">About Xpert Awards</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            India's Trusted <span className="text-primary">Trophy & Awards</span> Manufacturer
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At Xpert Awards, we specialize in designing and manufacturing high-quality awards, trophies, medals, and corporate gifts. With 18+ years of experience, we deliver premium recognition products to schools, colleges, corporate companies, sports events, and government organizations across India.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our commitment to quality craftsmanship and attention to detail has made us a trusted name among 1000+ organizations seeking exceptional recognition solutions.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="text-foreground text-sm font-medium">{h}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-muted rounded-xl">
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-heading font-bold text-foreground text-xl">{stat.value}</p>
                <p className="text-muted-foreground text-xs">{stat.label}</p>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-heading font-semibold text-sm hover:bg-gold-dark transition-all hover:scale-105 shadow-lg shadow-primary/20"
          >
            Learn More About Us →
          </Link>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutCompany;

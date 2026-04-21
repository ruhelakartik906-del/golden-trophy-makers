import { Clock, Shield, Palette, Truck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { icon: Clock, label: "Years Experience", value: "18+" },
  { icon: Shield, label: "Premium Quality", value: "100%" },
  { icon: Palette, label: "Custom Design", value: "Unlimited" },
  { icon: Truck, label: "Fast Delivery", value: "Pan India" },
];

const AboutCompany = () => (
  <section className="py-24">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection direction="left">
          <span className="text-primary font-heading font-medium text-sm uppercase tracking-widest mb-4 block">About Us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            About <span className="text-primary">Xpert Awards</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At Xpert Awards, we specialize in designing and manufacturing high-quality awards, trophies, medals, and corporate gifts. With years of experience, we deliver premium recognition products to schools, colleges, corporate companies, sports events, and government organizations across India.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our commitment to quality craftsmanship and attention to detail has made us a trusted name among organizations seeking exceptional recognition solutions.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-start gap-3 group">
                <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-xl">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right" delay={0.2}>
          <div className="relative">
            <img
              src="/images/about-company.jpg"
              alt="Xpert Awards Trophy Collection"
              loading="lazy"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="font-heading font-bold text-3xl">18+</p>
              <p className="text-sm font-medium">Years of Excellence</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutCompany;

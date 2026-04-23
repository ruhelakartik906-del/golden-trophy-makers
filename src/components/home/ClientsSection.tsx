import { Users, Building2, GraduationCap, Landmark, Trophy, PartyPopper } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const clients = [
  { icon: GraduationCap, label: "Schools & Colleges", count: "500+" },
  { icon: Building2, label: "Corporates", count: "300+" },
  { icon: Landmark, label: "Government Bodies", count: "100+" },
  { icon: Trophy, label: "Sports Events", count: "200+" },
  { icon: PartyPopper, label: "Award Functions", count: "150+" },
  { icon: Users, label: "NGOs & Clubs", count: "100+" },
];

const ClientsSection = () => (
  <section className="py-20">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="text-primary font-heading font-medium text-sm uppercase tracking-widest mb-3 block">Our Clients</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-primary">1000+</span> Organizations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From schools to government organizations, we deliver premium trophies and awards across India
          </p>
        </div>
      </AnimatedSection>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {clients.map((client, i) => (
          <AnimatedSection key={client.label} delay={i * 0.08}>
            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all group">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <client.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-heading font-bold text-primary text-xl mb-1">{client.count}</p>
              <p className="font-heading font-medium text-foreground text-sm">{client.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;

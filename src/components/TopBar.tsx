import { Phone, Mail, MapPin } from "lucide-react";
import { PHONE_1, PHONE_2, EMAIL, WHATSAPP_URL } from "@/lib/constants";

const TopBar = () => (
  <div className="bg-secondary text-secondary-foreground text-xs hidden md:block border-b border-border/50">
    <div className="container flex items-center justify-between py-1.5">
      <div className="flex items-center gap-5">
        <a href={`tel:${PHONE_1}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Phone className="w-3 h-3 text-primary" /> +91 {PHONE_1}
        </a>
        <span className="text-border">|</span>
        <a href={`tel:${PHONE_2}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Phone className="w-3 h-3 text-primary" /> +91 {PHONE_2}
        </a>
        <span className="text-border">|</span>
        <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Mail className="w-3 h-3 text-primary" /> {EMAIL}
        </a>
      </div>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <MapPin className="w-3 h-3 text-primary" /> Laxmi Nagar, New Delhi
        </span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-medium hover:bg-gold-dark transition-colors"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;

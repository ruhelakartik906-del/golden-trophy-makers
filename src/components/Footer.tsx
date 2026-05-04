import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { PHONE_1, PHONE_2, EMAIL, ADDRESS } from "@/lib/constants";

const Footer = () => (
  <footer className="bg-[hsl(175,35%,25%)] text-white">
    <div className="container py-10 md:py-16 px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
        {/* Logo & About */}
        <div className="sm:col-span-2 md:col-span-1">
          <div className="inline-flex items-center gap-3 mb-5 bg-white rounded-2xl px-3 py-2">
            <img src="/images/logo.png" alt="Xpert Awards" className="h-20 w-auto" />
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            Creating exceptional awards and recognition pieces that celebrate achievements and inspire excellence.
          </p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/share/1EDMzMMYmU/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/xpertawards_?igsh=dnNxeTVpdDMwZzhs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Products", to: "/products" },
              { label: "Gallery", to: "/gallery" },
              { label: "FAQ", to: "/faq" },
              { label: "Contact", to: "/contact" },
              { label: "Privacy Policy", to: "/privacy" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-white/70 hover:text-primary transition-colors text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-5">Contact Info</h4>
          <div className="space-y-4 text-sm">
            <a href={`tel:${PHONE_2}`} className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              +91 {PHONE_2}
            </a>
            <a href={`tel:${PHONE_1}`} className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              +91 {PHONE_1}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              {EMAIL}
            </a>
            <div className="flex items-start gap-3 text-white/70">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{ADDRESS}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/10">
      <div className="container py-5 text-center text-xs sm:text-sm text-white/50 px-4">
        © {new Date().getFullYear()} Xpert Awards. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

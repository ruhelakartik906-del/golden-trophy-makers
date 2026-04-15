import Layout from "@/components/Layout";

const PrivacyPage = () => (
  <Layout>
    <section className="py-20 bg-gradient-dark text-secondary-foreground">
      <div className="container text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
          Your privacy is important to us
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-3xl">
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
            <p className="leading-relaxed">
              We collect information you provide directly to us, such as your name, email address, phone number, and any messages you send through our contact form or WhatsApp. We use this information solely to respond to your inquiries and provide our services.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
            <p className="leading-relaxed">
              Your information is used to process your orders, respond to inquiries, send order updates, and improve our services. We do not sell, trade, or share your personal information with third parties except as necessary to fulfill your orders.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Cookies</h2>
            <p className="leading-relaxed">
              Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality of our website.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at xpertawards23@gmail.com or call us at +91 9310651066.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPage;

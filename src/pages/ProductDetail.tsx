import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";
import { CATEGORIES, WHATSAPP_URL, PHONE_1, PRODUCT_ITEMS } from "@/lib/constants";
import { categoryImages } from "@/lib/images";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ITEMS_PER_PAGE = 12;

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = CATEGORIES.find((c) => c.slug === slug);
  const items = slug ? PRODUCT_ITEMS[slug] || [] : [];
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visibleItems = useMemo(() => items.slice(0, visibleCount), [items, visibleCount]);
  const hasMore = visibleCount < items.length;

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + items.length) % items.length);
  };

  if (!category) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">Back to Products</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-[hsl(var(--secondary))] via-[hsl(36,20%,12%)] to-[hsl(var(--secondary))]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container relative z-10">
          <Link to="/products" className="text-primary text-sm font-medium hover:underline mb-4 inline-block">← Back to Products</Link>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-secondary-foreground mb-3">
            {category.title}
          </h1>
          <p className="text-secondary-foreground/60 max-w-2xl">{category.description}</p>
        </div>
      </section>

      {/* Category Info */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-8 items-center justify-between">
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-muted-foreground">Material:</span>
                <span className="text-foreground font-medium ml-2">{category.material}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Customization:</span>
                <span className="text-primary font-medium ml-2">Available</span>
              </div>
              <div>
                <span className="text-muted-foreground">Min Order:</span>
                <span className="text-foreground font-medium ml-2">10 pieces</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-heading font-semibold text-sm hover:bg-gold-dark transition-colors"
              >
                Inquire on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_1}`}
                className="border-2 border-primary text-primary px-6 py-2.5 rounded-full font-heading font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Items Grid */}
      <section className="py-16">
        <div className="container">
          {items.length > 0 ? (
            <>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                All {category.title} Models <span className="text-muted-foreground font-normal text-base">({items.length} products)</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {visibleItems.map((item, i) => (
                  <AnimatedSection key={item.id} delay={Math.min(i * 0.05, 0.6)}>
                    <button
                      onClick={() => setLightbox(i)}
                      className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border w-full text-left"
                    >
                      <div className="aspect-square overflow-hidden bg-muted">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-heading font-semibold text-foreground text-sm">{item.name}</h3>
                        <p className="text-muted-foreground text-xs mt-1">Size: {item.size}</p>
                        <span className="text-primary text-xs font-medium mt-2 inline-block">View Details →</span>
                      </div>
                    </button>
                  </AnimatedSection>
                ))}
              </div>
              {hasMore && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                    className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold text-sm hover:bg-gold-dark transition-colors"
                  >
                    Load More ({items.length - visibleCount} remaining)
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <img src={categoryImages[category.slug]} alt={category.title} className="w-64 h-64 object-cover rounded-2xl mx-auto mb-6 shadow-lg" />
                <h2 className="font-heading text-xl font-bold text-foreground mb-3">Products Coming Soon</h2>
                <p className="text-muted-foreground text-sm mb-6">Contact us on WhatsApp for the latest catalog and pricing.</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold text-sm hover:bg-gold-dark transition-colors inline-block"
                >
                  Get Catalog on WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && items[lightbox] && (
        <div className="fixed inset-0 z-50 bg-secondary/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-secondary-foreground hover:text-primary z-10" aria-label="Close" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-foreground hover:text-primary z-10" onClick={(e) => { e.stopPropagation(); navigate(-1); }} aria-label="Previous">
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-foreground hover:text-primary z-10" onClick={(e) => { e.stopPropagation(); navigate(1); }} aria-label="Next">
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="text-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[lightbox].image}
              alt={items[lightbox].name}
              className="max-w-full max-h-[70vh] rounded-2xl shadow-2xl mx-auto"
            />
            <div className="mt-4">
              <p className="text-secondary-foreground font-heading font-semibold text-lg">{items[lightbox].name}</p>
              <p className="text-secondary-foreground/60 text-sm">Size: {items[lightbox].size}</p>
              <a
                href={`https://wa.me/91${PHONE_1}?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(items[lightbox].name)}%20(${encodeURIComponent(items[lightbox].size)})`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-primary text-primary-foreground px-6 py-2 rounded-full font-heading font-semibold text-sm hover:bg-gold-dark transition-colors"
              >
                Inquire About This Trophy
              </a>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProductDetail;

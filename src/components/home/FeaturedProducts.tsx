import { Link } from "react-router-dom";
import { CATEGORIES } from "@/lib/constants";
import { categoryImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";

const products = CATEGORIES.map((c) => ({ title: c.title, slug: c.slug, image: categoryImages[c.slug], material: c.material }));

const FeaturedProducts = () => {
  return (
    <section className="py-24">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-primary font-heading font-medium text-sm uppercase tracking-widest mb-3 block">Our Products</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Featured <span className="text-primary">Products</span>
            </h2>
            <p className="text-muted-foreground mt-3">Premium trophies, medals & corporate gifts crafted with excellence</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <Link to={`/products/${product.slug}`} className="group block">
                <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50">
                  <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-1">{product.title}</h3>
                    <p className="text-muted-foreground text-xs mb-3">{product.material}</p>
                    <span className="inline-flex items-center gap-1.5 text-primary text-sm font-heading font-semibold group-hover:gap-2.5 transition-all">
                      View Products <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

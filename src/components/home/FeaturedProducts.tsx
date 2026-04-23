import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/constants";
import { categoryImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";

const products = CATEGORIES.map((c) => ({
  title: c.title,
  slug: c.slug,
  image: categoryImages[c.slug],
  description: c.description,
}));

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-muted/40">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-primary font-heading font-medium text-sm uppercase tracking-widest mb-3 block">
              What We Offer
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our Premium <span className="text-primary">Collection</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Discover our wide range of trophies, medals & corporate gifts crafted for excellence
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group border border-border/40 flex flex-col h-full">
                {/* Image */}
                <div className="relative bg-gradient-to-br from-muted to-background p-6 flex items-center justify-center min-h-[260px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="max-h-[220px] w-auto object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 text-center">
                  <h3 className="font-heading font-bold text-foreground text-xl mb-3">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {product.description}
                  </p>
                  <Link
                    to={`/products/${product.slug}`}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-heading font-semibold text-sm hover:brightness-110 hover:scale-105 transition-all duration-300 mx-auto"
                  >
                    Explore Our Products
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

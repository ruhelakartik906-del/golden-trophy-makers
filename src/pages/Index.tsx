import Layout from "@/components/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import CategoriesSlider from "@/components/home/CategoriesSlider";
import AboutCompany from "@/components/home/AboutCompany";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WorkProcess from "@/components/home/WorkProcess";

import ClientsSection from "@/components/home/ClientsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HomeFAQ from "@/components/home/HomeFAQ";
import CTABanner from "@/components/home/CTABanner";
import CitiesSection from "@/components/home/CitiesSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => (
  <Layout>
    <HeroSlider />
    <CategoriesSlider />
    <AboutCompany />
    <FeaturedProducts />
    <WhyChooseUs />
    <WorkProcess />
    <GalleryGrid />
    <ClientsSection />
    <TestimonialsSection />
    <HomeFAQ />
    <CTABanner />
    <CitiesSection />
    <ContactSection />
  </Layout>
);

export default Index;

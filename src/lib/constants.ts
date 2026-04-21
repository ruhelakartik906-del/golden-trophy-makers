export const PHONE_1 = "9310651066";
export const PHONE_2 = "9315879315";
export const EMAIL = "xpertawards23@gmail.com";
export const WHATSAPP_URL = `https://wa.me/91${PHONE_1}?text=Hi%20Xpert%20Awards%2C%20I%20am%20interested%20in%20your%20products.`;
export const ADDRESS = "Shop No. - 2/73, GF, Lalita Park, Near Gurudwara, Laxmi Nagar, New Delhi, 110092";

export const CATEGORIES = [
  {
    slug: "wooden-trophy",
    title: "Wooden Trophy",
    description: "Personalized trophies designed to celebrate unique achievements with premium materials and craftsmanship.",
    material: "Premium Wood with Metal/Gold Plating",
  },
  {
    slug: "acrylic-trophy",
    title: "Acrylic Trophy",
    description: "Corporate and academic recognition pieces that honor excellence and motivate continued success.",
    material: "High-grade Acrylic Crystal",
  },
  {
    slug: "fiber-trophy",
    title: "Fiber Trophy",
    description: "Grand championship trophies and awards for sporting events, competitions, and tournaments.",
    material: "Durable Fiber with Gold/Silver Finish",
  },
  {
    slug: "metal-trophy",
    title: "Metal Trophy",
    description: "High-quality metal trophies designed to showcase remarkable achievements with lasting elegance.",
    material: "Brass / Stainless Steel / Zinc Alloy",
  },
  {
    slug: "sports-medals",
    title: "Sports Medals",
    description: "Elegant and customizable medals perfect for corporate events, clients, and employee recognition.",
    material: "Metal with Custom Ribbon",
  },
  {
    slug: "corporate-gifts",
    title: "Corporate Gifts",
    description: "Complete award solutions for schools, colleges, and large-scale events with custom branding.",
    material: "Mixed Premium Materials",
  },
] as const;

export interface ProductItem {
  id: string;
  name: string;
  image: string;
  size: string;
}

export const PRODUCT_ITEMS: Record<string, ProductItem[]> = {
  "wooden-trophy": [
    { id: "TRO-W1", name: "TRO - W1", image: "/images/products/wooden/TRO-W1.jpg", size: '11x6" inch' },
    { id: "TRO-W2", name: "TRO - W2", image: "/images/products/wooden/TRO-W2.jpg", size: '7x9" inch' },
    { id: "TRO-W3", name: "TRO - W3", image: "/images/products/wooden/TRO-W3.jpg", size: '8" inch' },
    { id: "TRO-W5", name: "TRO - W5", image: "/images/products/wooden/TRO-W5.jpg", size: '9"X9" inch' },
    { id: "TRO-W7", name: "TRO - W7", image: "/images/products/wooden/TRO-W7.jpg", size: '10x4" inch' },
    { id: "TRO-W8", name: "TRO - W8", image: "/images/products/wooden/TRO-W8.jpg", size: '10"X10" inch' },
    { id: "TRO-W9", name: "TRO - W9", image: "/images/products/wooden/TRO-W9.jpg", size: '10"X4.5" inch' },
    { id: "TRO-W10", name: "TRO - W10", image: "/images/products/wooden/TRO-W10.jpg", size: '7"X9" inch' },
    { id: "TRO-W11", name: "TRO - W11", image: "/images/products/wooden/TRO-W11.jpg", size: '10x8" inch' },
    { id: "TRO-W12", name: "TRO - W12", image: "/images/products/wooden/TRO-W12.jpg", size: '8"x8" inch' },
    { id: "TRO-W13", name: "TRO - W13", image: "/images/products/wooden/TRO-W13.jpg", size: '8"x8" inch' },
    { id: "TRO-W14", name: "TRO - W14", image: "/images/products/wooden/TRO-W14.jpg", size: '9.5"x9.5" inch' },
    { id: "TRO-W15", name: "TRO - W15", image: "/images/products/wooden/TRO-W15.jpg", size: '10"x8" inch' },
    { id: "TRO-W16", name: "TRO - W16", image: "/images/products/wooden/TRO-W16.jpg", size: '11"x6" inch' },
    { id: "TRO-W17", name: "TRO - W17", image: "/images/products/wooden/TRO-W17.jpg", size: '8"x10" inch' },
    { id: "TRO-W18", name: "TRO - W18", image: "/images/products/wooden/TRO-W18.jpg", size: '10.75"x4" inch' },
    { id: "TRO-W19", name: "TRO - W19", image: "/images/products/wooden/TRO-W19.jpg", size: '8"x4" inch' },
    { id: "TRO-W20", name: "TRO - W20", image: "/images/products/wooden/TRO-W20.jpg", size: '6x8" 8x10" 9x12" inch' },
    { id: "TRO-W21", name: "TRO - W21", image: "/images/products/wooden/TRO-W21.jpg", size: '10.5" inch' },
    { id: "TRO-W22", name: "TRO - W22", image: "/images/products/wooden/TRO-W22.jpg", size: '10" inch' },
    { id: "TRO-W23", name: "TRO - W23", image: "/images/products/wooden/TRO-W23.jpg", size: '10"x8" inch' },
    { id: "TRO-W24", name: "TRO - W24", image: "/images/products/wooden/TRO-W24.jpg", size: '9"x9" inch' },
    { id: "TRO-W25", name: "TRO - W25", image: "/images/products/wooden/TRO-W25.jpg", size: '6x8" 8x10" 9x12" 12x16" inch' },
    { id: "TRO-W26", name: "TRO - W26", image: "/images/products/wooden/TRO-W26.jpg", size: '10" inch' },
    { id: "TRO-W27", name: "TRO - W27", image: "/images/products/wooden/TRO-W27.jpg", size: '10"x8" inch' },
    { id: "TRO-W28", name: "TRO - W28", image: "/images/products/wooden/TRO-W28.jpg", size: '10"x8" inch' },
    { id: "TRO-W29", name: "TRO - W29", image: "/images/products/wooden/TRO-W29.jpg", size: '10"x10" inch' },
    { id: "TRO-W30", name: "TRO - W30", image: "/images/products/wooden/TRO-W30.jpg", size: '7"x10" inch' },
    { id: "TRO-W31", name: "TRO - W31", image: "/images/products/wooden/TRO-W31.jpg", size: 'Small / Medium / Big' },
    { id: "TRO-W32", name: "TRO - W32", image: "/images/products/wooden/TRO-W32.jpg", size: '9.5"x9.5" inch' },
    { id: "TRO-W33", name: "TRO - W33", image: "/images/products/wooden/TRO-W33.jpg", size: 'Big / Medium / Small' },
    { id: "TRO-W34", name: "TRO - W34", image: "/images/products/wooden/TRO-W34.jpg", size: '10" inch' },
    { id: "TRO-W35", name: "TRO - W35", image: "/images/products/wooden/TRO-W35.jpg", size: '5.85"x10.8" inch' },
    { id: "TRO-W36", name: "TRO - W36", image: "/images/products/wooden/TRO-W36.jpg", size: '4.75"x9.75" inch' },
    { id: "TRO-W37", name: "TRO - W37", image: "/images/products/wooden/TRO-W37.jpg", size: '5.85"x8.5" inch' },
    { id: "TRO-W38", name: "TRO - W38", image: "/images/products/wooden/TRO-W38.jpg", size: '5.5"x10.5" inch' },
    { id: "TRO-W39", name: "TRO - W39", image: "/images/products/wooden/TRO-W39.jpg", size: '6.85"x9.85" inch' },
    { id: "TRO-W40", name: "TRO - W40", image: "/images/products/wooden/TRO-W40.jpg", size: '5.4"x11" inch' },
    { id: "TRO-W41", name: "TRO - W41", image: "/images/products/wooden/TRO-W41.jpg", size: '10"x8" inch' },
    { id: "TRO-W42", name: "TRO - W42", image: "/images/products/wooden/TRO-W42.jpg", size: '10"x8" inch' },
    { id: "TRO-W43", name: "TRO - W43", image: "/images/products/wooden/TRO-W43.jpg", size: '10x8" 9x12" inch' },
    { id: "TRO-W44", name: "TRO - W44", image: "/images/products/wooden/TRO-W44.jpg", size: '10"x8" inch' },
    { id: "TRO-W45", name: "TRO - W45", image: "/images/products/wooden/TRO-W45.jpg", size: '10"x8" inch' },
    { id: "TRO-W46", name: "TRO - W46", image: "/images/products/wooden/TRO-W46.jpg", size: '10"x8" inch' },
  ],
  "acrylic-trophy": [],
  "fiber-trophy": [],
  "metal-trophy": [],
  "sports-medals": [],
  "corporate-gifts": [],
};

export const CITIES = [
  { slug: "delhi", name: "Delhi" },
  { slug: "noida", name: "Noida" },
  { slug: "gurgaon", name: "Gurgaon" },
  { slug: "ghaziabad", name: "Ghaziabad" },
  { slug: "faridabad", name: "Faridabad" },
] as const;

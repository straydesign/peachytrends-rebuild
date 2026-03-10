export interface Product {
  slug: string;
  name: string;
  price: string;
  tag: string | null;
  image: string;
  color: string;
  description: string;
  sizes: string[];
  details: string[];
}

export const products: Product[] = [
  {
    slug: "solidarity-tee",
    name: "Solidarity Tee",
    price: "$38",
    tag: "Best Seller",
    image: "/product-tee.jpg",
    color: "Cream / Terracotta",
    description:
      "Our signature tee in premium heavyweight cotton. Screen-printed solidarity graphic on soft cream fabric with terracotta accents. Pre-shrunk, relaxed fit — wear it loud.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    details: [
      "100% heavyweight organic cotton (220 GSM)",
      "Relaxed, unisex fit",
      "Screen-printed graphic — won't crack or fade",
      "Pre-shrunk — true to size",
      "10% of proceeds supports Palestinian refugee families",
    ],
  },
  {
    slug: "purpose-hoodie",
    name: "Purpose Hoodie",
    price: "$65",
    tag: "New",
    image: "/product-hoodie.jpg",
    color: "Warm Black",
    description:
      "A midweight pullover hoodie built for everyday wear. Warm black french terry with embroidered 'Purpose' wordmark on the chest. Kangaroo pocket, ribbed cuffs, and a double-lined hood.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      "80/20 cotton-poly french terry (330 GSM)",
      "Embroidered chest wordmark",
      "Kangaroo pocket with internal phone slot",
      "Double-lined hood with flat drawcord",
      "10% of proceeds supports Palestinian refugee families",
    ],
  },
  {
    slug: "impact-crewneck",
    name: "Impact Crewneck",
    price: "$52",
    tag: null,
    image: "/product-crewneck.jpg",
    color: "Desert Sand",
    description:
      "Understated and versatile. Our crewneck sweatshirt in desert sand features a tonal embossed 'Impact' logo on the chest. Brushed fleece interior for all-season comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      "100% cotton brushed fleece (300 GSM)",
      "Tonal embossed chest logo",
      "Ribbed collar, cuffs, and hem",
      "Relaxed fit — size up for oversized look",
      "10% of proceeds supports Palestinian refugee families",
    ],
  },
  {
    slug: "community-cap",
    name: "Community Cap",
    price: "$28",
    tag: "Limited",
    image: "/product-cap.jpg",
    color: "Peachy / White",
    description:
      "A structured 6-panel cap in our signature peachy colorway with white embroidered 'Community' arc. Adjustable strapback with brass clasp. One size fits most.",
    sizes: ["One Size"],
    details: [
      "100% washed cotton twill",
      "Structured 6-panel, mid-profile crown",
      "Embroidered front arc + side logo",
      "Adjustable brass strapback closure",
      "10% of proceeds supports Palestinian refugee families",
    ],
  },
  {
    slug: "strength-long-sleeve",
    name: "Strength Long Sleeve",
    price: "$45",
    tag: null,
    image: "/product-longsleeve.jpg",
    color: "Off-White",
    description:
      "Layering essential in off-white with 'Strength' sleeve print. Midweight jersey, slightly oversized — pairs with everything from joggers to chinos.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    details: [
      "100% combed ringspun cotton (200 GSM)",
      "Sleeve graphic — screen-printed",
      "Slightly oversized, drop-shoulder fit",
      "Ribbed collar and cuffs",
      "10% of proceeds supports Palestinian refugee families",
    ],
  },
  {
    slug: "unity-plaids",
    name: "Unity Plaids",
    price: "$58",
    tag: "New",
    image: "/product-plaid-pants.jpg",
    color: "Glen Check",
    description:
      "Wide-leg plaid trousers in classic glen check. Elastic drawstring waist for comfort, side pockets, and a relaxed drape. Pair with the Solidarity Tee for the full look.",
    sizes: ["XS", "S", "M", "L", "XL"],
    details: [
      "Poly-viscose blend — lightweight with structure",
      "Elastic drawstring waistband",
      "Side slash pockets + rear welt pocket",
      "Wide-leg, relaxed fit",
      "10% of proceeds supports Palestinian refugee families",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentSlug: string, count = 3): Product[] {
  return products.filter((p) => p.slug !== currentSlug).slice(0, count);
}

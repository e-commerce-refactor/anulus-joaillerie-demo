export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  material: string;
  priceMad: number;
  originalPriceMad?: number;
  image: string;
  badge?: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "solitaire-etoile-or",
    name: "Solitaire Étoile d'Or 18K",
    subtitle: "Or Jaune 18 Carats & Diamant Synthétique D-VVS1",
    category: "Bagues",
    material: "Or 18K Garanti",
    priceMad: 2850,
    originalPriceMad: 3400,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description: "Une pièce d'exception réalisée à la main dans notre atelier à Casablanca. Éclat intemporel, monture en or jaune massif 18 carats sertie d'un diamant étincelant."
  },
  {
    id: "collier-goutte-perle",
    name: "Collier Goutte de Perle Blanche",
    subtitle: "Or Blanc 18K & Perle d'Eau Douce Naturelle",
    category: "Colliers",
    material: "Or Blanc 18K & Perle",
    priceMad: 1450,
    originalPriceMad: 1800,
    badge: "Nouveauté",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    description: "La pureté d'une perle blanche sélectionnée pour son lustre exceptionnel, suspendue à une fine chaîne forçat en or blanc 18 carats."
  },
  {
    id: "bracelet-jonc-fassi",
    name: "Bracelet Jonc Ciselé Fassi",
    subtitle: "Artisanat Maroquin d'Excellence — Or Jaune 18K",
    category: "Bracelets",
    material: "Or 18K Ciselé Main",
    priceMad: 3200,
    originalPriceMad: 3850,
    badge: "Pièce Unique",
    image: "https://images.unsplash.com/photo-1611591475870-69279a099a67?auto=format&fit=crop&w=800&q=80",
    description: "Inspiré des plus fins motifs géométriques traditionnels marocains, ce jonc articulé est une œuvre d'art portable au poignet."
  },
  {
    id: "creoles-diamants-mirage",
    name: "Créoles Pavage Diamants Mirage",
    subtitle: "Argent 925 Rhodié & Pavage Oxydes Brillants",
    category: "Boucles d'oreilles",
    material: "Argent 925 Rhodié",
    priceMad: 850,
    originalPriceMad: 1100,
    badge: "Coup de Cœur",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    description: "Créoles délicates et légères à porter au quotidien. Finition rhodiée anti-oxydation pour une brillance éternelle."
  },
  {
    id: "bague-eternite-royale",
    name: "Bague Éternité Émeraude & Or",
    subtitle: "Or Jaune 18K & Émeraudes Véritables Calibrées",
    category: "Bagues",
    material: "Or 18K & Émeraude",
    priceMad: 2400,
    originalPriceMad: 2900,
    badge: "Édition Limitée",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
    description: "Tour complet d'émeraudes lumineuses sur anneau en or jaune. L'alliance parfaite de la noblesse royale et de la modernité."
  },
  {
    id: "parure-mariage-prestige",
    name: "Parure Mariage Cérémonie Royale",
    subtitle: "Collier, Boucles & Bracelet en Écrin Luxe",
    category: "Coffrets",
    material: "Or Blanc 18K & Zirconium Triple A",
    priceMad: 4900,
    originalPriceMad: 6200,
    badge: "Prestige",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "Le coffret rêvé pour les fiançailles et mariages marocains. Présenté dans son écrin de velours vert émeraude estampillé Anulus."
  }
];

export const MOROCCAN_CITIES = [
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Fès",
  "Tanger",
  "Agadir",
  "Meknès",
  "Oujda",
  "Kénitra",
  "Tétouan",
  "Salé",
  "Mohammédia",
  "El Jadida",
  "Nador",
  "Béni Mellal"
];

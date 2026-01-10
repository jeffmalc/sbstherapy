export interface ServiceArea {
  name: string;
  slug: string;
  region: string;
  description: string;
  nearbyAreas: string[];
}

export const serviceAreas: ServiceArea[] = [
  // Toronto Region
  {
    name: "Toronto",
    slug: "toronto",
    region: "Toronto",
    description: "As Ontario's largest city, Toronto offers diverse communities and families seeking specialized autism therapy services. Our team provides comprehensive in-home ABA therapy, speech therapy, and occupational therapy throughout Toronto's many neighborhoods.",
    nearbyAreas: ["North York", "Scarborough", "Etobicoke", "East York"]
  },
  {
    name: "North York",
    slug: "north-york",
    region: "Toronto",
    description: "North York families benefit from our accessible in-home autism therapy services. We bring personalized ABA therapy, speech-language pathology, and occupational therapy directly to your home in communities like Willowdale, Don Mills, and Thornhill.",
    nearbyAreas: ["Toronto", "Vaughan", "Markham", "Richmond Hill"]
  },
  {
    name: "Scarborough",
    slug: "scarborough",
    region: "Toronto",
    description: "Serving Scarborough's multicultural communities with culturally-sensitive autism therapy services. Our therapists provide in-home ABA, speech therapy, and more throughout Scarborough, from Agincourt to Rouge Hill.",
    nearbyAreas: ["Toronto", "Pickering", "Markham", "East York"]
  },
  {
    name: "Etobicoke",
    slug: "etobicoke",
    region: "Toronto",
    description: "Etobicoke families receive dedicated in-home autism therapy services from our experienced team. We serve communities from Mimico to Rexdale with comprehensive ABA therapy, occupational therapy, and respite services.",
    nearbyAreas: ["Toronto", "Mississauga", "Brampton", "Vaughan"]
  },
  {
    name: "East York",
    slug: "east-york",
    region: "Toronto",
    description: "East York's family-friendly neighborhoods are served by our compassionate autism therapy team. We provide in-home ABA therapy, speech therapy, and therapeutic recreation services throughout the area.",
    nearbyAreas: ["Toronto", "Scarborough", "North York"]
  },

  // Peel Region
  {
    name: "Mississauga",
    slug: "mississauga",
    region: "Peel",
    description: "Mississauga is Ontario's third-largest city, and our autism therapy services reach families throughout its diverse communities. From Port Credit to Meadowvale, we provide in-home ABA therapy, speech therapy, and occupational therapy.",
    nearbyAreas: ["Toronto", "Brampton", "Oakville", "Etobicoke"]
  },
  {
    name: "Brampton",
    slug: "brampton",
    region: "Peel",
    description: "Brampton families trust our experienced therapists to deliver quality in-home autism services. We serve all Brampton neighborhoods with ABA therapy, speech-language pathology, and comprehensive family support services.",
    nearbyAreas: ["Mississauga", "Vaughan", "Caledon", "Etobicoke"]
  },
  {
    name: "Caledon",
    slug: "caledon",
    region: "Peel",
    description: "Serving Caledon's rural and suburban communities with dedicated autism therapy services. Our team travels throughout Caledon, Bolton, and surrounding areas to provide in-home ABA therapy and family support.",
    nearbyAreas: ["Brampton", "Vaughan", "King", "Orangeville"]
  },

  // York Region
  {
    name: "Vaughan",
    slug: "vaughan",
    region: "York",
    description: "Vaughan families receive top-quality autism therapy services in the comfort of home. We serve Woodbridge, Kleinburg, Maple, and Concord with ABA therapy, speech therapy, and occupational therapy services.",
    nearbyAreas: ["Richmond Hill", "Markham", "Brampton", "North York"]
  },
  {
    name: "Markham",
    slug: "markham",
    region: "York",
    description: "Markham's growing community benefits from our comprehensive autism therapy programs. Our therapists provide culturally-sensitive, in-home ABA therapy, speech therapy, and therapeutic recreation throughout Markham and Unionville.",
    nearbyAreas: ["Richmond Hill", "Vaughan", "Scarborough", "Stouffville"]
  },
  {
    name: "Richmond Hill",
    slug: "richmond-hill",
    region: "York",
    description: "Richmond Hill families access our full range of autism therapy services at home. From Oak Ridges to the historic downtown, we deliver personalized ABA therapy, speech-language pathology, and family support services.",
    nearbyAreas: ["Vaughan", "Markham", "Aurora", "Thornhill"]
  },
  {
    name: "Aurora",
    slug: "aurora",
    region: "York",
    description: "Aurora's family-focused community is served by our dedicated autism therapy team. We provide in-home ABA therapy, occupational therapy, and respite services throughout Aurora and neighboring areas.",
    nearbyAreas: ["Richmond Hill", "Newmarket", "King", "Whitchurch-Stouffville"]
  },
  {
    name: "Newmarket",
    slug: "newmarket",
    region: "York",
    description: "Newmarket families benefit from our convenient in-home autism therapy services. Our experienced therapists deliver ABA therapy, speech therapy, and comprehensive support throughout Newmarket's welcoming community.",
    nearbyAreas: ["Aurora", "East Gwillimbury", "Georgina", "King"]
  },
  {
    name: "Thornhill",
    slug: "thornhill",
    region: "York",
    description: "Serving Thornhill families with personalized autism therapy in your home. Our team provides ABA therapy, speech-language pathology, and occupational therapy services throughout Thornhill's diverse neighborhoods.",
    nearbyAreas: ["Richmond Hill", "Vaughan", "Markham", "North York"]
  },
  {
    name: "Stouffville",
    slug: "stouffville",
    region: "York",
    description: "Stouffville and Whitchurch-Stouffville families receive dedicated autism therapy services at home. We bring ABA therapy, therapeutic recreation, and family support services to your door.",
    nearbyAreas: ["Markham", "Uxbridge", "Aurora", "Pickering"]
  },
  {
    name: "King",
    slug: "king",
    region: "York",
    description: "King Township families access our specialized autism therapy services including in-home ABA therapy, speech therapy, and respite care. We serve King City, Nobleton, and Schomberg areas.",
    nearbyAreas: ["Aurora", "Newmarket", "Caledon", "Vaughan"]
  },
  {
    name: "Georgina",
    slug: "georgina",
    region: "York",
    description: "Georgina families near Lake Simcoe benefit from our in-home autism therapy programs. We serve Keswick, Sutton, and Jackson's Point with comprehensive ABA therapy and family support services.",
    nearbyAreas: ["East Gwillimbury", "Newmarket", "Brock"]
  },
  {
    name: "East Gwillimbury",
    slug: "east-gwillimbury",
    region: "York",
    description: "East Gwillimbury's growing communities receive personalized autism therapy services at home. Our team provides ABA therapy, speech therapy, and therapeutic recreation in Holland Landing, Sharon, and Queensville.",
    nearbyAreas: ["Newmarket", "Georgina", "Aurora", "Uxbridge"]
  },

  // Halton Region
  {
    name: "Oakville",
    slug: "oakville",
    region: "Halton",
    description: "Oakville families trust our autism therapy team for quality in-home services. From the lakefront to north Oakville, we deliver ABA therapy, speech therapy, and occupational therapy throughout this vibrant community.",
    nearbyAreas: ["Burlington", "Mississauga", "Milton"]
  },
  {
    name: "Burlington",
    slug: "burlington",
    region: "Halton",
    description: "Burlington's waterfront community is served by our experienced autism therapy team. We provide comprehensive in-home ABA therapy, speech-language pathology, and therapeutic recreation services.",
    nearbyAreas: ["Oakville", "Hamilton", "Milton", "Mississauga"]
  },
  {
    name: "Milton",
    slug: "milton",
    region: "Halton",
    description: "Milton is one of Canada's fastest-growing communities, and our autism therapy services are here to support local families. We offer in-home ABA therapy, speech therapy, and family respite services throughout Milton.",
    nearbyAreas: ["Oakville", "Burlington", "Halton Hills", "Mississauga"]
  },
  {
    name: "Halton Hills",
    slug: "halton-hills",
    region: "Halton",
    description: "Halton Hills families in Georgetown and Acton receive dedicated autism therapy services at home. Our team provides ABA therapy, occupational therapy, and comprehensive family support.",
    nearbyAreas: ["Milton", "Brampton", "Caledon", "Georgetown"]
  },
  {
    name: "Georgetown",
    slug: "georgetown",
    region: "Halton",
    description: "Georgetown families access our full range of autism therapy services without leaving home. We deliver personalized ABA therapy, speech therapy, and therapeutic recreation throughout this historic community.",
    nearbyAreas: ["Halton Hills", "Brampton", "Milton", "Acton"]
  },

  // Durham Region
  {
    name: "Ajax",
    slug: "ajax",
    region: "Durham",
    description: "Ajax families benefit from convenient in-home autism therapy services. Our experienced team provides ABA therapy, speech-language pathology, and occupational therapy throughout Ajax's family-friendly neighborhoods.",
    nearbyAreas: ["Pickering", "Whitby", "Scarborough"]
  },
  {
    name: "Pickering",
    slug: "pickering",
    region: "Durham",
    description: "Pickering's diverse community is served by our dedicated autism therapy team. From the waterfront to the rural north, we provide in-home ABA therapy, speech therapy, and comprehensive family support.",
    nearbyAreas: ["Ajax", "Scarborough", "Markham", "Uxbridge"]
  },
  {
    name: "Whitby",
    slug: "whitby",
    region: "Durham",
    description: "Whitby families receive personalized autism therapy services in the comfort of home. Our therapists deliver ABA therapy, occupational therapy, and therapeutic recreation throughout Brooklin and downtown Whitby.",
    nearbyAreas: ["Ajax", "Oshawa", "Pickering", "Clarington"]
  },
  {
    name: "Oshawa",
    slug: "oshawa",
    region: "Durham",
    description: "Oshawa families trust our autism therapy team for quality in-home services. We provide comprehensive ABA therapy, speech therapy, and respite services throughout Durham Region's largest city.",
    nearbyAreas: ["Whitby", "Clarington", "Scugog"]
  },
  {
    name: "Clarington",
    slug: "clarington",
    region: "Durham",
    description: "Clarington families in Bowmanville, Newcastle, and Courtice receive dedicated autism therapy at home. Our team provides ABA therapy, speech-language pathology, and family support services.",
    nearbyAreas: ["Oshawa", "Whitby", "Scugog"]
  },
  {
    name: "Uxbridge",
    slug: "uxbridge",
    region: "Durham",
    description: "Uxbridge Township families benefit from our in-home autism therapy services. We bring ABA therapy, therapeutic recreation, and comprehensive family support to this scenic community.",
    nearbyAreas: ["Stouffville", "Pickering", "Scugog", "East Gwillimbury"]
  },
  {
    name: "Scugog",
    slug: "scugog",
    region: "Durham",
    description: "Scugog families in Port Perry and surrounding areas receive personalized autism therapy services at home. Our team provides ABA therapy, occupational therapy, and respite services throughout the township.",
    nearbyAreas: ["Uxbridge", "Clarington", "Oshawa", "Brock"]
  },
  {
    name: "Brock",
    slug: "brock",
    region: "Durham",
    description: "Brock Township families access our autism therapy services in Beaverton, Cannington, and surrounding areas. We deliver in-home ABA therapy, speech therapy, and family support throughout this northern Durham community.",
    nearbyAreas: ["Scugog", "Georgina", "Uxbridge"]
  }
];

export const getServiceAreaBySlug = (slug: string): ServiceArea | undefined => {
  return serviceAreas.find(area => area.slug === slug);
};

export const getServiceAreasByRegion = (region: string): ServiceArea[] => {
  return serviceAreas.filter(area => area.region === region);
};

export const regions = [
  { name: "Toronto", color: "bg-primary", tagColor: "bg-primary/90" },
  { name: "Peel", color: "bg-accent", tagColor: "bg-accent/90" },
  { name: "York", color: "bg-emerald-600", tagColor: "bg-emerald-500" },
  { name: "Halton", color: "bg-amber-600", tagColor: "bg-amber-500" },
  { name: "Durham", color: "bg-violet-600", tagColor: "bg-violet-500" },
];

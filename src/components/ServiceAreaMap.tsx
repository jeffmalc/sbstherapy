import { MapPin } from 'lucide-react';

const serviceLocations = [
  { name: "Toronto", region: "Toronto" },
  { name: "North York", region: "Toronto" },
  { name: "Scarborough", region: "Toronto" },
  { name: "Etobicoke", region: "Toronto" },
  { name: "East York", region: "Toronto" },
  { name: "Mississauga", region: "Peel" },
  { name: "Brampton", region: "Peel" },
  { name: "Caledon", region: "Peel" },
  { name: "Vaughan", region: "York" },
  { name: "Markham", region: "York" },
  { name: "Richmond Hill", region: "York" },
  { name: "Aurora", region: "York" },
  { name: "Newmarket", region: "York" },
  { name: "Thornhill", region: "York" },
  { name: "Stouffville", region: "York" },
  { name: "King", region: "York" },
  { name: "Georgina", region: "York" },
  { name: "East Gwillimbury", region: "York" },
  { name: "Oakville", region: "Halton" },
  { name: "Burlington", region: "Halton" },
  { name: "Milton", region: "Halton" },
  { name: "Halton Hills", region: "Halton" },
  { name: "Georgetown", region: "Halton" },
  { name: "Ajax", region: "Durham" },
  { name: "Pickering", region: "Durham" },
  { name: "Whitby", region: "Durham" },
  { name: "Oshawa", region: "Durham" },
  { name: "Clarington", region: "Durham" },
  { name: "Uxbridge", region: "Durham" },
  { name: "Scugog", region: "Durham" },
  { name: "Brock", region: "Durham" },
];

const regions = [
  { name: "Toronto", color: "bg-primary", tagColor: "bg-primary/90" },
  { name: "Peel", color: "bg-accent", tagColor: "bg-accent/90" },
  { name: "York", color: "bg-emerald-600", tagColor: "bg-emerald-500" },
  { name: "Halton", color: "bg-amber-600", tagColor: "bg-amber-500" },
  { name: "Durham", color: "bg-violet-600", tagColor: "bg-violet-500" },
];

const getRegionStyle = (regionName: string) => {
  return regions.find(r => r.name === regionName) || regions[0];
};

const ServiceAreaMap = () => {
  const groupedLocations = regions.map(region => ({
    ...region,
    locations: serviceLocations.filter(loc => loc.region === region.name),
  }));

  return (
    <section id="service-area" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Service Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide in-home autism therapy across the Greater Toronto Area and surrounding regions
          </p>
        </div>

        {/* Region Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {groupedLocations.map((region) => (
            <div
              key={region.name}
              className="bg-card rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className={`${region.color} px-4 py-3`}>
                <h3 className="font-semibold text-primary-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {region.name} Region
                </h3>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {region.locations.map((location) => (
                    <span
                      key={location.name}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium ${region.tagColor} text-white`}
                    >
                      {location.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{serviceLocations.length}+</div>
            <div className="text-sm text-muted-foreground">Cities Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{regions.length}</div>
            <div className="text-sm text-muted-foreground">Regions Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">GTA-Wide</div>
            <div className="text-sm text-muted-foreground">Coverage Area</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;

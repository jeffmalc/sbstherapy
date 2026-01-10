import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { serviceAreas, regions } from '@/data/serviceAreas';
import { StaggeredItem } from '@/components/AnimatedSection';

const ServiceAreaMap = () => {
  const groupedLocations = regions.map(region => ({
    ...region,
    locations: serviceAreas.filter(loc => loc.region === region.name),
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
          {groupedLocations.map((region, regionIndex) => (
            <StaggeredItem key={region.name} index={regionIndex} staggerDelay={100} animation="fade-up">
              <div className="bg-card rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full">
                <div className={`${region.color} px-4 py-3`}>
                  <h3 className="font-semibold text-white flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {region.name} Region
                  </h3>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {region.locations.map((location, locIndex) => (
                      <Link
                        key={location.slug}
                        to={`/service-area/${location.slug}`}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium ${region.tagColor} text-white hover:opacity-80 transition-all hover:scale-105`}
                        style={{
                          animationDelay: `${(regionIndex * 100) + (locIndex * 30)}ms`
                        }}
                      >
                        {location.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </StaggeredItem>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t">
          <StaggeredItem index={0} staggerDelay={150} animation="zoom-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{serviceAreas.length}+</div>
              <div className="text-sm text-muted-foreground">Cities Served</div>
            </div>
          </StaggeredItem>
          <StaggeredItem index={1} staggerDelay={150} animation="zoom-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{regions.length}</div>
              <div className="text-sm text-muted-foreground">Regions Covered</div>
            </div>
          </StaggeredItem>
          <StaggeredItem index={2} staggerDelay={150} animation="zoom-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">GTA-Wide</div>
              <div className="text-sm text-muted-foreground">Coverage Area</div>
            </div>
          </StaggeredItem>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;

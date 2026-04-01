import { Link } from "react-router-dom";
import { citySlugMap } from "@/lib/cityLinks";
import { MapPin } from "lucide-react";

interface ServiceAreasSectionProps {
  serviceName: string;
}

const ServiceAreasSection = ({ serviceName }: ServiceAreasSectionProps) => {
  const cities = Object.entries(citySlugMap);

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">{serviceName} Near You</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We proudly serve families across the Greater Toronto Area. Click your city to learn more about our services in your area.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {cities.map(([city, slug]) => (
            <Link
              key={slug}
              to={`/service-area/${slug}`}
              className="px-4 py-2 bg-secondary/50 hover:bg-primary hover:text-primary-foreground rounded-full text-sm font-medium transition-colors border border-border hover:border-primary"
            >
              {city}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;

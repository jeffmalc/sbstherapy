import { Link } from "react-router-dom";
import { Award, ArrowRight } from "lucide-react";

const OAPBanner = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/oap"
            className="group flex items-center gap-4 bg-gradient-to-r from-secondary/15 via-secondary/10 to-primary/10 border border-secondary/30 hover:border-secondary/50 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Award className="h-6 w-6 text-secondary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-foreground text-sm md:text-base">
                OAP-Approved Provider — Your services may be funded!
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                Learn how the Ontario Autism Program can help cover therapy costs for your family.
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-secondary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OAPBanner;

import { Skeleton } from "@/components/ui/skeleton";

export const HeroSkeleton = () => (
  <section className="min-h-screen pt-20 flex items-center justify-center">
    <div className="container mx-auto px-4 text-center">
      <Skeleton className="h-6 w-48 mx-auto mb-6" />
      <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
      <Skeleton className="h-12 w-2/3 mx-auto mb-6" />
      <Skeleton className="h-6 w-1/2 mx-auto mb-8" />
      <div className="flex gap-4 justify-center">
        <Skeleton className="h-12 w-40" />
        <Skeleton className="h-12 w-40" />
      </div>
      <div className="flex gap-4 justify-center mt-12">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-24 w-32 rounded-xl" />
        ))}
      </div>
    </div>
  </section>
);

export const ServiceCardSkeleton = () => (
  <div className="bg-card rounded-2xl p-6 shadow-soft">
    <Skeleton className="h-14 w-14 rounded-xl mb-4" />
    <Skeleton className="h-6 w-3/4 mb-2" />
    <Skeleton className="h-4 w-full mb-1" />
    <Skeleton className="h-4 w-5/6 mb-4" />
    <Skeleton className="h-4 w-24" />
  </div>
);

export const ServicesSkeleton = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <Skeleton className="h-4 w-32 mx-auto mb-4" />
        <Skeleton className="h-10 w-64 mx-auto mb-4" />
        <Skeleton className="h-5 w-1/2 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <ServiceCardSkeleton key={i} />
        ))}
      </div>
    </div>
  </section>
);

export const TeamMemberSkeleton = () => (
  <div className="bg-card rounded-2xl overflow-hidden shadow-soft">
    <Skeleton className="h-64 w-full" />
    <div className="p-6">
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-4" />
      <Skeleton className="h-4 w-full mb-1" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  </div>
);

export const TeamSkeleton = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <Skeleton className="h-10 w-48 mx-auto mb-4" />
        <Skeleton className="h-5 w-2/3 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <TeamMemberSkeleton key={i} />
        ))}
      </div>
    </div>
  </section>
);

export const FAQSkeleton = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-12">
        <Skeleton className="h-10 w-64 mx-auto mb-4" />
        <Skeleton className="h-5 w-1/2 mx-auto" />
      </div>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-card rounded-xl p-4">
            <Skeleton className="h-6 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ServicePageSkeleton = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <Skeleton className="h-6 w-32 mb-4" />
        <Skeleton className="h-12 w-2/3 mb-4" />
        <Skeleton className="h-5 w-1/2 mb-6" />
        <Skeleton className="h-12 w-48" />
      </div>
    </section>
    
    {/* Content */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Skeleton className="h-8 w-48 mb-6" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-2" />
            <Skeleton className="h-4 w-4/5 mb-6" />
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-4 w-3/4" />
              ))}
            </div>
          </div>
          <Skeleton className="h-80 w-full rounded-2xl" />
        </div>
      </div>
    </section>
  </div>
);

export const BlogSkeleton = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <Skeleton className="h-10 w-32 mx-auto mb-4" />
        <Skeleton className="h-5 w-1/3 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-soft">
            <Skeleton className="h-48 w-full" />
            <div className="p-6">
              <Skeleton className="h-4 w-24 mb-3" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const PageLoadingSkeleton = () => (
  <div className="min-h-screen bg-background">
    <HeroSkeleton />
  </div>
);

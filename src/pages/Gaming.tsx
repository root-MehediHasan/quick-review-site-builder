import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import phoneReview from "@/assets/phone-review.jpg";

const Gaming = () => {
  const gamingReviews = [
    {
      title: "PlayStation 5 Pro: Next-Gen Gaming Perfected",
      excerpt: "Sony's upgraded console delivers 4K gaming at 60fps with ray tracing, enhanced SSD performance, and exclusive titles.",
      rating: 9.0,
      category: "Gaming",
      readTime: "12 min read",
      image: phoneReview,
      featured: true,
      url: "/review/playstation-5-pro"
    },
    {
      title: "ASUS ROG Ally: Handheld Gaming Revolution",
      excerpt: "Windows-powered handheld gaming device that rivals Steam Deck with superior performance and game compatibility.",
      rating: 8.4,
      category: "Gaming",
      readTime: "10 min read",
      image: phoneReview
    },
    {
      title: "Razer DeathAdder V3: Precision Gaming Mouse",
      excerpt: "Latest iteration of the legendary gaming mouse with improved sensor, lighter weight, and enhanced ergonomics.",
      rating: 8.7,
      category: "Gaming",
      readTime: "6 min read",
      image: phoneReview
    },
    {
      title: "SteelSeries Apex Pro TKL: Mechanical Excellence",
      excerpt: "Premium mechanical gaming keyboard with adjustable actuation, OLED display, and tournament-grade build quality.",
      rating: 8.9,
      category: "Gaming",
      readTime: "8 min read",
      image: phoneReview
    },
    {
      title: "HyperX Cloud III: Gaming Audio Champion",
      excerpt: "Professional gaming headset with exceptional sound quality, noise isolation, and all-day comfort.",
      rating: 8.5,
      category: "Gaming",
      readTime: "7 min read", 
      image: phoneReview
    },
    {
      title: "NVIDIA RTX 4090: Ultimate Gaming GPU",
      excerpt: "Flagship graphics card delivering uncompromising 4K gaming performance with ray tracing and DLSS 3.0.",
      rating: 9.2,
      category: "Gaming",
      readTime: "15 min read",
      image: phoneReview
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Gaming Reviews</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Gaming</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Gear</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Reviews of gaming consoles, PCs, peripherals, and accessories. From casual gaming to professional esports equipment.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg">Latest Reviews</Button>
              <Button variant="outline" size="lg">Gaming Guide</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Gaming Reviews</h2>
            <p className="text-muted-foreground">Performance testing, build quality analysis, and gaming experience evaluation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gamingReviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">Load More Reviews</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gaming;

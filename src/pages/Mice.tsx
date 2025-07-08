import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import phoneReview from "@/assets/phone-review.jpg";

const Mice = () => {
  const mouseReviews = [
    {
      title: "Logitech G Pro X Superlight 2: Esports Excellence",
      excerpt: "Ultra-lightweight wireless gaming mouse with HERO 25K sensor, 95-hour battery life, and tournament-grade performance.",
      rating: 9.1,
      category: "Mice",
      readTime: "8 min read",
      image: phoneReview,
      featured: true
    },
    {
      title: "Razer DeathAdder V3: Ergonomic Gaming Champion",
      excerpt: "Refined ergonomic design with Focus Pro 30K sensor, lightweight construction, and exceptional comfort for long sessions.",
      rating: 8.8,
      category: "Mice",
      readTime: "7 min read",
      image: phoneReview
    },
    {
      title: "Apple Magic Mouse: Mac Integration Perfected",
      excerpt: "Sleek wireless mouse with multi-touch surface, gesture support, and seamless macOS integration for creative workflows.",
      rating: 8.2,
      category: "Mice",
      readTime: "5 min read",
      image: phoneReview
    },
    {
      title: "Logitech MX Master 3S: Productivity Powerhouse",
      excerpt: "Premium wireless mouse with infinite scroll wheel, multi-device connectivity, and precision tracking for professionals.",
      rating: 8.9,
      category: "Mice",
      readTime: "9 min read",
      image: phoneReview
    },
    {
      title: "SteelSeries Rival 650: Customizable Gaming Beast",
      excerpt: "Modular gaming mouse with adjustable weight system, dual sensors, and extensive customization options.",
      rating: 8.5,
      category: "Mice",
      readTime: "6 min read",
      image: phoneReview
    },
    {
      title: "Corsair Dark Core RGB Pro: Wireless Gaming Flagship",
      excerpt: "High-performance wireless gaming mouse with Qi charging, RGB lighting, and sub-1ms response time.",
      rating: 8.6,
      category: "Mice",
      readTime: "8 min read",
      image: phoneReview
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Mouse Reviews</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Mouse</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive reviews of gaming mice, productivity mice, and wireless mice. 
              Find the perfect pointing device for gaming, work, or creative tasks.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg">Latest Reviews</Button>
              <Button variant="outline" size="lg">Mouse Guide</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Mouse Reviews</h2>
            <p className="text-muted-foreground">Sensor accuracy testing, ergonomic evaluation, and performance analysis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mouseReviews.map((review, index) => (
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

export default Mice;
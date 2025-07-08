import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import laptopReview from "@/assets/laptop-review.jpg";

const Monitors = () => {
  const monitorReviews = [
    {
      title: "LG UltraGear 27GP950: 4K Gaming Excellence",
      excerpt: "Premium 4K gaming monitor with 144Hz refresh rate, HDR support, and exceptional color accuracy for competitive gaming.",
      rating: 9.0,
      category: "Monitors",
      readTime: "11 min read",
      image: laptopReview,
      featured: true
    },
    {
      title: "Dell UltraSharp U2723QE: Professional Precision",
      excerpt: "4K monitor designed for creative professionals with 99% sRGB coverage, USB-C connectivity, and ergonomic design.",
      rating: 8.9,
      category: "Monitors",
      readTime: "9 min read",
      image: laptopReview
    },
    {
      title: "Samsung Odyssey G9: Ultrawide Gaming Beast",
      excerpt: "49-inch curved ultrawide monitor with 240Hz refresh rate and HDR1000 for immersive gaming experiences.",
      rating: 8.6,
      category: "Monitors",
      readTime: "13 min read",
      image: laptopReview
    },
    {
      title: "ASUS ProArt PA278QV: Budget Creative Monitor",
      excerpt: "Affordable professional monitor with accurate colors, multiple connectivity options, and factory calibration.",
      rating: 8.3,
      category: "Monitors",
      readTime: "8 min read",
      image: laptopReview
    },
    {
      title: "Apple Studio Display: Mac Integration Perfected",
      excerpt: "5K Retina display with excellent build quality, integrated webcam, and seamless macOS integration for Apple users.",
      rating: 8.7,
      category: "Monitors",
      readTime: "10 min read",
      image: laptopReview
    },
    {
      title: "BenQ PD3220U: 4K Design Powerhouse",
      excerpt: "32-inch 4K monitor with Thunderbolt 3, KVM switch, and professional color accuracy for designers and developers.",
      rating: 8.8,
      category: "Monitors",
      readTime: "12 min read",
      image: laptopReview
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Monitor Reviews</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Monitor</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive reviews of gaming monitors, professional displays, and ultrawide screens. 
              Find the perfect monitor for work, gaming, or creative projects.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg">Latest Reviews</Button>
              <Button variant="outline" size="lg">Display Guide</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Monitor Reviews</h2>
            <p className="text-muted-foreground">Color accuracy testing, refresh rate analysis, and ergonomic evaluation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monitorReviews.map((review, index) => (
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

export default Monitors;
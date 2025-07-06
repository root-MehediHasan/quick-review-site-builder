import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import laptopReview from "@/assets/laptop-review.jpg";

const Laptops = () => {
  const laptopReviews = [
    {
      title: "MacBook Pro M3 Max: Creative Powerhouse Review",
      excerpt: "Apple's most powerful laptop gets even better with the M3 Max chip. We test video editing, 3D rendering, and battery life.",
      rating: 9.1,
      category: "Laptops",
      readTime: "12 min read",
      image: laptopReview,
      featured: true
    },
    {
      title: "Dell XPS 15: Premium Windows Alternative",
      excerpt: "Dell's flagship laptop combines stunning 4K display, powerful Intel processors, and elegant design for creative professionals.",
      rating: 8.7,
      category: "Laptops",
      readTime: "10 min read",
      image: laptopReview
    },
    {
      title: "ThinkPad X1 Carbon: Business Excellence",
      excerpt: "Lenovo's business laptop delivers exceptional keyboard, robust build quality, and enterprise-grade security features.",
      rating: 8.9,
      category: "Laptops",
      readTime: "9 min read",
      image: laptopReview
    },
    {
      title: "ASUS ROG Zephyrus G16: Gaming Beast",
      excerpt: "High-performance gaming laptop with RTX 4080, exceptional cooling, and surprisingly portable design for serious gamers.",
      rating: 8.4,
      category: "Laptops",
      readTime: "11 min read",
      image: laptopReview
    },
    {
      title: "Surface Laptop Studio 2: Creative Innovation",
      excerpt: "Microsoft's unique convertible laptop with touchscreen and stylus support perfect for designers and digital artists.",
      rating: 8.1,
      category: "Laptops",
      readTime: "8 min read",
      image: laptopReview
    },
    {
      title: "HP Spectre x360: Versatile 2-in-1",
      excerpt: "Premium convertible laptop that excels as both traditional laptop and tablet with excellent battery life and build quality.",
      rating: 8.3,
      category: "Laptops",
      readTime: "7 min read",
      image: laptopReview
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Laptop Reviews
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Laptop</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert reviews of laptops for every need - from ultrabooks and gaming laptops to workstations and 2-in-1 convertibles. 
              Find the perfect laptop for work, creativity, or gaming.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg">
                Latest Reviews
              </Button>
              <Button variant="outline" size="lg">
                Buying Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Laptop Reviews
            </h2>
            <p className="text-muted-foreground">
              Comprehensive testing of performance, battery life, display quality, and build construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {laptopReviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Reviews
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Laptops;
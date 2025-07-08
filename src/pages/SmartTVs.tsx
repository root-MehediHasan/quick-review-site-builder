import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import laptopReview from "@/assets/laptop-review.jpg";

const SmartTVs = () => {
  const tvReviews = [
    {
      title: "LG C3 OLED: Picture Quality Champion",
      excerpt: "Premium OLED TV with perfect blacks, vibrant colors, and excellent gaming features including 4K 120Hz and VRR support.",
      rating: 9.1,
      category: "Smart TVs",
      readTime: "14 min read",
      image: laptopReview,
      featured: true
    },
    {
      title: "Samsung QN90C Neo QLED: Bright Room Excellence",
      excerpt: "High-end QLED TV with Mini LED backlighting, exceptional brightness, and comprehensive smart TV features.",
      rating: 8.9,
      category: "Smart TVs",
      readTime: "12 min read",
      image: laptopReview
    },
    {
      title: "Sony A95K QD-OLED: Color Accuracy Master",
      excerpt: "Premium QD-OLED display with Sony's image processing excellence, perfect for movie enthusiasts and content creators.",
      rating: 9.0,
      category: "Smart TVs",
      readTime: "13 min read",
      image: laptopReview
    },
    {
      title: "TCL 6-Series: Budget QLED Champion",
      excerpt: "Affordable QLED TV with impressive picture quality, Roku TV platform, and excellent value for money proposition.",
      rating: 8.3,
      category: "Smart TVs",
      readTime: "9 min read",
      image: laptopReview
    },
    {
      title: "Hisense U8K: Mini LED Value King",
      excerpt: "Mid-range TV with Mini LED technology, high brightness, and comprehensive gaming features at competitive pricing.",
      rating: 8.5,
      category: "Smart TVs",
      readTime: "10 min read",
      image: laptopReview
    },
    {
      title: "Apple TV 4K: Streaming Excellence",
      excerpt: "Premium streaming device with A15 Bionic chip, Dolby Vision support, and seamless Apple ecosystem integration.",
      rating: 8.7,
      category: "Smart TVs",
      readTime: "8 min read",
      image: laptopReview
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Smart TV Reviews</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Smart TV</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive reviews of 4K TVs, OLED displays, and streaming devices. 
              Find the perfect entertainment setup for your home theater.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg">Latest Reviews</Button>
              <Button variant="outline" size="lg">TV Guide</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Smart TV Reviews</h2>
            <p className="text-muted-foreground">Picture quality testing, smart features analysis, and gaming performance evaluation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tvReviews.map((review, index) => (
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

export default SmartTVs;
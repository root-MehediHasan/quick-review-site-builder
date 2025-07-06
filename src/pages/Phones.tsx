import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import phoneReview from "@/assets/phone-review.jpg";

const Phones = () => {
  const phoneReviews = [
    {
      title: "Samsung Galaxy S24 Ultra: The Android King Returns",
      excerpt: "Samsung's latest flagship brings impressive camera improvements, S Pen functionality, and AI features that set it apart from the competition.",
      rating: 8.8,
      category: "Smartphones",
      readTime: "8 min read",
      image: phoneReview,
      featured: true
    },
    {
      title: "iPhone 15 Pro Max: Apple's Camera Champion",
      excerpt: "The iPhone 15 Pro Max delivers exceptional performance with the new A17 Pro chip and groundbreaking camera capabilities.",
      rating: 9.2,
      category: "Smartphones",
      readTime: "10 min read",
      image: phoneReview
    },
    {
      title: "Google Pixel 8 Pro: AI Photography Redefined",
      excerpt: "Google's computational photography expertise shines in the Pixel 8 Pro with enhanced AI features and improved hardware.",
      rating: 8.5,
      category: "Smartphones",
      readTime: "7 min read",
      image: phoneReview
    },
    {
      title: "OnePlus 12: Speed Meets Elegance",
      excerpt: "OnePlus returns to form with blazing fast performance, excellent cameras, and refined design in their latest flagship.",
      rating: 8.3,
      category: "Smartphones",
      readTime: "6 min read",
      image: phoneReview
    },
    {
      title: "Xiaomi 14: Flagship Power at Mid-Range Price",
      excerpt: "Xiaomi delivers premium features and performance at an attractive price point with their latest flagship device.",
      rating: 8.0,
      category: "Smartphones",
      readTime: "5 min read",
      image: phoneReview
    },
    {
      title: "Nothing Phone (2): Transparent Innovation",
      excerpt: "Nothing's second-generation phone brings unique design language with improved performance and distinctive LED patterns.",
      rating: 7.8,
      category: "Smartphones",
      readTime: "6 min read",
      image: phoneReview
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
              Smartphone Reviews
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Phone</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive reviews of the latest smartphones, from flagship devices to budget-friendly options. 
              Find your perfect phone with our expert analysis and buying guides.
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
              Latest Phone Reviews
            </h2>
            <p className="text-muted-foreground">
              In-depth analysis of the newest smartphones hitting the market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phoneReviews.map((review, index) => (
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

export default Phones;
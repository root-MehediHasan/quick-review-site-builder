import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import phoneReview from "@/assets/phone-review.jpg";

const Wearables = () => {
  const wearableReviews = [
    {
      title: "Apple Watch Series 9: Health Tracking Excellence",
      excerpt: "Apple's latest smartwatch brings enhanced health sensors, faster performance, and improved battery life for fitness enthusiasts.",
      rating: 9.0,
      category: "Wearables",
      readTime: "10 min read",
      image: phoneReview,
      featured: true
    },
    {
      title: "Samsung Galaxy Watch 6: Android's Best Companion",
      excerpt: "Samsung's flagship smartwatch offers comprehensive health tracking, excellent battery life, and seamless Android integration.",
      rating: 8.7,
      category: "Wearables",
      readTime: "8 min read",
      image: phoneReview
    },
    {
      title: "Fitbit Charge 6: Fitness Tracking Champion",
      excerpt: "Google's fitness tracker delivers accurate health monitoring, GPS tracking, and week-long battery life at an affordable price.",
      rating: 8.4,
      category: "Wearables",
      readTime: "6 min read",
      image: phoneReview
    },
    {
      title: "Garmin Forerunner 965: Runner's Paradise",
      excerpt: "Premium GPS running watch with advanced training metrics, mapping features, and exceptional battery life for serious athletes.",
      rating: 9.2,
      category: "Wearables",
      readTime: "12 min read",
      image: phoneReview
    },
    {
      title: "WHOOP 4.0: Recovery and Performance Tracker",
      excerpt: "Subscription-based fitness tracker focused on recovery, strain, and sleep optimization for professional athletes.",
      rating: 8.1,
      category: "Wearables",
      readTime: "7 min read",
      image: phoneReview
    },
    {
      title: "Oura Ring Gen 3: Discreet Health Monitoring",
      excerpt: "Smart ring that tracks sleep, activity, and recovery with incredible accuracy in a minimalist, jewelry-like design.",
      rating: 8.3,
      category: "Wearables",
      readTime: "5 min read",
      image: phoneReview
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Wearable Reviews</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Wearable</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive reviews of smartwatches, fitness trackers, and wearable technology. 
              Find the perfect device to monitor your health and enhance your lifestyle.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg">Latest Reviews</Button>
              <Button variant="outline" size="lg">Buying Guide</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Wearable Reviews</h2>
            <p className="text-muted-foreground">Health tracking accuracy, battery life testing, and comfort evaluation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wearableReviews.map((review, index) => (
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

export default Wearables;
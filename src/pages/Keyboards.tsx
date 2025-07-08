import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import phoneReview from "@/assets/phone-review.jpg";

const Keyboards = () => {
  const keyboardReviews = [
    {
      title: "Keychron K8 Pro: Wireless Mechanical Excellence",
      excerpt: "Premium wireless mechanical keyboard with hot-swappable switches, RGB lighting, and exceptional build quality for enthusiasts.",
      rating: 8.9,
      category: "Keyboards",
      readTime: "9 min read",
      image: phoneReview,
      featured: true
    },
    {
      title: "Logitech MX Keys: Productivity Champion",
      excerpt: "Low-profile wireless keyboard with smart illumination, multi-device connectivity, and comfortable typing experience.",
      rating: 8.6,
      category: "Keyboards",
      readTime: "7 min read",
      image: phoneReview
    },
    {
      title: "Razer Huntsman V3 Pro: Gaming Performance King",
      excerpt: "High-end gaming keyboard with analog optical switches, customizable actuation, and tournament-grade features.",
      rating: 8.8,
      category: "Keyboards",
      readTime: "10 min read",
      image: phoneReview
    },
    {
      title: "Apple Magic Keyboard: Mac Integration Perfected",
      excerpt: "Sleek wireless keyboard designed for Mac users with excellent key feel, long battery life, and seamless connectivity.",
      rating: 8.4,
      category: "Keyboards",
      readTime: "6 min read",
      image: phoneReview
    },
    {
      title: "Corsair K100 RGB: Premium Gaming Flagship",
      excerpt: "Top-tier gaming keyboard with Cherry MX switches, dedicated macro keys, and advanced RGB customization.",
      rating: 8.7,
      category: "Keyboards",
      readTime: "11 min read",
      image: phoneReview
    },
    {
      title: "Das Keyboard 4 Professional: Typing Purist's Choice",
      excerpt: "Minimalist mechanical keyboard focused on typing excellence with premium Cherry MX switches and no-nonsense design.",
      rating: 8.5,
      category: "Keyboards",
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
            <Badge variant="secondary" className="mb-4">Keyboard Reviews</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Keyboard</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert reviews of mechanical keyboards, wireless keyboards, and gaming keyboards. 
              Find the perfect typing experience for work, gaming, or programming.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg">Latest Reviews</Button>
              <Button variant="outline" size="lg">Keyboard Guide</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Keyboard Reviews</h2>
            <p className="text-muted-foreground">Switch testing, build quality analysis, and typing experience evaluation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyboardReviews.map((review, index) => (
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

export default Keyboards;
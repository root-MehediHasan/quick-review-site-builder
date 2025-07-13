import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import laptopReview from "@/assets/laptop-review.jpg";

const Tablets = () => {
  const tabletReviews = [
    {
      title: "iPad Pro M2: Creative Powerhouse Redefined",
      excerpt: "Apple's flagship tablet with M2 chip delivers laptop-level performance for digital artists, designers, and creative professionals.",
      rating: 9.1,
      category: "Tablets",
      readTime: "12 min read",
      image: laptopReview,
      url: "/review/ipad-pro-m2",
      featured: true
    },
    {
      title: "Samsung Galaxy Tab S9 Ultra: Android Excellence",
      excerpt: "Samsung's premium tablet offers stunning OLED display, S Pen functionality, and desktop-class productivity features.",
      rating: 8.8,
      category: "Tablets",
      readTime: "10 min read",
      image: laptopReview,
      url: "/review/samsung-galaxy-tab-s9-ultra"
    },
    {
      title: "Microsoft Surface Pro 9: 2-in-1 Versatility",
      excerpt: "Windows tablet that transforms into a laptop with excellent keyboard, stylus support, and full desktop software compatibility.",
      rating: 8.5,
      category: "Tablets",
      readTime: "9 min read",
      image: laptopReview
    },
    {
      title: "iPad Air 5th Gen: Perfect Balance of Power and Price",
      excerpt: "Mid-range iPad with M1 chip offers flagship performance at a more accessible price point for students and professionals.",
      rating: 8.7,
      category: "Tablets",
      readTime: "8 min read",
      image: laptopReview
    },
    {
      title: "Amazon Fire HD 11: Budget Entertainment Tablet",
      excerpt: "Affordable tablet perfect for media consumption, reading, and basic productivity tasks with excellent battery life.",
      rating: 7.9,
      category: "Tablets",
      readTime: "6 min read",
      image: laptopReview
    },
    {
      title: "Lenovo Tab P12 Pro: Premium Android Alternative",
      excerpt: "High-end Android tablet with OLED display, productivity features, and competitive pricing against iPad Pro.",
      rating: 8.2,
      category: "Tablets",
      readTime: "7 min read",
      image: laptopReview
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Tablet Reviews</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Tablet</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert reviews of tablets and 2-in-1 devices for creativity, productivity, and entertainment. 
              From iPads to Android tablets and Windows convertibles.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Tablet Reviews</h2>
            <p className="text-muted-foreground">Performance testing, display quality analysis, and productivity evaluation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tabletReviews.map((review, index) => (
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

export default Tablets;
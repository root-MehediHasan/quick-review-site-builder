import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import headphonesReview from "@/assets/headphones-review.jpg";

const Audio = () => {
  const audioReviews = [
    {
      title: "Sony WH-1000XM5: Still the ANC Champion?",
      excerpt: "Sony's latest noise-canceling headphones face tough competition. Do they maintain their crown in the premium audio space?",
      rating: 8.5,
      category: "Audio",
      readTime: "6 min read",
      image: headphonesReview,
      featured: true
    },
    {
      title: "AirPods Pro 2: Apple's Audio Evolution",
      excerpt: "Second-generation AirPods Pro bring enhanced ANC, adaptive transparency, and spatial audio to new heights.",
      rating: 8.8,
      category: "Audio",
      readTime: "8 min read",
      image: headphonesReview,
      url: "/review/airpods-pro-2"
    },
    {
      title: "Bose QuietComfort Ultra: Premium Comfort",
      excerpt: "Bose's flagship headphones deliver exceptional noise cancellation and all-day comfort for frequent travelers.",
      rating: 8.6,
      category: "Audio",
      readTime: "7 min read",
      image: headphonesReview
    },
    {
      title: "Sennheiser Momentum 4: Audiophile's Choice",
      excerpt: "German engineering meets exceptional sound quality in Sennheiser's latest wireless over-ear headphones.",
      rating: 8.9,
      category: "Audio",
      readTime: "9 min read",
      image: headphonesReview
    },
    {
      title: "JBL Tour One M2: Value Champion",
      excerpt: "JBL delivers premium features at mid-range pricing with excellent sound quality and robust build construction.",
      rating: 8.2,
      category: "Audio",
      readTime: "6 min read",
      image: headphonesReview
    },
    {
      title: "Audio-Technica ATH-M50xBT2: Studio Sound",
      excerpt: "Professional studio monitors go wireless while maintaining the legendary sound signature that made them famous.",
      rating: 8.0,
      category: "Audio",
      readTime: "5 min read",
      image: headphonesReview
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
              Audio Reviews
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Audio</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Detailed reviews of headphones, earbuds, speakers, and audio equipment. 
              From noise-canceling champions to audiophile-grade sound systems.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg">
                Latest Reviews
              </Button>
              <Button variant="outline" size="lg">
                Audio Guide
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
              Latest Audio Reviews
            </h2>
            <p className="text-muted-foreground">
              Sound quality testing, noise cancellation analysis, and comfort evaluations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audioReviews.map((review, index) => (
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

export default Audio;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import headphonesReview from "@/assets/headphones-review.jpg";

const Speakers = () => {
  const speakerReviews = [
    {
      title: "Sonos Era 300: Spatial Audio Revolution",
      excerpt: "Premium smart speaker with Dolby Atmos support, room-filling sound, and seamless multi-room integration.",
      rating: 9.0,
      category: "Speakers",
      readTime: "10 min read",
      image: headphonesReview,
      featured: true
    },
    {
      title: "KEF LS50 Meta: Audiophile Excellence",
      excerpt: "High-end bookshelf speakers with Metamaterial Absorption Technology delivering studio-quality sound reproduction.",
      rating: 9.2,
      category: "Speakers",
      readTime: "12 min read",
      image: headphonesReview
    },
    {
      title: "JBL Charge 5: Portable Powerhouse",
      excerpt: "Rugged Bluetooth speaker with powerful bass, waterproof design, and power bank functionality for outdoor adventures.",
      rating: 8.5,
      category: "Speakers",
      readTime: "7 min read",
      image: headphonesReview
    },
    {
      title: "Apple HomePod 2nd Gen: Smart Audio Refined",
      excerpt: "Apple's smart speaker with computational audio, Siri integration, and seamless HomeKit compatibility.",
      rating: 8.6,
      category: "Speakers",
      readTime: "8 min read",
      image: headphonesReview
    },
    {
      title: "Bose SoundLink Revolve+: 360-Degree Sound",
      excerpt: "Portable Bluetooth speaker with omnidirectional audio, water resistance, and impressive battery life.",
      rating: 8.3,
      category: "Speakers",
      readTime: "6 min read",
      image: headphonesReview
    },
    {
      title: "Klipsch The Fives: Powered Monitor Excellence",
      excerpt: "Active bookshelf speakers with multiple connectivity options, built-in amplification, and dynamic sound signature.",
      rating: 8.8,
      category: "Speakers",
      readTime: "9 min read",
      image: headphonesReview
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Speaker Reviews</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Speaker</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert reviews of Bluetooth speakers, smart speakers, and studio monitors. 
              From portable speakers to high-end audiophile systems.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg">Latest Reviews</Button>
              <Button variant="outline" size="lg">Audio Guide</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Speaker Reviews</h2>
            <p className="text-muted-foreground">Sound quality testing, connectivity analysis, and build quality evaluation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakerReviews.map((review, index) => (
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

export default Speakers;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import laptopReview from "@/assets/laptop-review.jpg";

const Cameras = () => {
  const cameraReviews = [
    {
      title: "Canon EOS R6 Mark II: Mirrorless Mastery",
      excerpt: "Canon's latest full-frame mirrorless camera combines excellent image quality with advanced autofocus and video capabilities.",
      rating: 9.1,
      category: "Cameras",
      readTime: "14 min read",
      image: laptopReview,
      featured: true,
      url: "/review/canon-eos-r6-mark-ii"
    },
    {
      title: "Sony A7 IV: All-Around Excellence",
      excerpt: "Sony's flagship hybrid camera delivers outstanding photo and video performance for professionals and enthusiasts.",
      rating: 9.0,
      category: "Cameras",
      readTime: "12 min read",
      image: laptopReview
    },
    {
      title: "Fujifilm X-T5: APS-C Powerhouse",
      excerpt: "High-resolution APS-C sensor with classic design and exceptional image quality in a compact body.",
      rating: 8.8,
      category: "Cameras",
      readTime: "10 min read",
      image: laptopReview
    },
    {
      title: "Nikon Z9: Professional Beast",
      excerpt: "Flagship mirrorless camera with exceptional low-light performance, fast autofocus, and robust build quality.",
      rating: 9.3,
      category: "Cameras", 
      readTime: "16 min read",
      image: laptopReview
    },
    {
      title: "GoPro Hero 12: Action Camera King",
      excerpt: "Latest action camera with improved stabilization, better low-light performance, and enhanced durability.",
      rating: 8.6,
      category: "Cameras",
      readTime: "8 min read",
      image: laptopReview
    },
    {
      title: "DJI Pocket 2: Compact Creator",
      excerpt: "Ultra-portable camera with 3-axis gimbal, 4K recording, and AI-powered tracking for content creators.",
      rating: 8.4,
      category: "Cameras",
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
            <Badge variant="secondary" className="mb-4">Camera Reviews</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Camera</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Professional reviews of cameras, lenses, and photography equipment. From DSLRs to mirrorless, action cameras to drones.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg">Latest Reviews</Button>
              <Button variant="outline" size="lg">Photo Guide</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Camera Reviews</h2>
            <p className="text-muted-foreground">Image quality testing, performance analysis, and hands-on photography experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cameraReviews.map((review, index) => (
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

export default Cameras;

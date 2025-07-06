import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, Clock, Star } from "lucide-react";
import phoneReview from "@/assets/phone-review.jpg";

const VideoReviews = () => {
  const videos = [
    {
      title: "iPhone 15 Pro Max: 3 Months Later - Honest Review",
      duration: "12:45",
      views: "248K views",
      publishedAt: "2 days ago",
      rating: 4.8,
      thumbnail: phoneReview,
      category: "Smartphones",
      featured: true
    },
    {
      title: "MacBook Pro M3 Max: Video Editing Performance Test",
      duration: "18:32", 
      views: "156K views",
      publishedAt: "1 week ago",
      rating: 4.9,
      thumbnail: phoneReview,
      category: "Laptops"
    },
    {
      title: "Sony WH-1000XM5 vs Bose QC Ultra: Audio Quality Test",
      duration: "15:20",
      views: "89K views", 
      publishedAt: "3 days ago",
      rating: 4.7,
      thumbnail: phoneReview,
      category: "Audio"
    },
    {
      title: "PS5 vs Xbox Series X: Gaming Performance in 2024",
      duration: "22:15",
      views: "312K views",
      publishedAt: "5 days ago", 
      rating: 4.6,
      thumbnail: phoneReview,
      category: "Gaming"
    },
    {
      title: "Canon R6 Mark II: Photography & Video Test",
      duration: "16:08",
      views: "67K views",
      publishedAt: "1 week ago",
      rating: 4.8,
      thumbnail: phoneReview,
      category: "Cameras"
    },
    {
      title: "Best Budget Phones 2024: Top 5 Under $400",
      duration: "14:30",
      views: "198K views",
      publishedAt: "2 weeks ago",
      rating: 4.5,
      thumbnail: phoneReview,
      category: "Buying Guide"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Video Content</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Video</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              In-depth video reviews with hands-on testing, real-world usage scenarios, and detailed performance analysis.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg">
                <Play className="w-4 h-4 mr-2" />
                Watch Latest
              </Button>
              <Button variant="outline" size="lg">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Video Reviews</h2>
            <p className="text-muted-foreground">Comprehensive video analysis with real-world testing and expert insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className={`group cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 bg-card border-border overflow-hidden ${video.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="aspect-video bg-gradient-primary/20 relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="secondary" className="bg-black/80 text-white">
                      <Clock className="w-3 h-3 mr-1" />
                      {video.duration}
                    </Badge>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {video.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{video.views}</span>
                    </div>
                    <span>{video.publishedAt}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{video.rating}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Watch Now →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">Load More Videos</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VideoReviews;
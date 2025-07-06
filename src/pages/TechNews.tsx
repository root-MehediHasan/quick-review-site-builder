import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Zap, Globe } from "lucide-react";
import phoneReview from "@/assets/phone-review.jpg";

const TechNews = () => {
  const newsArticles = [
    {
      title: "Apple Announces Revolutionary M4 Chip with Enhanced AI Capabilities",
      excerpt: "Apple's latest processor promises 40% better performance and advanced machine learning features for next-generation MacBooks and iPads.",
      category: "Breaking News",
      publishedAt: "2 hours ago",
      readTime: "3 min read",
      image: phoneReview,
      featured: true,
      icon: Zap
    },
    {
      title: "Samsung Galaxy S25 Series: Everything We Know So Far",
      excerpt: "Leaked specifications suggest major camera improvements, faster charging, and new AI features coming to Samsung's flagship lineup.",
      category: "Rumors",
      publishedAt: "6 hours ago", 
      readTime: "5 min read",
      image: phoneReview,
      icon: TrendingUp
    },
    {
      title: "CES 2024: The Most Innovative Tech Announcements",
      excerpt: "From foldable laptops to AI-powered home appliances, here are the standout innovations from this year's Consumer Electronics Show.",
      category: "Industry News",
      publishedAt: "1 day ago",
      readTime: "8 min read",
      image: phoneReview,
      icon: Globe
    },
    {
      title: "Google Pixel 9 Pro: AI Photography Features Detailed",
      excerpt: "Google's computational photography advances include new night mode improvements, enhanced portrait processing, and real-time object removal.",
      category: "Product News",
      publishedAt: "1 day ago",
      readTime: "4 min read", 
      image: phoneReview,
      icon: TrendingUp
    },
    {
      title: "NVIDIA RTX 5090: Gaming Performance Benchmarks Leaked",
      excerpt: "Early benchmarks suggest the next-generation GPU delivers 60% better ray tracing performance and native 4K gaming at high refresh rates.",
      category: "Hardware",
      publishedAt: "2 days ago",
      readTime: "6 min read",
      image: phoneReview,
      icon: Zap
    },
    {
      title: "Sustainability in Tech: Major Brands Commit to Carbon Neutral Goals",
      excerpt: "Apple, Microsoft, and Google announce ambitious plans for carbon neutrality across their entire product lifecycles by 2030.",
      category: "Industry Trends",
      publishedAt: "3 days ago",
      readTime: "7 min read",
      image: phoneReview,
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Latest Updates</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Tech</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">News</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stay updated with the latest technology news, product announcements, industry trends, and breakthrough innovations.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg">Breaking News</Button>
              <Button variant="outline" size="lg">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Tech News</h2>
            <p className="text-muted-foreground">Breaking news, product launches, and industry analysis from the world of technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => {
              const IconComponent = article.icon;
              return (
                <Card key={index} className={`group cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 bg-card border-border overflow-hidden ${article.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  <div className="aspect-video bg-gradient-primary/20 relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.publishedAt}</span>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <IconComponent className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="text-sm font-medium">TechQuickReview</span>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Read More →
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">Load More News</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechNews;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, Shield, DollarSign } from "lucide-react";

const BuyingGuides = () => {
  const guides = [
    {
      title: "Best Smartphones Under $500 (2024)",
      excerpt: "Complete guide to finding the perfect budget smartphone with flagship features, great cameras, and long battery life.",
      category: "Smartphones",
      readTime: "15 min read",
      updated: "Updated 2 days ago",
      icon: TrendingUp
    },
    {
      title: "Gaming Laptop Buying Guide",
      excerpt: "Everything you need to know about choosing a gaming laptop: GPU specs, cooling systems, display types, and budget considerations.",
      category: "Laptops", 
      readTime: "20 min read",
      updated: "Updated 1 week ago",
      icon: BookOpen
    },
    {
      title: "Wireless Headphones: What to Look For",
      excerpt: "Comprehensive guide covering noise cancellation, sound quality, battery life, and comfort factors for wireless headphones.",
      category: "Audio",
      readTime: "12 min read", 
      updated: "Updated 3 days ago",
      icon: Shield
    },
    {
      title: "4K Monitor Buying Guide for 2024",
      excerpt: "Display technology comparison, refresh rates, color accuracy, and connectivity options for productivity and gaming monitors.",
      category: "Monitors",
      readTime: "18 min read",
      updated: "Updated 5 days ago", 
      icon: BookOpen
    },
    {
      title: "Budget vs Premium: Camera Comparison",
      excerpt: "When to invest in expensive camera gear and when budget options deliver excellent value for different photography needs.",
      category: "Cameras",
      readTime: "14 min read",
      updated: "Updated 1 week ago",
      icon: DollarSign
    },
    {
      title: "Smart TV Features That Actually Matter",
      excerpt: "Cut through the marketing hype and learn which smart TV features provide real value and which are just gimmicks.",
      category: "TVs",
      readTime: "10 min read",
      updated: "Updated 4 days ago",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Expert Guides</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Buying</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Guides</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert buying guides to help you make informed decisions. Compare features, understand specifications, and find the best value for your budget.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg">Latest Guides</Button>
              <Button variant="outline" size="lg">All Categories</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Buying Guides</h2>
            <p className="text-muted-foreground">Comprehensive guides updated regularly with the latest market trends and product releases</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, index) => {
              const IconComponent = guide.icon;
              return (
                <Card key={index} className="group cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 bg-card border-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">{guide.category}</Badge>
                        <span className="text-xs text-muted-foreground">{guide.updated}</span>
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {guide.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{guide.readTime}</span>
                        <Button variant="ghost" size="sm" className="group-hover:text-primary">
                          Read Guide →
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">View All Guides</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuyingGuides;
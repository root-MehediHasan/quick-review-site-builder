import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Zap, Scale, Trophy } from "lucide-react";

const ComparisonTools = () => {
  const comparisons = [
    {
      title: "iPhone 15 Pro vs Samsung Galaxy S24 Ultra",
      description: "Flagship smartphone showdown: camera quality, performance, battery life, and value comparison.",
      category: "Smartphones",
      views: "15.2K views",
      icon: Trophy
    },
    {
      title: "MacBook Pro M3 vs Dell XPS 15",
      description: "Premium laptop comparison for creative professionals: performance, display quality, and build construction.",
      category: "Laptops", 
      views: "8.7K views",
      icon: Zap
    },
    {
      title: "Sony WH-1000XM5 vs Bose QuietComfort Ultra",
      description: "Noise-canceling headphone battle: sound quality, ANC performance, comfort, and battery life.",
      category: "Audio",
      views: "12.4K views",
      icon: Scale
    },
    {
      title: "PS5 vs Xbox Series X Gaming Performance",
      description: "Console comparison covering exclusive games, performance metrics, storage options, and online services.",
      category: "Gaming",
      views: "22.1K views", 
      icon: Trophy
    },
    {
      title: "Canon R6 Mark II vs Sony A7 IV",
      description: "Mirrorless camera comparison for photographers: image quality, autofocus speed, and video capabilities.",
      category: "Cameras",
      views: "6.8K views",
      icon: Scale
    },
    {
      title: "Budget vs Premium: $300 vs $1000 Phones",
      description: "Value analysis comparing flagship features with budget alternatives across different price points.",
      category: "Value Guide",
      views: "18.9K views",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Product Comparisons</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Comparison</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Tools</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Side-by-side product comparisons with detailed analysis. Compare specs, performance, pricing, and real-world usage scenarios.
            </p>
            
            <div className="max-w-md mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search products to compare..."
                  className="pl-10 bg-background/50 border-border"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Comparisons</h2>
            <p className="text-muted-foreground">Most viewed product comparisons with detailed analysis and expert recommendations</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {comparisons.map((comparison, index) => {
              const IconComponent = comparison.icon;
              return (
                <Card key={index} className="group cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 bg-card border-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">{comparison.category}</Badge>
                        <span className="text-xs text-muted-foreground">{comparison.views}</span>
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                        {comparison.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {comparison.description}
                      </p>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        View Comparison →
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Comparison?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the products you want to compare? Request a custom comparison and we'll create a detailed analysis.
              </p>
              <Button variant="glow" size="lg">Request Comparison</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComparisonTools;
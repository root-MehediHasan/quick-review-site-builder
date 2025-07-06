import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Zap, Shield, Wrench, Battery, Wifi } from "lucide-react";

const TechTips = () => {
  const tips = [
    {
      title: "10 Hidden iPhone Features You Should Know",
      excerpt: "Discover lesser-known iOS features that can improve your productivity and enhance your daily smartphone experience.",
      category: "Smartphones",
      readTime: "5 min read",
      difficulty: "Beginner",
      icon: Lightbulb,
      featured: true
    },
    {
      title: "Extend Your Laptop Battery Life: Expert Tips",
      excerpt: "Proven techniques to maximize battery performance and longevity for Windows and macOS laptops.",
      category: "Laptops",
      readTime: "7 min read",
      difficulty: "Intermediate",
      icon: Battery
    },
    {
      title: "Optimize Your Wi-Fi Network for Better Speed",
      excerpt: "Simple router settings and placement tips to improve your home internet speed and coverage.",
      category: "Networking", 
      readTime: "6 min read",
      difficulty: "Intermediate",
      icon: Wifi
    },
    {
      title: "Secure Your Smart Home: Privacy Best Practices",
      excerpt: "Essential security steps to protect your smart devices from hackers and maintain your privacy.",
      category: "Security",
      readTime: "8 min read",
      difficulty: "Advanced",
      icon: Shield
    },
    {
      title: "Photography Tips for Smartphone Cameras",
      excerpt: "Professional techniques to capture better photos using just your phone's camera and built-in editing tools.",
      category: "Photography",
      readTime: "10 min read", 
      difficulty: "Beginner",
      icon: Zap
    },
    {
      title: "DIY Computer Cleanup and Maintenance",
      excerpt: "Step-by-step guide to cleaning and maintaining your desktop or laptop for optimal performance.",
      category: "Maintenance",
      readTime: "12 min read",
      difficulty: "Intermediate", 
      icon: Wrench
    },
    {
      title: "Gaming Performance: GPU and CPU Optimization",
      excerpt: "Advanced tweaks and settings to maximize gaming performance without expensive hardware upgrades.",
      category: "Gaming",
      readTime: "15 min read",
      difficulty: "Advanced",
      icon: Zap
    },
    {
      title: "Cloud Storage: Best Practices and Security",
      excerpt: "How to safely organize and protect your files across Google Drive, iCloud, OneDrive, and Dropbox.",
      category: "Cloud Services",
      readTime: "6 min read",
      difficulty: "Beginner",
      icon: Shield
    },
    {
      title: "Troubleshooting Common Tech Problems",
      excerpt: "Quick fixes for the most frequent technology issues you encounter with devices and software.",
      category: "Troubleshooting",
      readTime: "9 min read",
      difficulty: "Beginner",
      icon: Wrench
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'Intermediate': return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      case 'Advanced': return 'bg-red-500/10 text-red-600 border-red-500/20';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Expert Advice</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Tech</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Tips</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Practical tips, tricks, and tutorials to help you get the most out of your technology. From beginner guides to advanced optimizations.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg">Latest Tips</Button>
              <Button variant="outline" size="lg">All Categories</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Tech Tips</h2>
            <p className="text-muted-foreground">Practical advice and step-by-step guides to enhance your tech experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card key={index} className={`group cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 bg-card border-border p-6 ${tip.featured ? 'ring-2 ring-primary/20' : ''}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">{tip.category}</Badge>
                        <Badge variant="outline" className={`text-xs ${getDifficultyColor(tip.difficulty)}`}>
                          {tip.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                    {tip.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {tip.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{tip.readTime}</span>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read Tip →
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">View All Tips</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechTips;
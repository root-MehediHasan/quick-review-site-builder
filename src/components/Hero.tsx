import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Latest tech gadgets" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Featured Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 border border-primary/30">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Featured Review</span>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">The Ultimate</span><br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              iPhone 15 Pro Max
            </span><br />
            <span className="text-foreground">Review</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Dive deep into Apple's latest flagship smartphone. We've tested everything from 
            the titanium build quality to the revolutionary A17 Pro chip performance.
          </p>

          {/* Rating */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold text-primary">9.2/10</span>
            <span className="text-muted-foreground">Editor's Choice</span>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Read Full Review
            </Button>
            <Button variant="glow" size="lg" className="text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Watch Video Review
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
    </section>
  );
};

export default Hero;
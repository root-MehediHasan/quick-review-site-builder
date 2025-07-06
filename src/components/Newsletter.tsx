import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Stay</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Updated</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest tech reviews, buying guides, and industry news delivered to your inbox weekly
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 bg-background/50 border-border focus:border-primary"
              />
              <Button variant="hero" size="lg" className="px-8">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time. Join 10,000+ tech enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
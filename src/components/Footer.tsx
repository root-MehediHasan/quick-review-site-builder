import { Button } from "@/components/ui/button";
import { Twitter, Youtube, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">TQ</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                TechQuickReview
              </h3>
            </div>
            <p className="text-muted-foreground">
              Your trusted source for honest, in-depth tech reviews and buying guides.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Reviews */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Reviews</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Smartphones
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Laptops
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Audio & Headphones
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Gaming Gear
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Cameras
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Buying Guides
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Comparison Tools
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Tech News
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Video Reviews
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Tech Tips
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Editorial Team
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 TechQuickReview. All rights reserved. Made with ❤️ for tech enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
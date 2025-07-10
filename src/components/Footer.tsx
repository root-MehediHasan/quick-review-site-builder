import { Button } from "@/components/ui/button";
import { Twitter, Youtube, Instagram, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">TQR</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                TechQuickReview
              </h3>
            </Link>
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
              <Link to="/phones" className="block text-muted-foreground hover:text-primary transition-colors">
                Smartphones
              </Link>
              <Link to="/laptops" className="block text-muted-foreground hover:text-primary transition-colors">
                Laptops
              </Link>
              <Link to="/audio" className="block text-muted-foreground hover:text-primary transition-colors">
                Audio & Headphones
              </Link>
              <Link to="/gaming" className="block text-muted-foreground hover:text-primary transition-colors">
                Gaming Gear
              </Link>
              <Link to="/cameras" className="block text-muted-foreground hover:text-primary transition-colors">
                Cameras
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Resources</h4>
            <div className="space-y-2">
              <Link to="/buying-guides" className="block text-muted-foreground hover:text-primary transition-colors">
                Buying Guides
              </Link>
              <Link to="/comparison-tools" className="block text-muted-foreground hover:text-primary transition-colors">
                Comparison Tools
              </Link>
              <Link to="/tech-news" className="block text-muted-foreground hover:text-primary transition-colors">
                Tech News
              </Link>
              <Link to="/video-reviews" className="block text-muted-foreground hover:text-primary transition-colors">
                Video Reviews
              </Link>
              <Link to="/tech-tips" className="block text-muted-foreground hover:text-primary transition-colors">
                Tech Tips
              </Link>
              <Link to="/faq" className="block text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Company</h4>
            <div className="space-y-2">
              <Link to="/about-us" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/editorial-team" className="block text-muted-foreground hover:text-primary transition-colors">
                Editorial Team
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/request-review" className="block text-muted-foreground hover:text-primary transition-colors">
                Request Review
              </Link>
              <Link to="/privacy-policy" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="block text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 TechQuickReview. All rights reserved. Made with ❤️ for tech enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

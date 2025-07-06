import { Button } from "@/components/ui/button";
import { Menu, Search, Smartphone, Laptop, Headphones } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">TQ</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TechQuickReview
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">
              Latest Reviews
            </a>
            <div className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors cursor-pointer">
              <Smartphone className="w-4 h-4" />
              <span>Phones</span>
            </div>
            <div className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors cursor-pointer">
              <Laptop className="w-4 h-4" />
              <span>Laptops</span>
            </div>
            <div className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors cursor-pointer">
              <Headphones className="w-4 h-4" />
              <span>Audio</span>
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="glow" className="hidden md:inline-flex">
              Subscribe
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
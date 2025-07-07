import { Button } from "@/components/ui/button";
import { Menu, Smartphone, Laptop, Headphones, Camera, Gamepad2, ShoppingCart, Newspaper, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">TQ</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TechQuickReview
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/phones" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Smartphone className="w-4 h-4" />
              <span>Phones</span>
            </Link>
            <Link to="/laptops" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Laptop className="w-4 h-4" />
              <span>Laptops</span>
            </Link>
            <Link to="/audio" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Headphones className="w-4 h-4" />
              <span>Audio</span>
            </Link>
            <Link to="/gaming" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Gamepad2 className="w-4 h-4" />
              <span>Gaming</span>
            </Link>
            <Link to="/cameras" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Camera className="w-4 h-4" />
              <span>Cameras</span>
            </Link>
            <Link to="/buying-guides" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <ShoppingCart className="w-4 h-4" />
              <span>Guides</span>
            </Link>
            <Link to="/tech-news" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Newspaper className="w-4 h-4" />
              <span>News</span>
            </Link>
{/*             <Link to="/video-reviews" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <BookOpen className="w-4 h-4" />
              <span>Videos</span>
            </Link> */}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <SearchBar />
            <Button variant="glow" className="hidden md:inline-flex">
              Subscribe
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

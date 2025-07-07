import { Button } from "@/components/ui/button";
import { Menu, Smartphone, Laptop, Headphones, Camera, Gamepad2, ShoppingCart, Newspaper, BookOpen, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
            {/* Phones Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors outline-none">
                <Smartphone className="w-4 h-4" />
                <span>Phones</span>
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel>Phone Categories</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link to="/phones" className="w-full">All Phone Reviews</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/phones?category=flagship" className="w-full">Flagship Phones</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/phones?category=budget" className="w-full">Budget Phones</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/phones?category=gaming" className="w-full">Gaming Phones</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/phones?category=camera" className="w-full">Camera Phones</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Popular Reviews</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link to="/phones/iphone-15-pro-max" className="w-full">iPhone 15 Pro Max</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/phones/samsung-galaxy-s24-ultra" className="w-full">Galaxy S24 Ultra</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/phones/google-pixel-8-pro" className="w-full">Google Pixel 8 Pro</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Laptops Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors outline-none">
                <Laptop className="w-4 h-4" />
                <span>Laptops</span>
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel>Laptop Categories</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link to="/laptops" className="w-full">All Laptop Reviews</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/laptops?category=gaming" className="w-full">Gaming Laptops</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/laptops?category=business" className="w-full">Business Laptops</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/laptops?category=ultrabook" className="w-full">Ultrabooks</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/laptops?category=2in1" className="w-full">2-in-1 Convertibles</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/laptops?category=workstation" className="w-full">Workstations</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Popular Reviews</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link to="/laptops/macbook-pro-m3-max" className="w-full">MacBook Pro M3 Max</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/laptops/dell-xps-15" className="w-full">Dell XPS 15</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/laptops/thinkpad-x1-carbon" className="w-full">ThinkPad X1 Carbon</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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

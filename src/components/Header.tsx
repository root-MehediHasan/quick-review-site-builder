import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Smartphone, Laptop, Headphones, Camera, Gamepad2, ShoppingCart, Newspaper, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPhonesOpen, setIsPhonesOpen] = useState(false);
  const [isLaptopsOpen, setIsLaptopsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsPhonesOpen(false);
    setIsLaptopsOpen(false);
  };

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
{/*           <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <img src={logo} alt="TQR Logo" className="h-8 w-auto" />
          </Link> */}

          {/* Desktop Navigation */}
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
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-2 pt-4">
              {/* Phones Section */}
              <Collapsible open={isPhonesOpen} onOpenChange={setIsPhonesOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-4 h-4" />
                    <span>Phones</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isPhonesOpen ? 'rotate-90' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-6 mt-2 space-y-1">
                  <Link 
                    to="/phones" 
                    className="block p-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded-md transition-colors"
                    onClick={closeMobileMenu}
                  >
                    All Phone Reviews
                  </Link>
                  <Link 
                    to="/phones?category=flagship" 
                    className="block p-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded-md transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Flagship Phones
                  </Link>
                  <Link 
                    to="/phones?category=budget" 
                    className="block p-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded-md transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Budget Phones
                  </Link>
                  <Link 
                    to="/phones?category=gaming" 
                    className="block p-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded-md transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Gaming Phones
                  </Link>
                  <Link 
                    to="/phones?category=camera" 
                    className="block p-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded-md transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Camera Phones
                  </Link>
                </CollapsibleContent>
              </Collapsible>

              {/* Laptops Section */}
              <Collapsible open={isLaptopsOpen} onOpenChange={setIsLaptopsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors">
                  <div className="flex items-center space-x-2">
                    <Laptop className="w-4 h-4" />
                    <span>Laptops</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isLaptopsOpen ? 'rotate-90' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-6 mt-2 space-y-1">
                  <Link 
                    to="/laptops" 
                    className="block p-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded-md transition-colors"
                    onClick={closeMobileMenu}
                  >
                    All Laptop Reviews
                  </Link>
                  <Link 
                    to="/laptops?category=gaming" 
                    className="block p-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded-md transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Gaming Laptops
                  </Link>
                  <Link 
                    to="/laptops?category=business" 
                    className="block p-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded-md transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Business Laptops
                  </Link>
                  <Link 
                    to="/laptops?category=ultrabook" 
                    className="block p-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded-md transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Ultrabooks
                  </Link>
                  <Link 
                    to="/laptops?category=2in1" 
                    className="block p-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded-md transition-colors"
                    onClick={closeMobileMenu}
                  >
                    2-in-1 Convertibles
                  </Link>
                  <Link 
                    to="/laptops?category=workstation" 
                    className="block p-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/30 rounded-md transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Workstations
                  </Link>
                </CollapsibleContent>
              </Collapsible>

              {/* Other Navigation Items */}
              <Link 
                to="/audio" 
                className="flex items-center space-x-2 p-3 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                <Headphones className="w-4 h-4" />
                <span>Audio</span>
              </Link>
              
              <Link 
                to="/gaming" 
                className="flex items-center space-x-2 p-3 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Gaming</span>
              </Link>
              
              <Link 
                to="/cameras" 
                className="flex items-center space-x-2 p-3 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                <Camera className="w-4 h-4" />
                <span>Cameras</span>
              </Link>
              
              <Link 
                to="/buying-guides" 
                className="flex items-center space-x-2 p-3 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Buying Guides</span>
              </Link>
              
              <Link 
                to="/tech-news" 
                className="flex items-center space-x-2 p-3 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                <Newspaper className="w-4 h-4" />
                <span>Tech News</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

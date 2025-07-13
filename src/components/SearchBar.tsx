import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, X, TrendingUp, Star, Clock, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Comprehensive search data covering all pages and content
  const searchData = [
    // Reviews
    { title: "iPhone 15 Pro Max Review", category: "Smartphones", url: "/phones", type: "review", rating: 9.2, description: "Apple's flagship smartphone with titanium build and A17 Pro chip" },
    { title: "Samsung Galaxy S24 Ultra Review", category: "Smartphones", url: "/review/samsung-galaxy-s24-ultra", type: "review", rating: 8.8, description: "Android flagship with S Pen and advanced camera system" },
    { title: "Google Pixel 8 Pro Review", category: "Smartphones", url: "/phones", type: "review", rating: 8.5, description: "AI-powered photography and computational excellence" },
    { title: "OnePlus 12 Review", category: "Smartphones", url: "/phones", type: "review", rating: 8.3, description: "Speed meets elegance in OnePlus flagship" },
    
    { title: "MacBook Pro M3 Max Review", category: "Laptops", url: "/laptops", type: "review", rating: 9.1, description: "Creative powerhouse with M3 Max chip performance" },
    { title: "Dell XPS 15 Review", category: "Laptops", url: "/laptops", type: "review", rating: 8.7, description: "Premium Windows laptop with 4K display" },
    { title: "ThinkPad X1 Carbon Review", category: "Laptops", url: "/laptops", type: "review", rating: 8.9, description: "Business laptop with exceptional keyboard" },
    { title: "ASUS ROG Zephyrus G16 Review", category: "Laptops", url: "/laptops", type: "review", rating: 8.4, description: "Gaming laptop with RTX 4080 performance" },
    
    { title: "Sony WH-1000XM5 Review", category: "Audio", url: "/audio", type: "review", rating: 8.5, description: "Premium noise-canceling headphones" },
    { title: "AirPods Pro 2 Review", category: "Audio", url: "/audio", type: "review", rating: 8.8, description: "Apple's enhanced wireless earbuds" },
    { title: "Bose QuietComfort Ultra Review", category: "Audio", url: "/audio", type: "review", rating: 8.6, description: "Premium comfort and noise cancellation" },
    
    { title: "PlayStation 5 Pro Review", category: "Gaming", url: "/gaming", type: "review", rating: 9.0, description: "Next-gen gaming console perfected" },
    { title: "ASUS ROG Ally Review", category: "Gaming", url: "/gaming", type: "review", rating: 8.4, description: "Windows-powered handheld gaming device" },
    { title: "Razer DeathAdder V3 Review", category: "Gaming", url: "/gaming", type: "review", rating: 8.7, description: "Precision gaming mouse with improved sensor" },
    
    { title: "Canon EOS R6 Mark II Review", category: "Cameras", url: "/cameras", type: "review", rating: 9.1, description: "Mirrorless camera with advanced autofocus" },
    { title: "Sony A7 IV Review", category: "Cameras", url: "/cameras", type: "review", rating: 9.0, description: "All-around excellence for professionals" },
    
    { title: "Apple Watch Series 9 Review", category: "Wearables", url: "/news/apple-watch-series-9", type: "review", rating: 9.0, description: "Health tracking excellence from Apple" },
    { title: "Samsung Galaxy Watch 6 Review", category: "Wearables", url: "/news/samsung-galaxy-watch-6", type: "review", rating: 8.7, description: "Android's best smartwatch companion" },
    
    { title: "iPad Pro M2 Review", category: "Tablets", url: "/review/ipad-pro-m2", type: "review", rating: 9.1, description: "Creative powerhouse tablet redefined" },
    { title: "Samsung Galaxy Tab S9 Ultra Review", category: "Tablets", url: "/review/samsung-galaxy-tab-s9-ultra", type: "review", rating: 8.8, description: "Android tablet excellence with OLED display" },
    
    { title: "LG UltraGear 27GP950 Review", category: "Monitors", url: "/monitors", type: "review", rating: 9.0, description: "4K gaming monitor with 144Hz refresh rate" },
    { title: "Dell UltraSharp U2723QE Review", category: "Monitors", url: "/monitors", type: "review", rating: 8.9, description: "Professional 4K monitor for creatives" },
    
    { title: "Keychron K8 Pro Review", category: "Keyboards", url: "/keyboards", type: "review", rating: 8.9, description: "Wireless mechanical keyboard excellence" },
    { title: "Logitech MX Keys Review", category: "Keyboards", url: "/keyboards", type: "review", rating: 8.6, description: "Productivity champion with smart illumination" },
    
    { title: "Logitech G Pro X Superlight 2 Review", category: "Mice", url: "/mice", type: "review", rating: 9.1, description: "Ultra-lightweight wireless gaming mouse" },
    { title: "Apple Magic Mouse Review", category: "Mice", url: "/mice", type: "review", rating: 8.2, description: "Mac integration with multi-touch surface" },
    
    { title: "Sonos Era 300 Review", category: "Speakers", url: "/speakers", type: "review", rating: 9.0, description: "Spatial audio revolution with Dolby Atmos" },
    { title: "KEF LS50 Meta Review", category: "Speakers", url: "/speakers", type: "review", rating: 9.2, description: "Audiophile excellence with studio quality" },
    
    { title: "LG C3 OLED Review", category: "Smart TVs", url: "/smart-tvs", type: "review", rating: 9.1, description: "Picture quality champion with perfect blacks" },
    { title: "Samsung QN90C Neo QLED Review", category: "Smart TVs", url: "/smart-tvs", type: "review", rating: 8.9, description: "Bright room excellence with Mini LED" },
    
    // Buying Guides
    { title: "Best Smartphones Under $500 (2024)", category: "Buying Guides", url: "/guide/smartphone-under-500", type: "guide", description: "Complete guide to budget smartphones with flagship features" },
    { title: "Gaming Laptop Buying Guide", category: "Buying Guides", url: "/guide/gaming-laptop-guide", type: "guide", description: "Everything about choosing gaming laptops" },
    { title: "Wireless Headphones: What to Look For", category: "Buying Guides", url: "/buying-guides", type: "guide", description: "Comprehensive headphones buying guide" },
    { title: "4K Monitor Buying Guide for 2024", category: "Buying Guides", url: "/buying-guides", type: "guide", description: "Display technology and refresh rates comparison" },
    
    // Comparisons
    { title: "iPhone 15 Pro vs Samsung Galaxy S24 Ultra", category: "Comparisons", url: "/comparison-tools", type: "comparison", description: "Flagship smartphone showdown comparison" },
    { title: "MacBook Pro M3 vs Dell XPS 15", category: "Comparisons", url: "/comparison-tools", type: "comparison", description: "Premium laptop comparison for creatives" },
    { title: "Sony WH-1000XM5 vs Bose QuietComfort Ultra", category: "Comparisons", url: "/comparison-tools", type: "comparison", description: "Noise-canceling headphone battle" },
    
    // Tech News
    { title: "Apple Announces M4 Chip with AI Capabilities", category: "Tech News", url: "/news/apple-m4-chip", type: "news", description: "Revolutionary processor with 40% better performance" },
    { title: "Samsung Galaxy S25 Series: Everything We Know", category: "Tech News", url: "/news/samsung-galaxy-s25", type: "news", description: "Leaked specifications and camera improvements" },
    { title: "CES 2024: Most Innovative Tech Announcements", category: "Tech News", url: "/tech-news", type: "news", description: "Standout innovations from Consumer Electronics Show" },
    
    // Video Reviews
    { title: "iPhone 15 Pro Max: 3 Months Later Video", category: "Video Reviews", url: "/video-reviews", type: "video", description: "Honest long-term video review" },
    { title: "MacBook Pro M3 Max: Video Editing Performance", category: "Video Reviews", url: "/video-reviews", type: "video", description: "Professional video editing performance test" },
    
    // Tech Tips
    { title: "10 Hidden iPhone Features You Should Know", category: "Tech Tips", url: "/tech-tips", type: "tip", description: "Lesser-known iOS features for productivity" },
    { title: "Extend Your Laptop Battery Life: Expert Tips", category: "Tech Tips", url: "/tech-tips", type: "tip", description: "Proven techniques to maximize battery performance" },
    { title: "Optimize Your Wi-Fi Network for Better Speed", category: "Tech Tips", url: "/tech-tips", type: "tip", description: "Router settings and placement tips" },
    
    // Pages
    { title: "About Us", category: "Company", url: "/about-us", type: "page", description: "Learn about TechQuickReview team and mission" },
    { title: "Editorial Team", category: "Company", url: "/editorial-team", type: "page", description: "Meet our expert reviewers and writers" },
    { title: "Contact Us", category: "Support", url: "/contact", type: "page", description: "Get in touch with our support team" },
    { title: "FAQ", category: "Support", url: "/faq", type: "page", description: "Frequently asked questions and answers" },
    { title: "Request Review", category: "Support", url: "/request-review", type: "page", description: "Suggest products for us to review" },
    { title: "Privacy Policy", category: "Legal", url: "/privacy-policy", type: "page", description: "How we collect and use your information" },
    { title: "Terms of Service", category: "Legal", url: "/terms-of-service", type: "page", description: "Terms and conditions for using our service" },
  ];

  const trendingSearches = [
    "iPhone 15 Pro",
    "MacBook Pro M3",
    "Steam Deck",
    "AirPods Pro",
    "RTX 4090",
    "Galaxy S24",
    "iPad Pro",
    "Gaming Laptops"
  ];

  // Enhanced search with fuzzy matching and relevance scoring
  useEffect(() => {
    if (searchQuery.trim()) {
      setIsLoading(true);
      
      // Simulate API delay for better UX
      const searchTimeout = setTimeout(() => {
        const query = searchQuery.toLowerCase();
        const filtered = searchData.filter(item => {
          const titleMatch = item.title.toLowerCase().includes(query);
          const categoryMatch = item.category.toLowerCase().includes(query);
          const descriptionMatch = item.description.toLowerCase().includes(query);
          const typeMatch = item.type.toLowerCase().includes(query);
          
          return titleMatch || categoryMatch || descriptionMatch || typeMatch;
        }).sort((a, b) => {
          // Prioritize title matches
          const aTitle = a.title.toLowerCase().includes(query) ? 1 : 0;
          const bTitle = b.title.toLowerCase().includes(query) ? 1 : 0;
          return bTitle - aTitle;
        }).slice(0, 8); // Limit results
        
        setSearchResults(filtered);
        setIsLoading(false);
      }, 300);

      return () => clearTimeout(searchTimeout);
    } else {
      setSearchResults([]);
      setIsLoading(false);
    }
  }, [searchQuery]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSearchClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleTrendingClick = (term: string) => {
    setSearchQuery(term);
  };

  const handleResultClick = (url: string) => {
    navigate(url);
    handleClose();
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'review': return '📱';
      case 'guide': return '📖';
      case 'comparison': return '⚖️';
      case 'news': return '📰';
      case 'video': return '🎥';
      case 'tip': return '💡';
      case 'page': return '📄';
      default: return '🔍';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'review': return 'text-blue-600';
      case 'guide': return 'text-green-600';
      case 'comparison': return 'text-purple-600';
      case 'news': return 'text-red-600';
      case 'video': return 'text-pink-600';
      case 'tip': return 'text-yellow-600';
      case 'page': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Button */}
      <Button 
        variant="ghost" 
        size="icon"
        onClick={handleSearchClick}
        className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
        title="Search (Ctrl+K)"
      >
        <Search className="w-4 h-4" />
      </Button>

      {/* Search Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" />
          
          {/* Search Modal */}
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-4 z-50">
            <Card className="bg-background/95 backdrop-blur-md border-border shadow-2xl animate-scale-in">
              {/* Search Input */}
              <div className="p-6 border-b border-border">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search reviews, guides, products, and more..."
                    className="pl-12 pr-12 h-14 text-lg bg-secondary/30 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleClose}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                  <span>Search across all content</span>
                  <span>Press ESC to close</span>
                </div>
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {isLoading && (
                  <div className="p-8 text-center">
                    <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
                    <div className="text-sm text-muted-foreground">Searching...</div>
                  </div>
                )}

                {!isLoading && searchQuery.trim() && searchResults.length > 0 && (
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                      Search Results ({searchResults.length})
                    </h3>
                    <div className="space-y-1">
                      {searchResults.map((result, index) => (
                        <div
                          key={index}
                          onClick={() => handleResultClick(result.url)}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-all duration-200 group cursor-pointer"
                        >
                          <div className="text-lg mt-0.5">{getTypeIcon(result.type)}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                                {result.title}
                              </div>
                              {result.rating && (
                                <div className="flex items-center gap-1 text-xs">
                                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                  <span className="text-muted-foreground">{result.rating}</span>
                                </div>
                              )}
                            </div>
                            <div className="text-sm text-muted-foreground mb-1 line-clamp-1">
                              {result.description}
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                              <span className={`font-medium ${getTypeColor(result.type)}`}>
                                {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                              </span>
                              <span className="text-muted-foreground">•</span>
                              <span className="text-muted-foreground">{result.category}</span>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {!isLoading && searchQuery.trim() && searchResults.length === 0 && (
                  <div className="p-8 text-center">
                    <div className="text-muted-foreground mb-2">No results found for "{searchQuery}"</div>
                    <div className="text-sm text-muted-foreground">Try searching for phones, laptops, reviews, or guides</div>
                  </div>
                )}

                {!searchQuery.trim() && (
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Trending Searches
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {trendingSearches.map((term, index) => (
                        <Button
                          key={index}
                          variant="secondary"
                          size="sm"
                          onClick={() => handleTrendingClick(term)}
                          className="hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                        >
                          {term}
                        </Button>
                      ))}
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                        Quick Access
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        <div
                          onClick={() => handleResultClick('/phones')}
                          className="p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-200 group cursor-pointer"
                        >
                          <div className="font-medium text-foreground group-hover:text-primary">📱 Phone Reviews</div>
                          <div className="text-xs text-muted-foreground">Latest smartphones</div>
                        </div>
                        <div
                          onClick={() => handleResultClick('/laptops')}
                          className="p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-200 group cursor-pointer"
                        >
                          <div className="font-medium text-foreground group-hover:text-primary">💻 Laptop Reviews</div>
                          <div className="text-xs text-muted-foreground">Gaming & productivity</div>
                        </div>
                        <div
                          onClick={() => handleResultClick('/buying-guides')}
                          className="p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-teal-600/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-200 group cursor-pointer"
                        >
                          <div className="font-medium text-foreground group-hover:text-primary">📖 Buying Guides</div>
                          <div className="text-xs text-muted-foreground">Expert recommendations</div>
                        </div>
                        <div
                          onClick={() => handleResultClick('/tech-news')}
                          className="p-3 rounded-lg bg-gradient-to-r from-red-500/10 to-orange-600/10 border border-red-500/20 hover:border-red-500/40 transition-all duration-200 group cursor-pointer"
                        >
                          <div className="font-medium text-foreground group-hover:text-primary">📰 Tech News</div>
                          <div className="text-xs text-muted-foreground">Latest updates</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBar;

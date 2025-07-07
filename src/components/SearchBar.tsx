import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, X, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock search data - in a real app, this would come from an API
  const mockSearchData = [
    { title: "iPhone 15 Pro Max Review", category: "Smartphones", url: "/phones", type: "review" },
    { title: "MacBook Pro M3 Max Review", category: "Laptops", url: "/laptops", type: "review" },
    { title: "Sony WH-1000XM5 Review", category: "Audio", url: "/audio", type: "review" },
    { title: "PlayStation 5 Pro Review", category: "Gaming", url: "/gaming", type: "review" },
    { title: "Canon R6 Mark II Review", category: "Cameras", url: "/cameras", type: "review" },
    { title: "Best Budget Phones 2024", category: "Buying Guides", url: "/buying-guides", type: "guide" },
    { title: "Gaming Laptop Guide", category: "Buying Guides", url: "/buying-guides", type: "guide" },
    { title: "Wireless Headphones Comparison", category: "Comparison Tools", url: "/comparison-tools", type: "comparison" },
  ];

  const trendingSearches = [
    "iPhone 15 Pro",
    "MacBook Pro M3",
    "Steam Deck",
    "AirPods Pro",
    "RTX 4090"
  ];

  // Filter search results based on query
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = mockSearchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
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

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Button */}
      <Button 
        variant="ghost" 
        size="icon"
        onClick={handleSearchClick}
        className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
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
                    placeholder="Search reviews, guides, and products..."
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
              </div>

              {/* Search Results */}
              <div className="max-h-96 overflow-y-auto">
                {searchQuery.trim() && searchResults.length > 0 && (
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                      Search Results
                    </h3>
                    <div className="space-y-2">
                      {searchResults.map((result, index) => (
                        <Link
                          key={index}
                          to={result.url}
                          onClick={handleClose}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-all duration-200 group"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full opacity-60 group-hover:opacity-100" />
                          <div className="flex-1">
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {result.title}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {result.category} • {result.type}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {searchQuery.trim() && searchResults.length === 0 && (
                  <div className="p-8 text-center">
                    <div className="text-muted-foreground mb-2">No results found for "{searchQuery}"</div>
                    <div className="text-sm text-muted-foreground">Try searching for phones, laptops, or headphones</div>
                  </div>
                )}

                {!searchQuery.trim() && (
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Trending Searches
                    </h3>
                    <div className="flex flex-wrap gap-2">
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
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                        Quick Links
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          to="/phones"
                          onClick={handleClose}
                          className="p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-200 group"
                        >
                          <div className="font-medium text-foreground group-hover:text-primary">Phone Reviews</div>
                          <div className="text-xs text-muted-foreground">Latest smartphones</div>
                        </Link>
                        <Link
                          to="/buying-guides"
                          onClick={handleClose}
                          className="p-3 rounded-lg bg-gradient-to-r from-green-500/10 to-teal-600/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-200 group"
                        >
                          <div className="font-medium text-foreground group-hover:text-primary">Buying Guides</div>
                          <div className="text-xs text-muted-foreground">Expert recommendations</div>
                        </Link>
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
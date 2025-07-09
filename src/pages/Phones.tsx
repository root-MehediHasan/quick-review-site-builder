import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Filter, X } from "lucide-react";
import { useState } from "react";
import phoneReview from "@/assets/phone-review.jpg";

const Phones = () => {
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedStorage, setSelectedStorage] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedOS, setSelectedOS] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const phoneReviews = [
    {
      title: "Samsung Galaxy S24 Ultra: The Android King Returns",
      excerpt: "Samsung's latest flagship brings impressive camera improvements, S Pen functionality, and AI features that set it apart from the competition.",
      rating: 8.8,
      category: "Smartphones",
      readTime: "8 min read",
      image: phoneReview,
      featured: true,
      brand: "Samsung",
      price: 1299,
      storage: "256GB",
      os: "Android",
      url: "/review/samsung-galaxy-s24-ultra"
    },
    {
      title: "iPhone 15 Pro Max: Apple's Camera Champion",
      excerpt: "The iPhone 15 Pro Max delivers exceptional performance with the new A17 Pro chip and groundbreaking camera capabilities.",
      rating: 9.2,
      category: "Smartphones",
      readTime: "10 min read",
      image: phoneReview,
      brand: "Apple",
      price: 1199,
      storage: "256GB",
      os: "iOS",
      url: "/review/iphone-15-pro-max"
    },
    {
      title: "Google Pixel 8 Pro: AI Photography Redefined",
      excerpt: "Google's computational photography expertise shines in the Pixel 8 Pro with enhanced AI features and improved hardware.",
      rating: 8.5,
      category: "Smartphones",
      readTime: "7 min read",
      image: phoneReview,
      brand: "Google",
      price: 999,
      storage: "128GB",
      os: "Android"
    },
    {
      title: "OnePlus 12: Speed Meets Elegance",
      excerpt: "OnePlus returns to form with blazing fast performance, excellent cameras, and refined design in their latest flagship.",
      rating: 8.3,
      category: "Smartphones",
      readTime: "6 min read",
      image: phoneReview,
      brand: "OnePlus",
      price: 799,
      storage: "256GB",
      os: "Android"
    },
    {
      title: "Xiaomi 14: Flagship Power at Mid-Range Price",
      excerpt: "Xiaomi delivers premium features and performance at an attractive price point with their latest flagship device.",
      rating: 8.0,
      category: "Smartphones",
      readTime: "5 min read",
      image: phoneReview,
      brand: "Xiaomi",
      price: 699,
      storage: "256GB",
      os: "Android"
    },
    {
      title: "Nothing Phone (2): Transparent Innovation",
      excerpt: "Nothing's second-generation phone brings unique design language with improved performance and distinctive LED patterns.",
      rating: 7.8,
      category: "Smartphones",
      readTime: "6 min read",
      image: phoneReview,
      brand: "Nothing",
      price: 599,
      storage: "128GB",
      os: "Android"
    }
  ];

  const brands = ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "Nothing"];
  const storageOptions = ["128GB", "256GB", "512GB", "1TB"];
  const osOptions = ["iOS", "Android"];

  const filteredReviews = phoneReviews.filter(review => {
    const matchesBrand = selectedBrand === "all" || review.brand === selectedBrand;
    const matchesStorage = selectedStorage === "all" || review.storage === selectedStorage;
    const matchesPrice = review.price >= priceRange[0] && review.price <= priceRange[1];
    const matchesOS = selectedOS === "all" || review.os === selectedOS;
    
    return matchesBrand && matchesStorage && matchesPrice && matchesOS;
  });

  const clearFilters = () => {
    setSelectedBrand("all");
    setSelectedStorage("all");
    setPriceRange([0, 2000]);
    setSelectedOS("all");
  };

  const activeFiltersCount = [
    selectedBrand !== "all",
    selectedStorage !== "all", 
    selectedOS !== "all",
    priceRange[0] !== 0 || priceRange[1] !== 2000
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Smartphone Reviews
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Phone</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive reviews of the latest smartphones, from flagship devices to budget-friendly options. 
              Find your perfect phone with our expert analysis and buying guides.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg">
                Latest Reviews
              </Button>
              <Button variant="outline" size="lg">
                Buying Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
              {activeFiltersCount > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <X className="w-4 h-4 mr-1" />
                  Clear All
                </Button>
              )}
            </div>
            <div className="text-sm text-muted-foreground">
              Showing {filteredReviews.length} of {phoneReviews.length} reviews
            </div>
          </div>

          {showFilters && (
            <Card className="p-6 bg-card border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Brand Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Brand</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Brands" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Brands</SelectItem>
                      {brands.map(brand => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Storage Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Storage</label>
                  <Select value={selectedStorage} onValueChange={setSelectedStorage}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Storage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Storage</SelectItem>
                      {storageOptions.map(storage => (
                        <SelectItem key={storage} value={storage}>{storage}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* OS Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Operating System</label>
                  <Select value={selectedOS} onValueChange={setSelectedOS}>
                    <SelectTrigger>
                      <SelectValue placeholder="All OS" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All OS</SelectItem>
                      {osOptions.map(os => (
                        <SelectItem key={os} value={os}>{os}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={2000}
                    min={0}
                    step={100}
                    className="w-full"
                  />
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Phone Reviews
            </h2>
            <p className="text-muted-foreground">
              In-depth analysis of the newest smartphones hitting the market
            </p>
          </div>

          {filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center bg-card border-border">
              <div className="text-muted-foreground mb-4">
                No phones match your current filters
              </div>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </Card>
          )}

          {filteredReviews.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Reviews
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Phones;
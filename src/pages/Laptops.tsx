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
import laptopReview from "@/assets/laptop-review.jpg";

const Laptops = () => {
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedProcessor, setSelectedProcessor] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedRAM, setSelectedRAM] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const laptopReviews = [
    {
      title: "MacBook Pro M3 Max: Creative Powerhouse Review",
      excerpt: "Apple's most powerful laptop gets even better with the M3 Max chip. We test video editing, 3D rendering, and battery life.",
      rating: 9.1,
      category: "Laptops",
      readTime: "12 min read",
      image: laptopReview,
      featured: true,
      brand: "Apple",
      price: 3199,
      processor: "M3 Max",
      ram: "36GB",
      type: "Creative",
      url: "/review/macbook-pro-m3-max"
    },
    {
      title: "Dell XPS 15: Premium Windows Alternative",
      excerpt: "Dell's flagship laptop combines stunning 4K display, powerful Intel processors, and elegant design for creative professionals.",
      rating: 8.7,
      category: "Laptops",
      readTime: "10 min read",
      image: laptopReview,
      brand: "Dell",
      price: 2499,
      processor: "Intel i9",
      ram: "32GB",
      type: "Creative"
    },
    {
      title: "ThinkPad X1 Carbon: Business Excellence",
      excerpt: "Lenovo's business laptop delivers exceptional keyboard, robust build quality, and enterprise-grade security features.",
      rating: 8.9,
      category: "Laptops",
      readTime: "9 min read",
      image: laptopReview,
      brand: "Lenovo",
      price: 1899,
      processor: "Intel i7",
      ram: "16GB",
      type: "Business"
    },
    {
      title: "ASUS ROG Zephyrus G16: Gaming Beast",
      excerpt: "High-performance gaming laptop with RTX 4080, exceptional cooling, and surprisingly portable design for serious gamers.",
      rating: 8.4,
      category: "Laptops",
      readTime: "11 min read",
      image: laptopReview,
      brand: "ASUS",
      price: 2799,
      processor: "AMD Ryzen 9",
      ram: "32GB",
      type: "Gaming"
    },
    {
      title: "Surface Laptop Studio 2: Creative Innovation",
      excerpt: "Microsoft's unique convertible laptop with touchscreen and stylus support perfect for designers and digital artists.",
      rating: 8.1,
      category: "Laptops",
      readTime: "8 min read",
      image: laptopReview,
      brand: "Microsoft",
      price: 2399,
      processor: "Intel i7",
      ram: "32GB",
      type: "Creative"
    },
    {
      title: "HP Spectre x360: Versatile 2-in-1",
      excerpt: "Premium convertible laptop that excels as both traditional laptop and tablet with excellent battery life and build quality.",
      rating: 8.3,
      category: "Laptops",
      readTime: "7 min read",
      image: laptopReview,
      brand: "HP",
      price: 1599,
      processor: "Intel i7",
      ram: "16GB",
      type: "2-in-1"
    }
  ];

  const brands = ["Apple", "Dell", "Lenovo", "ASUS", "Microsoft", "HP"];
  const processors = ["M3 Max", "Intel i9", "Intel i7", "AMD Ryzen 9"];
  const ramOptions = ["8GB", "16GB", "32GB", "36GB"];
  const typeOptions = ["Gaming", "Business", "Creative", "2-in-1", "Ultrabook"];

  const filteredReviews = laptopReviews.filter(review => {
    const matchesBrand = selectedBrand === "all" || review.brand === selectedBrand;
    const matchesProcessor = selectedProcessor === "all" || review.processor === selectedProcessor;
    const matchesPrice = review.price >= priceRange[0] && review.price <= priceRange[1];
    const matchesRAM = selectedRAM === "all" || review.ram === selectedRAM;
    const matchesType = selectedType === "all" || review.type === selectedType;
    
    return matchesBrand && matchesProcessor && matchesPrice && matchesRAM && matchesType;
  });

  const clearFilters = () => {
    setSelectedBrand("all");
    setSelectedProcessor("all");
    setPriceRange([0, 5000]);
    setSelectedRAM("all");
    setSelectedType("all");
  };

  const activeFiltersCount = [
    selectedBrand !== "all",
    selectedProcessor !== "all",
    selectedRAM !== "all",
    selectedType !== "all",
    priceRange[0] !== 0 || priceRange[1] !== 5000
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Laptop Reviews
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Laptop</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert reviews of laptops for every need - from ultrabooks and gaming laptops to workstations and 2-in-1 convertibles. 
              Find the perfect laptop for work, creativity, or gaming.
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
              Showing {filteredReviews.length} of {laptopReviews.length} reviews
            </div>
          </div>

          {showFilters && (
            <Card className="p-6 bg-card border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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

                {/* Processor Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Processor</label>
                  <Select value={selectedProcessor} onValueChange={setSelectedProcessor}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Processors" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Processors</SelectItem>
                      {processors.map(processor => (
                        <SelectItem key={processor} value={processor}>{processor}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* RAM Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">RAM</label>
                  <Select value={selectedRAM} onValueChange={setSelectedRAM}>
                    <SelectTrigger>
                      <SelectValue placeholder="All RAM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All RAM</SelectItem>
                      {ramOptions.map(ram => (
                        <SelectItem key={ram} value={ram}>{ram}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Type Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Type</label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      {typeOptions.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
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
                    max={5000}
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
              Latest Laptop Reviews
            </h2>
            <p className="text-muted-foreground">
              Comprehensive testing of performance, battery life, display quality, and build construction
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
                No laptops match your current filters
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

export default Laptops;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Zap, Scale, Trophy, Star, ArrowRight, Plus, X } from "lucide-react";
import { useState } from "react";
import phoneReview from "@/assets/phone-review.jpg";

const ComparisonTools = () => {
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      brand: "Apple",
      category: "Smartphones",
      price: "$1199",
      rating: 9.2,
      image: phoneReview,
      specs: {
        display: "6.7\" OLED",
        processor: "A17 Pro",
        storage: "256GB",
        camera: "48MP Triple",
        battery: "4441mAh"
      }
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      brand: "Samsung",
      category: "Smartphones", 
      price: "$1299",
      rating: 8.8,
      image: phoneReview,
      specs: {
        display: "6.8\" AMOLED",
        processor: "Snapdragon 8 Gen 3",
        storage: "256GB",
        camera: "200MP Quad",
        battery: "5000mAh"
      }
    },
    {
      id: 3,
      name: "MacBook Pro M3 Max",
      brand: "Apple",
      category: "Laptops",
      price: "$3199",
      rating: 9.1,
      image: phoneReview,
      specs: {
        display: "16\" Liquid Retina XDR",
        processor: "M3 Max",
        storage: "512GB SSD",
        memory: "36GB Unified",
        battery: "22 hours"
      }
    },
    {
      id: 4,
      name: "Dell XPS 15",
      brand: "Dell",
      category: "Laptops",
      price: "$2499",
      rating: 8.7,
      image: phoneReview,
      specs: {
        display: "15.6\" 4K OLED",
        processor: "Intel i9-13900H",
        storage: "1TB SSD",
        memory: "32GB DDR5",
        battery: "12 hours"
      }
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      brand: "Sony",
      category: "Audio",
      price: "$399",
      rating: 8.5,
      image: phoneReview,
      specs: {
        type: "Over-ear",
        driver: "30mm",
        battery: "30 hours",
        anc: "Industry-leading",
        connectivity: "Bluetooth 5.2"
      }
    },
    {
      id: 6,
      name: "Bose QuietComfort Ultra",
      brand: "Bose",
      category: "Audio",
      price: "$429",
      rating: 8.6,
      image: phoneReview,
      specs: {
        type: "Over-ear",
        driver: "35mm",
        battery: "24 hours",
        anc: "Advanced",
        connectivity: "Bluetooth 5.3"
      }
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToComparison = (product: any) => {
    if (selectedProducts.length < 3 && !selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const removeFromComparison = (productId: number) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
  };

  const clearComparison = () => {
    setSelectedProducts([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Product Comparisons</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Comparison</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Tools</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Compare products side-by-side with detailed specifications, performance metrics, and expert analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Panel */}
      {selectedProducts.length > 0 && (
        <section className="py-6 bg-primary/5 border-b border-border sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h3 className="font-semibold">Comparing ({selectedProducts.length}/3)</h3>
                <div className="flex gap-2">
                  {selectedProducts.map(product => (
                    <Badge key={product.id} variant="secondary" className="flex items-center gap-1">
                      {product.name}
                      <X 
                        className="w-3 h-3 cursor-pointer hover:text-destructive" 
                        onClick={() => removeFromComparison(product.id)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={clearComparison}>
                  Clear All
                </Button>
                <Button variant="glow" size="sm" disabled={selectedProducts.length < 2}>
                  Compare Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filters */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search products to compare..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Smartphones">Smartphones</SelectItem>
                <SelectItem value="Laptops">Laptops</SelectItem>
                <SelectItem value="Audio">Audio</SelectItem>
                <SelectItem value="Gaming">Gaming</SelectItem>
                <SelectItem value="Cameras">Cameras</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-elevated transition-all duration-300 bg-card border-border overflow-hidden">
                <div className="aspect-video bg-gradient-primary/20 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{product.brand}</Badge>
                    <span className="font-bold text-primary">{product.price}</span>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-muted-foreground capitalize">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => addToComparison(product)}
                      disabled={selectedProducts.length >= 3 || selectedProducts.find(p => p.id === product.id)}
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      {selectedProducts.find(p => p.id === product.id) ? 'Added' : 'Compare'}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {selectedProducts.length >= 2 && (
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Side-by-Side Comparison</h2>
              <p className="text-muted-foreground">Detailed specifications and features comparison</p>
            </div>

            <Card className="overflow-hidden bg-card border-border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Specification</th>
                      {selectedProducts.map(product => (
                        <th key={product.id} className="text-center p-4 min-w-48">
                          <div className="space-y-2">
                            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg mx-auto" />
                            <div className="font-semibold">{product.name}</div>
                            <div className="text-sm text-muted-foreground">{product.brand}</div>
                            <div className="font-bold text-primary">{product.price}</div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="p-4 font-medium">Overall Rating</td>
                      {selectedProducts.map(product => (
                        <td key={product.id} className="p-4 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-bold">{product.rating}/10</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                    {Object.keys(selectedProducts[0].specs).map(specKey => (
                      <tr key={specKey} className="border-t border-border">
                        <td className="p-4 font-medium capitalize">{specKey}</td>
                        {selectedProducts.map(product => (
                          <td key={product.id} className="p-4 text-center font-medium">
                            {product.specs[specKey]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ComparisonTools;
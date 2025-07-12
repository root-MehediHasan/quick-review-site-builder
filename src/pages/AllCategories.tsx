import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
  Tablet,
  Monitor,
  Keyboard,
  Mouse,
  Speaker,
  Tv
} from "lucide-react";

const AllCategories = () => {
  const categories = [
    {
      title: "Smartphones",
      count: "25+ Reviews",
      icon: Smartphone,
      gradient: "from-blue-500 to-purple-600",
      description: "Latest phones and mobile devices",
      url: "/phones"
    },
    {
      title: "Laptops",
      count: "18+ Reviews",
      icon: Laptop,
      gradient: "from-purple-500 to-pink-600",
      description: "Gaming, business, and creative laptops",
      url: "/laptops"
    },
    {
      title: "Audio",
      count: "22+ Reviews",
      icon: Headphones,
      gradient: "from-green-500 to-teal-600",
      description: "Headphones, earbuds, and speakers",
      url: "/audio"
    },
    {
      title: "Wearables",
      count: "12+ Reviews",
      icon: Watch,
      gradient: "from-orange-500 to-red-600",
      description: "Smartwatches and fitness trackers",
      url: "/wearables"
    },
    {
      title: "Cameras",
      count: "15+ Reviews",
      icon: Camera,
      gradient: "from-cyan-500 to-blue-600",
      description: "DSLRs, mirrorless, and action cameras",
      url: "/cameras"
    },
    {
      title: "Gaming",
      count: "20+ Reviews",
      icon: Gamepad2,
      gradient: "from-pink-500 to-rose-600",
      description: "Consoles, accessories, and gaming gear",
      url: "/gaming"
    },
    {
      title: "Tablets",
      count: "10+ Reviews",
      icon: Tablet,
      gradient: "from-indigo-500 to-purple-600",
      description: "iPads, Android tablets, and 2-in-1s",
      url: "/tablets"
    },
    {
      title: "Monitors",
      count: "14+ Reviews",
      icon: Monitor,
      gradient: "from-teal-500 to-green-600",
      description: "Gaming, professional, and ultrawide displays",
      url: "/monitors"
    },
    {
      title: "Keyboards",
      count: "8+ Reviews",
      icon: Keyboard,
      gradient: "from-yellow-500 to-orange-600",
      description: "Mechanical, wireless, and gaming keyboards",
      url: "/keyboards"
    },
    {
      title: "Mice",
      count: "6+ Reviews",
      icon: Mouse,
      gradient: "from-red-500 to-pink-600",
      description: "Gaming, productivity, and wireless mice",
      url: "/mice"
    },
    {
      title: "Speakers",
      count: "11+ Reviews",
      icon: Speaker,
      gradient: "from-blue-500 to-cyan-600",
      description: "Bluetooth, smart, and studio monitors",
      url: "/speakers"
    },
    {
      title: "Smart TVs",
      count: "9+ Reviews",
      icon: Tv,
      gradient: "from-purple-500 to-indigo-600",
      description: "4K, 8K, OLED, and QLED televisions",
      url: "/tvs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              All Categories
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Browse by</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Category</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our comprehensive collection of tech reviews organized by category.
              Find exactly what you're looking for with expert analysis and buying guides.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All Product Categories
            </h2>
            <p className="text-muted-foreground">
              Comprehensive reviews across every major tech category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link
                  to={category.url}
                  key={category.title}
                  className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-xl"
                  aria-label={`View all ${category.title} reviews`}
                >
                  <Card className="group cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-2 bg-card border-border p-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors text-lg">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {category.description}
                    </p>
                    <Badge variant="outline" className="text-xs" title={`${category.count} available reviews`}>
                      {category.count}
                    </Badge>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Can't find what you're looking for?
              </h3>
              <p className="text-muted-foreground mb-6">
                Suggest a product category or specific device you'd like us to review next.
              </p>
              <Button variant="glow" size="lg">
                Request a Review
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllCategories;

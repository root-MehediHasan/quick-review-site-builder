import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Laptop, Headphones, Watch, Camera, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      title: "Smartphones",
      count: "25+ Reviews",
      icon: Smartphone,
      gradient: "from-blue-500 to-purple-600",
      link: "/phones"
    },
    {
      title: "Laptops",
      count: "18+ Reviews", 
      icon: Laptop,
      gradient: "from-purple-500 to-pink-600",
      link: "/laptops"
    },
    {
      title: "Audio",
      count: "22+ Reviews",
      icon: Headphones,
      gradient: "from-green-500 to-teal-600",
      link: "/audio"
    },
    {
      title: "Wearables",
      count: "12+ Reviews",
      icon: Watch,
      gradient: "from-orange-500 to-red-600",
      link: "/categories"
    },
    {
      title: "Cameras",
      count: "15+ Reviews",
      icon: Camera,
      gradient: "from-cyan-500 to-blue-600",
      link: "/cameras"
    },
    {
      title: "Gaming",
      count: "20+ Reviews",
      icon: Gamepad2,
      gradient: "from-pink-500 to-rose-600",
      link: "/gaming"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Browse by</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find reviews for your favorite tech categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link 
                key={index}
                to={category.link}
                className="block"
              >
                <Card className="group cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-2 bg-card border-border p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count}
                  </p>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/categories">
            <Button variant="glow" size="lg">
              View All Categories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
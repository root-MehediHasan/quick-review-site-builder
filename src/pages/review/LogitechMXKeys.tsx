import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Star, Clock, Calendar, User, Share2, Bookmark, ThumbsUp, ThumbsDown, Keyboard, Bluetooth, Battery, Sun, Users } from "lucide-react";
import phoneReview from "@/assets/phone-review.jpg";

const LogitechMXKeys = () => {
  const overallRating = 8.6;
  
  const ratings = [
    { category: "Typing Experience", score: 8.8, description: "Comfortable low-profile keys with excellent tactile feedback" },
    { category: "Build Quality", score: 8.5, description: "Solid construction with premium materials and finish" },
    { category: "Wireless Performance", score: 9.0, description: "Excellent connectivity with reliable multi-device switching" },
    { category: "Battery Life", score: 9.2, description: "Outstanding battery life with smart power management" },
    { category: "Productivity Features", score: 8.9, description: "Smart illumination and multi-device workflow optimization" },
    { category: "Design", score: 8.7, description: "Sleek, professional design suitable for any workspace" },
    { category: "Value", score: 7.8, description: "Premium pricing but justified by features and reliability" }
  ];

  const pros = [
    "Excellent low-profile typing experience",
    "Smart illumination adapts to lighting conditions",
    "Seamless multi-device connectivity (3 devices)",
    "Outstanding battery life (10 days to 5 months)",
    "Logitech Flow integration for seamless workflow",
    "Comfortable for extended typing sessions",
    "Premium build quality and materials",
    "Easy Setup with Logitech Options+ software"
  ];

  const cons = [
    "Premium pricing compared to alternatives",
    "No mechanical switch options",
    "Limited customization compared to gaming keyboards",
    "No USB-C charging (micro-USB)",
    "Membrane switches may not appeal to mechanical enthusiasts"
  ];

  const specifications = [
    { category: "Layout & Keys", specs: [
      { name: "Layout", value: "Full-size (104 keys)" },
      { name: "Key Type", value: "Low-profile scissor switches" },
      { name: "Key Travel", value: "1.8mm" },
      { name: "Actuation Force", value: "65g" },
      { name: "Key Pitch", value: "19mm" },
      { name: "Key Shape", value: "Spherical dished keys" }
    ]},
    { category: "Connectivity & Power", specs: [
      { name: "Wireless", value: "Bluetooth Low Energy, Logi Bolt receiver" },
      { name: "Multi-device", value: "3 devices (Easy-Switch)" },
      { name: "Range", value: "10m wireless range" },
      { name: "Battery", value: "Built-in rechargeable Li-Po" },
      { name: "Battery Life", value: "10 days (backlit), 5 months (no backlight)" },
      { name: "Charging", value: "USB-A to micro-USB cable" }
    ]},
    { category: "Features", specs: [
      { name: "Backlighting", value: "Smart illumination with proximity sensor" },
      { name: "Software", value: "Logitech Options+ compatible" },
      { name: "Special Keys", value: "Function keys, media controls" },
      { name: "Flow Support", value: "Cross-computer control and file sharing" },
      { name: "Auto-sync", value: "Caps Lock and function key sync across devices" }
    ]},
    { category: "Physical", specs: [
      { name: "Dimensions", value: "430 x 131 x 20.5mm" },
      { name: "Weight", value: "810g" },
      { name: "Material", value: "Premium plastic with metal plate" },
      { name: "Color", value: "Graphite (dark gray)" },
      { name: "Compatibility", value: "Windows, macOS, Linux, iPadOS, Android" }
    ]}
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">Keyboard Review</Badge>
              <Badge variant="outline">Productivity</Badge>
              <Badge variant="outline">Wireless</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Logitech MX Keys: <span className="bg-gradient-primary bg-clip-text text-transparent">Productivity Champion</span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>By Jennifer Liu</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>March 22, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {renderStars(Math.round(overallRating))}
                </div>
                <span className="text-2xl font-bold">{overallRating}/10</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Main Review Content */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Hero Image */}
                <Card className="overflow-hidden">
                  <img 
                    src={phoneReview} 
                    alt="Logitech MX Keys"
                    className="w-full h-96 object-cover"
                  />
                </Card>

                {/* Introduction */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    The Logitech MX Keys stands as the gold standard for productivity-focused wireless keyboards, designed specifically for professionals who demand reliability, comfort, and seamless multi-device functionality. This low-profile keyboard combines premium build quality with intelligent features that adapt to your working style and environment.
                  </p>
                </div>

                {/* Key Features */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Keyboard className="h-5 w-5 text-primary" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Sun className="h-5 w-5 text-primary" />
                      <span>Smart Illumination</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <span>3-Device Connectivity</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Battery className="h-5 w-5 text-primary" />
                      <span>10-Day Battery Life</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Bluetooth className="h-5 w-5 text-primary" />
                      <span>Logitech Flow Support</span>
                    </div>
                  </div>
                </Card>

                {/* Detailed Review Sections */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Typing Experience & Comfort</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The MX Keys delivers an exceptional typing experience with its low-profile scissor switches that provide satisfying tactile feedback without the noise of mechanical switches. The spherical dished keys are perfectly shaped to match fingertip curves, reducing typing fatigue during extended work sessions. The 1.8mm key travel strikes an ideal balance between responsiveness and comfort.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The keyboard's full-size layout includes a numeric keypad and dedicated function keys, making it ideal for data entry and productivity tasks. Key spacing and layout are optimized for touch typing accuracy, with a familiar arrangement that requires minimal adaptation period for most users.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Smart Features & Connectivity</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The standout feature is the smart illumination system that automatically adjusts backlighting based on ambient light conditions and proximity sensors. The keys light up as your hands approach and dim when you move away, conserving battery while ensuring visibility when needed.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Multi-device connectivity is seamless with Easy-Switch buttons that allow instant switching between three paired devices. Logitech Flow integration enables cross-computer control and file sharing, making it perfect for users who work across multiple systems. The keyboard maintains separate key configurations for each connected device.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Battery Life & Build Quality</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Battery performance is exceptional, lasting up to 10 days with backlighting enabled and an impressive 5 months without. The built-in rechargeable battery eliminates the need for disposable batteries, and the micro-USB charging is convenient for most users. Build quality is premium throughout, with a solid feel and durable construction that withstands daily professional use.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                
                {/* Quick Verdict */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Verdict</h3>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-primary mb-2">{overallRating}/10</div>
                    <div className="flex justify-center mb-2">
                      {renderStars(Math.round(overallRating))}
                    </div>
                    <p className="text-sm text-muted-foreground">Very Good</p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    The Logitech MX Keys is the ultimate productivity keyboard with smart features and exceptional reliability.
                  </p>
                </Card>

                {/* Rating Breakdown */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Rating Breakdown</h3>
                  <div className="space-y-3">
                    {ratings.map((rating, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{rating.category}</span>
                          <span className="text-sm font-semibold">{rating.score}/10</span>
                        </div>
                        <Progress value={rating.score * 10} className="h-2" />
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Pros & Cons */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Pros & Cons</h3>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <ThumbsUp className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-600">Pros</span>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {pros.slice(0, 4).map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">+</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator className="my-4" />

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <ThumbsDown className="h-4 w-4 text-red-600" />
                      <span className="font-medium text-red-600">Cons</span>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {cons.slice(0, 3).map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">-</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specifications.map((section, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-lg font-semibold mb-4">{section.category}</h3>
                    <div className="space-y-3">
                      {section.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="flex justify-between">
                          <span className="text-muted-foreground">{spec.name}</span>
                          <span className="font-medium text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Boost Your Productivity</h3>
                <p className="text-muted-foreground mb-6">
                  The Logitech MX Keys combines comfort, reliability, and smart features for the ultimate productivity experience.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" variant="glow">Check Latest Price</Button>
                  <Button size="lg" variant="outline">Compare Models</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LogitechMXKeys;
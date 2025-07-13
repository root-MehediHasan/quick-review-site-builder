import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Star, Clock, Calendar, User, Share2, Bookmark, ThumbsUp, ThumbsDown, Monitor, Zap, Shield, Gamepad2, Eye } from "lucide-react";
import laptopReview from "@/assets/laptop-review.jpg";

const LGUltraGear27GP950 = () => {
  const overallRating = 9.0;
  
  const ratings = [
    { category: "Display Quality", score: 9.2, description: "Excellent 4K resolution with vibrant colors and HDR support" },
    { category: "Gaming Performance", score: 9.5, description: "144Hz refresh rate with 1ms response time for competitive gaming" },
    { category: "Design & Build", score: 8.8, description: "Sleek gaming aesthetic with sturdy construction" },
    { category: "Color Accuracy", score: 9.0, description: "DCI-P3 95% coverage with accurate color reproduction" },
    { category: "Connectivity", score: 8.5, description: "Good port selection including HDMI 2.1 and DisplayPort" },
    { category: "Ergonomics", score: 8.3, description: "Decent adjustability with tilt and height adjustment" },
    { category: "Value", score: 8.7, description: "Competitive pricing for premium 4K gaming features" }
  ];

  const pros = [
    "Stunning 4K resolution at 144Hz refresh rate",
    "Excellent HDR performance with VESA DisplayHDR 600",
    "1ms response time for competitive gaming",
    "HDMI 2.1 support for next-gen consoles",
    "Nano IPS technology for vibrant colors",
    "G-Sync Compatible and FreeSync Premium Pro",
    "Built-in KVM switch functionality",
    "Comprehensive gaming features and OSD"
  ];

  const cons = [
    "Limited ergonomic adjustments (no swivel)",
    "Aggressive gaming aesthetic may not suit all setups",
    "HDR performance could be brighter in some scenarios",
    "No USB-C connectivity",
    "Fan noise during intensive HDR content"
  ];

  const specifications = [
    { category: "Display", specs: [
      { name: "Size", value: "27 inches" },
      { name: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { name: "Panel Type", value: "Nano IPS" },
      { name: "Refresh Rate", value: "144Hz" },
      { name: "Response Time", value: "1ms (GtG)" },
      { name: "Color Gamut", value: "DCI-P3 95%, sRGB 135%" }
    ]},
    { category: "HDR & Gaming", specs: [
      { name: "HDR Standard", value: "VESA DisplayHDR 600" },
      { name: "Peak Brightness", value: "600 nits" },
      { name: "Adaptive Sync", value: "G-Sync Compatible, FreeSync Premium Pro" },
      { name: "VRR Range", value: "48-144Hz" },
      { name: "Gaming Features", value: "Black Stabilizer, Crosshair, FPS Counter" }
    ]},
    { category: "Connectivity", specs: [
      { name: "HDMI", value: "2x HDMI 2.1" },
      { name: "DisplayPort", value: "1x DisplayPort 1.4" },
      { name: "USB", value: "2x USB 3.0 downstream, 1x USB 3.0 upstream" },
      { name: "Audio", value: "3.5mm headphone jack" },
      { name: "Other", value: "KVM switch support" }
    ]},
    { category: "Physical", specs: [
      { name: "Stand Adjustments", value: "Tilt (-5° to +15°), Height (110mm)" },
      { name: "VESA Mount", value: "100 x 100mm" },
      { name: "Dimensions", value: "613 x 564 x 280mm (with stand)" },
      { name: "Weight", value: "7.4kg (with stand)" },
      { name: "Power", value: "65W typical, 150W max" }
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
              <Badge variant="secondary">Monitor Review</Badge>
              <Badge variant="outline">4K Gaming</Badge>
              <Badge variant="outline">144Hz</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              LG UltraGear 27GP950: <span className="bg-gradient-primary bg-clip-text text-transparent">4K Gaming Excellence</span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>By Sarah Chen</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>March 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>11 min read</span>
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
                    src={laptopReview} 
                    alt="LG UltraGear 27GP950"
                    className="w-full h-96 object-cover"
                  />
                </Card>

                {/* Introduction */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    The LG UltraGear 27GP950 represents the pinnacle of 4K gaming monitors, combining cutting-edge display technology with competitive gaming features. This 27-inch powerhouse delivers stunning visuals at 144Hz, making it an ideal choice for both competitive esports and immersive single-player experiences.
                  </p>
                </div>

                {/* Key Features */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Monitor className="h-5 w-5 text-primary" />
                      <span>4K UHD (3840x2160) Resolution</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Gamepad2 className="h-5 w-5 text-primary" />
                      <span>144Hz Refresh Rate</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Eye className="h-5 w-5 text-primary" />
                      <span>1ms Response Time</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-primary" />
                      <span>HDR600 Certification</span>
                    </div>
                  </div>
                </Card>

                {/* Detailed Review Sections */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Display Quality & Performance</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The 27GP950 excels in display quality with its Nano IPS panel delivering exceptional color accuracy and wide viewing angles. The 4K resolution at 27 inches provides crisp detail without requiring scaling, making it perfect for both gaming and productivity work. HDR performance is solid with VESA DisplayHDR 600 certification, though peak brightness could be higher for truly stunning HDR content.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Gaming performance is where this monitor truly shines. The 144Hz refresh rate combined with 1ms response time creates an incredibly smooth and responsive gaming experience. Support for both G-Sync Compatible and FreeSync Premium Pro ensures tear-free gaming across all platforms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Gaming Features & Connectivity</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      LG has equipped the 27GP950 with comprehensive gaming features including Black Stabilizer for better visibility in dark scenes, customizable crosshairs, and an FPS counter. The monitor's OSD is intuitive and easily accessible via the joystick control.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Connectivity options are robust with two HDMI 2.1 ports supporting full 4K 144Hz from next-gen consoles and modern graphics cards. The included DisplayPort 1.4 and USB hub functionality add versatility for multi-device setups. The built-in KVM switch is particularly useful for users who need to switch between different systems.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Design & Ergonomics</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The monitor sports LG's signature UltraGear gaming aesthetic with angular design elements and RGB lighting accents. Build quality is excellent with a sturdy stand and minimal flex. However, ergonomic adjustments are somewhat limited compared to premium office monitors, lacking swivel adjustment and offering only basic tilt and height controls.
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
                    <p className="text-sm text-muted-foreground">Excellent</p>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    The LG UltraGear 27GP950 sets the standard for 4K gaming monitors with exceptional performance and comprehensive features.
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
                <h3 className="text-2xl font-bold mb-4">Ready to Experience 4K Gaming?</h3>
                <p className="text-muted-foreground mb-6">
                  The LG UltraGear 27GP950 delivers exceptional 4K gaming performance with professional-grade features.
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

export default LGUltraGear27GP950;
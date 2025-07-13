import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Star, Clock, Calendar, User, Share2, Bookmark, ThumbsUp, ThumbsDown, Keyboard, Bluetooth, Battery, Wrench, Volume2 } from "lucide-react";
import phoneReview from "@/assets/phone-review.jpg";

const KeychronK8Pro = () => {
  const overallRating = 8.9;
  
  const ratings = [
    { category: "Build Quality", score: 9.2, description: "Premium aluminum construction with excellent durability" },
    { category: "Typing Experience", score: 9.0, description: "Satisfying mechanical switches with hot-swap capability" },
    { category: "Wireless Performance", score: 8.8, description: "Reliable Bluetooth with multi-device connectivity" },
    { category: "Battery Life", score: 8.5, description: "Good battery life with RGB on, excellent without" },
    { category: "Customization", score: 9.3, description: "Extensive customization with VIA software support" },
    { category: "Value", score: 8.7, description: "Premium features at reasonable price point" },
    { category: "Design", score: 9.1, description: "Clean, professional aesthetic suitable for any setup" }
  ];

  const pros = [
    "Hot-swappable switches for easy customization",
    "Premium aluminum build with excellent durability",
    "Reliable wireless connectivity with low latency",
    "VIA software support for advanced customization",
    "Mac and Windows compatibility with dedicated keys",
    "RGB backlighting with multiple effects",
    "Gasket mount design for improved typing feel",
    "Multiple connectivity options (Bluetooth, USB-C, 2.4GHz)"
  ];

  const cons = [
    "RGB significantly reduces battery life",
    "No dedicated media keys in compact layout",
    "Premium pricing compared to basic mechanical keyboards",
    "Learning curve for VIA customization software",
    "Keycap legends may wear over time with heavy use"
  ];

  const specifications = [
    { category: "Layout & Switches", specs: [
      { name: "Layout", value: "75% TKL (87 keys)" },
      { name: "Switch Type", value: "Hot-swappable mechanical (Gateron Pro Red/Blue/Brown)" },
      { name: "Actuation Force", value: "45g (Red), 50g (Brown), 55g (Blue)" },
      { name: "Key Travel", value: "4.0mm total, 2.0mm actuation" },
      { name: "Switch Lifespan", value: "50 million keystrokes" }
    ]},
    { category: "Connectivity & Power", specs: [
      { name: "Wireless", value: "Bluetooth 5.1, 2.4GHz wireless" },
      { name: "Multi-device", value: "3 Bluetooth devices" },
      { name: "Wired", value: "USB-C detachable cable" },
      { name: "Battery", value: "4000mAh lithium polymer" },
      { name: "Battery Life", value: "240 hours (backlight off), 100 hours (RGB on)" }
    ]},
    { category: "Construction", specs: [
      { name: "Frame Material", value: "CNC machined aluminum" },
      { name: "Plate", value: "Aluminum plate with gasket mount" },
      { name: "Stabilizers", value: "PCB-mounted screw-in stabilizers" },
      { name: "Keycaps", value: "Double-shot PBT with shine-through legends" },
      { name: "Profile", value: "OEM profile" }
    ]},
    { category: "Features & Software", specs: [
      { name: "RGB Lighting", value: "South-facing RGB with 16.8M colors" },
      { name: "Software", value: "VIA/QMK compatible" },
      { name: "Polling Rate", value: "1000Hz (wired), 125Hz (wireless)" },
      { name: "NKRO", value: "Full N-key rollover" },
      { name: "Dimensions", value: "332 x 146 x 34mm" },
      { name: "Weight", value: "960g" }
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
              <Badge variant="outline">Mechanical</Badge>
              <Badge variant="outline">Wireless</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Keychron K8 Pro: <span className="bg-gradient-primary bg-clip-text text-transparent">Wireless Mechanical Excellence</span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>By Alex Thompson</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>March 18, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9 min read</span>
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
                    alt="Keychron K8 Pro"
                    className="w-full h-96 object-cover"
                  />
                </Card>

                {/* Introduction */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    The Keychron K8 Pro represents the pinnacle of wireless mechanical keyboard design, combining premium build quality with extensive customization options. This 75% layout keyboard bridges the gap between enthusiast features and mainstream usability, making it an excellent choice for both professionals and mechanical keyboard enthusiasts.
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
                      <Wrench className="h-5 w-5 text-primary" />
                      <span>Hot-Swappable Switches</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Bluetooth className="h-5 w-5 text-primary" />
                      <span>Multi-Device Wireless</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Battery className="h-5 w-5 text-primary" />
                      <span>4000mAh Battery</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Volume2 className="h-5 w-5 text-primary" />
                      <span>VIA/QMK Support</span>
                    </div>
                  </div>
                </Card>

                {/* Detailed Review Sections */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Build Quality & Design</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The K8 Pro showcases exceptional build quality with its CNC-machined aluminum frame that feels substantial and premium. The gasket mount design provides a slightly flexible typing experience that's more comfortable than traditional top-mount keyboards. The aluminum plate contributes to a satisfying typing sound while maintaining structural integrity.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The 75% layout strikes an excellent balance between compactness and functionality, retaining the function row while minimizing desk footprint. The south-facing RGB LEDs provide excellent keycap compatibility and vibrant lighting effects that enhance both aesthetics and functionality in low-light conditions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Typing Experience & Switches</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The hot-swappable switch design is a standout feature, allowing users to experiment with different switch types without soldering. The included Gateron Pro switches offer smooth operation with consistent actuation across all variants. The pre-installed stabilizers are well-tuned, providing minimal rattle and smooth operation for larger keys.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The double-shot PBT keycaps resist shine and wear excellently, maintaining their texture and legends even after extended use. The OEM profile provides comfortable typing angles, and the shine-through legends work perfectly with the RGB backlighting system.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Wireless Performance & Battery</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Wireless connectivity is rock-solid with both Bluetooth 5.1 and 2.4GHz options providing reliable, low-latency connections. The ability to pair with three Bluetooth devices and switch between them seamlessly makes this keyboard excellent for multi-device workflows. Battery life is impressive, lasting weeks with moderate RGB usage and months with backlighting disabled.
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
                    The Keychron K8 Pro delivers enthusiast-level features in a polished, wireless package perfect for both work and play.
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
                <h3 className="text-2xl font-bold mb-4">Elevate Your Typing Experience</h3>
                <p className="text-muted-foreground mb-6">
                  The Keychron K8 Pro combines premium build quality with enthusiast features in a wireless package.
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

export default KeychronK8Pro;
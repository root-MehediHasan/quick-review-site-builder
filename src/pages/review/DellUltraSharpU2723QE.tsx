import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Star, Clock, Calendar, User, Share2, Bookmark, ThumbsUp, ThumbsDown, Monitor, Palette, Usb, Settings, RotateCcw } from "lucide-react";
import laptopReview from "@/assets/laptop-review.jpg";

const DellUltraSharpU2723QE = () => {
  const overallRating = 8.9;
  
  const ratings = [
    { category: "Display Quality", score: 9.3, description: "Outstanding 4K IPS panel with excellent uniformity" },
    { category: "Color Accuracy", score: 9.5, description: "Factory calibration with 99% sRGB and 95% DCI-P3 coverage" },
    { category: "Design & Build", score: 9.0, description: "Premium build quality with excellent ergonomics" },
    { category: "Connectivity", score: 9.2, description: "Comprehensive ports including USB-C with 90W power delivery" },
    { category: "Ergonomics", score: 9.1, description: "Full adjustment range with smooth operation" },
    { category: "Gaming Performance", score: 7.5, description: "Decent for casual gaming but limited to 60Hz" },
    { category: "Value", score: 8.3, description: "Premium pricing justified by professional features" }
  ];

  const pros = [
    "Exceptional color accuracy out of the box",
    "Comprehensive USB-C connectivity with 90W PD",
    "Outstanding build quality and ergonomics",
    "99% sRGB and 95% DCI-P3 color coverage",
    "ComfortView Plus reduces blue light emission",
    "KVM functionality for multi-device workflow",
    "Excellent uniformity across the panel",
    "Three-year premium panel guarantee"
  ];

  const cons = [
    "Limited to 60Hz refresh rate",
    "No HDR support",
    "Premium pricing for professional market",
    "Not ideal for competitive gaming",
    "No built-in speakers"
  ];

  const specifications = [
    { category: "Display", specs: [
      { name: "Size", value: "27 inches" },
      { name: "Resolution", value: "3840 x 2160 (4K UHD)" },
      { name: "Panel Type", value: "IPS Black" },
      { name: "Refresh Rate", value: "60Hz" },
      { name: "Response Time", value: "5ms (GtG)" },
      { name: "Color Gamut", value: "99% sRGB, 95% DCI-P3" }
    ]},
    { category: "Color & Calibration", specs: [
      { name: "Factory Calibration", value: "Delta E < 2" },
      { name: "Brightness", value: "400 nits" },
      { name: "Contrast Ratio", value: "1000:1 (2000:1 with IPS Black)" },
      { name: "Color Depth", value: "10-bit (8-bit + FRC)" },
      { name: "Uniformity", value: "Excellent (±2% variance)" }
    ]},
    { category: "Connectivity", specs: [
      { name: "USB-C", value: "1x USB-C (90W Power Delivery, DisplayPort Alt)" },
      { name: "HDMI", value: "1x HDMI 2.0" },
      { name: "DisplayPort", value: "1x DisplayPort 1.4" },
      { name: "USB Hub", value: "4x USB 3.2 downstream, 2x USB-C downstream" },
      { name: "Network", value: "RJ45 Ethernet (via USB-C)" }
    ]},
    { category: "Physical", specs: [
      { name: "Stand Adjustments", value: "Height (150mm), Tilt (-5° to +21°), Swivel (±45°), Pivot (90°)" },
      { name: "VESA Mount", value: "100 x 100mm" },
      { name: "Dimensions", value: "611 x 525 x 200mm (with stand)" },
      { name: "Weight", value: "8.29kg (with stand)" },
      { name: "Power", value: "45W typical, 210W max" }
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
              <Badge variant="outline">Professional</Badge>
              <Badge variant="outline">4K</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dell UltraSharp U2723QE: <span className="bg-gradient-primary bg-clip-text text-transparent">Professional Precision</span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>By Michael Rodriguez</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>March 20, 2024</span>
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
                    src={laptopReview} 
                    alt="Dell UltraSharp U2723QE"
                    className="w-full h-96 object-cover"
                  />
                </Card>

                {/* Introduction */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    The Dell UltraSharp U2723QE stands as a testament to professional monitor excellence, designed specifically for creative professionals, developers, and business users who demand exceptional color accuracy and comprehensive connectivity. This 27-inch 4K monitor combines Dell's renowned build quality with cutting-edge display technology.
                  </p>
                </div>

                {/* Key Features */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Monitor className="h-5 w-5 text-primary" />
                      <span>4K UHD IPS Black Panel</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Palette className="h-5 w-5 text-primary" />
                      <span>99% sRGB, 95% DCI-P3</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Usb className="h-5 w-5 text-primary" />
                      <span>USB-C 90W Power Delivery</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <RotateCcw className="h-5 w-5 text-primary" />
                      <span>Full Ergonomic Adjustability</span>
                    </div>
                  </div>
                </Card>

                {/* Detailed Review Sections */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Display Excellence</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The U2723QE features Dell's IPS Black technology, which significantly improves contrast ratio compared to traditional IPS panels. The 4K resolution provides excellent detail for professional work, while the factory calibration ensures accurate colors right out of the box with Delta E values typically under 2.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Color coverage is exceptional with 99% sRGB and 95% DCI-P3 gamut coverage, making this monitor suitable for photo editing, video production, and graphic design work. The panel uniformity is outstanding with minimal variation across the screen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Professional Connectivity</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The standout feature of the U2723QE is its comprehensive USB-C connectivity with 90W power delivery, allowing you to power most laptops while transmitting video and data through a single cable. The built-in USB hub provides excellent expansion with multiple USB 3.2 ports and even Ethernet connectivity.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      KVM functionality allows seamless switching between multiple connected devices, making it perfect for users who work with both desktop and laptop systems. The monitor can also daisy-chain with compatible displays for multi-monitor setups.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Build Quality & Ergonomics</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Dell's build quality is exemplary with a premium feel throughout. The stand offers full ergonomic adjustability including height, tilt, swivel, and pivot adjustments, all operating smoothly. The monitor also includes Dell's ComfortView Plus technology to reduce blue light emission without affecting color accuracy.
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
                    The Dell UltraSharp U2723QE is the gold standard for professional 4K monitors with exceptional color accuracy and connectivity.
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
                <h3 className="text-2xl font-bold mb-4">Perfect for Professional Work</h3>
                <p className="text-muted-foreground mb-6">
                  The Dell UltraSharp U2723QE delivers uncompromising quality for creative professionals and business users.
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

export default DellUltraSharpU2723QE;
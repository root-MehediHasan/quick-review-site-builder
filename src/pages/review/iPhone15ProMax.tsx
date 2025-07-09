import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Star, Clock, Calendar, User, Share2, Bookmark, ThumbsUp, ThumbsDown, Camera, Battery, Cpu, Smartphone, Zap, Shield } from "lucide-react";
import phoneReview from "@/assets/phone-review.jpg";

const iPhone15ProMax = () => {
  const overallRating = 9.2;
  
  const ratings = [
    { category: "Design & Build", score: 9.5, description: "Premium titanium construction with refined aesthetics" },
    { category: "Display", score: 9.3, description: "Stunning 6.7\" Super Retina XDR with ProMotion technology" },
    { category: "Performance", score: 9.8, description: "A17 Pro chip delivers unmatched mobile performance" },
    { category: "Camera", score: 9.4, description: "Revolutionary camera system with 5x telephoto zoom" },
    { category: "Battery Life", score: 8.8, description: "Excellent all-day battery with optimized power management" },
    { category: "Software", score: 9.0, description: "iOS 17 with seamless integration and new features" },
    { category: "Value", score: 8.2, description: "Premium pricing but justified by cutting-edge technology" }
  ];

  const pros = [
    "Titanium build feels premium and durable",
    "A17 Pro chip offers incredible performance",
    "Exceptional camera system with 5x telephoto",
    "Beautiful 6.7\" Super Retina XDR display",
    "Action Button adds useful customization",
    "USB-C finally replaces Lightning",
    "Excellent video recording capabilities",
    "iOS 17 brings useful new features"
  ];

  const cons = [
    "Very expensive starting price",
    "No significant battery life improvement",
    "Still limited to 60Hz on non-Pro models",
    "USB-C transfer speeds could be faster",
    "No always-on display improvements"
  ];

  const specifications = [
    { category: "Display", specs: [
      { name: "Size", value: "6.7 inches" },
      { name: "Resolution", value: "2796 x 1290 (460 ppi)" },
      { name: "Technology", value: "Super Retina XDR OLED" },
      { name: "Refresh Rate", value: "120Hz ProMotion" },
      { name: "Brightness", value: "2000 nits peak" }
    ]},
    { category: "Performance", specs: [
      { name: "Processor", value: "A17 Pro (3nm)" },
      { name: "RAM", value: "8GB" },
      { name: "Storage", value: "256GB/512GB/1TB" },
      { name: "OS", value: "iOS 17" }
    ]},
    { category: "Camera", specs: [
      { name: "Main", value: "48MP f/1.78 OIS" },
      { name: "Ultra-wide", value: "13MP f/2.2" },
      { name: "Telephoto", value: "12MP f/2.8 (5x zoom)" },
      { name: "Front", value: "12MP f/1.9" },
      { name: "Video", value: "4K ProRes, Action mode" }
    ]},
    { category: "Battery & Charging", specs: [
      { name: "Capacity", value: "4441mAh" },
      { name: "Wired Charging", value: "27W USB-C" },
      { name: "Wireless Charging", value: "15W MagSafe" },
      { name: "Battery Life", value: "Up to 29 hours video" }
    ]}
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">Smartphone Review</Badge>
              <Badge variant="outline">Editor's Choice</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              iPhone 15 Pro Max: <span className="bg-gradient-primary bg-clip-text text-transparent">Apple's Camera Champion</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Apple's flagship iPhone 15 Pro Max brings titanium construction, the powerful A17 Pro chip, 
              and a revolutionary camera system with 5x telephoto zoom. After extensive testing, 
              here's our comprehensive review of Apple's most advanced iPhone yet.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By Marcus Chen</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 10, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button variant="glow" size="lg">
                <Share2 className="w-4 h-4 mr-2" />
                Share Review
              </Button>
              <Button variant="outline" size="lg">
                <Bookmark className="w-4 h-4 mr-2" />
                Save for Later
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Hero Image */}
                <Card className="overflow-hidden">
                  <img 
                    src={phoneReview} 
                    alt="iPhone 15 Pro Max"
                    className="w-full h-96 object-cover"
                  />
                </Card>

                {/* Quick Verdict */}
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Star className="w-6 h-6 text-primary" />
                    Quick Verdict
                  </h2>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(overallRating / 2) ? 'fill-primary text-primary' : 'text-muted'}`} />
                      ))}
                    </div>
                    <span className="text-3xl font-bold text-primary">{overallRating}/10</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">Editor's Choice</Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    The iPhone 15 Pro Max represents Apple's most significant iPhone upgrade in years. 
                    With its titanium construction, groundbreaking A17 Pro chip, and exceptional camera system, 
                    it sets a new standard for flagship smartphones and justifies its premium positioning.
                  </p>
                </Card>

                {/* Design & Build */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Smartphone className="w-8 h-8 text-primary" />
                    Design & Build Quality
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The iPhone 15 Pro Max marks a significant evolution in Apple's design language. 
                      The switch from stainless steel to Grade 5 titanium results in a device that's 
                      19 grams lighter while maintaining exceptional durability. The brushed titanium 
                      finish feels premium and is more resistant to fingerprints than previous models.
                    </p>
                    <p>
                      The new Action Button replaces the traditional mute switch, offering customizable 
                      functionality that can launch apps, activate shortcuts, or control various system 
                      functions. It's a welcome addition that adds genuine utility to daily use.
                    </p>
                    <p>
                      The transition to USB-C is long overdue but welcome. While transfer speeds are 
                      limited to USB 2.0 speeds, the convenience of universal charging cannot be overstated. 
                      The Ceramic Shield front and textured matte glass back complete a design that feels 
                      both familiar and refreshingly new.
                    </p>
                  </div>
                </div>

                {/* Display */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Display Excellence</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The 6.7-inch Super Retina XDR display continues to impress with its vibrant colors, 
                      deep blacks, and excellent viewing angles. The 120Hz ProMotion technology makes 
                      scrolling and animations incredibly smooth, while the adaptive refresh rate helps 
                      preserve battery life.
                    </p>
                    <p>
                      Peak brightness reaches 2000 nits for HDR content and 1000 nits for typical use, 
                      ensuring excellent outdoor visibility. The Always-On display intelligently dims 
                      when not in use, providing at-a-glance information without significantly impacting 
                      battery life.
                    </p>
                    <p>
                      Color accuracy is exceptional, making it ideal for photo editing and content creation. 
                      The True Tone technology adapts the display's color temperature to ambient lighting, 
                      reducing eye strain during extended use.
                    </p>
                  </div>
                </div>

                {/* Camera System */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Camera className="w-8 h-8 text-primary" />
                    Camera Performance
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The camera system is where the iPhone 15 Pro Max truly shines. The new 48MP main 
                      sensor with second-generation sensor-shift OIS captures stunning detail with 
                      improved low-light performance. The default 24MP photos strike an excellent 
                      balance between file size and image quality.
                    </p>
                    <p>
                      The standout feature is the new 5x telephoto lens, a significant upgrade from 
                      the previous 3x zoom. This 120mm equivalent lens produces sharp, detailed images 
                      even at maximum zoom, making it genuinely useful for wildlife, sports, and 
                      portrait photography.
                    </p>
                    <p>
                      Portrait mode has been enhanced with better edge detection and more natural bokeh. 
                      The ability to adjust focus after taking a photo adds creative flexibility that 
                      professional photographers will appreciate.
                    </p>
                    <p>
                      Video recording capabilities are industry-leading, with 4K ProRes recording, 
                      Action mode stabilization, and Cinematic mode now available in 4K. The new 
                      Log recording option provides professional colorists with maximum flexibility 
                      in post-production.
                    </p>
                  </div>
                </div>

                {/* Performance */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Cpu className="w-8 h-8 text-primary" />
                    Performance & Software
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The A17 Pro chip, built on TSMC's 3nm process, delivers unprecedented mobile 
                      performance. CPU performance sees a 10% improvement over the A16 Bionic, while 
                      GPU performance jumps by 20%. This translates to smoother gaming, faster app 
                      launches, and more responsive multitasking.
                    </p>
                    <p>
                      The new GPU supports hardware-accelerated ray tracing, enabling console-quality 
                      gaming experiences. Titles like Resident Evil 4 and Assassin's Creed Mirage 
                      run smoothly with impressive visual fidelity that was previously impossible 
                      on mobile devices.
                    </p>
                    <p>
                      iOS 17 brings meaningful improvements including Interactive Widgets, improved 
                      autocorrect, and enhanced privacy features. The integration between hardware 
                      and software remains seamless, with features like StandBy mode taking advantage 
                      of the Always-On display.
                    </p>
                  </div>
                </div>

                {/* Battery Life */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Battery className="w-8 h-8 text-primary" />
                    Battery Life & Charging
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      Battery life remains excellent, easily lasting a full day of heavy use. Apple 
                      claims up to 29 hours of video playback, and in real-world testing, the device 
                      consistently delivered 8-10 hours of screen-on time with mixed usage including 
                      photography, gaming, and productivity tasks.
                    </p>
                    <p>
                      The switch to USB-C enables faster charging with compatible adapters, though 
                      Apple still doesn't include a charger in the box. MagSafe wireless charging 
                      at 15W remains convenient for overnight charging, while Qi compatibility 
                      ensures broad accessory support.
                    </p>
                    <p>
                      The new Optimized Battery Charging feature learns your routine and delays 
                      charging past 80% until you need it, helping preserve long-term battery health.
                    </p>
                  </div>
                </div>

                {/* Final Thoughts */}
                <Card className="p-8 bg-gradient-to-br from-secondary/30 to-background border-border">
                  <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The iPhone 15 Pro Max represents Apple at its finest - a device that pushes 
                    technological boundaries while maintaining the polish and integration that 
                    defines the iPhone experience. While the price is steep, the combination of 
                    titanium build quality, A17 Pro performance, and exceptional camera capabilities 
                    makes it the best iPhone ever created and a worthy flagship for 2024.
                  </p>
                  <div className="flex items-center gap-4">
                    <Button variant="glow">
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      Helpful Review
                    </Button>
                    <Button variant="outline">
                      <ThumbsDown className="w-4 h-4 mr-2" />
                      Not Helpful
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                
                {/* Overall Rating */}
                <Card className="p-6 bg-card border-border">
                  <h3 className="text-xl font-bold mb-4">Overall Rating</h3>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-primary mb-2">{overallRating}</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(overallRating / 2) ? 'fill-primary text-primary' : 'text-muted'}`} />
                      ))}
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">Editor's Choice</Badge>
                  </div>
                  
                  <div className="space-y-4">
                    {ratings.map((rating, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{rating.category}</span>
                          <span className="text-sm font-bold">{rating.score}/10</span>
                        </div>
                        <Progress value={rating.score * 10} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">{rating.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Pros & Cons */}
                <Card className="p-6 bg-card border-border">
                  <h3 className="text-xl font-bold mb-4">Pros & Cons</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                        <ThumbsUp className="w-4 h-4" />
                        Pros
                      </h4>
                      <ul className="space-y-2">
                        {pros.map((pro, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                        <ThumbsDown className="w-4 h-4" />
                        Cons
                      </h4>
                      <ul className="space-y-2">
                        {cons.map((con, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Specifications */}
                <Card className="p-6 bg-card border-border">
                  <h3 className="text-xl font-bold mb-4">Key Specifications</h3>
                  <div className="space-y-6">
                    {specifications.map((section, index) => (
                      <div key={index}>
                        <h4 className="font-semibold mb-3 text-primary">{section.category}</h4>
                        <div className="space-y-2">
                          {section.specs.map((spec, specIndex) => (
                            <div key={specIndex} className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{spec.name}:</span>
                              <span className="font-medium">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                        {index < specifications.length - 1 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Purchase Links */}
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <h3 className="text-xl font-bold mb-4">Where to Buy</h3>
                  <div className="space-y-3">
                    <Button variant="glow" className="w-full">
                      <Shield className="w-4 h-4 mr-2" />
                      Apple Store - $1,199
                    </Button>
                    <Button variant="outline" className="w-full">
                      Amazon - $1,149
                    </Button>
                    <Button variant="outline" className="w-full">
                      Best Buy - $1,199
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Prices may vary. We may earn a commission from purchases made through our links.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default iPhone15ProMax;
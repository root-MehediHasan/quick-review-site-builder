import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Star, Clock, Calendar, User, Share2, Bookmark, ThumbsUp, ThumbsDown, Cpu, Battery, Monitor, Zap, Shield } from "lucide-react";
import laptopReview from "@/assets/laptop-review.jpg";

const MacBookProM3Max = () => {
  const overallRating = 9.1;
  
  const ratings = [
    { category: "Design & Build", score: 9.5, description: "Premium aluminum construction with excellent craftsmanship" },
    { category: "Display", score: 9.4, description: "Stunning 16\" Liquid Retina XDR with ProMotion technology" },
    { category: "Performance", score: 9.8, description: "M3 Max chip delivers unmatched creative performance" },
    { category: "Battery Life", score: 8.8, description: "Excellent all-day battery with fast charging" },
    { category: "Keyboard & Trackpad", score: 9.2, description: "Magic Keyboard with improved key travel and large trackpad" },
    { category: "Ports & Connectivity", score: 8.5, description: "Good selection with Thunderbolt 4 and MagSafe 3" },
    { category: "Value", score: 8.0, description: "Premium pricing but justified for creative professionals" }
  ];

  const pros = [
    "Exceptional M3 Max performance for creative work",
    "Stunning 16\" Liquid Retina XDR display",
    "Excellent build quality and premium materials",
    "Outstanding battery life for a performance laptop",
    "Silent operation under most workloads",
    "Fast SSD storage with excellent performance",
    "Comprehensive port selection including MagSafe 3",
    "macOS Sonoma integration and optimization"
  ];

  const cons = [
    "Very expensive, especially with upgrades",
    "Limited to 8TB maximum storage",
    "No Face ID, only Touch ID",
    "Heavy at 2.16kg for portability",
    "Limited gaming performance vs dedicated GPUs"
  ];

  const specifications = [
    { category: "Display", specs: [
      { name: "Size", value: "16.2 inches" },
      { name: "Resolution", value: "3456 x 2234 (254 ppi)" },
      { name: "Technology", value: "Liquid Retina XDR" },
      { name: "Refresh Rate", value: "ProMotion up to 120Hz" },
      { name: "Brightness", value: "1000 nits sustained, 1600 nits peak HDR" }
    ]},
    { category: "Performance", specs: [
      { name: "Processor", value: "Apple M3 Max (3nm)" },
      { name: "CPU", value: "16-core (12P + 4E)" },
      { name: "GPU", value: "40-core GPU" },
      { name: "Neural Engine", value: "16-core Neural Engine" },
      { name: "Memory", value: "36GB Unified Memory" }
    ]},
    { category: "Storage & Memory", specs: [
      { name: "Storage", value: "512GB SSD" },
      { name: "Storage Options", value: "1TB/2TB/4TB/8TB" },
      { name: "Memory Bandwidth", value: "400GB/s" },
      { name: "Storage Speed", value: "Up to 7.4GB/s" }
    ]},
    { category: "Battery & Charging", specs: [
      { name: "Capacity", value: "100Wh" },
      { name: "Video Playback", value: "Up to 22 hours" },
      { name: "Charging", value: "140W MagSafe 3" },
      { name: "Fast Charge", value: "50% in 30 minutes" }
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
              <Badge variant="secondary">Laptop Review</Badge>
              <Badge variant="outline">Editor's Choice</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              MacBook Pro M3 Max: <span className="bg-gradient-primary bg-clip-text text-transparent">Creative Powerhouse Review</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Apple's most powerful laptop gets even better with the M3 Max chip. We test video editing, 
              3D rendering, and battery life to see if this creative powerhouse justifies its premium price tag.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By Marcus Chen</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 8, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
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
                    src={laptopReview} 
                    alt="MacBook Pro M3 Max"
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
                    The MacBook Pro M3 Max represents the pinnacle of Apple's laptop engineering. 
                    With groundbreaking performance, stunning display quality, and exceptional build craftsmanship, 
                    it's the ultimate creative workstation for professionals who demand the best.
                  </p>
                </Card>

                {/* Design & Build */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Monitor className="w-8 h-8 text-primary" />
                    Design & Build Quality
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      Apple has refined the MacBook Pro design to near perfection. The Space Black finish 
                      is not only stunning but also more resistant to fingerprints than previous generations. 
                      The aluminum unibody construction feels incredibly solid, with no flex or creaking 
                      under pressure.
                    </p>
                    <p>
                      At 2.16kg, it's substantial but well-balanced for a 16-inch laptop. The thermal 
                      design has been optimized for the M3 Max chip, with improved heat dissipation 
                      that keeps the laptop cool and quiet even under heavy workloads.
                    </p>
                    <p>
                      The port selection strikes a good balance with three Thunderbolt 4 ports, HDMI 2.1, 
                      SDXC card slot, and the beloved MagSafe 3 connector. The return of MagSafe has been 
                      universally praised by users for its convenience and safety.
                    </p>
                  </div>
                </div>

                {/* Display */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Display Excellence</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The 16.2-inch Liquid Retina XDR display is simply breathtaking. With 3456 x 2234 
                      resolution and 254 pixels per inch, text is razor-sharp and images are incredibly 
                      detailed. The mini-LED backlighting provides true blacks and brilliant highlights 
                      with 1000 nits sustained brightness and 1600 nits peak for HDR content.
                    </p>
                    <p>
                      ProMotion technology with adaptive refresh rates up to 120Hz makes scrolling 
                      buttery smooth and reduces motion blur. The P3 wide color gamut ensures accurate 
                      color reproduction for professional photo and video editing work.
                    </p>
                    <p>
                      True Tone technology automatically adjusts the display's color temperature to 
                      match ambient lighting, reducing eye strain during long editing sessions. 
                      The anti-reflective coating significantly reduces glare in bright environments.
                    </p>
                  </div>
                </div>

                {/* Performance */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Cpu className="w-8 h-8 text-primary" />
                    M3 Max Performance
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The M3 Max chip is a computational marvel. Built on TSMC's advanced 3nm process, 
                      it delivers unprecedented performance while maintaining excellent power efficiency. 
                      The 16-core CPU with 12 performance cores and 4 efficiency cores handles 
                      everything from basic tasks to intensive professional workloads with ease.
                    </p>
                    <p>
                      The 40-core GPU is where the M3 Max truly shines for creative work. 4K video 
                      editing in Final Cut Pro is buttery smooth, with real-time effects and color 
                      grading that would bring other laptops to their knees. 3D rendering in Blender 
                      and Cinema 4D shows significant improvements over the previous generation.
                    </p>
                    <p>
                      The 16-core Neural Engine accelerates machine learning tasks, making features 
                      like object removal in photos and voice transcription incredibly fast. The 
                      unified memory architecture with 400GB/s bandwidth ensures smooth multitasking 
                      even with memory-intensive applications.
                    </p>
                    <p>
                      In our testing, the MacBook Pro M3 Max consistently outperformed comparable 
                      Windows laptops in creative applications while running significantly cooler 
                      and quieter. The performance per watt is simply unmatched in the laptop space.
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
                      Battery life is where the M3 Max truly impresses. Apple claims up to 22 hours 
                      of video playback, and in real-world testing, we consistently achieved 12-15 
                      hours of mixed usage including video editing, web browsing, and productivity tasks.
                    </p>
                    <p>
                      Even under heavy creative workloads like 4K video editing or 3D rendering, 
                      the laptop easily lasted 6-8 hours, which is remarkable for this level of 
                      performance. The power efficiency of the M3 Max chip is a game-changer for 
                      mobile creative work.
                    </p>
                    <p>
                      The 140W MagSafe 3 charger can fast-charge the laptop to 50% in just 30 minutes, 
                      making it practical for quick top-ups between meetings or shoots. The charger 
                      itself is compact and well-designed, though we wish Apple included a longer cable.
                    </p>
                  </div>
                </div>

                {/* Software & Features */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">macOS Sonoma Integration</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      macOS Sonoma feels perfectly optimized for the M3 Max hardware. The tight 
                      integration between hardware and software results in smooth animations, 
                      instant app launches, and seamless multitasking. Stage Manager helps organize 
                      complex creative workflows with multiple apps and windows.
                    </p>
                    <p>
                      Professional creative applications like Final Cut Pro, Logic Pro, and Adobe 
                      Creative Suite have been optimized for Apple Silicon, delivering performance 
                      that often exceeds dedicated workstations. The Universal Control feature 
                      allows seamless integration with other Apple devices.
                    </p>
                    <p>
                      Security features like Touch ID, Secure Enclave, and the T2 security chip 
                      provide enterprise-grade protection for sensitive creative work. The laptop 
                      also supports up to four external displays, making it a true desktop replacement.
                    </p>
                  </div>
                </div>

                {/* Final Thoughts */}
                <Card className="p-8 bg-gradient-to-br from-secondary/30 to-background border-border">
                  <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The MacBook Pro M3 Max is the ultimate creative laptop, delivering desktop-class 
                    performance in a portable package. While the price is steep, the combination of 
                    raw performance, stunning display, excellent build quality, and outstanding battery 
                    life makes it worth every penny for creative professionals who demand the best.
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
                      Apple Store - $3,199
                    </Button>
                    <Button variant="outline" className="w-full">
                      Amazon - $3,149
                    </Button>
                    <Button variant="outline" className="w-full">
                      Best Buy - $3,199
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

export default MacBookProM3Max;
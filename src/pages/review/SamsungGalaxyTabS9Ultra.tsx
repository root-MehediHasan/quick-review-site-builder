import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Star, ThumbsUp, ThumbsDown, Share2, Bookmark, Monitor, Zap, Smartphone, Palette } from "lucide-react";

const SamsungGalaxyTabS9Ultra = () => {
  const overallRating = 4.5;
  const ratings = {
    performance: 4.6,
    display: 4.8,
    design: 4.4,
    battery: 4.3,
    value: 4.1
  };

  const prosAndCons = {
    pros: [
      "Massive 14.6\" AMOLED display with stunning quality",
      "Snapdragon 8 Gen 2 delivers flagship performance",
      "S Pen included with enhanced precision",
      "DeX mode transforms into laptop experience",
      "Excellent multitasking capabilities",
      "Premium build quality with IP68 rating"
    ],
    cons: [
      "Expensive pricing, especially with accessories",
      "Heavy at 732g - portability concerns",
      "Android tablet app ecosystem limitations",
      "No headphone jack",
      "Charging speed could be faster"
    ]
  };

  const androidApps = [
    { name: "Adobe Creative Suite", rating: 4.3, use: "Photo and video editing", performance: "Very Good" },
    { name: "Microsoft Office", rating: 4.7, use: "Productivity and documents", performance: "Excellent" },
    { name: "Clip Studio Paint", rating: 4.6, use: "Digital art and manga", performance: "Excellent" },
    { name: "Samsung Notes", rating: 4.5, use: "Note-taking and sketching", performance: "Very Good" },
    { name: "Google Workspace", rating: 4.4, use: "Cloud collaboration", performance: "Good" },
    { name: "Netflix/YouTube", rating: 4.8, use: "Media consumption", performance: "Excellent" }
  ];

  const dexFeatures = [
    "Desktop-like interface with taskbar and windows",
    "Multi-window support with drag & drop",
    "External monitor support up to 4K",
    "Wireless DeX to compatible TVs",
    "Keyboard and mouse optimization",
    "Desktop-class browser experience"
  ];

  const benchmarkResults = [
    { test: "AnTuTu v10", score: "1,246,789", comparison: "Top 3% Android devices" },
    { test: "Geekbench 6 (Multi-Core)", score: "5,234", comparison: "Matches flagship phones" },
    { test: "3DMark Wild Life", score: "8,567", comparison: "Console-quality gaming" },
    { test: "PCMark Work 3.0", score: "15,432", comparison: "Productivity powerhouse" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="secondary" className="mb-4">Tablet Review</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Samsung Galaxy Tab S9 Ultra: <span className="bg-gradient-primary bg-clip-text text-transparent">Android Excellence</span>
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <span>Reviewed December 18, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <span>By Android Central Team</span>
              </div>
              <span>11 min read</span>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share Review
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>

            <img 
              src="/api/placeholder/800/500" 
              alt="Samsung Galaxy Tab S9 Ultra"
              className="w-full h-64 md:h-96 object-cover rounded-lg bg-muted mb-8"
            />
          </div>

          {/* Overall Rating */}
          <Card className="p-8 mb-12 bg-gradient-secondary border-border">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Overall Rating</h2>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-6 h-6 ${i < Math.floor(overallRating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-3xl font-bold">{overallRating}/5</span>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="default" className="text-lg px-4 py-2">Best Android Tablet</Badge>
                <p className="text-sm text-muted-foreground mt-2">Premium Android experience</p>
              </div>
            </div>
            <p className="text-xl leading-relaxed text-muted-foreground">
              The Galaxy Tab S9 Ultra is Samsung's masterpiece—a massive, gorgeous Android tablet that 
              finally delivers a true laptop replacement experience. With its stunning 14.6-inch display, 
              flagship performance, and sophisticated DeX desktop mode, it's the Android tablet we've been waiting for.
            </p>
          </Card>

          {/* Key Specifications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Performance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processor</span>
                    <span className="font-semibold">Snapdragon 8 Gen 2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">RAM</span>
                    <span className="font-semibold">12GB/16GB LPDDR5X</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Storage</span>
                    <span className="font-semibold">256GB/512GB/1TB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">MicroSD</span>
                    <span className="font-semibold">Up to 1TB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">OS</span>
                    <span className="font-semibold">Android 13, One UI 5.1</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Display & Design</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Screen Size</span>
                    <span className="font-semibold">14.6 inches</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Technology</span>
                    <span className="font-semibold">Dynamic AMOLED 2X</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Resolution</span>
                    <span className="font-semibold">2960 x 1848</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Refresh Rate</span>
                    <span className="font-semibold">120Hz adaptive</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Weight</span>
                    <span className="font-semibold">732g</span>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Detailed Ratings */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Detailed Performance Ratings</h2>
            <Card className="p-8">
              <div className="space-y-6">
                {Object.entries(ratings).map(([category, rating]) => (
                  <div key={category} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold capitalize">{category}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{rating}/5</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <Progress value={rating * 20} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Display Excellence */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Display Excellence</h2>
            <div className="space-y-6">
              <Card className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">14.6" Dynamic AMOLED 2X</h3>
                    <p className="text-muted-foreground">
                      The largest, most impressive tablet display Samsung has ever created. With perfect blacks, 
                      vibrant colors, and incredible brightness, it's a joy to use for any content.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Technical Excellence</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Peak Brightness</span>
                        <span className="text-sm font-semibold">930 nits</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Color Gamut</span>
                        <span className="text-sm font-semibold">100% DCI-P3</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Contrast Ratio</span>
                        <span className="text-sm font-semibold">∞:1 (OLED)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">HDR Support</span>
                        <span className="text-sm font-semibold">HDR10+</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Usage Excellence</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <span>Perfect for media consumption and Netflix</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <span>Excellent for photo editing and design work</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <span>Great outdoor visibility in direct sunlight</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <span>Eye-friendly with blue light filtering</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">120Hz Adaptive Refresh Rate</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Smart Adaptation</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Automatically adjusts from 1Hz to 120Hz based on content, providing smooth scrolling 
                      when needed while conserving battery during static content viewing.
                    </p>
                    <h4 className="font-semibold mb-2">S Pen Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      The high refresh rate makes S Pen input incredibly responsive with minimal latency, 
                      perfect for note-taking and digital art creation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Gaming Performance</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Supported games run at buttery-smooth 120fps, making the Tab S9 Ultra 
                      one of the best gaming tablets available.
                    </p>
                    <h4 className="font-semibold mb-2">Power Efficiency</h4>
                    <p className="text-sm text-muted-foreground">
                      Variable refresh rate contributes to impressive battery life, automatically 
                      reducing power consumption during everyday tasks.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Performance Benchmarks */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Snapdragon 8 Gen 2 Performance</h2>
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Flagship Performance</h3>
                  <p className="text-muted-foreground">
                    The Snapdragon 8 Gen 2 delivers flagship smartphone performance in tablet form, 
                    handling everything from intensive gaming to professional content creation.
                  </p>
                </div>
              </div>

              <h4 className="font-bold mb-4">Benchmark Results</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {benchmarkResults.map((result, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h5 className="font-semibold">{result.test}</h5>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-2xl font-bold text-primary">{result.score}</span>
                      <Badge variant="secondary" className="text-xs">{result.comparison}</Badge>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Gaming Excellence</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Handles demanding games like Genshin Impact at max settings with consistent 
                    60fps performance. The large display makes gaming incredibly immersive.
                  </p>
                  <h4 className="font-semibold mb-2">Thermal Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced cooling system prevents throttling during extended gaming sessions, 
                    maintaining peak performance for hours.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Productivity Power</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Seamlessly runs multiple productivity apps simultaneously. Video editing, 
                    photo processing, and document work all feel smooth and responsive.
                  </p>
                  <h4 className="font-semibold mb-2">Future-Proof</h4>
                  <p className="text-sm text-muted-foreground">
                    With 12-16GB RAM and flagship processing power, this tablet will remain 
                    relevant and fast for years to come.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          <Separator className="my-12" />

          {/* Samsung DeX Experience */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Samsung DeX: Desktop Experience</h2>
            <div className="space-y-6">
              <Card className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">True Desktop Replacement</h3>
                    <p className="text-muted-foreground">
                      Samsung DeX transforms the Tab S9 Ultra into a full desktop experience, making it 
                      a genuine laptop replacement for many workflows.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">DeX Features</h4>
                    <ul className="space-y-2">
                      {dexFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Real-World Usage</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium">Office Work</h5>
                        <p className="text-xs text-muted-foreground">Full Microsoft Office suite works perfectly with keyboard and mouse</p>
                      </div>
                      <div>
                        <h5 className="font-medium">Web Browsing</h5>
                        <p className="text-xs text-muted-foreground">Desktop-class Chrome with tab management and extensions</p>
                      </div>
                      <div>
                        <h5 className="font-medium">File Management</h5>
                        <p className="text-xs text-muted-foreground">Windows-like file explorer with drag and drop functionality</p>
                      </div>
                      <div>
                        <h5 className="font-medium">Multitasking</h5>
                        <p className="text-xs text-muted-foreground">Run multiple windowed apps simultaneously like a desktop</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Book Cover Keyboard Pro</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Typing Experience</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Full-size keyboard with 1.5mm key travel provides laptop-quality typing. 
                      Backlit keys make it usable in any lighting condition.
                    </p>
                    <h4 className="font-semibold mb-2">Trackpad Quality</h4>
                    <p className="text-sm text-muted-foreground">
                      Large, responsive trackpad with multi-touch gestures. Precision cursor 
                      control makes DeX feel like a traditional laptop.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Build Quality</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Premium materials match the tablet's build quality. Magnetic attachment 
                      is secure and the keyboard charges wirelessly.
                    </p>
                    <h4 className="font-semibold mb-2">Value Proposition</h4>
                    <p className="text-sm text-muted-foreground">
                      At $349, it's expensive but transforms the tablet into a complete 
                      laptop replacement. Essential for serious productivity work.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Android App Ecosystem */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Android App Performance</h2>
            <Card className="p-6">
              <div className="space-y-4">
                {androidApps.map((app, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">{app.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(app.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium">{app.rating}/5</span>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-muted-foreground">Primary Use: </span>
                        <span className="text-sm font-medium">{app.use}</span>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Performance: </span>
                        <Badge variant="secondary" className="text-xs">{app.performance}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* S Pen Integration */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">S Pen Excellence</h2>
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional-Grade Digital Pen</h3>
                  <p className="text-muted-foreground">
                    The included S Pen offers 4,096 pressure levels and industry-leading accuracy, 
                    making it perfect for note-taking, digital art, and professional design work.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Technical Capabilities</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>2.8ms latency for natural writing feel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>4,096 pressure sensitivity levels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Tilt recognition for shading effects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Magnetic attachment and wireless charging</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Professional Applications</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Digital art creation with natural brush feel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Precise photo editing and retouching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Handwritten notes with palm rejection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Document annotation and markup</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>

          {/* Pros and Cons */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Pros and Cons</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ThumbsUp className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-600">Pros</h3>
                </div>
                <ul className="space-y-3">
                  {prosAndCons.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ThumbsDown className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-orange-600">Cons</h3>
                </div>
                <ul className="space-y-3">
                  {prosAndCons.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </section>

          {/* Pricing and Value */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Pricing & Value Analysis</h2>
            <Card className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <h3 className="font-bold mb-2">Wi-Fi Model</h3>
                  <div className="text-2xl font-bold text-primary mb-1">$1,199</div>
                  <p className="text-sm text-muted-foreground">256GB, 12GB RAM</p>
                  <p className="text-sm text-muted-foreground">Starting price</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold mb-2">5G Model</h3>
                  <div className="text-2xl font-bold text-primary mb-1">$1,419</div>
                  <p className="text-sm text-muted-foreground">256GB, 12GB RAM</p>
                  <p className="text-sm text-muted-foreground">Cellular connectivity</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold mb-2">Full Setup</h3>
                  <div className="text-2xl font-bold text-primary mb-1">$1,548</div>
                  <p className="text-sm text-muted-foreground">With Keyboard Pro</p>
                  <p className="text-sm text-muted-foreground">Complete package</p>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="font-bold mb-4">Value Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  The Tab S9 Ultra is expensive, but it delivers genuine value for users who need a premium 
                  Android tablet with laptop-replacement capabilities. The combination of flagship performance, 
                  stunning display, and DeX desktop mode justifies the premium pricing.
                </p>
                <p className="text-muted-foreground">
                  For users who primarily consume media or need basic productivity, cheaper tablets offer 
                  better value. But for power users, creatives, and professionals who need the absolute 
                  best Android tablet experience, the investment is worthwhile.
                </p>
              </div>
            </Card>
          </section>

          {/* Final Verdict */}
          <Card className="p-8 bg-gradient-secondary border-border">
            <h2 className="text-2xl font-bold mb-4">Final Verdict</h2>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-6 h-6 ${i < Math.floor(overallRating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold">{overallRating}/5</span>
                <Badge variant="default" className="ml-4">Best Android Tablet</Badge>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Samsung Galaxy Tab S9 Ultra is the Android tablet we've been waiting for. It successfully 
              combines flagship smartphone performance with a gorgeous large display and sophisticated 
              desktop-class software to create a true laptop replacement experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              While it's expensive and has some limitations due to Android's tablet app ecosystem, 
              the Tab S9 Ultra sets a new standard for what Android tablets can achieve. For users 
              invested in the Android ecosystem who need serious productivity capabilities, 
              it's simply the best option available.
            </p>
          </Card>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default SamsungGalaxyTabS9Ultra;
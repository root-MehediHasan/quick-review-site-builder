import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Star, Clock, Calendar, User, Share2, Bookmark, ThumbsUp, ThumbsDown, Gamepad2, Zap, Monitor, HardDrive, Shield } from "lucide-react";
import phoneReview from "@/assets/phone-review.jpg";

const PlayStation5Pro = () => {
  const overallRating = 9.0;
  
  const ratings = [
    { category: "Performance", score: 9.5, description: "Exceptional 4K gaming at 60fps with ray tracing" },
    { category: "Graphics Quality", score: 9.3, description: "Stunning visuals with enhanced ray tracing capabilities" },
    { category: "Game Library", score: 8.8, description: "Excellent exclusive titles and backward compatibility" },
    { category: "User Interface", score: 9.0, description: "Intuitive and fast PlayStation 5 interface" },
    { category: "Controller", score: 9.2, description: "DualSense controller with haptic feedback excellence" },
    { category: "Storage & Loading", score: 8.7, description: "Fast SSD with quick loading times" },
    { category: "Value", score: 8.0, description: "Premium pricing but justified by performance gains" }
  ];

  const pros = [
    "Exceptional 4K gaming performance at 60fps",
    "Enhanced ray tracing capabilities",
    "Backward compatibility with PS4 games",
    "Ultra-fast SSD with near-instant loading",
    "DualSense controller haptic feedback",
    "Excellent exclusive game library",
    "Quiet operation under load",
    "8K gaming support for future titles"
  ];

  const cons = [
    "Very expensive compared to standard PS5",
    "Large and heavy console design",
    "Limited 8K content currently available",
    "No significant UI improvements over PS5",
    "Storage expansion can be costly"
  ];

  const specifications = [
    { category: "Performance", specs: [
      { name: "CPU", value: "AMD Zen 2, 8-core @ 3.5GHz" },
      { name: "GPU", value: "Custom AMD RDNA 3, 36 CUs @ 2.18GHz" },
      { name: "Memory", value: "16GB GDDR6" },
      { name: "Memory Bandwidth", value: "448GB/s" },
      { name: "Performance Target", value: "4K @ 60fps, 8K capable" }
    ]},
    { category: "Storage", specs: [
      { name: "Internal Storage", value: "1TB Custom NVMe SSD" },
      { name: "Storage Expansion", value: "NVMe SSD slot (PCIe 4.0)" },
      { name: "External Storage", value: "USB HDD/SSD support" },
      { name: "Loading Performance", value: "Near-instant game loading" }
    ]},
    { category: "Audio/Visual", specs: [
      { name: "Video Output", value: "4K @ 120Hz, 8K @ 60Hz" },
      { name: "HDR Support", value: "HDR10, HDR10+, Dolby Vision" },
      { name: "Audio", value: "Tempest 3D AudioTech" },
      { name: "Ray Tracing", value: "Hardware-accelerated RT" },
      { name: "VRR Support", value: "Variable Refresh Rate" }
    ]},
    { category: "Connectivity", specs: [
      { name: "HDMI", value: "HDMI 2.1" },
      { name: "USB Ports", value: "2x USB-A 3.1, 1x USB-C" },
      { name: "Network", value: "Gigabit Ethernet" },
      { name: "Wireless", value: "Wi-Fi 6, Bluetooth 5.1" }
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
              <Badge variant="secondary">Gaming Console Review</Badge>
              <Badge variant="outline">Editor's Choice</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              PlayStation 5 Pro: <span className="bg-gradient-primary bg-clip-text text-transparent">Next-Gen Gaming Perfected</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Sony's upgraded console delivers 4K gaming at 60fps with ray tracing, enhanced SSD performance, 
              and exclusive titles that showcase the true potential of next-generation gaming. 
              We put it through extensive testing to see if it's worth the premium price.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By Jake Thompson</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 5, 2024</span>
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
                    src={phoneReview} 
                    alt="PlayStation 5 Pro"
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
                    The PlayStation 5 Pro represents the pinnacle of console gaming technology. 
                    With its ability to deliver true 4K gaming at 60fps with ray tracing enabled, 
                    it sets a new standard for console performance and visual fidelity.
                  </p>
                </Card>

                {/* Performance */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Zap className="w-8 h-8 text-primary" />
                    Gaming Performance
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The PlayStation 5 Pro's performance is simply outstanding. The upgraded GPU 
                      delivers approximately 45% more rendering power than the standard PS5, enabling 
                      true 4K gaming at 60fps in titles that previously required choosing between 
                      resolution and frame rate.
                    </p>
                    <p>
                      Ray tracing performance sees the most dramatic improvements. Games like Spider-Man 2 
                      and Ratchet & Clank: Rift Apart now maintain 60fps with ray-traced reflections 
                      and lighting enabled, creating visually stunning experiences that were previously 
                      impossible on console hardware.
                    </p>
                    <p>
                      The enhanced GPU also enables PlayStation Spectral Super Resolution (PSSR), 
                      Sony's AI-powered upscaling technology. This allows games to render at lower 
                      internal resolutions while outputting crisp 4K visuals, maximizing both 
                      performance and image quality.
                    </p>
                    <p>
                      Backward compatibility with PS4 games is excellent, with many titles receiving 
                      automatic performance boosts. Load times are virtually eliminated thanks to 
                      the custom NVMe SSD, making game switching and level transitions nearly instantaneous.
                    </p>
                  </div>
                </div>

                {/* Graphics & Visuals */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Monitor className="w-8 h-8 text-primary" />
                    Graphics & Visual Quality
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      Visual quality on the PS5 Pro is breathtaking. The enhanced ray tracing 
                      capabilities produce realistic reflections, shadows, and global illumination 
                      that bring game worlds to life. The difference is particularly noticeable 
                      in games like Gran Turismo 7, where car reflections and track lighting 
                      create photorealistic racing experiences.
                    </p>
                    <p>
                      HDR implementation is excellent, supporting HDR10, HDR10+, and Dolby Vision 
                      for compatible displays. The expanded color gamut and improved contrast 
                      ratios make games more vibrant and immersive than ever before.
                    </p>
                    <p>
                      8K gaming support is included for future-proofing, though current 8K content 
                      is limited. The console can output 8K at 60Hz for supported games and media, 
                      positioning it well for the next generation of ultra-high-resolution displays.
                    </p>
                    <p>
                      Variable Refresh Rate (VRR) support eliminates screen tearing and provides 
                      smoother gameplay on compatible displays. The implementation is seamless 
                      and works automatically with supported games and monitors.
                    </p>
                  </div>
                </div>

                {/* Game Library */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Game Library & Exclusives</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The PS5 Pro's game library is its strongest asset. Exclusive titles like 
                      The Last of Us Part I, God of War Ragnarök, and Horizon Forbidden West 
                      showcase the console's capabilities with stunning visuals and smooth performance 
                      that simply isn't possible on other platforms.
                    </p>
                    <p>
                      Third-party games also benefit significantly from the enhanced hardware. 
                      Titles like Cyberpunk 2077 and The Witcher 3 run at their highest settings 
                      with ray tracing enabled, delivering PC-quality visuals in a console package.
                    </p>
                    <p>
                      The PlayStation Plus game catalog provides excellent value, offering hundreds 
                      of games including many PS5 exclusives. The integration with the PS5 Pro's 
                      enhanced capabilities means even older titles look and perform better than ever.
                    </p>
                    <p>
                      Upcoming exclusives like Marvel's Wolverine and the next God of War installment 
                      are being developed specifically to take advantage of the PS5 Pro's enhanced 
                      capabilities, promising even more impressive gaming experiences.
                    </p>
                  </div>
                </div>

                {/* User Experience */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">User Experience & Interface</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The PlayStation 5 interface remains largely unchanged on the Pro model, 
                      which is both good and bad. The UI is fast, intuitive, and well-designed, 
                      but lacks significant improvements that might justify the Pro upgrade for 
                      interface reasons alone.
                    </p>
                    <p>
                      The DualSense controller continues to be a standout feature. Haptic feedback 
                      and adaptive triggers provide incredible immersion in supported games. 
                      The controller's battery life has been slightly improved, and the build 
                      quality remains excellent.
                    </p>
                    <p>
                      3D audio through the Tempest 3D AudioTech engine is impressive, providing 
                      accurate positional audio that enhances gameplay immersion. The technology 
                      works well with both headphones and TV speakers, though headphones provide 
                      the most dramatic effect.
                    </p>
                    <p>
                      System stability and performance are excellent. The console boots quickly, 
                      games launch almost instantly, and we experienced no crashes or significant 
                      bugs during our extensive testing period.
                    </p>
                  </div>
                </div>

                {/* Storage & Expandability */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <HardDrive className="w-8 h-8 text-primary" />
                    Storage & Expandability
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The 1TB internal SSD provides ample storage for most users, though game 
                      sizes continue to grow. The custom NVMe SSD delivers exceptional performance 
                      with loading times that are often under 10 seconds for most games.
                    </p>
                    <p>
                      Storage expansion is straightforward through the internal NVMe slot, though 
                      compatible drives can be expensive. The console also supports external USB 
                      storage for PS4 games and media, providing flexible storage options.
                    </p>
                    <p>
                      The storage compression technology allows games to take up less space while 
                      maintaining full quality, effectively increasing the usable storage capacity 
                      compared to traditional storage solutions.
                    </p>
                  </div>
                </div>

                {/* Final Thoughts */}
                <Card className="p-8 bg-gradient-to-br from-secondary/30 to-background border-border">
                  <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The PlayStation 5 Pro is the ultimate gaming console for enthusiasts who want 
                    the absolute best performance and visual quality. While the price is steep, 
                    the ability to play games at true 4K 60fps with ray tracing enabled makes it 
                    a worthwhile investment for serious gamers who have compatible displays.
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
                      PlayStation Direct - $699
                    </Button>
                    <Button variant="outline" className="w-full">
                      Amazon - $699
                    </Button>
                    <Button variant="outline" className="w-full">
                      Best Buy - $699
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

export default PlayStation5Pro;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Star, Clock, Calendar, User, Share2, Bookmark, ThumbsUp, ThumbsDown, Camera, Battery, Cpu, Smartphone, Zap, Shield } from "lucide-react";
import phoneReview from "@/assets/phone-review.jpg";

const SamsungGalaxyS24Ultra = () => {
  const overallRating = 8.8;
  
  const ratings = [
    { category: "Design & Build", score: 9.2, description: "Premium titanium construction with excellent ergonomics" },
    { category: "Display", score: 9.5, description: "Stunning 6.8\" Dynamic AMOLED 2X with 120Hz refresh rate" },
    { category: "Performance", score: 9.0, description: "Snapdragon 8 Gen 3 delivers flagship-level performance" },
    { category: "Camera", score: 8.8, description: "Versatile quad-camera system with excellent zoom capabilities" },
    { category: "Battery Life", score: 8.5, description: "All-day battery with fast charging and wireless charging" },
    { category: "Software", score: 8.0, description: "One UI 6.1 with useful AI features and S Pen integration" },
    { category: "Value", score: 7.8, description: "Premium pricing but justified by feature set and build quality" }
  ];

  const pros = [
    "Exceptional build quality with titanium frame",
    "Brilliant 6.8\" AMOLED display with 120Hz",
    "Versatile camera system with 100x Space Zoom",
    "S Pen integration for productivity",
    "Excellent performance with Snapdragon 8 Gen 3",
    "All-day battery life with fast charging",
    "Comprehensive AI features",
    "Water and dust resistance (IP68)"
  ];

  const cons = [
    "Premium pricing may deter some buyers",
    "Large size not comfortable for all users",
    "S Pen storage slot makes device thicker",
    "Some AI features feel gimmicky",
    "No charger included in the box"
  ];

  const specifications = [
    { category: "Display", specs: [
      { name: "Size", value: "6.8 inches" },
      { name: "Resolution", value: "3120 x 1440 (QHD+)" },
      { name: "Technology", value: "Dynamic AMOLED 2X" },
      { name: "Refresh Rate", value: "120Hz adaptive" },
      { name: "Brightness", value: "2600 nits peak" }
    ]},
    { category: "Performance", specs: [
      { name: "Processor", value: "Snapdragon 8 Gen 3" },
      { name: "RAM", value: "12GB" },
      { name: "Storage", value: "256GB/512GB/1TB" },
      { name: "OS", value: "Android 14 with One UI 6.1" }
    ]},
    { category: "Camera", specs: [
      { name: "Main", value: "200MP f/1.7 OIS" },
      { name: "Ultra-wide", value: "12MP f/2.2" },
      { name: "Telephoto 1", value: "10MP f/2.4 (3x zoom)" },
      { name: "Telephoto 2", value: "50MP f/3.4 (5x zoom)" },
      { name: "Front", value: "12MP f/2.2" }
    ]},
    { category: "Battery & Charging", specs: [
      { name: "Capacity", value: "5000mAh" },
      { name: "Wired Charging", value: "45W fast charging" },
      { name: "Wireless Charging", value: "15W Qi wireless" },
      { name: "Reverse Charging", value: "4.5W wireless" }
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
              <Badge variant="outline">Featured</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Samsung Galaxy S24 Ultra: <span className="bg-gradient-primary bg-clip-text text-transparent">The Android King Returns</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Samsung's latest flagship brings impressive camera improvements, S Pen functionality, 
              and AI features that set it apart from the competition. After weeks of testing, 
              here's our comprehensive review.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By Sarah Mitchell</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
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
                    alt="Samsung Galaxy S24 Ultra"
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
                    The Samsung Galaxy S24 Ultra represents the pinnacle of Android smartphone engineering. 
                    With its stunning titanium build, exceptional camera system, and integrated S Pen, 
                    it's a productivity powerhouse that doesn't compromise on style or performance.
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
                      Samsung has outdone itself with the Galaxy S24 Ultra's design. The switch to a titanium frame 
                      not only reduces weight but also provides exceptional durability. The matte finish on the back 
                      glass is a welcome change, significantly reducing fingerprint visibility while maintaining 
                      that premium feel.
                    </p>
                    <p>
                      The 6.8-inch display dominates the front with minimal bezels, while the camera bump has been 
                      refined to sit more flush with the body. The S Pen integration remains seamless, with the 
                      stylus clicking satisfyingly into place in the bottom-left corner.
                    </p>
                    <p>
                      At 232g, it's substantial but well-balanced. The IP68 rating ensures peace of mind for 
                      everyday use, and the Gorilla Glass Victus 2 protection on both front and back provides 
                      excellent scratch resistance.
                    </p>
                  </div>
                </div>

                {/* Display */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Display Excellence</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The 6.8-inch Dynamic AMOLED 2X display is simply stunning. With a QHD+ resolution 
                      (3120 x 1440) and adaptive 120Hz refresh rate, everything from scrolling through apps 
                      to watching videos feels incredibly smooth and responsive.
                    </p>
                    <p>
                      Peak brightness reaches an impressive 2600 nits, making outdoor visibility exceptional 
                      even in direct sunlight. Color accuracy is excellent out of the box, with support for 
                      HDR10+ content that truly shines when watching compatible videos.
                    </p>
                    <p>
                      The anti-reflective coating is a game-changer, significantly reducing glare and 
                      improving readability in various lighting conditions. Whether you're editing photos 
                      or reading articles, the display provides an immersive and comfortable viewing experience.
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
                      The quad-camera system is where the S24 Ultra truly shines. The 200MP main sensor 
                      captures incredible detail with excellent dynamic range. Samsung's computational 
                      photography has improved significantly, with more natural-looking results and 
                      better low-light performance.
                    </p>
                    <p>
                      The dual telephoto setup is impressive, offering 3x and 5x optical zoom with the 
                      ability to reach 100x digital zoom. While extreme zoom levels are more of a party 
                      trick, the 10x zoom produces genuinely usable results for distant subjects.
                    </p>
                    <p>
                      Night mode has been enhanced with better noise reduction and improved color accuracy. 
                      Portrait mode benefits from the telephoto lenses, creating beautiful bokeh effects 
                      with accurate edge detection.
                    </p>
                    <p>
                      Video recording supports 8K at 30fps and 4K at 60fps with excellent stabilization. 
                      The new AI-powered features like object removal and photo enhancement work surprisingly 
                      well, though they're not always perfect.
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
                      The Snapdragon 8 Gen 3 processor delivers flagship-level performance across all tasks. 
                      Whether you're multitasking with multiple apps, editing 4K videos, or playing demanding 
                      games, the S24 Ultra handles everything with ease.
                    </p>
                    <p>
                      One UI 6.1 brings a refined Android 14 experience with useful AI features integrated 
                      throughout. Circle to Search is genuinely helpful, and the real-time translation 
                      features work well for international communication.
                    </p>
                    <p>
                      The S Pen experience remains unmatched on Android. Whether taking notes, sketching, 
                      or navigating the interface, the stylus feels natural and responsive. The new AI 
                      note-taking features can summarize and organize your handwritten notes effectively.
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
                      The 5000mAh battery easily provides all-day usage for most users. With moderate to 
                      heavy usage including camera work, gaming, and productivity tasks, expect around 
                      6-7 hours of screen-on time.
                    </p>
                    <p>
                      45W fast charging gets you from 0-50% in about 30 minutes, while a full charge 
                      takes approximately 70 minutes. Wireless charging at 15W is convenient for 
                      overnight charging, and reverse wireless charging can help top up accessories.
                    </p>
                    <p>
                      Battery optimization has improved with better adaptive battery management that 
                      learns your usage patterns and adjusts accordingly.
                    </p>
                  </div>
                </div>

                {/* Final Thoughts */}
                <Card className="p-8 bg-gradient-to-br from-secondary/30 to-background border-border">
                  <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The Samsung Galaxy S24 Ultra is a remarkable achievement that pushes the boundaries 
                    of what a smartphone can do. While the premium pricing may give some pause, the 
                    combination of build quality, camera versatility, S Pen functionality, and overall 
                    performance justifies the investment for power users and professionals.
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
                      Samsung Store - $1,299
                    </Button>
                    <Button variant="outline" className="w-full">
                      Amazon - $1,249
                    </Button>
                    <Button variant="outline" className="w-full">
                      Best Buy - $1,299
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

export default SamsungGalaxyS24Ultra;
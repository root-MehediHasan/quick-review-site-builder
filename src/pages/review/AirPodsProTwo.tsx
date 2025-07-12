import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Star, Clock, Calendar, User, Share2, Bookmark, ThumbsUp, ThumbsDown, Headphones, Battery, Zap, Shield, Volume2 } from "lucide-react";
import headphonesReview from "@/assets/headphones-review.jpg";

const AirPodsProTwo = () => {
  const overallRating = 8.8;
  
  const ratings = [
    { category: "Design & Comfort", score: 9.0, description: "Excellent ergonomics with improved ear tip design" },
    { category: "Sound Quality", score: 8.9, description: "Rich, detailed audio with excellent spatial audio" },
    { category: "Noise Cancellation", score: 9.2, description: "Industry-leading ANC with adaptive transparency" },
    { category: "Battery Life", score: 8.5, description: "Solid battery with MagSafe charging case" },
    { category: "Features", score: 9.1, description: "Advanced features like head tracking and touch controls" },
    { category: "Call Quality", score: 8.7, description: "Clear calls with excellent noise suppression" },
    { category: "Value", score: 8.0, description: "Premium pricing but justified by feature set" }
  ];

  const pros = [
    "Significantly improved noise cancellation",
    "Excellent spatial audio with head tracking",
    "Comfortable fit with multiple ear tip sizes",
    "Seamless Apple ecosystem integration",
    "Touch controls work reliably",
    "MagSafe charging case convenience",
    "Adaptive transparency mode",
    "Find My integration with precision finding"
  ];

  const cons = [
    "Premium pricing compared to competitors",
    "Lightning charging (not USB-C)",
    "Limited customization on non-Apple devices",
    "Ear tips may not fit all ear shapes",
    "No multipoint Bluetooth connection"
  ];

  const specifications = [
    { category: "Audio", specs: [
      { name: "Driver", value: "Custom high-excursion Apple driver" },
      { name: "Frequency Response", value: "20Hz to 20,000Hz" },
      { name: "Spatial Audio", value: "Yes, with dynamic head tracking" },
      { name: "Audio Codecs", value: "AAC, SBC" },
      { name: "Adaptive EQ", value: "Yes, real-time tuning" }
    ]},
    { category: "Features", specs: [
      { name: "Active Noise Cancellation", value: "Yes, with computational audio" },
      { name: "Transparency Mode", value: "Adaptive transparency" },
      { name: "Touch Controls", value: "Force sensor with haptic feedback" },
      { name: "Voice Assistant", value: "Siri with voice activation" },
      { name: "Find My", value: "Precision Finding with U1 chip" }
    ]},
    { category: "Battery & Charging", specs: [
      { name: "Earbuds Battery", value: "Up to 6 hours (ANC on)" },
      { name: "Case Battery", value: "Up to 30 hours total" },
      { name: "Quick Charge", value: "5 min = 1 hour playback" },
      { name: "Charging", value: "Lightning, MagSafe, Qi wireless" },
      { name: "Case Features", value: "MagSafe compatible, speaker for Find My" }
    ]},
    { category: "Connectivity", specs: [
      { name: "Bluetooth", value: "Bluetooth 5.3" },
      { name: "Chip", value: "Apple H2 chip" },
      { name: "Compatibility", value: "iOS, iPadOS, macOS, tvOS, watchOS" },
      { name: "Automatic Switching", value: "Yes, between Apple devices" }
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
              <Badge variant="secondary">Audio Review</Badge>
              <Badge variant="outline">Editor's Choice</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AirPods Pro 2: <span className="bg-gradient-primary bg-clip-text text-transparent">Apple's Audio Evolution</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Apple's second-generation AirPods Pro bring enhanced noise cancellation, adaptive transparency, 
              and spatial audio to new heights. We test everything from sound quality to battery life 
              to see if these premium earbuds justify their price tag.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By Emma Rodriguez</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 12, 2024</span>
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
                    src={headphonesReview} 
                    alt="AirPods Pro 2"
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
                    The AirPods Pro 2 represent a significant evolution in Apple's audio technology. 
                    With dramatically improved noise cancellation, enhanced spatial audio, and seamless 
                    ecosystem integration, they set a new standard for premium wireless earbuds.
                  </p>
                </Card>

                {/* Design & Comfort */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Headphones className="w-8 h-8 text-primary" />
                    Design & Comfort
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      Apple has refined the AirPods Pro design with subtle but meaningful improvements. 
                      The earbuds themselves are virtually identical to the first generation, maintaining 
                      the familiar stem design that has become iconic. However, the new XS ear tip size 
                      addresses fit issues for users with smaller ears.
                    </p>
                    <p>
                      The charging case receives the most significant design updates. It's now compatible 
                      with MagSafe charging and includes a built-in speaker for Find My alerts. The 
                      lanyard loop is a simple but welcome addition for those who want to attach the 
                      case to bags or keychains.
                    </p>
                    <p>
                      Comfort remains excellent for extended listening sessions. The silicone ear tips 
                      create a secure seal without causing fatigue, and the lightweight design (5.3g per 
                      earbud) makes them virtually disappear in your ears during use.
                    </p>
                  </div>
                </div>

                {/* Sound Quality */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Volume2 className="w-8 h-8 text-primary" />
                    Sound Quality & Audio Features
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The AirPods Pro 2 deliver a rich, detailed sound signature that will please most 
                      listeners. The custom Apple driver provides excellent clarity across the frequency 
                      spectrum, with well-controlled bass that doesn't overwhelm the mids and highs. 
                      The soundstage is impressively wide for in-ear monitors.
                    </p>
                    <p>
                      Spatial Audio with dynamic head tracking is where these earbuds truly shine. 
                      The experience is remarkably immersive, creating a convincing sense of 3D space 
                      that adapts as you move your head. This works exceptionally well with Apple TV+ 
                      content and Apple Music's growing catalog of spatial audio tracks.
                    </p>
                    <p>
                      Adaptive EQ automatically tunes the sound to your ear shape in real-time, 
                      ensuring consistent audio quality regardless of fit variations. The computational 
                      audio processing powered by the H2 chip delivers noticeable improvements in 
                      dynamic range and detail retrieval compared to the original AirPods Pro.
                    </p>
                  </div>
                </div>

                {/* Noise Cancellation */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Active Noise Cancellation</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The noise cancellation performance is where the AirPods Pro 2 make their biggest 
                      leap forward. Apple claims up to 2x better noise cancellation than the original, 
                      and our testing confirms this dramatic improvement. Low-frequency noise like 
                      airplane engines and air conditioning is virtually eliminated.
                    </p>
                    <p>
                      The new H2 chip enables more sophisticated processing of ambient sound, resulting 
                      in more natural-sounding noise cancellation with fewer artifacts. Mid-frequency 
                      noise reduction has improved significantly, making these earbuds excellent for 
                      office environments and public transportation.
                    </p>
                    <p>
                      Adaptive Transparency mode is a standout feature that automatically adjusts 
                      transparency levels based on environmental noise. Loud sounds like construction 
                      noise or sirens are automatically reduced while preserving important ambient 
                      sounds like conversations and traffic.
                    </p>
                  </div>
                </div>

                {/* Battery & Charging */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Battery className="w-8 h-8 text-primary" />
                    Battery Life & Charging
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      Battery life sees modest improvements over the original AirPods Pro. You can 
                      expect up to 6 hours of listening time with ANC enabled, or up to 7 hours with 
                      ANC disabled. The charging case provides an additional 24 hours of battery life, 
                      bringing the total to 30 hours.
                    </p>
                    <p>
                      Fast charging remains impressive, with just 5 minutes in the case providing 
                      about 1 hour of listening time. The addition of MagSafe charging makes wireless 
                      charging more convenient and reliable, while maintaining compatibility with 
                      standard Qi wireless chargers.
                    </p>
                    <p>
                      The case's built-in speaker for Find My is surprisingly loud and helpful for 
                      locating misplaced earbuds. The U1 chip enables Precision Finding on compatible 
                      iPhones, providing directional guidance to locate your AirPods with remarkable accuracy.
                    </p>
                  </div>
                </div>

                {/* Features & Integration */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Features & Ecosystem Integration</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The AirPods Pro 2 excel in Apple's ecosystem with seamless device switching, 
                      automatic pairing, and deep integration with iOS features. Siri integration 
                      works flawlessly with voice activation, and the touch controls on the stems 
                      are responsive and intuitive.
                    </p>
                    <p>
                      New features like personalized spatial audio create a custom sound profile 
                      based on your ear shape using your iPhone's TrueDepth camera. The conversation 
                      boost feature enhances speech clarity for users with mild hearing difficulties.
                    </p>
                    <p>
                      For non-Apple device users, functionality is more limited. While basic playback 
                      and calling work fine, advanced features like spatial audio, adaptive EQ, and 
                      seamless device switching are exclusive to Apple devices.
                    </p>
                  </div>
                </div>

                {/* Final Thoughts */}
                <Card className="p-8 bg-gradient-to-br from-secondary/30 to-background border-border">
                  <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The AirPods Pro 2 represent a significant evolution in Apple's audio technology. 
                    While the improvements may seem incremental on paper, the real-world experience 
                    is substantially better. For Apple ecosystem users, these are easily the best 
                    wireless earbuds available, justifying their premium price with exceptional 
                    performance and seamless integration.
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
                      Apple Store - $249
                    </Button>
                    <Button variant="outline" className="w-full">
                      Amazon - $229
                    </Button>
                    <Button variant="outline" className="w-full">
                      Best Buy - $249
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

export default AirPodsProTwo;
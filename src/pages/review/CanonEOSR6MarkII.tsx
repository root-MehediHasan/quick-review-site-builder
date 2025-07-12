import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Star, Clock, Calendar, User, Share2, Bookmark, ThumbsUp, ThumbsDown, Camera, Zap, Eye, Shield, Image } from "lucide-react";
import laptopReview from "@/assets/laptop-review.jpg";

const CanonEOSR6MarkII = () => {
  const overallRating = 9.1;
  
  const ratings = [
    { category: "Image Quality", score: 9.3, description: "Excellent 24MP sensor with outstanding dynamic range" },
    { category: "Autofocus Performance", score: 9.5, description: "Dual Pixel CMOS AF II with subject detection" },
    { category: "Video Capabilities", score: 8.9, description: "4K 60p recording with excellent stabilization" },
    { category: "Build Quality", score: 9.0, description: "Weather-sealed magnesium alloy construction" },
    { category: "Battery Life", score: 8.7, description: "Improved battery performance over predecessor" },
    { category: "User Interface", score: 8.8, description: "Intuitive menu system and customizable controls" },
    { category: "Value", score: 8.5, description: "Competitive pricing for professional features" }
  ];

  const pros = [
    "Exceptional autofocus with subject detection",
    "Excellent image quality and dynamic range",
    "Outstanding in-body image stabilization",
    "4K 60p video recording capabilities",
    "Weather-sealed professional build quality",
    "Improved battery life over R6",
    "Dual card slots for backup and overflow",
    "Excellent low-light performance"
  ];

  const cons = [
    "No built-in flash",
    "Limited 4K recording time in some modes",
    "Menu system can be overwhelming for beginners",
    "Expensive lens ecosystem",
    "No headphone jack (requires adapter)"
  ];

  const specifications = [
    { category: "Sensor & Image", specs: [
      { name: "Sensor", value: "24.2MP Full-Frame CMOS" },
      { name: "Processor", value: "DIGIC X Image Processor" },
      { name: "ISO Range", value: "100-102,400 (expandable to 204,800)" },
      { name: "Dynamic Range", value: "Approximately 13 stops" },
      { name: "Image Stabilization", value: "5-axis In-Body IS (up to 8 stops)" }
    ]},
    { category: "Autofocus", specs: [
      { name: "AF System", value: "Dual Pixel CMOS AF II" },
      { name: "AF Points", value: "1,053 AF areas" },
      { name: "Subject Detection", value: "People, Animals, Vehicles" },
      { name: "Eye Detection", value: "Human and Animal Eye AF" },
      { name: "AF Speed", value: "As fast as 0.05 seconds" }
    ]},
    { category: "Video", specs: [
      { name: "4K Recording", value: "4K UHD at 60p/50p/30p/25p/24p" },
      { name: "Full HD", value: "1080p at up to 180p for slow motion" },
      { name: "Video Formats", value: "MP4 (H.264/H.265)" },
      { name: "Recording Limit", value: "Up to 6 hours continuous" },
      { name: "Video IS", value: "5-axis electronic stabilization" }
    ]},
    { category: "Build & Connectivity", specs: [
      { name: "Weather Sealing", value: "Dust and moisture resistant" },
      { name: "Memory Cards", value: "Dual SD/SDHC/SDXC (UHS-II)" },
      { name: "Connectivity", value: "Wi-Fi 6, Bluetooth 5.0" },
      { name: "Ports", value: "USB-C, Micro HDMI, 3.5mm mic" },
      { name: "Battery", value: "LP-E6NH (up to 760 shots)" }
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
              <Badge variant="secondary">Camera Review</Badge>
              <Badge variant="outline">Editor's Choice</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Canon EOS R6 Mark II: <span className="bg-gradient-primary bg-clip-text text-transparent">Mirrorless Mastery</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Canon's latest full-frame mirrorless camera combines excellent image quality with advanced autofocus 
              and video capabilities. We test everything from portrait photography to wildlife shooting 
              to see if this camera lives up to its professional aspirations.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By David Kumar</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>January 3, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
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
                    alt="Canon EOS R6 Mark II"
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
                    The Canon EOS R6 Mark II represents a significant evolution in Canon's mirrorless lineup. 
                    With exceptional autofocus performance, outstanding image stabilization, and professional 
                    video capabilities, it's an excellent choice for both photography and videography enthusiasts.
                  </p>
                </Card>

                {/* Image Quality */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Image className="w-8 h-8 text-primary" />
                    Image Quality & Sensor Performance
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The 24.2MP full-frame CMOS sensor in the R6 Mark II strikes an excellent balance 
                      between resolution and low-light performance. While it may seem modest compared 
                      to higher-resolution competitors, the larger pixel size contributes to exceptional 
                      image quality, particularly in challenging lighting conditions.
                    </p>
                    <p>
                      Dynamic range is outstanding, capturing approximately 13 stops of detail that 
                      allows for significant shadow and highlight recovery in post-processing. Colors 
                      are rendered beautifully with Canon's signature warm, pleasing tone that requires 
                      minimal correction for most shooting scenarios.
                    </p>
                    <p>
                      High ISO performance is where this camera truly excels. Images remain clean and 
                      usable up to ISO 6400, with acceptable noise levels extending to ISO 12800. 
                      The DIGIC X processor does an excellent job of noise reduction while preserving 
                      fine detail and color accuracy.
                    </p>
                    <p>
                      The camera's 14-bit RAW files provide excellent latitude for post-processing, 
                      with smooth gradations and natural color transitions that make it a joy to work 
                      with in professional editing applications.
                    </p>
                  </div>
                </div>

                {/* Autofocus System */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Eye className="w-8 h-8 text-primary" />
                    Autofocus Excellence
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The Dual Pixel CMOS AF II system is simply outstanding. With 1,053 AF areas 
                      covering approximately 100% of the frame, the camera can lock onto subjects 
                      almost anywhere in the composition. Focus acquisition is lightning-fast, 
                      often achieving lock in as little as 0.05 seconds.
                    </p>
                    <p>
                      Subject detection and tracking represent a major leap forward. The camera 
                      can reliably detect and track people, animals, and vehicles with remarkable 
                      accuracy. Eye detection works flawlessly for both humans and animals, 
                      maintaining sharp focus even when subjects are moving erratically.
                    </p>
                    <p>
                      For wildlife photography, the animal detection is particularly impressive. 
                      The camera can distinguish between different types of animals and maintain 
                      focus on eyes even when the subject is partially obscured or moving quickly 
                      through the frame.
                    </p>
                    <p>
                      Video autofocus is equally impressive, with smooth, silent focusing that 
                      doesn't hunt or cause distracting focus shifts during recording. The 
                      subject tracking works seamlessly in video mode, making it excellent 
                      for documentary and event videography.
                    </p>
                  </div>
                </div>

                {/* Image Stabilization */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">In-Body Image Stabilization</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The 5-axis in-body image stabilization system is one of the camera's standout 
                      features. Canon claims up to 8 stops of stabilization when combined with 
                      compatible IS lenses, and our testing confirms this is achievable in optimal 
                      conditions.
                    </p>
                    <p>
                      For handheld photography, the stabilization allows for sharp images at 
                      surprisingly slow shutter speeds. We consistently achieved sharp results 
                      at 1/4 second with a 50mm lens, opening up new creative possibilities for 
                      low-light photography without a tripod.
                    </p>
                    <p>
                      Video stabilization is equally impressive, providing smooth, professional-looking 
                      footage even when walking or moving with the camera. The electronic stabilization 
                      can be combined with optical stabilization for even better results, though 
                      this does result in a slight crop of the image.
                    </p>
                  </div>
                </div>

                {/* Video Capabilities */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <Zap className="w-8 h-8 text-primary" />
                    Video Performance
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      Video capabilities have been significantly improved over the original R6. 
                      The camera now records 4K UHD at up to 60p without the overheating issues 
                      that plagued its predecessor. Recording times of up to 6 hours are possible 
                      in most conditions, making it suitable for professional video work.
                    </p>
                    <p>
                      Image quality in video mode is excellent, with the same great color science 
                      and dynamic range as still photography. The camera supports both H.264 and 
                      H.265 codecs, with the latter providing better compression for longer recording 
                      times and smaller file sizes.
                    </p>
                    <p>
                      Slow-motion capabilities are impressive, with Full HD recording at up to 180fps 
                      for dramatic slow-motion effects. The high frame rate footage maintains good 
                      image quality and can be seamlessly integrated into standard frame rate projects.
                    </p>
                    <p>
                      Professional video features include focus peaking, zebras, and histogram display 
                      during recording. The camera also supports clean HDMI output for external 
                      recording devices, making it suitable for professional video production workflows.
                    </p>
                  </div>
                </div>

                {/* Build Quality & Ergonomics */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Build Quality & Ergonomics</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      The R6 Mark II features a robust magnesium alloy construction with comprehensive 
                      weather sealing. The camera feels solid and well-built, inspiring confidence 
                      for professional use in challenging conditions. The grip is deep and comfortable, 
                      providing secure handling even with larger lenses.
                    </p>
                    <p>
                      Dual SD card slots support UHS-II cards for fast write speeds and backup 
                      security. The battery life has been improved over the original R6, with 
                      approximately 760 shots per charge according to CIPA standards, though 
                      real-world usage often exceeds this figure.
                    </p>
                    <p>
                      The electronic viewfinder is bright and detailed with minimal lag, making 
                      it easy to track moving subjects. The rear LCD screen is fully articulating, 
                      which is invaluable for video work and creative photography angles.
                    </p>
                    <p>
                      Connectivity options include Wi-Fi 6 and Bluetooth 5.0 for fast image transfer 
                      and remote camera control. The Canon Camera Connect app works reliably for 
                      wireless tethering and social media sharing.
                    </p>
                  </div>
                </div>

                {/* Final Thoughts */}
                <Card className="p-8 bg-gradient-to-br from-secondary/30 to-background border-border">
                  <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The Canon EOS R6 Mark II is an exceptional camera that successfully addresses 
                    the limitations of its predecessor while building on its strengths. With 
                    outstanding autofocus, excellent image quality, and professional video capabilities, 
                    it's an ideal choice for photographers and videographers who need a versatile, 
                    reliable tool for professional work.
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
                      Canon Store - $2,499
                    </Button>
                    <Button variant="outline" className="w-full">
                      Amazon - $2,399
                    </Button>
                    <Button variant="outline" className="w-full">
                      B&H Photo - $2,499
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

export default CanonEOSR6MarkII;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Share2, Bookmark, Clock, User, Smartphone, Camera, Battery, Cpu } from "lucide-react";

const SamsungGalaxyS25 = () => {
  const expectedSpecs = [
    { category: "Display", spec: "6.2\" Dynamic AMOLED 2X", details: "3200x1440, 120Hz adaptive, 2600 nits peak" },
    { category: "Processor", spec: "Snapdragon 8 Gen 4", details: "4nm process, 30% performance boost" },
    { category: "RAM/Storage", spec: "12GB/256GB base", details: "LPDDR5X, UFS 4.0, up to 1TB" },
    { category: "Main Camera", spec: "200MP main sensor", details: "1/1.3\" sensor, OIS, 8K video" },
    { category: "Battery", spec: "4000mAh", details: "45W wired, 25W wireless, reverse charging" },
    { category: "Software", spec: "One UI 7.0", details: "Based on Android 15, 7 years updates" }
  ];

  const rumorsTimeline = [
    {
      date: "October 2024",
      source: "Ice Universe",
      rumor: "First leaked renders showing refined design with slimmer bezels"
    },
    {
      date: "November 2024",
      source: "SamMobile",
      rumor: "Confirmation of Snapdragon 8 Gen 4 for global variants"
    },
    {
      date: "December 2024",
      source: "91Mobiles",
      rumor: "Battery capacity and charging speeds leaked via regulatory filings"
    },
    {
      date: "January 2025",
      source: "TechTalk TV",
      rumor: "One UI 7.0 features preview and AI capabilities revealed"
    }
  ];

  const aiFeatures = [
    {
      icon: Camera,
      title: "AI Photo Enhancement",
      description: "Real-time photo processing with AI-powered noise reduction, color optimization, and subject enhancement."
    },
    {
      icon: Smartphone,
      title: "Smart Assistant",
      description: "Enhanced Bixby with on-device processing for faster responses and improved natural language understanding."
    },
    {
      icon: Battery,
      title: "Adaptive Performance",
      description: "AI-driven battery optimization and thermal management for sustained performance during intensive tasks."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="secondary" className="mb-4">Tech News</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Samsung Galaxy <span className="bg-gradient-primary bg-clip-text text-transparent">S25 Series</span>: Everything We Know So Far
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Updated 1 day ago</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By Alex Kim</span>
              </div>
              <span>8 min read</span>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>

            <img 
              src="/api/placeholder/800/400" 
              alt="Samsung Galaxy S25 Series concept"
              className="w-full h-64 md:h-96 object-cover rounded-lg bg-muted mb-8"
            />
          </div>

          {/* Lead Paragraph */}
          <Card className="p-8 mb-12 bg-gradient-secondary border-border">
            <p className="text-xl leading-relaxed text-muted-foreground">
              As we approach Samsung's anticipated Unpacked event in early 2025, leaks and rumors about the Galaxy S25 
              series are reaching fever pitch. From revolutionary camera upgrades to AI-powered features and design 
              refinements, here's everything we know about Samsung's next flagship lineup.
            </p>
          </Card>

          {/* Launch Timeline */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Expected Launch Timeline</h2>
            <Card className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">1</span>
                  </div>
                  <h3 className="font-bold mb-2">Unpacked Event</h3>
                  <p className="text-sm text-muted-foreground">January 22, 2025</p>
                  <p className="text-sm text-muted-foreground">San Francisco</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Pre-Orders</h3>
                  <p className="text-sm text-muted-foreground">January 24, 2025</p>
                  <p className="text-sm text-muted-foreground">Early bird offers</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">3</span>
                  </div>
                  <h3 className="font-bold mb-2">General Release</h3>
                  <p className="text-sm text-muted-foreground">February 7, 2025</p>
                  <p className="text-sm text-muted-foreground">Global availability</p>
                </div>
              </div>
            </Card>
          </section>

          {/* Expected Specifications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Expected Specifications</h2>
            <Card className="p-6">
              <div className="space-y-6">
                {expectedSpecs.map((item, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{item.category}</h3>
                        <p className="text-foreground font-semibold">{item.spec}</p>
                        <p className="text-sm text-muted-foreground mt-1">{item.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Design Changes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Design Evolution</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">What's New</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Slimmer Profile</p>
                      <p className="text-sm text-muted-foreground">7.8mm thickness, 20% thinner bezels</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Titanium Frame</p>
                      <p className="text-sm text-muted-foreground">Grade 2 titanium for Pro models</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">New Color Options</p>
                      <p className="text-sm text-muted-foreground">Cosmic Blue, Titanium Gray, Rose Gold</p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Camera Module</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Refined Island Design</p>
                      <p className="text-sm text-muted-foreground">Smaller, more integrated camera bump</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Periscope Zoom</p>
                      <p className="text-sm text-muted-foreground">10x optical zoom on Ultra model</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Improved Flash</p>
                      <p className="text-sm text-muted-foreground">Adaptive LED system</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          {/* AI Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">AI-Powered Features</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {aiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Galaxy AI 2.0</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Photography AI</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Enhanced computational photography with real-time HDR processing, improved night mode, 
                    and AI-powered portrait effects that rival professional cameras.
                  </p>
                  <h4 className="font-semibold mb-2">Video AI</h4>
                  <p className="text-sm text-muted-foreground">
                    8K video recording with AI stabilization, automatic scene optimization, 
                    and real-time object tracking for smoother footage.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Productivity AI</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Smart text recognition, live translation in 95 languages, and AI-powered 
                    note-taking with automatic summarization and categorization.
                  </p>
                  <h4 className="font-semibold mb-2">Performance AI</h4>
                  <p className="text-sm text-muted-foreground">
                    Intelligent resource management that predicts usage patterns and optimizes 
                    performance for better battery life and thermal efficiency.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          <Separator className="my-12" />

          {/* Rumors Timeline */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Rumors & Leaks Timeline</h2>
            <div className="space-y-6">
              {rumorsTimeline.map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      {index < rumorsTimeline.length - 1 && (
                        <div className="w-0.5 h-16 bg-border mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <Badge variant="outline">{item.date}</Badge>
                        <span className="text-sm font-semibold">{item.source}</span>
                      </div>
                      <p className="text-muted-foreground">{item.rumor}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Pricing Expectations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Expected Pricing</h2>
            <Card className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Galaxy S25</h3>
                  <div className="text-3xl font-bold text-primary mb-2">$899</div>
                  <p className="text-sm text-muted-foreground">128GB base model</p>
                  <p className="text-sm text-muted-foreground">+$100 for 256GB</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Galaxy S25+</h3>
                  <div className="text-3xl font-bold text-primary mb-2">$1,099</div>
                  <p className="text-sm text-muted-foreground">256GB base model</p>
                  <p className="text-sm text-muted-foreground">+$200 for 512GB</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Galaxy S25 Ultra</h3>
                  <div className="text-3xl font-bold text-primary mb-2">$1,399</div>
                  <p className="text-sm text-muted-foreground">256GB base model</p>
                  <p className="text-sm text-muted-foreground">+$200 for 512GB/1TB</p>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                *Prices may vary by region. Trade-in deals and early bird offers expected at launch.
              </p>
            </Card>
          </section>

          {/* Conclusion */}
          <Card className="p-8 bg-gradient-secondary border-border">
            <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Galaxy S25 series appears to be Samsung's most ambitious smartphone lineup yet, combining 
              cutting-edge hardware with revolutionary AI capabilities. While maintaining the design language 
              that users love, Samsung is focusing on refinement and intelligence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With just weeks until the official announcement, we'll soon see how these rumors translate 
              into reality. Based on current leaks, the S25 series could set new standards for Android 
              flagships and put significant pressure on Apple's iPhone 16 series.
            </p>
          </Card>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default SamsungGalaxyS25;
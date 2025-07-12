import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Share2, Bookmark, Clock, User, Smartphone, Zap, Heart, Settings } from "lucide-react";

const SamsungGalaxyWatch6 = () => {
  const androidFeatures = [
    {
      icon: Smartphone,
      title: "Seamless Android Integration",
      description: "Deep integration with Android ecosystem, supporting Google services and third-party apps natively."
    },
    {
      icon: Zap,
      title: "One UI Watch 5.0",
      description: "Refined interface with improved customization options and smoother app transitions."
    },
    {
      icon: Heart,
      title: "Advanced Health Suite",
      description: "Comprehensive health monitoring including sleep coaching and stress management tools."
    },
    {
      icon: Settings,
      title: "Wear OS 4 Optimization",
      description: "Enhanced performance and battery life with the latest Wear OS optimizations."
    }
  ];

  const performanceMetrics = [
    { metric: "App Launch Speed", score: 88, description: "40% faster than Watch 5" },
    { metric: "Battery Life", score: 92, description: "40 hours typical usage" },
    { metric: "Health Accuracy", score: 90, description: "Clinical-grade sensors" },
    { metric: "Connectivity", score: 85, description: "LTE and Wi-Fi optimization" }
  ];

  const comparisons = [
    {
      feature: "Processor",
      watch6: "Exynos W930 (5nm)",
      watch5: "Exynos W920 (5nm)",
      improvement: "18% performance boost"
    },
    {
      feature: "RAM",
      watch6: "2GB LPDDR4X",
      watch5: "1.5GB LPDDR4X",
      improvement: "33% more memory"
    },
    {
      feature: "Storage",
      watch6: "16GB",
      watch5: "16GB",
      improvement: "Same capacity"
    },
    {
      feature: "Battery",
      watch6: "425mAh (44mm)",
      watch5: "410mAh (44mm)",
      improvement: "4% larger capacity"
    },
    {
      feature: "Display",
      watch6: "1.5\" Super AMOLED",
      watch5: "1.4\" Super AMOLED",
      improvement: "Larger, brighter display"
    }
  ];

  const healthFeatures = [
    "Advanced Sleep Coaching with personalized insights",
    "Body Composition Analysis (BIA sensor)",
    "Blood Pressure Monitoring (with compatible phones)",
    "ECG Recording and Irregular Heart Rhythm alerts",
    "SpO2 Blood Oxygen tracking",
    "Stress Management with guided breathing",
    "Menstrual Cycle tracking with temperature",
    "90+ Workout modes with auto-detection"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="secondary" className="mb-4">Wearables</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Samsung Galaxy Watch 6: <span className="bg-gradient-primary bg-clip-text text-transparent">Android's Best Companion</span>
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Published 2 days ago</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By James Park</span>
              </div>
              <span>6 min read</span>
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
              alt="Samsung Galaxy Watch 6"
              className="w-full h-64 md:h-96 object-cover rounded-lg bg-muted mb-8"
            />
          </div>

          {/* Lead Paragraph */}
          <Card className="p-8 mb-12 bg-gradient-secondary border-border">
            <p className="text-xl leading-relaxed text-muted-foreground">
              The Samsung Galaxy Watch 6 emerges as the definitive Android smartwatch, combining Samsung's 
              hardware excellence with Google's Wear OS 4 to create a seamless, powerful, and health-focused 
              wearable experience. With enhanced performance, extended battery life, and deeper Android 
              integration, it's positioned to dominate the Android wearable market.
            </p>
          </Card>

          {/* Android Integration Excellence */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Android Ecosystem Mastery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {androidFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Performance Analysis */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Performance Excellence</h2>
            <Card className="p-8">
              <p className="text-muted-foreground mb-6">
                Our comprehensive testing reveals significant improvements across all performance metrics, 
                making the Galaxy Watch 6 the most capable Android smartwatch to date.
              </p>
              <div className="space-y-6">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{metric.metric}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{metric.score}%</span>
                        <Badge variant="secondary">{metric.description}</Badge>
                      </div>
                    </div>
                    <Progress value={metric.score} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Wear OS 4 Deep Dive */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Wear OS 4 & One UI Watch 5.0</h2>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">What's New in Wear OS 4</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Performance Optimizations</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Improved memory management and background app handling result in 30% longer battery 
                      life and significantly smoother app switching experiences.
                    </p>
                    <h4 className="font-semibold mb-2">Enhanced Security</h4>
                    <p className="text-sm text-muted-foreground">
                      New security features include improved biometric authentication and enhanced 
                      privacy controls for health data sharing.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Google Services Integration</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Native Google Pay, Maps, and Assistant integration provide seamless experiences 
                      across all Google services without requiring phone connectivity.
                    </p>
                    <h4 className="font-semibold mb-2">App Ecosystem</h4>
                    <p className="text-sm text-muted-foreground">
                      Access to thousands of Wear OS apps including Spotify, Uber, and WhatsApp 
                      with optimized performance and battery efficiency.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">One UI Watch 5.0 Enhancements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Customization Freedom</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                      <li>• 1000+ watch faces in Galaxy Store</li>
                      <li>• Custom complication widgets</li>
                      <li>• Personalized Always-On Display</li>
                      <li>• Interactive wallpapers and themes</li>
                    </ul>
                    <h4 className="font-semibold mb-2">Smart Gestures</h4>
                    <p className="text-sm text-muted-foreground">
                      Enhanced gesture controls including double-tap to answer calls, 
                      shake to dismiss notifications, and custom gesture shortcuts.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Samsung Ecosystem</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Seamless integration with Galaxy smartphones, buds, and tablets. 
                      SmartThings control for home automation directly from the watch.
                    </p>
                    <h4 className="font-semibold mb-2">Bixby Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Improved voice recognition and faster response times. Offline 
                      command processing for basic functions without internet connectivity.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Watch 6 vs Watch 5 Comparison */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Galaxy Watch 6 vs Watch 5</h2>
            <Card className="p-6">
              <div className="space-y-6">
                {comparisons.map((item, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3 className="font-bold">{item.feature}</h3>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-green-600">Watch 6</p>
                        <p className="text-sm text-muted-foreground">{item.watch6}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Watch 5</p>
                        <p className="text-sm text-muted-foreground">{item.watch5}</p>
                      </div>
                      <div>
                        <Badge variant="secondary" className="text-xs">
                          {item.improvement}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Health & Fitness Excellence */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Comprehensive Health Monitoring</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Advanced Health Features</h3>
                <div className="space-y-2">
                  {healthFeatures.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Fitness & Wellness</h3>
                <div className="space-y-2">
                  {healthFeatures.slice(4).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="p-8 mt-6">
              <h3 className="text-xl font-bold mb-4">Samsung Health Integration</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Sleep Coaching</h4>
                  <p className="text-sm text-muted-foreground">
                    AI-powered sleep analysis provides personalized recommendations 
                    for improving sleep quality and establishing better routines.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Body Composition</h4>
                  <p className="text-sm text-muted-foreground">
                    BIA sensor measures muscle mass, body fat percentage, and water 
                    retention for comprehensive fitness tracking.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Wellness Dashboard</h4>
                  <p className="text-sm text-muted-foreground">
                    Unified health dashboard provides insights across all metrics 
                    with trend analysis and goal-setting features.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Battery & Connectivity */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Battery Life & Connectivity</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">All-Day Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Typical Usage</span>
                      <span className="text-sm">40 hours</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Heavy Usage</span>
                      <span className="text-sm">24 hours</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">GPS Workout</span>
                      <span className="text-sm">12 hours</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Power Saving</span>
                      <span className="text-sm">4 days</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Connectivity Options</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">LTE Connectivity</h4>
                    <p className="text-sm text-muted-foreground">Independent calling, messaging, and data without phone dependency.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Wi-Fi 6 Support</h4>
                    <p className="text-sm text-muted-foreground">Faster, more reliable wireless connectivity with improved power efficiency.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Bluetooth 5.3</h4>
                    <p className="text-sm text-muted-foreground">Enhanced audio quality and extended range for accessories and smartphones.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">NFC Payments</h4>
                    <p className="text-sm text-muted-foreground">Samsung Pay and Google Pay support for contactless transactions worldwide.</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Market Position */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Market Leadership</h2>
            <Card className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">42%</div>
                  <p className="text-sm text-muted-foreground">Android smartwatch market share</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4.6/5</div>
                  <p className="text-sm text-muted-foreground">Average user satisfaction rating</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50M+</div>
                  <p className="text-sm text-muted-foreground">Active Galaxy Watch users worldwide</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Why It Leads Android Wearables</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Hardware Excellence</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Premium materials, exceptional build quality, and innovative sensors 
                    that outperform most competitors in accuracy and durability.
                  </p>
                  <h4 className="font-semibold mb-2">Software Refinement</h4>
                  <p className="text-sm text-muted-foreground">
                    Seamless blend of Samsung's hardware optimization with Google's 
                    Wear OS platform creates the most polished Android watch experience.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ecosystem Integration</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Works exceptionally well with any Android phone, but reaches full 
                    potential when paired with Samsung Galaxy devices.
                  </p>
                  <h4 className="font-semibold mb-2">Health Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced health monitoring capabilities rival dedicated medical devices, 
                    making it a true health companion rather than just a smartwatch.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Final Verdict */}
          <Card className="p-8 bg-gradient-secondary border-border">
            <h2 className="text-2xl font-bold mb-4">The Android Smartwatch Crown</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Samsung Galaxy Watch 6 represents the pinnacle of Android smartwatch evolution. 
              With its perfect balance of performance, health monitoring, and ecosystem integration, 
              it sets the standard that all other Android wearables will be measured against.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're deeply embedded in the Samsung ecosystem or simply want the best Android 
              smartwatch experience available, the Galaxy Watch 6 delivers on every front. It's not 
              just Android's best companion—it's proof that Android wearables have truly come of age.
            </p>
          </Card>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default SamsungGalaxyWatch6;
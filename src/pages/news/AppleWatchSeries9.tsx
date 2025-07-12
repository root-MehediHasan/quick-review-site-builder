import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Share2, Bookmark, Clock, User, Heart, Activity, Zap, Shield } from "lucide-react";

const AppleWatchSeries9 = () => {
  const healthFeatures = [
    {
      icon: Heart,
      title: "Advanced Heart Monitoring",
      description: "ECG app, irregular rhythm notifications, and heart rate zones for optimal training."
    },
    {
      icon: Activity,
      title: "Blood Oxygen Tracking",
      description: "Monitor your blood oxygen levels and get insights into your overall fitness and wellness."
    },
    {
      icon: Zap,
      title: "Sleep Stage Tracking",
      description: "Detailed sleep analysis including REM, Core, and Deep sleep stages with actionable insights."
    },
    {
      icon: Shield,
      title: "Crash & Fall Detection",
      description: "Automatic emergency contact when severe crashes or hard falls are detected."
    }
  ];

  const fitnessMetrics = [
    { metric: "Heart Rate Accuracy", score: 95, description: "Medical-grade precision" },
    { metric: "GPS Tracking", score: 92, description: "Dual-frequency for better accuracy" },
    { metric: "Workout Detection", score: 88, description: "Automatic recognition of 10+ activities" },
    { metric: "Battery Life (Fitness)", score: 85, description: "18 hours with GPS tracking" }
  ];

  const comparisons = [
    {
      feature: "Health Sensors",
      series9: "Heart rate, ECG, Blood oxygen, Temperature",
      series8: "Heart rate, ECG, Blood oxygen",
      improvement: "New temperature sensor"
    },
    {
      feature: "Processor",
      series9: "S9 SiP (64-bit dual-core)",
      series8: "S8 SiP (64-bit dual-core)", 
      improvement: "30% faster performance"
    },
    {
      feature: "Display",
      series9: "Always-On Retina (2000 nits)",
      series8: "Always-On Retina (1000 nits)",
      improvement: "2x brighter display"
    },
    {
      feature: "Storage",
      series9: "64GB",
      series8: "32GB",
      improvement: "Double the storage"
    }
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
              Apple Watch Series 9: <span className="bg-gradient-primary bg-clip-text text-transparent">Health Tracking Excellence</span>
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Published 3 days ago</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By Dr. Maria Rodriguez</span>
              </div>
              <span>7 min read</span>
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
              alt="Apple Watch Series 9"
              className="w-full h-64 md:h-96 object-cover rounded-lg bg-muted mb-8"
            />
          </div>

          {/* Lead Paragraph */}
          <Card className="p-8 mb-12 bg-gradient-secondary border-border">
            <p className="text-xl leading-relaxed text-muted-foreground">
              The Apple Watch Series 9 represents a quantum leap in personal health monitoring, introducing 
              groundbreaking sensors and AI-powered insights that make it the most comprehensive health 
              companion ever created. From advanced cardiac monitoring to sleep optimization, this isn't 
              just a smartwatch—it's a personal health laboratory on your wrist.
            </p>
          </Card>

          {/* Health Features Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Revolutionary Health Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {healthFeatures.map((feature, index) => {
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

          {/* Fitness Tracking Performance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Fitness Tracking Performance</h2>
            <Card className="p-8">
              <p className="text-muted-foreground mb-6">
                Our comprehensive testing across multiple fitness scenarios reveals exceptional accuracy 
                and reliability in health monitoring capabilities.
              </p>
              <div className="space-y-6">
                {fitnessMetrics.map((metric, index) => (
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

          {/* Deep Dive: Health Sensors */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Advanced Health Sensors Deep Dive</h2>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Temperature Sensing Innovation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">How It Works</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Dual temperature sensors on the back crystal and under the Digital Crown work together 
                      to provide highly accurate wrist temperature readings, filtered from environmental factors.
                    </p>
                    <h4 className="font-semibold mb-2">Health Applications</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ovulation tracking and family planning</li>
                      <li>• Sleep quality assessment</li>
                      <li>• Fever detection and illness monitoring</li>
                      <li>• Exercise intensity optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Clinical Accuracy</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Studies show 97% correlation with medical-grade thermometers when measuring 
                      baseline body temperature changes over time.
                    </p>
                    <h4 className="font-semibold mb-2">Privacy & Security</h4>
                    <p className="text-sm text-muted-foreground">
                      All temperature data is encrypted and stored locally on device. Users maintain 
                      complete control over data sharing with healthcare providers.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Enhanced ECG Capabilities</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">New Detection Algorithms</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Improved machine learning models can now detect subtle rhythm irregularities 
                      that previous generations might have missed.
                    </p>
                    <h4 className="font-semibold mb-2">Medical Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      ECG data can be exported as PDF reports formatted for healthcare providers, 
                      making it easier to discuss findings with your doctor.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Expanded Conditions</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                      <li>• Atrial fibrillation (AFib)</li>
                      <li>• Bradycardia (slow heart rate)</li>
                      <li>• Tachycardia (fast heart rate)</li>
                      <li>• Inconclusive readings analysis</li>
                    </ul>
                    <h4 className="font-semibold mb-2">Accuracy Improvements</h4>
                    <p className="text-sm text-muted-foreground">
                      25% reduction in false positives compared to Series 8, with 99.3% accuracy 
                      in AFib detection when compared to 12-lead ECG.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Series 9 vs Series 8 Comparison */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Series 9 vs Series 8 Comparison</h2>
            <Card className="p-6">
              <div className="space-y-6">
                {comparisons.map((item, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3 className="font-bold">{item.feature}</h3>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-green-600">Series 9</p>
                        <p className="text-sm text-muted-foreground">{item.series9}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Series 8</p>
                        <p className="text-sm text-muted-foreground">{item.series8}</p>
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

          {/* Health App Integration */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Health App Ecosystem</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Native Health Apps</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Health Trends</h4>
                    <p className="text-sm text-muted-foreground">AI-powered insights identify patterns in your health data over time.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Medication Reminders</h4>
                    <p className="text-sm text-muted-foreground">Smart notifications ensure you never miss doses, with interaction tracking.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Cycle Tracking</h4>
                    <p className="text-sm text-muted-foreground">Enhanced with temperature data for more accurate predictions.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Third-Party Integration</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">MyFitnessPal</h4>
                    <p className="text-sm text-muted-foreground">Seamless calorie and nutrition tracking with workout data sync.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Strava Premium</h4>
                    <p className="text-sm text-muted-foreground">Advanced running and cycling analytics with segment tracking.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Headspace</h4>
                    <p className="text-sm text-muted-foreground">Guided meditations with heart rate variability feedback.</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Real-World Health Impact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Real-World Health Impact</h2>
            <Card className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">89%</div>
                  <p className="text-sm text-muted-foreground">Users report improved health awareness</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">73%</div>
                  <p className="text-sm text-muted-foreground">Increased daily activity levels</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">156</div>
                  <p className="text-sm text-muted-foreground">Medical emergencies detected per day</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Case Studies</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">Early AFib Detection</p>
                  <p className="text-sm text-muted-foreground">
                    Sarah, 45, discovered irregular heart rhythm through Series 9 alerts. Medical follow-up 
                    revealed early-stage atrial fibrillation, allowing for preventive treatment.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">Sleep Apnea Discovery</p>
                  <p className="text-sm text-muted-foreground">
                    Blood oxygen monitoring revealed consistent nighttime drops, leading to sleep study 
                    and successful sleep apnea treatment for Mark, 52.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Final Assessment */}
          <Card className="p-8 bg-gradient-secondary border-border">
            <h2 className="text-2xl font-bold mb-4">The Health Revolution Continues</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Apple Watch Series 9 isn't just an incremental upgrade—it's a fundamental advancement 
              in personal health technology. With its comprehensive sensor suite, medical-grade accuracy, 
              and seamless integration with healthcare providers, it's setting new standards for what 
              wearable health monitoring can achieve.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For anyone serious about health tracking, whether you're managing a chronic condition, 
              optimizing athletic performance, or simply want to understand your body better, the 
              Series 9 offers unparalleled insights that can genuinely improve your quality of life.
            </p>
          </Card>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default AppleWatchSeries9;
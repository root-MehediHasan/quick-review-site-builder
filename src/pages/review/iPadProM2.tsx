import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Star, ThumbsUp, ThumbsDown, Share2, Bookmark, Palette, Zap, Monitor, Cpu } from "lucide-react";

const IPadProM2 = () => {
  const overallRating = 4.7;
  const ratings = {
    performance: 4.9,
    display: 4.8,
    design: 4.6,
    battery: 4.3,
    value: 4.2
  };

  const prosAndCons = {
    pros: [
      "M2 chip delivers exceptional creative performance",
      "Stunning Liquid Retina XDR display with ProMotion",
      "Apple Pencil 2 integration is seamless and precise",
      "Professional-grade video editing capabilities",
      "Premium build quality and materials",
      "Thunderbolt/USB 4 connectivity"
    ],
    cons: [
      "iPadOS limitations for pro workflows",
      "Expensive, especially with accessories",
      "No headphone jack",
      "Limited external display support",
      "RAM management could be better"
    ]
  };

  const creativeApps = [
    { name: "Procreate", rating: 4.9, use: "Digital art and illustration", performance: "Excellent" },
    { name: "Adobe Photoshop", rating: 4.6, use: "Photo editing and retouching", performance: "Very Good" },
    { name: "LumaFusion", rating: 4.8, use: "Professional video editing", performance: "Excellent" },
    { name: "Affinity Designer", rating: 4.7, use: "Vector graphics and design", performance: "Excellent" },
    { name: "Adobe Premiere Rush", rating: 4.4, use: "Quick video editing", performance: "Good" },
    { name: "Blender", rating: 4.2, use: "3D modeling and animation", performance: "Good" }
  ];

  const benchmarkResults = [
    { test: "Geekbench 5 (Single-Core)", score: "1875", comparison: "95% of laptop performance" },
    { test: "Geekbench 5 (Multi-Core)", score: "8827", comparison: "Exceeds many i7 laptops" },
    { test: "3DMark Wild Life Extreme", score: "9654", comparison: "Top 5% mobile graphics" },
    { test: "Adobe Lightroom Export", score: "2.3 min", comparison: "50% faster than M1" }
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
              iPad Pro M2: <span className="bg-gradient-primary bg-clip-text text-transparent">Creative Powerhouse Redefined</span>
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <span>Reviewed December 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <span>By Creative Team</span>
              </div>
              <span>12 min read</span>
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
              alt="iPad Pro M2"
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
                <Badge variant="default" className="text-lg px-4 py-2">Editor's Choice</Badge>
                <p className="text-sm text-muted-foreground mt-2">Recommended for creatives</p>
              </div>
            </div>
            <p className="text-xl leading-relaxed text-muted-foreground">
              The iPad Pro M2 redefines what's possible in a tablet, delivering desktop-class performance 
              in an incredibly thin and light package. For creative professionals and power users, 
              it's simply the most capable tablet ever created.
            </p>
          </Card>

          {/* Key Specs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Key Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Performance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processor</span>
                    <span className="font-semibold">Apple M2 chip</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">CPU</span>
                    <span className="font-semibold">8-core (4P + 4E)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">GPU</span>
                    <span className="font-semibold">10-core</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Memory</span>
                    <span className="font-semibold">8GB/16GB unified</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Storage</span>
                    <span className="font-semibold">128GB - 2TB</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Display & Design</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Screen Size</span>
                    <span className="font-semibold">12.9" / 11"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Technology</span>
                    <span className="font-semibold">Liquid Retina XDR</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Resolution</span>
                    <span className="font-semibold">2732 x 2048</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Refresh Rate</span>
                    <span className="font-semibold">120Hz ProMotion</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Brightness</span>
                    <span className="font-semibold">1600 nits peak</span>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Detailed Ratings */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Detailed Ratings</h2>
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

          {/* Performance Analysis */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">M2 Performance Deep Dive</h2>
            <div className="space-y-6">
              <Card className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Apple M2 Chip Excellence</h3>
                    <p className="text-muted-foreground">
                      The M2 chip brings a 18% CPU performance boost and 35% GPU improvement over M1, 
                      making it capable of handling professional workflows that were previously exclusive to desktop computers.
                    </p>
                  </div>
                </div>

                <h4 className="font-bold mb-4">Benchmark Results</h4>
                <div className="grid md:grid-cols-2 gap-4">
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
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Real-World Performance</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">4K Video Editing</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Exports 10-minute 4K ProRes video in under 3 minutes. Real-time playback of 
                      8K footage with effects applied smoothly without dropped frames.
                    </p>
                    <h4 className="font-semibold mb-2">3D Rendering</h4>
                    <p className="text-sm text-muted-foreground">
                      Complex 3D scenes in Blender render 40% faster than M1. Real-time viewport 
                      performance allows for smooth modeling and animation workflows.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Photo Processing</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Batch processing 100 RAW photos with adjustments takes under 2 minutes. 
                      AI-powered features like object selection work instantaneously.
                    </p>
                    <h4 className="font-semibold mb-2">Multitasking</h4>
                    <p className="text-sm text-muted-foreground">
                      Handles multiple creative apps simultaneously without slowdown. 
                      16GB model excels at keeping large projects in memory.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Creative Apps Performance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Creative Apps Performance</h2>
            <Card className="p-6">
              <div className="space-y-4">
                {creativeApps.map((app, index) => (
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

          <Separator className="my-12" />

          {/* Display Quality */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Display Excellence</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Liquid Retina XDR</h3>
                    <p className="text-sm text-muted-foreground">
                      Mini-LED backlighting with 2,596 local dimming zones delivers 
                      true HDR experience with 1,000,000:1 contrast ratio.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Peak Brightness</span>
                    <span className="text-sm font-semibold">1600 nits</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Color Gamut</span>
                    <span className="text-sm font-semibold">100% P3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Color Accuracy</span>
                    <span className="text-sm font-semibold">ΔE < 1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Response Time</span>
                    <span className="text-sm font-semibold">1ms</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">ProMotion 120Hz</h3>
                    <p className="text-sm text-muted-foreground">
                      Adaptive refresh rate technology provides smooth scrolling 
                      and incredibly responsive Apple Pencil experience.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Drawing Latency</h4>
                    <p className="text-xs text-muted-foreground">9ms with Apple Pencil 2</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Adaptive Rate</h4>
                    <p className="text-xs text-muted-foreground">24Hz to 120Hz automatic</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Gaming Performance</h4>
                    <p className="text-xs text-muted-foreground">Consistent 120fps in supported games</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Power Efficiency</h4>
                    <p className="text-xs text-muted-foreground">30% battery savings in static content</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Apple Pencil & Creative Workflow */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Apple Pencil Integration</h2>
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Creative Precision</h3>
                  <p className="text-muted-foreground">
                    Apple Pencil 2 integration reaches new heights with the M2's improved palm rejection 
                    and pressure sensitivity, making digital art feel remarkably natural.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Enhanced Features</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Pixel-perfect precision with 9ms latency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>4096 pressure sensitivity levels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Tilt recognition for shading effects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Magnetic charging and pairing</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Professional Workflows</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Vector illustration with sub-pixel accuracy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Natural brush textures in painting apps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>Precise photo editing and retouching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span>3D modeling with intuitive controls</span>
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

          {/* Pricing & Value */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Pricing & Value</h2>
            <Card className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <h3 className="font-bold mb-2">11" iPad Pro M2</h3>
                  <div className="text-2xl font-bold text-primary mb-1">$799</div>
                  <p className="text-sm text-muted-foreground">128GB Wi-Fi</p>
                  <p className="text-sm text-muted-foreground">Starting price</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold mb-2">12.9" iPad Pro M2</h3>
                  <div className="text-2xl font-bold text-primary mb-1">$1,099</div>
                  <p className="text-sm text-muted-foreground">128GB Wi-Fi</p>
                  <p className="text-sm text-muted-foreground">Starting price</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold mb-2">With Accessories</h3>
                  <div className="text-2xl font-bold text-primary mb-1">$1,527</div>
                  <p className="text-sm text-muted-foreground">Magic Keyboard + Pencil</p>
                  <p className="text-sm text-muted-foreground">Complete setup</p>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="font-bold mb-4">Value Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  While the iPad Pro M2 commands a premium price, it delivers genuine laptop-replacement 
                  performance for creative professionals. The combination of M2 power, exceptional display 
                  quality, and Apple Pencil integration justifies the cost for serious creative work.
                </p>
                <p className="text-muted-foreground">
                  For casual users, the iPad Air might offer better value, but for professionals who need 
                  the absolute best tablet experience, the iPad Pro M2 is worth every penny.
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
                <Badge variant="default" className="ml-4">Editor's Choice</Badge>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The iPad Pro M2 represents the absolute pinnacle of tablet computing. It's not just the 
              best tablet you can buy—it's a legitimate laptop replacement that exceeds many traditional 
              computers in creative performance while maintaining the intuitive touch interface that makes tablets special.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For creative professionals, content creators, and anyone who demands the absolute best from 
              their devices, the iPad Pro M2 is simply without equal. It's expensive, but it's also 
              transformative—this is the future of computing, available today.
            </p>
          </Card>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default IPadProM2;
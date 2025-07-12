import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Zap, Monitor, Cpu, HardDrive, Thermometer, DollarSign } from "lucide-react";

const GamingLaptopGuide = () => {
  const gpuComparison = [
    { name: "RTX 4090", performance: 100, price: "$$$$$", vram: "24GB", rayTracing: "Excellent" },
    { name: "RTX 4080", performance: 85, price: "$$$$", vram: "16GB", rayTracing: "Excellent" },
    { name: "RTX 4070", performance: 70, price: "$$$", vram: "12GB", rayTracing: "Very Good" },
    { name: "RTX 4060", performance: 55, price: "$$", vram: "8GB", rayTracing: "Good" },
    { name: "RTX 3060", performance: 45, price: "$", vram: "6GB", rayTracing: "Fair" }
  ];

  const budgetTiers = [
    {
      tier: "Budget Gaming",
      range: "$800 - $1,200",
      specs: ["GTX 1660 Ti / RTX 3050", "Intel i5 / AMD Ryzen 5", "8-16GB RAM", "1080p 60Hz display"],
      suitable: "Esports, older AAA games at medium settings"
    },
    {
      tier: "Mid-Range",
      range: "$1,200 - $2,000",
      specs: ["RTX 3060 / RTX 4060", "Intel i7 / AMD Ryzen 7", "16GB RAM", "1080p 144Hz or 1440p 60Hz"],
      suitable: "Most AAA games at high settings, competitive gaming"
    },
    {
      tier: "High-End",
      range: "$2,000 - $3,500",
      specs: ["RTX 4070 / RTX 4080", "Intel i7/i9 / AMD Ryzen 7/9", "32GB RAM", "1440p 144Hz or 4K 60Hz"],
      suitable: "Max settings gaming, content creation, VR"
    },
    {
      tier: "Enthusiast",
      range: "$3,500+",
      specs: ["RTX 4080 / RTX 4090", "Intel i9 / AMD Ryzen 9", "32-64GB RAM", "4K 120Hz+ display"],
      suitable: "Cutting-edge gaming, professional workloads"
    }
  ];

  const coolingTips = [
    {
      icon: Thermometer,
      title: "Thermal Design",
      description: "Look for laptops with multiple heat pipes, dual fans, and vapor chamber cooling for sustained performance."
    },
    {
      icon: Monitor,
      title: "Undervolting",
      description: "Safe undervolting can reduce temperatures by 10-15°C while maintaining performance."
    },
    {
      icon: Zap,
      title: "Fan Curves",
      description: "Custom fan curves balance noise and cooling. Most gaming laptops include software for this."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Buying Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gaming Laptop <span className="bg-gradient-primary bg-clip-text text-transparent">Buying Guide</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to know about choosing a gaming laptop: GPU specs, cooling systems, display types, and budget considerations.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span>Updated 1 week ago</span>
              <span>•</span>
              <span>20 min read</span>
              <span>•</span>
              <span>By TechQuest Reviews Team</span>
            </div>
          </div>

          {/* Introduction */}
          <Card className="p-8 mb-12 bg-gradient-secondary border-border">
            <h2 className="text-2xl font-bold mb-4">The Gaming Laptop Landscape in 2024</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Gaming laptops have evolved dramatically, offering desktop-class performance in portable form factors. 
              With new GPU architectures, advanced cooling solutions, and high-refresh displays, choosing the right 
              gaming laptop requires understanding multiple technical factors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This guide will walk you through GPU performance tiers, cooling systems, display technologies, 
              and help you find the perfect balance between performance, portability, and price.
            </p>
          </Card>

          {/* GPU Comparison */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">GPU Performance Guide</h2>
            <Card className="p-6">
              <p className="text-muted-foreground mb-6">
                The GPU is the heart of any gaming laptop. Here's how current generation cards compare:
              </p>
              <div className="space-y-4">
                {gpuComparison.map((gpu, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-lg">{gpu.name}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <span>VRAM: {gpu.vram}</span>
                        <span>Price: {gpu.price}</span>
                        <span>Ray Tracing: {gpu.rayTracing}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">Performance:</span>
                      <Progress value={gpu.performance} className="flex-1" />
                      <span className="text-sm text-muted-foreground">{gpu.performance}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Budget Tiers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Budget Tiers & Recommendations</h2>
            <div className="grid gap-6">
              {budgetTiers.map((tier, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{tier.tier}</h3>
                      <p className="text-2xl font-bold text-primary mt-1">{tier.range}</p>
                    </div>
                    <Badge variant="outline">{tier.tier.split(' ')[0]}</Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Typical Specifications:</h4>
                      <ul className="space-y-1">
                        {tier.specs.map((spec, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Best For:</h4>
                      <p className="text-sm text-muted-foreground">{tier.suitable}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          {/* Display Guide */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Display Technology Guide</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Resolution Options</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">1080p (Full HD)</h4>
                    <p className="text-sm text-muted-foreground">Best for high refresh rates and competitive gaming. Easier to drive, better battery life.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">1440p (QHD)</h4>
                    <p className="text-sm text-muted-foreground">Sweet spot for gaming. Sharper than 1080p, more manageable than 4K.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">4K (Ultra HD)</h4>
                    <p className="text-sm text-muted-foreground">Ultimate visual quality. Requires top-tier GPU for gaming. Great for content creation.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Refresh Rate & Panel Types</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">120Hz/144Hz</h4>
                    <p className="text-sm text-muted-foreground">Minimum for competitive gaming. Smoother motion and reduced input lag.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">240Hz/360Hz</h4>
                    <p className="text-sm text-muted-foreground">For esports professionals. Diminishing returns beyond 240Hz for most users.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">IPS vs OLED</h4>
                    <p className="text-sm text-muted-foreground">IPS: Better for bright environments. OLED: Superior contrast and colors.</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Cooling Systems */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Cooling Systems Explained</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {coolingTips.map((tip, index) => {
                const IconComponent = tip.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">{tip.title}</h3>
                        <p className="text-sm text-muted-foreground">{tip.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Advanced Cooling Technologies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Vapor Chamber Cooling</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Uses phase-change cooling for better heat distribution. Found in premium gaming laptops.
                  </p>
                  <h4 className="font-semibold mb-2">Liquid Metal TIM</h4>
                  <p className="text-sm text-muted-foreground">
                    Superior thermal conductivity compared to traditional thermal paste. Reduces CPU/GPU temps significantly.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Smart Fan Control</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    AI-powered fan curves that balance performance and noise levels based on workload.
                  </p>
                  <h4 className="font-semibold mb-2">External Cooling</h4>
                  <p className="text-sm text-muted-foreground">
                    Laptop cooling pads can provide additional 5-10°C temperature reduction for extended gaming sessions.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Memory & Storage */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Memory & Storage Considerations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <HardDrive className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">RAM Requirements</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">16GB DDR4/DDR5</span>
                      <Badge variant="secondary">Recommended</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Sweet spot for gaming and multitasking. Future-proof for next few years.</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">32GB DDR5</span>
                      <Badge variant="outline">Enthusiast</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">For content creation, streaming, and heavy multitasking while gaming.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">Storage Options</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">1TB NVMe SSD</span>
                      <Badge variant="secondary">Minimum</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">PCIe 4.0 preferred for faster game loading and system responsiveness.</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">2TB+ Dual Storage</span>
                      <Badge variant="outline">Ideal</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">SSD for OS/games + secondary storage for media and backup.</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Final Recommendations */}
          <Card className="p-8 bg-gradient-secondary border-border">
            <h2 className="text-2xl font-bold mb-6">Final Buying Checklist</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3">Before You Buy:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Check GPU performance benchmarks for your target games</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Verify cooling reviews and thermal throttling tests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Consider display color accuracy if content creation matters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Check port selection and connectivity options</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Don't Forget:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Battery life expectations for gaming laptops (2-4 hours gaming)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Weight and thickness if portability matters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Warranty coverage and manufacturer support quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm">Upgradeability options for RAM and storage</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default GamingLaptopGuide;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Share2, Bookmark, Clock, User, Cpu, Zap, Brain, TrendingUp } from "lucide-react";

const AppleM4Chip = () => {
  const specifications = [
    { feature: "CPU Cores", value: "10-core (4P + 6E)", improvement: "+25% performance" },
    { feature: "GPU Cores", value: "Up to 40-core", improvement: "+40% graphics" },
    { feature: "Neural Engine", value: "32-core", improvement: "+60% AI performance" },
    { feature: "Memory", value: "Up to 128GB", improvement: "2x capacity" },
    { feature: "Memory Bandwidth", value: "546 GB/s", improvement: "+50% bandwidth" },
    { feature: "Manufacturing", value: "3nm (N3E)", improvement: "+20% efficiency" }
  ];

  const aiCapabilities = [
    {
      icon: Brain,
      title: "Advanced Neural Processing",
      description: "32-core Neural Engine delivers 60% faster AI workloads, enabling real-time video analysis and complex machine learning tasks."
    },
    {
      icon: Zap,
      title: "On-Device AI",
      description: "Enhanced privacy with local AI processing for features like improved Siri, real-time translation, and smart photo editing."
    },
    {
      icon: TrendingUp,
      title: "Developer APIs",
      description: "New CoreML frameworks allow developers to leverage M4's AI capabilities for innovative app experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="secondary" className="mb-4">Breaking News</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Apple Announces Revolutionary <span className="bg-gradient-primary bg-clip-text text-transparent">M4 Chip</span> with Enhanced AI Capabilities
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Published 2 hours ago</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By Sarah Chen</span>
              </div>
              <span>5 min read</span>
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
              alt="Apple M4 Chip"
              className="w-full h-64 md:h-96 object-cover rounded-lg bg-muted mb-8"
            />
          </div>

          {/* Lead Paragraph */}
          <Card className="p-8 mb-12 bg-gradient-secondary border-border">
            <p className="text-xl leading-relaxed text-muted-foreground">
              Apple today unveiled its most powerful silicon yet, the M4 chip, marking a significant leap forward in 
              performance and artificial intelligence capabilities. Built on an enhanced 3nm process, the M4 delivers 
              unprecedented performance per watt while introducing groundbreaking AI features that could reshape how 
              we interact with our devices.
            </p>
          </Card>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground leading-relaxed mb-6">
              At today's "Unleashed AI" event, Apple CEO Tim Cook described the M4 as "the most significant advancement 
              in Apple Silicon since the original M1." The new chip represents a substantial evolution in both raw 
              computational power and specialized AI processing capabilities, positioning Apple at the forefront of 
              the AI revolution.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Performance Breakthrough</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The M4 chip features a 10-core CPU with 4 performance cores and 6 efficiency cores, delivering up to 
              25% faster performance than the M3 while maintaining exceptional power efficiency. The standout feature 
              is the dramatically enhanced GPU, which scales up to 40 cores in the highest-end configuration, providing 
              a 40% improvement in graphics performance.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              "We've fundamentally reimagined how silicon can accelerate AI workloads," said Johny Srouji, Apple's 
              Senior Vice President of Hardware Technologies. "The M4 doesn't just run AI models faster—it transforms 
              what's possible on a personal device."
            </p>
          </div>

          {/* Specifications Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
            <Card className="p-6">
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                    <div className="flex-1">
                      <h3 className="font-semibold">{spec.feature}</h3>
                      <p className="text-muted-foreground">{spec.value}</p>
                    </div>
                    <Badge variant="secondary" className="ml-4">
                      {spec.improvement}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* AI Capabilities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">AI Revolution</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {aiCapabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">{capability.title}</h3>
                        <p className="text-sm text-muted-foreground">{capability.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Real-World AI Applications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Creative Workflows</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Final Cut Pro will leverage M4's AI capabilities for real-time object removal, background replacement, 
                    and automatic color grading. Logic Pro gains AI-powered composition assistance and instant audio cleanup.
                  </p>
                  <h4 className="font-semibold mb-2">Photography & Video</h4>
                  <p className="text-sm text-muted-foreground">
                    Enhanced computational photography enables professional-grade portrait effects, improved low-light performance, 
                    and AI-driven scene optimization across all camera apps.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Productivity</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Mail app gains intelligent summarization and smart reply suggestions. Safari introduces AI-powered 
                    reading assistance and automatic translation for over 100 languages.
                  </p>
                  <h4 className="font-semibold mb-2">Developer Tools</h4>
                  <p className="text-sm text-muted-foreground">
                    Xcode incorporates AI code completion and bug detection. New CoreML frameworks enable developers 
                    to build sophisticated AI features with minimal complexity.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          <Separator className="my-12" />

          {/* Industry Impact */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Industry Impact & Analysis</h2>
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Competitive Landscape</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The M4's AI capabilities directly challenge NVIDIA's dominance in AI processing and put pressure on 
                  Intel and AMD to accelerate their own AI silicon development. With 60% faster neural processing 
                  than the M3, Apple has created a significant performance gap that competitors will struggle to close.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Industry analysts predict this could accelerate the adoption of AI-first computing experiences 
                  across the entire tech ecosystem, with other manufacturers rushing to develop comparable capabilities.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Privacy & Security</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unlike cloud-based AI solutions, the M4's on-device processing ensures that sensitive data never 
                  leaves the user's device. This approach aligns with Apple's privacy-first philosophy while delivering 
                  faster response times and offline capabilities.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The chip includes dedicated security enclaves for AI workloads, preventing unauthorized access to 
                  model data and ensuring that personal information remains protected during AI processing.
                </p>
              </Card>
            </div>
          </section>

          {/* Availability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Availability & Pricing</h2>
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Device Lineup</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">MacBook Pro 14" & 16"</span>
                      <Badge variant="secondary">Available Now</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Mac Studio</span>
                      <Badge variant="outline">Q1 2025</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Mac Pro</span>
                      <Badge variant="outline">Q2 2025</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">iMac</span>
                      <Badge variant="outline">Q2 2025</Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Starting Prices</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>MacBook Pro 14" (M4)</span>
                      <span className="font-bold">$1,999</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>MacBook Pro 16" (M4 Pro)</span>
                      <span className="font-bold">$2,499</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>MacBook Pro 16" (M4 Max)</span>
                      <span className="font-bold">$3,999</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Educational discounts available. Trade-in values up to $1,000 for qualifying devices.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Conclusion */}
          <Card className="p-8 bg-gradient-secondary border-border">
            <h2 className="text-2xl font-bold mb-4">Looking Forward</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The M4 chip represents more than just a performance upgrade—it's Apple's vision of AI-first computing 
              becoming reality. With its combination of raw power, energy efficiency, and specialized AI acceleration, 
              the M4 sets a new standard for what personal computers can achieve.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As developers begin leveraging these new capabilities, we can expect to see a new generation of applications 
              that blur the line between human and artificial intelligence, all while maintaining the privacy and security 
              that Apple users have come to expect.
            </p>
          </Card>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default AppleM4Chip;
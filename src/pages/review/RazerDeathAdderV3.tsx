import { ArrowLeft, Star, Check, Zap, Gamepad2, Hand, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const RazerDeathAdderV3 = () => {
  const pros = [
    "Exceptional ergonomic design",
    "30,000 DPI Focus Pro sensor",
    "90-hour battery life",
    "8 programmable buttons",
    "Razer Chroma RGB lighting",
    "Comfortable for long sessions"
  ];

  const cons = [
    "Heavier than ultralight alternatives",
    "Right-handed design only",
    "Premium pricing",
    "Software can be complex"
  ];

  const specs = [
    { label: "Weight", value: "88g" },
    { label: "Sensor", value: "Focus Pro 30K" },
    { label: "DPI", value: "30,000 DPI" },
    { label: "Battery Life", value: "90 hours" },
    { label: "Connectivity", value: "HyperSpeed Wireless" },
    { label: "Buttons", value: "8 Programmable" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/mice" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Mice Reviews
          </Link>
          
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">Gaming Mouse</Badge>
            <Badge variant="outline">Ergonomic</Badge>
            <Badge variant="outline">RGB</Badge>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Razer DeathAdder V3: Ergonomic Gaming Champion</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">9.2/10</span>
            </div>
            <span className="text-muted-foreground">Reviewed December 2024</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="aspect-video bg-gradient-to-br from-green-500/20 to-black/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Gamepad2 className="w-24 h-24 mx-auto mb-4 text-green-500" />
                <p className="text-lg font-medium">Razer DeathAdder V3</p>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Razer DeathAdder V3 continues the legendary DeathAdder lineage with refined ergonomics 
                  and cutting-edge technology. This wireless gaming mouse combines comfort, performance, and 
                  customization in a package designed for serious gamers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With its iconic ergonomic shape refined over generations, the DeathAdder V3 provides 
                  exceptional comfort for extended gaming sessions while delivering the precision and 
                  responsiveness that competitive gaming demands.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Performance & Features</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Focus Pro 30K Sensor</h3>
                      <p className="text-muted-foreground text-sm">
                        Industry-leading 30,000 DPI sensor with intelligent tracking and zero smoothing.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Hand className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Ergonomic Excellence</h3>
                      <p className="text-muted-foreground text-sm">
                        Refined ergonomic shape designed for comfort during marathon gaming sessions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">8 Programmable Buttons</h3>
                      <p className="text-muted-foreground text-sm">
                        Fully customizable buttons with Razer Synapse for complex macro programming.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Gaming Experience</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The DeathAdder V3 excels in providing consistent, reliable performance across all gaming 
                  genres. The ergonomic design reduces fatigue during long gaming sessions, while the 
                  high-precision sensor ensures accurate tracking in the most intense gaming moments.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Razer HyperSpeed Wireless technology provides ultra-low latency connectivity, while the 
                  90-hour battery life means less time worrying about charging and more time gaming. The 
                  Chroma RGB lighting adds visual flair and can sync with other Razer peripherals.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-green-600">Pros</h3>
                  <ul className="space-y-2">
                    {pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-sm">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-600">Cons</h3>
                  <ul className="space-y-2">
                    {cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-4 h-4 text-red-600 mt-1 flex-shrink-0">×</span>
                        <span className="text-sm">{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Specifications</h3>
                <dl className="space-y-3">
                  {specs.map((spec, index) => (
                    <div key={index} className="flex justify-between">
                      <dt className="text-muted-foreground">{spec.label}:</dt>
                      <dd className="font-medium">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Verdict</h3>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary mb-2">9.2/10</div>
                  <Badge variant="default" className="mb-4">Recommended</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  The DeathAdder V3 delivers exceptional ergonomic comfort with top-tier gaming performance, 
                  making it ideal for gamers who prioritize comfort without sacrificing precision.
                </p>
                <Button className="w-full">
                  Check Latest Price
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Perfect For</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Right-handed gamers</li>
                  <li>• Long gaming sessions</li>
                  <li>• FPS and MOBA players</li>
                  <li>• RGB lighting enthusiasts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RazerDeathAdderV3;
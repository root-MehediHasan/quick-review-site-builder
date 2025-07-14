import { ArrowLeft, Star, Check, Zap, Gamepad2, Weight, Battery } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LogitechGProXSuperlight2 = () => {
  const pros = [
    "Ultra-lightweight 63g design",
    "25,600 DPI HERO 25K sensor",
    "95-hour battery life",
    "LIGHTSPEED wireless technology",
    "Ambidextrous design",
    "Zero added latency"
  ];

  const cons = [
    "Premium price point",
    "No RGB lighting",
    "Limited programmable buttons",
    "Requires precise grip for optimal use"
  ];

  const specs = [
    { label: "Weight", value: "63g" },
    { label: "Sensor", value: "HERO 25K" },
    { label: "DPI", value: "25,600 DPI" },
    { label: "Battery Life", value: "95 hours" },
    { label: "Connectivity", value: "LIGHTSPEED Wireless" },
    { label: "Polling Rate", value: "1000 Hz" }
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
            <Badge variant="outline">Wireless</Badge>
            <Badge variant="outline">Ultralight</Badge>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Logitech G Pro X Superlight 2: Esports Excellence</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">9.5/10</span>
            </div>
            <span className="text-muted-foreground">Reviewed December 2024</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Gamepad2 className="w-24 h-24 mx-auto mb-4 text-primary" />
                <p className="text-lg font-medium">Logitech G Pro X Superlight 2</p>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Logitech G Pro X Superlight 2 represents the pinnacle of competitive gaming mouse design. 
                  At just 63 grams, it's one of the lightest wireless gaming mice available, without sacrificing 
                  any performance or build quality.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Designed in collaboration with professional esports players, this mouse delivers the precision 
                  and reliability demanded by competitive gaming while maintaining the comfort needed for extended 
                  gaming sessions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Performance & Features</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">HERO 25K Sensor</h3>
                      <p className="text-muted-foreground text-sm">
                        Sub-micron precision with 25,600 DPI and zero smoothing, filtering, or acceleration.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Weight className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Ultra-Lightweight Design</h3>
                      <p className="text-muted-foreground text-sm">
                        At 63g, it provides effortless control and reduced fatigue during long gaming sessions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Battery className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Extended Battery Life</h3>
                      <p className="text-muted-foreground text-sm">
                        Up to 95 hours of continuous gaming with LIGHTSPEED wireless technology.
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
                  The Superlight 2 excels in competitive gaming scenarios. The ultra-lightweight design allows 
                  for quick, precise movements without the drag associated with heavier mice. The HERO 25K sensor 
                  provides pixel-perfect accuracy that professional gamers demand.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  LIGHTSPEED wireless technology ensures zero added latency compared to wired connections, 
                  making it ideal for competitive esports where every millisecond counts. The ambidextrous 
                  design accommodates various grip styles and hand sizes.
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
                  <div className="text-3xl font-bold text-primary mb-2">9.5/10</div>
                  <Badge variant="default" className="mb-4">Editor's Choice</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  The G Pro X Superlight 2 sets the gold standard for competitive gaming mice, 
                  offering unmatched performance in an ultra-lightweight package.
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
                  <li>• Competitive esports players</li>
                  <li>• FPS gaming enthusiasts</li>
                  <li>• Users preferring lightweight mice</li>
                  <li>• Professional streamers</li>
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

export default LogitechGProXSuperlight2;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Star, DollarSign, Camera, Battery, Smartphone, Shield } from "lucide-react";

const SmartphoneUnder500 = () => {
  const topPicks = [
    {
      name: "Google Pixel 7a",
      price: "$449",
      rating: 4.5,
      image: "/api/placeholder/300/200",
      pros: ["Excellent camera quality", "Clean Android experience", "5 years of updates"],
      cons: ["60Hz display", "Average battery life"],
      specs: {
        display: "6.1\" OLED, 90Hz",
        processor: "Google Tensor G2",
        camera: "64MP main + 13MP ultrawide",
        battery: "4385mAh",
        storage: "128GB"
      }
    },
    {
      name: "Samsung Galaxy A54 5G",
      price: "$449",
      rating: 4.3,
      image: "/api/placeholder/300/200",
      pros: ["Great build quality", "Versatile camera system", "Long battery life"],
      cons: ["Slower processor", "No wireless charging"],
      specs: {
        display: "6.4\" Super AMOLED, 120Hz",
        processor: "Exynos 1380",
        camera: "50MP main + 12MP ultrawide + 5MP macro",
        battery: "5000mAh",
        storage: "128GB/256GB"
      }
    },
    {
      name: "OnePlus Nord 3",
      price: "$429",
      rating: 4.4,
      image: "/api/placeholder/300/200",
      pros: ["Fast performance", "Rapid charging", "Premium design"],
      cons: ["Limited availability", "No wireless charging"],
      specs: {
        display: "6.74\" AMOLED, 120Hz",
        processor: "MediaTek Dimensity 9000",
        camera: "50MP main + 8MP ultrawide + 2MP macro",
        battery: "5000mAh",
        storage: "128GB/256GB"
      }
    }
  ];

  const buyingFactors = [
    {
      icon: Camera,
      title: "Camera Quality",
      description: "Look for phones with larger sensors, multiple lenses, and good low-light performance. Night mode and computational photography features are essential."
    },
    {
      icon: Battery,
      title: "Battery Life",
      description: "Aim for at least 4000mAh capacity with fast charging support. Consider wireless charging if it's important to your workflow."
    },
    {
      icon: Smartphone,
      title: "Display Quality",
      description: "OLED displays offer better contrast and colors. Look for at least 90Hz refresh rate for smoother scrolling and gaming."
    },
    {
      icon: Shield,
      title: "Software Updates",
      description: "Choose brands that promise at least 3 years of security updates. Google Pixel and Samsung offer the longest support."
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
              Best Smartphones Under <span className="bg-gradient-primary bg-clip-text text-transparent">$500</span> (2024)
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Complete guide to finding the perfect budget smartphone with flagship features, great cameras, and long battery life.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span>Updated 2 days ago</span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>By TechQuest Reviews Team</span>
            </div>
          </div>

          {/* Introduction */}
          <Card className="p-8 mb-12 bg-gradient-secondary border-border">
            <h2 className="text-2xl font-bold mb-4">Why This Guide Matters</h2>
            <p className="text-muted-foreground leading-relaxed">
              The smartphone market under $500 has never been more competitive. In 2024, you can get flagship-level features, 
              excellent cameras, and premium build quality without breaking the bank. This comprehensive guide analyzes the top 
              contenders, key features to consider, and helps you make the best choice for your needs and budget.
            </p>
          </Card>

          {/* Top Picks */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Our Top Picks</h2>
            <div className="space-y-8">
              {topPicks.map((phone, index) => (
                <Card key={index} className="p-6 hover:shadow-elevated transition-shadow">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <img 
                        src={phone.image} 
                        alt={phone.name}
                        className="w-full h-48 object-cover rounded-lg bg-muted"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{phone.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < Math.floor(phone.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{phone.rating}/5</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{phone.price}</div>
                          <Button size="sm" className="mt-2">View Deals</Button>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
                          <ul className="space-y-1">
                            {phone.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-orange-600 mb-2">Cons</h4>
                          <ul className="space-y-1">
                            {phone.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <div className="w-4 h-4 border-2 border-orange-600 rounded-full mt-0.5 flex-shrink-0" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Key Specifications</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div><strong>Display:</strong> {phone.specs.display}</div>
                          <div><strong>Processor:</strong> {phone.specs.processor}</div>
                          <div><strong>Camera:</strong> {phone.specs.camera}</div>
                          <div><strong>Battery:</strong> {phone.specs.battery}</div>
                          <div><strong>Storage:</strong> {phone.specs.storage}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          {/* Buying Factors */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Key Factors to Consider</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {buyingFactors.map((factor, index) => {
                const IconComponent = factor.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{factor.title}</h3>
                        <p className="text-muted-foreground">{factor.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Detailed Analysis */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Detailed Analysis</h2>
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Performance Comparison</h3>
                <p className="text-muted-foreground mb-4">
                  In terms of raw performance, the OnePlus Nord 3 leads with its MediaTek Dimensity 9000 chip, 
                  offering flagship-level performance that can handle demanding games and multitasking with ease. 
                  The Google Pixel 7a follows closely with its Tensor G2, which excels in AI tasks and photography processing.
                </p>
                <p className="text-muted-foreground">
                  The Samsung Galaxy A54 5G, while using the older Exynos 1380, still provides smooth performance 
                  for daily tasks and moderate gaming, making it a solid choice for users who prioritize other features.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Camera Excellence</h3>
                <p className="text-muted-foreground mb-4">
                  Google Pixel 7a dominates in photography with its computational photography prowess. The Magic Eraser, 
                  Night Sight, and Portrait mode produce stunning results that rival phones twice the price.
                </p>
                <p className="text-muted-foreground">
                  Samsung Galaxy A54 5G offers versatility with its triple camera setup, while OnePlus Nord 3 
                  provides excellent video recording capabilities with OIS on the main camera.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-4">Battery and Charging</h3>
                <p className="text-muted-foreground mb-4">
                  All three phones feature 5000mAh+ batteries, but charging speeds vary significantly. OnePlus Nord 3 
                  leads with 80W fast charging, reaching 100% in under 35 minutes.
                </p>
                <p className="text-muted-foreground">
                  Samsung Galaxy A54 5G offers the best battery optimization, easily lasting 1.5 days of moderate use, 
                  while Pixel 7a provides solid all-day battery life with adaptive battery features.
                </p>
              </Card>
            </div>
          </section>

          {/* Final Recommendations */}
          <Card className="p-8 bg-gradient-secondary border-border">
            <h2 className="text-2xl font-bold mb-6">Final Recommendations</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">For Photography Enthusiasts:</p>
                  <p className="text-muted-foreground">Choose the Google Pixel 7a for unmatched computational photography and regular updates.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">For Performance Seekers:</p>
                  <p className="text-muted-foreground">OnePlus Nord 3 offers the best performance and fastest charging in this price range.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">For All-Round Value:</p>
                  <p className="text-muted-foreground">Samsung Galaxy A54 5G provides the best balance of features, build quality, and battery life.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default SmartphoneUnder500;
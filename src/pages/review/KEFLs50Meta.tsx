import { ArrowLeft, Star, Check, Volume2, Award, Music, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const KEFLs50Meta = () => {
  const pros = [
    "Exceptional midrange clarity",
    "Revolutionary Metamaterial technology",
    "Award-winning Uni-Q driver array",
    "Compact footprint with big sound",
    "Premium build quality",
    "Perfect for near-field listening"
  ];

  const cons = [
    "Requires quality amplification",
    "Premium price point",
    "Limited low-end extension",
    "Not ideal for large rooms"
  ];

  const specs = [
    { label: "Type", value: "2-way Bookshelf" },
    { label: "Drivers", value: "5.25\" Uni-Q, 1\" Tweeter" },
    { label: "Frequency Response", value: "79Hz - 28kHz" },
    { label: "Sensitivity", value: "85dB" },
    { label: "Impedance", value: "8 Ohms" },
    { label: "Dimensions", value: "11.9 x 7.9 x 10.9 inches" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/speakers" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Speaker Reviews
          </Link>
          
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">Bookshelf Speaker</Badge>
            <Badge variant="outline">Audiophile</Badge>
            <Badge variant="outline">Passive</Badge>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">KEF LS50 Meta: Audiophile Excellence</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">9.6/10</span>
            </div>
            <span className="text-muted-foreground">Reviewed December 2024</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Volume2 className="w-24 h-24 mx-auto mb-4 text-orange-500" />
                <p className="text-lg font-medium">KEF LS50 Meta</p>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The KEF LS50 Meta represents the evolution of one of the most celebrated bookshelf speakers 
                  in audio history. Building upon the legendary LS50's foundation, the Meta incorporates 
                  KEF's revolutionary Metamaterial Absorption Technology, setting new standards for acoustic precision.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This compact monitor delivers reference-quality sound that rivals much larger and more 
                  expensive speakers, making it the perfect choice for audiophiles seeking uncompromising 
                  musical accuracy in a sophisticated package.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Audio Technology & Performance</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Metamaterial Technology</h3>
                      <p className="text-muted-foreground text-sm">
                        Revolutionary MAT reduces unwanted resonances behind the tweeter by 99%.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Music className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Uni-Q Driver Array</h3>
                      <p className="text-muted-foreground text-sm">
                        12th generation Uni-Q places tweeter at the acoustic center of the midrange cone.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Headphones className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Reference Sound Quality</h3>
                      <p className="text-muted-foreground text-sm">
                        Studio monitor accuracy with exceptional imaging and soundstage precision.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Listening Experience</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The LS50 Meta delivers an extraordinarily clean and detailed sound signature that reveals 
                  every nuance in your music. The midrange clarity is simply stunning, presenting vocals 
                  and instruments with lifelike presence and natural tonality. The Metamaterial technology 
                  eliminates the subtle coloration that affected previous models.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Imaging is pinpoint accurate, creating a three-dimensional soundstage that extends well 
                  beyond the physical boundaries of the speakers. While they require quality amplification 
                  to reach their full potential, the rewards are exceptional musical engagement and 
                  long-term listening satisfaction.
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
                      <dd className="font-medium text-right">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Verdict</h3>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary mb-2">9.6/10</div>
                  <Badge variant="default" className="mb-4">Audiophile Choice</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  The LS50 Meta achieves a rare combination of technical excellence and musical engagement, 
                  setting the benchmark for compact reference monitors.
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
                  <li>• Critical listening sessions</li>
                  <li>• Near-field monitoring</li>
                  <li>• High-end stereo systems</li>
                  <li>• Audiophile music lovers</li>
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

export default KEFLs50Meta;
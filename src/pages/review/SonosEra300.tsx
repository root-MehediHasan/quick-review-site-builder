import { ArrowLeft, Star, Check, Volume2, Wifi, Smartphone, Music } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SonosEra300 = () => {
  const pros = [
    "Revolutionary spatial audio technology",
    "6-driver array for immersive sound",
    "Dolby Atmos support",
    "Multi-room audio integration",
    "Voice control compatibility",
    "Premium build quality"
  ];

  const cons = [
    "Premium price point",
    "Requires stable Wi-Fi connection",
    "Limited Bluetooth functionality",
    "Size may not suit all spaces"
  ];

  const specs = [
    { label: "Drivers", value: "6-driver array" },
    { label: "Audio", value: "Spatial Audio, Dolby Atmos" },
    { label: "Connectivity", value: "Wi-Fi, Bluetooth" },
    { label: "Voice Control", value: "Alexa, Google Assistant" },
    { label: "Dimensions", value: "7.2 x 7.2 x 6.4 inches" },
    { label: "Weight", value: "4.9 lbs" }
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
            <Badge variant="secondary">Smart Speaker</Badge>
            <Badge variant="outline">Spatial Audio</Badge>
            <Badge variant="outline">Dolby Atmos</Badge>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Sonos Era 300: Spatial Audio Revolution</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">9.4/10</span>
            </div>
            <span className="text-muted-foreground">Reviewed December 2024</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Volume2 className="w-24 h-24 mx-auto mb-4 text-blue-500" />
                <p className="text-lg font-medium">Sonos Era 300</p>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Sonos Era 300 represents a groundbreaking leap in home audio technology, introducing 
                  true spatial audio capabilities to the Sonos ecosystem. This innovative speaker creates 
                  an immersive three-dimensional soundscape that transforms how we experience music and audio content.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With its unique six-driver configuration and support for Dolby Atmos, the Era 300 delivers 
                  room-filling sound that adapts to your space, making it the perfect centerpiece for any 
                  modern audio setup.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Audio Performance & Features</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Volume2 className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Spatial Audio Technology</h3>
                      <p className="text-muted-foreground text-sm">
                        Six precisely positioned drivers create an immersive 360-degree soundscape.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Music className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Dolby Atmos Support</h3>
                      <p className="text-muted-foreground text-sm">
                        Experience height, depth, and movement in your music with object-based audio.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wifi className="w-5 h-5 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Seamless Integration</h3>
                      <p className="text-muted-foreground text-sm">
                        Works perfectly with existing Sonos systems and supports multi-room audio.
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
                  The Era 300's spatial audio capabilities transform familiar songs into immersive experiences. 
                  Music seems to flow around and above you, creating a sense of being in the recording studio 
                  or concert hall. The speaker's TruePlay tuning automatically adjusts the sound to your room's 
                  acoustics for optimal performance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're streaming from Apple Music's spatial audio catalog or enjoying Dolby Atmos 
                  content, the Era 300 delivers clarity, depth, and dimensionality that traditional speakers 
                  simply cannot match. The bass response is rich without being overwhelming, while highs 
                  remain crisp and detailed.
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
                  <div className="text-3xl font-bold text-primary mb-2">9.4/10</div>
                  <Badge variant="default" className="mb-4">Innovation Award</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  The Era 300 sets a new standard for spatial audio in smart speakers, delivering 
                  an unparalleled immersive listening experience that justifies its premium positioning.
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
                  <li>• Spatial audio enthusiasts</li>
                  <li>• Existing Sonos users</li>
                  <li>• Premium home theater setups</li>
                  <li>• Multi-room audio systems</li>
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

export default SonosEra300;
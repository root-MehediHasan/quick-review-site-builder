import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, Heart } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Award,
      title: "Expert Reviews",
      description: "Our team of tech experts provides unbiased, thorough reviews based on real-world testing and professional analysis."
    },
    {
      icon: Heart,
      title: "Consumer First",
      description: "We prioritize helping consumers make informed decisions, not promoting products. Your trust is our most valuable asset."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We test products across different markets and use cases to provide comprehensive reviews for a global audience."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our content is shaped by your feedback, questions, and requests. We're here to serve the tech community."
    }
  ];

  const stats = [
    { number: "50M+", label: "Monthly Readers" },
    { number: "2,500+", label: "Products Reviewed" },
    { number: "5", label: "Years of Excellence" },
    { number: "25", label: "Expert Reviewers" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">About TechQuickReview</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Honest Reviews,</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Trusted Advice</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Founded in 2019, TechQuickReview has become a trusted source for honest, 
              in-depth technology reviews and buying guides. We're passionate about helping 
              consumers make informed decisions in an increasingly complex tech landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                TechQuickReview was born from a simple frustration: finding reliable, unbiased 
                technology reviews that actually help consumers make purchasing decisions. Our 
                founder, frustrated with sponsored content masquerading as honest reviews, 
                set out to create a platform where integrity comes first.
              </p>
              <p>
                What started as a blog reviewing smartphones has grown into a comprehensive 
                technology publication covering everything from laptops and headphones to 
                smart home devices and gaming gear. Our team of expert reviewers brings 
                decades of combined experience in technology journalism, engineering, and 
                product testing.
              </p>
              <p>
                We believe that great technology should be accessible to everyone, which is 
                why we review products across all price ranges and use cases. Whether you're 
                a professional photographer looking for the perfect camera or a student 
                needing a reliable laptop, we're here to help you find the right device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from product selection to review methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-6 bg-card border-border">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stay updated with our latest reviews, buying guides, and tech news. 
              Join thousands of informed consumers making better tech decisions.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg">Subscribe to Newsletter</Button>
              <Button variant="outline" size="lg">Follow on Social</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
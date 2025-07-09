import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, Heart, Target, Zap, Shield, TrendingUp, Star, CheckCircle, ArrowRight, Play } from "lucide-react";
import phoneReview from "@/assets/phone-review.jpg";

const AboutUs = () => {
  const values = [
    {
      icon: Award,
      title: "Expert Reviews",
      description: "Our team of tech experts provides unbiased, thorough reviews based on real-world testing and professional analysis.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Consumer First",
      description: "We prioritize helping consumers make informed decisions, not promoting products. Your trust is our most valuable asset.",
      gradient: "from-pink-500 to-red-600"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We test products across different markets and use cases to provide comprehensive reviews for a global audience.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our content is shaped by your feedback, questions, and requests. We're here to serve the tech community.",
      gradient: "from-orange-500 to-yellow-600"
    }
  ];

  const stats = [
    { number: "50M+", label: "Monthly Readers", icon: Users, color: "text-blue-600" },
    { number: "2,500+", label: "Products Reviewed", icon: Star, color: "text-purple-600" },
    { number: "5", label: "Years of Excellence", icon: Award, color: "text-green-600" },
    { number: "25", label: "Expert Reviewers", icon: Target, color: "text-orange-600" }
  ];

  const milestones = [
    {
      year: "2019",
      title: "TechQuickReview Founded",
      description: "Started as a passion project to provide honest tech reviews",
      icon: Zap
    },
    {
      year: "2020",
      title: "First Million Readers",
      description: "Reached 1M monthly readers with comprehensive smartphone reviews",
      icon: TrendingUp
    },
    {
      year: "2021",
      title: "Video Reviews Launch",
      description: "Expanded to video content with professional production quality",
      icon: Play
    },
    {
      year: "2022",
      title: "Editorial Team Expansion",
      description: "Grew to 25+ expert reviewers across all tech categories",
      icon: Users
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Won 'Best Tech Review Site' award from Digital Media Awards",
      icon: Award
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Launched international editions and multi-language support",
      icon: Globe
    }
  ];

  const achievements = [
    "50+ Million monthly readers worldwide",
    "2,500+ products thoroughly tested and reviewed",
    "99.2% reader satisfaction rating",
    "Featured in major tech publications",
    "Trusted by leading manufacturers",
    "Award-winning editorial content"
  ];

  const teamHighlights = [
    {
      name: "Sarah Mitchell",
      role: "Editor-in-Chief",
      image: phoneReview,
      expertise: "12 years in tech journalism"
    },
    {
      name: "Marcus Chen", 
      role: "Senior Hardware Reviewer",
      image: phoneReview,
      expertise: "Former Silicon Valley engineer"
    },
    {
      name: "Emma Rodriguez",
      role: "Audio Specialist", 
      image: phoneReview,
      expertise: "Professional sound engineer"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
              About TechQuickReview
            </Badge>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-foreground">Honest Reviews,</span><br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Trusted Advice</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Founded in 2019, TechQuickReview has become the world's most trusted source for 
              honest, in-depth technology reviews and buying guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                Meet Our Team
              </Button>
              <Button variant="glow" size="lg" className="text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-8 bg-gradient-to-br from-card to-secondary/30 border-border hover:shadow-elevated transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From a simple frustration to a global platform trusted by millions
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p className="text-lg leading-relaxed">
                    TechQuickReview was born from a simple frustration: finding reliable, unbiased 
                    technology reviews that actually help consumers make purchasing decisions. Our 
                    founder, frustrated with sponsored content masquerading as honest reviews, 
                    set out to create a platform where integrity comes first.
                  </p>
                  <p className="text-lg leading-relaxed">
                    What started as a blog reviewing smartphones has grown into a comprehensive 
                    technology publication covering everything from laptops and headphones to 
                    smart home devices and gaming gear.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {achievements.slice(0, 4).map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Our Mission</h3>
                      <p className="text-muted-foreground">Empowering informed decisions</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe that great technology should be accessible to everyone, which is 
                    why we review products across all price ranges and use cases. Whether you're 
                    a professional photographer or a student needing a reliable laptop, we're here 
                    to help you find the right device.
                  </p>
                  <Button variant="glow" className="w-full">
                    Learn More About Our Process
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped TechQuickReview into what it is today
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => {
                  const IconComponent = milestone.icon;
                  return (
                    <div key={index} className="relative flex items-start gap-8">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10 shadow-glow">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <Card className="flex-1 p-6 bg-card border-border hover:shadow-elevated transition-all duration-300 group">
                        <div className="flex items-center gap-4 mb-3">
                          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/10">
                            {milestone.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from product selection to review methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-8 bg-card border-border hover:shadow-elevated hover:-translate-y-2 transition-all duration-300 group">
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Leaders</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The expert team behind TechQuickReview's trusted reviews and analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {teamHighlights.map((member, index) => (
              <Card key={index} className="overflow-hidden bg-card border-border hover:shadow-elevated transition-all duration-300 group">
                <div className="aspect-square bg-gradient-primary/20 relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm">{member.expertise}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="glow" size="lg" asChild>
              <a href="/editorial-team">
                <Users className="w-5 h-5 mr-2" />
                Meet the Full Team
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-to-br from-card to-secondary/30 border-border shadow-elevated">
            <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay updated with our latest reviews, buying guides, and tech news. 
              Join millions of informed consumers making better tech decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Shield className="w-5 h-5 mr-2" />
                Subscribe to Newsletter
              </Button>
              <Button variant="glow" size="lg" className="text-lg px-8 py-4">
                <Globe className="w-5 h-5 mr-2" />
                Follow on Social
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
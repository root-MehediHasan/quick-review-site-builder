import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Twitter, Linkedin, Award, Camera, Laptop, Gamepad2, Headphones } from "lucide-react";
import phoneReview from "@/assets/phone-review.jpg";

const EditorialTeam = () => {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Editor-in-Chief",
      expertise: "Smartphones & Mobile Tech",
      bio: "With 12 years of technology journalism experience, Sarah leads our editorial vision and ensures every review meets our high standards.",
      avatar: phoneReview,
      specialties: ["iPhone", "Android", "5G Technology", "Mobile Photography"],
      icon: Camera,
      social: {
        twitter: "@sarahmtech",
        linkedin: "sarah-mitchell-tech"
      }
    },
    {
      name: "Marcus Chen",
      role: "Senior Hardware Reviewer",
      expertise: "Laptops & Computing",
      bio: "Former Silicon Valley engineer turned reviewer, Marcus brings deep technical knowledge to laptop and PC component reviews.",
      avatar: phoneReview,
      specialties: ["Gaming Laptops", "Workstations", "CPU/GPU Analysis", "Performance Testing"],
      icon: Laptop,
      social: {
        twitter: "@marcustech",
        linkedin: "marcus-chen-reviews"
      }
    },
    {
      name: "Emma Rodriguez",
      role: "Audio Specialist",
      expertise: "Headphones & Audio Equipment",
      bio: "Audiophile and former sound engineer, Emma's trained ear helps readers find audio equipment that delivers exceptional quality.",
      avatar: phoneReview,
      specialties: ["Hi-Fi Audio", "Noise Cancellation", "Studio Monitors", "Wireless Technology"],
      icon: Headphones,
      social: {
        twitter: "@emmaaudio",
        linkedin: "emma-rodriguez-audio"
      }
    },
    {
      name: "Jake Thompson",
      role: "Gaming Editor",
      expertise: "Gaming Hardware & Consoles",
      bio: "Pro gamer turned reviewer, Jake tests gaming gear with the precision of a competitive esports athlete.",
      avatar: phoneReview,
      specialties: ["Gaming Peripherals", "Console Reviews", "VR Technology", "Esports Gear"],
      icon: Gamepad2,
      social: {
        twitter: "@jakegaming",
        linkedin: "jake-thompson-gaming"
      }
    },
    {
      name: "Dr. Lisa Park",
      role: "Technical Analyst",
      expertise: "Emerging Technologies",
      bio: "PhD in Computer Science with expertise in AI, IoT, and emerging technologies. Lisa analyzes the technical innovations behind new products.",
      avatar: phoneReview,
      specialties: ["AI Technology", "Smart Home", "IoT Devices", "Security Analysis"],
      icon: Award,
      social: {
        twitter: "@drlisakpark",
        linkedin: "dr-lisa-park-tech"
      }
    },
    {
      name: "David Kumar",
      role: "Video Producer",
      expertise: "Video Reviews & Content",
      bio: "Award-winning videographer who brings our reviews to life through engaging video content and detailed visual comparisons.",
      avatar: phoneReview,
      specialties: ["Video Production", "Product Photography", "YouTube Content", "Visual Storytelling"],
      icon: Camera,
      social: {
        twitter: "@davidvideo",
        linkedin: "david-kumar-video"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">Meet Our Team</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Editorial</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our diverse team of technology experts, engineers, and reviewers brings 
              decades of combined experience to deliver the most comprehensive and 
              trustworthy tech reviews in the industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <Card key={index} className="group cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 bg-card border-border overflow-hidden">
                  {/* Profile Image */}
                  <div className="aspect-square bg-gradient-primary/20 relative overflow-hidden">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <Badge variant="outline" className="text-xs">
                        {member.expertise}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {member.bio}
                    </p>
                    
                    {/* Specialties */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.slice(0, 3).map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                        {member.specialties.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{member.specialties.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex items-center gap-2 pt-4 border-t border-border">
                      <Button variant="ghost" size="sm" className="p-2">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're always looking for passionate tech enthusiasts and experienced 
              reviewers to join our editorial team. Help us shape the future of tech journalism.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg">View Open Positions</Button>
              <Button variant="outline" size="lg">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EditorialTeam;
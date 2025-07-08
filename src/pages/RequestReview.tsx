import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, Star, Clock, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const RequestReview = () => {
  const [formData, setFormData] = useState({
    productName: "",
    manufacturer: "",
    category: "",
    productUrl: "",
    purchasePrice: "",
    availability: "",
    requestType: "",
    priority: "",
    description: "",
    contactName: "",
    contactEmail: "",
    contactCompany: "",
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message
    toast.success("Review Request Submitted!", {
      description: "We've received your request and will review it within 48 hours. Thank you for your suggestion!",
      duration: 5000,
    });

    // Reset form
    setFormData({
      productName: "",
      manufacturer: "",
      category: "",
      productUrl: "",
      purchasePrice: "",
      availability: "",
      requestType: "",
      priority: "",
      description: "",
      contactName: "",
      contactEmail: "",
      contactCompany: "",
      agreeToTerms: false
    });
  };

  const stats = [
    { icon: Star, number: "2,500+", label: "Products Reviewed" },
    { icon: Clock, number: "48hrs", label: "Average Response Time" },
    { icon: Users, number: "95%", label: "Request Approval Rate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">Product Suggestions</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Request a</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Review</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have a product you'd like us to review? Submit your suggestion and help shape our review schedule. 
              We value community input and regularly review reader-requested products.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-card border-border">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Submit Your Review Request</h2>
                <p className="text-muted-foreground">
                  Fill out the form below with as much detail as possible. The more information you provide, 
                  the better we can evaluate and prioritize your request.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Product Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold border-b border-border pb-2">Product Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="productName">Product Name *</Label>
                      <Input 
                        id="productName"
                        value={formData.productName}
                        onChange={(e) => setFormData({...formData, productName: e.target.value})}
                        placeholder="e.g., iPhone 15 Pro Max"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="manufacturer">Manufacturer *</Label>
                      <Input 
                        id="manufacturer"
                        value={formData.manufacturer}
                        onChange={(e) => setFormData({...formData, manufacturer: e.target.value})}
                        placeholder="e.g., Apple, Samsung, Sony"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="category">Product Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="smartphones">Smartphones</SelectItem>
                          <SelectItem value="laptops">Laptops</SelectItem>
                          <SelectItem value="audio">Audio & Headphones</SelectItem>
                          <SelectItem value="gaming">Gaming</SelectItem>
                          <SelectItem value="cameras">Cameras</SelectItem>
                          <SelectItem value="wearables">Wearables</SelectItem>
                          <SelectItem value="tablets">Tablets</SelectItem>
                          <SelectItem value="monitors">Monitors</SelectItem>
                          <SelectItem value="keyboards">Keyboards</SelectItem>
                          <SelectItem value="mice">Mice</SelectItem>
                          <SelectItem value="speakers">Speakers</SelectItem>
                          <SelectItem value="smart-tvs">Smart TVs</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="productUrl">Product URL</Label>
                      <Input 
                        id="productUrl"
                        type="url"
                        value={formData.productUrl}
                        onChange={(e) => setFormData({...formData, productUrl: e.target.value})}
                        placeholder="Official product page or retailer link"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="purchasePrice">Retail Price (USD)</Label>
                      <Input 
                        id="purchasePrice"
                        value={formData.purchasePrice}
                        onChange={(e) => setFormData({...formData, purchasePrice: e.target.value})}
                        placeholder="e.g., $999"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availability">Availability</Label>
                      <Select value={formData.availability} onValueChange={(value) => setFormData({...formData, availability: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="available">Currently Available</SelectItem>
                          <SelectItem value="pre-order">Pre-order</SelectItem>
                          <SelectItem value="upcoming">Upcoming Release</SelectItem>
                          <SelectItem value="limited">Limited Availability</SelectItem>
                          <SelectItem value="unknown">Unknown</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Request Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold border-b border-border pb-2">Request Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="requestType">Request Type *</Label>
                      <Select value={formData.requestType} onValueChange={(value) => setFormData({...formData, requestType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select request type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-review">Full Product Review</SelectItem>
                          <SelectItem value="comparison">Product Comparison</SelectItem>
                          <SelectItem value="first-impressions">First Impressions</SelectItem>
                          <SelectItem value="long-term">Long-term Review</SelectItem>
                          <SelectItem value="buying-guide">Buying Guide Update</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority Level</Label>
                      <Select value={formData.priority} onValueChange={(value) => setFormData({...formData, priority: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">High - Trending/Popular</SelectItem>
                          <SelectItem value="medium">Medium - General Interest</SelectItem>
                          <SelectItem value="low">Low - Niche Product</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Why should we review this product? *</Label>
                    <Textarea 
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Tell us why this product would be valuable to review. Include unique features, market significance, or reader interest..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold border-b border-border pb-2">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Your Name *</Label>
                      <Input 
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                        placeholder="Full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Email Address *</Label>
                      <Input 
                        id="contactEmail"
                        type="email"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactCompany">Company/Organization (Optional)</Label>
                    <Input 
                      id="contactCompany"
                      value={formData.contactCompany}
                      onChange={(e) => setFormData({...formData, contactCompany: e.target.value})}
                      placeholder="Company name if submitting on behalf of organization"
                    />
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({...formData, agreeToTerms: checked as boolean})}
                      required
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I agree that this request may be shared with manufacturers for review unit procurement, 
                      and I understand that not all requests can be fulfilled due to availability and editorial priorities.
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    variant="glow" 
                    size="lg" 
                    className="w-full"
                    disabled={!formData.agreeToTerms}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Review Request
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestReview;
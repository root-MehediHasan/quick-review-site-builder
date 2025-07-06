import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">Legal</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Terms of</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Last updated: January 1, 2024
            </p>
            <p className="text-muted-foreground">
              Please read these terms carefully before using our website and services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-card border-border">
              <div className="prose prose-lg max-w-none text-foreground space-y-8">
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      By accessing and using TechQuickReview ("we," "us," or "our"), 
                      you accept and agree to be bound by the terms and provision of 
                      this agreement. If you do not agree to abide by the above, 
                      please do not use this service.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      TechQuickReview provides technology reviews, buying guides, 
                      comparison tools, tech news, and related content ("Service"). 
                      The Service includes all aspects of our website, including but 
                      not limited to:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Product reviews and ratings</li>
                      <li>Buying guides and recommendations</li>
                      <li>Comparison tools and charts</li>
                      <li>Technology news and analysis</li>
                      <li>User comments and community features</li>
                      <li>Newsletter and email communications</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>As a user of our Service, you agree to:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Provide accurate and truthful information</li>
                      <li>Use the Service only for lawful purposes</li>
                      <li>Respect the intellectual property rights of others</li>
                      <li>Not engage in spam, harassment, or abusive behavior</li>
                      <li>Not attempt to disrupt or damage our systems</li>
                      <li>Comply with all applicable laws and regulations</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Content and Intellectual Property</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      All content on TechQuickReview, including but not limited to 
                      text, graphics, logos, images, audio clips, video clips, data 
                      compilations, and software, is our property or the property of 
                      our content suppliers and is protected by copyright laws.
                    </p>
                    <p>You may not:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Reproduce, distribute, or republish our content without permission</li>
                      <li>Use our content for commercial purposes without authorization</li>
                      <li>Modify or create derivative works from our content</li>
                      <li>Remove copyright or other proprietary notices</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. User-Generated Content</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      When you submit comments, reviews, or other content to our 
                      website ("User Content"), you grant us a non-exclusive, 
                      royalty-free, perpetual, and worldwide license to use, 
                      reproduce, modify, and display such content.
                    </p>
                    <p>You represent and warrant that your User Content:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Is original and does not infringe on third-party rights</li>
                      <li>Does not contain harmful, offensive, or illegal material</li>
                      <li>Does not violate any applicable laws or regulations</li>
                      <li>Is not spam or misleading information</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Disclaimers and Warranties</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      Our reviews and recommendations are based on our testing and 
                      analysis at the time of publication. We make no warranties or 
                      representations about the accuracy, reliability, or completeness 
                      of our content.
                    </p>
                    <p>
                      THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, 
                      EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
                      WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
                      OR NON-INFRINGEMENT.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      IN NO EVENT SHALL TECHQUICKREVIEW BE LIABLE FOR ANY INDIRECT, 
                      INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, 
                      INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, 
                      ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Affiliate Links and Advertising</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      Our website may contain affiliate links to products and services. 
                      When you click on these links and make a purchase, we may receive 
                      a commission. This does not affect our editorial independence or 
                      review scores.
                    </p>
                    <p>
                      We clearly disclose affiliate relationships and maintain editorial 
                      integrity in all our content.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Privacy Policy</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      Your privacy is important to us. Please review our Privacy Policy, 
                      which also governs your use of the Service, to understand our 
                      practices regarding the collection and use of your information.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Modification of Terms</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      We reserve the right to modify these Terms of Service at any 
                      time. Changes will be effective immediately upon posting on 
                      our website. Your continued use of the Service after changes 
                      are posted constitutes your acceptance of the modified terms.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      We may terminate or suspend your access to the Service immediately, 
                      without prior notice or liability, for any reason, including 
                      breach of these Terms of Service.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      These Terms of Service shall be governed by and construed in 
                      accordance with the laws of the State of California, without 
                      regard to its conflict of law provisions.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      If you have any questions about these Terms of Service, 
                      please contact us at:
                    </p>
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <p><strong>Email:</strong> legal@techquickreview.com</p>
                      <p><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
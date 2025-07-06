import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">Legal</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Privacy</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Last updated: January 1, 2024
            </p>
            <p className="text-muted-foreground">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
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
                  <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      We collect information you provide directly to us, such as when you:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Subscribe to our newsletter</li>
                      <li>Create an account on our website</li>
                      <li>Contact us through our contact forms</li>
                      <li>Participate in surveys or promotions</li>
                      <li>Comment on our articles or reviews</li>
                    </ul>
                    <p>
                      We also automatically collect certain information about your device and 
                      how you interact with our website, including:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent on site</li>
                      <li>Referring website information</li>
                      <li>Device information and screen resolution</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Send you newsletters and updates (with your consent)</li>
                      <li>Respond to your comments, questions, and requests</li>
                      <li>Analyze website usage and optimize user experience</li>
                      <li>Detect, prevent, and address technical issues</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      We do not sell, trade, or otherwise transfer your personal information 
                      to third parties without your consent, except in the following circumstances:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>With your explicit consent</li>
                      <li>To comply with legal obligations or court orders</li>
                      <li>To protect our rights, property, or safety</li>
                      <li>With service providers who assist us in operating our website</li>
                      <li>In connection with a merger, acquisition, or sale of assets</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Cookies and Tracking Technologies</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      We use cookies and similar tracking technologies to enhance your 
                      browsing experience and analyze website traffic. You can control 
                      cookie preferences through your browser settings.
                    </p>
                    <p>Types of cookies we use:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Essential cookies:</strong> Required for website functionality</li>
                      <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
                      <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                      <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      We implement appropriate technical and organizational security measures 
                      to protect your personal information against unauthorized access, 
                      alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>SSL encryption for data transmission</li>
                      <li>Regular security audits and updates</li>
                      <li>Access controls and staff training</li>
                      <li>Secure data storage and backup procedures</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>You have the right to:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Access the personal information we hold about you</li>
                      <li>Request correction of inaccurate or incomplete information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Opt-out of marketing communications</li>
                      <li>Request data portability</li>
                      <li>Object to processing of your personal information</li>
                    </ul>
                    <p>
                      To exercise these rights, please contact us using the information 
                      provided in the "Contact Us" section below.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. International Data Transfers</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      Your information may be transferred to and processed in countries 
                      other than your own. We ensure that such transfers comply with 
                      applicable data protection laws and implement appropriate safeguards.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      Our website is not directed to children under 13 years of age. 
                      We do not knowingly collect personal information from children 
                      under 13. If we learn that we have collected such information, 
                      we will delete it promptly.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      We may update this Privacy Policy from time to time. We will 
                      notify you of any material changes by posting the new Privacy 
                      Policy on this page and updating the "Last updated" date.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                  <div className="text-muted-foreground space-y-4">
                    <p>
                      If you have any questions about this Privacy Policy or our 
                      privacy practices, please contact us at:
                    </p>
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <p><strong>Email:</strong> privacy@techquickreview.com</p>
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

export default PrivacyPolicy;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, HelpCircle, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      title: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          question: "How do you choose products to review?",
          answer: "We select products based on several factors: market relevance, reader requests, innovation level, and consumer interest. We aim to review products across all price ranges to serve our diverse audience. Our editorial team evaluates new releases, trending products, and community suggestions to create a balanced review schedule that covers both flagship and budget-friendly options."
        },
        {
          question: "How long does a typical review take?",
          answer: "Our reviews typically take 2-4 weeks of testing before publication. This includes initial setup, daily usage testing, performance benchmarks, and comparison with similar products. Complex products like laptops or cameras may require longer evaluation periods to test various scenarios and use cases. We believe thorough testing is essential for providing accurate, reliable reviews."
        },
        {
          question: "Do you accept products for review from manufacturers?",
          answer: "Yes, we accept review units from manufacturers, but this never influences our review scores or opinions. We maintain complete editorial independence and clearly disclose when we've received a product for review. Whether we purchase a product ourselves or receive it from a manufacturer, our testing methodology and scoring criteria remain exactly the same."
        }
      ]
    },
    {
      title: "Review Process",
      icon: MessageCircle,
      questions: [
        {
          question: "What is your review scoring methodology?",
          answer: "Our 10-point scoring system evaluates products across multiple criteria: build quality, performance, features, value for money, and user experience. Each category is weighted based on the product type. For example, battery life is more important for smartphones than desktop computers. Our reviewers test products in real-world scenarios and compare them against competitors in the same price range."
        },
        {
          question: "How do you ensure review objectivity?",
          answer: "We maintain objectivity through several measures: standardized testing procedures, multiple reviewer input, blind testing when possible, and separation of editorial and business operations. Our reviewers are not involved in affiliate partnerships or advertising decisions. We also regularly audit our processes and welcome feedback from readers about our review quality and fairness."
        },
        {
          question: "Can I suggest a product comparison?",
          answer: "Absolutely! We love reader suggestions for product comparisons. You can submit comparison requests through our contact form, social media, or the 'Request a Review' page. Popular comparison requests often become full comparison articles or buying guides. We prioritize comparisons that help consumers make informed purchasing decisions between similar products."
        }
      ]
    },
    {
      title: "Website & Content",
      icon: Mail,
      questions: [
        {
          question: "How often do you update your buying guides?",
          answer: "We update our buying guides regularly, typically every 3-6 months or when significant new products are released. Major guides like 'Best Smartphones' or 'Best Laptops' are updated quarterly to reflect new releases, price changes, and market shifts. We also add update notes to indicate when guides were last revised and what changes were made."
        },
        {
          question: "Do you offer video reviews for all products?",
          answer: "We create video reviews for most major product categories, with priority given to smartphones, laptops, and popular consumer electronics. Video production takes additional time, so not every written review has a corresponding video. However, we're expanding our video content and aim to cover more products with both written and video reviews in the future."
        },
        {
          question: "How can I stay updated with your latest content?",
          answer: "You can stay updated by subscribing to our newsletter, following us on social media, or bookmarking our website. Our newsletter goes out weekly with the latest reviews, buying guides, and tech news. We also have RSS feeds available for different categories if you prefer that method of staying updated."
        }
      ]
    },
    {
      title: "Business & Partnerships",
      icon: HelpCircle,
      questions: [
        {
          question: "How do affiliate links work on your site?",
          answer: "We use affiliate links to help support our operations, but they never influence our review scores or recommendations. When you click on a product link and make a purchase, we may receive a small commission at no extra cost to you. We clearly disclose affiliate relationships and only recommend products we genuinely believe offer value to our readers."
        },
        {
          question: "Do you offer sponsored content or paid reviews?",
          answer: "We do not offer paid reviews or allow sponsors to influence our editorial content. Any sponsored content is clearly labeled and separate from our review content. Our reviews are based solely on our testing and analysis, never on financial relationships with manufacturers. This independence is crucial to maintaining reader trust and providing honest recommendations."
        },
        {
          question: "Can manufacturers respond to negative reviews?",
          answer: "Manufacturers can contact us to clarify technical specifications or provide additional information, but they cannot change review scores or conclusions. If we discover factual errors in our reviews, we will issue corrections and updates. However, differences of opinion about product quality or value propositions are part of the review process and reflect our honest assessment."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">Help Center</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Frequently Asked</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions about our reviews, processes, and policies. 
              Can't find what you're looking for? Contact our support team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search FAQs..."
                  className="pl-10 bg-background/50 border-border focus:border-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.length > 0 ? (
              <div className="space-y-8">
                {filteredCategories.map((category, categoryIndex) => {
                  const IconComponent = category.icon;
                  return (
                    <Card key={categoryIndex} className="p-6 bg-card border-border">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                      </div>
                      
                      <Accordion type="single" collapsible className="space-y-2">
                        {category.questions.map((faq, index) => (
                          <AccordionItem 
                            key={index} 
                            value={`${categoryIndex}-${index}`}
                            className="border border-border rounded-lg px-4"
                          >
                            <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                              <span className="font-medium">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <Card className="p-12 text-center bg-card border-border">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any FAQs matching "{searchQuery}". Try different keywords or browse all categories.
                </p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Can't find the answer you're looking for? Our support team is here to help 
              with any questions about our reviews, processes, or website.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="glow" size="lg" asChild>
                <a href="/contact">Contact Support</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/request-review">Request Review</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
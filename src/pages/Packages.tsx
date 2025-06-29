
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, MessageCircle, Star } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      id: "economy",
      name: "Economy",
      price: "₹15-20 Lakhs",
      duration: "6-8 Months",
      popular: false,
      description: "Perfect for budget-conscious homeowners seeking quality construction",
      features: [
        "Standard construction materials",
        "Basic architectural design",
        "Standard electrical & plumbing",
        "Basic interior finishes",
        "Monthly progress reports",
        "1-year warranty",
        "Standard tile flooring",
        "Basic kitchen & bathroom fittings"
      ],
      consultation: "Free initial consultation"
    },
    {
      id: "standard",
      name: "Standard",
      price: "₹25-35 Lakhs",
      duration: "4-6 Months",
      popular: true,
      description: "Most popular choice with premium materials and modern design",
      features: [
        "Premium construction materials",
        "Modern architectural design",
        "Advanced electrical & plumbing",
        "Premium interior finishes",
        "Bi-weekly progress reports",
        "2-year warranty",
        "Designer tile & flooring options",
        "Modular kitchen & premium fittings",
        "Basic home automation",
        "Landscaping consultation"
      ],
      consultation: "Free consultation + 3D design preview"
    },
    {
      id: "premium",
      name: "Premium",
      price: "₹40+ Lakhs",
      duration: "3-5 Months",
      popular: false,
      description: "Luxury construction with smart home integration and premium finishes",
      features: [
        "Luxury construction materials",
        "Custom architectural design",
        "Smart home electrical systems",
        "Luxury interior finishes",
        "Weekly progress reports",
        "5-year warranty",
        "Premium flooring (marble/hardwood)",
        "Designer kitchen & luxury fittings",
        "Complete home automation",
        "Professional landscaping",
        "Dedicated project manager",
        "Premium security systems"
      ],
      consultation: "Free consultation + 3D design + site visit"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair text-shadow-lg">
              Construction <span className="text-yellow-300">Packages</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Choose the perfect construction package that fits your budget and requirements. From economy to premium, we have something for everyone.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-playfair">Choose Your Package</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select from our carefully crafted packages designed to meet different budgets and requirements. Each package includes consultation with our expert team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.id} 
                className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                  pkg.popular ? 'ring-2 ring-orange-500 scale-105' : ''
                } bg-white dark:bg-gray-800 border-0 shadow-xl`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-bold">MOST POPULAR</span>
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                )}
                
                <CardHeader className={`text-center ${pkg.popular ? 'pt-16' : 'pt-8'}`}>
                  <CardTitle className="text-2xl font-bold text-foreground font-playfair">
                    {pkg.name}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                      {pkg.price}
                    </div>
                    <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                      {pkg.duration}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mt-4">
                    {pkg.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-4">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg mb-4">
                      <p className="text-sm font-medium text-orange-800 dark:text-orange-200">
                        {pkg.consultation}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        asChild 
                        className={`w-full ${
                          pkg.popular 
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600' 
                            : 'bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 border-orange-600 dark:border-orange-400 hover:bg-orange-600 hover:text-white'
                        } transition-all duration-300`}
                        variant={pkg.popular ? "default" : "outline"}
                      >
                        <Link to="/contact">
                          Get Consultation
                        </Link>
                      </Button>

                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 border-green-600 dark:border-green-400 hover:bg-green-600 hover:text-white"
                          onClick={() => {
                            const message = `Hi! I'm interested in the ${pkg.name} package (${pkg.price}). Please provide more details and schedule a consultation.`;
                            window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
                          }}
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          WhatsApp
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-600 hover:text-white"
                          onClick={() => window.open('tel:+919876543210', '_self')}
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Call
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-playfair">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">What's included in the consultation?</h3>
                <p className="text-muted-foreground">Our consultation includes site analysis, requirement discussion, preliminary design concepts, cost estimation, and timeline planning. Premium packages include 3D previews and site visits.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">Can I customize the packages?</h3>
                <p className="text-muted-foreground">Absolutely! All our packages can be customized based on your specific requirements. We'll work with you to create a solution that fits your budget and needs perfectly.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-2">What about permits and approvals?</h3>
                <p className="text-muted-foreground">We handle all necessary permits and approvals as part of our service. Our team is well-versed with local regulations and will ensure all documentation is in order.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-playfair">Ready to Start Your Dream Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact our experts today for a free consultation and let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300">
              <a href="tel:+919876543210">Call: +91 98765 43210</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;

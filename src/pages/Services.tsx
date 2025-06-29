import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "construction",
      title: "Construction",
      subtitle: "New Build Projects",
      description:
        "Complete construction services for residential and commercial projects with modern techniques and quality materials.",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Residential Construction",
        "Commercial Buildings",
        "Industrial Projects",
        "Custom Home Building",
        "Green Building Solutions",
      ],
      price: "Starting from ₹1,800/sq ft",
    },
    {
      id: "renovation",
      title: "Renovation",
      subtitle: "Transform Your Space",
      description:
        "Comprehensive renovation services to update and modernize your existing residential or commercial space.",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Home Renovations",
        "Office Makeovers",
        "Kitchen Remodeling",
        "Bathroom Upgrades",
        "Exterior Renovations",
      ],
      price: "Starting from ₹800/sq ft",
    },
    {
      id: "interior-fitouts",
      title: "Interior Fit-outs",
      subtitle: "Complete Interior Solutions",
      description:
        "Professional interior fit-out services for offices, retail spaces, and residential properties.",
      image:
        "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Office Interiors",
        "Retail Spaces",
        "Restaurant Fit-outs",
        "Residential Interiors",
        "Turnkey Solutions",
      ],
      price: "Starting from ₹1,200/sq ft",
    },
    {
      id: "project-management",
      title: "Project Management",
      subtitle: "End-to-End Coordination",
      description:
        "Professional project management services ensuring timely delivery and quality control for all construction projects.",
      image:
        "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Timeline Management",
        "Quality Control",
        "Budget Management",
        "Resource Coordination",
        "Progress Reporting",
      ],
      price: "5-10% of project value",
    },
    {
      id: "general-contracting",
      title: "General Contracting",
      subtitle: "Complete Construction Management",
      description:
        "Full-service general contracting for large-scale residential and commercial construction projects.",
      image:
        "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Large Scale Projects",
        "Multi-Unit Developments",
        "Commercial Complexes",
        "Infrastructure Projects",
        "Turnkey Solutions",
      ],
      price: "Contact for custom quote",
    },
  ];

  const whyChooseUs = [
    "15+ Years of Experience",
    "500+ Completed Projects",
    "Licensed & Insured",
    "Quality Materials Only",
    "On-Time Delivery",
    "24/7 Customer Support",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Our Construction Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive construction and renovation solutions for
              residential and commercial projects in Bangalore.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-lg text-blue-600 font-medium mb-4">
                          {service.subtitle}
                        </p>
                        <p className="text-gray-600 mb-6">
                          {service.description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4">
                        <p className="text-2xl font-bold text-orange-600 mb-4">
                          {service.price}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            asChild
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <Link to={`/services/${service.id}`}>
                              Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button asChild variant="outline">
                            <Link to="/contact">Get Quote</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose SR DreamSpace?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine experience, expertise, and commitment to deliver
              exceptional results for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-gray-800 font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a detailed quote for your construction or renovation project.
            Free consultation available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4"
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-orange-600"
            >
              <a href="tel:+919876543210">Call: +91 98765 43210</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

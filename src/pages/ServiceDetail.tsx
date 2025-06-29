import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowLeft, Phone, Clock, Award } from "lucide-react";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const serviceDetails: Record<string, any> = {
    construction: {
      title: "Construction Services",
      subtitle: "New Build Projects",
      description:
        "Our construction services encompass complete new build projects for residential and commercial properties. We handle everything from foundation to finishing with meticulous attention to detail.",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: "Starting from ₹1,800/sq ft",
      timeline: "3-6 months",
      features: [
        "Complete structural design and engineering",
        "Foundation and structural work",
        "Electrical and plumbing installation",
        "Roofing and waterproofing",
        "Interior and exterior finishing",
        "Quality materials and workmanship",
        "Building permits and approvals",
        "Final inspections and handover",
      ],
      process: [
        "Initial consultation and site survey",
        "Design development and approvals",
        "Material procurement and scheduling",
        "Foundation and structural work",
        "MEP (Mechanical, Electrical, Plumbing) installation",
        "Interior and exterior finishing",
        "Final inspections and quality checks",
        "Project handover and documentation",
      ],
    },
    renovation: {
      title: "Renovation Services",
      subtitle: "Transform Your Space",
      description:
        "Comprehensive renovation services to breathe new life into your existing space. From minor updates to complete overhauls, we handle all aspects of renovation work.",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: "Starting from ₹800/sq ft",
      timeline: "2-4 weeks",
      features: [
        "Kitchen and bathroom remodeling",
        "Floor and wall refinishing",
        "Electrical and plumbing upgrades",
        "Structural modifications",
        "Energy efficiency improvements",
        "Modern design integration",
        "Minimal disruption to daily life",
        "Waste management and cleanup",
      ],
      process: [
        "Property assessment and planning",
        "Design consultation and approval",
        "Permit acquisition if required",
        "Demolition and preparation work",
        "Structural and MEP modifications",
        "Installation and finishing work",
        "Final touches and quality control",
        "Cleanup and project completion",
      ],
    },
    "interior-fitouts": {
      title: "Interior Fit-outs",
      subtitle: "Complete Interior Solutions",
      description:
        "Professional interior fit-out services for commercial and residential spaces. We create functional and aesthetically pleasing interiors that meet your specific requirements.",
      image:
        "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: "Starting from ₹1,200/sq ft",
      timeline: "1-3 months",
      features: [
        "Space planning and design",
        "Custom furniture and fixtures",
        "Ceiling and flooring solutions",
        "Lighting design and installation",
        "HVAC integration",
        "Acoustic treatment",
        "Technology integration",
        "Turnkey project delivery",
      ],
      process: [
        "Space analysis and requirements gathering",
        "Concept design and 3D visualization",
        "Material selection and procurement",
        "Site preparation and setup",
        "Installation of fixtures and fittings",
        "Technology and lighting integration",
        "Quality assurance and testing",
        "Final handover and maintenance guide",
      ],
    },
    "project-management": {
      title: "Project Management",
      subtitle: "End-to-End Coordination",
      description:
        "Professional project management services ensuring your construction project is delivered on time, within budget, and to the highest quality standards.",
      image:
        "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: "5-10% of project value",
      timeline: "Throughout project duration",
      features: [
        "Project planning and scheduling",
        "Budget management and cost control",
        "Quality assurance and control",
        "Risk management and mitigation",
        "Vendor and contractor coordination",
        "Progress monitoring and reporting",
        "Change management",
        "Final project delivery",
      ],
      process: [
        "Project initiation and planning",
        "Resource allocation and scheduling",
        "Contractor selection and management",
        "Regular progress monitoring",
        "Quality control checkpoints",
        "Issue resolution and communication",
        "Final inspections and approvals",
        "Project closure and documentation",
      ],
    },
    "general-contracting": {
      title: "General Contracting",
      subtitle: "Complete Construction Management",
      description:
        "Full-service general contracting for large-scale residential and commercial construction projects with comprehensive project oversight.",
      image:
        "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      price: "Contact for custom quote",
      timeline: "6-18 months",
      features: [
        "Complete project oversight",
        "Subcontractor management",
        "Permit and regulatory compliance",
        "Safety management and protocols",
        "Material procurement and logistics",
        "Quality control and inspections",
        "Timeline and budget management",
        "Client communication and reporting",
      ],
      process: [
        "Project assessment and planning",
        "Contract negotiation and agreements",
        "Permit acquisition and approvals",
        "Subcontractor selection and coordination",
        "Construction execution and oversight",
        "Regular quality and safety inspections",
        "Progress reporting and client updates",
        "Final delivery and warranty support",
      ],
    },
  };

  const service = serviceDetails[serviceId || ""];

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Service Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The service you're looking for doesn't exist.
        </p>
        <Button asChild>
          <Link to="/services">Back to Services</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <Button
            asChild
            variant="outline"
            className="mb-6 border-white text-white hover:bg-white hover:text-blue-900"
          >
            <Link to="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl text-blue-200 mb-6">{service.subtitle}</p>
            <p className="text-lg text-gray-200 max-w-3xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">
                    Premium Quality
                  </div>
                  <div className="text-sm text-gray-600">Guaranteed</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Timeline</div>
                  <div className="text-sm text-gray-600">
                    {service.timeline}
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Phone className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">
                    24/7 Support
                  </div>
                  <div className="text-sm text-gray-600">Always Available</div>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Starting Price
                </h3>
                <p className="text-3xl font-bold text-orange-600">
                  {service.price}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+919876543210">Call Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step: string, index: number) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote for your{" "}
            {service.title.toLowerCase()} project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4"
            >
              <Link to="/contact">Get Free Consultation</Link>
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

export default ServiceDetail;

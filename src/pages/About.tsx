import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Target, Eye, CheckCircle, Phone } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Suresh R",
      position: "Founder & CEO",
      experience: "20+ years",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Priya Menon",
      position: "Lead Architect",
      experience: "15+ years",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Amit Kumar",
      position: "Project Manager",
      experience: "12+ years",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Lakshmi Naik",
      position: "Interior Designer",
      experience: "10+ years",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const certifications = [
    "Licensed General Contractor - Karnataka",
    "ISO 9001:2015 Quality Management",
    "Green Building Council Member",
    "Safety Management Certified",
    "BIS Standards Compliance",
    "Environmental Management ISO 14001",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About SR DreamSpace</h1>
            <p className="text-xl text-gray-200">
              Building exceptional spaces with integrity, innovation, and
              excellence for over 6+ years in Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2009, SR DreamSpace Realty began as a small
                construction company with a big vision: to transform how
                construction projects are delivered in Bangalore. What started
                as a two-person operation has grown into one of the city's most
                trusted construction and renovation companies.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, Rajesh Sharma, started this company after working
                for 10 years in the construction industry and seeing the gap
                between client expectations and project delivery. He envisioned
                a company that would prioritize quality, transparency, and
                customer satisfaction above all else.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we've completed over 500 projects ranging from
                residential homes to commercial complexes, each one built with
                the same commitment to excellence that defined our very first
                project.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/projects">View Our Projects</Link>
              </Button>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Construction site"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 text-center">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To deliver exceptional construction and renovation services that
                exceed client expectations while maintaining the highest
                standards of quality, safety, and environmental responsibility.
                We are committed to building lasting relationships and creating
                spaces that inspire.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <Eye className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be Bangalore's most trusted and innovative construction
                company, known for transforming architectural dreams into
                reality. We envision a future where every project we undertake
                sets new standards for quality, sustainability, and customer
                satisfaction.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals bring decades of combined expertise
              to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certifications & Licenses
            </h2>
            <p className="text-xl text-gray-600">
              We maintain all necessary certifications to ensure compliance and
              quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the SR DreamSpace difference. Let's discuss your next
            construction project.
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
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

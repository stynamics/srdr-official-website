
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Award, Clock, Phone } from "lucide-react";

const Home = () => {
  const services = [
    {
      title: "Construction",
      description: "New residential and commercial construction projects with modern techniques.",
      icon: "🏗️",
      slug: "construction"
    },
    {
      title: "Renovation",
      description: "Transform your existing space with our expert renovation services.",
      icon: "🔨",
      slug: "renovation"
    },
    {
      title: "Interior Fit-outs",
      description: "Complete interior solutions for offices, homes, and commercial spaces.",
      icon: "🏠",
      slug: "interior-fit-outs"
    },
    {
      title: "Project Management",
      description: "End-to-end project coordination ensuring timely and quality delivery.",
      icon: "📋",
      slug: "project-management"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "200+", label: "Happy Clients", icon: Users },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/60"></div>
        <div 
          className="relative min-h-screen flex items-center bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white text-shadow-lg">
                Building Your <span className="text-orange-400">Dreams</span> in Bangalore
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 text-shadow">
                Premier construction, renovation, and project management services. 
                Quality craftsmanship with 15+ years of excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4 shadow-xl">
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-900 shadow-xl">
                  <Link to="/projects">View Our Work</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-4">
                <a 
                  href="tel:+919876543210"
                  className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/30 transition-all text-white"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">+91 98765 43210</span>
                </a>
                <span className="text-gray-200">Call Now for Immediate Assistance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Construction Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From ground-up construction to interior renovations, we deliver comprehensive 
              solutions for all your building needs in Bangalore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  <Button asChild variant="outline" size="sm" className="group-hover:bg-blue-600 group-hover:text-white border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                    <Link to={`/services/${service.slug}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose SR DreamSpace?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">15+ Years of Excellence</h4>
                    <p className="text-gray-600 dark:text-gray-300">Proven track record in delivering quality construction projects across Bangalore.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Licensed & Insured</h4>
                    <p className="text-gray-600 dark:text-gray-300">Fully certified with comprehensive insurance coverage for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Quality Materials</h4>
                    <p className="text-gray-600 dark:text-gray-300">We use only premium materials from trusted suppliers for lasting results.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">On-Time Delivery</h4>
                    <p className="text-gray-600 dark:text-gray-300">Committed to meeting deadlines without compromising on quality.</p>
                  </div>
                </div>
              </div>
              <Button asChild className="mt-8 bg-blue-600 hover:bg-blue-700 text-white">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern building construction"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Successful Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Get a free consultation and quote from Bangalore's most trusted construction company. 
            Let's bring your vision to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-orange-600 hover:bg-gray-100">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-orange-600">
              <a href="tel:+919876543210">Call Now: +91 98765 43210</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

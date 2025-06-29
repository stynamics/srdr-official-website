
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Ruler, Users, ArrowLeft, Phone } from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams();

  const projects = {
    "luxury-villa-construction": {
      id: 1,
      title: "Luxury Villa Construction",
      category: "construction",
      location: "Whitefield, Bangalore",
      area: "3,500 sq ft",
      completedDate: "March 2024",
      budget: "₹85 Lakhs",
      client: "Mr. Rajesh Kumar",
      duration: "8 months",
      description: "A stunning 4-bedroom luxury villa featuring contemporary architecture, smart home automation, premium finishes, and sustainable construction practices. This project showcases our expertise in modern residential construction with attention to every detail.",
      features: [
        "Smart Home Automation System",
        "Premium Italian Marble Flooring",
        "Modular Kitchen with German Fittings",
        "Solar Panel Installation",
        "Rainwater Harvesting System",
        "Home Theater Room",
        "Swimming Pool with Deck",
        "Landscaped Garden"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1502005229762-cf1b2da60a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    "office-complex-renovation": {
      id: 2,
      title: "Office Complex Renovation",
      category: "renovation",
      location: "Electronic City, Bangalore",
      area: "15,000 sq ft",
      completedDate: "February 2024",
      budget: "₹45 Lakhs",
      client: "Tech Solutions Pvt Ltd",
      duration: "4 months",
      description: "Complete transformation of a 5-story office complex with modern amenities, eco-friendly features, and contemporary design. The renovation included structural upgrades, HVAC systems, and sustainable building practices.",
      features: [
        "Modern HVAC System",
        "LED Lighting Throughout",
        "Glass Partitions",
        "Ergonomic Workspaces",
        "Conference Rooms with AV Setup",
        "Cafeteria and Break Areas",
        "Parking Facility Upgrade",
        "Fire Safety Systems"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Button asChild variant="ghost" className="text-white hover:bg-white/20 mr-4">
              <Link to="/projects">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
            <Badge className="bg-white/20 text-white border-white/30">
              {project.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </Badge>
          </div>
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-200 max-w-3xl">{project.description}</p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Gallery */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-900 dark:text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Project Information</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                        <p className="font-medium text-gray-900 dark:text-white">{project.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Ruler className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Area</p>
                        <p className="font-medium text-gray-900 dark:text-white">{project.area}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                        <p className="font-medium text-gray-900 dark:text-white">{project.completedDate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Client</p>
                        <p className="font-medium text-gray-900 dark:text-white">{project.client}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="text-center mb-6">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Project Investment</p>
                      <p className="text-3xl font-bold text-orange-600">{project.budget}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                        <Link to="/contact">Start Your Project</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <a href="tel:+919876543210">
                          <Phone className="h-4 w-4 mr-2" />
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Dream Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us bring your vision to life with the same quality and dedication shown in this project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-orange-600">
              <Link to="/projects">View More Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
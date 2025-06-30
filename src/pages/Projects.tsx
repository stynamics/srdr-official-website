import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Ruler } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Construction",
      category: "construction",
      location: "Whitefield, Bangalore",
      area: "3,500 sq ft",
      completedDate: "March 2024",
      budget: "₹85 Lakhs",
      slug: "luxury-villa-construction",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Modern 4-bedroom luxury villa with contemporary design and smart home features.",
    },
    {
      id: 2,
      title: "Office Complex Renovation",
      category: "renovation",
      location: "Electronic City, Bangalore",
      area: "15,000 sq ft",
      completedDate: "February 2024",
      budget: "₹45 Lakhs",
      slug: "office-complex-renovation",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Complete renovation of a 5-story office complex with modern amenities and eco-friendly features.",
    },
    {
      id: 3,
      title: "Restaurant Interior Fit-out",
      category: "interior-fitouts",
      location: "Koramangala, Bangalore",
      area: "2,800 sq ft",
      completedDate: "January 2024",
      budget: "₹28 Lakhs",
      image:
        "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "High-end restaurant interior with custom furniture, lighting design, and acoustic treatment.",
    },
    {
      id: 4,
      title: "Residential Complex",
      category: "construction",
      location: "HSR Layout, Bangalore",
      area: "25,000 sq ft",
      completedDate: "December 2023",
      budget: "₹2.5 Crores",
      image:
        "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "12-unit residential complex with modern amenities and sustainable construction practices.",
    },
    {
      id: 5,
      title: "Heritage Home Restoration",
      category: "renovation",
      location: "Basavanagudi, Bangalore",
      area: "4,200 sq ft",
      completedDate: "November 2023",
      budget: "₹65 Lakhs",
      image:
        "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Careful restoration of a 100-year-old heritage home preserving original architecture.",
    },
    {
      id: 6,
      title: "Corporate Headquarters",
      category: "interior-fitouts",
      location: "UB City, Bangalore",
      area: "12,000 sq ft",
      completedDate: "October 2023",
      budget: "₹1.8 Crores",
      image:
        "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Premium corporate headquarters with state-of-the-art technology and luxury finishes.",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "construction", label: "Construction" },
    { id: "renovation", label: "Renovation" },
    { id: "interior-fitouts", label: "Interior Fit-outs" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">Our Projects</h1>
            <p className="text-xl text-gray-200">
              Explore our portfolio of successfully completed construction and
              renovation projects across Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                6+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                200+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Happy Clients
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                ₹10Cr+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Project Value
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Projects */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`${
                  activeFilter === filter.id
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                    {project.category
                      .replace("-", " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Ruler className="h-4 w-4" />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Completed: {project.completedDate}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-orange-600 dark:text-orange-400">
                      {project.budget}
                    </span>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white hover:border-blue-600"
                    >
                      <Link to={`/projects/${project.slug}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Join our satisfied clients and let us bring your construction vision
            to life with the same quality and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 bg-white text-orange-600 hover:bg-gray-100"
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-orange-600"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

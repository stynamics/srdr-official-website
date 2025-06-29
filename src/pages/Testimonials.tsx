import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      designation: "Homeowner",
      project: "Villa Construction",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      text: "SR DreamSpace exceeded our expectations in every way. They built our dream home exactly as we envisioned, with exceptional attention to detail and quality. The team was professional, punctual, and always kept us informed throughout the process.",
      videoThumbnail:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      designation: "Business Owner",
      project: "Office Renovation",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      text: "Our office renovation was completed on time and within budget. The transformation is incredible! The team understood our business needs and created a modern, functional workspace that our employees love. Highly recommended!",
      videoThumbnail:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Anita Menon",
      designation: "Restaurant Owner",
      project: "Interior Fit-out",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      text: "The interior fit-out for our restaurant was absolutely stunning. SR DreamSpace created an ambiance that perfectly matches our brand. The quality of work and attention to detail is remarkable. Our customers constantly compliment the beautiful interiors.",
      videoThumbnail:
        "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Vikram Reddy",
      designation: "Property Developer",
      project: "Residential Complex",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      text: "Working with SR DreamSpace on our residential complex was a great experience. Their project management was excellent, and they delivered a high-quality product that exceeded our buyers' expectations. We'll definitely work with them again.",
      videoThumbnail:
        "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      name: "Lakshmi Naik",
      designation: "Heritage Property Owner",
      project: "Heritage Restoration",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      text: "The restoration of our heritage home required special expertise, and SR DreamSpace delivered perfectly. They preserved the original character while adding modern amenities. The craftsmanship is exceptional and the project was handled with great care.",
      videoThumbnail:
        "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      name: "Amit Patel",
      designation: "Corporate Executive",
      project: "Home Renovation",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      text: "SR DreamSpace transformed our old apartment into a modern, beautiful home. The renovation was completed efficiently with minimal disruption to our daily routine. The quality of materials and workmanship is top-notch. Worth every penny!",
      videoThumbnail:
        "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction" },
    { number: "500+", label: "Happy Customers" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "95%", label: "Repeat Clients" },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-gray-200">
              Hear what our satisfied clients have to say about their experience
              with SR DreamSpace Realty.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from real clients who trusted us with their
              construction and renovation projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-blue-600 mb-4" />

                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.designation}
                      </p>
                      <p className="text-sm text-blue-600">
                        {testimonial.project}
                      </p>
                    </div>
                  </div>

                  {/* Video Testimonial */}
                  <div className="relative">
                    <img
                      src={testimonial.videoThumbnail}
                      alt="Video testimonial"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg hover:bg-opacity-60 transition-all">
                      <Play className="h-8 w-8 text-white fill-current" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Us on Google Reviews
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Check out our 4.9-star rating on Google Reviews with over 200
            verified customer reviews.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a
              href="https://www.google.com/search?q=SR+DreamSpace+Realty+reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Google Reviews
            </a>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the same quality and satisfaction that our clients rave
            about. Start your construction project today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4"
            >
              <Link to="/contact">Get Your Free Quote</Link>
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

export default Testimonials;

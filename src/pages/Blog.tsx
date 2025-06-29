import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: "construction-trends-2024",
      title: "Top Construction Trends in Bangalore for 2024",
      excerpt:
        "Discover the latest construction trends shaping Bangalore's skyline, from sustainable building materials to smart home technology.",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Trends",
      author: "Rajesh Sharma",
      publishDate: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      id: "renovation-budget-guide",
      title: "Complete Guide to Home Renovation Budgeting",
      excerpt:
        "Learn how to plan and budget for your home renovation project with expert tips on cost estimation and avoiding common pitfalls.",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Tips",
      author: "Priya Menon",
      publishDate: "March 10, 2024",
      readTime: "7 min read",
    },
    {
      id: "sustainable-construction",
      title: "Sustainable Construction Practices for Eco-Friendly Homes",
      excerpt:
        "Explore green building techniques and materials that reduce environmental impact while creating healthier living spaces.",
      image:
        "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Sustainability",
      author: "Amit Kumar",
      publishDate: "March 5, 2024",
      readTime: "6 min read",
    },
    {
      id: "choosing-right-contractor",
      title: "How to Choose the Right Construction Contractor in Bangalore",
      excerpt:
        "Essential checklist for selecting a reliable construction contractor, including license verification, portfolio review, and contract terms.",
      image:
        "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Guide",
      author: "Lakshmi Naik",
      publishDate: "February 28, 2024",
      readTime: "8 min read",
    },
    {
      id: "interior-design-trends",
      title: "Modern Interior Design Trends for 2024",
      excerpt:
        "From minimalist aesthetics to biophilic design, discover the interior trends that are transforming homes and offices in Bangalore.",
      image:
        "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Design",
      author: "Priya Menon",
      publishDate: "February 20, 2024",
      readTime: "5 min read",
    },
    {
      id: "construction-permits-bangalore",
      title: "Understanding Construction Permits and Approvals in Bangalore",
      excerpt:
        "Navigate the complex world of construction permits, BBMP approvals, and regulatory requirements for your building project.",
      image:
        "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Legal",
      author: "Rajesh Sharma",
      publishDate: "February 15, 2024",
      readTime: "10 min read",
    },
  ];

  const categories = [
    "All",
    "Trends",
    "Tips",
    "Sustainability",
    "Guide",
    "Design",
    "Legal",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair text-shadow-lg">
              Construction <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Expert insights, tips, and industry news to help you make informed
              decisions about your construction projects.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 border-orange-600 dark:border-orange-400 hover:bg-orange-600 hover:text-white hover:border-orange-600 dark:hover:bg-orange-600 dark:hover:text-white dark:hover:border-orange-600 transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 font-playfair">
            Featured Article
          </h2>
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-card">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  {blogPosts[0].category}
                </Badge>
                <h3 className="text-3xl font-bold text-foreground mb-4 font-playfair leading-tight">
                  {blogPosts[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{blogPosts[0].publishDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-fit bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to={`/blog/${blogPosts[0].id}`}>
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 font-playfair text-center">
            Latest Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card
                key={post.id}
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg bg-card hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    {post.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors duration-300 font-playfair leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{post.publishDate}</span>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 border-orange-600 dark:border-orange-400 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300"
                    >
                      <Link to={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-playfair">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter for the latest construction tips,
            industry news, and project updates.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 border-0"
            />
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-playfair">
            Need Construction Advice?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our experts are ready to help with your construction and renovation
            questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 bg-white text-orange-600 hover:bg-gray-100 shadow-lg"
            >
              <Link to="/contact">Get Expert Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              <a href="tel:+919876543210">Call: +91 98765 43210</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;


import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";

const BlogPost = () => {
  const { postId } = useParams();

  // Enhanced blog posts data
  const blogPosts: Record<string, any> = {
    "construction-trends-2024": {
      title: "Top Construction Trends in Bangalore for 2024",
      category: "Trends",
      author: "Rajesh Sharma",
      publishDate: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      content: `
        <h2 class="text-2xl font-bold text-foreground mb-4 font-playfair">The Future of Construction in Bangalore</h2>
        <p class="text-muted-foreground mb-6 leading-relaxed">As Bangalore continues to grow as India's Silicon Valley, the construction industry is evolving rapidly to meet the demands of modern urban living. Here are the top trends shaping construction in 2024:</p>
        
        <h3 class="text-xl font-semibold text-foreground mb-3 font-playfair">1. Sustainable Building Materials</h3>
        <p class="text-muted-foreground mb-6 leading-relaxed">Green building materials are becoming the norm rather than the exception. Builders are increasingly using recycled materials, bamboo, and other eco-friendly alternatives that reduce environmental impact while maintaining structural integrity.</p>
        
        <h3 class="text-xl font-semibold text-foreground mb-3 font-playfair">2. Smart Home Integration</h3>
        <p class="text-muted-foreground mb-6 leading-relaxed">Modern homes in Bangalore are being designed with smart technology from the ground up. This includes automated lighting, climate control, security systems, and energy management systems that can be controlled via smartphone apps.</p>
        
        <h3 class="text-xl font-semibold text-foreground mb-3 font-playfair">3. Modular Construction</h3>
        <p class="text-muted-foreground mb-6 leading-relaxed">Prefabricated and modular construction methods are gaining popularity due to their speed, cost-effectiveness, and quality control advantages. This trend is particularly relevant for large-scale residential and commercial projects.</p>
        
        <h3 class="text-xl font-semibold text-foreground mb-3 font-playfair">4. Energy-Efficient Designs</h3>
        <p class="text-muted-foreground mb-6 leading-relaxed">With rising energy costs and environmental consciousness, buildings are being designed with passive cooling, solar panels, rainwater harvesting, and other energy-efficient features.</p>
        
        <h3 class="text-xl font-semibold text-foreground mb-3 font-playfair">5. Mixed-Use Developments</h3>
        <p class="text-muted-foreground mb-6 leading-relaxed">The trend toward mixed-use developments that combine residential, commercial, and recreational spaces in a single project is growing, especially in prime locations like Whitefield and Electronic City.</p>
        
        <h2 class="text-2xl font-bold text-foreground mb-4 font-playfair">What This Means for Homeowners</h2>
        <p class="text-muted-foreground mb-6 leading-relaxed">These trends represent opportunities for homeowners to invest in properties that are not only modern and comfortable but also sustainable and future-proof. When planning your next construction or renovation project, consider incorporating these elements for long-term value.</p>
      `
    },
    "renovation-budget-guide": {
      title: "Complete Guide to Home Renovation Budgeting",
      category: "Tips",
      author: "Priya Menon",
      publishDate: "March 10, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      content: `
        <h2 class="text-2xl font-bold text-foreground mb-4 font-playfair">Planning Your Renovation Budget</h2>
        <p class="text-muted-foreground mb-6 leading-relaxed">Home renovation can be an exciting journey, but proper budgeting is crucial for success. Here's your complete guide to planning and managing renovation costs effectively.</p>
        
        <h3 class="text-xl font-semibold text-foreground mb-3 font-playfair">Setting Realistic Expectations</h3>
        <p class="text-muted-foreground mb-6 leading-relaxed">Start by researching average costs for your type of renovation. Kitchen renovations typically cost ₹2-6 lakhs, while bathroom renovations range from ₹1-3 lakhs. Always add a 20% contingency buffer for unexpected expenses.</p>
      `
    },
    "sustainable-construction": {
      title: "Sustainable Construction Practices for Eco-Friendly Homes",
      category: "Sustainability",
      author: "Amit Kumar",
      publishDate: "March 5, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      content: `
        <h2 class="text-2xl font-bold text-foreground mb-4 font-playfair">Building for the Future</h2>
        <p class="text-muted-foreground mb-6 leading-relaxed">Sustainable construction is no longer just a trend—it's a necessity. Learn how to build eco-friendly homes that benefit both the environment and your wallet.</p>
      `
    }
  };

  const post = blogPosts[postId || ""];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center min-h-screen flex items-center justify-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-playfair">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${post.image}")` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Button asChild variant="outline" className="mb-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          
          <div className="max-w-4xl animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair text-shadow-lg leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-200">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{post.publishDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl mb-12 hover:scale-105 transition-transform duration-700"
            />

            {/* Share Buttons */}
            <div className="flex items-center justify-between mb-12 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800">
              <span className="font-medium text-foreground">Share this article:</span>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                  <Share2 className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300">
                  <Share2 className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300">
                  <Share2 className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none animate-fade-in"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio */}
            <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-start space-x-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt={post.author}
                  className="w-20 h-20 rounded-full object-cover shadow-lg"
                />
                <div>
                  <h4 className="text-2xl font-bold text-foreground mb-3 font-playfair">{post.author}</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Founder and CEO of SR DreamSpace Realty with over 20 years of experience in construction and project management. 
                    Passionate about sustainable building practices and innovative construction techniques.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">LinkedIn</a>
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">Email</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-foreground mb-8 font-playfair">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 bg-card hover:scale-105">
                  <h4 className="font-semibold text-foreground mb-3 text-lg font-playfair">Complete Guide to Home Renovation Budgeting</h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">Learn how to plan and budget for your home renovation project...</p>
                  <Link to="/blog/renovation-budget-guide" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-300">
                    Read More →
                  </Link>
                </div>
                <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl hover:shadow-xl transition-all duration-300 bg-card hover:scale-105">
                  <h4 className="font-semibold text-foreground mb-3 text-lg font-playfair">Sustainable Construction Practices</h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">Explore green building techniques and materials that reduce environmental impact...</p>
                  <Link to="/blog/sustainable-construction" className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-300">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-playfair">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get expert advice and a free consultation for your construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-orange-600 hover:bg-gray-100 shadow-lg">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-orange-600 transition-all duration-300">
              <a href="tel:+919876543210">Call: +91 98765 43210</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
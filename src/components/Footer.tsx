import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/srdreamspace",
      color: "hover:text-blue-500"
    },
    {
      name: "Instagram", 
      icon: Instagram,
      url: "https://instagram.com/srdreamspace",
      color: "hover:text-pink-500"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/srdreamspace",
      color: "hover:text-blue-600"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@srdreamspace",
      color: "hover:text-red-500"
    },
    {
      name: "X (Twitter)",
      icon: () => (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: "https://x.com/srdreamspace",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "Threads",
      icon: () => (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017C1.5 8.417 2.35 5.563 3.995 3.512 5.845 1.205 8.598.024 12.179 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-.584-2.043-1.574-3.532-2.943-4.427C16.117 2.508 14.261 2.1 12.193 2.084c-2.042.018-3.85.297-5.373 1.054C5.337 4.098 4.26 5.954 4.24 8.009v.017c.02 2.056 1.098 3.913 2.581 4.873 1.522.757 3.33 1.036 5.373 1.054 2.068-.016 3.924-.424 5.352-1.622 1.369-.895 2.359-2.384 2.943-4.427l2.04.569c-.651 2.337-1.832 4.177-3.509 5.467C17.236 15.275 14.939 15.98 12.193 16h-.007z"/>
        </svg>
      ),
      url: "https://threads.net/@srdreamspace",
      color: "hover:text-black dark:hover:text-white"
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/af79efa8-5df0-43cf-b09a-41a8a9f05199.png" 
                alt="SR DreamSpace Realty Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="font-bold text-lg font-playfair">SR DreamSpace</h3>
                <p className="text-sm text-orange-400">Realty & Construction</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Building dreams with quality construction, renovation, and project management services in Bangalore.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg font-playfair">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Our Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Projects</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Testimonials</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg font-playfair">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/construction" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Construction</Link></li>
              <li><Link to="/services/renovation" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Renovation</Link></li>
              <li><Link to="/services/interior-fit-outs" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Interior Fit-outs</Link></li>
              <li><Link to="/services/project-management" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Project Management</Link></li>
              <li><Link to="/services/general-contracting" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">General Contracting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg font-playfair">Contact Info</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 leading-relaxed">
                  123 Brigade Road, MG Road,<br />
                  Bangalore, Karnataka 560025
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <a href="mailto:info@srdreamspace.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                  info@srdreamspace.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SR DreamSpace Realty. All rights reserved. | 
            <Link to="/privacy" className="hover:text-white ml-1 transition-colors duration-300">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-white ml-1 transition-colors duration-300">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210";
  const message = "Hi! I'm interested in your construction services. Please provide more information.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Ensure new tab opens from top of page
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      setTimeout(() => {
        if (window.scrollTo) {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }, 100);
    }
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 animate-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};

export default WhatsAppButton;


import { Instagram } from "lucide-react";

const SocialMediaFloat = () => {
  const handleLinkClick = () => {
    // Ensure new tab opens from top of page
    setTimeout(() => {
      if (window.scrollTo) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }, 100);
  };

  return (
    <div className="fixed right-6 bottom-24 z-40">
      <a
        href="https://instagram.com/srdreamspace"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleLinkClick}
        className="bg-gradient-to-tr from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl block"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="h-5 w-5" />
      </a>
    </div>
  );
};

export default SocialMediaFloat;
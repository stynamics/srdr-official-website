
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ChatBot from "./ChatBot";
import WhatsAppButton from "./WhatsAppButton";
import SocialMediaFloat from "./SocialMediaFloat";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatBot />
      <SocialMediaFloat />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;

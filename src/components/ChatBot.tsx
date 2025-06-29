import { useState } from "react";
import { MessageCircle, X, Bot, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm SR Dream Space AI Assistant. How can I help you with your construction needs today?",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thank you for your message! Our team will get back to you soon. For immediate assistance, please call us or use WhatsApp.",
        isBot: true,
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button with AI Branding */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-40 group"
        aria-label="Open AI Chat Assistant"
      >
        <div className="relative">
          <Bot className="h-6 w-6" />
          <div className="absolute -top-2 -right-2 bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
        </div>
      </button>

      {/* AI Assistant Badge */}
      {!isOpen && (
        <div className="fixed bottom-20 left-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1 rounded-full shadow-lg text-sm font-medium z-39 pointer-events-none">
          <span className="flex items-center gap-1">
            <Bot className="h-3 w-3" />
            AI Assistant
          </span>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 w-80 h-96 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50">
          {/* Header with AI Branding */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-blue-600 text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">SR Dream Space AI</h3>
                <p className="text-xs opacity-90">Construction Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-700 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="h-64 p-4">
            <div className="space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    {message.isBot && (
                      <div className="flex items-center gap-1 mb-1">
                        <Bot className="h-3 w-3 opacity-70" />
                        <span className="text-xs opacity-70">AI Assistant</span>
                      </div>
                    )}
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our construction services..."
                className="flex-1 text-sm"
              />
              <Button 
                onClick={handleSendMessage}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sun, Moon, MessageCircle, X } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateAIResponse = (userInput: string): string => {
    const responses = [
      "That's an interesting question! I'd be happy to help you with that.",
      "I understand what you're asking. Let me provide you with some insights.",
      "Thanks for reaching out! Here's what I think about your query.",
      "Great question! Based on my knowledge, I can suggest the following.",
      "I appreciate your question. Let me break this down for you.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'hidden' : 'block'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed bottom-6 right-6 z-50 w-96 h-[500px] rounded-xl shadow-2xl overflow-hidden ${
              isDarkMode 
                ? 'bg-gray-900 text-white border border-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200'
            }`}
          >
            {/* Header */}
            <div className={`p-4 border-b flex items-center justify-between ${
              isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Online
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                  }`}
                >
                  {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                  }`}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className={`flex-1 overflow-y-auto p-4 space-y-4 h-80 ${
              isDarkMode ? 'bg-gray-900' : 'bg-white'
            }`}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex max-w-xs lg:max-w-md ${
                    message.isUser ? 'flex-row-reverse' : 'flex-row'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.isUser 
                        ? 'bg-blue-600 text-white ml-2' 
                        : 'bg-gray-200 text-gray-600 mr-2'
                    }`}>
                      {message.isUser ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`rounded-lg px-4 py-2 ${
                      message.isUser
                        ? 'bg-blue-600 text-white'
                        : isDarkMode
                        ? 'bg-gray-800 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isUser 
                          ? 'text-blue-100' 
                          : isDarkMode 
                          ? 'text-gray-400' 
                          : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                      isDarkMode ? 'bg-gray-200 text-gray-600' : 'bg-gray-200 text-gray-600'
                    }`}>
                      <Bot size={16} />
                    </div>
                    <div className={`rounded-lg px-4 py-2 ${
                      isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                    }`}>
                      <div className="flex space-x-1">
                        <div className={`w-2 h-2 rounded-full animate-bounce ${
                          isDarkMode ? 'bg-gray-400' : 'bg-gray-500'
                        }`} style={{ animationDelay: '0ms' }}></div>
                        <div className={`w-2 h-2 rounded-full animate-bounce ${
                          isDarkMode ? 'bg-gray-400' : 'bg-gray-500'
                        }`} style={{ animationDelay: '150ms' }}></div>
                        <div className={`w-2 h-2 rounded-full animate-bounce ${
                          isDarkMode ? 'bg-gray-400' : 'bg-gray-500'
                        }`} style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className={`p-4 border-t ${
              isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-end space-x-2">
                <div className="flex-1">
                  <textarea
                    ref={textareaRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message..."
                    rows={1}
                    className={`w-full resize-none rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode 
                        ? 'bg-gray-700 text-white placeholder-gray-400' 
                        : 'bg-white text-gray-900 placeholder-gray-500 border border-gray-300'
                    }`}
                    style={{ maxHeight: '100px', minHeight: '40px' }}
                  />
                </div>
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;

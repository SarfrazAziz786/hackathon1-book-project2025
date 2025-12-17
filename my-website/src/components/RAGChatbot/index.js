import React, { useState, useRef, useEffect } from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';

// Basic RAG Chatbot component
const RAGChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Get current document context
  const currentDoc = useDoc();
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    
    // Add user message
    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      // In a real implementation, this would call an API that:
      // 1. Embeds the user query
      // 2. Retrieves relevant content from book documentation
      // 3. Generates a response using a language model
      // 4. Returns the response with citations to the book content
      
      // For now, we'll simulate a response with a placeholder
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Placeholder response - in a real implementation this would come from the RAG system
      const botMessage = {
        id: Date.now() + 1,
        text: `I received your question: "${inputValue}". In a complete implementation, I would search the book content and provide you with a relevant answer based on the modules and chapters.`,
        sender: 'bot',
        citations: [] // Would contain references to relevant book sections
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: 'Sorry, I encountered an error processing your request. Please try again.',
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="chatbot-container">
      <div className="chatbot-messages" style={{ height: '400px', overflowY: 'auto', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '1rem' }}>
        {messages.length === 0 ? (
          <div className="chatbot-intro" style={{ padding: '1rem', textAlign: 'center', color: '#666' }}>
            <p>Hello! I'm the book's RAG Chatbot. I can answer questions about the content in this book on Physical AI & Humanoid Robotics.</p>
            <p>Ask me anything about ROS 2, simulation, AI integration, or other topics covered in the modules.</p>
          </div>
        ) : (
          messages.map((message) => (
            <div 
              key={message.id} 
              className={`chatbot-message ${message.sender}-message`}
              style={{ 
                textAlign: message.sender === 'user' ? 'right' : 'left', 
                marginBottom: '1rem' 
              }}
            >
              <div 
                style={{ 
                  display: 'inline-block', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '18px', 
                  backgroundColor: message.sender === 'user' ? '#1a73e8' : '#f0f0f0',
                  color: message.sender === 'user' ? 'white' : 'black',
                  maxWidth: '80%'
                }}
              >
                {message.text}
                {message.citations && message.citations.length > 0 && (
                  <div className="citations" style={{ fontSize: '0.8em', marginTop: '0.5rem' }}>
                    <strong>Citations:</strong>
                    <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                      {message.citations.map((citation, idx) => (
                        <li key={idx}>{citation}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="chatbot-input-form" style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask a question about the book content..."
          style={{ 
            flex: 1, 
            padding: '0.5rem', 
            border: '1px solid #ccc', 
            borderRadius: '18px', 
            fontSize: '1rem' 
          }}
          disabled={isLoading}
        />
        <button 
          type="submit" 
          disabled={isLoading || !inputValue.trim()}
          style={{ 
            padding: '0.5rem 1rem', 
            backgroundColor: isLoading ? '#ccc' : '#1a73e8', 
            color: 'white', 
            border: 'none', 
            borderRadius: '18px', 
            cursor: isLoading || !inputValue.trim() ? 'not-allowed' : 'pointer' 
          }}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
      
      <div className="chatbot-footer" style={{ fontSize: '0.8em', marginTop: '0.5rem', color: '#666', textAlign: 'center' }}>
        Responses are generated based on the book content. Information is grounded in the modules and chapters.
      </div>
    </div>
  );
};

export default RAGChatbot;
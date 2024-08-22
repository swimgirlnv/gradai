/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/ChatWithAssistant.tsx
import React, { useState } from 'react';
import { postMessageToAssistant } from '../services/api';

const ChatWithAssistant: React.FC = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSendMessage = async () => {
    try {
      const data = await postMessageToAssistant(message);
      setResponse(data.reply);
    } catch (error) {
      setResponse('Failed to get a response from the assistant.');
    }
  };

  return (
    <div>
      <h1>Chat with the Assistant</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
      />
      <button onClick={handleSendMessage}>Send</button>
      <div>
        <h2>Assistant's Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatWithAssistant;
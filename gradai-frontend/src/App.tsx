// src/App.tsx
import React, { useState } from 'react';
import BulletinBoard from './components/BulletinBoard';
import ChatWithAssistant from './components/ChatWithAssistant';
import Login from './components/Login';
import { isAuthenticated } from './services/auth';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>
        <ChatWithAssistant />
      </div>
      <div>
        <h1>Grad A Bulletin Board</h1>
        <BulletinBoard />
      </div>
    </div>
  );
};

export default App;
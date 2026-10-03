import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const STORAGE_KEY = 'nesta_auth_user';
const USERS_DB_KEY = 'nesta_registered_users';

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    try {
      const saved = localStorage.getItem(USERS_DB_KEY);
      return saved ? JSON.parse(saved) : [
        {
          id: 'demo-user-1',
          name: 'Alex Rivera',
          email: 'demo@nesta.dev',
          password: 'password123',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
          plan: 'Pro Architect',
          createdAt: new Date().toISOString(),
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(USERS_DB_KEY, JSON.stringify(registeredUsers));
    } catch (err) {
      console.error(err);
    }
  }, [registeredUsers]);

  const login = async (email, password) => {
    const user = registeredUsers.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!user) {
      throw new Error('Invalid email or password. Please check your credentials or register.');
    }
    setCurrentUser(user);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  };

  const register = async (name, email, password) => {
    const exists = registeredUsers.some(
      u => u.email.toLowerCase() === email.toLowerCase()
    );
    if (exists) {
      throw new Error('An account with this email already exists. Please log in.');
    }

    const newUser = {
      id: 'user-' + Date.now(),
      name,
      email,
      password,
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name)}`,
      plan: 'Starter Creator',
      createdAt: new Date().toISOString(),
    };

    const updated = [...registeredUsers, newUser];
    setRegisteredUsers(updated);
    setCurrentUser(newUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    return newUser;
  };

  const loginDemo = () => {
    const demoUser = registeredUsers[0] || {
      id: 'demo-user-1',
      name: 'Alex Rivera',
      email: 'demo@nesta.dev',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      plan: 'Pro Architect',
      createdAt: new Date().toISOString(),
    };
    setCurrentUser(demoUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoUser));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, loginDemo, logout, isAuthenticated: !!currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

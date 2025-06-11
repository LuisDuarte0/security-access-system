import React, { createContext, useContext, useState } from 'react';

// Array de usuários para simulação
const usuarios = [
  { email: "admin@secure.com", senha: "admin123", role: "admin", nome: "Administrador" },
  { email: "user@secure.com", senha: "user123", role: "user", nome: "Usuário Padrão" },
  { email: "guest@secure.com", senha: "guest123", role: "guest", nome: "Visitante" },
];

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, senha) => {
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    
    if (usuario) {
      setUser(usuario);
      setIsAuthenticated(true);
      return { success: true, user: usuario };
    } else {
      return { success: false, message: 'Credenciais inválidas' };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const hasPermission = (requiredRole) => {
    if (!user) return false;
    
    const roleHierarchy = {
      'guest': 1,
      'user': 2,
      'admin': 3
    };
    
    return roleHierarchy[user.role] >= roleHierarchy[requiredRole];
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    hasPermission
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};


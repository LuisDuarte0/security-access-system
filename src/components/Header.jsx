import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LogOut, User, Crown, Eye } from 'lucide-react';

const Header = () => {
  const { user, logout } = useAuth();

  const getRoleIcon = (role) => {
    switch (role) {
      case 'admin':
        return <Crown className="h-4 w-4" />;
      case 'user':
        return <User className="h-4 w-4" />;
      case 'guest':
        return <Eye className="h-4 w-4" />;
      default:
        return <User className="h-4 w-4" />;
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'user':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'guest':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRoleLabel = (role) => {
    switch (role) {
      case 'admin':
        return 'Administrador';
      case 'user':
        return 'Usuário';
      case 'guest':
        return 'Visitante';
      default:
        return 'Desconhecido';
    }
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo e Título */}
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg shadow ring-2 ring-blue-800">
              <img src="/logo-cadeado.png" alt="Logo Cadeado" className="h-10 w-10" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Sistema de Controle de Acesso</h1>
              <p className="text-xs text-gray-500">Controle de Acesso RBAC (Role-Based Access Control)</p>
            </div>
          </div>

          {/* Informações do Usuário */}
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">{user?.nome}</div>
              <div className="text-xs text-gray-500">{user?.email}</div>
            </div>

            <Badge className={`flex items-center gap-1 ${getRoleColor(user?.role)}`}>
              {getRoleIcon(user?.role)}
              {getRoleLabel(user?.role)}
            </Badge>

            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

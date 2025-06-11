import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Lock, User, AlertCircle } from 'lucide-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simular delay de autenticação
    setTimeout(() => {
      const result = login(email, senha);
      
      if (!result.success) {
        setError(result.message);
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const credenciaisExemplo = [
    { role: 'Admin', email: 'admin@secure.com', senha: 'admin123' },
    { role: 'User', email: 'user@secure.com', senha: 'user123' },
    { role: 'Guest', email: 'guest@secure.com', senha: 'guest123' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="bg-white p-2 rounded-lg shadow ring-2 ring-blue-800">
              <img src="/logo-cadeado.png" alt="Logo Cadeado" className="h-16 w-16" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Sistema Seguro</h1>
          <p className="text-gray-600">Controle de Acesso Baseado em Função</p>
          <p className="text-xs text-gray-600">Feito por Luis Duarte</p>
        </div>

        {/* Login Form */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Login
            </CardTitle>
            <CardDescription>
              Entre com suas credenciais para acessar o sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="senha">Senha</Label>
                <Input
                  id="senha"
                  type="password"
                  placeholder="••••••••"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? 'Autenticando...' : 'Entrar'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Credenciais de Exemplo */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm">
              <User className="h-4 w-4" />
              Credenciais de Demonstração
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {credenciaisExemplo.map((cred, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg">
                  <div className="font-medium text-sm text-gray-900">{cred.role}</div>
                  <div className="text-xs text-gray-600">
                    <div>Email: {cred.email}</div>
                    <div>Senha: {cred.senha}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>Projeto desenvolvido com React.js (estrutura SPA), Tailwind CSS (estilização), shadcn/ui (componentes) & Vite (build otimizado).</p>
          <p className="font-medium">Princípios de Segurança: Controle de Acesso Baseado em Função (RBAC), Zero Trust & Menor Privilégio</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;



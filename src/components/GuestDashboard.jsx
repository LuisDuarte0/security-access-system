import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Eye, 
  Lock, 
  Shield, 
  AlertTriangle, 
  Info,
  Clock,
  UserCheck,
  Mail
} from 'lucide-react';

const GuestDashboard = () => {
  const accessLimitations = [
    {
      icon: <Lock className="h-5 w-5 text-red-500" />,
      title: "Relatórios Confidenciais",
      description: "Acesso negado - Requer permissão de usuário ou superior",
      status: "blocked"
    },
    {
      icon: <Shield className="h-5 w-5 text-red-500" />,
      title: "Configurações do Sistema",
      description: "Acesso negado - Requer permissão de administrador",
      status: "blocked"
    },
    {
      icon: <UserCheck className="h-5 w-5 text-red-500" />,
      title: "Gerenciamento de Usuários",
      description: "Acesso negado - Requer permissão de administrador",
      status: "blocked"
    },
    {
      icon: <Info className="h-5 w-5 text-green-500" />,
      title: "Informações Públicas",
      description: "Acesso permitido - Conteúdo público disponível",
      status: "allowed"
    }
  ];

  const publicInfo = [
    {
      title: "Política de Segurança",
      description: "Diretrizes gerais de segurança da informação",
      type: "Documento Público"
    },
    {
      title: "Contatos de Suporte",
      description: "Informações de contato para suporte técnico",
      type: "Informação Geral"
    },
    {
      title: "FAQ - Perguntas Frequentes",
      description: "Respostas para dúvidas comuns do sistema",
      type: "Documentação"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Acesso de Visitante</h1>
          <p className="text-gray-600">Acesso limitado - Princípio do Menor Privilégio aplicado</p>
        </div>
        <Badge className="bg-gray-100 text-gray-800 border-gray-200 flex items-center gap-1">
          <Eye className="h-4 w-4" />
          Visitante
        </Badge>
      </div>

      {/* Aviso de Acesso Restrito */}
      <Card className="border-orange-200 bg-orange-50">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-8 w-8 text-orange-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-orange-900 mb-2">
                Acesso Restrito
              </h3>
              <p className="text-orange-800 mb-4">
                Você está logado como <strong>Visitante</strong>. Este nível de acesso possui 
                permissões limitadas baseadas no <strong>Princípio do Menor Privilégio</strong>, 
                um conceito fundamental da CompTIA Security+.
              </p>
              <div className="bg-orange-100 p-4 rounded-lg">
                <h4 className="font-medium text-orange-900 mb-2">O que é o Princípio do Menor Privilégio?</h4>
                <p className="text-sm text-orange-800">
                  Este princípio garante que usuários e sistemas tenham apenas as permissões 
                  mínimas necessárias para executar suas funções. Isso reduz a superfície de 
                  ataque e limita o impacto de possíveis comprometimentos de segurança.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Status de Permissões */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Status de Permissões
          </CardTitle>
          <CardDescription>
            Visualização das permissões disponíveis para seu nível de acesso
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {accessLimitations.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
                <Badge 
                  variant={item.status === 'allowed' ? 'default' : 'destructive'}
                  className="flex-shrink-0"
                >
                  {item.status === 'allowed' ? 'Permitido' : 'Bloqueado'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Conteúdo Público Disponível */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Conteúdo Público Disponível
          </CardTitle>
          <CardDescription>
            Recursos e informações que você pode acessar com permissão de visitante
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {publicInfo.map((info, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{info.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{info.description}</p>
                  <Badge variant="outline" className="mt-2">
                    {info.type}
                  </Badge>
                </div>
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4 mr-2" />
                  Visualizar
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Solicitação de Acesso */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Precisa de Mais Acesso?
              </h3>
              <p className="text-blue-800 mb-4">
                Se você precisa de permissões adicionais para executar suas tarefas, 
                entre em contato com o administrador do sistema para solicitar uma 
                elevação de privilégios.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                  <Mail className="h-4 w-4 mr-2" />
                  Solicitar Acesso
                </Button>
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                  <Info className="h-4 w-4 mr-2" />
                  Ver Política de Acesso
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conceitos de Segurança */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Conceitos de Segurança Aplicados
          </CardTitle>
          <CardDescription>
            Princípios da CompTIA Security+ que tentei demonstrar nesta interface
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Zero Trust</h4>
              <p className="text-sm text-gray-600">
                "Nunca confie, sempre verifique" - Cada acesso é validado independentemente 
                do local ou credencial do usuário.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Menor Privilégio</h4>
              <p className="text-sm text-gray-600">
                Usuários recebem apenas as permissões mínimas necessárias para suas 
                funções específicas.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Controle de Acesso Baseado em Função (RBAC)</h4>
              <p className="text-sm text-gray-600">
                Permissões são atribuídas com base na função do usuário na organização.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Segregação de Funções</h4>
              <p className="text-sm text-gray-600">
                Diferentes níveis de acesso previnem que uma única pessoa tenha 
                controle total sobre processos críticos.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GuestDashboard;


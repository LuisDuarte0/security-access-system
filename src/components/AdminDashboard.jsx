import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Users, 
  FileText, 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Eye,
  Settings,
  Database,
  Lock,
  Unlock,
  UserCheck,
  UserX
} from 'lucide-react';

const AdminDashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  // Dados simulados para demonstração
  const securityMetrics = {
    totalUsers: 1247,
    activeUsers: 892,
    failedLogins: 23,
    securityAlerts: 5
  };

  const recentLogs = [
    { id: 1, timestamp: '2024-06-10 14:30:25', user: 'user@secure.com', action: 'Login bem-sucedido', status: 'success' },
    { id: 2, timestamp: '2024-06-10 14:28:12', user: 'guest@secure.com', action: 'Tentativa de acesso negada', status: 'warning' },
    { id: 3, timestamp: '2024-06-10 14:25:45', user: 'admin@secure.com', action: 'Permissões alteradas', status: 'info' },
    { id: 4, timestamp: '2024-06-10 14:20:33', user: 'unknown@test.com', action: 'Login falhado - credenciais inválidas', status: 'error' },
    { id: 5, timestamp: '2024-06-10 14:15:18', user: 'user@secure.com', action: 'Logout', status: 'success' }
  ];

  const users = [
    { id: 1, email: 'admin@secure.com', role: 'admin', status: 'active', lastLogin: '2024-06-10 14:25:45' },
    { id: 2, email: 'user@secure.com', role: 'user', status: 'active', lastLogin: '2024-06-10 14:30:25' },
    { id: 3, email: 'guest@secure.com', role: 'guest', status: 'active', lastLogin: '2024-06-10 14:28:12' },
    { id: 4, email: 'inactive@secure.com', role: 'user', status: 'inactive', lastLogin: '2024-06-08 09:15:30' }
  ];

  const confidentialReports = [
    { id: 1, title: 'Relatório de Vulnerabilidades Q2 2024', type: 'Segurança', classification: 'CONFIDENCIAL' },
    { id: 2, title: 'Análise de Penetração - Sistemas Críticos', type: 'Auditoria', classification: 'RESTRITO' },
    { id: 3, title: 'Logs de Acesso Administrativo', type: 'Compliance', classification: 'CONFIDENCIAL' },
    { id: 4, title: 'Plano de Resposta a Incidentes', type: 'Segurança', classification: 'SECRETO' }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'error':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Activity className="h-4 w-4 text-blue-500" />;
    }
  };

  const getClassificationColor = (classification) => {
    switch (classification) {
      case 'SECRETO':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'CONFIDENCIAL':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'RESTRITO':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Painel Administrativo</h1>
          <p className="text-gray-600">Acesso completo ao sistema - Nível Administrador</p>
        </div>
        <Badge className="bg-red-100 text-red-800 border-red-200 flex items-center gap-1">
          <Shield className="h-4 w-4" />
          Acesso Total
        </Badge>
      </div>

      {/* Métricas de Segurança */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total de Usuários</p>
                <p className="text-3xl font-bold text-gray-900">{securityMetrics.totalUsers}</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Usuários Ativos</p>
                <p className="text-3xl font-bold text-green-600">{securityMetrics.activeUsers}</p>
              </div>
              <UserCheck className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Logins Falhados</p>
                <p className="text-3xl font-bold text-red-600">{securityMetrics.failedLogins}</p>
              </div>
              <UserX className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Alertas de Segurança</p>
                <p className="text-3xl font-bold text-orange-600">{securityMetrics.securityAlerts}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs para diferentes seções */}
      <Tabs defaultValue="reports" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="reports" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Relatórios Confidenciais
          </TabsTrigger>
          <TabsTrigger value="permissions" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Gerenciar Permissões
          </TabsTrigger>
          <TabsTrigger value="logs" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Logs do Sistema
          </TabsTrigger>
        </TabsList>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Relatórios Confidenciais
              </CardTitle>
              <CardDescription>
                Documentos com acesso restrito apenas para administradores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {confidentialReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{report.title}</h4>
                      <p className="text-sm text-gray-600">{report.type}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className={getClassificationColor(report.classification)}>
                        {report.classification}
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        Visualizar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="permissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Gerenciamento de Permissões
              </CardTitle>
              <CardDescription>
                Controle de acesso e permissões dos usuários
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{user.email}</h4>
                      <p className="text-sm text-gray-600">Último login: {user.lastLogin}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                        {user.status === 'active' ? 'Ativo' : 'Inativo'}
                      </Badge>
                      <Badge variant="outline">
                        {user.role}
                      </Badge>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Unlock className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Lock className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Logs de Segurança
              </CardTitle>
              <CardDescription>
                Registro detalhado de todas as atividades do sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentLogs.map((log) => (
                  <div key={log.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    {getStatusIcon(log.status)}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gray-900">{log.action}</h4>
                        <span className="text-sm text-gray-500">{log.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600">Usuário: {log.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;


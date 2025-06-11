import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  User, 
  Ticket, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Plus,
  MessageSquare,
  BarChart3,
  Calendar,
  FileText,
  TrendingUp,
  Activity
} from 'lucide-react';

const UserDashboard = () => {
  const [newTicket, setNewTicket] = useState({ title: '', description: '', priority: 'medium' });

  // Dados simulados para demonstração
  const userStats = {
    ticketsAbertos: 3,
    ticketsResolvidos: 12,
    tempoMedioResposta: '2.5h',
    satisfacao: '4.8/5'
  };

  const myTickets = [
    { 
      id: 'TK-001', 
      title: 'Problema de acesso ao sistema', 
      status: 'Em andamento', 
      priority: 'Alta', 
      created: '2024-06-08',
      lastUpdate: '2024-06-10 10:30'
    },
    { 
      id: 'TK-002', 
      title: 'Solicitação de nova funcionalidade', 
      status: 'Aguardando', 
      priority: 'Média', 
      created: '2024-06-07',
      lastUpdate: '2024-06-09 14:15'
    },
    { 
      id: 'TK-003', 
      title: 'Erro na geração de relatórios', 
      status: 'Resolvido', 
      priority: 'Baixa', 
      created: '2024-06-05',
      lastUpdate: '2024-06-06 16:45'
    }
  ];

  const recentActivity = [
    { id: 1, action: 'Ticket TK-001 atualizado', time: '2 horas atrás', type: 'update' },
    { id: 2, action: 'Novo ticket TK-004 criado', time: '1 dia atrás', type: 'create' },
    { id: 3, action: 'Ticket TK-002 comentado', time: '2 dias atrás', type: 'comment' },
    { id: 4, action: 'Ticket TK-003 resolvido', time: '3 dias atrás', type: 'resolve' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Em andamento':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Aguardando':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Resolvido':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Alta':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Média':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Baixa':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleCreateTicket = (e) => {
    e.preventDefault();
    // Simular criação de ticket
    alert('Ticket criado com sucesso!');
    setNewTicket({ title: '', description: '', priority: 'medium' });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard do Usuário</h1>
          <p className="text-gray-600">Acesso padrão - Abertura de chamados e acompanhamento</p>
        </div>
        <Badge className="bg-blue-100 text-blue-800 border-blue-200 flex items-center gap-1">
          <User className="h-4 w-4" />
          Usuário Padrão
        </Badge>
      </div>

      {/* Estatísticas do Usuário */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tickets Abertos</p>
                <p className="text-3xl font-bold text-blue-600">{userStats.ticketsAbertos}</p>
              </div>
              <Ticket className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tickets Resolvidos</p>
                <p className="text-3xl font-bold text-green-600">{userStats.ticketsResolvidos}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Tempo Médio</p>
                <p className="text-3xl font-bold text-orange-600">{userStats.tempoMedioResposta}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Satisfação</p>
                <p className="text-3xl font-bold text-purple-600">{userStats.satisfacao}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs para diferentes seções */}
      <Tabs defaultValue="tickets" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tickets" className="flex items-center gap-2">
            <Ticket className="h-4 w-4" />
            Meus Tickets
          </TabsTrigger>
          <TabsTrigger value="create" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Novo Ticket
          </TabsTrigger>
          <TabsTrigger value="activity" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Atividade Recente
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tickets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Meus Chamados
              </CardTitle>
              <CardDescription>
                Acompanhe o status dos seus tickets de suporte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myTickets.map((ticket) => (
                  <div key={ticket.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-medium text-gray-900">{ticket.title}</h4>
                          <Badge className={getStatusColor(ticket.status)}>
                            {ticket.status}
                          </Badge>
                          <Badge className={getPriorityColor(ticket.priority)}>
                            {ticket.priority}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>ID: {ticket.id}</p>
                          <p>Criado em: {ticket.created}</p>
                          <p>Última atualização: {ticket.lastUpdate}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Criar Novo Ticket
              </CardTitle>
              <CardDescription>
                Abra um novo chamado para suporte técnico
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreateTicket} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Título do Problema</Label>
                  <Input
                    id="title"
                    placeholder="Descreva brevemente o problema"
                    value={newTicket.title}
                    onChange={(e) => setNewTicket({...newTicket, title: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Descrição Detalhada</Label>
                  <Textarea
                    id="description"
                    placeholder="Forneça mais detalhes sobre o problema..."
                    rows={4}
                    value={newTicket.description}
                    onChange={(e) => setNewTicket({...newTicket, description: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">Prioridade</Label>
                  <select 
                    id="priority"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={newTicket.priority}
                    onChange={(e) => setNewTicket({...newTicket, priority: e.target.value})}
                  >
                    <option value="low">Baixa</option>
                    <option value="medium">Média</option>
                    <option value="high">Alta</option>
                  </select>
                </div>

                <Button type="submit" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Criar Ticket
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Atividade Recente
              </CardTitle>
              <CardDescription>
                Histórico das suas últimas atividades no sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4 p-3 border rounded-lg">
                    <div className="flex-shrink-0">
                      {activity.type === 'create' && <Plus className="h-5 w-5 text-blue-500" />}
                      {activity.type === 'update' && <AlertCircle className="h-5 w-5 text-orange-500" />}
                      {activity.type === 'comment' && <MessageSquare className="h-5 w-5 text-purple-500" />}
                      {activity.type === 'resolve' && <CheckCircle className="h-5 w-5 text-green-500" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.time}</p>
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

export default UserDashboard;


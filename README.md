# 🔐 Sistema de Controle de Acesso - Security+

Projeto feito com foco em aplicar, na prática, os principais conceitos de segurança da informação estudados para a certificação CompTIA Security+. Tudo foi desenvolvido com React.js e pensado para mostrar de forma clara como funcionam os princípios de Zero Trust, Privilégio Mínimo e Controle de Acesso Baseado em Função (RBAC).

## Link da aplicação no Vercel: https://security-access-system.vercel.app

## 🔐 Conceitos de Segurança Demonstrados

### 1. Princípio do Menor Privilégio
- Usuários recebem apenas as permissões mínimas necessárias para suas funções
- Cada role tem acesso limitado a recursos específicos
- Reduz a superfície de ataque e limita o impacto de comprometimentos

### 2. Zero Trust
- "Nunca confie, sempre verifique"
- Cada acesso é validado independentemente do local ou credencial
- Verificação contínua de permissões

### 3. Controle de Acesso Baseado em Função (RBAC)
- Permissões atribuídas com base na função do usuário
- Três níveis hierárquicos: Guest < User < Admin
- Segregação clara de responsabilidades

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou pnpm

### Instalação e Execução
```bash
# Navegar para o diretório do projeto
cd security-access-system

# Instalar dependências (se necessário)
npm install

# Executar em modo de desenvolvimento
npm run dev

# A aplicação estará disponível em http://localhost:5173
```

## 👥 Credenciais de Demonstração

### Administrador (Acesso Total)
- **Email:** admin@secure.com
- **Senha:** admin123
- **Permissões:** 
  - Relatórios confidenciais
  - Gerenciamento de permissões
  - Logs de segurança
  - Métricas do sistema

### Usuário Padrão (Acesso Limitado)
- **Email:** user@secure.com
- **Senha:** user123
- **Permissões:**
  - Dashboard pessoal
  - Abertura de chamados
  - Acompanhamento de tickets
  - Atividade recente

### Visitante (Acesso Restrito)
- **Email:** guest@secure.com
- **Senha:** guest123
- **Permissões:**
  - Apenas informações públicas
  - Visualização de restrições
  - Solicitação de acesso

## 🎯 Funcionalidades por FUNÇÃO

### 🔴 Administrador
- **Painel Administrativo Completo**
  - Métricas de segurança em tempo real
  - Total de usuários, logins falhados, alertas
  - Relatórios confidenciais com classificação de segurança
  - Gerenciamento de permissões de usuários
  - Logs detalhados do sistema
  - Controle total sobre configurações

### 🔵 Usuário Padrão
- **Dashboard Funcional**
  - Estatísticas pessoais de tickets
  - Sistema de abertura de chamados
  - Acompanhamento de status
  - Histórico de atividades
  - Interface intuitiva para tarefas do dia a dia

### ⚪ Visitante
- **Interface Educativa**
  - Explicação clara das restrições de acesso
  - Demonstração visual do Princípio do Menor Privilégio
  - Informações sobre conceitos de segurança
  - Acesso apenas a conteúdo público
  - Opção para solicitar elevação de privilégios

## 🛡️ Recursos de Segurança

### Autenticação
- Sistema de login com validação de credenciais
- Feedback visual para tentativas de login
- Simulação de delay de autenticação

### Controle de Acesso
- Verificação de permissões em tempo real
- Redirecionamento baseado em role
- Proteção de rotas sensíveis

### Interface Responsiva
- Design adaptável para desktop e mobile
- Componentes acessíveis
- Experiência consistente em diferentes dispositivos

## 🎨 Tecnologias Utilizadas

- **React.js** - Framework frontend
- **Tailwind CSS** - Estilização e design responsivo
- **shadcn/ui** - Componentes de interface
- **Lucide React** - Ícones modernos
- **Vite** - Build tool e servidor de desenvolvimento


## 🔍 Eu fiz esse trabalho pensando em USO EDUCACIONAL

### Para algum Professor ou Instrutor:
- Demonstração prática de conceitos teóricos
- Comparação visual entre diferentes níveis de acesso
- Exemplos concretos de implementação de segurança

### Para Estudantes
- Experiência hands-on com RBAC
- Compreensão visual do Princípio do Menor Privilégio

### Para Profissionais
- Referência de implementação de controle de acesso
- Exemplo de boas práticas de segurança
- Template para sistemas corporativos

## 📝 Estrutura do Projeto

```
security-access-system/
├── src/
│   ├── components/
│   │   ├── AdminDashboard.jsx     # Interface do administrador
│   │   ├── UserDashboard.jsx      # Interface do usuário
│   │   ├── GuestDashboard.jsx     # Interface do visitante
│   │   ├── LoginForm.jsx          # Formulário de login
│   │   └── Header.jsx             # Cabeçalho da aplicação
│   ├── contexts/
│   │   └── AuthContext.jsx        # Contexto de autenticação
│   ├── App.jsx                    # Componente principal
│   └── main.jsx                   # Ponto de entrada
├── public/                        # Arquivos estáticos
└── README.md                      # Este arquivo
```

## 🎓 Conceitos CompTIA Security+ Abordados

- **Access Control Models** - RBAC implementation
- **Least Privilege Principle** - Minimal necessary permissions
- **Zero Trust Architecture** - Continuous verification
- **Authentication & Authorization** - User validation and permissions
- **Security Awareness** - Educational interface design

---

**Desenvolvido por Luis Duarte para demonstração educacional dos conceitos fundamentais de segurança da informação**


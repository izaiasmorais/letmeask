# Letmeask

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8843209d-04b6-4d4e-a4f3-971397e09aaa" />

## Introdução

O Letmeask é uma plataforma para criar e participar de salas de perguntas e respostas em tempo real, ideal para eventos, workshops e aulas. Permite que usuários criem salas, enviem perguntas e interajam de forma colaborativa, promovendo o compartilhamento de conhecimento.

<img src="https://img.shields.io/static/v1?label=STATUS&message=DEVELOPING&color=8E51FF&style=for-the-badge"/> <img src="https://img.shields.io/static/v1?label=REACT&message=19.1.0&color=8E51FF&style=for-the-badge"/>

## Tecnologias

- Linguagem: [TypeScript](https://www.typescriptlang.org/)
- Biblioteca: [ReactJS](https://react.dev/)
- Bundler: [Vite](https://vitejs.dev/)
- Estilização: [TailwindCSS](https://tailwindcss.com/)
- Componentes: [Radix UI](https://www.radix-ui.com/), [Shadcn-ui](https://ui.shadcn.com/)
- Gerenciamento de formulários: [React Hook Form](https://react-hook-form.com/)
- Validação: [Zod](https://zod.dev/)
- Ícones: [Lucide React](https://lucide.dev/)

## Funcionalidades

- [x] Criação de salas para responder perguntas.
- [x] Criação de perguntas.
- [x] Gravação de áudio para alimentar o banco de dados em tempo real.
- [x] Resposta automatizada de perguntas com inteligência artificial.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/izaiasmorais/letmeask
cd letmeask
```

Instale as dependências:

```bash
pnpm install
```

## Executando o Projeto

Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

Abra [http://localhost:5173](http://localhost:5173) no seu navegador para ver o projeto rodando.

## Estrutura de Pastas

- `src/pages/sign-in/` — Telas de autenticação e criação de sala
- `src/components/` — Componentes reutilizáveis
- `public/` — Imagens e arquivos estáticos

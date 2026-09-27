# Trabalho Auth

Aplicação React para demonstrar cadastro, login e logout com e-mail e senha usando Supabase Auth. A página inicial é pública; a rota `/restrita` exige uma sessão autenticada.

## Requisitos

- Node.js e npm.
- Um projeto no [Supabase](https://supabase.com/).

## Instalação e execução

No terminal, a partir da raiz deste projeto (`3bimestre/Trabalho-Auth`):

```bash
npm install
```

Crie o arquivo local de variáveis de ambiente a partir do exemplo:

```powershell
Copy-Item .env.example .env.local
```

No macOS/Linux, use `cp .env.example .env.local`. Preencha os valores no `.env.local` conforme a seção seguinte. Esse arquivo local não deve ser enviado ao repositório.

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra o endereço informado pelo Vite, normalmente `http://localhost:5173`. Para validar o projeto também estão disponíveis `npm run build` (build de produção) e `npm run lint` (ESLint).

## Variáveis de ambiente

O projeto lê estas variáveis em `src/lib/supabase.js`:

| Variável | Valor |
| --- | --- |
| `VITE_SUPABASE_URL` | URL do projeto Supabase, disponível nas configurações/API do projeto. |
| `VITE_SUPABASE_ANON_KEY` | Chave pública `anon` (ou a chave publicável, se disponibilizada pelo projeto) do Supabase. |

O arquivo [`.env.example`](.env.example) contém os nomes necessários, sem credenciais. Use a URL e a chave pública do seu próprio projeto no `.env.local`. Como variáveis com prefixo `VITE_` são incluídas no código enviado ao navegador, nunca coloque nesse arquivo uma `service_role` ou outra chave secreta. Reinicie o servidor Vite depois de alterar variáveis de ambiente.

## Configuração do Supabase

1. Crie um projeto Supabase e obtenha a URL do projeto e a chave pública (`anon`/publishable) para configurar o `.env.local`.
2. No dashboard, abra **Authentication > Sign In / Providers > Email** e habilite o provedor de e-mail e senha.
3. **Mantenha a confirmação de e-mail habilitada.** Esse é o comportamento documentado para reproduzir o fluxo da aplicação: ao cadastrar, se o Supabase não retornar uma sessão, a tela informa que o usuário deve confirmar o endereço antes de fazer login. Após clicar no link de confirmação, o usuário poderá entrar normalmente.
4. Em **Authentication > URL Configuration**, defina `http://localhost:5173` como **Site URL** e inclua `http://localhost:5173/**` nas **Redirect URLs** permitidas para desenvolvimento. Em uma implantação, configure também o domínio da aplicação e suas URLs de redirecionamento.

A aplicação usa somente o Supabase Auth; não requer tabelas ou scripts SQL próprios. O serviço padrão de e-mail do Supabase pode ter limites de envio; para uso real em produção, configure um servidor SMTP próprio no projeto.

## Sessão e autorização

O `AuthProvider`, em `src/context/AuthContext.jsx`, consulta a sessão inicial com `supabase.auth.getSession()` e acompanha alterações com `supabase.auth.onAuthStateChange()`. Ele mantém o usuário e o estado de carregamento no contexto compartilhado. O login, cadastro e logout são realizados pelas funções de autenticação do Supabase.

`RotaProtegida`, em `src/components/RotaProtegida.jsx`, aguarda a resolução da sessão; sem usuário autenticado, redireciona para `/login`. Com usuário, renderiza a rota filha por meio de `Outlet`. Essa regra protege a navegação e a interface da aplicação, mas não substitui autorização no servidor. Se forem adicionados dados ou operações, as tabelas e APIs devem aplicar suas próprias regras, por exemplo com políticas de Row Level Security (RLS) no Supabase.

**Autenticação** responde “quem é o usuário?”: neste projeto, o Supabase verifica as credenciais e estabelece uma sessão. **Autorização** responde “o que esse usuário pode acessar?”: neste projeto, a rota `/restrita` permite acesso a qualquer usuário com sessão; não há perfis, papéis ou permissões diferentes. Portanto, autenticar não significa automaticamente ter acesso a qualquer recurso, e cada recurso protegido precisa de uma regra de autorização apropriada.

## Referências

- [Supabase: Password-based Auth](https://supabase.com/docs/guides/auth/passwords)
- [Supabase JavaScript: `signUp`](https://supabase.com/docs/reference/javascript/auth-signup)
- [Supabase JavaScript: `signInWithPassword`](https://supabase.com/docs/reference/javascript/auth-signinwithpassword)
- [Supabase JavaScript: `getSession`](https://supabase.com/docs/reference/javascript/auth-getsession)
- [Supabase JavaScript: `onAuthStateChange`](https://supabase.com/docs/reference/javascript/auth-onauthstatechange)
- [Supabase: Redirect URLs](https://supabase.com/docs/guides/auth/redirect-urls)
- [Vite: Env Variables and Modes](https://vite.dev/guide/env-and-mode)
- [React Router: `Navigate`](https://reactrouter.com/api/components/Navigate) e [`Outlet`](https://reactrouter.com/api/components/Outlet)

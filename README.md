# Portfólio Pessoal

Este é o repositório do meu portfólio pessoal, desenvolvido com Next.js, React, TypeScript, Tailwind CSS e EmailJS.

## Descrição

Este é o código-fonte do meu portfólio online, onde apresento informações sobre mim, meus projetos, habilidades e como me contatar.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)

## Funcionalidades

- **Página Inicial:** Apresenta uma breve introdução sobre mim.
- **Página de Projetos:** Mostra uma lista dos meus projetos, com links para seus respectivos repositórios ou páginas.
- **Página de Habilidades:** Detalha minhas habilidades em diferentes tecnologias.
- **Página de Contato:** Permite que os visitantes entrem em contato comigo através de um formulário de e-mail.

## Como Executar

1. Clone este repositório:

   ```bash
   git clone https://github.com/ryanfigueredo/newport.git
   ```

2. Instale as dependências:

   ```bash
   cd portfolio
   npm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis de ambiente:

   ```plaintext
   NEXT_PUBLIC_EMAILJS_USER_ID=SUA_USER_ID
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=SUA_SERVICE_ID
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=SUA_TEMPLATE_ID
   ```

   Substitua `SUA_USER_ID`, `SUA_SERVICE_ID` e `SUA_TEMPLATE_ID` pelos seus valores do EmailJS.

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse o portfólio localmente em seu navegador:

   [http://localhost:3000](http://localhost:3000)

## Licença

Este projeto está sob a licença [MIT](LICENSE).

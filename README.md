# Portfólio Thomás Ramos

Bem-vindo ao código-fonte do meu site pessoal! 👋

O site está organizado nas seguintes seções:

- 🏠 **Página Inicial** – Apresenta um resumo sobre minha experiência profissional, formação acadêmica, prêmios e projetos.
- 💻 **Projetos** – Uma seleção dos meus principais trabalhos e contribuições em desenvolvimento de software.
- 🎓 **Acadêmico** – Um panorama da minha trajetória acadêmica em Engenharia de Software, incluindo disciplinas concluídas, notas individuais e coeficiente de rendimento.
- 💼 **Experiência** – Um resumo das minhas experiências profissionais, destacando funções, responsabilidades e resultados alcançados.
- 📬 **Contato** – Formas de entrar em contato comigo para colaborações, oportunidades ou parcerias.
- 📄 **Currículo** – Disponível para download em formato PDF, com detalhes sobre minha formação, experiência e habilidades.

---

## Tecnologias

Este portfolio foi desenvolvido utilizando as seguintes tecnologias:

- **HTML5** – Linguagem de marcação utilizada para estruturar o conteúdo das páginas web.
- **CSS3** – Linguagem de estilo para definir o design, layout e efeitos visuais das páginas.
- **Bootstrap** – Framework front-end que facilita o desenvolvimento de interfaces responsivas e modernas.
- **JavaScript** – Linguagem de programação responsável por adicionar interatividade e dinamismo às páginas web.
- **React** – Biblioteca JavaScript para construir interfaces de usuário com componentes reutilizáveis, facilitando o desenvolvimento de aplicações web dinâmicas e eficientes.

---

## Wireframes 

![Wireframe Página Home](https://github.com/viniciusgomesrod/portfolio/blob/main/docs/wireframes/wireframe_pagina_home.png)
![Wireframe Página de Projetos](https://github.com/viniciusgomesrod/portfolio/blob/main/docs/wireframes/wireframe_pagina_projetos.png)
![Wireframe Página Acadêmica](https://github.com/viniciusgomesrod/portfolio/blob/main/docs/wireframes/wireframe_pagina_academica.png)
![Wireframe Página de Contato](https://github.com/viniciusgomesrod/portfolio/blob/main/docs/wireframes/wireframe_pagina_contato.png)

---

## Instruções de Uso

- cd PortfolioLab
- npm install
- npm run dev
- Em seguida, clique com Control (Windows/Linux) ou Command (Mac) no link do localhost gerado no terminal.


---

## Estrutura de Diretórios

O projeto está organizado nos seguintes diretórios:

```text
app
└── _components
    └── ui
    (home)
    api
    ├── movies
    └── og
    blog
    academics
    movies
    videos
data
├── movies
└── posts
lib
└── ...
public
└── ...
docs
└── ...
```

| Directory            | Description                                             |
| -------------------- | ------------------------------------------------------- |
| `app`                | Root directory for Next.js application with app router. |
| `app/_components`    | Shared components used across multiple pages.           |
| `app/_components/ui` | Shadcn/UI components.                                   |
| `app/(home)`         | Homepage components and layout.                         |
| `app/api`            | API routes for server-side functionality.               |
| `app/api/movies`     | Endpoint for fetching movies data.                      |
| `app/api/og`         | Open Graph image generation API for the blog.           |
| `app/blog`           | Blog components, pages and layout.                      |
| `app/contact`        | Contact page components and layout.                     |
| `app/resume`         | Resume page components and layout.                      |
| `app/academics`      | Academics page components and layout.                   |
| `app/movies`         | Movies page components and layout.                      |
| `app/projects`       | Projects page components and layout.                    |
| `app/videos`         | Videos page components and layout.                      |
| `data`               | Static data files.                                      |
| `data/movies`        | JSON files containing movies and their metadata.        |
| `data/posts`         | MDX files for blog posts.                               |
| `docs`         | Documentos e artefatos para criação do projeto.                               |
| `lib`                | Utility functions, types, and helper code.              |
| `public`             | Public static assets like images.                       |

---

## Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).
Você pode usar, modificar e distribuir este código, desde que os **devidos créditos sejam dados**, com link para o [original repository](https://github.com/viniciusgomesrod/portfolio). 
Este projeto foi desenvolvido por [Vinícius Gomes](https://github.com/viniciusgomesrod) e [Thomás Ramos](https://github.com/Thomasramos02) inspirado no portfolio de [Luca Azalim](https://github.com/lucaazalim).



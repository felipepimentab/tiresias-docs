import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tiresias Docs",
  description: "Tiresias Documentation",
  lang: "pt-BR",
  lastUpdated: true,
  locales: {
    root: {
      label: "Português",
      lang: "pt-BR"
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      label: "Nessa página",
    },
    lastUpdated: {
      text: "Última atualização",
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Buscar",
            buttonAriaLabel: "Buscar",
          },
          modal: {
            noResultsText: "Nenhum resultado para:",
            resetButtonTitle: "Limpar",
            displayDetails: "Mostrar detalhes",
            footer: {
              navigateText: "para navegar",
              selectText: "para selecionar",
              closeText: "para fechar",
            },
          },
        },
      },
    },
    siteTitle: "Tiresias Docs",
    logo: "/aasi.png",
    editLink: {
      pattern: "https://github.com/felipepimentab/tiresias-docs/blob/main/docs/:path",
      text: "Visualizar no GitHub"
    },
    docFooter: {
      next: "Próxima página",
      prev: "Página anterior"
    },
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Guia', link: '/guia/tecnologias' }
    ],

    sidebar: [
      {
        text: 'Guia',
        items: [
          { text: 'Tecnologias utilizadas', link: '/guia/tecnologias' },
        ]
      },
      { text: 'Sobre', link: 'sobre.md' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/felipepimentab/tiresias-docs' }
    ]
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/aasi.png",
      },
    ]
  ],
})

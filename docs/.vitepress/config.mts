import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tiresias",
  description: "Tecnologia aberta para aparelhos auditivos",
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
    siteTitle: "Tiresias",
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
      { text: 'Sobre', link: '/sobre/introducao' },
      { text: 'Documentação', link: '/documentacao/geral' },
      { text: 'Guia', link: '/recursos/guia' },
    ],

    sidebar: [
      {
        text: 'Sobre',
        items: [
          { text: 'Introdução', link: '/sobre/introducao' },
          { text: 'Objetivos', link: '/sobre/objetivos' },
          { text: 'Parcerias Institucionais', link: '/sobre/parcerias' },
          { text: 'Equipe', link: '/sobre/equipe' },
          { text: 'Metodologia', link: '/sobre/metodologia' },
          { text: 'Resultados Esperados', link: '/sobre/resultados' },
          { text: 'Cronograma', link: '/sobre/cronograma' },
          { text: 'Orçamento e Financiamento', link: '/sobre/financiamento' },
          { text: 'Planos Futuros', link: '/sobre/planos' },
        ]
      },
      {
        text: 'Documentação técnica',
        items: [
          { text: 'Visão geral', link: '/documentacao/geral' },
          { text: 'Hardware', link: '/documentacao/hardware' },
          { text: 'Software', link: '/documentacao/software' },
        ]
      },
      {
        text: 'Recursos',
        items: [
          { text: 'Guia', link: '/recursos/guia' },
        ]
      },
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
    ],
    [
      "meta",
      {
        property: "og:title",
        content: "Tiresias"
      }
    ],
    [
      "meta",
      {
        property: "og:description",
        content: "Tecnologia aberta para aparelhos auditivos"
      }
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://eesc.usp.br/calouros/wp-content/uploads/2025/01/Imagem-do-WhatsApp-de-2025-01-16-as-16.09.55_13b718f9-e1737055076500.jpg"
      }
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://tiresias-docs.vercel.app"
      }
    ],
    [
      "meta",
      {
        property: "og:type",
        content: "website"
      }
    ],
  ],
})

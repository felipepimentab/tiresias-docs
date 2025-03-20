import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tiresias",
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
    ]
  ],
})

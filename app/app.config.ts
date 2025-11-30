export default defineAppConfig({
  global: {
    picture: {
      dark: '/hero/ra-100.jpg',
      light: '/hero/ra-100.jpg',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'ui-pro@nuxt.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `С ❤️ Эльчин • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-telegram',
      'to': 'https://t.me/elchin_gw',
      'target': '_blank',
      'aria-label': 'Elchin on Telegram'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/ElchinGV',
      'target': '_blank',
      'aria-label': 'Elchin on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/ElchinG20',
      'target': '_blank',
      'aria-label': 'Elchin on GitHub'
    }]
  }
})

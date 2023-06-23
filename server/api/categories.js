import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Song',
        id_ID: 'Lagu',
      },
    },
    {
      id: 2,
      title: {
        en: 'App',
        id_ID: 'Aplikasi',
      },
    },
    {
      id: 3,
      title: {
        en: 'Web Design',
        id_ID: 'Desain Web',
      },
    },
  ]
})

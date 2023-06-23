import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'React',
      description: {
        en: 'I build modern and advanced websites and applications with React or Expo by React Native.',
        id_ID: 'Saya membuat situs web dan aplikasi modern menggunakan React atau Expo dari React Native.',
      },
      icon: 'devicon:react',
      image: null,
    },
    {
      id: 2,
      title: 'Vue',
      description: {
        en: 'I use Vue, a modern JavaScript and Typescript framework, while making dynamic and static websites and applications.',
        id_ID: 'Terkadang saya juga menggunakan Vue, framework JavaScript dan Typescript sumber terbuka modern, ketika membuat website maupun aplikasi.',
      },
      icon: 'devicon:vuejs',
      image: null,
    },
    {
      id: 3,
      title: 'Kotlin',
      description: {
        en: 'For an app, I also use Kotlin.',
        id_ID: 'Untuk membuat aplikasi, saya juga menggunakan Kotlin.',
      },
      icon: 'devicon:kotlin',
      image: null,
    },
    {
      id: 4,
      title: 'Python',
      description: {
        en: 'In Cybersecurity, I use Python, SQL, Java/JavaScript, C++, etc. But Python is the language I use more often.',
        id_ID: 'Dalam bidang Keamanan Siber, saya menggunakan Python, SQL, Java/JavaScript, C++, dll. Tapi Python adalah bahasa yang lebih sering saya gunakan.',
      },
      icon: 'devicon:python',
      image: null,
    },
  ]
})

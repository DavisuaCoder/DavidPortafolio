import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'It Never Ends ft. Julian Wilt',
      category: {
        id: 1,
        date: {
          en: 'January 2023',
          id_ID: 'Januari 2023',
        },
        title: {
          en: 'Song',
          id_ID: 'Lagu',
        },
      },
      content: {
        en: 'This song was made for gear testing and to honour the work of the great band, Bring Me The Horizon.',
        id_ID: 'Lagu ini dibuat hanya untuk menguji peralatan musik kami dan untuk menghormati karya sebuah band hebat, Bring Me The Horizon.',
      },
      desc: {
          en: 'View Project',
          id_ID: 'Lihat Proyek',
        },
      image: '/images/ine.jpg',
      url: 'https://ite.aghea.site',
    },
    {
      id: 2,
      title: 'Soultaker',
      category: {
        id: 1,
        date: {
          en: 'March 2023',
          id_ID: 'Maret 2023',
        },
        title: {
          en: 'Song',
          id_ID: 'Lagu',
        },
      },
      content: {
        en: 'This album is a compilation of Bon-Bon Soultaker songs from: "Deathless Guitar" (2012), "Scents of Death" (2012), "Doubt" (2013), "Tuhan, Manusia, Malaikat, & Iblis" (2013).',
        id_ID: 'Album ini merupakan kompilasi lagu-lagu Bon-Bon Soultaker dari: "Deathless Guitar" (2012), "Scents of Death" (2012), "Doubt" (2013), "Tuhan, Manusia, Malaikat, & Iblis" (2013).',
      },
      desc: {
          en: 'View Project',
          id_ID: 'Lihat Proyek',
        },
      image: '/images/soultaker.jpg',
      url: 'https://soultaker.aghea.site',
    },
    {
      id: 3,
      title: 'ADLink',
      url: 'https://bit.ly/ADLink-Docs',
      category: {
        id: 3,
        date: {
          en: 'August 2022',
          id_ID: 'Agustus 2022',
        },
        title: {
          en: 'Web Design',
          id_ID: 'Desain Web',
        },
      },
      content: {
        en: 'The best place to create your BioLink.',
      id_ID: 'Kustomisasi templat LinkTree dan BioLink terbaik.',
      },
      desc: {
          en: 'View Project',
          id_ID: 'Lihat Proyek',
        },
      image: '/images/preview.png',
    },
    {
      id: 4,
      title: 'MLFESSID',
      url: 'https://bit.ly/MLFESSID',
      category: {
        id: 2,
        date: {
          en: 'June 2023',
          id_ID: 'Juni 2023',
        },
        title: {
          en: 'App',
          id_ID: 'Aplikasi',
        },
      },
      content: {
        en: 'MLFESSID is an OAuth bot account, created specifically to discuss a game known as Mobile Legends: Bang-Bang or MLBB Indonesia, using Twitter API v2.',
      id_ID: 'MLFESSID adalah sebuah akun bot OAuth yang dibuat khusus untuk membahas tentang sebuah gim yang dikenal dengan nama Mobile Legends: Bang-Bang atau MLBB di Indonesia, menggunakan Twitter API v2.',
      },
      desc: {
          en: 'View Project',
          id_ID: 'Lihat Proyek',
        },
      image: '/images/mlbb.png',
    },
    {
      id: 5,
      title: 'Discord Stage',
      url: 'https://support.discord.com/hc/en-us/articles/1500005513722-Stage-Channels-FAQ',
      category: {
        id: 2,
        date: {
          en: 'October 2022',
          id_ID: 'Oktober 2022',
        },
        title: {
          en: 'App',
          id_ID: 'Aplikasi',
        },
      },
      content: {
        en: 'Stage channels are a special type of voice channel you can create in your Community server.',
        id_ID: 'Stage Channels adalah jenis saluran suara khusus yang dapat kamu buat di server Komunitas kamu.',
      },
      desc: {
          en: 'View Project',
          id_ID: 'Lihat Proyek',
        },
      image: '/images/dc1.png',
    },
    {
      id: 6,
      title: 'BLAST.TV',
      category: {
        id: 3,
        date: {
          en: 'May 2022',
          id_ID: 'Mei 2022',
        },
        title: {
          en: 'Web Design',
          id_ID: 'Desain Web',
        },
      },
      content: {
        en: 'BLAST.TV is our new big thing. It’s the ultimate platform where millions of esports fans will come together to watch, chat and be entertained by the best content from our world. It’s a radical new way to watch esports.',
        id_ID: 'BLAST.TV adalah platform utama tempat jutaan penggemar esports berkumpul untuk menonton, mengobrol, dan dihibur oleh konten terbaik dari dunia esports.',
      },
      desc: {
          en: 'View Project',
          id_ID: 'Lihat Proyek',
        },
      image: '/images/blast.jpg',
      url: 'https://blast.tv',
    },
  ]
})

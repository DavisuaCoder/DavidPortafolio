<template>
  <article id="resume" class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="business-outline"></ion-icon>
        </div>
        <h3 class="h3">Experience</h3>
      </div>
      <ol class="timeline-list">
        <li class="timeline-item" v-for="job in experience" :key="job.title">
          <div class="timeline-item-content">
            <!-- Item Header -->
            <div class="timeline-item-content-header">
              <!-- Title + Institution Flex Column -->
              <div class="flex-column-title">
                  <h4 class="timeline-item-title fw-bold">{{ job.title }}</h4>
                  <h6 class="timeline-item-subtitle text-light-6 text-3">
                    <ion-icon class="timeline-icon" name="business-outline"></ion-icon>
                      <span>{{ job.company }}</span>
                  </h6>
              </div>

              <div class="flex-column-date">
                  <!-- Date Tags -->
                  <div class="tag">
                    <ion-icon class="timeline-icon" name="calendar-outline"></ion-icon>
                    <span>{{ job.date}}</span>
                  </div>
              </div>
            </div>
            <div class="timeline-item-content-body mt-2">
              <p class="text-3 timeline-description">{{ job.description }}</p>
            </div>
          </div>

          <!-- Etiquetas de tecnologías -->
          <ul class="job-technologies">
            <li v-for="technology in job.technologies" :key="technology">
              {{ technology }}
            </li>
          </ul>
        </li>
      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 class="h3">Education</h3>
      </div>
      <ol class="timeline-list">
        <li class="timeline-item" v-for="job in education" :key="job.title">
          <div class="timeline-item-content">
            <!-- Item Header -->
            <div class="timeline-item-content-header">
              <!-- Title + Institution Flex Column -->
              <div class="flex-column-title">
                  <h4 class="timeline-item-title fw-bold">{{ job.title }}</h4>
                  <h6 class="timeline-item-subtitle text-light-6 text-3">
                    <ion-icon class="timeline-icon" name="business-outline"></ion-icon>
                      <span>{{ job.university }}</span>
                  </h6>
              </div>

              <div class="flex-column-date">
                  <!-- Date Tags -->
                  <div class="tag">
                    <ion-icon class="timeline-icon" name="calendar-outline"></ion-icon>
                    <span>{{ job.date}}</span>
                  </div>
              </div>
            </div>
          </div>  
        </li>
      </ol>
      <div class="download-button-container">
        <a
          href="/Files/DavidAlvarezPerales-CV.pdf"
          aria-label="Download Resume"
          class="cta"
        >
          <span>Download Full Resume</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  </article>
</template>

<script setup>
const experience = [
  {
    title: 'Solutions Architect',
    date: 'Dec 2022 ➔ Currently',
    company: 'Dars Telecom',
    description:'Translated business needs to solutions, collaborated on Java projects, led innovation, and improved software efficiency with Python',
    technologies: ['Python', 'Java', 'JPA', 'CI/CD', 'Excel'],
  },
  {
    title: 'Systems Engineer',
    date: 'Sep 2022 ➔ Dec 2022',
    company: 'Dars Telecom',
    description: 'Managed Unix/Linux systems and virtualized environments with VMware, delivered L3 support',
    technologies: ['Bash', 'Linux/Unix', 'Python', 'VMWare', 'Oracle'],
  },
  {
    title: 'Project Management Officer',
    date: 'Jun 2022 ➔ Sep 2022',
    company: 'Accenture',
    description: 'Oversaw project tasks, engaged stakeholders, and identified risks in control meetings',
    technologies: ['Excel', 'PowertPoint', 'Power BI'],
  },
  {
    title: 'Full Stack Developer (VueJS/ExpressJS)',
    date: 'Jun 2021 ➔ Jun 2022',
    company: 'Automoviles Aerolan',
    description: 'Designed website with NodeJS, VueJS, and ArangoDB, creating a secure and scalable system architecture for web applications.',
    technologies: ['VueJS', 'NodeJS', 'ExpressJS', 'MongoDB'],
  },
] 
const education = [
  {
    title: 'Dual Bachelor of Computer Engineering and Business Administration',
    date: 'Sep 2018 ➔ Jun 2023',
    university: 'UC3M University'
  },
  {
    title: 'Master in Agile Organizations and Digital Transformation',
    date: 'Sep 2022 ➔ Sep 2023',
    university: 'Camilo José Cela University'
  }
]
</script>

<style scoped>
/* Estilos para el botón de descarga */
.download-button-container {
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: inherit;
}

.cta {
  position: relative;
  display: inline-flex;
  margin: auto;
  padding: 19px 22px;
  transition: all 0.2s ease;
}

.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 28px;
  background: rgba(45,212,191,.1);
  width: 46px;
  height: 46px;
  transition: all 0.3s ease;
}

.cta span {
  position: relative;
  font-size: var(--fs-8);
  line-height: 10px;
  font-weight: var(--fw-800);
  letter-spacing: 0.25em;
  text-transform: uppercase;
  vertical-align: middle;
  color: rgb(94 234 212);
}

.cta svg {
  position: relative;
  align-self: center;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: rgb(94 234 212);
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.cta:hover:before {
  width: 100%;
  background: rgba(45,212,191,.1);
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active {
  transform: scale(0.96);
}

.timeline-icon {
  margin-right: 0.5rem;
  color: var(--light-gray-70);
}

.timeline-item-title {
    color: #fff;
    font-weight: bold;
    font-size: 18px; /* Tamaño del título */
}

.timeline-list span {
  color: var(--light-gray-70);
  font-weight: var(fw-400);
  line-height: 1.6;
}

.timeline-item-subtitle {
    font-size: 14px; /* Tamaño del subtítulo */
    color: --var(--light-gray-70);
    display: flex;
    align-items: center;
}

.timeline-item-content-header {
    display: flex;
}

.flex-column-title {
    padding-right: 2rem; /* Espacio entre el título y el subtítulo */
}

.flex-column-date {
    margin-left: auto; /* Mover la fecha a la derecha */
}
.tag{
    background-color: var(--smoky-black);
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-size: var(--fs-8);
}

.timeline-item-content-body {
    margin-top: 20px; /* Espacio entre el contenido y la descripción */
}

.timeline-description {
    /* Estilo para el texto normal en la descripción */
    color: var(--light-gray-70);
    font-size: 14px;
}

</style>
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
          <h4 class="h4 timeline-item-title">{{ job.title }}</h4>
          <p class="timeline-text">{{ job.company }}</p>
          <span>{{ job.date }}</span>
          <p class="timeline-item-desc">{{ job.location }}</p>

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
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Dual Bachelor of Computer Engineering and Business Administration
          </h4>
          <p class="timeline-text">
            UC3M UNIVERSITY
          </p>
          <span>2018 — 2023</span>
          <p class="timeline-item-desc">
            Madrid, Spain
          </p>
        </li>
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Bachelor of Agile Organizations and Digital Transformation
          </h4>
          <p class="timeline-text">
            CAMILO JOSÉ CELA UNIVERSITY
          </p>
          <span>2022 — 2023</span>
          <p class="timeline-item-desc">
            Madrid, Spain
          </p>
        </li>
      </ol>
      <div class="download-button-container">
        <a
          href="/Files/David Alvarez Perales CV.pdf"
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
    date: 'DEC 2022 — Current',
    location: 'Madrid, Spain',
    company: 'Dars Telecom',
    technologies: ['Python', 'Java', 'JPA', 'CI/CD', 'Excel'],
  },
  {
    title: 'Systems Engineer',
    date: 'SEP 2022 — DEC 2022',
    location: 'Madrid, Spain',
    company: 'Dars Telecom',
    technologies: ['Bash', 'Linux/Unix', 'Python', 'VMWare', 'Oracle'],
  },
  {
    title: 'Project Management Officer',
    date: 'JUN 2022 — SEP 2022',
    location: 'Madrid, Spain',
    company: 'Accenture',
    technologies: ['Excel', 'PowertPoint', 'Power BI'],
  },
  {
    title: 'Full Stack Developer (VueJS/ExpressJS)',
    date: 'JUN 2021 — JUN 2022',
    location: 'Madrid, Spain',
    company: 'Automoviles Aerolan',
    technologies: ['VueJS', 'NodeJS', 'ExpressJS', 'MongoDB'],
  },
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
</style>
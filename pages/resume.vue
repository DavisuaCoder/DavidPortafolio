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
          download="David Alvarez Perales CV.pdf"
          href="/files/David Alvarez Perales CV.pdf"
          aria-label="Download Resume"
          class="download-link"
        >
          <ion-icon name="arrow-down-circle-outline" class="download-icon"></ion-icon>
          <span class="download-text">Download Full Resume</span>
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
  text-align: center;
  margin-top: 20px;
}

.download-link {
  display: inline-flex;
  padding: 10px 20px;
  border: 1px solid;
  border-color: var(--color-secondary-3);
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

.download-link:hover {
  background-color: #0056b3;
}

.download-icon {
  margin-right: 5px;
  font-size: 20px;
  vertical-align: middle;
}

.download-text {
  vertical-align: middle;
  font-weight: bold;
}
</style>
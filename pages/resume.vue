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
          <span>{{ job.date }}</span>
          <p class="timeline-item-desc">{{ job.location }}</p>
          <p class="timeline-text">{{ job.role }}</p>

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
            UC3M UNIVERSITY 
          </h4>
          <span>2018 — 2023</span>
          <p class="timeline-item-desc">
            Madrid, Spain
          </p>
          <p class="timeline-text">
            Dual Bachelor of Computer Engineering and Business Administration
          </p>
        </li>
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            CAMILO JOSÉ CELA UNIVERSITY
          </h4>
          <span>2022 — 2023</span>
          <p class="timeline-item-desc">
            Madrid, Spain
          </p>
          <p class="timeline-text">
            Bachelor of Agile Organizations and Digital Transformation
          </p>
        </li>
      </ol>
    </section>
  </article>
</template>

<script setup>
const experience = [
  {
    title: 'Dars Telecom',
    date: 'DEC 2022 — Current',
    location: 'Madrid, Spain',
    role: 'Solutions Architect',
    technologies: ['Python', 'Java', 'JPA', 'CI/CD', 'Excel'],
  },
  {
    title: 'Dars Telecom',
    date: 'SEP 2022 — DEC 2022',
    location: 'Madrid, Spain',
    role: 'Systems Engineer',
    technologies: ['Bash', 'Linux/Unix', 'Python', 'VMWare', 'Oracle'],
  },
  {
    title: 'Accenture',
    date: 'JUN 2022 — SEP 2022',
    location: 'Madrid, Spain',
    role: 'Project Management Officer',
    technologies: ['Excel', 'PowertPoint', 'Power BI'],
  },
  {
    title: 'Automoviles Aerolan',
    date: 'JUN 2021 — JUN 2022',
    location: 'Madrid, Spain',
    role: 'Full Stack Developer',
    technologies: ['Vue', 'Node', 'MongoDB'],
  },
]
</script>
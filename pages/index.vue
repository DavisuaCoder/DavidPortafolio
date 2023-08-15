<template>
  <div class="general-container">
    <article id="about" class="about active" data-page="about">
      <header>
        <h2 class="h2 article-title">
          {{ $t('pageTitles.about') }}
        </h2>
      </header>

      <!-- About -->
      <section class="about-text">
        <ul class="about-list">
          <AboutItem v-for="about in about" :key="about.id" :about="about" />
        </ul>
      </section>

      <section class="techs">
        <ul class="grid-techs">
          <li class="techs-item">
            <img src="/images/techs/Python-logo.png" alt="Python" data-experience="5">
            <div class="tech-tooltip">
              <p>+4 years of experience</p>
            </div>
          </li>
          <li class="techs-item">
            <img src="/images/techs/java-logo.png" alt="Company">
            <div class="tech-tooltip">
              <p>+2 years of experience</p>
            </div>
          </li>
          <li class="techs-item">
            <img src="/images/techs/node-logo.png" alt="Company">
            <div class="tech-tooltip">
              <p>+3 years of experience</p>
            </div>
          </li>
          <li class="techs-item">
            <img src="/images/techs/vue-logo.png" alt="Company">
            <div class="tech-tooltip">
              <p>+3 years of experience</p>
            </div>
          </li>
          <li class="techs-item">
            <img src="/images/techs/javascript-logo.png" alt="Company">
            <div class="tech-tooltip">
              <p>+4 years of experience</p>
            </div>
          </li>
          <li class="techs-item">
            <img src="/images/techs/linux-logo.png" alt="Company">
            <div class="tech-tooltip">
              <p>+2 years of experience</p>
            </div>
          </li>
          <li class="techs-item">
            <img src="/images/techs/docker-logo.webp" alt="Company">
            <div class="tech-tooltip">
              <p>+1 years of experience</p>
            </div>
          </li>
          <li class="techs-item">
            <img src="/images/techs/gcp-logo-cloud.webp" alt="Company">
            <div class="tech-tooltip">
              <p>+1 years of experience</p>
            </div>
          </li>
        </ul>
      </section>
    </article>
    <resume />
    <github />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import Resume from './resume.vue'
import Portfolio from './portfolio.vue';
import Github from './github.vue';

useHead({
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Services */
const { data: services } = await useFetch('/api/services')

/* Services */
const { data: about } = await useFetch('/api/about')
</script>

<style scoped>
/* ... tus estilos existentes ... */
.grid-techs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  justify-items: center;
}

/* Estilos para el tooltip */
.tech-tooltip {
  position: relative;
}

.tech-tooltip p {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: var(--color-primary);
  padding: 5px 10px;
  border-radius: 4px;
  font-size: var(--fs-6);
  white-space: nowrap;
  display: none; /* Ocultar inicialmente */
}

.techs-item:hover .tech-tooltip p {
  display: block; /* Mostrar cuando se pasa el ratón */
}
</style>
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
            <a href="https://example.com" target="_blank">
              <img src="/images/techs/Python-logo.png" alt="Company">
            </a>
          </li>
          <li class="techs-item">
            <a href="https://example.com" target="_blank">
              <img src="/images/techs/java-logo.png" alt="Company">
            </a>
          </li>
          <li class="techs-item">
            <a href="https://example.com" target="_blank">
              <img src="/images/techs/node-logo.png" alt="Company">
            </a>
          </li>
          <li class="techs-item">
            <a href="https://example.com" target="_blank">
              <img src="/images/techs/vue-logo.png" alt="Company">
            </a>
          </li>
          <li class="techs-item">
            <a href="https://example.com" target="_blank">
              <img src="/images/techs/javascript-logo.png" alt="Company">
            </a>
          </li>
          <li class="techs-item">
            <a href="https://example.com" target="_blank">
              <img src="/images/techs/linux-logo.png" alt="Company">
            </a>
          </li>
          <li class="techs-item">
            <a href="https://example.com" target="_blank">
              <img src="/images/techs/docker-logo.webp" alt="Company">
            </a>
          </li>
          <li class="techs-item">
            <a href="https://example.com" target="_blank">
              <img src="/images/techs/gcp-logo-cloud.webp" alt="Company">
            </a>
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
</style>
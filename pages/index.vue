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

      <!-- service -->
      <section class="service">
        <br />
        <ul class="service-list">
          <ServiceItem v-for="service in services" :key="service.id" :service="service" />
        </ul>
      </section>

      <!-- clients -->
      <section class="clients">
        <h3 class="h3 clients-title">
          Clients
        </h3>

        <ul class="clients-list has-scrollbar">
          <li class="clients-item">
            <a href="https://example.com" target="_blank">
              <img src="/.png" alt="Company">
            </a>
          </li>
        </ul>
      </section>
    </article>
    <resume />
    <github />
    <portfolio />
  </div>
</template>
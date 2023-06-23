<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue';

const props = defineProps({
  about: Object,
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <li class="about-item">

    <div class="about-content-box">
      <p class="about-item-text">
        {{ locale === 'en' ? about.description?.en : about.description?.id_ID }}
      </p>
    </div>
  </li>
</template>

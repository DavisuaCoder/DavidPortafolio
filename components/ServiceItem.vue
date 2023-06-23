<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue';

const props = defineProps({
  service: Object,
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <li class="service-item">
    <div class="service-icon-box">
      <img v-if="service.image !== null && service.icon !== ''" :src="service.image" alt="mobile app icon" class="w-40">
      <Icon v-else :icon="service.icon" class="text-ranko-500 text-[3rem] mx-auto" style="width: 40px" />
    </div>

    <div class="service-content-box">
      <h4 class="h4 service-item-title">
        {{ service.title }}
      </h4>

      <p class="service-item-text">
        {{ locale === 'en' ? service.description?.en : service.description?.id_ID }}
      </p>
    </div>
  </li>
</template>

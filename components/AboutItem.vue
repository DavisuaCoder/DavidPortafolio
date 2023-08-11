<template>
  <li class="about-item">
    <div class="about-content-box">
      <p class="about-item-text" v-html="highlightText(about.description?.en)">
      </p>
    </div>
  </li>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  about: Object,
})

const { locale } = useI18n({ useScope: 'global' })

// Función para resaltar texto específico
const highlightText = (text) => {
  if (text) {
    // Reemplaza las palabras que deseas resaltar con <span> y una clase CSS
    text = text.replace('Solution Architect', '<span class="highlight">Solution Architect</span>')
    text = text.replace('analytical thinking', '<span class="highlight">analytical thinking</span>')
    text = text.replace('decision-making skills,', '<span class="highlight">decision-making skills,</span>')
    text = text.replace('innovative solutions', '<span class="highlight">innovative solutions</span>')
    text = text.replace('Indonesia', '<span class="highlight">Indonesia</span>')
  }
  return text
}
</script>

<style>
.highlight {
  color: rgb(94 234 212);
  display: inline-flex;
  font-weight: bold;
  white-space: nowrap; /* Evita que la frase se rompa en múltiples líneas */
}
</style>

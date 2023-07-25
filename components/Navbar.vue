<template>
  <nav class="navbar" :class="{ 'navbar-scroll': isScrolled }">
    <ul class="navbar-list">
      <li class="navbar-item">
        <a href="#about" class="navbar-link" :class="{ 'navbar-link-active': activeSection === 'about' }" @click="setActiveSection('about')">
          {{ $t('pageTitles.about') }}
        </a>
      </li>

      <li class="navbar-item">
        <a href="#resume" class="navbar-link" :class="{ 'navbar-link-active': activeSection === 'resume' }" @click="setActiveSection('resume')">
          {{ $t('pageTitles.resume') }}
        </a>
      </li>

      
      <li class="navbar-item">
        <a href="#github" class="navbar-link" :class="{ 'navbar-link-active': activeSection === 'github' }" @click="setActiveSection('github')">
          {{ $t('pageTitles.github') }}
        </a>
      </li>

      <li class="navbar-item">
        <a href="#portfolio" class="navbar-link" :class="{ 'navbar-link-active': activeSection === 'portfolio' }" @click="setActiveSection('portfolio')">
          {{ $t('pageTitles.portfolio') }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const activeSection = ref(''); // Variable para almacenar la sección activa

const handleScroll = () => {
  // Verificar si el usuario ha hecho scroll más allá de cierta posición (por ejemplo, 50 píxeles desde la parte superior)
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  // Escuchar el evento de scroll cuando el componente está montado
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  // Eliminar el evento de scroll cuando el componente se desmonta para evitar fugas de memoria
  window.removeEventListener('scroll', handleScroll);
});

// Función para establecer la sección activa cuando haces clic en un enlace del navbar
const setActiveSection = (section) => {
  activeSection.value = section;
};

</script>

<style scoped>
.navbar-link-active { /* Estilos para el enlace activo */
  font-weight: bold;
  color: var(--vegas-gold);
}
</style>

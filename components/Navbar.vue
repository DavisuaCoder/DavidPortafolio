<template>
  <nav class="navbar" :class="{ 'navbar-scroll': isScrolled }">
    <ul class="navbar-list">
      <li class="navbar-item">
        <a href="#about" class="navbar-link" :class="{ 'active': activeSection === 'about' }" >
          {{ $t('pageTitles.about') }}
        </a>
      </li>
      <li class="navbar-item">
        <a href="#resume" class="navbar-link" :class="{ 'active': activeSection === 'resume' }">
          {{ $t('pageTitles.resume') }}
        </a>
      </li>
      <li class="navbar-item">
        <a href="#github" class="navbar-link" :class="{ 'active': activeSection === 'github' }">
          {{ $t('pageTitles.github') }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const activeSection = ref('about'); // Establecer la sección 'about' como la activa por defecto

const handleScroll = () => {
  // Verificar la posición del scroll en relación con cada sección de la página
  const aboutSection = document.getElementById('about');
  const resumeSection = document.getElementById('resume');
  const githubSection = document.getElementById('github');

  const scrollY = window.scrollY;
  const scrollTop = window.scrollY;
  const headerHeight = 200; // Altura de la cabecera (ajusta según tu diseño)

  if (scrollTop < headerHeight) {
    activeSection.value = 'about';
  }

  if (
    scrollY >= aboutSection.offsetTop && 
    scrollY < resumeSection.offsetTop
  ) {
    activeSection.value = 'about';
  } else if (
    scrollY >= resumeSection.offsetTop && 
    scrollY < githubSection.offsetTop
  ) {
    activeSection.value = 'resume';
  } else if (
    scrollY >= resumeSection.offsetTop
  ) {
    activeSection.value = 'github';
  }

  // Actualizar el estado de la variable isScrolled
  isScrolled.value = scrollY > 250;
};

onMounted(() => {
  // Escuchar el evento de scroll cuando el componente está montado
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  // Eliminar el evento de scroll cuando el componente se desmonta para evitar fugas de memoria
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>

.navbar-link.navbar-link.active {
  color: var(--color-primary);
  font-weight: bold;
}

</style>

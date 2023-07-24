<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <a href="#about" class="navbar-link">
          {{ $t('pageTitles.about') }}
        </a>
      </li>

      <li class="navbar-item">
        <a href="#resume" class="navbar-link">
          {{ $t('pageTitles.resume') }}
        </a>
      </li>

      <li class="navbar-item">
        <a href="#portfolio" class="navbar-link">
          {{ $t('pageTitles.portfolio') }}
        </a>
      </li>

      <li class="navbar-item">
        <a href="#github" class="navbar-link">
          {{ $t('pageTitles.github') }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>

</script>

<style scoped>
a.router-link-active {
  font-weight: bold;
}
a.router-link-exact-active {
  color: var(--vegas-gold);
}
</style>

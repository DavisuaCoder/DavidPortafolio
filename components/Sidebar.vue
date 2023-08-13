<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/avatar.png" alt="Photo" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="David Alvarez">
          David Álvarez Perales
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span class="xl:after:content-[''] after:content-[',']">Solutions Architect</span>
          <span>Full Stack Developer</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <a href="mailto:david.alvarez.perales99@gmail.com" class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Email</p>
            <span class="contact-link">david.alvarez.perales99@gmail.com</span>
          </div>
        </a>

        <!-- Phone -->
        <a href="tel:+34689571913" class="contact-item">
          <div class="icon-box">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Phone</p>
            <span class="contact-link">689 571 913</span>
          </div>
        </a>

        <!-- Linkedin -->
        <a href="https://www.linkedin.com/in/david-alvarez-perales/" class="contact-item" target="_blank">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>
          <div class="contact-info">
            <p class="contact-title">Linkedin</p>
            <span class="contact-link">David Álvarez Perales</span>
          </div>
        </a>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>Madrid, Spain</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <LangSwitcher2 />
      </ul>
    </div>
  </aside>
</template>
<style scoped>

.contacts-list .contact-item:hover {
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

/* Estilos adicionales para el enlace del cursor */
.contacts-list .contact-item:hover .contact-link {
  text-decoration: underline;
  text-decoration-color: var(--color-secondary-3);
}

</style>

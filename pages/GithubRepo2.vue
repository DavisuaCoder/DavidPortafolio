<template>
  <div class="flip-card" @click="openRepository">
    <div class="flip-card-inner">
      <div class="flip-card-front rounded-xl">
        <img class="repository-img border-none rounded-t-xl" src="/images/portafolio-programador.webp" :alt="repository.name">
        <div class="text-center px-4 py-2">
          <a :href="repository.html_url" target="_blank" class="repository-name">{{ repository.name }}</a>
        </div>
      </div>
      <div class="flip-card-back rounded-xl">
        <div class="repository-name-back">{{ repository.name }}</div>
        <div class="project-description">
          <p>{{ repository.description }}</p>
        </div>
        <div class="languages-used">
          <div class="language-item" v-for="language in repository.topLanguages" :key="language">
            <div class="language-circle">
              <ion-icon :name="getLanguageIconName(language)" class="language-icon"></ion-icon>
            </div>
            <div class="language-name">{{ language }}</div>
          </div>
        </div>
        <div class="links-section">
          <div class="link-item">
            <ion-icon name="log-out-outline" class="link-icon"></ion-icon>
            <a :href="repository.website" target="_blank">Website</a>
          </div>
          <div class="link-item">
            <ion-icon name="logo-github" class="link-icon"></ion-icon>
            <a :href="repository.html_url" target="_blank">{{repository.html_url}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GithubReposItem",
  props: {
    repository: {
      type: Object,
      default: () => {
        return {};
      }
    },
    bgColor: {
      type: String,
      default: undefined
    }
  },
  methods: {
    openRepository() {
      window.open(this.repository.html_url, '_blank');
    }, 
    getLanguageIconName(language) {
      const languageIcons = {
        JavaScript: 'logo-javascript',
        Python: 'logo-python',
        HTML: 'logo-html5',
        CSS: 'logo-css3',
        Vue: 'logo-vue'
      };

      return languageIcons[language] || 'code';
    }
  }
};
</script>

<style>
.flip-card {
  perspective: 1000px;
  height: 307px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform var(--transition-1);
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
}

.flip-card-front {
  background-color: var(--color-secondary); /* Utilizando la variable */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-1); /* Utilizando la variable */
  cursor: pointer;
  color: var(--color-text); /* Utilizando la variable */
  font-family: var(--ff-poppins); /* Utilizando la variable */
  text-align: center;
}

.flip-card-back {
  background-color: var(--color-secondary); /* Utilizando la variable */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--shadow-3); /* Utilizando la variable */
  cursor: pointer;
  transform: rotateY(180deg);
  flex-grow: 1;
  padding: 1rem;
  color: var(--white-1); /* Utilizando la variable */
  font-family: 'Segoe UI', sans-serif;
  transition: transform var(--transition-1), background-color var(--transition-1);
}

.flip-card:hover .flip-card-back {
  transform: rotateY(180deg);
  background-color: var(--color-secondary); /* Utilizando la variable */
}

.repository-img {
  width: 100%;
  height: auto;
  margin: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.repository-name {
  font-size: var(--fs-4);
  font-weight: var(--fw-500);
  margin: 1rem 0;
}

.repository-name-back {
  font-size: var(--fs-4);
  font-weight: var(--fw-600);
  color: var(--color-primary); /* Azul claro */
}

.project-description {
  font-size: var(--fs-6);
  margin-bottom: 1rem;
  line-height: 1.4;
  color: var(--light-gray);
}

.languages-used {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.language-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s, color 0.3s;
  background-color: var(--color-accent); /* Utilizando la variable */
  color: var(--white-1);
  padding: 0.25rem 0.5rem;
  border-radius: 0.65rem;
  font-size: 0.9rem;
}

.language-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: var(--color-secondary);
  border-radius: 50%;
}

.language-icon {
  font-size: 1.3rem;
  color: var(--color-primary); /* Azul claro */
}

.language-item:hover {
  transform: scale(1.1); /* Cambiar la escala en hover */
  background-color: var(--color-primary); /* Cambio de color en hover */
}

.links-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
}

.link-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s, color 0.3s;
}

.link-icon {
  color: var(--white-1); /* Color del icono */
  font-size: 20px;
}

.link-item a {
  color: var(--color-text-light); /* Gris claro */
  text-decoration: none;
  font-size: 0.9rem; /* Reducido el tamaño de fuente */
  overflow: hidden;
  white-space: nowrap; /* Evita el salto de línea */
  text-overflow: ellipsis; /* Agrega puntos suspensivos si el texto es demasiado largo */
  max-width: 100%; /* Ajusta el ancho máximo para que quepa */
}

.link-item a:hover {
  color: var(--color-primary); /* Cambio de color en hover */
}
</style>

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
          <div class="language-tag" v-for="language in repository.topLanguages" :style="{ backgroundColor: language ? bgColor : '' }">
            {{ language }}
          </div>
        </div>
        <div class="repository-link">
          <a :href="repository.html_url" target="_blank">
            <ion-icon name="logo-github" class="github-icon"></ion-icon>
            {{repository.html_url}}
          </a>
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
    }
  }
};
</script>

<style>
.flip-card {
  perspective: 1000px;
  height: 320px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
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
  border-radius: 10px; /* Redondear los bordes de ambas caras */
}

.flip-card-front {
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  color: white;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
}

.flip-card-back {
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transform: rotateY(180deg);
  flex-grow: 1;
  padding: 1rem;
  color: #333;
  font-family: 'Segoe UI', sans-serif;
}

.repository-img {
  width: 100%;
  height: auto;
  margin: 0;
  border-top-left-radius: 10px; /* Redondear la esquina superior izquierda */
  border-top-right-radius: 10px; /* Redondear la esquina superior derecha */
}

.repository-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0;
}

.project-description {
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  color: white;
}

.languages-used {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.language-tag {
  background-color: #007bff;
  color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.repository-link {
  margin-top: auto;
  text-align: center;
}

.repository-link a {
  color: #007bff;
  text-decoration: none;
  font-size: 1rem;
}

.repository-name-back {
  font-size: 1rem;
  font-weight: bold;
  margin: 1rem 0;
  color: white;
}

.github-icon {
  font-size: 20px;
  margin-right: 0.5rem;
}
</style>

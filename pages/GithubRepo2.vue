<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front rounded-xl"> <!-- Agregamos la clase rounded-t-xl -->
        <img class="repository-img border-none rounded-t-xl" src="/images/portafolio-programador.webp" :alt="repository.name"> <!-- Agregamos la clase rounded-t-xl -->
        <div class="text-center px-4 py-2">
          <a :href="repository.html_url" target="_blank" class="repository-name">{{ repository.name }}</a>
          <div class="repository-description">{{ repository.description }}</div>
        </div>
      </div>
      <div class="flip-card-back rounded-xl">
        <div class="repository-details">
          <div class="language-tag" v-for="language in repository.topLanguages" :style="{ backgroundColor: language ? bgColor : '' }">
            {{ language }}
          </div>
          <div class="star-count">
            <svg class="star-icon" aria-label="stars" viewBox="0 0 16 16" role="img">
              <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
            </svg>
            {{ repository.stargazers_count }}
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
}

.flip-card-front {
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.flip-card-back {
  background-color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transform: rotateY(180deg);
}

.repository-img {
  width: 100%;
  height: auto;
  margin: 0;
}

.repository-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  padding-left: 1rem;
}

.repository-description {
  font-size: 0.9rem;
  color: #666;
  padding-left: 1rem;
}

.language-tag {
  background-color: #999;
  color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

.star-count {
  display: flex;
  align-items: center;
  color: #333;
  font-size: 0.9rem;
}

.star-icon {
  width: 16px;
  height: 16px;
  margin-right: 0.2rem;
}
</style>

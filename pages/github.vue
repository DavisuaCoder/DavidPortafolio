<script setup>
useHead({
  title: 'Github',
})
</script>

<template>
  <article id="github" class="github active" data-page="github">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.github') }}
      </h2>
    </header>

    <section class="github-form">
        <div class="input-wrapper">
          <div
            v-for="repo in repos"
            :key="repo.id"
            class="github-repository"
          >
            <GithubReposItem
              :repository="repo"
              :bg-color="repo.language ? colors[repo.language].color : '#ffffff'"
            />
          </div>
        </div>
    </section>
  </article>
</template>

<script>
import axios from "axios";
import GithubReposItem from "./GithubRepo.vue";

export default {
  name: "GithubRepos",
  data() {
    return {
      repos: [],
      colors: {}
    };
  },
  methods: {
    getColors() {
      axios
        .get(
        "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
        )
        .then(res => (this.colors = res.data));
    },
    async getRepos() {
      try {
        const reposResponse = await axios.get("https://api.github.com/users/DavisuaCoder/repos");
        const repos = reposResponse.data
          .filter(repo => !repo.all)
          .sort((repo1, repo2) => repo2.stargazers_count - repo1.stargazers_count)
          .slice(0, 8);

        // Obtener los datos de lenguajes para cada repositorio
        const languagePromises = repos.map(repo => axios.get(repo.languages_url));
        const languageResponses = await Promise.all(languagePromises);
        const languageDataList = languageResponses.map(res => res.data);

        // Ordenar los datos de lenguajes para cada repositorio (los tres más utilizados primero)
        languageDataList.forEach((languageData, index) => {
          const sortedLanguages = Object.keys(languageData).sort(
            (a, b) => languageData[b] - languageData[a]
          );
          const topLanguages = sortedLanguages.slice(0, 3);
          repos[index].topLanguages = topLanguages;
        });

        this.repos = repos;
        console.log(this.repos);
      } catch (error) {
        console.error("Error al obtener los repositorios:", error);
      }
   }
  },
  async mounted() {
    await this.getColors();
    this.getRepos();
  },
  components: {
    GithubReposItem
  }
};
</script>
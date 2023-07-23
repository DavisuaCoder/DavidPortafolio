<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Dars Telecom
          </h4>
          <span>DEC 2022 — Current</span>
          <p class="timeline-item-desc">
            Madrid, Spain
          </p>
          <p class="timeline-text">
              Solutions Architect
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Dars Telecom
          </h4>
          <span>SEP 2022 — DEC 2022</span>
          <p class="timeline-item-desc">
            Madrid, Spain
          </p>
          <p class="timeline-text">
            Systems Engineer
          </p>
        </li>
        
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Accenture
          </h4>
          <span>JUN 2022 — SEP 2022</span>
          <p class="timeline-item-desc">
            Madrid, Spain
          </p>
          <p class="timeline-text">
            Project Management Officer
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Automoviles Aerolan
          </h4>
          <span>JUN 2021 — JUN 2022</span>
          <p class="timeline-item-desc">
            Madrid, Spain
          </p>
          <p class="timeline-text">
            Full Stack Developer 
          </p>
        </li>
      </ol>
    </section>

    <section class="skill">
      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Your Skill
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

      </ul>
    </section>
  </article>
</template>

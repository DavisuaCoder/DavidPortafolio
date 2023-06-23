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
            Empatha Boga
          </h4>
          <span>2013 — 2015</span>
          <p class="timeline-item-desc">
            Kebumen
          </p>
          <p class="timeline-text">
            Waiter & Helper
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Dapur Sambal
          </h4>
          <span>2015 — 2017</span>
          <p class="timeline-item-desc">
            Bekasi
          </p>
          <p class="timeline-text">
            Assistant Manager & Waiter
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Discord
          </h4>
          <span>2015 — Present</span>
          <p class="timeline-item-desc">
            Remote
          </p>
          <p class="timeline-text">
            Android Developer
          </p>
        </li>
        
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            ACC Super Sambal
          </h4>
          <span>2017</span>
          <p class="timeline-item-desc">
            Yogyakarta
          </p>
          <p class="timeline-text">
            Waiter
          </p>
        </li>
        
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Team SoloMid
          </h4>
          <span>2017 — 2022</span>
          <p class="timeline-item-desc">
            Hybrid
          </p>
          <p class="timeline-text">
            Moderation Staff
          </p>
        </li>
        
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            BLAST
          </h4>
          <span>2022 — Present</span>
          <p class="timeline-item-desc">
            Hybrid
          </p>
          <p class="timeline-text">
            Cybersecurity & Web Developer
          </p>
        </li>
        
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Musixmatch
          </h4>
          <span>2022 — Present</span>
          <p class="timeline-item-desc">
            Remote
          </p>
          <p class="timeline-text">
            Curator Specialist
          </p>
        </li>
      </ol>
    </section>

    <section class="skill">
      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Web Design
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              HTML
            </h5>
            <data value="100">100%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 100%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              CSS
            </h5>
            <data value="90">90%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%;" />
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              JavaScript
            </h5>
            <data value="75">75%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 75%;" />
          </div>
        </li>
        
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              C++
            </h5>
            <data value="85">85%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 85%;" />
          </div>
        </li>
        
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Kotlin
            </h5>
            <data value="85">85%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 85%;" />
          </div>
        </li>
      </ul>
    </section>
  </article>
</template>

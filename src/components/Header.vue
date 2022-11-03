<script setup lang="ts">
import { toggleDark } from '~/composables'
const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav color="black dark:#fffdf2">
    <a href="./" class="icon-btn mx-3" :title="t('button.home')">
      <div i-carbon-home />
    </a>
    <a v-if="locale == 'fr'" class="icon-btn mx-3" target="_blank" href="/cv_benoitk.pdf" aria-label="resume"
      rel="noopener" itemprop="pdf">
      <div i-carbon:generate-pdf />
    </a>
    <a v-if="locale == 'en'" class="icon-btn mx-3" target="_blank" href="/cv_benoitk_en.pdf" aria-label="resume"
      rel="noopener" itemprop="pdf">
      <div i-carbon:generate-pdf />
    </a>
    <a class="icon-btn mx-3" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </a>
    <a class="icon-btn mx-3" :title="t('button.toggle_langs')" @click="toggleLocales()">
      <div v-if="locale == 'fr'" i-twemoji:flag-france />
      <div v-if="locale == 'en'" i-twemoji:flag-united-kingdom />
    </a>
  </nav>
</template>

<style scoped>
nav {
  font-size: 2.5rem;
  margin: 2rem 1.5rem;
  position: fixed;
  right: 0;
  top: 0;
}

@media (max-width: 768px) {
  nav {
    background-color: white;
    bottom: 0;
    box-shadow: 0 0 1rem rgb(0 0 0 / 20%);
    justify-content: center;
    margin: 0;
    padding: 1rem 0;
    display: flex;
    text-align: center;
    top: auto;
    width: 100%;
  }

  .dark nav {
    background-color: var(--black);
    box-shadow: 0 0 1rem rgb(250 250 250 / 20%);
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  nav {
    background-color: white;
    bottom: 0;
    box-shadow: 0 0 1rem rgb(0 0 0 / 20%);
    font-size: 3rem;
    justify-content: center;
    margin: 0;
    padding: 1rem 0;
    display: flex;
    text-align: center;
    top: auto;
    width: 100%;
  }

  .dark nav {
    background-color: var(--black);
    box-shadow: 0 0 1rem rgb(250 250 250 / 20%);
  }
}

@media (max-width: 1180px) and (orientation: landscape) {
  nav {
    background-color: white;
    bottom: 0;
    box-shadow: 0 0 1rem rgb(0 0 0 / 20%);
    font-size: 3rem;
    justify-content: center;
    margin: 0;
    padding: 1rem 0;
    display: flex;
    text-align: center;
    top: auto;
    width: 100%;
  }

  .dark nav {
    background-color: var(--black);
    box-shadow: 0 0 1rem rgb(250 250 250 / 20%);
  }
}
</style>

<script setup lang="ts">
import { toggleDark } from '~/composables'
const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  localStorage.setItem('lang', locale.value)
}

const resumeLink = computed(() => {
  return locale.value === 'fr' ? '/cv_benoitk.pdf' : '/cv_benoitk_en.pdf'
})

</script>

<template>
  <nav color="#050505 dark:#fffdf2">
    <a href="./" class="icon-btn mx-2" :title="t('button.home')">
      <div i-carbon-home />
    </a>

    <a class="icon-btn mx-2" target="_blank" :href="resumeLink" aria-label="resume" rel="noopener" itemprop="pdf">
      <div i-carbon:generate-pdf />
    </a>

    <div class="icon-btn mx-2" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </div>
    <div class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales()">
      <div v-if="locale == 'fr'" i-twemoji:flag-france />
      <div v-if="locale == 'en'" i-twemoji:flag-united-kingdom />
    </div>
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

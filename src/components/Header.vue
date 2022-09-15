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
    <a href="./" class="icon-btn mx-2" :title="t('button.home')">
      <div i-carbon-home />
    </a>
    <a v-if="locale == 'fr'" class="icon-btn mx-2" href="/cv_benoitk.pdf" target="blank">
      <div i-carbon:generate-pdf />
    </a>
    <a v-if="locale == 'en'" class="icon-btn mx-2" href="/cv_benoitk_en.pdf" target="blank">
      <div i-carbon:generate-pdf />
    </a>
    <a class="icon-btn mx-2" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </a>
    <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
      <div v-if="locale == 'fr'" i-twemoji:flag-france />
      <div v-if="locale == 'en'" i-twemoji:flag-united-kingdom />
    </a>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  font-size: 2.5rem;
  margin: 10px 15px;
  top: 0;
  right: 0;
}

@media (max-width: 576px) {
  nav {
    box-shadow: 0 0 10px rgb(0 0 0 / 20%);
    text-align: center;
    background-color: white;
    justify-content: center;
    width: 100%;
    margin: 0;
    bottom: 0;
    padding: 5px 0px;
    top: auto;
  }

  .dark nav {
    background-color: var(--black);
    box-shadow: 0 0 10px rgb(250 250 250 / 20%);
  }
}
</style>

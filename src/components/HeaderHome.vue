<script setup lang="ts">
import { toggleDark } from '~/composables'
const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  localStorage.setItem('lang', locale.value)
}
</script>

<template>
  <nav color="#080808 dark:#fffdf2">
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
  font-size: 2.4rem;
  margin: 2rem 1.5rem;
  position: fixed;
  right: 0;
  top: 0;
}

@media (max-width: 576px) {
  nav {
    margin: 1.5rem;
  }
}
</style>

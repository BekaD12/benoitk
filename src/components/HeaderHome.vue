<script setup lang="ts">
import { toggleDark } from '~/composables'
const { t } = useI18n()
</script>

<template>
  <nav color="#050505 dark:#fffdf2">
    <div class="icon-btn mx-2" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
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

@media (max-width: 576px) {
  nav {
    margin: 1.5rem;
  }
}
</style>

<script setup lang="ts">
import { toggleDark } from '~/composables'
const { t } = useI18n()
</script>

<template>
  <nav color="black dark:#fffdf2">
    <a class="icon-btn mx-2" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
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
    margin: 5px 7.5px;
  }
}
</style>

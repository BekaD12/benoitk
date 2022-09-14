<script setup lang="ts">
import { toggleDark } from '~/composables'
const { t } = useI18n()
</script>

<template>
  <nav text="10" color="black dark:#fffdf2" position="fixed" top="0" right="0" m="10px 15px">
    <a class="icon-btn mx-2" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </a>
  </nav>
</template>

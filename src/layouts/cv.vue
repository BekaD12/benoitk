<template>
  <Header />
  <div class="resume" text="dark:white">
    <router-view />
  </div>
</template>

<style scoped>
.resume {
  padding-bottom: 30px;
}

@media (max-width: 576px) {
  .resume {
    padding: 0 25px;
    margin-bottom: 100px;
  }
}
</style>

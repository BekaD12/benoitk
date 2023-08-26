<template>
  <Header />
  <div class="resume" text="dark:#fffdf2">
    <router-view />
  </div>
</template>

<style scoped>
.resume {
  padding: 0 4.5rem;
  margin-bottom: 8rem;
}

@media (max-width: 576px) {
  .resume {
    margin-bottom: 10rem;
    padding: 0 2.5rem;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .resume {
    margin-bottom: 10rem;
    padding: 0 4.5rem;
  }
}

@media (max-width: 1180px) and (orientation: landscape) {
  .resume {
    margin-bottom: 10rem;
  }
}
</style>

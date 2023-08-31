<template>
  <Header />
  <div class="resume">
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
    padding: 0 2rem;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .resume {
    margin-bottom: 10rem;
    padding: 0 4rem;
  }
}

@media (max-width: 1180px) and (orientation: landscape) {
  .resume {
    margin-bottom: 10rem;
  }
}
</style>

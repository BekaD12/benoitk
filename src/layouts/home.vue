<template>
  <main>
    <HeaderHome />
    <div class="wrapper">
      <div class="container">
        <div class="content">
          <router-view />
          <Typing />
          <Social />
          <Experiment />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const { t } = useI18n()
</script>

<template>
  <div class="experiments-container">
    <h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="currentColor"><path d="M208 216H48a8 8 0 0 1-6.86-12.12l30.48-50.8c13.23-2.48 32-1.41 56.37 10.92c32.25 16.33 54.75 12.91 67.5 7.65l19.34 32.23A8 8 0 0 1 208 216Z" opacity=".2"/><path d="M221.69 199.77L160 96.92V40h8a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16h8v56.92L34.31 199.77A16 16 0 0 0 48 224h160a16 16 0 0 0 13.72-24.23Zm-110.83-96.52a7.93 7.93 0 0 0 1.14-4.11V40h32v59.14a7.93 7.93 0 0 0 1.14 4.11L183.36 167c-12 2.37-29.07 1.37-51.75-10.11c-15.91-8.05-31.05-12.32-45.22-12.81ZM48 208l28.54-47.58c14.25-1.73 30.31 1.85 47.82 10.72c19 9.61 35 12.88 48 12.88a69.89 69.89 0 0 0 19.55-2.7L208 208Z"/></g></svg> {{ t('experiment.title') }}
    </h2>
    <div class="experiments-content">
      <div class="bubble">
        <a href="https://aniairing.fr" target="_blank" title="Aniairing">
          <img src="/aniairing.png" alt="aniairing">
          <span>{{ t('experiment.aniairing') }}</span>
        </a>
      </div>

      <div class="bubble">
        <a href="https://pokebeka.netlify.app" target="_blank" title="PokéBeka">
          <img src="/pokebeka.png" alt="pokebeka">
          <span>{{ t('experiment.pokebeka') }}</span>
        </a>
      </div>

      <div class="bubble">
        <a href="https://setuped.netlify.app" target="_blank" title="Setuped">
          <img src="/setuped.png" alt="setuped">
          <span>{{ t('experiment.setuped') }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experiments-container {
    margin-top: 6rem;
}

h2 {
    align-items: center;
    display: flex;
    font-size: 3rem;
    font-weight: bold;
    justify-content: center;
    gap: .8rem;
}

.experiments-content {
    align-items: center;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    margin-top: 1rem;
}

 .experiments-container svg {
        width: 3.2rem;
    }

.bubble {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 0.75C1.5 1.16421 1.16421 1.5 0.75 1.5C0.335786 1.5 0 1.16421 0 0.75C0 0.335786 0.335786 0 0.75 0C1.16421 0 1.5 0.335786 1.5 0.75Z' fill='%23D7DDE4'/%3E%3C/svg%3E%0A");
    border: .2rem solid var(--border);
    border-radius: 2rem;
    flex: 1;
    height: 20rem;
    padding: 2rem;
    width: 20rem;
}

.bubble:hover {
    box-shadow: var(--shadow);
}

.bubble span {
    display: block;
    font-weight: bold;
    margin-top: .5rem;
    text-align: center;
}

img {
    margin: 0 auto;
    width: 6rem;
}

html.dark .bubble {
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 0.75C1.5 1.16421 1.16421 1.5 0.75 1.5C0.335786 1.5 0 1.16421 0 0.75C0 0.335786 0.335786 0 0.75 0C1.16421 0 1.5 0.335786 1.5 0.75Z' fill='%23fff2f280'/%3E%3C/svg%3E%0A");
}

@media (max-width: 576px) {
    .experiments-content {
        flex-direction: column;
    }

    .experiments-container {
        margin-top: 8rem;
        padding-bottom: 4rem;
    }

    .experiments-container svg {
        width: 2.5rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    .bubble {
      flex: auto;
        width: 100%;
        height: 15rem;
        padding: 1.6rem;
    }
}
</style>

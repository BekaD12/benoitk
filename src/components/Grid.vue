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
  <div class="max-w-[1280px] mx-auto xl:my-20 container">
    <div class="grid-item" style="grid-area: 1 / 1 / span 1 / span 3;">
      <Typing />
    </div>

    <div class="grid-item" style="grid-area: 1 / 4 / span 1 / span 1;">
      <a
        class="mail" target="_blank" href="mailto:bkourot@gmail.com" aria-label="mail" rel="noopener"
        title="bkourot@gmail.com"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd" clip-rule="evenodd"
            d="M4 5C3.45228 5 3 5.45228 3 6V18C3 18.5477 3.45228 19 4 19H20C20.5477 19 21 18.5477 21 18V6C21 5.45228 20.5477 5 20 5H4ZM1 6C1 4.34772 2.34772 3 4 3H20C21.6523 3 23 4.34772 23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6Z"
            fill="#080808"
          />
          <path
            fill-rule="evenodd" clip-rule="evenodd"
            d="M1.18076 5.42656C1.49748 4.97411 2.12101 4.86408 2.57346 5.18079L12 11.7794L21.4265 5.18079C21.879 4.86408 22.5025 4.97411 22.8192 5.42656C23.1359 5.87901 23.0259 6.50254 22.5735 6.81926L12.5735 13.8193C12.2291 14.0603 11.7709 14.0603 11.4265 13.8193L1.42653 6.81926C0.974083 6.50254 0.864048 5.87901 1.18076 5.42656Z"
            fill="#080808"
          />
        </svg>
      </a>
    </div>

    <div class="grid-item" style="grid-area: 2 / 3 / span 2 / span 1;">
      <div class="experiment-content">
        <a class="column" href="https://setuped.netlify.app" target="_blank" title="Setuped">
          <img src="/setuped.png" alt="setuped">
          <span>{{ t('experiment.setuped') }}</span>
        </a>
      </div>
    </div>

    <div class="grid-item" style="grid-area: 2 / 1 / span 1 / span 2;">
      <div class="experiment-content">
        <a href="https://aniairing.fr" target="_blank" title="Aniairing">
          <img src="/aniairing.png" alt="aniairing">
          <span>{{ t('experiment.aniairing') }}</span>
        </a>
      </div>
    </div>

    <div class="grid-item" style="grid-area: 2 / 4 / span 1 / span 1;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd" clip-rule="evenodd"
          d="M3.87868 1.87868C4.44129 1.31607 5.20435 1 6 1H14.5C14.7652 1 15.0196 1.10536 15.2071 1.29289L20.7071 6.79289C20.8946 6.98043 21 7.23478 21 7.5V20C21 20.7957 20.6839 21.5587 20.1213 22.1213C19.5587 22.6839 18.7957 23 18 23H4C3.44772 23 3 22.5523 3 22C3 21.4477 3.44772 21 4 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V7.91421L14.0858 3H6C5.73478 3 5.48043 3.10536 5.29289 3.29289C5.10536 3.48043 5 3.73478 5 4V8C5 8.55228 4.55228 9 4 9C3.44772 9 3 8.55228 3 8V4C3 3.20435 3.31607 2.44129 3.87868 1.87868Z"
          fill="#080808"
        />
        <path
          fill-rule="evenodd" clip-rule="evenodd"
          d="M14 1C14.5523 1 15 1.44772 15 2V7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H14C13.4477 9 13 8.55228 13 8V2C13 1.44772 13.4477 1 14 1Z"
          fill="#080808"
        />
        <path
          d="M6.042 18.081C5.502 18.081 5.019 17.973 4.593 17.757C4.167 17.541 3.834 17.241 3.594 16.857C3.36 16.473 3.243 16.038 3.243 15.552C3.243 15.066 3.36 14.634 3.594 14.256C3.834 13.872 4.167 13.575 4.593 13.365C5.019 13.149 5.502 13.041 6.042 13.041C6.594 13.041 7.071 13.161 7.473 13.401C7.875 13.635 8.16 13.962 8.328 14.382L7.005 15.057C6.783 14.619 6.459 14.4 6.033 14.4C5.727 14.4 5.472 14.502 5.268 14.706C5.07 14.91 4.971 15.192 4.971 15.552C4.971 15.918 5.07 16.206 5.268 16.416C5.472 16.62 5.727 16.722 6.033 16.722C6.459 16.722 6.783 16.503 7.005 16.065L8.328 16.74C8.16 17.16 7.875 17.49 7.473 17.73C7.071 17.964 6.594 18.081 6.042 18.081Z"
          fill="#080808"
        />
        <path
          d="M14.023 13.122L12.007 18H10.243L8.23596 13.122H9.99096L11.161 16.101L12.394 13.122H14.023Z"
          fill="#080808"
        />
      </svg>
    </div>

    <div class="grid-item" style="grid-area: 3 / 4 / span 1 / span 1;background-color: #252a2e;">
      <a
        class="github" target="_blank" href="https://github.com/BekaD12" aria-label="linkedin" rel="noopener"
        title="github : benoitkourot"
      >
        <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="github">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
        </svg>
      </a>
    </div>

    <div class="grid-item" style="display: block; grid-area: 3 / 1 / span 1 / span 2;">
      <div class="experiment-content">
        <a href="https://pokebeka.netlify.app" target="_blank" title="PokéBeka">
          <img src="/pokebeka.png" alt="pokebeka">
          <span>{{ t('experiment.pokebeka') }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  margin-top: 10rem;
  font-size: 2rem;
    display: grid;
    grid-template-columns: repeat(4, minmax(188px, 1fr));
    gap: 2rem;
    --bento-row-height:auto;
    grid-template-rows: repeat(3, minmax(var(--bento-row-height), 1fr));
}
.grid-item{
    padding: 6rem 2.5rem;
    overflow: hidden;
    background: var(--background);
    box-shadow: var(--shadow);
    transition: all 500ms ease 0s;
    /* border: 1px solid var(--border); */
    border-radius: var(--item-radius);
    display: flex;
    align-items: center;
    justify-content: center;
}

.grid-item svg{
  width: 8rem;
  height: 8rem;
}

.experiment-content a{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.experiment-content a.column{flex-direction: column;}
.experiment-content img{
  width: 15rem;
}

.github{
  fill:#fff;
}
</style>

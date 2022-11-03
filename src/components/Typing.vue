<script setup>
const { t } = useI18n()
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const timeout = 80
let i
let wrapper

async function write(text) {
  let index = 0
  while (index < text.length) {
    await sleep(timeout)
    index++
    wrapper.innerHTML = text.substring(0, index)
  }
}

async function erase() {
  while (wrapper.textContent.length) {
    await sleep(timeout)
    wrapper.textContent = wrapper.textContent.substring(0, wrapper.textContent.length - 2)
  }
}

async function writingAll(stringTarget, container) {
  wrapper = document.querySelector(`[${container}]`)
  const stringsContainer = document.getElementsByClassName(stringTarget)

  while (wrapper) {
    for (i = 0; i < stringsContainer.length; i++) {
      const string = stringsContainer[i].textContent
      await write(string)
      await sleep(800)
      await erase()
      await sleep(800)
    }
  }
}

onMounted(() => {
  writingAll('item', 'data-text')
})
onUnmounted(() => {
  // writingAll('item', 'data-text')
})
</script>

<template>
  <div ref="wrapper" class="wrapper">
    <div data-text class="data-text" />
    <span class="item">Développeur frontend</span>
    <span class="item">Développeur backend</span>
    <span class="item">Développeur full stack</span>
    <h1>Benoit Kourotchkine</h1>

    <div class="social">
      <div>
        <a class="cv" href="./cv" aria-label="resume" rel="noopener" title="curriculum vitae">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M3.87868 1.87868C4.44129 1.31607 5.20435 1 6 1H14.5C14.7652 1 15.0196 1.10536 15.2071 1.29289L20.7071 6.79289C20.8946 6.98043 21 7.23478 21 7.5V20C21 20.7957 20.6839 21.5587 20.1213 22.1213C19.5587 22.6839 18.7957 23 18 23H4C3.44772 23 3 22.5523 3 22C3 21.4477 3.44772 21 4 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V7.91421L14.0858 3H6C5.73478 3 5.48043 3.10536 5.29289 3.29289C5.10536 3.48043 5 3.73478 5 4V8C5 8.55228 4.55228 9 4 9C3.44772 9 3 8.55228 3 8V4C3 3.20435 3.31607 2.44129 3.87868 1.87868Z"
              fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M14 1C14.5523 1 15 1.44772 15 2V7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H14C13.4477 9 13 8.55228 13 8V2C13 1.44772 13.4477 1 14 1Z"
              fill="black" />
            <path
              d="M6.042 18.081C5.502 18.081 5.019 17.973 4.593 17.757C4.167 17.541 3.834 17.241 3.594 16.857C3.36 16.473 3.243 16.038 3.243 15.552C3.243 15.066 3.36 14.634 3.594 14.256C3.834 13.872 4.167 13.575 4.593 13.365C5.019 13.149 5.502 13.041 6.042 13.041C6.594 13.041 7.071 13.161 7.473 13.401C7.875 13.635 8.16 13.962 8.328 14.382L7.005 15.057C6.783 14.619 6.459 14.4 6.033 14.4C5.727 14.4 5.472 14.502 5.268 14.706C5.07 14.91 4.971 15.192 4.971 15.552C4.971 15.918 5.07 16.206 5.268 16.416C5.472 16.62 5.727 16.722 6.033 16.722C6.459 16.722 6.783 16.503 7.005 16.065L8.328 16.74C8.16 17.16 7.875 17.49 7.473 17.73C7.071 17.964 6.594 18.081 6.042 18.081Z"
              fill="black" />
            <path d="M14.023 13.122L12.007 18H10.243L8.23596 13.122H9.99096L11.161 16.101L12.394 13.122H14.023Z"
              fill="black" />
          </svg>
        </a>
      </div>

      <div>
        <a class="mail" target="_blank" href="mailto:bkourot@gmail.com" aria-label="mail" rel="noopener"
          title="bkourot@gmail.com">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M4 5C3.45228 5 3 5.45228 3 6V18C3 18.5477 3.45228 19 4 19H20C20.5477 19 21 18.5477 21 18V6C21 5.45228 20.5477 5 20 5H4ZM1 6C1 4.34772 2.34772 3 4 3H20C21.6523 3 23 4.34772 23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6Z"
              fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1.18076 5.42656C1.49748 4.97411 2.12101 4.86408 2.57346 5.18079L12 11.7794L21.4265 5.18079C21.879 4.86408 22.5025 4.97411 22.8192 5.42656C23.1359 5.87901 23.0259 6.50254 22.5735 6.81926L12.5735 13.8193C12.2291 14.0603 11.7709 14.0603 11.4265 13.8193L1.42653 6.81926C0.974083 6.50254 0.864048 5.87901 1.18076 5.42656Z"
              fill="black" />
          </svg>
        </a>
      </div>

      <div>
        <a class="linkedin" target="_blank" href="https://www.linkedin.com/in/benoitkourot/" aria-label="linkedin"
          rel="noopener" title="linkedin : benoitkourot">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M16 9C14.6739 9 13.4021 9.52678 12.4645 10.4645C11.5268 11.4021 11 12.6739 11 14V20H13V14C13 13.2043 13.3161 12.4413 13.8787 11.8787C14.4413 11.3161 15.2043 11 16 11C16.7957 11 17.5587 11.3161 18.1213 11.8787C18.6839 12.4413 19 13.2043 19 14V20H21V14C21 12.6739 20.4732 11.4021 19.5355 10.4645C18.5979 9.52678 17.3261 9 16 9ZM16 7C14.1435 7 12.363 7.7375 11.0503 9.05025C9.7375 10.363 9 12.1435 9 14V21C9 21.5523 9.44772 22 10 22H14C14.5523 22 15 21.5523 15 21V14C15 13.7348 15.1054 13.4804 15.2929 13.2929C15.4804 13.1054 15.7348 13 16 13C16.2652 13 16.5196 13.1054 16.7071 13.2929C16.8946 13.4804 17 13.7348 17 14V21C17 21.5523 17.4477 22 18 22H22C22.5523 22 23 21.5523 23 21V14C23 12.1435 22.2625 10.363 20.9497 9.05025C19.637 7.7375 17.8565 7 16 7Z"
              fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1 9C1 8.44772 1.44772 8 2 8H6C6.55228 8 7 8.44772 7 9V21C7 21.5523 6.55228 22 6 22H2C1.44772 22 1 21.5523 1 21V9ZM3 10V20H5V10H3Z"
              fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5C4.55228 5 5 4.55228 5 4C5 3.44772 4.55228 3 4 3ZM1 4C1 2.34315 2.34315 1 4 1C5.65685 1 7 2.34315 7 4C7 5.65685 5.65685 7 4 7C2.34315 7 1 5.65685 1 4Z"
              fill="black" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const writeTimeout = 80
const eraseTimeout = 60
const animationDelay = 800

let i
let wrapper

async function write(text) {
  for (let index = 0; index <= text.length; index++) {
    await sleep(writeTimeout)
    wrapper.innerHTML = text.substring(0, index)
  }
}

async function erase() {
  let textLength = wrapper.textContent.length
  while (textLength > 0) {
    await sleep(eraseTimeout)
    textLength = Math.max(0, textLength - 2)
    wrapper.textContent = wrapper.textContent.substring(0, textLength)
  }
}

async function writingAll(stringsContainer, container) {
  wrapper = document.querySelector(`[${container}]`)

  while (true) {
    for (i = 0; i < stringsContainer.length; i++) {
      const string = stringsContainer[i].textContent
      await write(string)
      await sleep(animationDelay)
      await erase()
      await sleep(animationDelay)
    }
  }
}

const throttledWritingAll = throttle(writingAll, animationDelay)

onMounted(() => {
  const stringsContainer = document.getElementsByClassName('item')
  throttledWritingAll(stringsContainer, 'data-text')
})

function throttle(func, delay) {
  let lastCall = 0
  return function(...args) {
    const now = new Date().getTime()
    if (now - lastCall < delay)
      return

    lastCall = now
    func(...args)
  }
}
</script>

<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <div data-text class="data-text" />
      <span class="item">{{ t('home.frontend') }}</span>
      <span class="item">{{ t('home.backend') }}</span>
      <span class="item">{{ t('home.fullstack') }}</span>
      <h1>Benoit Kourotchkine</h1>
      <Social />
      <Experiment />
    </div>
  </div>
</template>

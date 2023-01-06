<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header class="container container-info">
    <nav>
      <div class="flex items-center">
        <span class="icn" i-carbon-email />
        <span class="mail">bkourot@gmail.com</span>
      </div>
      <div class="flex items-center">
        <span class="icn" i-carbon-location-filled />
        <span class="address">91230 Montgeron</span>
      </div>
    </nav>
  </header>

  <div class="container container-title">
    <div class="container-inner">
      <div class="spacing">
        <h1 class="name">
          {{ t('cv.name') }}
        </h1>
        <h2 class="position">
          {{ t('cv.position') }}
        </h2>
      </div>
    </div>
  </div>

  <div class="container container-description">
    <p class="description">{{ t('home.description') }}</p>
  </div>

  <div class="container container-skills">
    <div class="container-inner">
      <div class="spacing">
        <h3>
          {{ t('cv.expertise') }}
        </h3>
        <div class="data">
          <div class="sizer">
            <div>
              <h4>Front-end</h4>
              <ul>
                <li>
                  Languages - HTML / CSS / JavaScript
                </li>
                <li>
                  Framework CSS - UnoCSS / WindiCSS
                </li>
                <li>
                  Framework JS - Vue.js / Vite
                </li>
                <li>
                  Templating - Vitesse
                </li>
                <li>
                  Versioning - GitHub / SVN
                </li>
                <li>
                  Library - jQuery
                </li>
              </ul>
            </div>
            <div class="spacing">
              <h4>{{ t('cv.software') }}</h4>
              <ul>
                <li>
                  Development - VScode / PhpStorm / Webstorm / IntelliJ
                </li>
                <li>
                  Collaboration - Zeplin / Figma
                </li>
                <li>
                  Management - Jira / Trello / Airtable
                </li>
              </ul>
            </div>
          </div>

          <div class="sizer">
            <div>
              <h4>Back-end</h4>
              <ul>
                <li>
                  Languages - PHP(MVC) / Java
                </li>
                <li>
                  Database - MySQL / MariaDB
                </li>
                <li>
                  Framework - Twig
                </li>
                <li>
                  Templating - Liquid / Twig / Wordpress /<br> Freemarker
                </li>
                <li>
                  Utility - Khoros Studio
                </li>
              </ul>
            </div>
            <div class="spacing">
              <h4>
                {{ t('cv.os') }}
              </h4>
              <ul>
                <li>macOS / Windows</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container container-experiences">
    <div class="container-inner">
      <div class="spacing data">
        <div class="sizer">
          <h3>
            {{ t('cv.work-experience') }}
          </h3>

          <div class="spacer">
            <div class="info">
              <h4>{{ t('cv.shopify-title') }}</h4>
              <span>{{ t('month.september') }} 2021 - {{ t('month.april') }} 2022</span>
            </div>
            <h5>Freelance</h5>
            <ul>
              <li>{{ t('cv.shopify-desc') }}</li>
            </ul>
          </div>

          <div class="spacer">
            <div class="info">
              <h4>{{ t('cv.andafter-title') }}</h4>
              <span>{{ t('month.january') }} 2018 - {{ t('month.september') }} 2021</span>
            </div>
            <h5>And After</h5>
            <ul>
              <li>{{ t('cv.andafter-desc-1') }}</li>
              <li>{{ t('cv.andafter-desc-2') }}</li>
              <li>{{ t('cv.andafter-desc-3') }}</li>
              <li>{{ t('cv.andafter-desc-4') }}</li>
              <li>{{ t('cv.andafter-desc-5') }}</li>
            </ul>
          </div>

          <div class="spacer">
            <div class="info">
              <h4>{{ t('cv.zara-title') }}</h4>
              <span>2012 - 2016</span>
            </div>
            <h5>Zara France</h5>
            <ul>
              <li>{{ t('cv.zara-desc') }}</li>
            </ul>
          </div>
        </div>

        <div class="sizer">
          <h3> {{ t('cv.education') }}</h3>

          <div class="spacer">
            <div class="info">
              <h4>{{ t('cv.vue-title') }}</h4>
              <span>2022</span>
            </div>
            <p>
              {{ t('cv.vue-desc') }}
            </p>
          </div>

          <div class="spacer">
            <div class="info">
              <h4>3W Academy Paris 18e</h4>
              <span>2017</span>
            </div>
            <p>
              Titre RNCP niveau 3
            </p>
            <p>
              Développeur intégrateur en réalisation d’applications web
            </p>
          </div>

          <div class="spacer">
            <div class="info">
              <h4>Université Evry Val d’Essonne</h4>
              <span>2012</span>
            </div>
            <span>Licence mention STAPS première année</span>
          </div>

          <div class="spacer">
            <div class="info">
              <h4>Institut Saint Pierre Brunoy</h4>
              <span>2012</span>
            </div>
            <span>Baccalauréat professionnel de comptabilité</span>
          </div>

          <div class="spacer">
            <div class="info">
              <h4>Institut Saint Pierre Brunoy</h4>
              <span>2011</span>
            </div>
            <span>Brevet d’études professionnelles métiers de la comptabilité</span>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div class="container container-hobbies">
    <div class="container-inner">
      <div class="spacing data">
        <div class="sizer">
          <h3>
            {{ t('cv.hobbies') }}
          </h3>
          <p>{{ t('cv.hobbies-list') }}</p>
        </div>

        <div class="sizer">
          <h3>
            {{ t('cv.languages') }}
          </h3>
          <p>{{ t('cv.languages-fr') }}</p>
          <p>{{ t('cv.languages-en') }}</p>
          <p>{{ t('cv.languages-es') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '~/styles/cv.css';
</style>

<route lang="yaml">
meta:
  layout: cv
</route>

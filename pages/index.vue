<template>
  <div class="pt-20">
    <div class="flex items-center justify-center mx-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="md:col-span-3 pt-4 px-10 mx-auto">
          <img class="object-contain m-50" src="/banner-small.png" />
        </div>

        <div class="md:col-span-3 m-10">
          <div
            class="flex-grow bg-gray-light bg-opacity-80 p-5 text-center rounded-lg"
          >
            <nuxt-content
              class="prose prose-xl p-5 max-w-none text-center"
              :document="homePage"
            />
          </div>
        </div>

        <div class="col-span-1">
          <div
            class="flex-grow bg-gray-light bg-opacity-80 p-5 text-center rounded-lg"
          >
            <img class="object-contain mx-auto" src="/mairie.jpg" />
            <nuxt-content
              class="prose prose-lg p-5 text-center"
              :document="ceremonyPage"
            />
          </div>
        </div>

        <div class="col-span-1">
          <div
            class="flex-grow bg-gray-light bg-opacity-80 prose p-5 text-center rounded-lg"
          >
            <img class="object-contain mx-auto" src="/castelroc.jpg" />
            <nuxt-content
              class="prose prose-lg p-5 text-center"
              :document="champagnePage"
            />
          </div>
        </div>

        <div class="col-span-1">
          <div
            class="flex-grow bg-gray-light bg-opacity-80 prose p-5 text-center rounded-lg"
          >
            <img class="object-contain mx-auto" src="/villa_eva.jpg" />
            <nuxt-content
              class="prose prose-lg p-5 text-center"
              :document="receptionPage"
            />
          </div>
        </div>

        <div class="md:col-span-3 m-2">
          <div
            class="flex-grow bg-gray-light bg-opacity-80 p-5 text-center rounded-lg"
          >
            <img class="object-contain mx-auto" src="/menton.jpg" />
            <nuxt-content
              class="prose prose-xl p-5 max-w-none text-center"
              :document="accommodationPage"
            />
          </div>
        </div>

        <div class="md:col-span-3 m-2">
          <div
            class="flex-grow bg-gray-light bg-opacity-80 p-5 text-center rounded-lg"
          >
            <img class="object-contain mx-auto" src="/nice-airport.jpg" />
            <nuxt-content
              class="prose prose-xl p-5 max-w-none text-center"
              :document="transportPage"
            />
          </div>
        </div>

        <div class="md:col-span-3 m-2">
          <div
            class="flex-grow bg-gray-light bg-opacity-80 p-5 text-center rounded-lg"
          >
            <nuxt-content
              class="prose prose-xl p-5 max-w-none text-center"
              :document="whatsappPage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData(context) {
    const { $content, app } = context

    const locale = app.i18n.locale

    const homePath = `${app.i18n.locale}/home`
    const thursdayPath = `${app.i18n.locale}/home_thursday`
    const accommodationPath = `${app.i18n.locale}/home_accommodation`
    const transportPath = `${app.i18n.locale}/home_transport`
    const ceremonyPath = `${app.i18n.locale}/home_ceremony`
    const champagnePath = `${app.i18n.locale}/home_champagne`
    const rceceptionPath = `${app.i18n.locale}/home_reception`
    const whatsappPath = `${app.i18n.locale}/home_whatsapp`

    // const posts = await $content(`${app.i18n.locale}/blog'`).fetch()

    const homePage = await $content(homePath).fetch()
    const thursdayPage = await $content(thursdayPath).fetch()
    const accommodationPage = await $content(accommodationPath).fetch()
    const transportPage = await $content(transportPath).fetch()
    const ceremonyPage = await $content(ceremonyPath).fetch()
    const champagnePage = await $content(champagnePath).fetch()
    const receptionPage = await $content(rceceptionPath).fetch()
    const whatsappPage = await $content(whatsappPath).fetch()

    return {
      locale,
      homePage,
      thursdayPage,
      accommodationPage,
      transportPage,
      ceremonyPage,
      champagnePage,
      receptionPage,
      whatsappPage,
    }
  },
})
</script>

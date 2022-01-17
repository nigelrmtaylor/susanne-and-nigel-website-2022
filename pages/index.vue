<template>
  <div class="pt-20">
    <div class="flex items-center justify-center mx-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="md:col-span-3 pt-4 px-10 mx-auto">
          <img class="object-contain m-50" src="/banner-small.png" />
        </div>

        <div class="md:col-span-3 m-10">
          <div
            class="flex-grow bg-lightpurple bg-opacity-80 p-5 text-center rounded-lg"
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
            <!-- <div class="bg-midpurple"> -->
            <img class="object-fit w-full" src="/mairie.jpg" />
            <!-- </div> -->
            <nuxt-content
              class="prose lg:prose-lg p-5 text-center"
              :document="ceremonyPage"
            />
          </div>
        </div>

        <div class="col-span-1">
          <div
            class="flex-grow bg-gray-light bg-opacity-80 p-5 text-center rounded-lg"
          >
            <!-- <div class="bg-midpurple"> -->
            <img class="object-fit w-full" src="/castelroc.jpg" />
            <!-- </div> -->
            <nuxt-content
              class="prose lg:prose-lg p-5 text-center"
              :document="champagnePage"
            />
          </div>
        </div>

        <div class="col-span-1">
          <div
            class="flex-grow bg-gray-light bg-opacity-80 p-5 text-center rounded-lg"
          >
            <!-- <div class="bg-midpurple"> -->
            <img class="object-fit w-full" src="/villa_eva.jpg" />
            <!-- </div> -->
            <nuxt-content
              class="prose lg:prose-lg p-5 text-center"
              :document="receptionPage"
            />
          </div>
        </div>

        <div class="md:col-span-3 m-2">
          <div
            class="flex-grow bg-gray-light bg-opacity-80 p-5 text-center rounded-lg"
          >
            <!-- <div class="bg-midgreen"> -->
            <!-- <img
                class="object-fit w-full filter grayscale contrast-150 brightness-100 mix-blend-multiply"
                src="/menton.jpg"
              /> -->
            <img class="object-fit w-full" src="/menton.jpg" />
            <!-- </div> -->
            <nuxt-content
              class="prose lg:prose-xl p-5 max-w-none text-left"
              :document="accommodationPage"
            />
          </div>
        </div>

        <div class="md:col-span-3 m-2">
          <div
            class="flex-grow bg-gray-light bg-opacity-80 p-5 text-center rounded-lg"
          >
            <!-- <div class="bg-midpurple"> -->

            <!-- </div> -->
            <nuxt-content
              class="prose lg:prose-xl p-5 max-w-none text-left"
              :document="transportPage"
            />
          </div>
        </div>

        <div class="md:col-span-3 m-2">
          <div
            class="flex-grow bg-gray-light bg-opacity-80 p-5 text-center rounded-lg"
          >
            <nuxt-content
              class="prose lg:prose-xl p-5 max-w-none text-center"
              :document="whatsappPage"
            />
          </div>
        </div>

        <div class="md:col-span-3 m-2">
          <div
            class="flex-grow bg-gray-light bg-opacity-80 p-5 text-center rounded-lg"
          >
            <nuxt-content
              class="prose lg:prose-xl p-5 max-w-none text-center"
              :document="presentsPage"
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

    const homePath = `${locale}/home`
    const thursdayPath = `${locale}/home_thursday`
    const accommodationPath = `${locale}/home_accommodation`
    const transportPath = `${locale}/home_transport`
    const ceremonyPath = `${locale}/home_ceremony`
    const champagnePath = `${locale}/home_champagne`
    const receptionPath = `${locale}/home_reception`
    const whatsappPath = `${locale}/home_whatsapp`
    const presentsPath = `${locale}/home_presents`

    // const posts = await $content(`${app.i18n.locale}/blog'`).fetch()

    const homePage = await $content(homePath).fetch()
    const thursdayPage = await $content(thursdayPath).fetch()
    const accommodationPage = await $content(accommodationPath).fetch()
    const transportPage = await $content(transportPath).fetch()
    const ceremonyPage = await $content(ceremonyPath).fetch()
    const champagnePage = await $content(champagnePath).fetch()
    const receptionPage = await $content(receptionPath).fetch()
    const whatsappPage = await $content(whatsappPath).fetch()
    const presentsPage = await $content(presentsPath).fetch()

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
      presentsPage,
    }
  },
})
</script>

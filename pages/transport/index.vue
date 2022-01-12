<template>
  <div class="pt-16">
    <div class="flex items-center justify-center mx-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="md:col-span-3 m-2">
          <div class="flex-grow bg-gray-light bg-opacity-80 p-5 rounded-lg">
            <!-- <img
              class="object-contain mx-auto w-f"
              src="/nice-airport.jpg"
            /> -->
            <nuxt-content
              class="prose lg:prose-xl p-5 max-w-none"
              :document="page"
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
    const path = `${app.i18n.locale}/transport`

    const page = await $content(path).fetch()

    return {
      locale,
      page,
      path,
    }
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

/* .title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
} */

/* .subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>

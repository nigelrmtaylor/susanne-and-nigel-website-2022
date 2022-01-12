<template>
  <div class="pt-20">
    <div class="flex items-center justify-center mx-4">
      <div class="flex-grow bg-gray-light bg-opacity-80 p-5 rounded-lg">
        <nuxt-content
          class="prose lg:prose-xl p-5 max-w-none"
          :document="page"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData(context) {
    const { $content, app, params } = context

    const locale = app.i18n.locale
    const { slug } = params
    const path = `${locale}/${slug}`
    const page = await $content(path).fetch()

    return {
      locale,
      page,
      path,
    }
  },
})
</script>

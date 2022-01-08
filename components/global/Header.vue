<template>
  <header
    class="bg-accent z-50 bg-opacity-100 h-5px p-2 border-b-2 border-gray-200"
  >
    <div class="mx-auto flex justify-between items-center">
      <div class="right flex justify-start items-center">
        <Logo class="w-80 h-8 mr-3" />
      </div>

      <div class="left self-end">
        <ul class="font-serif flex lang-switch justify-around">
          <li class="mr-4 text-green">
            <nuxt-link class="text-md ..." :to="localePath('/')">
              {{ $t('home') }}
            </nuxt-link>
          </li>
          <li class="mr-4 text-green">
            <nuxt-link class="text-md ..." :to="localePath('events')">
              {{ $t('events') }}
            </nuxt-link>
          </li>

          <li class="mr-4 text-green">
            <nuxt-link class="text-md ..." :to="localePath('transport')">
              {{ $t('transport') }}
            </nuxt-link>
          </li>

          <li class="mr-4 text-green">
            <nuxt-link class="text-md ..." :to="localePath('accommodation')">
              {{ $t('accommodation') }}
            </nuxt-link>
          </li>

          <li class="mr-4 text-green" font-sans>
            <nuxt-link class="text-md ..." :to="localePath('faq')">
              {{ $t('faq') }}
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="left self-end">
        <ul class="flex lang-switch justify-around">
          <li v-if="$i18n.locale !== 'en'" class="mr-4 font-serif text-green">
            <nuxt-link class="text-md ..." :to="switchLocalePath('en')">
              EN
            </nuxt-link>
          </li>
          <li v-else class="mr-4 text-green font-serif">
            <strong>EN</strong>
          </li>
          <li v-if="$i18n.locale !== 'de'" class="mr-4 font-serif text-green">
            <nuxt-link class="text-md ..." :to="switchLocalePath('de')">
              DE
            </nuxt-link>
          </li>
          <li v-else class="mr-4 font-serif text-green">
            <strong>DE</strong>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.link {
  font-family: 'Princess Sofia', cursive;
}
</style>

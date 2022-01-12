<template>
  <header class="bg-whiteish z-50 bg-opacity-100 h-5px p-2">
    <div class="mx-auto flex flex-wrap justify-between items-center">
      <nuxt-link
        class="hidden md:block font-sans text-md lg:text-xl text-green hover:text-purple active:font-bold ..."
        :to="localePath('/')"
      >
        Susanne & Nigel
      </nuxt-link>

      <div class="left self-end">
        <ul class="flex lang-switch justify-around font-serif">
          <li class="mr-4 text-green">
            <nuxt-link
              class="text-md lg:text-lg hover:text-purple hover:underline active:font-bold ..."
              :to="localePath('/')"
            >
              {{ $t('home') }}
            </nuxt-link>
          </li>
          <li class="mr-4 text-green">
            <nuxt-link
              class="text-md lg:text-lg hover:text-purple hover:underline ..."
              :to="localePath('events')"
            >
              {{ $t('events') }}
            </nuxt-link>
          </li>

          <li class="mr-4 text-green">
            <nuxt-link
              class="text-md lg:text-lg hover:text-purple hover:underline ..."
              :to="localePath('transport')"
            >
              {{ $t('transport') }}
            </nuxt-link>
          </li>

          <li class="mr-4 text-green">
            <nuxt-link
              class="text-md lg:text-lg hover:text-purple hover:underline ..."
              :to="localePath('accommodation')"
            >
              {{ $t('accommodation') }}
            </nuxt-link>
          </li>

          <li class="mr-4 text-green" font-sans>
            <nuxt-link
              class="text-md lg:text-lg hover:text-purple hover:underline ..."
              :to="localePath('faq')"
            >
              {{ $t('faq') }}
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="left self-end">
        <ul class="flex lang-switch justify-around">
          <li v-if="$i18n.locale !== 'en'" class="mr-4 font-serif text-green">
            <nuxt-link
              class="text-md lg:text-lg hover:text-purple hover:underline ..."
              :to="switchLocalePath('en')"
            >
              EN
            </nuxt-link>
          </li>

          <li v-else class="mr-4 text-green lg:text-lg font-serif font-black">
            EN
          </li>
          <li v-if="$i18n.locale !== 'de'" class="mr-4 font-serif text-green">
            <nuxt-link
              class="text-md lg:text-lg hover:text-purple hover:underline ..."
              :to="switchLocalePath('de')"
            >
              DE
            </nuxt-link>
          </li>
          <li v-else class="mr-4 font-serif lg:text-lg text-green font-bold">
            DE
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

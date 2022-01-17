<template>
  <iframe
    :src="iframeSource"
    :width="width"
    :height="height"
    class="m-2"
    :class="{
      'float-left': floatLeft,
      'float-right': floatRight,
      'mx-auto': floatCenter,
    }"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },

    width: {
      type: Number,
      required: true,
    },

    height: {
      type: Number,
      required: true,
    },

    floatRight: {
      type: Boolean,
      required: false,
      default: false,
    },

    floatLeft: {
      type: Boolean,
      required: false,
      default: false,
    },

    floatCenter: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      mapId: null,
    }
  }, // props

  async fetch() {
    console.log('fetch')

    console.log('$context', this.$nuxt.context)
    console.log('$i18n', this.$nuxt.context?.i18n)
    //    console.log('context', context)
    //    const { $content, app } = context

    const locale = this.$nuxt.context?.i18n?.locale
    console.log('LOCALE', locale)
    const path = `${locale}/${this.name}`
    console.log('path', path)

    const page = await this.$nuxt.$content(path).fetch()
    console.log('page', page)

    const body = page?.body
    console.log('body', body)

    const children = body?.children
    console.log('children', children)

    const firstChild = children ? children[0] : null
    console.log('firstChild', firstChild)

    const firstChildChildren = firstChild?.children
    console.log('firstChildChildren', firstChildChildren)

    const firstChildChildrenFirstChild = firstChildChildren
      ? firstChildChildren[0]
      : null

    console.log('firstChildChildrenFirstChild', firstChildChildrenFirstChild)
    const mapId = firstChildChildrenFirstChild?.value

    console.log('mapId', mapId)

    this.mapId = mapId

    return {
      locale,
      mapId,
    }
  }, // asyncData

  computed: {
    iframeSource() {
      const url = `https://www.google.com/maps/d/embed?mid=${this.mapId}`
      console.log('url', url)
      return url
    },
  }, // computed

  methods: {
    imgSrc() {
      try {
        return require(`~/assets/images/${this.src}`)
      } catch (error) {
        return null
      }
    },
  },
}
</script>

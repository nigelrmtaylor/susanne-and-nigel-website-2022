<template>
  <img
    :src="imgSrc()"
    :alt="alt"
    class="p-2"
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
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
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

  computed: {
    imagePath() {
      return this.imgSrc()
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

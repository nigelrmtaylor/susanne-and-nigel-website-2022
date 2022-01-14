<template>
  <div
    class="w-screen"
    style="background-image: url(/monaco-background-small.jpg)"
  >
    <Header class="fixed w-screen" />
    <Nuxt class="h-full w-screen" />
  </div>
</template>

<style>
/*@import url('https://fonts.googleapis.com/css2?family=Macondo&family=Princess+Sofia&display=swap');*/

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    appHeader: Header
  }
};
</script>

<style>
:root {
  --blue: hsla(195, 100%, 95%, 1);
  --water: hsla(195, 56%, 48%, 1);
  --red: hsla(13, 69%, 50%, 1);
  --orange: hsla(31, 100%, 54%, 1);
  --green: hsla(143, 85%, 50%, 1);
  font-size: calc(1vw + 1vh + 0.5vmin);
}

html {
  padding: 0;
  margin: 0;
}

body {
  padding: 0;
  margin: 0;
  background-color: var(--blue);
  min-height: 100vh;
  overflow-x: hidden;
}

#app {
  padding: 0;
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 0.5s;
  opacity: 0;
}
</style>

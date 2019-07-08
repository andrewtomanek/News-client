<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>

<style>
:root {
  --blue: hsla(195, 100%, 95%, 1);
  --water: hsla(195, 56%, 48%, 1);
  --blau: hsla(195, 70%, 60%, 1);
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
  overflow-x: hidden;
}

button {
  font-family: "Stoke", Helvetica, Arial, sans-serif;
}

.submit__button {
  font-family: "Stoke", Helvetica, Arial, sans-serif;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 900;
  padding: 0.5rem;
  background-color: var(--green);
  border: 0.3rem solid white;
  cursor: pointer;
}

#app {
  background-color: var(--blau);
  display: grid;
  grid-auto-flow: row;
  align-content: space-between;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  font-family: "Cardo", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

.results__wrap {
  display: grid;
  grid-auto-flow: row;
  margin: 0;
  width: 100vw;
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

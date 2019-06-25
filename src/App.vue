<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Zprávy</router-link>
      <router-link to="/weather">Počasí</router-link>
      <router-link to="/forecast">Prědpověd</router-link>
      <router-link to="/memes">Memes</router-link>
    </div>
    <router-view />
  </div>
</template>

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

#nav {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  background-color: var(--red);
  padding: 1rem;
  height: 10vh;
}

#nav a {
  font-weight: bold;
  background-color: var(--red);
  color: white;
  border-bottom: 0.3rem solid transparent;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 800;
  font-family: "Tahoma";
  text-align: center;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  border-bottom: 0.3rem solid var(--green);
}

#nav a:hover {
  border-bottom: 0.3rem solid var(--blue);
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

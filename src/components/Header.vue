<template>
  <nav>
    <router-link to="/">Zprávy</router-link>
    <router-link to="/weather">Počasí</router-link>
    <router-link to="/forecast">Prědpověd</router-link>
    <router-link to="/memes">Memes</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  background-color: hsla(0, 0%, 0%, 1);
  padding: 0 2rem;
}

nav {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  background-color: var(--red);
  padding: 1rem;
  height: 10vh;
  width: 100vw;
}

nav a {
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

nav a.router-link-exact-active {
  border-bottom: 0.3rem solid var(--green);
}

nav a:hover {
  border-bottom: 0.3rem solid var(--blue);
}
</style>

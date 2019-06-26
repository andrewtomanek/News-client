<template>
  <footer>
    <div class="footer__box">
      <div class="footer__content">
        <router-link class="footer__link" to="/">News client</router-link>
        <a class="footer__link" href="mailto:andrewtomanek@gmail.com">
          Kontakt
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  place-self: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  background-color: var(--red);
  padding: 1rem;
  height: 10vh;
  width: 100%;
}

.footer__link {
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

.footer__link.router-link-exact-active {
  color: var(--green);
}

.footer__link:hover {
  color: var(--blue);
}
</style>

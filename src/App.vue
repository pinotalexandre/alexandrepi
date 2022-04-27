<script setup>
import { RouterView } from "vue-router";
import NavV from "@/components/NavV.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <NavV />
  <RouterView />
  <TheFooter />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 90%;
  margin-right: auto;
  margin-left: auto;
  background-color: #f5f0e7;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

a,
.green {
  text-decoration: none;
  color: rgb(0, 0, 0);
  transition: 0.4s;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

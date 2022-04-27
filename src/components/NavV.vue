<template>
  <div class="nav">
    <RouterLink class="name" to="/">Alexandre Pinot</RouterLink>
    <nav>
      <RouterLink to="/">Design</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <a
        href="https://drive.google.com/file/d/1wETXd3fyFKEdsJBM3iRZxmuEl_6B2ZpD/view"
        target="_blank"
        >CV</a
      >
    </nav>
  </div>
</template>
<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto Mono";
  flex-wrap: wrap;
  margin-top: 3rem;
}
nav {
  display: flex;
  justify-content: flex-end;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>

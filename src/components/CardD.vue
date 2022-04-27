<template>
  <div class="card-org">
    <RouterLink to="/medicatice">
      <div class="card first" id="container">
        <div class="card-style" id="inner">
          <h1>
            Comment rendre les notices de médicaments plus accessibles ?
            <span class="orange">✷</span>
          </h1>
          <p class="first-paragraph">→ 2022 ☼ Product Design</p>
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/miam-app">
      <div class="card second">
        <div class="card-style">
          <h1>
            Comment faciliter l'’achat dans des distributeurs automatiques de
            nourriture ? <span class="orange">✷</span>
          </h1>
          <p class="second-paragraph">→ 2022 ☼ Product Design</p>
        </div>
      </div>
    </RouterLink>
    <RouterLink to="/">
      <div class="card third">
        <div class="card-style cursor">
          <p class="third-paragraph">🔐 Bientôt disponible</p>
          <h1>
            Repenser l'expérience de la recherche colocative
            <span class="orange">✷</span>
          </h1>
          <p class="third-paragraph">→ 2022 ☼ Product Design</p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
<style scoped>
.card-org {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-bottom: 5rem;
}
.card-style {
  display: flex;
  overflow: hidden;
  width: auto;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  padding: 40px 40px 40px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: stretch;
  align-items: stretch;
  opacity: 1;
  text-decoration: none;
  cursor: pointer;
}
.card-style.cursor {
  cursor: not-allowed;
}
.card:hover {
  transform: scale(1.03);
  transition: 0.2s;
}
.first {
  border: 3px solid #aed9f5;
  background-color: #d9edf8;
}
.first h1 {
  color: #2d89bc;
  margin-top: 0;
  margin-bottom: 15px;
  padding-right: 0;
  padding-left: 0;
  font-family: new-spirit, sans-serif;
  font-size: 26px;
  line-height: 47px;
  font-weight: 500;
  text-decoration: none;
}
.second {
  background-color: #fff0cd;
  border: 3px solid #ffe197;
}
.second h1 {
  margin-top: 0;
  margin-bottom: 15px;
  padding-right: 0;
  padding-left: 0;
  font-family: new-spirit, sans-serif;
  color: #bc9d2d;
  font-size: 26px;
  line-height: 47px;
  font-weight: 500;
  text-decoration: none;
}
.third {
  border: 3px solid #81da97;
  background-color: #d8f0de;
}
.third h1 {
  color: #1b8150;
  margin-top: 0;
  margin-bottom: 15px;
  padding-right: 0;
  padding-left: 0;
  font-family: new-spirit, sans-serif;
  font-size: 26px;
  line-height: 47px;
  font-weight: 500;
  text-decoration: none;
}
.card p {
  font-family: "Roboto Mono";
  font-size: 24px;
  font-weight: 500;
}
.card {
  border-radius: 8px;
  margin-right: 1rem;
  transition: 0.2s;
  height: 100%;
}
.card .first-paragraph {
  color: #2d89bc;
}
.card .second-paragraph {
  color: #bc9d2d;
}
.card .third-paragraph {
  color: #1b8150;
}
@media (max-width: 1335px) {
  .card-org {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-columns: none;
  }
  .card-org {
    margin-right: 0;
  }
  .card-org a {
    margin-bottom: 20px;
  }
}
</style>

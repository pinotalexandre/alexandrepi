<template>
  <div class="footer">
    <h2>
      Vous avez une question, une idée ? <br />Contactez-moi !
      <span class="orange">✹</span>
    </h2>
    <div class="footer-links">
      <a
        href="mailto:alexandre.pinot@hetic.net?subject=Hey%20Alexandre%20!%20"
        class="footer-item"
        >email→</a
      ><a
        href="https://www.linkedin.com/in/alexandre-pinot-84594b199/"
        target="_blank"
        class="footer-item"
        >linkedin→</a
      ><a
        href="https://dribbble.com/alexandrepinot"
        target="_blank"
        class="footer-item"
        >dribbble→</a
      ><a
        href="https://twitter.com/pinotalexandre_"
        target="_blank"
        class="footer-item"
        >twitter→</a
      >
    </div>
  </div>
</template>
<style scoped>
.footer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 40px 0 80px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  border-top: 1px solid #ccc;
}
.footer-links {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-right: 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.footer-item {
  margin-right: 0;
  margin-left: 0;
  padding-right: 40px;
  padding-left: 0;
  opacity: 1;
  font-family: "Roboto Mono", sans-serif;
  color: #333;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: none;
}
.footer h2 {
  padding: 30px 0;
  font-family: new-spirit, sans-serif;
  color: #0a5029;
  font-size: 50px;
  line-height: 76px;
  font-weight: 500;
  text-align: left;
}
</style>

<template>
  <section id="footer">
    <div class="main-footer">
      <div class="logoinfo" data-aos="fade-up">
        <h2>Project JavaScript</h2>
        <p>By Sara Girke</p>

        <div class="contact-details">
          <h1>Contact Me</h1>
          <li>
            <div class="fa fa-envelope"></div>
            <a href="mailto:sagi1700@student.miun.se"
              >sagi1700@student.miun.se</a
            >
          </li>
        </div>
      </div>
      <div class="com" data-aos="fade-up">
        <h1>Navigation</h1>
        <ul>
          <li>
            <a> <RouterLink to="/">HOME</RouterLink></a>
          </li>
          <li>
            <a><RouterLink to="/tea">TEA</RouterLink></a>
          </li>
          <li>
            <a><RouterLink to="/about">ABOUT</RouterLink></a>
          </li>
        </ul>
      </div>
      <div class="info" data-aos="fade-up">
        <h1>Social Media</h1>
        <div class="sociallogos">
          <div class="logobox">
            <a href="https://github.com/saragirke">GitHub</a><br />
            <a href="https://www.linkedin.com/in/sara-girke-12b140133/" class="fa fa-linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
    <footer>Sara Girke | DT162G JavaScriptbaserad webbutveckling</footer>
  </section>
</template>

<script></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

.main-footer {
  padding: 70px 0;
  display: flex;
  justify-content: space-evenly;
  font-family: "Quicksand", sans-serif;
  background-color: #19302e;
  margin-top: 5%;
}

.main-footer ul {
  list-style: none;
}

.main-footer h1 {
  font-size: 22px;
  line-height: 117%;
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: 500;
  font-family: "Nunito", sans-serif;
}

.main-footer h2 {
  color: #ffffff;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
}

.main-footer ul li a {
  color: #ffffffcc;
  text-decoration: none;
  font-family: "Quicksand", sans-serif;
}

footer {
  background-color: #19302e;
  border-top: 1px solid#f8eedb;
  font-size: 17px;
  padding: 15px 5px;
  color: #ffffff;
  text-align: center;
  font-family: "Quicksand", sans-serif;
}

footer a {
  text-decoration: none;
  color: #ffffff;
}

.logoinfo p {
  color: #f8eedb;
  font-size: 17px;
  margin-top: 5px;
}

.contact-details {
  margin-top: 20px;
}

.contact-details li {
  list-style: none;
  margin: 10px 0;
}

.contact-details li a {
  text-decoration: none;
  color: #f1f1f1;
}

.contact-details .fa {
  color: #f1f1f1;
  margin-right: 10px;
}

.sociallogos {
  padding: 20px 0;
}

.sociallogos .logobox a {
  padding: 0 10px;
  text-decoration: none;
  color: #ffffff;
  font-size: 22px;
}

.com ul li {
  padding: 5px 0;
}

@media only screen and (max-width: 749px) {
  .main-footer {
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .info {
    padding: 20px 0;
  }
}

@media (max-width: 480px) {
  .main-footer {
    grid-template-columns: 1fr;
  }
  .sociallogos {
    padding: 20px 0;
  }
  .com {
    padding: 20px 0;
  }
}
</style>

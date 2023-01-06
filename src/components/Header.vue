<template>
  <div class="hero-image">
    <div class="header">
      <RouterLink to="/"
        ><img src="../img/logo.png" alt="logo" class="logo"
      /></RouterLink>
      <ul id="navlist">
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

    <div class="hero-text">
      <img src="../img/TeaTime.png" alt="Logotype" class="pic" />
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
};
</script>

<style scoped>
body,
html {
  margin: 0px;
  padding: 0px;
}

.header {
  background: #ffffffb0;
  height: 80px;
}
.logo {
  float: left;
  margin: 0;
  height: 80%;
}

#navlist {
  float: right;
}

li {
  display: inline;
  list-style-type: square;
  padding-right: 30px;
  font-size: 20px;
  font-family: Quicksand, sans-serif;
  text-decoration: none;
}
a:link {
  line-height: 70px;
  height: 75px;
  text-decoration: none;
  color: rgb(255, 255, 255);
}

li:hover {
  font-weight: bolder;
  color: aquamarine;
}

a:visited {
  color: black;
}

/* The hero image */
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../img/pic6.jpg");
  background-position: top;
  height: 20%;
  background-position: right center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-bottom: 27%;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.pic {
  width: 65%;
  height: auto;
}
</style>

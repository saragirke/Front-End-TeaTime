<template>
  <div class="row">
    <div class="column">
      <img src="../img/pic4.jpg" class="pic" alt="" />
    </div>
    <div class="column">
      <h2>History</h2>
      <p>
        According to legend, tea has been known in China since about 2700 BCE.
        For millennia it was a medicinal beverage obtained by boiling fresh
        leaves in water, but around the 3rd century CE it became a daily drink,
        and tea cultivation and processing began. The first published account of
        methods of planting, processing, and drinking came in 350 CE. Around 800
        the first seeds were brought to Japan, where cultivation became
        established by the 13th century.
      </p>
    </div>
  </div>

  <div class="row">
    <div class="column">
      <img src="../img/pic5.jpg" class="pic" alt="" />
    </div>
    <div class="column">
      <h2>Classification</h2>
      <p>
        Teas are classified according to region of origin, as in China, Ceylon,
        Japanese, Indonesian, and African tea, or by smaller district, as in
        Darjeeling, Assam, and Nilgris from India, Uva and Dimbula from Sri
        Lanka, Keemun from Chi-men in China’s Anhwei Province, and Enshu from
        Japan.
      </p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: white;
  font-family: Quicksand, sans-serif;
  text-align: center;
  font-size: 40px;
  margin-bottom: 5%;
}

h2 {
  font-family: Quicksand, sans-serif;
  text-align: center;
}

p {
  font-family: Quicksand, sans-serif;
  line-height: 1.5;
}
.row {
  display: flex;
  margin: auto;
  width: 70%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  margin-bottom: 1%;
  margin-top: 1%;
  background-image: linear-gradient(to bottom, rgb(255, 255, 255), #f8eedb);
}

.column {
  flex: 50%;
  margin: 0 auto;
  padding: 10px;
}

.pic {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 900px) {
  .row {
    display: flex;
    flex-direction: column;
    width: 95%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
    margin-bottom: 1%;

    background-image: linear-gradient(to bottom, rgb(255, 255, 255), #f8eedb);
  }
  .column {
    width: 95%;
  }
}
</style>

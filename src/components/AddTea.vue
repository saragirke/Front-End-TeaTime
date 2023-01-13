<template>
  <div class="formDiv">
    <form @submit.prevent="addTea()">
      <h2>Add to list</h2>

      <label for="name">Name:</label>
      <input v-model="name" type="text" id="name" name="name" />

      <label for="type">Leaf:</label>
      <input v-model="type" type="text" id="type" name="type" />

      <label for="amount">Amount:</label>
      <input
        v-model="amount" type="number" min="0" id="amount" name="amount"/><br />

      <label for="price">Price:</label><br />
      <input
        v-model="price" type="number" min="0" id="price" name="price" /><br /><br />
      <div id="error"></div>

      <input type="submit" class="sortBtn" value="ADD" />
    </form>
    <br /><br />
  </div>
</template>

<script>
//Komponent
export default {
  data() {
    return {
      name: "",
      type: "",
      amount: "",
      price: "",
    };
  },

  emits: ["TeaAdded"],

  methods: {
    async addTea() {
      //Kontrollerar att fälten är ifyllda
      if (
        (this.name != 0) &
        (this.type != 0) &
        (this.amount != 0) &
        (this.price != 0)
      ) {
        //Javascript objekt
        let TeaBody = {
          name: this.name,
          type: this.type,
          amount: this.amount,
          price: this.price,
        };

        //FETCH
        const resp = await fetch("http://localhost:3000/teas/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(TeaBody),
        });

        const data = await resp.json();

        /*Töm fälten efter lagring*/
        this.productno = "";
        this.name = "";
        this.type = "";
        this.amount = "";
        this.price = "";

        //Emit för att ladda om sidan
        this.$emit("TeaAdded");
      } 
      else {
       document.getElementById("error").innerHTML ="<p>" +"Please enter all information" + "</p>";
      }
    },
  },
};
</script>

<style scoped>
form {
    font-family: "Quicksand", sans-serif;
  font-size: 16px;
  min-height: 380px;
  background-color: transparent;
  background-image: linear-gradient(to bottom, #fff, #f8eedb);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 30px;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  width: 43%;
  font-weight: bolder;
  border-radius:10px;
}

input[type="text"] {
  width: 100%;
  padding: 10px 20px;
  margin: 6px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type="number"],
select {
  width: 100%;
  padding: 10px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;

  box-sizing: border-box;
}

.sortBtn {
  appearance: button;
  background-color: transparent;
  background-image: linear-gradient(to bottom, #fff, #6d8b67e7);
  border: 0 solid black;
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: black;
  column-gap: 1rem;
  cursor: pointer;
  display: flex;
  font-family: "Quicksand", sans-serif;
  font-size: 100%;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
  outline: 2px solid transparent;
  padding: 0.5rem 1rem;
  text-align: center;
  text-transform: none;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  box-shadow: -6px 8px 10px rgba(81, 41, 10, 0.1),
    0px 2px 2px rgba(81, 41, 10, 0.2);
  margin-right: 2%;
}
.sortBtn:hover {
  transform: translateY(0.125rem);
  color: black;
}

.sortBtn:active {
  background-color: #f3f4f6;
  box-shadow: -1px 2px 5px rgba(81, 41, 10, 0.15),
    0px 1px 1px rgba(81, 41, 10, 0.15);
  transform: translateY(0.125rem);
}

.sortBtn:focus {
  box-shadow: rgba(72, 35, 7, 0.46) 0 0 0 4px,
    -6px 8px 10px rgba(81, 41, 10, 0.1), 0px 2px 2px rgba(81, 41, 10, 0.2);
}

@media screen and (max-width: 700px) {
form {
  width:70%;
}
}
</style>

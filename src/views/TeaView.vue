<template>
  <h1>TEA</h1>

  <!-- Knappar för sortering, anrop vid klick till funktioner-->

  <div class="sorting">
    <button class="sortBtn" @click="sortName()">Name</button>
    <button class="sortBtn" @click="sortAmount()">Amount</button>
    <button class="sortBtn" @click="sortPrice()">Price</button>
    <button class="sortBtn" @click="sortLeaf()">Type</button>
    <br /><br />
  </div>

  <!-- Tabell-->
  <div>
    <table class="center">
      <tr>
        <th>Name</th>
        <th>Leaf</th>
        <th>Price</th>
        <th>Amount</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
      <!-- v-for loop för att hämta dokuemnt -->
      <Tea @deleteTea="deleteTea(tea._id)" @updateTea="updateTea(tea._id)" v-for="tea in teas" :tea="tea" :key="tea._id"/>
    </table>
  </div>
  <br />

  <AddTea @teaAdded="getTea()" />

</template>
<script>
// Importering av komponenter
import Tea from "../components/Tea.vue";
import AddTea from "../components/AddTea.vue";

export default {
  // Reaktiv data
  data() {
    return {
      teas: [],
    };
  },

  components: {
    Tea,
    AddTea,
  },

  methods: {
    /*********************************************
 * GET
 *********************************************/
    async getTea() {
      //Fetch till restwebbtjänst
      const resp = await fetch("http://localhost:3000/teas/", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      // Data lagras
      const data = await resp.json();
      this.teas = data;
    },

  /*********************************************
 * Soretera efter lagerstatus
 *********************************************/
    async sortAmount() {
      //Fetch till restwebbtjänst
      const resp = await fetch("http://localhost:3000/teas/", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      // När vi fått svar från webbtjänsten ska data lagras
      const data = await resp.json();

      // Sortera efter antal, lägsta först
      data.sort(function (a, b) {
        return a.amount - b.amount;
      });
      this.teas = data;
    },

/*********************************************
 * Soretra efter pris
 *********************************************/
    async sortPrice() {
      //Fetch till restwebbtjänst
      const resp = await fetch("http://localhost:3000/teas/", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      // När vi fått svar från webbtjänsten ska data lagras
      const data = await resp.json();

      // Sortera efter antal, lägsta först
      data.sort(function (a, b) {
        return a.price - b.price;
      });
      this.teas = data;
    },

   /*********************************************
 * Soretera efter namn
 *********************************************/
    async sortName() {
      //Fetch till restwebbtjänst
      const resp = await fetch("http://localhost:3000/teas/", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      // När vi fått svar från webbtjänsten ska data lagras
      const data = await resp.json();

      // Sortera i alfabetisk ordning
      data.sort((a, b) => a.name.localeCompare(b.name));
      this.teas = data;
    },

  /*********************************************
 * Soretera efter type
 *********************************************/
    async sortLeaf() {
      //Fetch till restwebbtjänst
      const resp = await fetch("http://localhost:3000/teas/", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      // När vi fått svar från webbtjänsten ska data lagras
      const data = await resp.json();

      // Sortera i alfabetisk ordning
      data.sort((a, b) => a.type.localeCompare(b.type));
      this.teas = data;
    },

   /*********************************************
 * DELETE
 *********************************************/
    async deleteTea(_id) {

      //Bekräfta för att köra funktionen
      if (confirm("Do you want to delete product " + teaname + "?")) {
        const resp = await fetch("http://localhost:3000/teas/" + _id, {
          //Deleteanrop
          method: "DELETE",
          headers: {
            Accept: "application json",
            "Content-Type": "application/json",
          },
        });

        const data = await resp.json();
        this.getTea();
      }
    },
/*********************************************
 * UPDATE
 *********************************************/
    async updateTea(_id) {
      // Hämtar innehåll i td-element
      let teaname = document.getElementById("name" + _id).innerHTML;
      let teatype = document.getElementById("type" + _id).innerHTML;
      let teaamount = document.getElementById("amount" + _id).innerHTML;
      let teaprice = document.getElementById("price" + _id).innerHTML;

      //Kontrollera input
      if (
        teaname != 0 &
        teatype != 0 &
        teaamount != 0 &
        teaprice != 0
      ) {
        //Javascript objekt
        let teaBody = {
          name: teaname,
          type: teatype,
          amount: teaamount,
          price: teaprice,
        };

        const resp = await fetch("http://localhost:3000/teas/" + _id, {
          method: "PUT",
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(teaBody),
        });

        const data = await resp.json();
        this.getTea();
        alert(teaname + " was updated!");

      } else {
        alert("Field can't be empty");
        location.reload()
      }
    }
  },
  mounted() {
    this.getTea();
  },
};
</script>

<style scoped>
p {
  font-family: Quicksand, sans-serif;
  text-align: center;
  text-align: center;
}

h1 {
  color: white;
  font-family: Quicksand, sans-serif;
  text-align: center;
  font-size:40px;
  margin-bottom: 1%;
}
table {
  background-color: transparent;
  background-image: linear-gradient(to bottom, #fff, #f8eedb);
  margin: 0 auto;
  width: 80% !important;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  margin-bottom: 2%;
  
}

th,
td {
  padding: 25px;
  text-align: left;
  border-bottom: 0.5px solid #dddddd;
  font-family: Quicksand, sans-serif;
}

th {
  font-family: "Nunito", sans-serif;
}

th,
td {
  text-align: center;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

.sorting {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 3%;
}

.sortBtn {
  appearance: button;
  background-color: transparent;
  background-image: linear-gradient(to bottom, #fff, #f8eedb);
  border: 0 solid #e5e7eb;
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #482307;
  column-gap: 1rem;
  cursor: pointer;
  display: flex;
  font-family: Quicksand, sans-serif;
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
  td,
  th {
    font-family: Quicksand, sans-serif;
    padding: 5px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    font-size: 13px;
    overflow-x: auto;
  }
  .table {
    width: 100% !important;
  }

  .sorting {
    margin-left: auto;
    margin-right: auto; 
  }
}
</style>

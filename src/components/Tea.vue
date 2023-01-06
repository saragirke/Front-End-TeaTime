<template>
  <!-- Eventlyssnare @-->
  <!--c-bind för dynamiska id-->
  <tbody>
    <tr>
      <td v-bind:id="'name' + tea._id" contenteditable>{{ tea.name }}</td>
      <td v-bind:id="'type' + tea._id" contenteditable>{{ tea.type }}</td>
      <td v-bind:id="'price' + tea._id" contenteditable>{{ tea.price }}</td>
      <td v-bind:id="'amount' + tea._id" contenteditable>{{ tea.amount }}</td>

      <td class="updateBtn" @click="$emit('updateTea')"><img class="icon" src="../img/implement.png" /> </td>
      <td class="remove" @click="$emit('deleteTea')"><img class="icon" src="../img/trash-bin.png" />
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  // Reaktiv data
  data() {
    return {
      sortBy: "name",
      sortDirection: "asc",
    };
  },

  props: {
    tea: Object,
  },
  emits: ["deleteTea", "updateTea"],
};
</script>
<style scoped>
th,
td {
  padding: 15px;
  text-align: left;
  border-bottom: 0.5px solid #dddddd;
  font-family: Quicksand, sans-serif;
}
th,
td {
  text-align: center;
}
</style>

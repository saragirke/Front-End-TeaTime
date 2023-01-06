<template>
  <h1>ABOUT</h1>
  <div class="row">

    <div class="column">
  <p>
   This page is an assignment for the course DT162G at miun university. The frontend-application is created as a single-page-application with Vue.  </p>
   <br>
  <p>The database is created with MongoDB and uploaded with MongoDB Atlas.</p></div>
  
  </div>
  
  
    </template>
  
  <style scoped>
  
  h1 {
    color: white;
    font-family: Quicksand, sans-serif;
    text-align: center;
    font-size:40px;
    margin-bottom: 5%;
  }
  
  h2 {
    font-family: Quicksand, sans-serif;
    text-align: center;
  }
  
  p{
    font-family: Quicksand, sans-serif;
    line-height: 1.5;
  }
  .row {
    display: flex;
    margin: auto;
    width: 70%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
   margin-bottom: 1%;
   border-radius:5px;
   background-image: linear-gradient(to bottom, rgb(255, 255, 255), #f8eedb);
  }
  
  .column {
    flex: 50%;
    margin: 0 auto;
    padding: 10px;
    margin-left:10%;
    margin-right:10%;
    border-radius:5px;
  }
  
  .pic {
    width:100%;
    height: auto;
  }
  
  
  
  @media screen and (max-width: 900px) {
    .row {
      display: flex;
    flex-direction: column;
    width: 95%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
   margin-bottom: 1%;
   background-image: linear-gradient(to bottom, rgb(255, 255, 255), #f8eedb);
  }
    .column {
      width: 95%;
    }
  }
  </style>
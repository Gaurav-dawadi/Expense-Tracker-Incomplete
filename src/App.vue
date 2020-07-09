<template>
  <div id="app">
    <navlink/>
    <router-view></router-view>
    <!-- <AddExpense/>
    <ShowExpense/>     -->
  </div>
</template>

<script>
// import AddExpense from './components/AddExpense.vue'            //No need to use these After using routing
// import ShowExpense from './components/ShowExpense.vue'
import navlink from './components/navlink.vue'
export default {
  name: 'App',
  components: {
    // AddExpense,
    // ShowExpense
    navlink
  },
  computed:{
    data(){ 
      return this.$store.data;
    }
  },
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  font-family: Arial, Helvetica, sans-seriff;
  line-height: 1.4;
  background: #FFF8B1;
}

</style>

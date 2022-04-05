<template>

<div  id = "app" class="background-black">
  <b-container no-gutters fluid="xl">
        <router-view></router-view>
  </b-container>
</div>
</template>

<script>
export default {
  name: 'App', 
  data: function(){
    return {

    }
  }
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');


.text-left {
  text-align: left;
}

html, body {
  overflow-x:hidden 
} 


#app {
  width: 100vw;
  overflow-x: hidden;
  background-color: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

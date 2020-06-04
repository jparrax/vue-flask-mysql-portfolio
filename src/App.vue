<template>
  <b-container fluid id="app">
    <Header id="header"/>
    <router-view id="view"/>
    <Footer id="footer"/>
  </b-container>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style>
html{
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
  height:100%;
  overflow-x: hidden;
}

#header{
  padding: 0px;
  position: sticky;
  top: 0px;
  z-index: 2;
}

#footer{
  padding: 0px;
}

#view{
  padding: 0px;
}

body{
  height:100%;
  background-image: url('./assets/general/background/1.jpg');
}

.my-navbar{
  background-color: black;
}

.my-jumbotron{
  background-image: url('./assets/general/jumbotron/1.png');
  position: relative;
  overflow: hidden;
  height: auto;
}

#jumbotron-1{
  margin: 15px;
}

#jumbotron-2{
  margin: 15px;
}

#jumbotron-3{
  margin: 15px;
}

#jumbotron-4{
  margin: 15px;
}

.text{
  color: white;
  font-weight: bold;
  text-align: justify;
  position: relative;
  z-index: 1;
}

.image{
  background-position: center;
  height:100%;
  width:100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}
</style>

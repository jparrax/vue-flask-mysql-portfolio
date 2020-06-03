<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
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

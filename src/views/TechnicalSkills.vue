<template>
  <div>
    <b-jumbotron id="jumbotron-1" class = "my-jumbotron" >
      <div class = "text">
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
      </div>
      <div class = "image" v-bind:class="{'jumbotron-1-animation': animation}" @mouseenter="startAnimation" @mouseleave="stopAnimation"></div>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  data() {
    return {
      animation: false,
    };
  },
  methods: {
    startAnimation: function() {
      this.animation = true;
    },
    stopAnimation: function(){
      this.animation = false;
    }
  },
}
</script>
<style scoped>
  #jumbotron-1{
    position: relative;
    overflow: hidden;
    height: 400px;
    margin: 10px;
  }
  .text{
    position: absolute;
    color: white;
    left: 30%;
    top: 40%;
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
  /* .jumbotron-1-animation{
    background-image: url('../assets/guatape.jpg');
    animation-name: animation;
    animation-duration: 30s;
    animation-iteration-count: 3;
    background-position: center;
  }
  @keyframes animation {
    0% {background-image: url('../assets/guatape.jpg'); opacity: 1;}
    10% {background-image: url('../assets/guatape.jpg'); opacity: 0.5;}
    20% {background-image: url('../assets/meandrock.jpg');opacity: 1;}
    40% {background-image: url('../assets/meandrock.jpg');opacity: 0.5;}
    50% {background-image: url('../assets/como.jpg'); opacity:1;}
    65% {background-image: url('../assets/como.jpg'); opacity:0.5;}
    75% {background-image: url('../assets/lugano.jpg'); opacity:1;}
    90% {background-image: url('../assets/lugano.jpg'); opacity:0.5;}
  } */
</style>
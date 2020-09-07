<template>
  <b-container fluid>
    <b-jumbotron :id="'jumbotron-' + component" class = "my-jumbotron" v-for="component in components" :key="component">
      <p class="text" v-for="content in contents" :key="content.id" v-if="(content.component_number == component)">{{content.paragraph}}</p>
      <div class = "image" :class="'jumbotron-' + component + '-animation'"></div>
    </b-jumbotron>
  </b-container>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      components: [],
      contents: [],
      i: 0
    };
  },
  methods: {
    getText() {
      const path = 'http://localhost:5000/Experience';
      axios.get(path)
      .then((res) => {
        let components = res.data;
        let component;
        let duplicates = [];
        for(component of components){
          duplicates.push(component.component_number); 
        }
        this.contents = components;
        this.components = duplicates.filter((v, i, a) => a.indexOf(v) === i);
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
      });
    },
  },
  created() {
    this.getText();
  },
}
</script>
<style scoped>
  .jumbotron-1-animation:hover{
    background-image: url('../assets/experience/jumbotron1/2.jpg');
    animation-name: animation-1;
    animation-duration: 30s;
    animation-iteration-count: 3;
    background-position: center;
    opacity: 0.5;
  }
  .jumbotron-2-animation:hover{
    background-image: url('../assets/experience/jumbotron1/1.jpg');
    animation-name: animation-1;
    animation-duration: 30s;
    animation-iteration-count: 3;
    background-position: center;
    opacity: 0.5;
  }
  .jumbotron-3-animation:hover{
    background-image: url('../assets/experience/jumbotron2/1.jpg');
    animation-name: animation-3;
    animation-duration: 30s;
    animation-iteration-count: 3;
    background-position: center;
    opacity: 0.5;
  }
  .jumbotron-4-animation:hover{
    background-image: url('../assets/experience/jumbotron3/1.jpg');
    animation-name: animation-4;
    animation-duration: 30s;
    animation-iteration-count: 3;
    background-position: center;
    opacity: 0.5;
  }
  .jumbotron-5-animation:hover{
    background-image: url('../assets/experience/jumbotron4/1.jpg');
    animation-name: animation-5;
    animation-duration: 30s;
    animation-iteration-count: 3;
    background-position: center;
    opacity: 0.5;
  }
  @keyframes animation-1{
    /* 0% {background-image: url('../assets/experience/jumbotron1/2.jpg'); opacity: 1;} */
    0% {background-image: url('../assets/experience/jumbotron1/2.jpg');opacity: 0.5;}
    /* 50% {background-image: url('../assets/experience/jumbotron1/3.jpg'); opacity:1;} */
    33% {background-image: url('../assets/experience/jumbotron1/3.jpg'); opacity:0.5;}
    /* 75% {background-image: url('../assets/experience/jumbotron1/4.jpg'); opacity:1;} */
    66% {background-image: url('../assets/experience/jumbotron1/4.jpg'); opacity:0.5;}
  }
  @keyframes animation-2{
    /* 0% {background-image: url('../assets/experience/jumbotron1/1.jpg'); opacity: 1;} */
    0% {background-image: url('../assets/experience/jumbotron1/1.jpg'); opacity: 0.5;}
    /* 20% {background-image: url('../assets/experience/jumbotron1/2.jpg');opacity: 1;} */
    25% {background-image: url('../assets/experience/jumbotron1/2.jpg');opacity: 0.5;}
    /* 50% {background-image: url('../assets/experience/jumbotron1/3.jpg'); opacity:1;} */
    50% {background-image: url('../assets/experience/jumbotron1/3.jpg'); opacity:0.5;}
    /* 75% {background-image: url('../assets/experience/jumbotron1/4.jpg'); opacity:1;} */
    75% {background-image: url('../assets/experience/jumbotron1/4.jpg'); opacity:0.5;}
  }
  @keyframes animation-3{
    /* 0% {background-image: url('../assets/experience/jumbotron1/1.jpg'); opacity: 1;} */
    0% {background-image: url('../assets/experience/jumbotron2/1.jpg'); opacity: 0.5;}
    /* 20% {background-image: url('../assets/experience/jumbotron1/2.jpg');opacity: 1;} */
    25% {background-image: url('../assets/experience/jumbotron2/2.jpg');opacity: 0.5;}
    /* 50% {background-image: url('../assets/experience/jumbotron1/3.jpg'); opacity:1;} */
    50% {background-image: url('../assets/experience/jumbotron2/3.jpg'); opacity:0.5;}
    /* 75% {background-image: url('../assets/experience/jumbotron1/4.jpg'); opacity:1;} */
    75% {background-image: url('../assets/experience/jumbotron2/4.jpg'); opacity:0.5;}
  }
  @keyframes animation-4{
    /* 0% {background-image: url('../assets/experience/jumbotron1/1.jpg'); opacity: 1;} */
    0% {background-image: url('../assets/experience/jumbotron3/1.jpg'); opacity: 0.5;}
    /* 20% {background-image: url('../assets/experience/jumbotron1/2.jpg');opacity: 1;} */
    25% {background-image: url('../assets/experience/jumbotron3/2.jpg');opacity: 0.5;}
    /* 50% {background-image: url('../assets/experience/jumbotron1/3.jpg'); opacity:1;} */
    50% {background-image: url('../assets/experience/jumbotron3/3.jpg'); opacity:0.5;}
    /* 75% {background-image: url('../assets/experience/jumbotron1/4.jpg'); opacity:1;} */
    75% {background-image: url('../assets/experience/jumbotron3/4.jpg'); opacity:0.5;}
  }
  @keyframes animation-5{
    /* 0% {background-image: url('../assets/experience/jumbotron1/1.jpg'); opacity: 1;} */
    0% {background-image: url('../assets/experience/jumbotron4/1.jpg'); opacity: 0.5;}
    /* 20% {background-image: url('../assets/experience/jumbotron1/2.jpg');opacity: 1;} */
    25% {background-image: url('../assets/experience/jumbotron4/2.jpg');opacity: 0.5;}
    /* 50% {background-image: url('../assets/experience/jumbotron1/3.jpg'); opacity:1;} */
    50% {background-image: url('../assets/experience/jumbotron4/3.jpg'); opacity:0.5;}
    /* 75% {background-image: url('../assets/experience/jumbotron1/4.jpg'); opacity:1;} */
    75% {background-image: url('../assets/experience/jumbotron4/4.jpg'); opacity:0.5;}
  }
</style>
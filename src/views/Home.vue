<template>
  <div class="home">
    <b-row>
      <b-col><img class="my-image" src="../assets/home/1.jpg" width="602px"></b-col>
      <b-col>
        <div class="my-text" v-for="component in components" :key="component">
          <h1 v-if="component == 1">
            {{contents[0].paragraph}}
          </h1>
          <p v-if="component == 2"  align="justify">
            {{contents[1].paragraph}}
          </p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import axios from 'axios';

  export default {
    data() {
      return {
        components: [],
        contents: []
      };
    },
    methods: {
      getText() {
        const path = 'http://localhost:5000/home';
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
  };
</script>
<style>
  .home{
    overflow: hidden;
  }
  .my-image{
    border-radius: 10px;
    margin:10px;
    box-shadow: -3px 3px 5px black;
  }
  .my-text{
    margin-top:60px;
    margin-right: 15px;
  }
</style>
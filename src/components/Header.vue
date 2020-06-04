<template>
  <b-container fluid>
    <b-navbar class = "my-navbar" type="dark" v-for="component in components" :key="component">
      <b-navbar-nav class="ml-auto mr-auto">
        <b-nav-item class="my-name" v-for="content in contents" :key="content.id" :to="{path:content.route}" v-if="content.component_number == components[0] && component==1">
          {{content.user_name}}
        </b-nav-item>
        <b-nav-item v-for="content in contents" :key="content.id" :to="{path:content.route}" v-if="content.component_number == components[1] && component==2">
          {{content.page}}
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </b-container>
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
      getHeader() {
        const path = 'http://localhost:5000/header';
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
      this.getHeader();
    },
  };
</script>
<style scoped>
  .my-name{
    font-weight: bold;
    font-size: 40px;
  }
</style>>
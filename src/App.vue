<template>
  <HeaderComponent></HeaderComponent>
  <!-- <div>
    <h1>Ciao</h1> 
    <ul>
      <li v-for="(project,i) in projects" :key="i">{{ project.title }}</li>
    </ul>
  </div> -->
  <router-view></router-view>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import axios from 'axios';
  export default {
    name: 'App',
    components: {
      HeaderComponent
    },
    data(){
      return{
        projects:[],
        apiUrl: 'http://localhost:8000/api'
      }
    },
  // methods:{
  //   getProjects(){
  //     axios.get(`${this.apiUrl}/projects`).then((response)=>{
  //       // console.log(response);
  //       console.log(response.data.results.data);
  //       this.projects = response.data.results.data;
  //     }) 
  //   }
  // },
  // mounted(){
  //   this.getProjects()
  // }
  }
</script>

<style lang="scss" scoped>

</style>
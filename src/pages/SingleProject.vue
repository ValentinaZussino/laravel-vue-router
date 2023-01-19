<template>
    <section v-if="project" class="container mt-5" id="single-project">
            <h2 class="text-uppercase">{{ project.title }}</h2>
            <div class="w-50 h-50 my-3">
                <img v-if="project.cover_image" :src="`${store.imagBasePath}${project.cover_image}`" alt="">
                <img v-else src="https://via.placeholder.com/1200x840/DDDDDD/444444?text=VZ+Portfolio" alt="C/O https://placeholder.com/">
            </div>
            <div>
                <div v-if="project.type ">
                    <span class="fw-bold">Workflow: </span><span>{{ project.type.workflow }}</span> 
                </div>
                <div v-if="project.devlangs && project.devlangs.length > 0">
                    <p class="fw-bold">Languages: <span v-for="(devlang,i) in project.devlangs" :key="i" class="badge text-bg-warning me-2">{{ devlang.name }}</span> </p>
                </div>
                <div class="">
                    <p> <span class="fw-bold">Description:</span> <br> {{ project.description }}</p>
                </div>
            </div>
            <router-link class="btn vz_btn_violet mt-2" :to="{name: 'projects'}">
            Torna ai progetti
            </router-link>
    </section>
    <section v-else>
        ...Loading...
    </section>
</template>

<script>
import axios from 'axios';
import {store} from '../store';
    export default {
        name: 'SingleProject',
        data(){
            return{
                store,
                project: null,
            }
        },
        methods:{
            getProject(){
                axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`).then((response)=>{
                    if(response.data.success){
                        this.project = response.data.results;
                    }else{
                        this.$router.push({name: 'not-found'});
                    }
                })
            }
        },
        mounted(){
            this.getProject();
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
#single-project {
    color: white;
}
</style>
<template>
    <section v-if="project" class="container mt-5">
            <h2 class="text-uppercase">{{ project.title }}</h2>
            <div class="w-50 h-50 my-3">
                <img :src="`${store.imagBasePath}${project.cover_image}`" alt="">
            </div>
            <div>
                <div v-if="project.type">
                    <span class="fw-bold">Workflow: </span><span>{{ project.type.workflow }}</span> 
                </div>
                <div v-if="project.devlangs && project.devlangs.length > 0">
                    <p class="fw-bold">Languages: <span v-for="(devlang,i) in project.devlangs" :key="i" class="badge text-bg-warning me-2">{{ devlang.name }}</span> </p>
                </div>
                <div class="">
                    <p> <span class="fw-bold">Description:</span> <br> {{ project.description }}</p>
                </div>
            </div>
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

</style>
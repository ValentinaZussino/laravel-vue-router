<template>
    <section class="container my-5">
        <h1>Lista dei progetti</h1>
        <div class="row">
            <div class="col-12 col-md-4 mt-4" v-for="(project, i) in projects" :key="i">
                <div class="card h-100" style="width: 18rem;">
                    <img v-if="project.cover_image" :src="`${store.imagBasePath}${project.cover_image}`" class="card-img-top" :alt="project.title">
                    <img v-else src="https://via.placeholder.com/1200x840/DDDDDD/444444?text=VZ+Portfolio" alt="C/O https://placeholder.com/">
                    <div class="card-body">
                        <h5 class="card-title">{{project.title}}</h5>
                        <div>
                            <p class="card-text">{{ truncateContent(project.description) }}</p>
                        </div>
                        <router-link class="btn btn-info mt-2" :to="{name: 'single-project', params:{slug: project.slug}}">
                        Vedi il progetto
                        </router-link>                    
                    </div>
                </div>
            </div>
        </div>
        <nav aria-label="Page navigation example" class="mt-3">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#" @click="previous">Precedente</a></li>
                <li class="page-item" v-for="n in lastPage"><a class="page-link" @click="getProjects(n)">{{n}}</a></li>  
                <li class="page-item"><a class="page-link" href="#" @click="next">Successiva</a></li>  
            </ul>
        </nav>
    </section>
</template>

<script>
    import axios from 'axios';
    import { store } from '../store';
    export default {
        name: 'Projects',
        data(){
            return {
                store,
                projects: [],
                currentPage: 1,
                lastPage: null,
                total: 0,
                contentMaxLen: 100
            }
        },
        methods:{
            getProjects(pagenum){
                axios.get(`${this.store.apiBaseUrl}/projects`,{params:{
                   page: pagenum 
                }}).then((response)=>{
                   this.projects = response.data.results.data;
                   this.currentPage = response.data.results.current_page;
                   this.lastPage = response.data.results.last_page;
                   this.total = response.data.results.total;
                })
            },
           truncateContent(text){
            if(text.length > this.contentMaxLen){
                return text.substr(0,this.contentMaxLen) + '...';
            }
            return text;
           },
           previous(){
            if(this.currentPage > 1){
                this.currentPage--;
                this.getProjects(this.currentPage);
            }
           },
           next(){
            if(this.currentPage < this.lastPage){
                this.currentPage++;
                this.getProjects(this.currentPage);
            }
           },
        },
        mounted(){
            this.getProjects(1);
        }
    }
</script>

<style lang="scss" scoped>
</style>
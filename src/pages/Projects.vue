<template>
    <section class="container my-5" id="projects-page">
        <h1>Lista dei progetti</h1>
        <div class="row mb-5">
            <div class="col-12 col-md-6 mt-4" v-for="(project, i) in projects" :key="i">
                <ProjectCard :project="project"/>
            </div>
        </div>
        <nav aria-label="Page navigation example" class="">
            <ul class="pagination">
                <li class="page-item" :class="{'disabled': currentPage === 1}"><a class="page-link" href="#" :disabled="currentPage === 1" @click="getProjects(currentPage - 1)">Precedente</a></li>
                <li class="page-item" v-for="n in lastPage"><a class="page-link" @click="getProjects(n)">{{n}}</a></li>  
                <li class="page-item" :class="{'disabled': currentPage === lastPage}"><a class="page-link" href="#" :disabled="currentPage === lastPage" @click="getProjects(currentPage + 1)">Successiva</a></li>  
            </ul>
        </nav>
    </section>
</template>

<script>
    import axios from 'axios';
    import ProjectCard from '../components/ProjectCard.vue';
    import { store } from '../store';
    export default {
    name: "Projects",
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: null,
            total: 0,
        };
    },
    methods: {
        getProjects(pagenum) {
            axios.get(`${this.store.apiBaseUrl}/projects`, { params: {
                    page: pagenum
                } }).then((response) => {
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
                this.total = response.data.results.total;
            });
        }
    },
    mounted() {
        this.getProjects(1);
    },
    components: { ProjectCard }
}
</script>

<style lang="scss" scoped>
#projects-page{
    ul {
        li{
            a {
                cursor: pointer;
            }
        }
    }
}
</style>
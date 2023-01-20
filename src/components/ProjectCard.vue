<template>
    <div class="card h-100" style="width: 18rem;">
        <img v-if="project.cover_image" :src="`${store.imagBasePath}${project.cover_image}`" class="card-img-top" :alt="project.title">
        <img v-else src="https://via.placeholder.com/1200x840/DDDDDD/444444?text=VZ+Portfolio" alt="C/O https://placeholder.com/">
        <div class="card-body">
            <h5 class="card-title">{{project.title}}</h5>
            <div>
                <p class="card-text">{{ truncateContent }}</p>
            </div>
            <router-link class="btn vz_btn_violet mt-2" :to="{name: 'single-project', params:{slug: project.slug}}">
            Vedi il progetto
            </router-link>                    
        </div>
    </div>
</template>

<script>
import {store} from '../store';
    export default {
        name: 'ProjectCard',
        props: ['project'],
        data(){
            return {
                store,
                contentMaxLen: 100
            }
        },
        computed: {
            truncateContent(){
                if(this.project.description.length > this.contentMaxLen){
                    return this.project.description.substr(0,this.contentMaxLen) + '...';
                }
                return this.project.description;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
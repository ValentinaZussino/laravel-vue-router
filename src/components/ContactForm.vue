<template>
    <div>
        <form class="col-12 text-start" @submit.prevent="sendForm()">
            <div class="mb-3">
                <input class="border-0 border-bottom form-control" 
                    type="text" name="name" id="name" placeholder="Name" v-model="name">
            </div>
            <div class="mb-3">
                <input class="border-0 border-bottom form-control" 
                    type="text" name="email" id="email" placeholder="Email" v-model="email">
            </div>
            <div class="mb-3">
                <textarea class="border-0 border-bottom form-control"
                    name="message" id="message" cols="30"
                    rows="10" placeholder="Message" v-model="message"></textarea>
            </div>
            <button class="btn btn-lg btn-primary text-white" type="submit" :disabled="loading">Send</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import {store} from '../store';

    export default {
        name: 'ContactForm',
        data(){
            return {
                store,
                name: '',
                email: '',
                message: '',
                success: false,
                errors: {}
            }
        },
        methods: {
            sendForm(){
                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }
                axios.post(`${this.store.apiBaseUrl}/contacts`, data).then((response)=>{
                    console.log(response.data);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
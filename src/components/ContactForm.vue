<template>
    <div>
        <div v-if="success" class="alert alert-success text-start" role="alert">
            Messaggio inviato con successo!
        </div>
        <form class="col-12 text-start" @submit.prevent="sendForm()">
            <div class="mb-3">
                <input required class="border-0 border-bottom form-control" :class="{'is-invalid': errors.name}" type="text" name="name" id="name" placeholder="Nome" v-model="name">
                <p v-for="(error,index) in errors.name" :key="index" class="invalid-feedback">
                    {{ error }}
                </p>
            </div>
            <div class="mb-3">
                <input required class="border-0 border-bottom form-control" :class="{'is-invalid': errors.email}" type="text" name="email" id="email" placeholder="Email" v-model="email">
                <p v-for="(error,index) in errors.email" :key="index" class="invalid-feedback">
                    {{ error }}
                </p>
            </div>
            <div class="mb-3">
                <textarea required class="border-0 border-bottom form-control" :class="{'is-invalid': errors.message}" name="message" id="message" cols="30" rows="10" placeholder="Messaggio" v-model="message"></textarea>
                <p v-for="(error,index) in errors.message" :key="index" class="invalid-feedback">
                    {{ error }}
                </p>
            </div>
            <button class="btn btn-lg vz_btn_violet text-white" type="submit" :disabled="loading">{{loading ? 'Sending...' : 'Invia'}}</button>
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
                errors: {},
                loading: false
            }
        },
        methods: {
            sendForm(){
            this.loading = true;
                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }
                axios.post(`${this.store.apiBaseUrl}/contacts`, data).then((response)=>{
                    console.log(response.data);
                    this.success = response.data.success;
                    if(!this.success){
                        this.errors = response.data.errors;
                    }else{
                        this.name = '',
                        this.email = '';
                        this.message = '';
                    }
                    this.loading = false;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
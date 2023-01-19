<template>
    <section class="container my-5">
        <div class="row">
            <div class="col-12">
                <h1>Contatti</h1>
                <ContactForm></ContactForm>
            </div>
        </div>
    </section>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
    export default {
        name: 'ContactsComponent',
        components: {
            ContactForm
        }
    }
</script>

<style lang="scss" scoped>

</style>
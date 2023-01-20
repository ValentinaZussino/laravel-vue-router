<template>
    <section class="container my-5">
        <div class="row">
            <div class="col-7 me-1">
                <h1 class="mb-3">Contattami</h1>
                <ContactForm></ContactForm>
            </div>
            <div class="col-4 px-4 py-3 text-white">
                <div class="col-12 px-2 h-100 d-flex flex-column align-items-start">
                    <h3 class="pb-4">Riferimenti</h3>
                    <div class="">
                        <p>
                            <span class="fw-bold">Tel:</span>
                            +39 111 111111
                        </p>
                    </div>
                    <div class="">
                        <p>
                            <span class="fw-bold">Email:</span>
                            example@vzportfolio.it
                        </p>
                    </div>
                    <div class="">
                        <p>
                            <span class="fw-bold">Indirizzo:</span>
                            Via Esempio, n. 1, Città - 00000
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
    export default {
        name: 'ContactsPage',
        components: {
            ContactForm
        }
    }
</script>

<style lang="scss" scoped>
    h1, h3, span {
        letter-spacing: 1px;
    }
</style>
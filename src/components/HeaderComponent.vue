<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="vz-logo">
                    <a class="navbar-brand" href="/"><img src="/images/mstile-150x150.png" alt=""></a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse h-100" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 h-100">
                        <li class="nav-item h-100" v-for="(item, index) in menuItems" :key="index">
                            <router-link :to="{name : item.routeName}" class="nav-link">
                            {{ item.label }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        data(){
            return {
                menuItems: [
                    {
                        label: 'Home',
                        routeName: 'home'
                    },
                    {
                        label: 'About',
                        routeName: 'about'
                    },
                    {
                        label: 'Progetti',
                        routeName: 'projects'
                    },
                    {
                        label: 'Contatti',
                        routeName: 'contacts'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
header {
    height: 100px;

    nav {
        height: 100%;
        background-color:transparent;

        .vz-logo{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 8vw;

            a {
                margin: 0;
                padding: 0;
            }
        }

        ul li .nav-link{
            height: 100%;
            color: white;
            font-weight: bold;
            letter-spacing: 1.5px;
            margin-right: 10px;
            border-bottom: 2px solid transparent;
            transition: all 0.5s;

            &:hover {
                color: $vz_pink;
                border-bottom: 2px solid $vz_pink;
            }

            // &:active {
            //     color: $vz_violet;
            // }
        }
    }
}
</style>
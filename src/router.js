import { createRouter, createWebHistory } from 'vue-router';


import AboutComponent from './pages/AboutComponent.vue';
import ContactsComponent from './pages/ContactsComponent.vue';
import HomePage from './pages/HomePage.vue';
import NotfoundComponent from './pages/NotfoundComponent.vue';
import Projects from './pages/Projects.vue';
import SingleProject from './pages/SingleProject.vue';






const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/about',
            name: 'about',
            component: AboutComponent
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsComponent
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotfoundComponent
        },
    ]
});

export {router};

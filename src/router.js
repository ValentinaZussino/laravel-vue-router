import { createRouter, createWebHistory } from 'vue-router';


import AboutPage from './pages/AboutPage.vue';
import ContactsPage from './pages/ContactsPage.vue';
import HomePage from './pages/HomePage.vue';
import NotfoundPage from './pages/NotfoundPage.vue';
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
            component: AboutPage
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotfoundPage
        },
    ]
});

export {router};

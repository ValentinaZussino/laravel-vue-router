import { createRouter, createWebHistory } from 'vue-router';


import AboutComponent from './pages/AboutComponent.vue';
import ContactsComponent from './pages/ContactsComponent.vue';
import HomePage from './pages/HomePage.vue';
import NotfoundComponent from './pages/NotfoundComponent.vue';
import PostsComponent from './pages/PostsComponent.vue';
import SinglePostComponent from './pages/SinglePostComponent.vue';






const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/posts',
            name: 'posts',
            component: PostsComponent
        },
        {
            path: '/posts/:slug',
            name: 'single-post',
            component: SinglePostComponent
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
            path: '/*',
            name: 'not-found',
            component: NotfoundComponent
        },
    ]
});

export {router};

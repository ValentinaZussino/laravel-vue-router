import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from './pages/HomeComponent';
import PostsComponent from './pages/PostsComponent';
import NotfoundComponent from './pages/NotfoundComponent';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeComponent
        },
        {
            path: '/pages',
            name: 'posts',
            component: PostsComponent
        },
        {
            path: '/*',
            name: 'not-found',
            component: NotfoundComponent
        },
    ]
});

export {router};

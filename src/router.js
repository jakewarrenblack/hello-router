import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import About from './pages/about'
import User from './pages/user'

Vue.use(Router)

// by creating our own routes, we're overriding how the browser's routing works
export default new Router({
    // ensures 'back/forth' browser history works as expected
    /*
        We have to do this ourselves because, remember - this is a single-page component!
        • We never actually leave index.html, the browser only displays 1 real HTML page
        • Vue just changes what gets displayed in our #app
        • mode: 'history' means Vue will keep track of the components it has displayed
    */
    mode: 'history',
    // process.env.base_url doesn't exist, so base will just default to '/'
    // we're not really using a .env, but this is in the docs for Vue Router
    base: process.env.BASE_URL,
    routes: [
        // each route has an object, so we always start with '{}'
        {
            // homepage
            path: '/',
            // no need to type out the full path name when you use a name
            // also helps prevent problems if the path changes
            name: 'home',
            // saying: user goes to '/' ? show them the home component
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/user/:id',
            name: 'user',
            component: User
        }
    ]
})
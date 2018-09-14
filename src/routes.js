import home from './components/pages/home.vue';
import activites from './components/pages/activites.vue';
import blogs from './components/pages/blogs.vue';
import cooperation from './components/pages/cooperation.vue';
import signUp from './components/pages/signUp.vue';

export default[
    { path: '/', component: home},
    { path: '/activites', component: activites},
    { path: '/blogs', component: blogs},
    { path: '/cooperation', component: cooperation},
    { path: '/sign-up', component: signUp},
]
// import showBlogs from './components/showBlogs.vue';
// import addBlog from './components/addBlog.vue';
// import singleBlog from './components/Blog.vue';

// export default[
//     { path: '/', component: showBlogs},
//     { path: '/add', component: addBlog},
//     { path: '/blog/:id', component: singleBlog},
// ]
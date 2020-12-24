import ShowBlogs from './components/ShowBlogs.vue'
import Blogs from './components/Blogs.vue'
import SingleBlog from './components/SingleBlog.vue'
export default [
    {path: '/', component: ShowBlogs},
    {path: '/add', component: Blogs},
    {path: '/blog/:id', component: SingleBlog}
]
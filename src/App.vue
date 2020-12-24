<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// import Blogs from './components/Blogs'
// import ShowBlogs from './components/ShowBlogs'
import Header from './components/Header'

export default {
  name: 'App',
  // components:{
  //   'app-blog': Blogs,
  //   'show-blog': ShowBlogs

  // },
  components:{
    'app-header': Header
  },

  data(){
    return{
     
    }
  }
  
}
</script>

<style>
  body{
    font-family: sans-serif;
  }
</style>

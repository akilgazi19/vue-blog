<template>
  <div id="single-blog">
      <h2>{{blog.title}}</h2>
      <article>{{blog.details}}</article>
  </div>
</template>

<script>

export default {
  name: 'SingleBlog',

  data(){
    return{
     id: this.$route.params.id,
     blog: {}
    }
  },
  created(){
      this.$http.get('https://test1-5241c.firebaseio.com/posts/' + this.id +'.json').then(function(data){
          return data.json();
      }).then(function(data){
        this.blog = data;
      })
  }
  
}
</script>

<style scoped>
  #single-blog{
      max-width: 960px;
      margin: 0 auto;
  }
</style>

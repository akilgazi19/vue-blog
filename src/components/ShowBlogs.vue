<template>
  <div id="show-blogs">
    <h2>All blog list</h2>
    <input type="text" v-model="search">
    <div v-for="showBlog in filterBlogs" :key="showBlog.index" class="single-blog">
      <router-link v-bind:to="'/blog/' + showBlog.id"><h2>{{ showBlog.title | to-uppercase}}</h2></router-link>
      <article>{{ showBlog.details | snippet}}</article>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ShowBlogs',

  data(){
    return{
     showBlogs: [],
     search : ''
    }
  },
  created(){
    this.$http.get('https://test1-5241c.firebaseio.com/posts.json').then(function(data){
      return data.json();
    }).then(function(data){
      var blogsArray = [];
      for( let key in data){
      data[key].id = key;
      blogsArray.push(data[key]);
      }
       this.showBlogs = blogsArray;
    })
  }, 
  computed:{
    filterBlogs: function(){
      return this.showBlogs.filter((showBlog) => {
        return showBlog.title.match(this.search);
      });
    }
  }
}
</script>

<style scoped>
#show-blogs{
  width: 70%;
  margin: auto;
}
.single-blog{
  background-color: #eee;
  padding: 4%;
  margin: 2% 0;
}
</style>

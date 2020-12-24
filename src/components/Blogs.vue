<template>
  <div id="blog-container">
    <h2 v-show="!submitted" class="title">Create your blog post:</h2>
    <form v-show="!submitted">
        <label for="title">*Blog title:</label>
        <input type="text" v-model.lazy="blogs.title" placeholder="Input blog title">

        <label for="details">*Input blog details:</label>
        <textarea v-model.lazy="blogs.details" name="details" placeholder="Input blog details"></textarea>
        <div id="categories">
            <input type="checkbox" v-model="blogs.categories" value="Computers">
            <label for="categories">Computers</label>
            <input type="checkbox" v-model="blogs.categories" value="Games">
            <label for="categories">Games</label>
            <input type="checkbox" v-model="blogs.categories" value="Technology">
            <label for="categories">Technology</label>
            <input type="checkbox" v-model="blogs.categories" value="Smartphone">
            <label for="categories">Smartphone</label>
        </div>

        <label for="author">*Choose author:</label>
        <select name="author" v-model="blogs.authors">
            <option value="">Choose author</option>
            <option v-for="author in authors" :key="author.index">{{ author }}</option>
        </select>
        <button v-on:click.prevent="post">Add blog</button>
    </form>
     <h3 v-show="submitted">Thank for adding this blog.</h3>

    <h2 class="title">Live Preview:</h2>
    <div class="blog-preview">
        <p><strong>Title: </strong>{{ blogs.title }}</p>
        <p><strong>Details</strong></p>
        <p>{{ blogs.details }}</p>
        <p><strong>Categories:</strong></p>
        <ul>
            <li v-for="category in blogs.categories" v-bind:key="category.index">{{ category }}</li>
        </ul>
        <p><strong>Author: </strong>{{ blogs.authors }}</p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Blogs',

  data(){
    return{
        blogs:{
            title:'',
            details:'',
            categories:[],
            authors:'',
        }, 
        authors:['Dewan Akil Gazi','Md. Ashikur Rahman','Shahnoor Khan Shojib'],
        submitted: false
      
    }
  },
  methods:{
      post:function(){
          this.$http.post('https://test1-5241c.firebaseio.com/posts.json',this.blogs).then(function(data){
              console.log(data);
              this.submitted = true;
          });
      }
  }
  
}
</script>

<style scoped>
.title{
    margin-bottom: 5%;
    color: #63af96;
}
#blog-container{
    width: 50%;
    margin: auto;
}
.blog-preview{
    border: 1px solid black;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
}
#blog-container label{
    display: block;
    font-weight: 600;
    font-size: 15px;
}
#blog-container input[type=text],textarea,select,option{
    width: 100%;
    box-sizing: border-box;
} 
#blog-container input,textarea,select{
    padding: 2%;
    margin-top: 4%;
    margin-bottom:4%;
} 
#categories label,input{
    display: inline-block;
    padding: 5px;
}

.blog-preview ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.blog-preview ul li{
    display: inline-block;
    background-color: #7aceb2;
    margin-right: 2%;
    border-radius: 5px;
    padding: 4px 8px;
}

</style>

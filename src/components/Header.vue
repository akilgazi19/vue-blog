<template>
  <nav>
      <ul>
          <li><router-link to="/" exact>Blogs</router-link></li>
          <li><router-link to="/add" exact>Add Blog</router-link></li>
      </ul>
  </nav>
</template>

<script>

export default {
  name: 'Header',

  data(){
    return{
     
    }
  }
  
}
</script>

<style scoped>
nav{
    background-color: cadetblue;
    padding: 20px;
}
ul{
    display: flex;
    justify-content: center;
    list-style-type: none;
}
a{
    color: black;
    font-weight: 700;
    text-decoration: none;
}
li{
 flex-basis: 80px;
}
.router-link-active{
    background-color: #eee;
}
  
</style>

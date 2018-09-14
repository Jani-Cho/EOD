<template>
  <div>
    <h1>這裏是文章</h1>
    <show-blogs></show-blogs>
  </div>
</template>

<script>

import showBlogs from '../blogs/showBlogs.vue';

export default {
  components:{
    'show-blogs': showBlogs,



  },
  data(){
    return{


    }
  },
  methods: {


  },

}
</script>

<style>
/* @import './css/style.css'; */
</style>

<template>
  <div>
    <img src="http://eatoutwithdietitian.com/wp-content/uploads/官網封面.001-2.jpeg" alt="">
    <body-about></body-about>
    <body-sub></body-sub>
    <show-blogs></show-blogs>

  </div>
</template>

<script>
import About from '../parts/about.vue';
import Subtitle from '../parts/subtitle.vue';
import showBlogs from '../blogs/showBlogs.vue';

export default {
  components:{
    'show-blogs': showBlogs,
    'body-about': About,
    'body-sub': Subtitle,

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
img{
  width: 100%;
}
</style>

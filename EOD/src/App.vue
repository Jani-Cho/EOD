<template>
  <div>
    <main-header></main-header>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>


<script>
import Header from './components/header/header.vue';
import Footer from './components/footer/footer.vue';


export default {
  components:{
    'main-header': Header,
    'main-footer': Footer,

  },
  data(){
    return{


    }
  },
  methods: {





  },

}
</script>



<style >
/* @import url('./statics/css/style.css');
@import url('./statics/css/font-awesome.css');
@import url('./statics/css/ionicons.css');
@import url('./statics/css/bootstrap.css');
@import url('./statics/css/animate.css'); */
</style>
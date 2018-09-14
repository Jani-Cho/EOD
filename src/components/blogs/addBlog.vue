<template>
    <div id="add-blog">
        <h2>新增文章</h2>
        <form v-if="!submitted">
            <label>文章標題：</label>
            <input type="text" v-model.lazy="blog.title" required/>
            <label>文章內容：</label>
            <textarea v-model.lazy="blog.content" cols="30" rows="10"></textarea>
            <label>文章分類</label>
            <div id="checkboxes">
                <label>正餐篇</label>
                <input type="checkbox" value="正餐篇" v-model="blog.categories">
                <label>甜食篇</label>
                <input type="checkbox" value="甜食篇" v-model="blog.categories">
                <label>速食篇</label>
                <input type="checkbox" value="速食篇" v-model="blog.categories">
                <label>宵夜篇</label>
                <input type="checkbox" value="宵夜篇" v-model="blog.categories">
                <label>運動篇</label>
                <input type="checkbox" value="運動篇" v-model="blog.categories">
                <label>節慶篇</label>
                <input type="checkbox" value="節慶篇" v-model="blog.categories">
                <label>小食篇</label>
                <input type="checkbox" value="小食篇" v-model="blog.categories">
                <label>故事篇</label>
                <input type="checkbox" value="故事篇" v-model="blog.categories">
            </div>
            <button v-on:click.prevent="post">新增文章</button>
        </form>
        <div v-if="submitted">
            <h3>您已成功新增文章！</h3>
        </div>
        <div id="preview">
            <h3>預覽文章</h3>
            <p>文章: {{ blog.title }}</p>
            <p>內容: </p>
            <p>{{ blog.content }}</p>
            <p>分類: </p>
            <ul>
                <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
        </div>
    </div>

</template>

<script>
export default {
  data(){
      return{
          blog:{
            title: "",
            content: "",
            categories:[],
          },
          submitted: false,


      }
  },
  methods:{
      post: function(){
          this.$http.post('https://eod-blog.firebaseio.com/posts.json', this.blog).then(function(data){
              this.submitted = true
              console.log(this.submitted)

          });

      }

  }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>

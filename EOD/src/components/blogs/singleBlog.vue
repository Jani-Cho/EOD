<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <ul>
            <li v-for="category in blog.categories">{{ category }}</li>
        </ul>
        <artictle>{{ blog.content }}</artictle>
    </div>
</template>

<script>
export default{
    data(){
        return {
            id: this.$route.params.id,
            blog: {},
        }
    },
    created() {
        this.$http.get('https://eod-blog.firebaseio.com/posts/' +this.id + '.json').then(function(data){
            return data.json();
        }).then(function(data){
            this.blog = data;
        })
    }
}
</script>
<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>

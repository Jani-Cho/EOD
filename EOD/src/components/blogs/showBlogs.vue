<template>
    <div id="show-blogs">
        <div class="search">
            <b-input-group>

                <b-form-input type="text" v-model="search"></b-form-input>

                <b-input-group-append>
                <b-btn variant="info">搜尋文章</b-btn>
                </b-input-group-append>
            </b-input-group>
            
        </div>

        <!-- <input type="text"  placeholder="搜尋文章"> -->
        <!-- <div v-for="blog in filteredBlogs" class="single-blog">
            <router-link v-bind:to="'/blog/'+blog.id"><h2>{{ blog.title }}</h2></router-link>
            <article>{{ blog.content }}</article>

        </div> -->
        <div class="posts">
            <b-container class="bv-example-row">
            <b-row>
                <b-col cols="12" md="6">
                    <b-card title="緊張刺激！來吃麻辣燙！"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2">
                        <p class="card-text">緊張刺激！來吃麻辣燙！
                        </p>
                        <b-button href="#" variant="primary">閱讀更多</b-button>
                    </b-card>
                </b-col>
                <b-col cols="12" md="6">
                    <b-card title="Card Title"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2">
                        <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>
                </b-col>
                <b-col cols="12" md="6">
                    <b-card title="看球賽！來吃鹹酥雞吧！"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2">
                        <p class="card-text">看球賽！來吃鹹酥雞吧！
                        </p>
                        <b-button href="#" variant="primary">閱讀更多</b-button>
                    </b-card>
                </b-col>

            </b-row>
        </b-container>
        </div>
        <div class="container">
            <div class="row">

                <div class="wow fadeInUp col-md-6 col-sm-6" data-wow-delay="1s">
                    <div class="blog-thumb">
                        <a href="single-post.html"><img src="http://eatoutwithdietitian.com/wp-content/uploads/2.002-1024x675.jpeg" class="img-responsive" alt="Blog"></a>
                        <a href="single-post.html"><h1>緊張刺激！來吃麻辣燙！</h1></a>
                            <div class="post-format">
                                        <span>宵夜篇, 小食篇</span>
                                        <span><i class="fa fa-date"></i> 七月 8, 2018 </span>
                                </div>
                            <!-- <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat sit amet, consectetuer adipiscing elit, sed diam nonumm.</p> -->
                            <a href="single-post.html" class="btn btn-default">閱讀更多</a>
                        </div>
                    </div>

                    <div class="wow fadeInUp col-md-6 col-sm-6" data-wow-delay="1.6s">
                    <div class="blog-thumb">
                        <a href="single-post-2.html"><img src="http://eatoutwithdietitian.com/wp-content/uploads/1.001-4-1080x675.jpeg" class="img-responsive" alt="Blog"></a>
                        <a href="single-post-2.html"><h1>看球賽！來吃鹹酥雞吧！</h1></a>
                                <div class="post-format">
                                        <span>宵夜篇, 小食篇</span>
                                        <span><i class="fa fa-date"></i> 七月 2, 2018 </span>
                                </div>
                            <!-- <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat sit amet, consectetuer adipiscing elit, sed diam nonumm.</p> -->
                            <a href="single-post-2.html" class="btn btn-default">閱讀更多</a>
                    </div>
                    </div>



                
                <div class="wow fadeInUp col-md-12 col-sm-12" data-wow-delay="1.3s">
                <h1>關於我們</h1>
                <p>【營養師帶你吃外食】是由營養、運動、美容三大領域專門者所組成的經營團隊。我們都極度熱愛美食！「如何透過外食來纖體、健體、美體」是我們努力方向！</p>
            </div>

            </div>
        </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin.js';

export default{
    data() {
        return{
            blogs:[],
            search: '',

        }
    },
    created(){
        this.$http.get('https://eod-blog.firebaseio.com/posts.json').then(function(data){
            // console.log('這是', data)
            return data.json();

        }).then(function(data){
            // console.log('這是json()後', data)
            var blogsArray = [];
            for (let key in data){
                // console.log('這是key' , key)
                // console.log('這是' , data[key])
                data[key].id = key
                // console.log('這是id' , data[key].id)
                blogsArray.push(data[key])
                // console.log('blogsArray' , blogsArray)
            }
            this.blogs = blogsArray;
            console.log('blogs', this.blogs)

        })

    },
    mixins: [searchMixin],


}
</script>
<style>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

.search{
    margin: 60px 50px;
}
</style>

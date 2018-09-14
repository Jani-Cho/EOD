<template>
    <!-- <div id="navbar">
        <nav class="nav">
            <div class="navbar container">
                <div class="row">
                    <div class="brand">
                        <a href="index.html">營養師帶你吃外食</a>
                        <p>Eat out with Dietitian</p>
                    </div>
                    <div class="menu">
                        <ul id="nav-menu">
                            <li><router-link to="/">首頁</router-link></li>
                            <li><router-link to="/blogs">專欄</router-link></li>
                            <li><router-link to="/activites">活動</router-link></li>
                            <li><router-link to="/cooperation">合作</router-link></li>
                            <li><a href="https://www.facebook.com/EatOutwithDietitian/">臉書</a></li>
                            <li><router-link to="/sign-up">報名</router-link></li>
                        </ul>
                    </div>
                    <div class="nav-icon">
                        icon
                    </div>
                </div>
            </div>

        </nav>
    </div>  -->
    <div>
        <b-navbar toggleable type="light" variant="light">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">營養師帶你吃外食</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item><router-link to="/">首頁</router-link></b-nav-item>

      <b-nav-item-dropdown text="專欄" left>
          
        <b-dropdown-item><router-link to="/blogs">全部</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/blogs">正餐篇</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/blogs">甜食篇</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/blogs">速食篇</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/blogs">宵夜篇</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/blogs">運動篇</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/blogs">節慶篇</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/blogs">小食篇</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/blogs">故事篇</router-link></b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item><router-link to="/activites">活動</router-link></b-nav-item>
      <b-nav-item><router-link to="/cooperation">合作</router-link></b-nav-item>
      <b-nav-item href="https://www.facebook.com/EatOutwithDietitian/">臉書</b-nav-item>
      <b-nav-item><router-link to="/sign-up">報名</router-link></b-nav-item>
    </b-navbar-nav>

  </b-collapse>
        </b-navbar>
    </div>     
</template>
<script>


</script>

<template>
  <div>
       <Header>
      <div class="app">
        <p>
          居家分享
          <ul class="ull">
            <router-link tag="li" to="/fenx/book">文章</router-link> 
            <router-link tag="li" to="/fenx/fen">分类</router-link>
          </ul>
        </p>
    </div>
    </Header>
      <div>
          <router-view></router-view>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from "../../components/Footer";
import Header from '../../components/Header'
export default {
  name: "fenxiang",
   components: {
    Footer,Header
  }
};
</script>

<style lang="scss" scoped>
#app{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%
}
body,html{
  width: 100%;
  height: 100%;
}
p{
  background: #2D384A;
  color: white;
  font-size: 20px;
  height: 70px;
  width: 100%;
}
*{
  padding: 0;
  margin: 0;
}
.ull{
  list-style: none;
  display: flex;
  margin-top: -20px;
  margin-left: 10px 
}
.ull li{
  margin-left: 20px;
  font-size: 15px;
}
</style>
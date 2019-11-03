<template>
  <div class="foot">
    <div v-for="(v,i) in foot" :key="i">
        <router-link :to="`/${v.url}`">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#icon-${v.img}`" />
      </svg>
        <p>{{v.title}}</p>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer1",
  data() {
    return {
      foot: [
        { title: "木点首页", img: "zhuye" ,url:"home"},
        { title: "商品分类", img: "leimupinleifenleileibie",url:"fenlei" },
        { title: "居家分享", img: "shu",url:"fenx" },
        { title: "购物车", img: "gouwuche",url:"cart" },
        { title: "我的工坊", img:"wode",url:"my" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.foot{
    width: 100%;
    height: 60px;
    display: flex;
    box-sizing: border-box;
    /* border: 1px solid; */
    background: white;
    position: fixed;
    bottom: 0;
    z-index: 5;
}
.foot>div{
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    font-size: 14px;
}
.foot a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-decoration:none;
    color:black;
}
.foot p {
    margin: 5px 0;
}
 .foot .router-link-active{
     color: red;
 }

</style>
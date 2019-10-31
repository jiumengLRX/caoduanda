<template>
  <div>
       <Header>
      <p>居家分享</p>
    </Header>
      <div>
          购物车
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
</style>
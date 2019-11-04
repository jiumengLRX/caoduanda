<template>
  <div>
    <Header>
      <p>购物车</p>
    </Header>

    <div>
      <Cart1></Cart1>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Cart1 from "@/page/cart/Cart1";
export default {
  name: "cart",
  components: {
    Footer,
    Header,
    Cart1
  }
};
</script>

<style lang="scss" scoped>
</style>
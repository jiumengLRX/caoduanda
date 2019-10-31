<template>
  <div>
    <Header>
      <p>我的分类</p>
      <Search />
    </Header>
    <div>购物车</div>
    <Footer />
  </div>
</template>

<script>
import Search from "../../components/search";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
export default {
  name: "fenlei",
  components: {
    Footer,
    Header,
    Search
  }
};
</script>

<style lang="scss" scoped>
</style>
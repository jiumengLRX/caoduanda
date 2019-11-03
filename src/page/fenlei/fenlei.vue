<template>
  <div>
    <Header>
      <p>我的分类</p>
      <p>aa</p>
      <Search />
    </Header>
    <div><Content></Content></div>
    <Footer />
  </div>
</template>

<script>
import Search from "../../components/search";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Content from './Content'
export default {
  name: "fenlei",
  components: {
    Footer,
    Header,
    Search,
    Content
  }
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div>
    <Header>
      <p>木点工坊</p>
      <Search />
    </Header>
    <div>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Search from "../../components/search";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default {
  name: "home",
   components: {
    Footer,Header,Search
  }
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="head">
    <slot></slot>
  </div>
</template>

<script>
// import Search from "./search";

export default {
  name: "head1",
//   components: {
//     Search
//   }
};
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  flex-direction: column;
}
.head p,
div {
  margin: 0;
  width: 100%;
  height: 50%;
}
.head > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
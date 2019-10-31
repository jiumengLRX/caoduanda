<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>
// import Header from './components/Header'

  export default {
    name:"app",
  
  }
</script>

<style lang="scss">
html,body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:column; 
}
#app>div{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#app>div>div:nth-child(1){
  width: 100%;
  height: 80px;
  background: #263147;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  color: white;
  font-weight: bold;
}
#app>div>div:nth-child(2){
  flex: 1;
  overflow: auto;
}
.icon {
  width: 20px;;
  height: 20px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style> 
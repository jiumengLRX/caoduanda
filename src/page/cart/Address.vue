<template>
    <div>
        <div>
            我的地址
        </div>
        <!-- <div> -->
            <ul>
                <li v-for="(v,i) in this.$store.state.xxarr" :key="i">
                        <h3>{{v.name}}</h3>
                        <div>{{v.sheng}}{{v.shi}}{{v.qu}}{{v.dz}}</div>
                        
                </li>
            </ul>
        <!-- </div> -->
<!-- {{this.$store.state.xxarr}} -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
*{margin: 0;padding: 0;}
h3,ul,li{list-style: none;}
ul li{width: 100%;height: 60px;border: 1px solid #ccc}
</style>
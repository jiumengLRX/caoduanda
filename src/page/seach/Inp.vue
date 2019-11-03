<template>
    <div>
         <input type="text" v-model='inp' @keyup="seach"/>
    </div>
</template>
<script>
export default{
    data () {
        return {
            inp:""
        }
    },
    methods: {
        //搜索
        seach(){
            this.$store.dispatch("seach",this.inp)
        }
    }
}
</script>
<style lang="scss" scoped>
input{
    display: block;
    width: 90%;
    height: 0.2rem;
    margin: 0 auto;
}
</style>
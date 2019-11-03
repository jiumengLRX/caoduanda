<template>
    <div class="seac">
        <input type="text" @click="seach">
    </div>
</template>

<script>
    export default {
        name:"search",
        data () {
            return {
                
            }
        },
        methods: {
            seach(){
                this.$router.push("/seach")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .seac>input{
            width: 80%;
            height: 20px;
           
    }
</style>
<template>
    <div>
        <div class="content">
            <!-- <keep-alive> -->
                <List></List>
            <!-- </keep-alive> -->
        </div>
    </div>
</template>
<script>
    import List from './List'
    // import {
    //     mapState
    // } from 'vuex'
    export default {
        components: {
            List
        },
        data() {
            return {
                
            }
        },
        methods: {
            //获取数据
            getDate() {
                this.$http.get('data.json').then((res) => {
                    this.$store.dispatch("getdate", res.data.data)
                })
            },
            // get() {
            //     this.$http.get("http://www.1902A实训.com/api/fei").then((res) => {
            //         console.log(res)
            //     })
            // }
        },
        created() {
            this.getDate()
            // this.get()
        },

    }
</script>
<style lang="scss" scoped>
    .content {
        /* height: 12rem; */
        font-size: 0.3rem;
        display: flex;
        position: fixed;
        left: 0;
        z-index: 5;
        width: 100%;
        height: 100%;
        overflow: auto;

    }

    .footer {
        background: white;
        width: 100%;
        position: fixed;
        bottom: 0rem;
        z-index: 10;
    }
</style>
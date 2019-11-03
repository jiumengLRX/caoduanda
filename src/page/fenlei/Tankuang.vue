<template>
    <div >
         <div class="foote"  @click="foot">

         </div>
        <div class="foot">
            <div class="top">
                   <div class="topr">数量</div>
                   <div class="top1">
                      <p :class="{active:obj.num==1}" @click="jian">-</p>
                      <span>{{obj.num}}</span>
                      <p @click="jia">+</p>
                   </div>
            </div>
            <div class="bottom">
                <button @click="queren">确定</button>
            </div> 
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex"    
export default{
    props: {
       obj:{
          type:Object,
          default:"暂时没有数据"
       }
    },
    data () {
        return {
            
        }
    },
    methods: {
          //弹框消失
        foot(){
            this.$store.dispatch("foot")
        },
        //确认
        queren(){
            //加入购物车
            if(this.kuang==1){
                this.$router.push("/carts")
                 this.$store.dispatch("queren",this.obj)
            }
            //结算
            if(this.kuang==2){
                this.$router.push("/jiesuan")
                this.$store.dispatch("queren",this.obj)  
            }
        },
        //--
        jian(){
            if(this.obj.num==1){
                return false
            }
            this.obj.num--
        },
        //++
        jia(){
            this.obj.num++
        }
    },
    computed: {
        ...mapState(["kuang"])
    }
}
</script>
<style lang="scss" scoped>
 .foote{
     width: 100%;
     height: 11.2rem;
     background: rgba(0, 0, 0, 0.4)
 }   
.foot{
    width: 100%;
    position: fixed;
    bottom:0rem;
   .top{
       display: flex;
       justify-content: space-between;
       background: white;
       font-size: 0.35rem;
       width: 100%;
       height: 1rem;
       padding:0rem 0.3rem;
       box-sizing: border-box;
       .topr{
           height: 1rem;
           line-height: 1rem;
       }
       .top1{
           display: flex;
           p{
               width: 0.5rem;
               height:0.5rem;
               text-align: center;
               /* line-height: 0.6rem; */
               border-radius:50%; 
               border: 0.02rem solid;
               margin: auto 0;
           }
           span{
               display: block;
               width: 0.7rem;
               text-align: center;
               line-height:1rem;
           }
       }
   }
   .bottom{
       button{
           width: 100%;
           height: 0.8rem;
           text-align: center;
         color: white;
         font-size: 0.3rem;
           display: block;
           border:none;
           background: #263147;
       }
   }
}
.active{
    border: 0.02rem solid gray !important;
}
</style>
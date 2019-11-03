<template>
  <div>
   
    <Header >
        <p>我的工坊</p>
    </Header>
    <div>
      <div class="head-box" v-show="done">
        <p>
          账号:
          <input type="text" v-model="user" />
        </p>
        <p>
          密码:
          <input type="text" v-model="pass" />
        </p>

        <p><button @click="add()">注册</button></P>
      </div>


      <div class="head-box" v-show="dong">
        <p>
          账号:
          <input type="text" v-model="username" />
        </p>
        <p>
          密码:
          <input type="text" v-model="passname" />
        </p>

        <p><button @click="addCart()">登录</button></P>
      </div>

      <div class="head-box" v-show="good" >
        登陆成功！！！！
      </div>

      <div>
      <ul class="head-ul">
        <router-link to="/order" tag="li">
          <p class="head-ul-img">
           
            
          </p>
          <p>我的订单</p>
        </router-link>
        <router-link to="/coupon" tag="li">
          <p class="head-ul-img"></p>
          <p>优惠券中心</p>
        </router-link>
        <router-link to="/about" class="head-ul-li" tag="li">
          <p class="head-ul-img"></p>
          <p>关于我们</p>

         
        </router-link>
      </ul>
    </div>


    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default {
  name: "my",
  components: {
    Footer,
    Header
  },
  data() {
    return {
      user:"",
      pass:"",
      username:"",
      passname:"",
      list:[],
      done:true,
      dong:false,
      good:false,
      arr:[]
    }
  },
   methods: {
    add(){
      // var a =localStorage.getItem("todo")
      // var list2 =this.listl;
      if(this.user==""||this.pass==""){
        alert("请输入信息")
        return
      }else{
         this.list.push({userName:this.user,passName:this.pass})
      localStorage.setItem("list",JSON.stringify(this.list))
        this.done=false
        this.dong=true
      }
     
    
      
    },
    addCart(){
     
      this.arr=JSON.parse(localStorage.getItem("list"))
    
      if(this.arr.userName==""||this.passname==""){
          alert("不能输入为空")
          return
      }else{
         for(var i in this.arr){
        if(this.username==this.arr[i].userName&&this.passname==this.arr[i].passName){
          this.dong=false
          this.good=true
        }

      }

      }
     

      
     
    }
  },
};
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.head-box{
  height: 120px;
  background: #2f374a;
  text-align: center;
  p{
    
  }
}
.head-ul {
  list-style: none;
  width: 100%;
}
.head-ul li {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ddd;
  line-height: 40px;
  display: flex;
}
.head-ul-img {
  width: 30px;
  height: 100%;
  border: 1px solid #ddd;
}
.head-ul-li {
  margin-top: 10px;
}

</style>
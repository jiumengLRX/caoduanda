<template>
  <div class="box">
    <!-- {{this.$store.state.addCart}}
    {{this.$store.state.addCart}} -->
    <!-- {{this.address}} -->

    
    <Header>
      
        <!-- <div class="top"> -->
            <p class="dis">
            <router-link to="/Cart" tag="span">〈</router-link>
            
            <span>结算</span>
            <span></span>
            </p>
        <!-- </div> -->
    </Header>

    <!-- 中间 -->
        <div>

        
    <ul class="goods">
      <li v-for="(v,i) in this.$store.state.addCart" :key="i">
       
        <div class="d1">
          <img :src="'./img/'+v.img" alt />
        </div>
        <div class="d2">
            <div class="p1">{{v.name}}</div>
            <div class="p2">{{v.num}}件</div>
            <div class="p3">￥{{v.price}}</div>
        </div>
      </li>
    </ul>
    <div class="yhq">
      <div>优惠券</div>
      <div>暂无可选优惠券</div>
    </div>


    <div class="ddzj">
      <div class="span1">订单总价</div>
      
      <div class="red">￥{{dingdan}}</div>
    </div>



    <div class="lxfs">联系方式</div>
    <div class="xm">
      <label for>姓名</label>

      <input type="text" v-model="name"/>
    </div>

    <div class="xm">
      <label for>电话</label>

      <input type="text" v-model="tel"/>
    </div>


    <div class="xm">
      <label for>电子邮箱</label>

      <input type="text" placeholder="用于接收订单状态" />
    </div>



    <div class="lxfs">收货地址</div>
    <div class="xm">
      <label for>地区</label>

      <select name id v-model="sheng">
        <option value="省">省</option>
        <option value="北京市">北京市</option>
        <option value="天津市">天津市</option>
      </select>
      <select name id v-model="shi">
        <option value="市" ckecked="checked">市</option>
        <option value="北京市">北京市</option>
        <option value="山东省">山东省</option>
      </select>
      <select name id v-model="qu">
        <option value="县,区" ckecked>县,区</option>
        <option value="东城区">东城区</option>
        <option value="丰台区">丰台区</option>
      </select>
    </div>


    <div class="xm">
      <label for>详细地址</label>

      <input type="text" v-model="dz"/>
    </div>



    <div class="xm">
      <label for>邮编</label>

      <input type="text" placeholder="选填" />
    </div>



    <div class="lxfs">留言</div>
    <!-- <div class="finall"> -->
      <input type="text" placeholder="选填" class="liuyanxuantian"/>
    <!-- </div> -->
</div>
            <!-- 微信支付 -->
            <div class="weixin" @click="a()">使用微信支付</div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Bus from "@/Bus";
export default {
  name: "Jiesuan",
  components:{Header},
  data() {
    return {
      id: "",
      arr: [],
      name:'',
      tel:'',
      sheng:'',
      shi:'',
      qu:'',
      dz:'',
      address:[]
    };
  },
  mounted() {
    Bus.$on("fn", v => {
      this.arr = v;
      // console.log(this.arr);
    });
  },
  methods: {
    a() {
        var obj={name:this.name,sheng:this.sheng,shi:this.shi,qu:this.qu,dz:this.dz}
        this.address.push(obj)
         this.$store.commit("xx", obj);
      console.log(this.arr);
      this.$router.push({
          path:"/Address"
      })
    }
  },
  created() {},
  computed: {
    dingdan() {
      var sum = 0;
      var cart = this.$store.state.addCart;
      for (var i in cart) {
        sum += cart[i].num * cart[i].price;
      }
      return sum;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
ul,
li,
p {
  list-style: none;
}
.dis{display: flex}
.dis span{display: block;width: 30%;line-height: 80px}
.dis span:nth-child(2){text-align: center;padding-left: 20px}
.top {
  width: 100%;
  height: 70px;
  background: #263147;
  font-size: 25px;
  line-height: 70px;
  text-align: center;
  color: white;
  display: flex;
  justify-content: space-around;
}

.top > div:nth-child(1) {
  width: 30%;
}
.top > div:nth-child(2) {
  width: 30%;
}
.top > div:nth-child(3) {
  width: 30%;
}

/* .top span{display: block;width: 50%;padding-left: 30px;text-align: left} */
.goods{width: 100%;height: auto}

.goods li {
  display: flex;
  /* font-size: 18px; */
  height: 80px;
  border: 1px solid #ccc;
  
}
.d1 {
  width: 20%;height: 50px;
}
.d2 {
  width: 80%;
  padding: 10px 20px;
  height: 50px;
}
.goods li .d1 img {
  width: 80px;
  height: 60px;
  padding-top: 5px;
  margin: 5px;
  border-radius: 5px;
}
.p1 {
  font-size: 18px;height: 10px;
}
.p2 {
  padding: 10px 0 10px;height: 10px;
}
.p3 {
  color: red;height: 10px;
}
.xia {
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.xia li {
  border-bottom: 1px solid #ccc;
}
.xia li .span1 {
  padding-right: 200px;
  padding-left: 20px;
  color: #919394;
}
.red {
  color: red;
}
.ss {
  background: #f6f6f6;
}
.span2 {
  padding-left: 20px;
}
.span3 {
  padding-left: 20px;
  color: #919394;
}
.span4 {
  padding-left: 12px;
  padding-right: 12px;
}
select {
  margin: 0 12px 0 12px;
}
input {
  outline: none;
  border: none;
  padding-left: 10px;
}
.box {
  height: 100%;
}
.middle {
  height: 100%;
}
.middle > div:nth-chilkd(2) {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.box {
  box-sizing: border-box;
  width: 100%;
}
/* .middle > div:nth-chilkd(3) {
  width: 100%;
  height: 60px;
} */
/* .footer{width: 100%;height: 30px;background: #67B366;position: fixed;bottom:0;} */
/* .footer{width: 100%;height: 40px;background: pink;
position: fixed;bottom: 0;
} */
.yhq {
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
}
.yhq > div:nth-child(1) {
  width: 50%;
  color: #919394;
  padding-left: 5px;
}
.yhq > div:nth-child(2) {
  width: 50%;
  color: black;
  text-align: right;
  padding-right: 5px;
}
.ddzj {
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
}
.ddzj > div:nth-child(1) {
  width: 50%;
  color: #919394;
  padding-left: 5px;
}
.ddzj > div:nth-child(2) {
  width: 50%;
  color: red;
  text-align: right;
  padding-right: 5px;
}
.lxfs {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #f6f6f6;
  color: #919394;
  padding-left: 5px;
  font-size: 16px;
}
.xm {
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.xm > label:nth-child(1) {
  width: 20%;
  color: #919394;
  padding-left: 5px;
}
.xm > div:nth-child(2) {
  width: 75%;
}
select {
  width: 70px;
  height: 30px;
}
label {
  margin-left: 5px;
  font-size: 14px;
}
.liuyanxuantian{height: 20px;}
/* .finall {
  margin-bottom: 20px;
} */
.weixin {
  width: 100%;
  height: 40px;
  background: #67b366;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  color: white;
  /* z-index: 100;
  position: fixed;
  bottom: 0; */
}

</style>
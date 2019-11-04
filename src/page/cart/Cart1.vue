<template>
  <div class="cart">
    <!-- <div class="top">购物车</div> -->
    <div>
      <ul>
        <li v-for="(v,i) in data" :key="i" @click="allflag(v)">
          <div class="c1">
            <input type="checkbox" :value="v.id" v-model="arr" />
          </div>
          <div class="c2">
            <img :src="'img/'+v.img" alt />
          </div>
          <div class="c3">
            <p class="p1">{{v.name}}</p>
            <p class="p2">
              <span class="s1">￥{{v.price}}</span>
              <svg class="icon" aria-hidden="true" @click="del(i)">
                <use xlink:href="#icon-lajitong" />
              </svg>
              <button class="jian" @click="jian(i)">-</button>&nbsp;&nbsp;
              <span>{{v.num}}</span> &nbsp;&nbsp;
              <button class="jia" @click="v.num++">+</button>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div class="xia">
      <div class="qx">
        <input type="checkbox" class="in" v-model="allcheck" />全选
      </div>
      <div class="zj">
        总计:
        <span class="s1">￥{{zongjia}}</span>
        <br />
      </div>

      <div class="jiesuan" @click="add()">结算({{count}})</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: [],
      //存放被选中的数据
      arr: [],
      allcheck: false
    };
  },
  mounted() {
    axios.get("/data.json").then(res => {
      // console.log(res);
      this.data = res.data;
    });
  },
  methods: {
    jian(i) {
      if (this.data[i].num == 1) {
        //  return false
        window.confirm("确定要删除么");
        this.data.splice(i, 1);
      } else {
        this.data[i].num--;
      }
    },
    del(i) {
      this.data.splice(i, 1);
    },
    allflag(v) {
      // console.log(v);
      v.flag = !v.flag;
    },
    add() {
      // var cart = this.$store.state.cart;
      // var obj = { id: v.id, name: v.name, price: v.price };
      // for (var k in this.data) {
      //   for (var i in this.arr) {
      //     if (this.arr[i] == this.data[k].id) {
      //       num += this.data[k].price * this.data[k].num;
      //     }
      //   }
      // }
      console.log(this.arr);
      this.$router.push({
        path: "/Jiesuan"
      });
      for (var i in this.arr) {
        for (var j in this.data) {
          if (this.data[j].id == this.arr[i]) {
            this.$store.commit("app", this.data[j]);
          }
        }
      }
    }
    //add方法加入到结算页面
    // add(v){
    //   var cart=this.$store.state.cart
    //   var obj={id:v.id,name:v.name,price:v.price}
    //   var index=cart.findIndex((item,key,arr)=>{
    //     return item.id==v.id
    //   })
    //   if(index==-1){
    //     this.$store.commit('addcart',obj)
    //   }else{
    //     this.$store.commit('addnum',index)
    //   }
    // }
  },
  computed: {
    // 总价
    zongjia() {
      var num = 0;
      for (var k in this.data) {
        for (var i in this.arr) {
          if (this.arr[i] == this.data[k].id) {
            num += this.data[k].price * this.data[k].num;
          }
        }
      }
      return num;
    },
    //结算后面的条数
    count: function() {
      var shu = 0;
      for (var i in this.arr) {
        for (var j in this.data) {
          if (this.arr[i] == this.data[j].id) {
            shu = this.arr.length;
          }
        }
      }
      return shu;
    }
  },
  watch: {
    allcheck: function(newval) {
      if (newval) {
        this.arr = [];
        for (var i in this.data) {
          this.arr.push(this.data[i].id);
        }
      } else if (newval == false && this.arr.length == this.data.length) {
        this.arr = [];
      }
    },

    arr: function(newval) {
      if (newval.length == this.data.length && this.data.length != 0) {
        this.allcheck = true;
      } else {
        this.allcheck = false;
      }
      // for(var i in this.arr){
      //   for(var j in this.data){
      //     if(this.data[j].id==this.arr[i]){
      //       this.arr=[]
      //       var id=this.data[j].id
      //       this.$store.commit('app',this.data[id])
      //     }
      //   }
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  box-sizing: border-box;
  //   background:#ccc;
}
* {
  margin: 0;
  padding: 0;
}

.cart {
  background: #f6f6f6;
  width: 100%;
  // height: ;
  display: flex;
  flex-direction: column;
}
.cart > div:nth-child(1) {
  flex: 1;
  overflow: auto;
}
.top {
  width: 100%;
  height: 70px;
  background: #263147;
  font-size: 25px;
  line-height: 70px;
  text-align: center;
  color: white;
}
img {
  width: 80px;
  height: 80px;
  display: block;
  margin: 10px auto;
  border-radius: 5px;
}
ul {
  width: 100%;
}
ul li {
  width: 100%;
  height: 100px;
  display: flex;
  margin-top: 5px;
  background: white;
}
ul li .c1 {
  width: 10%;
}
// ul li .c1 input{line-height: 100px;text-align: center}
.c1 input {
  vertical-align: text-bottom;
  margin-bottom: -30px;
  margin-left: 15px;
}
ul li .c2 {
  width: 30%;
}
ul li .c3 {
  width: 60%;
}
.p1 {
  margin-top: 10px;
  font-size: 16px;
}
.p2 {
  margin-top: 35px;
  //   text-align: right;
  margin-right: 20px;
}
.icon {
  padding-right: 15px;
}
.s1 {
  color: red;
  padding-right: 50px;
  text-align: left;
}
.jia {
  text-align: right;
}
.jian {
  background: #eeeeee;
  outline: none;
  width: 20px;
  height: 20px;
  border: none;
}
.jia {
  background: #eeeeee;
  outline: none;
  width: 20px;
  height: 20px;
  border: none;
}
.xia {
  width: 100%;
  line-height: 60px;
  background: white;
  display: flex;
  bottom: 62px;
  box-sizing: border-box;
}
.qx {
  width: 30%;
  padding-left: 20px;
}
.zj {
  width: 45%;
}
.jiesuan {
  width: 23%;
  height: 60px;
  background: #263147;
  color: white;
  line-height: 60px;
  text-align: center;
}
.yf {
  color: #ccc;
}
</style>
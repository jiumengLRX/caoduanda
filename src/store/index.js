import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)
// import axios from "axios"
export default new Vuex.Store({
  state: {
    //获取数据
    info:[],
    list:[
     
    ],
    //导航列表样式默认值
    n:0,
    //销量排序默认值
    flag:false,
    //价格排序默认值
    flg:false,
    //新品排序默认值
    fl:false,
    //三角图标加样式的默认值
    v:"",
    //销量，新品，价格加样式的默认值
    clss:0,
    //弹框默认值
    tan:false,
    //状态值
    kuang:0,
    //购物车数据
    carts:[],
     //结算数据
     settle:[],
     aa:[
       {name:"111"},
       {name:"222"},
       {name:"333"}
     ]
  },
  mutations: {
    //获取数据
    GETDATE(state,res){
       state.info=res
       state.list=res
    },
    //筛选
    SHAI(state,item){
      state.clss=0;
      state.v=""
      state.item=item
        if(item=="全部"){
           state.info=state.list
        }else{
          state.info=state.list.filter((val)=>{
               return val.leixing==item
           })
        }
    },
    //改变n的值
    M(state,index){
       state.n=index
    },
    //销量排序
    XIAO(state,i){
      state.clss=i
      state.flag=!state.flag
      if(state.flag==true){
        state.info.sort((a,b)=>{
          return b.xiaoliang-a.xiaoliang
       })
      }else{
        state.info.sort((a,b)=>{
          return a.xiaoliang-b.xiaoliang
       })
      }
    },
    //价格排序
    PRICE(state,i){
      state.clss=i
       state.flg=!state.flg
       if(state.flg==true){
         state.v=1
        state.info.sort((a,b)=>{
          return a.price-b.price
         })
       }else{
        state.v=2
        state.info.sort((a,b)=>{
          return b.price-a.price
       })
       }
    },
    //新品排序
    XIN(state,i){
      state.clss=i
       state.fl=!state.fl
       if(state.fl==true){
        state.info.sort((a,b)=>{
          return a.time-b.time
         })
       }else{
        state.info.sort((a,b)=>{
          return b.time-a.time
       })
       }
    },
   //加入购物车
   CART(state){
       state.kuang=1
       state.tan=true
   },
    //立即购买
   GOUMAI(state){
     state.kuang=2
     state.tan=true
   },
   //弹框消失
   FOOT(state){
    state.tan=false
   },
   //确认
   QUEREN(state,obj){
      //弹框消失
    state.tan=false
     //购物车数据
       if(state.kuang==1){
          let index=state.carts.findIndex((val)=>{
              return val.name==obj.name
          })
          if(index==-1){
             state.carts.push(obj)
          }else{
            state.carts[index].num++
          }
       }
       //结算数据
       if(state.kuang==2){
          let index=state.settle.findIndex((val)=>{
             return val.name==obj.name
          })
          if(index==-1){
             state.settle.push(obj)
          }else{
            state.settle[index].num++
          }
       }
   },
   //搜索
   SEACH(state,inp){
      //  axios.get("data.json").then((res)=>{
      //      state.list=res.data.data
      //      state.info=state.list.filter((val)=>{
      //          return val.name.includes(inp)==true
      //      }) 
      //      console.log(state.info)
      //  })
      let m=state.aa.filter((val)=>{
           return val.name.indexOf(inp)>-1
      })
      console.log(m)
      
   }
  },
  actions: {
    //获取数据
    getdate({commit},res){
       commit("GETDATE",res)
    },
    //筛选
    shai({commit},item){
      commit("SHAI",item)
    },
    //改变n的值
    m({commit},index){
       commit("M",index)
    },
    //销量排序
    xiao({commit},i){
      commit("XIAO",i)
    },
    //价格排序
    price({commit},i){
      commit("PRICE",i)
    },
    //新品排序
    xin({commit},i){
      commit("XIN",i)
    },
    //加入购物车
    cart({commit}){
      commit("CART")
    },
    //弹框消失
    foot({commit}){
      commit("FOOT")
    },
    //立即购买
    goumai({commit}){
      commit("GOUMAI")
    },
    //确认
    queren({commit},obj){
        commit("QUEREN",obj)
    },
    //搜索
    seach({commit},inp){
         commit("SEACH",inp)
    }
  },
  modules: {
  },
  plugins:[createPersistedState({
     reducer(val){
       return{
         info:val.info,
         n:val.n,
         item:val.item
       }
     }
  })]
})

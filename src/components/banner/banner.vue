<template>
  <div class="div1">
        <!-- 轮播图 -->
    <div class="slider">
      <li>
         <img width="100%" height="100%" :src="seller.avatar">
      </li>
    </div> 

        <!--搜索栏-->
    <div class="search">
      <div class="left">
      <input style="text-indent:4px;" id="inp" v-model='value' type="text" placeholder="搜索品牌/系列/型号">
      </div>
      <!-- search 那个放大镜按钮-->
      <div class="right">
        <img class="search_icon" @click="search_goods" width="100%" height="100%" :src="seller.search">
      </div>
    </div>

        <!--  钱柜-->
    <div class="qiangui">
      <img width="100%" height="100%" :src="seller.qiangui">
    </div>

    <!--  九大块 -->
    <div class="items">
      <router-link to="list/dhj">
        <div class="dhj" >
            <img class="img" :src="seller.dhj">
            <div>{{result[0]}}</div>
        </div>
      </router-link>

      <router-link to="list/fjj">
        <div class="dhj" >
            <img class="img" :src="seller.fjj">
            <div>{{result[1]}}</div>
        </div>
      </router-link>

      <router-link to="list/hjpj">
        <div class="dhj" >
            <img class="img" :src="seller.hjpj">
            <div>{{result[2]}}</div>
        </div>
      </router-link>

      <router-link to="list/hjsb">
        <div class="dhj" >
            <img class="img" :src="seller.hjsb">
            <div>{{result[3]}}</div>
        </div>
      </router-link>

      <router-link to="list/qgsb">
        <div class="dhj" >
            <img class="img" width="50" height="50%" :src="seller.qgsb">
            <div>{{result[4]}}</div>
        </div>
      </router-link>

      <router-link to="list/qgpj">
        <div class="dhj" >
            <img class="img" :src="seller.qgpj">
            <div>{{result[5]}}</div>
        </div>
      </router-link>

      <router-link to="list/ldbh">
        <div class="dhj" >
            <img class="img" :src="seller.ldbh">
            <div class="name">{{result[6]}}</div>
        </div>
      </router-link>

      <router-link to="list/gywj">
        <div class="dhj" >
            <img class="img" :src="seller.gywj">
            <div>{{result[7]}}</div>
        </div>
      </router-link>

      <router-link to="list/hc">
        <div class="dhj" >
            <img class="img" :src="seller.hc">
            <div>{{result[8]}}</div>
        </div>
      </router-link>
    </div>

    <!--  埃森招商 左右li  -->
    <div class="foot">
      <ul>
        <li>埃森招商体验</li>
        <li>埃森社区</li>
      </ul>
    </div>

        <!--底部 版权-->
    <div class="feet">
    <span></span><br>
      <span>
            Copyright © 2013-2020 Essen Mall
      </span>
      <br>
      <span></span><br>
        <span>
            All Rights Reserved
      </span>
      <br>
      <span></span><br>
      <span>
            技术支持：鼎灏网络科技
      </span>
      
    </div>
  </div> 
</template>

<script type="text/javascript">
  import axios from "axios";
  import $ from "jquery";
  export default {
    data() { 
          return {
            seller:{},
            result:{},
            machines:[],
            value:''  
          }   
      },
      methods:{
        search_goods(){
          console.log(this.value);
        }
    },
    created(){
        axios.get('/api/seller')
          .then( (response)=> {
             var seller=response.data.data;
             this.seller=response.data.data;
             this.result = seller.detail;
            })
              .catch((error)=> {
              console.log(error);
          });

              /* 请求foo.json里面的数据,做成详情页 */
        axios.get("../../../static/fjj.json")
          .then( (res)=> {
              //console.log(res.data.data[1].id); // 1
              this.machines = res.data.data;
          })
            .catch((error)=> {
            console.log(error);
        });


    }
}
</script>

<style type="text/css">
*{
    margin: 0;
    padding: 0
}
input{
   border:none;
}
li{
    list-style: none;
    padding: 0;
    margin: 0
}

.div1{
      background: #f5efef
}
  
.slider{
    background: #f5efef
}
.right{
    width: 30px;
    height: 30px;
    float: right;
    margin-top: 2px;
    margin-right: 22px;
}

.search{
    position: relative;
    width: 100%;
    height: 42px;
    margin-top: 8px;
    background: #f5efef;
} 
 
#inp{
    font-size:16px;
    height: 30px;
    width: 80%;
    position: absolute;
    left: 12px;
}

.qiangui{
    width: 100%;
}

.items{
    width: 96%;
    height: 300px;
    margin: 0 auto;
    margin-top: 5px;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    background: #fafafa;
    box-sizing: border-box;
}

.dhj{
    width: 33.33%;
    height: 100px;
    text-align: center;
    color:#989898 ;
    float: left;
    border-right:1px solid #ccc;
    border-bottom:1px solid #ccc;
    box-sizing: border-box;
}

.img{
    padding-bottom: 6px;
    margin-top: 18px;
    width: 52px;
    height: 52px;
    text-align: center;
}

.foot{
    width: 96%;
    height: 50px;
    border:1px solid #ccc; 
    margin: 0 auto;
    margin-top:10px;
    box-sizing: border-box;
}
.foot ul{
    width:96%;
    height:50px;
}

.foot ul li {
    float:left;
    width:50%;
    height:50px;
    text-align: center;
    line-height: 50px;
    color: #989898;
}

.foot ul li:nth-of-type(1) {
    box-sizing: border-box;
    border-right:1px solid #ccc;
}

.feet {
    width:96%;
    height:auto;
    margin:0 auto;
    padding-bottom:10px;
    text-align: center;
    color: #989898;
    font-size: 14px;
}
</style>

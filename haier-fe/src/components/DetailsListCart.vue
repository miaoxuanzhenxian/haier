<template>
    <div class="detailsList">
      <div v-for="(pdetalis,index) in positionDetails" :key="index">
            <div class="details-top">
                <img @click="back" src="//cdn09.ehaier.com/shunguang/H5/www/img/addressBack@2x.png">
            <h1>商品详情</h1>
             </div> 
        <!-- 轮播图 -->
         <div class="swiper-container">
            <div class="swiper-wrapper detail-banner">
           <img class="swiper-slide" :src="Bdetalis.Bimgurl" v-for="(Bdetalis,index) in pdetalis.banner" :key="index"> 
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-scrollbar"></div>
        </div>
     <!-- 价格 -->
     <div class="pricedetalis">
         <div class="newprice-deta">
             <span>抢购价</span>
             <i>¥</i>
             <b>{{pdetalis.newprice}}</b>
         </div>
         <del> <i>¥</i>&nbsp;{{pdetalis.price}}</del>
     </div>
        <!-- title -->
        <div class="editor-titledeta">
            <span>自营</span>
            <h1>{{pdetalis.titlie}}</h1>
        </div>
        <!-- 商品描述 -->
        <div class="description-detail">
            <span>{{pdetalis.detal}}</span>
        </div>
        <!-- 活动描述 -->
        <div class="activity-contentdeta">
            {{pdetalis.huodong}}
        </div>
        <!-- 领劵 -->
       <div class="discount-coupon">
           <span>领券</span>
            
           <span class="youhuiq-span">
               <img src="../assets/images/quan--small@2x_l.png" alt="">
               <span class="ws-binding">50.00元优惠券</span>
              <img src="../assets/images/quan--small@2x_r.png" alt="">
            </span>
           <span><img class="gengduohanb" src="../assets/images/moregengduo@2x.png" alt="更多"></span>
       </div>
        <!-- 商品数量与库存 -->
        <div class="commodity-details-kucun">
            <div style="shuliang-kuc">
                <span>数量:</span>
           </div>
            <div class="commodity-btn-kucun">
              <button @click="amountBtnDetalis()">-</button>
              <i><input type="text" value="0" size="1" v-model="count"></i>
              <button @click="addamountBtnDetalis()">+</button>
            </div>
            <div class="kuncun-com">
                <i>库存:</i><em>{{pdetalis.kucun}}</em>
            </div>
        </div>
        <!-- 送至 -->
        <div class="address-songhuo">
            <div class="address-dizhi">
              <span>送至:</span>
              <i> {{pdetalis.address}}</i>
              <em>></em>
            </div>
            <div>
                <span class="youhuo-predict">有货</span>
                <span>预计(2019年10月1号)送达</span>
            </div>
        </div>
        <!-- 购买详情 -->
        <div class="detalis-bg-white">
            <div>
            <span>[成套购买]</span>&nbsp;
            <span>设计师推荐方案</span>
            <i>></i>
        </div>
        <div>
            <span>[白条支付]</span>&nbsp;
            <span>查看更多</span>
            <i>></i>
        </div>
         <div>
            <span>图文详情</span>
            <i>></i>
        </div>
        <div>
            <span>规格参数</span>
            <i>></i>
        </div>
        <div>
            <span>商品评价</span>
            <span class="margin-right-pingjia">888条评论 好评率99%</span>
            <i>></i>
        </div>
        <div style="height:3rem">
            <p></p><span></span>
         </div >
         </div>
    <!-- 底部 -->
        <div class="countdown-timer">
            
           <Daojishide :endTime='pdetalis.timerend'></Daojishide>
        
        </div>
        <div class="detalisfooterf">
            <DetalisFooterF></DetalisFooterF>
        </div>
     </div>
 </div>
</template>
<script>
import DetalisFooterF from "../components/DetalisFooterF"
import Daojishide from "../components/Daojishide"
import Swiper from 'swiper' //swiper .js
 import 'swiper/css/swiper.css'// swiper.cssnpm 
export default {
    name:"DetailsListCart",
    data(){
        return{
            count:1,
            positionDetails:[
                {"banner":[
                    {   id:"b11",
                       Bimgurl: "//cdn50.ehaier.com/marketing-center-web/changeactivity/image/2019/09/5722d53d49894c50935eb13a6882dda9.jpg@750_"
                       },
                    {   id:"b12",
                        Bimgurl:"//cdn50.ehaier.com/mobilemall-admin-web/picmanagecontroller/image/2019/06/72c5f6d7e21d4152bac698461f51803c.jpg@750_"},
                    {   id:"b13",
                        Bimgurl:"//cdn50.ehaier.com/mobilemall-admin-web/picmanagecontroller/image/2019/06/72c5f6d7e21d4152bac698461f51803c.jpg@750_"},
                    {   id:"b14",
                       Bimgurl: "//cdn50.ehaier.com/mobilemall-admin-web/picmanagecontroller/image/2019/06/e2dff4ed82df472cac02e4186185b0ea.jpg@750_"},
                   
                ],
                nuberitems:"1",
                price:"3899.00",
                newprice:"2899.00",
                titlie:"Haier/海尔 彩电 LU65C51",
                detal:"65英寸4K超高清智能 全新人工智能 语音操控 360°立体环绕音 2G+16G超大内存",
                huodong:"【微店主特权日】①活动时间9月26日0:00-28日24:00，活动价2899元，前200台下单立减300元，到手价2599元。②活动期间每天0点、8点、14点、20点抢限量优惠券。③活动期内累计销售主会场内家电产品达标,可获得实用家电奖励，最高可获得1299元空气净化器一台。",
                kucun:"30",
                evaluate:"944条评价,好评率99%",
                xiaoliang:"4565",
                address:"山东 崂山区",
                timerend:"2019-10-01 9:51:00",
                }
            ]
        }
    },
     
    methods:{
        amountBtnDetalis(count){
            if(this.count<=0){
                alert('不能再减了'),
                this.count=0;
            }else{
                this.count-=1
            }
            },
        addamountBtnDetalis(count){
            this.count++;
          },    
             back(){
                 this.$router.back()
             }

    },
     mounted(){
        new Swiper(".swiper-container",{
            pagination: {
                 el: '.swiper-pagination',
            },
            // autoplay:true,
            loop: true, // 循环模式选项
            scrollbar: {
            el: '.swiper-scrollbar',
           },
 
        })
},
 components:{
    Daojishide,
    DetalisFooterF
}
}
</script>
<style  scoped>
.detailsList{
    overflow: hidden;
    
    position: relative;
}
.details-top{
    position: fixed;
    top: 0;
    height: 1.066667rem;
    width: 100%;
    background: #fff;
    z-index: 666;
}
.details-top>h1{
    left:40%;
    font-size: .533333rem;
    text-align: center;
    line-height: 1.066667rem;

}
.details-top>img{
   width: .626667rem;
   position: absolute;
   margin-left: .426667rem;
   margin-top: .26rem

}
.detail-banner{
    position: relative;
    top: 1.066667rem;
   display: flex;
   visibility: visible;
}
.detail-banner>img{
    float: left !important;
    width:100%;
    height: 100%;
     display: block;
    
}
/* 价格 */
i,em,b{
    font-style: normal;
}
.newprice-deta>span{
    font-size: .373333rem;
    color: #333;
}
.newprice-deta>i{
        font-size: .373333rem;
    color: #ef2765;
    margin-top: .16rem;
}
.newprice-deta>b{
     margin-top: .16rem;
font-size: 24px;
font-weight: 500;
    color: #FF6026;
}
del{
        width: 100%;
    font-size: .373333rem;
    color: #999999;
    text-decoration: line-through;
    margin-left: .4rem;
}
/* 详情 */
.editor-titledeta,.newprice-deta,.commodity-details-kucun,.description-detail{
    margin: .16rem 0 .16rem .426667rem;
}
.editor-titledeta{
    display: flex;
}
.editor-titledeta>span{
    font-size: .32rem;
    border: .026667rem solid #2979FF;
    padding: 0 .053333rem;
    color: #2979FF;
    text-align: center;
}
.editor-titledeta>h1{
    font-size: .533333rem;
    color: #333; 
    margin-left: .16rem;
}
.description-detail>span{
    color: #666;
    font-size: .32rem;
}
.activity-contentdeta{
    color: #2577e3!important;
    padding-left: .426667rem;
    margin-right: 0.42rem;
    line-height:.546667rem;
}
/* 库存 */
.commodity-details-kucun{
    display: flex;
    width: 100%;
    height: 100%;
}
.commodity-details-kucun>div{
   
    padding: .133333rem;
    height: .48rem;
    text-align: left;
    color: #333;
}
.shuliang-kuc{
width: 1.6rem;
}
.commodity-btn-kucun{
 
    background: #fff;
      text-align: left;
    width: 3.893333rem;
    padding: .133333rem;
    border: #ccc .026667rem solid;
}
.commodity-btn-kucun>button{
    border: none;
    padding: 0;
    margin: 0;
    font-size: .566667rem;
    width: .893333rem;
    background: #fff;
}
.commodity-btn-kucun>i{
    display: inline-block;
  width: 1.813333rem;
  text-align: center;
  padding: 0 .12rem;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  
}
.commodity-btn-kucun>i>input{
  border:none;
  text-align: center;
}
.commodity-details-kucun>.kuncun-com{
    padding: 8px 20px 0 0;
    color: #808595;
    text-align: right;
    margin-left: 2.8rem;
}

/* 优惠券 */
.discount-coupon{
   margin-top: .106667rem;
    line-height: 1.28rem;
    height:  1.28rem;
    background: #fff;
    padding: 0 .426667rem;
     border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
.discount-coupon>span{
       line-height: 20px;
    font-size: 14px;
    color: #666;
 
}
.discount-coupon>span>.ws-binding {
 color: #fff;
    font-size: .346667rem;
    height: 1.28rem;
   
        background: rgb(245, 83, 24);
}
.discount-coupon>span>img {
  position: relative;
  top: .10rem;
    display: inline-block;
 height: .48rem;
 line-height: 1.28rem;

}
.discount-coupon .youhuiq-span{
    margin-left: .226667rem;
   
}
.gengduohanb{
    margin-top: .333333rem;
    display: inline-block;
    width: .64rem;
    height: .64rem;
    margin-left: 4.7rem;
}
/* 地址 */
.address-songhuo{
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding-top: 5px!important;
    text-align: left;
    height: 1.6rem;
    margin-left: .426667rem;
}
.address-songhuo>.address-dizhi{
 padding: .133333rem;   
 line-height: .8rem;
}
.address-songhuo>.address-dizhi>i{
margin-left: .266667rem;
}
.address-songhuo>.address-dizhi>em{
   font-size: .6rem;
  position: absolute;
  right: .426667rem;
}
.address-songhuo .youhuo-predict{
color: #FF6026;
padding-right: .266667rem;
}
.detalis-bg-white>div{
    line-height: 1.066667rem;
    border-bottom: #ccc 1px solid;

    padding: .133333rem;
    margin-left: .266667rem;
    height: 1.066667rem;
}
.detalis-bg-white>div>i{
  font-size: .5rem;
  position: absolute;
  right: .426667rem;
}
.detalis-bg-white>div>.margin-right-pingjia{
    position: relative;
    margin-left:4rem;
}
.countdown-timer{
    opacity: 0.9;
    background: #FF6026;
    width: 100%;
    height: 1.066667rem;
    position: relative;
    position: fixed;
    bottom: 1.226667rem;
    z-index: 9999;
    text-align: center;
    line-height: 1.066667rem;
}
.countdown-timer>p{
    color: #fff;
    font-size: .426667rem;
}
.detalisfooterf{
    position: fixed;
    bottom:0;
    width: 100%;
    height: 1.226667rem;
    z-index: 99999;
    background: #fff;
}
</style>
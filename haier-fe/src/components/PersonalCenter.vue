<template>
<!-- 个人中心 -->
    <div class="personal">
        <!-- 头部信息 -->
        <div class="personal-top-username">
            <div class="setting-top-news">
                <i class="iconfont">&#xe61e;</i>
                <i class="iconfont">&#xe604;</i>
                 <i class="iconfont personal-xiaoxi" >&#xe6f9; </i>
            </div>
            <div class="loginUser-name">
                <div><img src="../assets/images/logo.png" alt="头像"></div>
              <div><span>昵称</span></div>
            </div>
        </div>
<!-- 我的钱包 -->
        <div class="personal-notecase">
          <div class="myWallet-top">
              <span>我的钱包</span>
              <i>进入钱包</i>
              <span>></span>
          </div>
          <ul class="myWallet-coupon">
              <li class="">
                  <h6>0</h6>
                  <p>优惠券</p>
              </li>
               <li class="">
                  <h6>0.00</h6>
                  <p>顺逛宝</p>
              </li>
               <li class="">
                  <h6>0</h6>
                  <p>砖石</p>
              </li>
                <li class="">
                  <i class="iconfont">&#xe617;</i>
                  <p>顺逛白条</p>
              </li>
          </ul>
        </div>
        <!-- 订单 -->
        <div class="order">
            <div class="myWallet-top">
              <span>我的订单</span>
              <i>查看订单</i>
              <span>></span>
            </div>
            <ul>
               <li>
                    <i class="iconfont">&#xe62d;</i>
                    <p>代付款</p>
                 </li>
                 <li>
                    <i class="iconfont">&#xe622;</i>
                    <p>代发货</p>
                 </li>
                 <li>
                    <i class="iconfont">&#xe7e4;</i>
                    <p>待收货</p>
                 </li>
                 <li>
                    <i class="iconfont">&#xe638;</i>
                    <p>待评价</p>
                 </li>
                 <li>
                    <i class="iconfont">&#xe60c;</i>
                    <p>售后/维修</p>
                 </li>
            </ul>
        </div>
        <!-- 店铺-->
        <div class="shop">
            <div class="myWallet-top">
              <span>我的店铺</span>
              <em>></em>
          </div>
           <ul>
               <li>
                    <i class="iconfont">&#xe61c;</i>
                    <p>我要开店</p>
                 </li>
                 <li>
                    <i class="iconfont">&#xe62f;</i>
                    <p>顺逛学院</p>
                 </li>
           </ul>
        </div>
        <!-- 常用功能 -->
         <div class="common">
            <div class="myWallet-top">
              <span>常用功能</span>
             
          </div>
           <ul>
               <li>
                    <i class="iconfont">&#xe608;</i>
                    <p>领券中心</p>
                 </li>
                 <li>
                    <i class="iconfont">&#xe663;</i>
                    <p>充值缴费</p>
                 </li>
                  <li>
                    <i class="iconfont">&#xe63c;</i>
                    <p>地址管理</p>
                 </li>
                 <li>
                    <i class="iconfont">&#xe719;</i>
                    <p>我的收藏</p>
                 </li>
                 <li>
                    <i class="iconfont">&#xe600;</i>
                    <p>游戏金币</p>
                 </li>
                  <li>
                    <i class="iconfont">&#xe63d;</i>
                    <p>我的预约</p>
                 </li>
                 <li>
                    <i class="iconfont">&#xe601;</i>
                    <p>我的投资</p>
                 </li>
           </ul>
         
        </div>
        <!-- <div style="height:1rem"></div> -->
    </div>
</template>
<script>
export default {
    name:"personalCenter"
}
</script>
<style  scoped>
i,em{
    font-style: normal; 
}
b{
    font-weight: normal;
}
.personal{
    overflow: hidden;
    background: rgb(223, 223, 223);
}
.personal-top-username{
    height:3.893333rem ;
    width: 100%;
    position: relative;
    background: #2577e3;
    background-size: cover;
    border-radius: 0px 0px 22px 22px
}
.personal-top-username>.setting-top-news{
width: 100%;
    height: 1.173333rem;
    line-height: 1.173333rem;
    text-align: right;
    padding-right: .266667rem;
    position: relative;
}
.personal-top-username>.setting-top-news>.iconfont{
margin-top: .053333rem;
font-size: .533333rem;
color: #fff;
margin: 0 .32rem;
}
.personal-top-username>.setting-top-news>.personal-xiaoxi::after{
position: absolute;
    content: ' ';
    height: 8px;
    width: 8px;
    border-radius: 100%;
    background-color: red;
    top:.30rem;
    margin-left: -0.106667rem;
}
.personal-top-username>.loginUser-name>div{
display: table-cell;
    vertical-align: middle;
    float: none;
}
.personal-top-username>.loginUser-name>div>img{
    display: inline-block;
    margin-left: .426667rem;
width: 1.6rem;
height: 1.6rem;
border-radius:1.06rem;

}
.personal-top-username>.loginUser-name>div>span{
    margin-left: .426667rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 18px;
    margin-bottom: .266667rem;
    margin-top: .266667rem;
    color: #fff;

}
.personal-notecase{
    position: relative;
    margin: -.8rem .266667rem 0;
    border-radius: .213333rem;
    overflow: hidden;
    background: #fff;
    height: 3.093333rem;
    z-index: 666;
}
.personal-notecase>.myWallet-top{
    color: #666;
    padding: .233333rem .266667rem 0;
    font-size: .4rem;
    border-bottom: 0;
    overflow: hidden;
}
.myWallet-top>span{
    color: #333;
    font-weight: 700;
    padding-top:  .133333rem;
}
.myWallet-top>i{
    margin-left: 5.833333rem;
        font-size: .32rem;
    margin-right: .133333rem;
}
.myWallet-coupon>li{
      padding-top: .666667rem;
    text-align: center;
    font-size: 13px;
    width: 20%;
    box-sizing: border-box;
    background: #fff;
    height: 2rem;
    float: left;
}
.personal-notecase>.myWallet-coupon>li>p{
    padding-top: .266667rem;
    color: #666;
}
.personal-notecase>.myWallet-coupon>li>h6{
   font-size: .48rem
}
.personal-notecase>.myWallet-coupon>li>i{
   font-size: .62rem;
   color: #2878FF;
}
.order,.shop{
      position: relative;
    margin: .24rem .266667rem 0;
    border-radius: .213333rem;
    overflow: hidden;
    background: #fff;
    height: 3.093333rem;
    z-index: 666;
    padding: .133333rem .266667rem 0;
    color: #666;
}
.order>ul>li{
    padding-top: .666667rem;
    text-align: center;
    font-size: 13px;
 
    box-sizing: border-box;
    background: #fff;
    height: 2rem;
    float: left;
    width: 20%;
    position: relative;
}
.order>ul>li>i{
     font-size: .62rem;
   color: #2577e3;
}
.order>.myWallet-top{
    margin-top: 0.24rem;
}
.order>ul>li>p{
    padding-top: .266667rem;
    color: #666;
}
.shop>.myWallet-top{
     margin-top: 0.24rem;
}
.shop em{
      margin-left: 7.2rem;
}
.shop>ul>li{
 padding-top: .666667rem;
    text-align: center;
    font-size: 13px;
 
    box-sizing: border-box;
    background: #fff;
    height: 2rem;
    float: left;
    width: 20%;
    position: relative;
}
.shop>ul>li>i{
       font-size: .62rem;
   color: #2577e3;
}
.shop>ul>li:nth-child(1)>i{
       font-size: .62rem;
   color: #8915e7;
}
.shop>ul>li>p{
    padding-top: .266667rem;
    color: #666;
}
.common>.myWallet-top{
     margin-top: 0.24rem;
}

.common>ul>li{
 padding-top: .666667rem;
    text-align: center;
    font-size: 13px;
 
    box-sizing: border-box;
    background: #fff;
    height: 2rem;
    float: left;
    width: 20%;
    position: relative;
}
.common>ul>li>i{
       font-size: .62rem;
   color: #4c4c4c;
}

.shop>ul>li>p{
    padding-top: .266667rem;
    color: #666;
}
.common{
    position: relative;
    margin: .24rem .266667rem 0;
    border-radius: .213333rem;
    overflow: hidden;
    background: #fff;
    height: 5.093333rem;
    z-index: 666;
    padding: .133333rem .266667rem 0;
    color: #666;
}
.common>ul>li{
   width: 2.133333rem;
}
.common>ul>li{
    padding-top: .666667rem;
    text-align: center;
    font-size: 13px;
    width: 30%;
    box-sizing: border-box;
    background: #fff;
    width: 2.133333rem;
    float: left;
    width: 20%;
    position: relative;
}
</style>
<template>
  <div class="home">
  <header class="header">
    <div class="head-nav">
      <ul>
        <li><em class="iconfont ">&#xe63c;</em> <span>崂山区</span></li>
         <li><input type="text" class="home-search" >
          <span class="iconfont  magnifying" style="color:#666">&#xe620;</span>
          </li>
          <li >
            <em class="iconfont ">&#xe6f9;</em>
          </li>
      </ul>
    </div>
    <!-- 横向滑动 -->
    <div class="head-furnish">
     <keep-alive>
       <router-view/>
     </keep-alive>
          <HomeNavigation></HomeNavigation>
    </div>
  </header>
  <!-- banner -->
  <div class="banner-home">
   <keep-alive>
       <router-view/>
     </keep-alive>
     <HomeBannerSlider></HomeBannerSlider>
  </div>
  <div class="activityImgTop-home">
    <img src="../assets/images/bannercontroller.jpg" alt="">
  </div>
  <!-- 微店主 -->
  <div class="slider-slidesicon">
    <div class="slider-slidesicon-flex">
      <ul >
        <li class="hand_type_entry">
           <img src="../assets/images/wei.png" alt="">
          <p>开店有礼</p>
        </li>
        <li class="hand_type_entry">
           <img src="../assets/images/dian.png" alt="">
          <p>领劵中心</p>
        </li>
        <li class="hand_type_entry">
           <img src="../assets/images/zu.png" alt="">
          <p>分期购</p>
        </li>
        <li class="hand_type_entry">
           <img src="../assets/images/ri.png" alt="">
          <p>逛吃</p>
        </li>
      </ul>
    </div>
    <div class="slider-slidesicon-flex">
      <ul>
        <li class="hand_type_entry">
          <img src="../assets/images/te.png" alt="">
          <p>一键发圈</p>
        </li>
        <li class="hand_type_entry">
          <img src="../assets/images/quan.png" alt="">
          <p>每日榜单</p>
        </li>
        <li class="hand_type_entry">
          <img src="../assets/images/dang.png" alt="">
          <p>金融/缴费</p>
        </li>
        <li class="hand_type_entry">
          <img src="../assets/images/dao.png" alt="">
          <p>寻.Me</p>
        </li>
      </ul>
    </div>
  </div>
  <!-- 公告 -->
    <div class="sg_notice-home">
      <div class="sg_notice_title-home">
        <img src="../assets/images/home-notice.png" alt="">
      </div>
      <div class="sg_notice_content-home">发票税率变更通知</div>
       <div class="sg_notice-titList-more-home">更多</div>
    </div>
    <!-- 限时抢购 -->
    <div class="sg_timeSale1-home">
         <keep-alive>
          <router-view/>
       </keep-alive>
       <TimeLimitedSales ></TimeLimitedSales>
    </div>
    <!-- 视频购 -->
    <div class="video-element-home">
     <keep-alive>
       <router-view/>
     </keep-alive>
      <VideoShopHome></VideoShopHome>
     </div>
     <!-- 活动精选 -->
     <div class="choiceQuality-home">
       <HomecHoiceQuality></HomecHoiceQuality>
     </div>
     <!-- 置顶 -->
  <div>
    <keep-alive>
       <router-view/>
     </keep-alive>
     <ZhiDing></ZhiDing>
  </div> 
  <!-- 已经到底了 -->
  <div class="home-footer">
  ———— 已经到底了，只能帮你到这里啦 ————
  </div>

  </div>
</template>

<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeNavigation from "@/components/HomeNavigation"//首页分类横向滑动
import HomeBannerSlider from "@/components/HomeBannerSlider"//banner
import TimeLimitedSales from "@/components/TimeLimitedSales"//限时抢购
import VideoShopHome from "@/components/VideoShopHome" //视频购
import HomecHoiceQuality from "@/components/HomecHoiceQuality" //活动精选
import ZhiDing from "@/components/ZhiDing"

export default {
  name: 'home',
    data(){
      return{
      }
    },

  components: {
   HomeNavigation,
   HomeBannerSlider,
    TimeLimitedSales,
    VideoShopHome,
    HomecHoiceQuality,
    ZhiDing
  }
}
</script>
<style scoped>
.home{
  height: 100%;
  width: 100%;
}
.body{
  background: #ccc;
}
            

/* .sg_timeSale1-home{
  height: 16rem;
} */
.activityImgTop-home,.slider-slidesicon,.banner-home,
.sg_notice-home,.home-footer,.sg_timeSale1-home,.video-element-home,.choicequality-home{
  position: relative;
 top: 2.346667rem;
}
.sg_timeSale1-home{
      width: 100%;
    background: #fff;
    margin-top: .213333rem;
    padding-bottom: 0;
    position: relative;
}
.sg_notice_title-home{
   height: 1.066667rem;
      position: relative;
    width: 2.133333rem;
  
    margin-left: 0;
}
.sg_notice_title-home img{
    position: absolute;
    top: .266667rem;
    left: .373333rem;
    width: 1.546667rem;
    height: .48rem;
}
.sg_notice-home{
  display: flex;
    width: 100%;
    height: 1.066667rem;
    background: #fff;
}
.sg_notice_content-home{
  line-height: 1.066667rem;
      width: 6.4rem;
    padding-left: .266667rem;
    padding-right: .266667rem;
    font-size: 14px;
   
}
.sg_notice-titList-more-home{
  color: #999;
  line-height: 1.066667rem;
  position: absolute;
  right: .3666rem;
}
 .slider-slidesicon-flex ul{
   color: #ccc;
   display: flex;
   text-align: center;
   vertical-align: bottom;
 }
  .slider-slidesicon-flex ul .hand_type_entry{
    width: 25%;
    height: 2.133333rem;
 }
 .slider-slidesicon-flex ul .hand_type_entry img{
   margin-top:.213333rem;
    width: 1.173333rem;
    vertical-align: bottom;
   
 }
 .header{
   position: fixed;
   left: 0;
   z-index: 6565;
   top:0;
 }
  .header .head-nav{
    height: 1.173333rem;
   line-height: 1.173333rem;
    background: #4F0091;
    color: #fff;

  }
   header .head-nav ul{
    display: flex;
    width: 100%;
     border-bottom:1px solid #fff;

   }
  header .head-nav ul li{
margin-left: .52rem;
    text-align: center
  }
 
   header .head-nav .home-search{
     border:none;
    border-radius: .533333rem;
    width: 5.866667rem;
    height: .64rem;

  }
  .magnifying{
    position: absolute;
    z-index: 666;
    left:2.7rem;
    font-size: .373333rem;

  }
  .head-furnish{
    position: relative;
    height: 1.173333rem;
  }
.activityImgTop-home img{
  width: 100%;
  display: inline-block;
  vertical-align: bottom;
}
.slider-slidesicon{
  height: 4.266667rem;
  background: #4F0091;
}
.video-element-home{
  line-height: 1.066667rem;
  margin-top: .213333rem;
 background: #fff;
box-shadow: -0.1rem -0.2rem .02333rem rgb(238, 238, 238);
 }
 
.choiceQuality-home{
  position: relative;
  top:2.5rem;
  line-height: 1.066667rem;
 
 background: #fff;
box-shadow: -0.1rem -0.2rem .02333rem rgb(238, 238, 238);
 }
.home-footer{
      text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 14px;
    color: #666666;
}
</style>
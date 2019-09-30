<template>
<!-- banner -->
  <div id="films-bannerlist">
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
           <img src="../assets/images/banner1.jpg" alt=""> 
        </div>
        <div class="swiper-slide">
           <img src="../assets/images/banner2.jpg" alt=""> 
        </div>
        <div class="swiper-slide">
           <img src="../assets/images/banner3.jpg" alt=""> 
        </div>
        <div class="swiper-slide">
           <img src="../assets/images/banner4.jpg" alt=""> 
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
 
</div>

</div>
</template>
<script>
	import Swiper from 'swiper' //swiper .js
    import 'swiper/css/swiper.css'// swiper.cssnpm
export default {
    name:"HomeBannerSlider",
    mounted(){
        new Swiper(".swiper-container",{
            pagination: {
                 el: '.swiper-pagination',
            },
            autoplay:true,
            loop: true, // 循环模式选项
            scrollbar: {
            el: '.swiper-scrollbar',
           },
 
        })


    }
}
</script>
<style  >
#films-bannerlist{
    /* position: relative; */
    /* top: 2.346667rem; */
    flex: 1;
}
 #films-bannerlist .swiper-pagination-bullet-active{
 --swiper-theme-color: #fff;
 opacity: 0.7;
}
.swiper-slide{
    width: 100%;

}

.swiper-slide img{
    display: block;
    width: 100%;
}
.swiper-pagination-bullet{
    width: .32rem;
    height:.32rem ;
    color: #ccc;
}
.swiper-scrollbar-drag{
 display: none ;
 opacity: 0;
 
}

</style>
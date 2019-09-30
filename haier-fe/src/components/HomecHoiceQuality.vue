<template>
    <div class="choicequality">
        <div class="choicequality-home">
            <div><img class="iconfont" src="../assets/images/hdjx.png"><span>活动精选</span></div>
            <div style="text-algin:right">
            <p><em>爆款 钜惠</em> | <em>更多</em> <em>></em></p>
            </div>
        </div>
        <div class="choicequality-slides">
            <div class="choicequality_banner">
                <img src="../assets/images/quality_banner.jpg"/>

            </div>
            <div class="choicequality-three">
                <img src="../assets/images/choicequality-three-1.jpg" alt="">
                <img src="../assets/images/choicequality-three-2.jpg" alt="">
                <img src="../assets/images/choicequality-three-3.jpg" alt="">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomecHoiceQuality"
}
</script>
<style  scoped>
.choicequality{
    position: relative;
  line-height: 1.066667rem;
 background: #fff;
box-shadow: -0.1rem -0.2rem .02333rem rgb(238, 238, 238);
}
.choicequality-home{
  display: flex;
  margin: 0 0.4rem;
}
 .choicequality-home div .iconfont{
   width: .426667rem;
 }
 .choicequality-home div{
   flex: 1;

 }
 .choicequality-home div span{
      font-size: .426667rem;
    font-weight: 700;
    color: #333;
    margin-left: .213333rem;
 }
 .choicequality-home div em{
   font-style: normal;
 }
  .choicequality-home div p{
   position:absolute;
   right: 0.24rem;
   color: #999;
 }
  .choicequality_banner{
      margin-left: 0.4rem;
      margin-right: 0.4rem;
  }
 .choicequality_banner img{
    position: relative;
    display: block;
    float: left;
width: 100%!important;
    height: 100%;
  
 }
 .choicequality-three{
     display: flex;
     width: 100%;
     height: 100%;
 }
 .choicequality-three img{
     display: block;
    flex: 1;
     width: 3.04rem;
    height: 3.626667rem;
 }
 

</style>
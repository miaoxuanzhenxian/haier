<template>
    <div>
       <div class="videoShop-home">
        <div><i class="iconfont">&#xe645;</i><span>视频购</span></div>
        <div style="text-algin:right">
          <p><em>细节 视听</em> | <em>更多</em> <em>></em></p>
        </div>
      </div>
      <div ref="videoshopWrap" class="videoshopWrap-home">
        <div class="videoShop-videoImg" ref="videoshopList">
            <div v-for="(vitem,index) in videoShop" :key="index"  >
                <img :src="vitem.imgUrl" alt="">
                <img :src="vitem.video" alt="" class="housebf-video">
                <p class="spgclassvideo">{{vitem.text}}</p>
            </div>
        </div>
      </div>
    
    </div>
</template>
<script>
import  Bscroll from "better-scroll"
export default {
    name:"VideoShopHome",
   
    data(){
        return{
            videoShop:[
                {'imgUrl':"//cdn50.ehaier.com/mobile-cms-admin/uploadimagecontroller/image/2019/07/17510fe5114e41698700935486c1e59b.jpg",
                 'text':"Haier/海尔 空调 先行者KFR-72LW/17EDS21AU1套机" ,
                 'video':"//cdn09.ehaier.com/shunguang/H5/www/img/linshi/bf@2x.png"
                },
                 {'imgUrl':"//cdn50.ehaier.com/mobile-cms-admin/uploadimagecontroller/image/2019/07/cc200d9225514646a0437fbead8f0e85.jpg",
                 'text':"Haier/海尔 冰箱 BCD-576WDPU" ,
                 'video':"//cdn09.ehaier.com/shunguang/H5/www/img/linshi/bf@2x.png"
                },
                {'imgUrl':"//cdn50.ehaier.com/mobile-cms-admin/uploadimagecontroller/image/2019/07/a43bcaf60bfb470f8a495211d77e0788.jpg",
                 'text':"小超人 空调 KFR-50LW/16AHBP-2U1套机 2匹变频冷暖空调柜机立式" ,
                 'video':"//cdn09.ehaier.com/shunguang/H5/www/img/linshi/bf@2x.png"
                },
                 {"imgUrl":"//cdn50.ehaier.com/mobile-cms-admin/uploadimagecontroller/image/2019/07/57255a514b7441288bf467b1b81c1614.jpg",
                 "text":"Haier/海尔 冰箱 BCD-451WDEMU1 451升WIFI智能家用风冷无霜对开门冰箱" ,
                 "video":"//cdn09.ehaier.com/shunguang/H5/www/img/linshi/bf@2x.png"
                },
            ]
        }
    },
     created() {
    this.$nextTick(() => {
      this.personScroll();
    //   this.height();
     });
   },
   methods:{
    personScroll(){
       //动态设置宽度
        let width=6*4.4;
        this.$refs.videoshopList.style.width=width+"rem";
        this.$nextTick(()=>{
            if(!this.scroll){
                this.scroll=new Bscroll(this.$refs.videoshopWrap,{
                    startX:0,
                    click:true,
                    scrollX:true,
                    scrollY:false,
                    eventPassthrough:"vertical",
                     bounce: false,
                     touchstart:false,
                })
            }else{
                this.scroll.refresh()
            }
        })

      },
      width(){
        let videoWrap1=this.$refs.videoshopList.children;
        let sum=0;
        for(let i=0;i<videoWrap1.length;i++){
            sum+=timeWrap1[i].offsetWidth;
        }
        return sum + videoWrap1.length*32
    },
    //  点击横轴滚动
    videoshopType(index,event){
         // PC页面时,点击不会被 better-scroll阻止事件,初始化,
         //给 better-scroll派发事件,使移动端拥有点击事件,因此切换到PC端时,点击事件会被执行两次,
        if(!event._constructed){
            return;
        }
    
      this.videoshopChange = false; //禁用竖轴滚动  防止横竖轴都改变index  解决运动时listenScroll依然监听的bug
        //横纵向右偏移16
      this._followScroll(index); //横轴动画移动
    },
     // 横轴滚动到当前元素并向右移动16px
    _followScroll(index) {
      let tvideoWrap1list = this.$refs.videoshopList.children;
      let el = videoWrap1list[index];
      if (index < tvideoWrap1list.length / 2) {
        this.scroll.scrollToElement(el,300,-32, 0);
      }
    },
  
    },
}
</script>
<style scoped>
.videoShop-home{
    position: relative;
  display: flex;
  margin: 0 0.4rem;
}
.video-element-home{

    position: relative;
  line-height: 1.066667rem;
  margin-top: .213333rem;
 background: #fff;
box-shadow: -0.1rem -0.2rem .02333rem rgb(238, 238, 238);
 }
 .video-element-home div .iconfont{
   color: #2979ff;
 }
 .video-element-home div{
   flex: 1;
   overflow: hidden;
 }
 .video-element-home div span{
      font-size: 16px;
    font-weight: 700;
    color: #333;
    margin-left: .213333rem;
 }
 .video-element-home div em{
   font-style: normal;
 }
  .video-element-home div p{
   position:absolute;
   right: 0.24rem;
   color: #999;
 }
 .videoShop-videoImg{
     position: relative;
    overflow: hidden;
   height: 100%;
   width: 100%;
   display: flex;

 }
 .videoShop-videoImg div{
 
  flex: 1;
  position: relative;
 }
 .videoShop-videoImg div  img{
  
  margin-left:0.4rem;
   display: inline-block;
   width: 6.453333rem;
   height:3.786667rem;
 }
  .videoShop-videoImg div .housebf-video{
       width: 1.386667rem;
    height: 1.386667rem;
    position:absolute;
    top: 1.2rem;
    left: 2.466667rem;
    z-index: 999;
    opacity: 0.3;
 }
 .videoShop-videoImg div .spgclassvideo{
   margin-top: -0.466667rem;
   margin-left: 0.6rem;
      position: relative;
       margin-bottom: 5px;
       font-size: 14px!important;
       width: 5.333333rem;
      text-overflow:ellipsis;
       white-space:nowrap; 
       overflow:hidden;
        color: #666;
        text-align: center;
 }
 .active{
     border:#2979ff 2px solid; 
 }
</style>
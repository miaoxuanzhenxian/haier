<template>
<!-- 横向滑动 -->
    <div class="nav-top navkerwin" ref="navigatWrap">
        <ul class="navigat-list" ref="navigatList">
            <li v-for="(navigat,index) of navigation" :class="{'active':navcurrentIndex===index}"
            :key="index" @click="navchooseType(index,$event)"
             class="navigat-item">
                {{navigat}}
            </li>
        </ul>
    </div>
</template>
<script>
import  Bscroll from "better-scroll"
export default {
    name:"HomeNavigation",
    data(){
        return{
            navcurrentIndex:0,
            menuIndexChange:true,
            navigation:[
                "顺逛精选",
                "海尔智家",
                "家用电器",
                "家装定制",
                "新品首发",
                "生活服务",
                "体验店",
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
        let width=7*2.4;
        this.$refs.navigatList.style.width=width+"rem";
        this.$nextTick(()=>{
            if(!this.scroll){
                this.scroll=new Bscroll(this.$refs.navigatWrap,{
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
   
    //获取横轴宽度
    width(){
        let navWrap1=this.$refs.navigatList.children;
        let sum=0;
        for(let i=0;i<navWrap1.length;i++){
            sum+=navWrap1[i].offsetWidth;
        }
        return sum + navWrap1.length*16
    },
    //  点击横轴滚动
    navchooseType(index,event){
         // PC页面时,点击不会被 better-scroll阻止事件,初始化,
         //给 better-scroll派发事件,使移动端拥有点击事件,因此切换到PC端时,点击事件会被执行两次,
        if(!event._constructed){
            return;
        }
       this.navcurrentIndex= index; //改变点击的当前样式
      this.menuIndexChange = false; //禁用竖轴滚动  防止横竖轴都改变index  解决运动时listenScroll依然监听的bug
        //横纵向右偏移16
      this._followScroll(index); //横轴动画移动
    },
     // 横轴滚动到当前元素并向右移动16px
    _followScroll(index) {
      let navWrap1list = this.$refs.navigatList.children;
      let el = navWrap1list[index];
      if (index < navWrap1list.length / 2) {
        this.scroll.scrollToElement(el,300,-16, 0);
      }
    }
  
    }

}
</script>
<style  scoped>
.nav-top{
    overflow: hidden;
    white-space : normal nowrap;
    position: relative;
    height: 1.173333rem;
    line-height: 1.173333rem;
    width: 100%;
    height: 100%;
    color: #fff;
    background: #4F0091;
    font-size: .373333rem
}
.active{
    font-size: .373333rem;
    font-weight:700;
    border-bottom:.083333rem solid #fff;
}
.nav-top>ul{
    overflow: hidden;
}
.nav-top>ul li{
    margin-left:.806667rem; 
    float: left;
    width: 1.493333rem;

}

</style>
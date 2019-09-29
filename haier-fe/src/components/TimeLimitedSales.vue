<template>
<!-- 限时抢购 -->
    <div class="timer-sales-home">
        <div class="timersales-top">
            <div class="timersales-top-div"><i class="iconfont">&#xe635;</i><span>限时抢购</span></div>
            <div class="timersales-top-div timediv-right"><em class="iconfont">更多</em> <a href="#">></a></div>
        </div>
           <div class="timeSale_countDown" ref="timesaleWrap">
               <ul class="timeSale_tabs" ref="timesaleList">
                   <li class="flashsaletoptime timeSale_tab" 
                   v-for="(timeSales,index) of timeSalespage" :key="index" 
                    :class="{'active':timeSalesIndex===index}"
                    @click="timesalesType(index,$event)">
                       {{timeSales}}
                       <div v-if="overdueTime">正在疯抢</div>
                       <div v-else>预热中</div>
                     
                   </li>
               </ul>
            </div>
        <div>
             <keep-alive>
                <router-view/>
             </keep-alive>
            <ContainerTimeSales></ContainerTimeSales>
          </div>
  </div>
</template>
<script>
import  Bscroll from "better-scroll"
import ContainerTimeSales from './ContainerTimeSales'
export default {
    name:"TimeLimitedSales",
    data() {
      return {
          isshow:false,
       timeSalesIndex:0,
            timeSalesChange:true,
            timeSalespage:[
                "00.00",
                "10.00",
                "14.00",
                "20.00",
                "00.00",
                "10.00",
                "14.00",
                "20.00",

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
      overdueTime(timeSalespage){
        let newTime = new Date().getTime();
        console.log(newTime);
      
      },
    personScroll(){
       //动态设置宽度
        let width=7*2.4;
        this.$refs.timesaleList.style.width=width+"rem";
        this.$nextTick(()=>{
            if(!this.scroll){
                this.scroll=new Bscroll(this.$refs.timesaleWrap,{
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
        let timeWrap1=this.$refs.timesaleList.children;
        let sum=0;
        for(let i=0;i<timeWrap1.length;i++){
            sum+=timeWrap1[i].offsetWidth;
        }
        return sum + timeWrap1.length*32
    },
    //  点击横轴滚动
    timesalesType(index,event){
         // PC页面时,点击不会被 better-scroll阻止事件,初始化,
         //给 better-scroll派发事件,使移动端拥有点击事件,因此切换到PC端时,点击事件会被执行两次,
        if(!event._constructed){
            return;
        }
       this.timeSalesIndex= index; //改变点击的当前样式
      this.timeSalesChange = false; //禁用竖轴滚动  防止横竖轴都改变index  解决运动时listenScroll依然监听的bug
        //横纵向右偏移16
      this._followScroll(index); //横轴动画移动
    },
     // 横轴滚动到当前元素并向右移动16px
    _followScroll(index) {
      let timeWrap1list = this.$refs.timesaleList.children;
      let el = timeWrap1list[index];
      if (index < timeWrap1list.length / 2) {
        this.scroll.scrollToElement(el,300,-32, 0);
      }
    },
  
    },
    components:{
        ContainerTimeSales
    }
  }


</script>
<style scoped>

.timer-sales-home{
    height: 100%;
margin-top: .213333rem;
background: #fff;
position: relative;
box-shadow: -0.1rem -0.2rem .02333rem rgb(238, 238, 238);
}
.timersales-top{
    margin: 0 .413333rem 0 .413333rem;
    display: flex;
    height:1.066667rem;
    line-height: 1.066667rem;
    border-bottom: 2px solid #eee;
}
.timersales-top-div{
flex: 1;
}
.timersales-top i{
    color: #2979ff;
}
.timersales-top span{
    color: #333;
   font-size: .426667rem;
   font-weight: 700;
   margin-left:.16rem;
}
.timediv-right{
     position: absolute;
    right: .366667rem;
}
.timersales-top em,.timersales-top a{
     
    color: #999;
    font-size: .32rem
}
.timer-sales-home>.timeSale_countDown{
    margin-top: .266667rem;
     overflow: hidden;
    white-space : normal nowrap;
    position: relative;
     height: 1.302rem;
}
.timer-sales-home>.timeSale_countDown>.timeSale_tabs{
    position: relative;
       padding: 0 .24rem;
       overflow: hidden;
       height: 1.302rem;
}
.timeSale_tab{
    float: left;
    text-align: center;
    height: 1.00rem;
    padding: .133333rem .40rem;
    border-radius: .106667rem;
    border: .026667rem solid #E4E4E4;
    margin-right: .213333rem;
   
}
.active{
    background: #2979ff;
    color: #fff;
}
</style>
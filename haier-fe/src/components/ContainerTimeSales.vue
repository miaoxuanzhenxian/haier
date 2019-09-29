<template>
    <div class="scrollX-container ">
            <ul class="time-skip-list">
                <li class="skip-item" v-for="(times,index) in posttime" :key="index">
                    <div class="timeskip-img">
                   <img :src="times.imgUrl" alt="" >
                    </div>
                    <div class="timeskip-info">
                   <h4>{{times.text}}</h4>
                   <div class="skip-item-foot">
                      <div>
                          <p class="ng-binding">
                                <span>抢购价:</span>{{times.newprice}}
                          </p>
                          <del class="ng-binding">{{times.price}}</del>
                       </div> 
                        <router-link :to="{name:'detailslistcart'}" tag="a" class="a"> 立即抢购</router-link>
                      <!-- <a href="#" :to="{{}}">立即抢购</a> -->
                   </div>
                    </div>
                    
                </li>
            </ul>
    </div>
</template>
<script>
import axios from "axios"
export default {

    name:"ContainerTimeSales",
    data(){
        return{
            posttime:[
                 {
                "text":"Haier/海尔 冷柜 BD-148DL 148升 分区大抽屉 家用立式冷冻柜",
                "price":"￥1599.00",
                "newprice":"￥1499.00",
                "imgUrl":"//cdn22.ehaier.com/file/5a5484890b047c81ea4c6578.png"
            },
            {
                "text":"Haier/海尔 波轮洗衣机 EB60M19 6公斤 波轮洗衣机",
                "price":"￥799.00",
                "newprice":"￥1699.00",
                "imgUrl":"//cdn22.ehaier.com/file/5a5484e169258e2983217d46.png"
            },
            {
                "text":"Haier/Haier/海尔 波轮洗衣机 XPB70-1186BS",
                "price":"￥499.00",
                "newprice":"￥1499.00",
                "imgUrl":"//cdn50.ehaier.com/mobilemall-admin-web/picmanagecontroller/image/2019/03/b557930b8dd94eceab4b9896e4180965.jpg"
            },
            ]
        }
    },
    // methods:{
    //     getPosttime(){
    //         axios.get("/static/timesSales/timesSales.json")
    //     .then((response)=>{
    //         let result=response.data;
    //         if(result.status===0){
    //             this.posttime=result.data.posttime
    //         }else{

    //         }
    //     })
    //    }
    // },
    cerated(){

    }

}
</script>
<style scoped>
.scrollX-container {
   height: 100%;
   position: relative;
    margin-top: .533333rem;
    padding-left: .266667rem;
}
.time-skip-list {
    padding-bottom: .4rem;
}
.skip-item {
    display: flex;
    padding-top: .2rem;
    /* border-bottom: .026667rem solid #ebebeb; */
}
.skip-item .timeskip-img img{
    display:inline-block;
      max-width: 2.986667rem;
}
.skip-item .timeskip-info {
       display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 6.5rem;
    padding-left: .4rem;
}
.skip-item .timeskip-info h4 {
    font-size: .4rem;
    color: #444;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.skip-item-foot{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.skip-item-foot>div>p{
       font-size: .48rem;
    color: #F40; 
}
.skip-item-foot>.a{
    margin-right: .406667rem;
        width: 2rem;
    height: .8rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: .4rem;
    background: #F40;
}
</style>
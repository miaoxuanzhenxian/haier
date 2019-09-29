<template>
    <div class="detalis-footer">
        <div class="font-fdicon">
            <i class=" iconfont">&#xe604;</i>
            <p>客服</p>
        </div>
         <div class="font-fdicon">
            <i class=" iconfont">&#xe650;</i>
            <p>购物车</p>
        </div>
         <div class="font-fdicon favorite" >

            <i class=" iconfont">&#xe719;</i>
            <p class="text">收藏</p>
        </div>
      <div class="addalltoCart"> 
           <div class="addCart"><span>加入购物车</span>
           </div>
        <div class="addCart lijigoumai-cart">
            <span>立即购买</span></div></div>

    </div>
</template>
<script>
export default {
    name:"detalisfooterf",
    data(){
        return{
           
            favorite:false
        }
    },
    computed:{
      favoriteText(){
          return this.favorite?'已收藏':'收藏';
      }         
    },
    methods:{
 

    },
}
</script>
<style  scoped>
.active{
    color: #f02864;
}
.detalis-footer{
    display: flex;
    text-align: center;
    width: 100%;
    height: 100%;
}
.detalis-footer>div>.iiconfont{
    font-size: .426667rem;
}
.detalis-footer>.font-fdicon{
    width: 1.333333rem;
    text-align: center;
    padding-top: .143333rem;
}
.detalis-footer>.addalltoCart{
    display: flex;

    text-align: center;
    line-height: 1.226667rem;
}
.detalis-footer>.addalltoCart>.addCart{
    width: 2.986667rem;
    font-size: .373333rem;
    border-left: 1px solid #ccc;

}
.lijigoumai-cart{
    color: #fff;
    background: #f02864;
}


</style>
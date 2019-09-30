<template>
<div>
   <!-- <div class="fixed go-top"  id="searchBar" v-if="btnFlag"  @click="backTop"> -->
     <i class="iconfont go-top" v-if="btnFlag"  @click="backTop">&#xe612;</i>

</div>

</template>
<script>
export default {
    name:"zhiding",
    data(){
        return{
         btnFlag:false,   
          
        }
    },
  mounted () {//给window添加一个滚动滚动监听事件
  window.addEventListener('scroll',  this.scrollToTop)
   },

destroyed () {
  window.removeEventListener('scroll', this.scrollToTop)
},

methods: {
   backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 6)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
  },


 scrollToTop () {
    const that = this
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    that.scrollTop = scrollTop
    if (that.scrollTop >7) {
      that.btnFlag = true
    } else {
      that.btnFlag = false
    }
  }
}

}
</script>
<style scoped>

.iconfont{
    font-size: 1.173333rem;color: #999;
   
      position: fixed;
           right: 18px;
      bottom: 65px!important;

}

</style>
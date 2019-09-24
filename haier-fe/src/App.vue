<template>
  <div id="app">
    <router-view />
   <TabbarFooter></TabbarFooter>
  </div>
</template>
<script>
import TabbarFooter from "./components/TabbarFooter"
export default {
  name: "app",
  data(){
    return{
    
    }
  },
  components:{
   TabbarFooter
  }

};
</script>
<style scoped>
#app{
  width: 100%;
  height: 100%;
}


</style>

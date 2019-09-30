<template>
  <div id="app">
      <keep-alive>
          <router-view />
      </keep-alive>
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
  mounted() {
    this.$eventBus.$emit('showHideNav',true);

  },
  components:{
   TabbarFooter
  }

};
</script>
<style scoped>

</style>

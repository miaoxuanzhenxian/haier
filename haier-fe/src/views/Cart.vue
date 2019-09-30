<template>
    <div>
       购物车
    </div>
</template>

<script>
    export default {
        name: "Cart",
        mounted() {
            this.$eventBus.$emit('showHideNav',true);
            
        },
    }
</script>

<style scoped>

</style>

<template>
    <div>
        分类BranchType
    </div>
</template>

<script>
    export default {
        name: "BranchType",
        mounted() {
            this.$eventBus.$emit('showHideNav',true);
      
        },
    }
</script>

<style scoped>

</style>

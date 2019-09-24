<template>
    <div>
        分类
    </div>
</template>

<script>
    export default {
        name:'BranchType',
        mounted(){
            axios.get('/0').then(result => {

            }).catch(err => {
                console.error(err);
            })
        }
    }
</script>

<style scoped>

</style>


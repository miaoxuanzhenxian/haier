<template>
    <div>
        <dl class="branchtype-list" v-for="listItem of branchTyList" :key="listItem.id">
            <dt>
                <span></span><b >{{ listItem.navigationName }}</b><span></span>
            </dt>
            <dd class="clearfix">
                <div v-for="listChildren of listItem.children">
                    <img :src="listChildren.imageUrl">
                    <span >{{ listChildren.navigationName }}</span>
                </div>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name: "BranchtypeList",
        computed:{
            branchTyList(){
                return this.$store.getters['branchType/branchTyList'];
            }
        }
    }
</script>

<style scoped>
    .branchtype-list dt {
        text-align: center;
        font-size: 0.373rem;
        color: #333;
        margin-top: 0.64rem;
    }
    .branchtype-list dt span {
        height: 1px;
        width: 24px;
        background: #e5e5e5;
        display: inline-block;
        vertical-align: middle;
    }
    .branchtype-list dt b {
        padding: 0 .373333rem;
        font-weight: bold;
    }
    .branchtype-list dd div {
        width: 33.3%;
        float: left;
        text-align: center;
        height: 3.2rem;
        color: #666;
        margin-top: 0.533rem;
    }
    .branchtype-list dd div img {
        width: 2.053333rem;
        height: 2.053333rem;
        margin-bottom: .32rem;
    }
    .branchtype-list dd div span {
        display: block;
        font-size: 0.373rem;
        color: #666;
    }
</style>
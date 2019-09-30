<template>
    <header>
        <div class="address">
            崂山区 <span class="iconfont">&#xe602;</span>
        </div>
        <div class="search">
            <i class="iconfont">&#xe620;</i>
            <em>{{ defSearSho }}</em>
        </div>
        <div class="message">
            <div class="iconfont">&#xe6f9;</div>
            <div class="text-msg">消息</div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "SearchHeader",
        data(){
            return {
                defSearSho:'10公斤直驱变频'
            }
        }
    }
</script>

<style scoped>
    header {
        background: #f4f4f4;
        border-bottom: 1px solid #D9D9D9;
        height: 1.147rem;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 99;
        display: flex;
        line-height: 1.147rem;
        font-size: 0.427rem;
        color: #999;
        align-items: center;
    }
    .address {
        padding: 0 0.267rem 0 0.427rem;
    }
    .search {
        border-radius: 0.373rem;
        background: #E8E8E8;
        height: .746667rem;
        line-height: .746667rem;
        position: absolute;
        left: 2.533rem;
        right: 1.013rem;
        font-size: 0.32rem;
    }
    .search i {
        font-size: 0.32rem;
        margin: 0 .213333rem;
    }
    .search em {
        color: #666;
    }
    .message {
        position: absolute;
        right: 0;
        top:0;
        font-size: 0.32rem;
        margin: .213333rem .106667rem 0 .266667rem;
    }
    .message .iconfont {
        width: .48rem;
        height: .48rem;
        line-height: .48rem;
        margin-left: 0.08rem;
    }
    .message .text-msg {
        line-height: 0.453rem;
        transform: scale(.83,.83);
    }
</style>
<template>
    <div class="branchtype-detail">
        <div class="branchtype-head" >
            <!--地理位置-->
            <div class="address" >
                <i class="iconfont">&#xe64b;</i>
            </div>
            <!--搜索-->
            <div class="search">
                <i class="iconfont">&#xe620;</i>
            </div>
            <!--消息-->
            <div class="message">
                <div class="text-msg">搜索</div>
            </div>
        </div>
        <div class="head-two">
            <div class="head-item">
                <van-dropdown-menu active-color="#666" :duration="0" >
                    <van-dropdown-item title="综合" v-model="synthesizeValue" :options="option1" />
                </van-dropdown-menu>
            </div>
            <div class="head-item">
                销量
            </div>
            <div class="head-item">
                <span>价格</span><i></i>
            </div>
            <div class="head-item">
                <span>筛选</span><i></i>
            </div>
        </div>
    </div>
</template>

<script>
    import { DropdownMenu, DropdownItem } from 'vant';
    export default {
        name: "BranchTypeDetail",
        data(){
            return {
                synthesizeValue:0,
                value2: 'a',
                option1: [
                    { text: '人气优先', value: 0 },
                ]
            }
        },
        components:{
            [DropdownMenu.name]:DropdownMenu,
            [DropdownItem.name]:DropdownItem
        }
    }
</script>

<style scoped>
    .branchtype-detail .branchtype-head {
        border-bottom: 1px solid #D9D9D9;
        box-sizing: border-box;
        position: fixed;
        width: 100%;
        height: 1.173333rem;
        left: 0;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .branchtype-head .address{
        padding: 0 .266667rem 0 .426667rem;
        font-size: 0.427rem;
        flex: 0;
    }
    .branchtype-head .address i {
        font-size: 0.587rem;
        color: #adadad;
    }
    .branchtype-head .search {
        background: #E8E8E8;
        height: .746667rem;
        border-radius: .373333rem;
        flex: 1;
    }
    .branchtype-head .search i {
        font-size: 0.32rem;
        line-height: .746667rem;
        margin: 0 .213333rem;
        color: #a2a1a6;
    }
    .branchtype-head .message{
        margin: 0;
        padding: 0.133rem;
        box-sizing: border-box;
    }
    .branchtype-head .message .text-msg {
        color: #999;
        font-size: 0.453rem;
        transform: scale(.83,.83);
        margin-top: -.106667rem;
    }
    .head-two{
        position: fixed;
        left: 0;
        top: 1.173333rem;
        z-index: 999;
        box-sizing: border-box;
        width: 100%;
        height: 1.173rem;
        padding: 0 0.32rem;
        background: #ffffff;
        font-size: 0.373rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .head-two .head-item {
        border-radius: 0.347rem;
        width: 1.6rem;
        height: 0.693rem;
        color: #666;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
<style>
    .head-two .van-dropdown-menu__title {
        font-size: 0.373rem;
        padding-right: 0.107rem;
    }
    .head-two .van-dropdown-menu {
        height: 1.173rem;
    }
    .head-two .van-dropdown-menu__title::after {
        color: black;
        opacity: 1;
        display: block;
        transform: scale(0.75,0.6) rotate(-45deg);
    }
    .head-two .van-dropdown-menu__title--down::after {
        transform: scale(0.75,0.6) rotate(-45deg);
        margin-top: -0.13333rem;
    }
    .head-two .van-dropdown-menu::after {
        border-width: 0;
    }
    .head-two::after {
        content: '';
        width: 100%;
        height: 0.027rem;
        background: #e4e4e4;
        position: absolute;
        top: 1.147rem;
        left: 0;
    }
    .head-two .van-cell {
        height: 1.067rem;
        padding: 0 0.533rem;
        overflow: hidden;
        color: #000;
        font-size: 0.32rem;
        line-height: 1.067rem;
    }
    .head-two .van-cell__title {
        color: #000;
    }
    .head-two .van-icon-success:before {
        font-size: 0.533rem;
    }
</style>
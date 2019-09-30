<template>
    <div>
        <SearchHeader></SearchHeader>
        <!--内容试图-->
        <div class="branchtype-content">
            <!--滚动条左侧-菜单-->
            <div class="branchtype-left">
                <ul class="scroll-left">
                    <li v-for="category of navCategories" :key="category.id" @tap="showCategoriesList(category.id)" :class="{selectedCategory:currentCategoryId == category.id}">{{ category.navigationName}}</li>
                </ul>
            </div>
            <!--滚动条右侧-内容-->
            <div class="branchtype-right">
                <div class="scroll-right">
                    <CategorySlideShow></CategorySlideShow>
                    <BranchTypeList></BranchTypeList>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    import SearchHeader from '../components/SearchHeader.vue';
    import BranchTypeList from '../components/BranchTypeList.vue';
    import CategorySlideShow from '../components/CategorySlideShow.vue';
    export default {
        name: "BranchType",
        data(){
            return {
                currentCategoryId:undefined
            }
        },
        mounted() {
            this.$eventBus.$emit('showHideNav',true);
            this.$store.dispatch('branchType/getNavCategories', (initCategoriesId) => {
                 this.currentCategoryId =  initCategoriesId;
            });
            let scrollLeft = new BScroll('.branchtype-left',{
                tap:true
            });
            let scrollRight = new BScroll('.branchtype-right');
        },
        methods:{
            showCategoriesList(parentId){
                this.currentCategoryId = parentId;
                this.$store.dispatch('branchType/getCategoriesList',parentId);
            }
        },
        computed: {
            navCategories(){
                return this.$store.state.branchType.navCategories;
            }
        },
        components: {
            SearchHeader,
            BranchTypeList,
            CategorySlideShow
        }
    }
</script>

<style scoped>
    .branchtype-content {
        position: absolute;
        top: 1.147rem;
        bottom: 1.226667rem;
        left: 0;
        right: 0;
        overflow: hidden;
        box-sizing: border-box;
    }
    .branchtype-left{
        float: left;
        width: 2.4rem;
        height: 100%;
        box-sizing: border-box;
        background: #fafafa;
        overflow: hidden;
    }
    .branchtype-right {
        box-sizing: border-box;
        float: right;
        width: calc(100% - 2.4rem);
        height: 100%;
        overflow: hidden;
    }
    /*使用better-scroll插件，其选择的元素必须有overflow:hidden,且这个元素是以它的第一个子元素来计算滚动的，它的第一个子元素必须超出它的高度，即它的第一个子元素必须溢出才能滚动*/
    .branchtype-left .scroll-left,.branchtype-right .scroll-right{
        box-sizing: border-box;
        min-height: calc(100% + 0.027rem);
        margin-bottom: .266667rem;
    }
    .branchtype-left .scroll-left {
        padding-bottom: .266667rem;
    }
    .branchtype-right .scroll-right {
        padding: .266667rem;
    }
    .branchtype-left .scroll-left li{
        line-height: 1.333rem;
        text-align: center;
        font-size: 0.373rem;
        color: #333;
    }
    .branchtype-left .selectedCategory {
        /*border-bottom: none;*/
        /*text-align: left;*/
        /*font-size: 14px;*/
        color: #2979FF;
        position: relative;
        /*line-height: .586667rem;*/
        /*background: #fff;*/
    }
    .branchtype-left .selectedCategory::after {
        content: "";
        position: absolute;
        left: 0;
        top: .373333rem;
        height: .586667rem;
        width: .106667rem;
        border-radius: .266667rem;
        background: #2979FF;
    }
</style>

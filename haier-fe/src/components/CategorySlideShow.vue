<template >
    <swiper v-show="slideShow.length" :options="swiperOption" ref="mySwiper" class="category-slide-show">
        <!-- slides -->
        <swiper-slide v-if="slideShow.length" class="swiper-wrapper" v-for="slide of slideShow" :key="slide.id" >
            <img :src="slide.imageUrl" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
    import Vue from 'vue';
    import VueAwesomeSwiper from 'vue-awesome-swiper';
    Vue.use(VueAwesomeSwiper);
    import 'swiper/dist/css/swiper.css';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    export default {
        name: "CategorySlideShow",
        data(){
            return {
                swiperOption:{
                    loop: true, // 循环模式选项
                    // 分页器
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    autoplay: {
                        delay: 3000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    },
                    observer:true,
                    observeParents:true
                }
            }
        },
        computed:{
            swiper() {
                return this.$refs.mySwiper.swiper;
            },
            slideShow(){
                return this.$store.getters['branchType/slideShow'];
            }
        },
        watch:{
            slideShow(newVal){
                this.$nextTick(() => {
                    this.swiper.removeSlide(newVal.length);
                    this.swiper.slideToLoop(0,0,false);
                    this.swiper.update();
                });
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style scoped>
    .swiper-container {
        width: 100%;
        height: 2.4rem;
        overflow: hidden;
        border-radius: .106667rem;
    }
    .swiper-slide img{
        width: 100%;
        height: 100%;
    }
    .swiper-pagination {
        bottom: 0;
        width: 98%;
        height: 0.533rem;
    }
</style>
<style>
    .category-slide-show .swiper-pagination .swiper-pagination-bullet{
        width: 0.267rem;
        height: 0.267rem;
        background: #232627;
        opacity: .3;
        margin: 0 0.08rem;
        vertical-align: middle;
    }
    .category-slide-show .swiper-pagination .swiper-pagination-bullet-active {
        transition: opacity .4s ease-in;
        opacity: 1;
    }
</style>
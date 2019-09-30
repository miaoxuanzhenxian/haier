<template>
	<nav ref='ft'>
	
		<ul>
            <router-link :to="{name:'home'}" tag="li" active-class="active" exact>
			<i class="iconfont ">&#xe611;</i>
			<br>
			<span>首页</span>
			
			</router-link>
			<router-link :to="{name:'branchType'}" tag="li" active-class="active" exact>
				<i class="iconfont ">&#xe62c;</i>
				<br>
				<span>分类</span>
			
				</router-link>
			 <router-link :to="{name:'cart'}" tag="li" active-class="active" exact>
				<i class="iconfont ">&#xe650;</i> 
				<br>
		
				<span>购物车</span>
				</router-link>
			<router-link :to="{name:'login'}" tag="li" active-class="active" exact>
				<i class="iconfont ">&#xe61b;</i>
				<br>
				<span>我的</span>
		
				</router-link>
		</ul>
	</nav>
</template>
<script>
export default {
	name:"TabbarFooter",
	mounted() {
    this.$eventBus.$on('showHideNav', (flag) => {
      if (flag) {
        this.$refs.ft.style.bottom = '0px';
      } else {
        this.$refs.ft.style.bottom = '-1.226667rem';
      }
    })
  },	
}
</script>

<style src="../assets/font/iconfont.css"></style>

<style scoped>
	nav{
	 transition: bottom 1s;
	 position: fixed;
     bottom: 0px;
     width: 100%;
	 height: 1.226667rem;
	 display: flex;
	 z-index:10;
	 color: #808080;
	 box-shadow: 0 0 .053333rem #ccc;
	 cursor: pointer;
	
	}	
	ul{margin-top: .16rem;
		width: 100%;
		display: flex;
		list-style: none;
	}
	ul li{
		 text-align: center;
		flex:1;
		text-align: center;
	
	}
		ul li .iconfont{
			font-size:.426667rem;
		
		}
		ul li span{
		display: inline-block;
		margin-top: .16rem
		}
	.active{
		color:#2577e3;
	}
</style>

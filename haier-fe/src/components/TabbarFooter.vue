<template>
<!-- 底部分页导航 -->
	<nav>
		<ul>
			<!-- <router-link :to="{name:'home'}" tag="li" 
			v-for="(tahomepg,index) of tahomepages" :key="index"
			
			:class="{active:isactive}" @click="isactive"
			>
			<i class="iconfont ">{{tahomepg.iconfontCum}}</i>
			<br>
			<span>{{tahomepg.text}}</span>
			
			</router-link> -->
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
	name:"TabbarFooter" ,
	data(){
		return{
			
			// tahomepages:[
			// 	{id:"home",name:"home", iconfontCum:"\ue611" ,text:"首页"},
			// 	{id:"branchType",name:"branchType", iconfontCum:"\ue62c" ,text:"分类"},
			// 	{id:"cart",name:"cart", iconfontCum:"\ue650" ,text:"购物车"},
			// 	{id:"login",name:"login", iconfontCum:"\ue61b" ,text:"我的"},
			// ]
			
		}
	},
	
	
}
</script>

<style src="../assets/font/iconfont.css"></style>

<style scoped>
	nav{
		background: #fff;
	  position: fixed;
       bottom: 0px;
       width: 100%;
	   height: 1.226667rem;
	   display: flex;
	   z-index:6960;
	   color: #808080;
	   box-shadow: 0 0 .053333rem #ccc;
	
	
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

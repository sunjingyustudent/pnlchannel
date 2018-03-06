<template>
	<div class="class-down">
		<span class="title-span">
			课程已下架或不存在
		</span>
		<img src="../assets/icon/advance.png" alt="" class="down-img">
		<div class="class-down-span" @click="goHome">
			去直播课列表
		</div>
		
	</div>
</template>
<style lang="less">
	.class-down{
		width: 100%;
		height: 100%;
		position: relative;
		.title-span{
			width: 375/20rem;
			height: 2.5rem;
			line-height: 2.5rem;
			font-size: 1rem;
			position: absolute;
			top: 3rem;
			text-align: center;
		}
		.down-img{
			display: inline-block;
			width: 6rem;
			height: 6rem;
			top: 7rem;
			left: 255/40rem;
			position: absolute;
		}
		.class-down-span{
			width: 15rem;
			height: 2.5rem;
			line-height: 2.5rem;
			text-align: center;
			color: #fff;
			background-color: #ff4646;
			border-radius: .3rem;
			position: absolute;
			top: 17rem;
			left: 75/40rem;
		}
	}
</style>
<script>
	import Vue from 'vue';
	import LivePost from '../service/live';
	import {wxShare} from '../util/wxapi';
	import Env from '../api/env';


	export default {
		data() {
			return {
	    	//返回数据
	    }
	},
	created(){
	},
	components:{
		//组件
	},
	methods: {
		//调用方法
		goHome(){
			let _this =this;
			_this.$router.push('/recently');
		}
	},
	mounted(){

	}
}
</script>

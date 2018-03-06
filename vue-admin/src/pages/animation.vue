<template>
	<div class="circular-box">
		<!-- <div class="div2 divbox">123</div> -->
		<div class="circular-box1 breath">
		</div>
		<div class="liuxing-box">
			<div class="liuxing-item liu-huadong">
			<!-- liu-huadong -->
			</div>
		</div>
	</div>
</template>
<style lang="less">
	.circular-box{
		padding-top: 3rem;
		.liuxing-box{
			position: absolute;
			width: 100%;
			height: 13rem;
			overflow: hidden;
			background-color: #000;
			top: 15rem;
			
			.liuxing-item{
				position: absolute;
				top: 1rem;
				right: 3rem;
				width: 1px;
				height: 150px;
				transform: rotate(45deg);
				background-color: #fff;
				box-shadow: 5px -35px 15px #fff;
			}
			.liuxing-item::before{
				content: '';
				width: 2px;
				height: 5px;
				background-color: yellow;
				position: absolute;
				bottom: 0;
			}
		}
		.liu-huadong{
			animation:liu-huadong-Animation 2s infinite;
			-moz-animation:liu-huadong-Animation 2s infinite; /* Firefox */
			-webkit-animation:liu-huadong-Animation 2s infinite; /* Safari and Chrome */
			-o-animation:liu-huadong-Animation 2s infinite; /* Opera */
		}
		@keyframes liu-huadong-Animation
		{
			0%{top: 1rem;right: 3rem;opacity: .8; }
			100%{top: 900px;right: 900px; opacity: .2;}
		}

		@-moz-keyframes liu-huadong-Animation /* Firefox */
		{
		0%{top: 1rem;right: 3rem;opacity: .8; }
			100%{top: 900px;right: 900px; opacity: .2;}
		}

		@-webkit-keyframes liu-huadong-Animation /* Safari and Chrome */
		{
	0%{top: 1rem;right: 3rem;opacity: .8; }
			100%{top: 900px;right: 900px; opacity: .2;}
		}

		@-o-keyframes liu-huadong-Animation /* Opera */
		{
	0%{top: 1rem;right: 3rem;opacity: .8; }
			100%{top: 900px;right: 900px; opacity: .2;}
		}
		.circular-box1{
			width: 2rem;
			height: 4rem;
			border-radius: 6rem 6rem 0 0;
			margin: 0rem auto;
			position: relative;  
		}
		.circular-box1::after{
			content:'';
			width: 100%;
			height: 100%;
			border-radius: 6rem 6rem 0 0;
			background-color: red;
			position: absolute;  
			transform: rotate(-45deg);
			right: 35%;
		}
		.circular-box1::before{
			content:'';
			width: 100%;
			height: 100%;
			border-radius: 6rem 6rem 0 0;
			background-color: red;
			position: absolute;  
			transform: rotate(45deg);
			left: 35%;
		}
		.divbox {  
			width:200px;  
			height:200px;  
			border:1px solid #ccc;  
			position: relative;  
			background-color:#fff;  
			float: left;  
			text-align: center;  
			margin: 30px;
		}  
		.div2 {  
			border-bottom-right-radius: 50px;  
			box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.2);  
		}  
		.div2::after {  
			content: '';  
			width: 22px;  
			height: 22px;  
			position: absolute;  
			bottom: 0px;  
			right: 0px;  
			border-radius: 0 0 16px 0;  
			box-shadow: -2px -2px 5px rgba(65, 65, 65, 0.38);  
			-webkit-transform: rotate(-20deg) skew(-40deg,-3deg) translate(-10px,-10px);  
		}  
		.breath{
			animation:breathAnimation 2s infinite;
			-moz-animation:breathAnimation 2s infinite; /* Firefox */
			-webkit-animation:breathAnimation 2s infinite; /* Safari and Chrome */
			-o-animation:breathAnimation 2s infinite; /* Opera */
		}
		@keyframes breathAnimation
		{
			0%{width: 4rem;height: 8rem; }
			50%{width: 2rem;height: 4rem;}
			100%{width: 4rem;height: 8rem;}
		}

		@-moz-keyframes breathAnimation /* Firefox */
		{
			0%{width: 4rem;height: 8rem; }
			50%{width: 2rem;height: 4rem;}
			100%{width: 4rem;height: 8rem;}
		}

		@-webkit-keyframes breathAnimation /* Safari and Chrome */
		{
			0%{width: 4rem;height: 8rem; }
			50%{width: 2rem;height: 4rem;}
			100%{width: 4rem;height: 8rem;}
		}

		@-o-keyframes breathAnimation /* Opera */
		{
			0%{width: 4rem;height: 8rem; }
			50%{width: 2rem;height: 4rem;}
			100%{width: 4rem;height: 8rem;}
		}

	}
	
	
</style>
<script>
	import Vue from 'vue';
	import LivePost from '../service/live';
	import {wxShare} from '../util/wxapi';
	import Env from '../api/env';
	import { Toast } from 'mint-ui';

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
	},
	mounted(){

	}
}
</script>

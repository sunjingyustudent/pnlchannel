<template>
	<div class="slide-box" id="slide" >
		<div class="slide-photo" ref="slideLeft">
			<ul class="slide-ul">
				<li class="cell">
					<div class="slide-photo-img" style="background-color:#ccc;">
					</div>
				</li>
				<li class="cell">
					<div class="slide-photo-img" style="background-color:red;">
					</div>
				</li>
				<li class="cell">
					<div class="slide-photo-img" style="background-color:yellow;">
					</div>
				</li>
				<li class="cell">
					<div class="slide-photo-img" style="background-color:green;">
					</div>
				</li>
				<li class="cell">
					<div class="slide-photo-img" style="background-color:pink;">
					</div>
				</li>
				<li class="cell">
					<div class="slide-photo-img" style="background-color:#ccc;">
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<style lang="less">
	.slide-box{
		.slide-photo {
			width: 100%;
			margin-top: 30/20rem;
			overflow-x: scroll;
			-webkit-overflow-x: scroll;
			position: relative;
		}
		.slide-photo::-webkit-scrollbar {
			width: 0;
			height: 0;
			background-color: #fff;
		}
		.slide-ul {
			min-width: 312/20*6rem;
			display: flex;
			justify-content: flex-start;
		}
		.cell {
        display: inline-block; // margin-right: .5rem;
        .slide-photo-img {
        	display: inline-block;
        	width: 312/20rem;
        	height: 325/20rem;
        	margin-right: .5rem;
        }
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
	    	scrllCrLeft:0,
	    }
	},
	created(){
		//获取客服名片
	},
	components:{
		//组件
	},
	methods: {
		//调用方法
		//横屏滑动
		scrllSlide:function(){
			let _this = this;
			let slideLeft = _this.$refs.slideLeft;
			slideLeft.onscroll = function(){
				_this.scrllCrLeft = slideLeft.scrollLeft;
				console.log(_this.scrllCrLeft);
			}
		},
		scrllLeft:function(){
			console.log("往左滑");
		},
		scrllRight:function(){
			console.log("往右滑");
		}
	},
	mounted(){
		// let slide = document.getElementById('slide');
		// let slideleft = slide.scrollLeft;
		this.scrllSlide();
	},
	watch:{
		scrllCrLeft(newValue,old){
			if(old < newValue){
             //往左滑
             this.scrllLeft();
         }else{
         	//往右滑
         	this.scrllRight();
         }
     }
 }
}
</script>

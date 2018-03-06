<template>
	<div class="active-center">
		<div class="active-item" v-for="item in activeInfo">
			<div class="activeing" @click="interActive(item)">
				<img :src= "item.cover_img_url" class="active-banner"/>
				<div class="active-title">
					<span class="title-text">
						{{item.title}}
					</span>
					<span class="activeStatus" :class="{'activeCloseStatus':item.status==0}">
						{{item.status==0?'已结束':'进行中'}}
					</span>
				</div>
			</div>
			<div class="actived" v-if="item.status==0" @click="activeClose">
				<div class="actived-bg">
				</div>
				<img src="../../assets/images/active-end.png" class="activeed-img"/>
			</div>
		</div>
		<div class="close-tip" v-if="activeCloseCover">
			<div class="colse-tip-bg">
			</div>
			<div class="close-body">
				<div class="close-top">
					该活动已结束
				</div>	
				<div class="close-bottom" @click="closeCover">
					确定
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less">
.active-center{
	padding: 15/20rem;
	background-color: #f6f6f6;
	min-height: 100%;
	position: relative;
	.active-item{
		width: 100%;
		height: 222/20rem;
		margin-bottom: 15/20rem;
		border-radius: 13/20rem;
		position: relative;
		.activeing{
			.active-banner{
				width: 100%;
				height: 170/20rem;
				border-radius: 13/20rem 13/20rem 0 0;
				vertical-align: top;
			}
			.active-title{
				width: 100%;
				height: 52/20rem;
				border-radius: 0 0 13/20rem 13/20rem;
				background-color: #fff;
				line-height: 52/20rem;
				padding:0 1rem;
				position: relative;
				.title-text{
					font-size: 16/20rem;
					color: #4a4a4a;
				}
				.activeStatus{
					color: #FD5E02;
					font-size: 14/20rem;
					position: absolute;
					right: 1rem; 
				}
				.activeCloseStatus{
					color: #9B9B9B;
				}
			}
		}
		.actived{
			width: 100%;
			height: 100%;
			position: absolute;
			top:0;
			left: 0;
			z-index: 999;
			.actived-bg{
				position: absolute;
				top:0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: #000;
				opacity: 0.68;
				border-radius: 13/20rem;
			}
			.activeed-img{
				position: absolute;
				top: 0;
				left: 0;
				width: 152/20rem;
				height: 113/20rem;
				top: 55/20rem;
				left: 97/20rem;
			}

		}
	}
	.close-tip{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 1000;
		.colse-tip-bg{
			width: 100%;
			height: 100%;
			background-color: #000;
			opacity: 0.68;
		}
		.close-body{
			width: 270/20rem;
			height: 111/20rem;
			position: absolute;
			top: 278/20rem;
			left: 53/20rem;
			background-color: #fff;
			border-radius: 13/20rem;
			font-size: .9rem;
			text-align: center;
			.close-top{
				width: 100%;
				height: 65.5/20rem;
				line-height: 65.5/20rem;
				border-radius: 13/20rem 13/20rem 0 0;
				border-bottom: 0.5px solid #E9E9E9;
				color: #4a4a4a;
			}
			.close-bottom{
				width: 100%;
				height: 45/20rem;
				line-height: 45/20rem;
				color: #FD5E02;
			}
		}

	}
}
</style>
<script>
import Vue from 'vue';
import  LivePost from  '../../service/live';


export default {
	data() {
		return {
    	//返回数据
    	activeFlag1:false,
    	activeFlag:true,
    	activeCloseCover:false,
    	activeInfo:[],
    }
},
created(){
	
},
components:{
	//组件
},
methods: {
	//调用方法
	//获取活动信息
	getActiveInfo(){
		let _this = this;
		LivePost.getAppCenter()
		.then(res => {
			console.log(res);
			_this.activeInfo = res.data;

		})
		.catch(error => {
		})
	},
	//显示活动已结束
	activeClose(){
		let _this = this;
		_this.activeCloseCover = true;
	},
	//关闭活动结束遮罩层
	closeCover(){
		let _this = this;
		_this.activeCloseCover = false;
	},
	//进入活动
	interActive(item){
		let _this = this;
		console.log(item);
		let params = {
			'id':item.id
		}
		LivePost.getActiveStatus(params)
		.then(res => {
			console.log(res);
			if(res.data.status == 1){
				window.location.href = item.link_url;
			}else{
				_this.activeCloseCover = true;
			}
		})
		.catch(error => {
		})




	}
},
mounted(){
	this.getActiveInfo();
	
}
}
</script>

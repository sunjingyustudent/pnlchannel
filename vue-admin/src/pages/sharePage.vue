<template>
	<div class="share-page">
		<div v-show="!classExit">
			<img :src="posterImg" class="share-page-bg">
			<img :src="headImg" class="share-page-head">
			<div class="share-page-info">
				<span class="share-page-name">{{studentName}}</span>
				<span class="share-page-name">向您推荐了很棒的在线课程</span>
			</div>
			<img :src="qrCodeImg" class="share-page-code">
		</div>
		<class-down v-show="classExit"></class-down>
	</div>
</template>
<style lang="less">
	.share-page{
		position: relative;
		.share-page-bg{
			width: 100%;
			vertical-align:middle;
		}
		.share-page-head{
			position: absolute;
			top: 177/20rem;
			width: 3rem;
			height: 3rem;
			left: 157/20rem;
			border-radius: 3rem;
			margin-bottom: .5rem;
		}
		.share-page-info{
			width: 100%;
			height: 42/20rem;
			text-align: center;
			color: #fff;
			position: absolute;
			top: 247/20rem;
			font-size: 14/20rem;
			margin-bottom: 1rem;
			.share-page-name{
				display: block;
				width: 100%;
				height: 21/20rem;
				line-height: 21/20rem;
			}
		}
		.share-page-code{
			width: 155/20rem;
			height: 155/20rem;
			position: absolute;
			top: 309/20rem;
			left: 110/20rem;
		}
	}
</style>
<script>
	import Vue from 'vue';
	import LivePost from '../service/live';
	import { Toast } from 'mint-ui';
	//加载
	import { Indicator } from 'mint-ui';
	Vue.use(Indicator);

	import classDown from '../components/classDown';

	export default {
		data() {
			return {
	    	//返回数据
	    	title:'',
	    	studentName:'',
	    	posterImg:'',
	    	headImg:'',
	    	qrCodeImg:'',
	    	classExit:false
	    }
	},
	created(){
	},
	components:{
		//组件
		classDown
	},
	methods: {
		//调用方法
		sharePage(){
			let _this = this;
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});
			let params ={
				classid:_this.$route.params.classid,
				openid:_this.$route.params.openid,
			}
			LivePost.getSharePage(params).then(res => {
				Indicator.close();
				_this.title = res.data.courseinfo.title;
				document.title = this.title;
				_this.posterImg = res.data.courseinfo.poster;
				_this.studentName = res.data.userinfo.wechat_name;
				_this.headImg = res.data.userinfo.head;
				_this.qrCodeImg = res.data.qr_code;
			})
			.catch(error => {
				Indicator.close();
				//当前课程已下架
				if(error.data.code===3002){
					_this.classExit = true;
				}
			})
		}
	},
	mounted(){
		this.sharePage();
	}
}
</script>

<template>
	<div class="about-us">
		<img src="../assets/images/aboutus/title.png" class="about-us-img">
		<img src="../assets/images/aboutus/company.png" class="about-us-img">
		<img src="../assets/images/aboutus/company1.png" class="about-us-img">
		<img src="../assets/images/aboutus/company2.png" class="about-us-img">
		<img src="../assets/images/aboutus/company3.png" class="about-us-img">
		<img :src="qrCode" class="about-us-img">
	</div>
</template>
<style lang="less">
	.about-us{
		width: 100%;
		.about-us-img{
			width: 100%;
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
	    	qrCode:'',
	    	kefuid:this.$route.params.id || 0
	    }
	},
	created(){
		//获取客服名片
		this.getKefuCode();
	},
	components:{
		//组件
	},
	methods: {
		//调用方法
		//获取用户二维码
		getKefuCode(){
			let _this = this;
			let params ={
				kefuid:_this.kefuid
			}
			LivePost.getKefuqQrcode(params).then(res => {
				_this.qrCode = res.data.qrcode;
			})
			.catch(error => {
			})
		},
		//用户分享
		share(){
			var params = {
				"url":window.location.href
			};
			var shareParams = {
				title : "VIP陪练，让练琴不再迷糊，真人1对1在线陪练!",
				desc: "目前已服务来自13个国家，超过3万名小朋友，赶紧来加入他们吧!",
				link: window.location.href,
				imgUrl: Env.link.index+"/static/img/bailogo.jpg",
				jsApiList:['onMenuShareAppMessage', 'onMenuShareTimeline']
			};
			//获取分享配置
			LivePost.getWxJsConfig(params)
			.then(res => {
				wxShare(res.data,shareParams);
			})
			.catch(error => {
			})
		},
	},
	mounted(){
		this.share();
	}
}
</script>

<template>
	<div class="about-us">
		<img src="../assets/images/aboutus/title.png" class="about-us-img">
		<img src="../assets/images/aboutus/extend.png" class="about-us-img">
		<img src="../assets/images/aboutus/extend1.png" class="about-us-img">
		<img src="../assets/images/aboutus/extend2.png" class="about-us-img">
		<img src="../assets/images/aboutus/extend3.png" class="about-us-img">
		<img :src="kefuimg" class="about-us-img" v-if="kefuimg!=''">
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
	    	kefuimg:''
	    }
	},
	created(){
		//获取客服名片
		this.getKefuimg();
	},
	components:{
		//组件
	},
	methods: {
		//调用方法
		//获取用户banner
		getKefuimg(){
			let _this =this;
			LivePost.getKefucard().then(res => {
				_this.kefuimg = res.data.banner;
			})
			.catch(error => {
				if(error.data.code===400){
					window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/extend";
				}
			})
			_this.share();
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

	}
}
</script>

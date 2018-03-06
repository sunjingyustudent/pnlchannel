<template>
	<div class="parent-speak"> 
		<img src="../assets/images/aboutus/title.png" alt="" class="introduce-img">
		<img src="../assets/images/aboutus/parent-speak2.png" alt="" class="introduce-img">
		<div class="video-box">
			<img src="../assets/images/aboutus/live-practice3.png" alt="" class="introduce-img" @click="playVideo()" v-show="!videoFlag">
			<video preload="preload"  v-show="videoFlag" ref="videoPlay" src="http://o7ex1jsur.bkt.clouddn.com/web.mp4?v=1" class="video">
			</video>
		</div>
		<img src="../assets/images/aboutus/parent-speak4.png" alt="" class="introduce-img">
		<img src="../assets/images/aboutus/parent-speak5.png" alt="" class="introduce-img">
		<img src="../assets/images/aboutus/parent-speak6.png" alt="" class="introduce-img">
		<img src="../assets/images/aboutus/parent-speak7.png" alt="" class="introduce-img">
		<img src="../assets/images/aboutus/parent-speak8.png" alt="" class="introduce-img">
		<img src="../assets/images/aboutus/parent-speak9.png" alt="" class="introduce-img">
		<img :src="qrCode" alt="" class="introduce-img" v-show="qrCode">
	</div>
</template>
<style lang="less">
	.parent-speak{
		width: 100%;
		.introduce-img{
			width: 100%;
		}
		.video-box{
			width: 100%;
			height: 325/20rem;
			.video{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
<script>
	import Vue from 'vue';
	import LivePost from '../service/live';
	import Env from '../api/env';
	import {wxShare} from '../util/wxapi';

	export default {
		data() {
			return {
	    	//返回数据
	    	videoFlag:false,
	    	qrCode:'',
	    	kefuid:this.$route.params.kid || 0
	    }
	},
	created(){
		this.getKefuCode();
	},
	components:{
	},
	methods: {
		//调用方法
		playVideo(){
			let _this = this;
			_this.videoFlag = true;
			_this.$refs.videoPlay.play();
		},
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

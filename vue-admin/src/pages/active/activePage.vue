<template>
	<div class="share-page">
		<!-- 背景音乐 -->
		<div class="audio-box">
			<audio id="audio" autoplay="autoplay" loop="loop">
				<source src="../../assets/audio/active.mp3" type="audio/mpeg" />
			</audio>
		</div>
		<img :src="posterBg" class="sharebg" />
		<img :src="titleImg" :class="titleClass" v-if="titleFlag"/>
		<img :src="shareImg" class="shareQrcode" ref="shareQrcode"/>
		<span class="shareSpan" :class="spanClass">立即扫码，加入VIP微课</span>
	</div>
</template>
<style lang="less">
	.share-page{
		width: 100%;
		height: 100%;
		.audio-box{
			position: absolute;
			top: 0;
			z-index: -1000;
		}
		.sharebg{
			width: 100%;
			height: 100%;
			vertical-align: middle;
		}
		.poster_title1{
			position: absolute;
			width: 186/20rem;
			top: 51/20rem;
			left: 17/20rem;
		}
		.poster_title2{
			position: absolute;
			width: 190/20rem;
			top: 30/20rem;
			right: 7/20rem;
		}
		.shareQrcode{
			width: 70/20rem;
			height: 70/20rem;
			position: absolute;
			left: 57/20rem;
			bottom: 31/20rem;
		}
		.shareSpan{
			width: 180/20rem;
			height: 16/20rem;
			line-height: 16/20rem;
			position: absolute;
			bottom: 58/20rem;
			left: 149/20rem;
			font-size: .8rem;
			
		}
		.colorSpan1{
			color: #fff;
		}
		.colorSpan2{
			color: #000;
		}

	}
</style>
<script>
	import Vue from 'vue';
	import LivePost from '../../service/live';
	export default {
		data() {
			return {
				titleFlag:false,
				role:this.$route.params.role,
				num:this.$route.params.num,
				openid:this.$route.params.openid,
				posterBg:'/static/img/yeardata/poster2.jpg',
				titleImg:'/static/img/yeardata/poster_title1.png',
				titleClass:'poster_title1',
				spanClass:'colorSpan1',
				shareImg:'',
				iponeX:0,
			}
		},
		created(){
			
		},
		components:{
			//组件
		},
		methods: {
			//调用方法
			//获取海报详情
			getPosterInfo(){
				let _this = this;
				let w = document.body.clientWidth;
				let h = document.body.clientHeight;
				if(w/h<375/603){
					_this.iponeX = 1;
				}
				_this.role = _this.$route.params.role;
				_this.num = _this.$route.params.num;
	                //老师视角
	                if(_this.role == 1){
	                	if(_this.num == 1){
	                		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster1.jpg':'/static/img/yeardata/poster1-2.jpg';
	                		_this.titleFlag = true;
	                		_this.titleClass = 'poster_title1';
	                		_this.titleImg = '/static/img/yeardata/poster_title1.png';
	                		_this.spanClass = 'colorSpan1';
	                	} else if(_this.num == 2){
	                		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster2.jpg':'/static/img/yeardata/poster2-2.jpg';
	                		_this.titleClass = 'poster_title2';
	                		_this.titleImg = '/static/img/yeardata/poster_title2.png';
	                		_this.spanClass = 'colorSpan2';
	                		_this.titleFlag = true;
	                	} else if(_this.num == 3){
	                		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster3.jpg':'/static/img/yeardata/poster3-2.jpg';
	                		_this.spanClass = 'colorSpan2';
	                	} else {
	                		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster6.jpg':'/static/img/yeardata/poster6-2.jpg';
	                		_this.spanClass = 'colorSpan2';
	                	}
	                }
	                //家长视角
	                if(_this.role == 2){
	                	if(_this.num == 1){
	                		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster1.jpg':'/static/img/yeardata/poster1-2.jpg';
	                		_this.titleFlag = true;
	                		_this.titleImg = '/static/img/yeardata/baby_pass_title.png';
	                		_this.titleClass = 'poster_title1';
	                		_this.spanClass = 'colorSpan1';
	                	} else if(_this.num == 2){
	                		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster2.jpg':'/static/img/yeardata/poster2-2.jpg';
	                		_this.titleClass = 'poster_title2';
	                		_this.titleImg = '/static/img/yeardata/baby_good_title.png';
	                		_this.spanClass = 'colorSpan2';
	                		_this.titleFlag = true;
	                	} else if(_this.num == 3){
	                		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster6.jpg':'/static/img/yeardata/poster6-2.jpg';
	                		_this.spanClass = 'colorSpan2';
	                		
	                	} else {
	                		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster3.jpg':'/static/img/yeardata/poster3-2.jpg';
	                		_this.spanClass = 'colorSpan2';
	                	}
	                }
	                //音乐爱好者视角
	                if(_this.role == 3){
	                	if(_this.num == 1){
	                		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster4.jpg':'/static/img/yeardata/poster4-2.jpg';
	                		_this.spanClass = 'colorSpan1';
	                	} else if(_this.num == 2){
	                		_this.posterBg = _this.iponeX == 0 ? '/static/img/yeardata/poster5.jpg' :'/static/img/yeardata/poster5-2.jpg';
	                		_this.spanClass = 'colorSpan1';
	                	} else if(_this.num == 3){
	                		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster6.jpg':'/static/img/yeardata/poster6-2.jpg';
	                		_this.spanClass = 'colorSpan2';
	                	} else {
	                		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster3.jpg':'/static/img/yeardata/poster3-2.jpg';
	                		_this.spanClass = 'colorSpan2';
	                	}
	                }
	            },
	        //获取用户二维码
	        getQrcode(){
	        	let _this = this;
	        	let params = {
	        		'openid':_this.openid
	        	}
	        	LivePost.getUserQrcode(params)
	        	.then(res => {
	        		_this.shareImg = res.data.qrcode;
	        	})
	        	.catch(error => {
	        	});
	        }, 
	        playAudio(){
				//微信端播放音频 
				var WeixinJSBridgeReady = document.addEventListener("WeixinJSBridgeReady", function () {
					let audio = document.getElementById('audio');
					audio.play();
				})
				if (WeixinJSBridgeReady && typeof (WeixinJSBridgeReady) == "function") {
					WeixinJSBridgeReady();
				}
			},
			//识别二维码关闭音频
			closeAudio(){
				let _this = this;
				let shareQrcode = _this.$refs.shareQrcode;
				shareQrcode.addEventListener('touchstart',function(event){
					let timeOutEvent = setTimeout(function() {    
						timeOutEvent = 0; 
						// wx.closeWindow(); 
						let audio = document.getElementById('audio');
						audio.pause();  
					}, 400);
				},false);
			},
			//禁止分享
			share(){
				let _this =this;
				var params = {
					"url":window.location.href
				};
				LivePost.getWxJsConfig(params)
				.then(res => {
					wx.config({
						debug:false,
						appId:res.data.appId,
						timestamp:res.data.timestamp,
						nonceStr: res.data.nonceStr,
						signature: res.data.signature,
						jsApiList: ['hideMenuItems']
					});
					wx.ready(function () {
						wx.hideMenuItems({
							menuList: [
							'menuItem:share:qq',
							'menuItem:share:weiboApp',
							'menuItem:share:QZone',
							'menuItem:share:appMessage',
							'menuItem:share:timeline',
							]
						});
					});
				})
				.catch(error => {

				})
			},
		},
		mounted(){
			this.getPosterInfo();
			this.getQrcode();
			this.playAudio();
			this.closeAudio();
			this.share();
		}
	}
</script>

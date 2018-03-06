<template>
	<div class="active-share">
		<!-- 背景音乐 -->
		<div class="audio-box">
			<audio id="audio" autoplay="autoplay" loop="loop">
				<source src="../../assets/audio/active.mp3" type="audio/mpeg" />
			</audio>
		</div>
		<div class="share-base">
			<img :src="posterBg" class="poster_bg"/>
			<!-- 标题 -->
			<img :src="titleImg" :class="titleClass" v-if="titleFlag"/>
			<!-- 分享按钮 -->
			<span class="share_button" :class="buttonClass" @click="shareFriend">
				立即分享
			</span>
		</div>
		<!-- 分享遮罩层 -->
		<div class="share-cover" v-if="coverFlag" @click="hiddenCover">
			<div class="share-cover-bg">
			</div>
			<img src="../../assets/images/yearData/poster/share_tip.png" class="share_tip"/>
		</div>
	</div>
</template>
<style lang="less">
	.active-share{
		position: relative;
		width: 100%;
		height: 100%;
		.audio-box{
			position: absolute;
			top: 0;
			z-index: -1000;
		}
		.share-base{
			position: relative;
			width: 100%;
			height: 100%;
			.poster_bg{
				position: absolute;
				top: 0;
				width: 100%;
				height: 100%;
				z-index: -1;
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
			.share_button{
				position: fixed;
				display: block;
				width: 280/20rem;
				height: 48/20rem;
				bottom: 49/20rem;
				left: 47/20rem;
				line-height: 48/20rem;
				text-align: center;
				border-radius: 57/20rem;
			}
			.share_button1{
				background-color: #ECF2BE;
				color: #555A60;
			}
			.share_button2{
				background-color: #B5232C;
				color: #fff;
			}
			.share_button3{
				background-color: #FFEB91;
				color: #4A4A4A;
			}
			.share_button4{
				background-color: #AB2600 ;
				color: #fff;
			}
			.share_button5{
				background-color: #1A5B72 ;
				color: #fff;
			}
		}
		.share-cover{
			width: 100%;
			height: 100%;
			z-index: 999;
			position: absolute;
			top: 0;	
			.share-cover-bg{
				width: 100%;
				height: 100%;
				background-color: #000;
				opacity: .6;
			}
			.share_tip{
				position: fixed;
				top: 0;
				width: 199/20rem;
				right: 12/20rem;
			}
		}
		//高度100%
		.fullHeight{
			height: 100%;
		}
		
	}
</style>
<script>
	import Vue from 'vue';
	import LivePost from '../../service/live';
	import Env from '../../api/env';
	export default {
		data() {
			return {
				buttonClass:'',
				coverFlag:false,
				role:this.$route.params.role,
				num:this.$route.params.num,
				posterBg:'',
				titleImg:'',
				titleFlag:'',
				titleClass:'',
				openid:'',
				fullHeightFlag:false,
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
		//获取海报底图
		getPoster(){
			let _this = this;
			let w = document.body.clientWidth;
			let h = document.body.clientHeight;
			if(w/h<375/603){
				_this.iponeX = 1;
				_this.fullHeightFlag = true;
			}
			_this.role = _this.$route.params.role;
			_this.num = _this.$route.params.num;
            //老师视角
            if(_this.role == 1){
            	if(_this.num == 1){
            		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster1.jpg':'/static/img/yeardata/poster1-2.jpg';
            		_this.buttonClass = 'share_button1';
            		_this.titleFlag = true;
            		_this.titleImg = '/static/img/yeardata/poster_title1.png';
            		_this.titleClass = 'poster_title1';
            	} else if(_this.num == 2){
            		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster2.jpg':'/static/img/yeardata/poster2-2.jpg';
            		_this.titleFlag = true;
            		_this.titleImg = '/static/img/yeardata/poster_title2.png';
            		_this.buttonClass = 'share_button2';
            		_this.titleClass = 'poster_title2';
            	} else if(_this.num == 3){
            		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster3.jpg':'/static/img/yeardata/poster3-2.jpg';
            		_this.buttonClass = 'share_button2';
            	} else {
            		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster6.jpg':'/static/img/yeardata/poster6-2.jpg';
            		_this.buttonClass = 'share_button5';
            	}
            }
            //家长视角
            if(_this.role == 2){
            	if(_this.num == 1){
            		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster1.jpg':'/static/img/yeardata/poster1-2.jpg';
            		_this.buttonClass = 'share_button1';
            		_this.titleFlag = true;
            		_this.titleImg = '/static/img/yeardata/baby_pass_title.png';
            		_this.titleClass = 'poster_title1';
            	} else if(_this.num == 2){
            		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster2.jpg':'/static/img/yeardata/poster2-2.jpg';
            		_this.titleFlag = true;
            		_this.titleImg = '/static/img/yeardata/baby_good_title.png';
            		_this.titleClass = 'poster_title2';
            		_this.buttonClass = 'share_button2';
            	} else if(_this.num == 3){
            		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster6.jpg':'/static/img/yeardata/poster6-2.jpg';
            		_this.buttonClass = 'share_button5';
            	} else {
            		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster3.jpg':'/static/img/yeardata/poster3-2.jpg';
            		_this.buttonClass = 'share_button2';
            	}
            }
            //音乐爱好者视角
            if(_this.role == 3){
            	if(_this.num == 1){
            		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster4.jpg':'/static/img/yeardata/poster4-2.jpg';
            		_this.buttonClass = 'share_button3';
            	} else if(_this.num == 2){
            		_this.posterBg = _this.iponeX == 0 ? '/static/img/yeardata/poster5.jpg' :'/static/img/yeardata/poster5-2.jpg';
            		_this.buttonClass = 'share_button4';
            	} else if(_this.num == 3){
            		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster6.jpg':'/static/img/yeardata/poster6-2.jpg';
            		_this.buttonClass = 'share_button5';
            	} else {
            		_this.posterBg = _this.iponeX == 0 ?'/static/img/yeardata/poster3.jpg':'/static/img/yeardata/poster3-2.jpg';
            		_this.buttonClass = 'share_button2';
            	}
            }
        },
		//用户点击分享
		shareFriend(){
			let _this = this;
			_this.coverFlag = true;
		},
		//隐藏遮罩层
		hiddenCover(){
			let _this = this;
			_this.coverFlag = false;
		},
		share(){
			let _this =this;
			var params = {
				"url":window.location.href
			};
			var shareParams = {
				title : '你有一份新年祝福待查收，立即围观～',
				desc: "听说美好的愿望都可以被实现",
				link: APIMSG.wxUrl+"/activePage/"+ _this.role+'/'+_this.num + '/' + _this.openid,
				imgUrl: Env.link.index + '/static/img/yeardata/active_logo.png',
				jsApiList:['hideMenuItems','onMenuShareTimeline','onMenuShareAppMessage']
			};
			LivePost.getWxJsConfig(params)
			.then(res => {
				wx.config({
					debug:false,
					appId:res.data.appId,
					timestamp:res.data.timestamp,
					nonceStr: res.data.nonceStr,
					signature: res.data.signature,
					jsApiList: shareParams.jsApiList
				});
				wx.ready(function () {
				    //分享给朋友圈
				    wx.onMenuShareTimeline({
				    	title: shareParams.title||Env.share.defaultTitle,
				    	link: shareParams.link||Env.share.defaultUrl,
				    	imgUrl: shareParams.imgUrl||Env.share.defaultImg,
				    	success: function () {
				    		_this.coverFlag = false;
				    	},
				    	cancel: function () {
					            //用户取消分享后执行的回调函数
					        }
					    });
					//发送给朋友
					wx.onMenuShareAppMessage({
						title: shareParams.title||Env.share.defaultTitle,
			            desc: "听说美好的愿望都可以被实现", // 分享描述
			            link: shareParams.link||Env.share.defaultUrl,
			            imgUrl: shareParams.imgUrl||Env.share.defaultImg,
			            success: function () {
			            },
			            cancel: function () {
					            //用户取消分享后执行的回调函数
					        }
					    });
				});
			})
			.catch(error => {

			})
		},
		//获取用户openid
		getOpenid(){
			let _this = this;
			LivePost.getOpenid()
			.then(res => {
				_this.openid = res.data.openid;
				_this.share();
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
		}
	},
	mounted(){
		this.getPoster();
		this.getOpenid();
		this.playAudio();
	}
}
</script>

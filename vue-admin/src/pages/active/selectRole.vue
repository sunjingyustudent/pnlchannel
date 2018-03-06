<template>
	<div class="select-role">
		<!-- 背景音乐 -->
		<div class="audio-box">
			<audio id="audio" autoplay="autoplay" loop="loop">
				<source src="../../assets/audio/active.mp3" type="audio/mpeg" />
			</audio>
		</div>
		<!-- 背景图 -->
		<img src="../../assets/images/yearData/p10_bg.jpg" class="p10_bg" :class="{'fullHeight':fullHeightFlag}"/>
		<!-- 流星 -->
		<img src="../../assets/images/yearData/p10_start2.png" class="p10_start2"/>
		<img src="../../assets/images/yearData/p10_start1.png" class="p10_start1"/>
		<img src="../../assets/images/yearData/p10_start3.png" class="p10_start3" v-if="startFlag"/>
		<!-- 标题 -->
		<img src="../../assets/images/yearData/p10_title.png" class="p10_title"/>
		<!-- 选角色 -->
		<div class="select-role-box">
			<img src="../../assets/images/yearData/p10_teacher.png" class="role-item"  :class="{'noSelect':role==1 || role== 0}" @click="selectRole(1)"/> 
			<img src="../../assets/images/yearData/p10_parent.png" class="role-item" :class="{'noSelect':role==2 || role== 0}" @click="selectRole(2)"/>
			<img src="../../assets/images/yearData/p10_people.png" class="role-item" :class="{'noSelect':role==3 || role== 0}" @click="selectRole(3)"/>
		</div>
	</div>
</template>
<style lang="less">
	.select-role{
		width: 100%;
		height: 100%;
		.audio-box{
			position: absolute;
			top: 0;
			z-index: -1000;
		}
		.p10_bg{
			width: 100%;
			vertical-align: middle;
		    // height: 100%;
		}
		.p10_title{
			position: absolute;
			top: 112/20rem;
			left: 96/20rem;
			width: 184/20rem;
		}
		.p10_start2{
			position: absolute;
			bottom: 388/20rem;
			height: 164/20rem;
			left: 172/20rem;
			animation: p10_start2 2.5s infinite;
			-webkit-animation:p10_start2 2.5s infinite;
			-moz-animation:p10_start2 2.5s infinite;
			-o-animation:p10_start2 2.5s infinite;
		}
		@keyframes p10_start2{
			0% {height: 164/20rem;bottom: 603/20rem;left: 375/20rem;}
			100% {height: 0rem;bottom: 388/20rem; left: 172/20rem;}
		}
		@-webkit-keyframes p10_start2{
			0% {height: 164/20rem;bottom: 603/20rem;left: 375/20rem;}
			100% {height: 0rem;bottom: 388/20rem; left: 172/20rem;}
		}
		@-moz-keyframes p10_start2{
			0% {height: 164/20rem;bottom: 603/20rem;left: 375/20rem;}
			100% {height: 0rem;bottom: 388/20rem; left: 172/20rem;}
		}
		@-o-keyframes p10_start2{
			0% {height: 164/20rem;bottom: 603/20rem;left: 375/20rem;}
			100% {height: 0rem;bottom: 388/20rem; left: 172/20rem;}
		}
		.p10_start1{
			position: absolute;
			bottom: 400/20rem;
			height: 114/20rem;
			left: 25/20rem;
			animation: p10_start1 2s infinite;
			-webkit-animation:p10_start1 2s infinite;
			-moz-animation:p10_start1 2s infinite;
			-o-animation:p10_start1 2s infinite;
		}
		@keyframes p10_start1{
			0% {height: 114/20rem;bottom: 603/20rem;left: 228/20rem;}
			30% {height: 114/20rem;}
			100% {height: 0rem;bottom: 400/20rem;left: 25/20rem;}
		}
		@-webkit-keyframes p10_start1{
			0% {height: 114/20rem;bottom: 603/20rem;left: 228/20rem;}
			30% {height: 114/20rem;}
			100% {height: 0rem;bottom: 400/20rem;left: 25/20rem;}
		}
		@-moz-keyframes p10_start1{
			0% {height: 114/20rem;bottom: 603/20rem;left: 228/20rem;}
			30% {height: 114/20rem;}
			100% {height: 0rem;bottom: 400/20rem;left: 25/20rem;}
		}
		@-o-keyframes p10_start1{
			0% {height: 114/20rem;bottom: 603/20rem;left: 228/20rem;}
			30% {height: 114/20rem;}
			100% {height: 0rem;bottom: 400/20rem;left: 25/20rem;}
		}
		.p10_start3{
			height: 150/20rem;
			position: absolute;
			bottom: 500/20rem;
			left: 38/20rem;
			animation: p10_start3 2s infinite;
			-webkit-animation:p10_start3 2s infinite;
			-moz-animation:p10_start3 2s infinite;
			-o-animation:p10_start3 2s infinite;
		}
		@keyframes p10_start3{
			0% {height: 150/20rem;bottom: 630/20rem;left: 168/20rem;}
			100% {height: 0rem;bottom: 500/20rem;;left: 38/20rem;}
		}
		@-webkit-keyframes p10_start3{
			0% {height: 150/20rem;bottom: 630/20rem;left: 168/20rem;}
			100% {height: 0rem;bottom: 500/20rem;;left: 38/20rem;}
		}
		@-moz-keyframes p10_start3{
			0% {height: 150/20rem;bottom: 630/20rem;left: 168/20rem;}
			100% {height: 0rem;bottom: 500/20rem;;left: 38/20rem;}
		}
		@-o-keyframes p10_start3{
			0% {height: 150/20rem;bottom: 630/20rem;left: 168/20rem;}
			100% {height: 0rem;bottom: 500/20rem;;left: 38/20rem;}
		}
        //选择愿望
        .select-role-box{
        	width: 180/20rem;
        	position: absolute;
        	top:239/20rem;
        	left: 195/40rem;
        	.role-item{
        		width: 180/20rem;
        		height: 48/20rem;
        		display: block;
        		margin-bottom: 27/20rem;
        		opacity: .5;
        	}
        	.noSelect{
        		opacity: 1;
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

	export default {
		data() {
			return {
				startFlag:false,
				role:0,
				clickFlag:true,
				fullHeightFlag:false,//背景图是否全屏
			}
		},
		created(){
		},
		components:{
		//组件
	},
	methods: {
		//调用方法
        //用户选择身份
        selectRole(type){
        	let _this = this;
        	_this.clickFlag = false;
        	//不能重新选择角色
        	if(_this.role != 0 && _this.role != type){
        		return ;
        	}
        	//直接进入
        	if(_this.role != 0){
        		window.location.href = APIMSG.wxUrl + '/selectWish/'+type;
        		_this.clickFlag = true;
        	}else{
        		let params = {
        			'role':type
        		}
        		//设置用户角色
        		LivePost.setUserRole(params)
        		.then(res => {
        			_this.clickFlag = true;
        			window.location.href = APIMSG.wxUrl + '/selectWish/'+type;
        			// _this.$router.push('/selectWish/'+type);
        			_this.clickFlag = true;
        		})
        		.catch(error => {
        			if(error.data.code===400){
        				window.location.href =APIMSG.weixapi+APIMSG.wxUrl+'/yearData';
        			}
        		});
        	}
        },
        //获取用户角色
        getRole(){
        	let _this = this;
        	let w = document.body.clientWidth;
        	let h = document.body.clientHeight;
        	if(w/h<375/603){
        		_this.fullHeightFlag = true;
        	}
        	LivePost.getUserRole()
        	.then(res => {
        		_this.role = res.data.role;
        	})
        	.catch(error => {
        		if(error.data.code===400){
        			window.location.href =APIMSG.weixapi+APIMSG.wxUrl+'/yearData';
        		}
        	});
        	//0.8秒后开启第三个流星动画
        	setTimeout(() => {
        		_this.startFlag = true;
        	}, 800);
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
		this.getRole();
		this.share();
		this.playAudio();
	}
}
</script>

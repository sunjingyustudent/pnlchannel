<template>
	<div class="selectWish">
		<!-- 背景音乐 -->
		<div class="audio-box">
			<audio id="audio" autoplay="autoplay" loop="loop">
				<source src="../../assets/audio/active.mp3" type="audio/mpeg" />
			</audio>
		</div>
		<!-- 愿望背景图 -->
		<img :src="pageBg" class="p11_bg" :class="{'fullHeight':fullHeightFlag}"/>
		<!-- 老师愿望 -->
		<div class="teacher-wish" v-if="role==1" id="teacher-wish">
			<span class="teacher-wish-span" @click="selectItem(1)">
				<img src="../../assets/images/yearData/p11_selected.png" class="p11_select"/>
				<img src="../../assets/images/yearData/student_pass_all.png" class="teacher-wish-select" />
			</span>
			<span class="teacher-wish-span" @click="selectItem(2)">
				<img src="../../assets/images/yearData/p11_unselected.png" class="p11_select" />
				<img src="../../assets/images/yearData/student_grade_good.png" class="teacher-wish-select" />
			</span>
			<span class="teacher-wish-span" @click="selectItem(3)">
				<img src="../../assets/images/yearData/p11_unselected.png" class="p11_select" />
				<img src="../../assets/images/yearData/family-health.png" class="teacher-wish-select" />
			</span>
			<span class="teacher-wish-span" @click="selectItem(4)">
				<img src="../../assets/images/yearData/p11_unselected.png" class="p11_select" />
				<img src="../../assets/images/yearData/friend-black.png" class="teacher-wish-select" />
			</span>
		</div>
		<div class="parent-wish" v-if="role==2">
			<span class="parent-wish-span" @click="selectItem(1)">
				<img src="../../assets/images/yearData/p12_select.png" class="p12_select" />
				<img src="../../assets/images/yearData/baby_pass.png" class="p12_select-item" />
			</span>
			<span class="parent-wish-span" @click="selectItem(2)">
				<img src="../../assets/images/yearData/p12_unselect.png" class="p12_select" />
				<img src="../../assets/images/yearData/baby_grade_good.png" class="p12_select-item" />
			</span>
			<span class="parent-wish-span" @click="selectItem(3)">
				<img src="../../assets/images/yearData/p12_unselect.png" class="p12_select" />
				<img src="../../assets/images/yearData/friend_white.png" class="p12_select-item" />
			</span>
			<span class="parent-wish-span" @click="selectItem(4)">
				<img src="../../assets/images/yearData/p12_unselect.png" class="p12_select" />
				<img src="../../assets/images/yearData/family_white.png" class="p12_select-item" />
			</span>
		</div>
		<div class="like-wish" v-if="role==3">
			<span class="shortSpan " :class="{'color-bg':colorBg == 1}" @click="selectItem(1)">
				<img src="../../assets/images/yearData/myDayHappy.png" class="like-wish-img"/>
			</span>
			<span class="shortSpan" :class="{'color-bg':colorBg == 2}" @click="selectItem(2)">
				<img src="../../assets/images/yearData/myFat.png" class="like-wish-img"/>
			</span>
			<span class="middSpan" :class="{'color-bg':colorBg == 3}" @click="selectItem(3)">
				<img src="../../assets/images/yearData/friend_white.png" class="like-wish-img"/>
			</span>
			<span class="longSpan" :class="{'color-bg':colorBg == 4}" @click="selectItem(4)">
				<img src="../../assets/images/yearData/family_white.png" class="like-wish-img"/>
			</span>
		</div>
		<!-- 确定按钮 -->
		<img :src="buttonBg" :class="buttonClass" @click="submitWish()"/>
	</div>
</template>
<style lang="less">
	.selectWish{
		width: 100%;
		height: 100%;
		position: relative;
		.audio-box{
			position: absolute;
			top: 0;
			z-index: -1000;
		}
		.p11_bg{
			width: 100%;
			position: absolute;
			top: 0;
		}
		//选项box
		.teacher-wish{
			width: 216/20rem;
			position: relative;
			top: 110/20rem;
			left: 81/20rem;
			.teacher-wish-span{
				position: relative;
				display: block;
				width: 216/20rem;
				padding-top: 16/20rem;
				text-align: center;
				margin-bottom: 16/20rem;
				.p11_select{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
				}
				.teacher-wish-select{
					position: relative;
					height: 1rem;
				}
			}
		}
		.parent-wish{
			width: 195/20rem;
			position: absolute;
			top: 135/20rem;
			left: 97/20rem;
			.parent-wish-span{
				position: relative;
				display: block;
				width: 100%;
				height: 47/20rem;
				margin-bottom: .5rem;
				line-height: 47/20rem;
				text-align: center;
				.p12_select{
					position: absolute;
					width: 100%;
					top: 0;
					left: 0;
				}
				.p12_select-item{
					height: .8rem;
					position: relative;
				}
			}
		}
		.like-wish{
			width: 240/20rem;
			position: absolute;
			top: 162/20rem;
			left: 55/20rem;
			.shortSpan{
				display: block;
				width: 180/20rem;
				height: 30/20rem;
				margin-left: 30/20rem;
				position: relative;
				line-height: 27/20rem;
				text-align: center;
				border:3/20rem solid #fff;
				border-radius: 84/20rem;
				margin-bottom: 24.5/20rem;
			}
			.middSpan{
				display: block;
				width: 210/20rem;
				height: 30/20rem;
				margin-bottom: 24.5/20rem;
				position: relative;
				line-height: 27/20rem;
				text-align: center;
				border:3/20rem solid #fff;
				border-radius: 84/20rem;
				margin-left: 15/20rem;
			}
			.longSpan{
				display: block;
				width: 240/20rem;
				height: 30/20rem;
				margin-bottom: 24.5/20rem;
				position: relative;
				line-height: 27/20rem;
				text-align: center;
				border:3/20rem solid #fff;
				border-radius: 84/20rem;
			}
			.color-bg{
				background-color: #6B9559;
			}

			.like-wish-img{
				height: .8rem;
				position: relative;
			}
		}
		//按钮
		.p11_button{
			display: block;
			width: 133/20rem;
			position: absolute;
			top: 350/20rem;
			left: 121/20rem;
		}
		.p12_button{
			display: block;
			width: 104/20rem;
			position: absolute;
			top: 345/20rem;
			left: 138/20rem;
		}
		.p13_button{
			display: block;
			width: 104/20rem;
			position: absolute;
			top: 380/20rem;
			left: 123/20rem;
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
				role:this.$route.params.type,//获取用户角色
				type:1,
				colorBg:1,
				pageBg:'',
				buttonBg:'',
				buttonClass:'',
				fullHeightFlag:false,
				iphoneX:0,
			}
		},
		created(){

		},
		components:{
		//组件
	},
	methods: {
		//调用方法
		getType(){
			let _this = this;
			let w = document.body.clientWidth;
			let h = document.body.clientHeight;
			if(w/h<375/603){
				_this.iphoneX = 1;
				_this.fullHeightFlag = true;
			}
			_this.role = _this.$route.params.type;	
			if(_this.role == 1){
				_this.pageBg = _this.iphoneX == 0 ? '/static/img/yeardata/p11_teacher_bg.jpg':'/static/img/yeardata/p11_teacher_bg-2.jpg';
				_this.buttonBg = '/static/img/yeardata/p11_button.png';
				_this.buttonClass = 'p11_button';
			} else if (_this.role == 2){
				_this.pageBg = _this.iphoneX == 0 ? '/static/img/yeardata/p12_parent_bg.jpg':'/static/img/yeardata/p12_parent_bg-2.jpg';
				_this.buttonBg = '/static/img/yeardata/p12_button.png';
				_this.buttonClass = 'p12_button';
			} else {
				_this.pageBg = _this.iphoneX == 0 ? '/static/img/yeardata/p13_like_bg.jpg':'/static/img/yeardata/p13_like_bg-2.jpg';
				_this.buttonBg = '/static/img/yeardata/p13_button.png';
				_this.buttonClass = 'p13_button';
			}
		},

		selectItem(type){
			let _this = this;
			_this.type = type;
			if(_this.role == 1){
				var img  = document.getElementsByClassName("p11_select");
			} else if (_this.role == 2){
				var img  = document.getElementsByClassName("p12_select");
			} else {
				_this.colorBg = _this.type;
				return ;
			}
			
			for (var i = 0; i < 4; i++)
			{   
				if(_this.role == 1){
					img[i].src = "/static/img/yeardata/p11_unselected.png";
				}else if(_this.role == 2){
					img[i].src = "/static/img/yeardata/p12_unselect.png";
				}
			}
			if(_this.role == 1){
				img[_this.type -1].src = "/static/img/yeardata/p11_selected.png";
			}else if(_this.role == 2){
				img[_this.type -1].src = "/static/img/yeardata/p12_select.png";
			}
			
		},
		submitWish(){
			let _this = this;
			window.location.href = APIMSG.wxUrl + '/activeShare/'+_this.role + '/' + _this.type;	
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
		this.getType();
		this.share();
		this.playAudio();
	}
}
</script>

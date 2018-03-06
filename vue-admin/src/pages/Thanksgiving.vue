<template>
	<div class="Thanksgiving-box">
		<!-- 活动banner图 -->
		<img src="../assets/images/thinks/symbols-top.png" class="symbols-top">
		<!-- 活动进展及规则 -->
		<div class="rule-box">
			<div class="rule-box-bg">
			</div>
			<div class="rule-title">
				<span class="rule-title-span">当前推荐体验课<span class="class-mun"> {{currentNum}} </span>节</span>
				<span class="rule-button" @click="interRule(0)">活动细则</span>
			</div>
			<div class="rule-body">
				<div class="rule-body-box">
					<span class="body-title">好礼第
						<span class="body-title-num"> 一 </span>重
					</span>
					<img src="../assets/images/thinks/active1.png" class="active1-img">
					<span class="award-info">瓜分10万元现金</span>
					<span class="award-rate">当前已有 <span class="award-rate-num">{{allNum}}</span> 位</span>
					<span class="award-button" v-if="oneFlag==0">领取</span>
					<span class="award-button award-button-light" v-else @click="getAward(1)">领取</span>
				</div>
				<div class="rule-body-box">
					<span class="body-title">好礼第
						<span class="body-title-num"> 二 </span>重
					</span>
					<img src="../assets/images/thinks/active2.png" class="active2-img">
					<span class="award-info">188元现金红包</span>
					<span class="award-rate">当前进度 <span class="award-rate-num">{{currentNum}}</span> /3</span>
					<span class="award-button" v-if="twoFlag==0">领取</span>
					<span class="award-button award-button-light" v-else @click="goMonthActive">领取</span>
				</div>
				<div class="rule-body-box">
					<span class="body-title">好礼第
						<span class="body-title-num"> 三 </span>重
					</span>
					<img src="../assets/images/thinks/active3.png" class="active3-img">
					<span class="award-info">iPhoneX</span>
					<span class="award-rate">当前进度 <span class="award-rate-num">{{currentNum}}</span> /5</span>
					<span class="award-button" v-if="threeFlag==0">领取</span>
					<span class="award-button award-button-light" v-else @click="getAward(3)">领取</span>
				</div>
			</div>
			<div class="choujiang-rule" @click="interRule(1)">
				史上最公平抽奖规则 <img src="../assets/images/thinks/extend.png" class="choujiang-img"> 
			</div>
		</div>
		<!-- 底部logo -->
		<div class="foot-logo">
			<img src="../assets/images/thinks/footlogo.png" class="foot-logo-img">
		</div>
	</div>
</template>
<style lang="less">
	.Thanksgiving-box{
		width: 100%;
		background-image: linear-gradient(-90deg, #A564DE 0%, #5B4FED 100%);
		background-image: -webkit-linear-gradient(-90deg, #A564DE 0%, #5B4FED 100%);
		background-image: -moz-linear-gradient(-90deg, #A564DE 0%, #5B4FED 100%);
		.symbols-top{
			width: 100%;
			display: block;
		}
		.rule-box{
			width: 362/20rem;
			height: 317/20rem;
			margin: .75rem 7/20rem 0rem 7/20rem;
			position: relative;
			.rule-box-bg{
				width: 100%;
				height: 100%;
				background-color: #fff;
				opacity: .32;
				position: absolute;
				top: 0;
				left: 0;
				border-radius: .4rem;
			}
			.rule-title{
				width: 100%;
				height: 55/20rem;
				line-height: 55/20rem;
				font-size: .8rem;
				color: #fff;
				padding-left: 13/20rem;
				position: absolute;
				top: 0;
				.class-mun{
					font-size: 28/20rem;
					color: #00FFFC;

				}
				.rule-button{
					position: absolute;
					width: 68/20rem;
					height: 26/20rem;
					font-size: .6rem;
					background-color: #7052E4;
					line-height: 26/20rem;
					top: 16/20rem;
					right: .3rem;
					text-align: center;
					border-radius: .2rem;
				}
			}
			.rule-body{
				width: 100%;
				height: 210/20rem;
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				padding: 0rem 4/20rem;
				position: absolute;
				top: 55/20rem;
				.rule-body-box{
					height: 100%;
					-webkit-box-flex: 1;
					-webkit-flex: 1;
					flex: 1;
					position: relative;
					margin-right: 4/20rem;
					background-image: linear-gradient(-224deg, #6900FF 0%, #5800FF 100%);
					background-image: -webkit-linear-gradient(-224deg, #6900FF 0%, #5800FF 100%);
					background-image: -moz-linear-gradient(-224deg, #6900FF 0%, #5800FF 100%);
					border-radius: .3rem;
					.body-title{
						width: 100%;
						height: 29/20rem;
						background-color:#7C3EFF;
						display: block;
						border-radius: .3rem .3rem 0rem 0rem;
						color: #fff;
						font-size: .6rem;
						text-align: center;
						line-height: 29/20rem;
						.body-title-num{
							color: #FFD100;
							font-weight: bold;
						}
					}
					.active1-img{
						height: 60/20rem;
						display: block;
						margin: 13/20rem auto;
					}
					.active2-img{
						height: 62/20rem;
						display: block;
						margin: 11/20rem auto;
					}
					.active3-img{
						height: 77/20rem;
						display: block;
						margin: 7/20rem auto;
					}
					.award-info{
						width: 100%;
						display: block;
						height: .8rem;
						font-size: .7rem;
						color: #00FFFC;
						line-height: .8rem;
						text-align:center;
						position: absolute;
						top:116/20rem;
					}
					.award-rate{
						width: 100%;
						display: block;
						height: .8rem;
						font-size: .6rem;
						color: #fff;
						line-height: .8rem;
						text-align:center;
						position: absolute;
						top:138/20rem;
						.award-rate-num{
							color: #00FFFC;
						}
					}
					.award-button{
						width: 90/20rem;
						height: 36/20rem;
						position: absolute;
						top:162/20rem;
						display: block;
						background-color: #DFDFDF;
						color: #A4A4A4;
						font-size: .8rem;
						line-height: 36/20rem;
						text-align: center;
						border-radius: .1rem;
						left: 13/20rem;
					}
					.award-button-light{
						background-image: url('/static/img/button.png');
						background-size: 90/20rem 36/20rem;
						color: #fff;
					}
				}
				.rule-body-box:last-child{
					margin-right: 0rem;
				}
			}
			.choujiang-rule{
				position: absolute;
				bottom: 15/20rem;
				left: 115/20rem;
				width: 132/20rem;
				height: 26/20rem;
				background-color: #7455EC;
				text-align: center;
				color: #fff;
				font-size: .6rem;
				line-height: 26/20rem;
				border-radius: .2rem;
				.choujiang-img{
					width: 10/20rem;
					height: 10/20rem;
					vertical-align: middle;
				}
			}
		}
		.foot-logo{
			width: 100%;
			height: 3rem;
			text-align: center;
			padding: 34/40rem 0rem;
			.foot-logo-img{
				height: 26/20rem;
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
	import { Indicator } from 'mint-ui';
	Vue.use(Indicator);

	export default {
		data() {
			return {
	    	//返回数据
	    	currentNum:0,
	    	allNum:0,
	    	oneFlag:0,
	    	twoFlag:0,
	    	threeFlag:0,
	    }
	},
	created(){
	},
	components:{
		//组件
	},
	methods: {
		//调用方法
		getThanksgivingActive(){
			let _this = this;
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});
			//获取感恩节活动
			LivePost.getThanksgivingActive()
			.then(res => {
				Indicator.close();
				_this.currentNum = res.data.current_num;
				_this.allNum = res.data.all_num;
				_this.oneFlag = res.data.is_can_one_reward;
				_this.twoFlag = res.data.is_can_two_reward;
				_this.threeFlag = res.data.is_can_three_reward;
			})
			.catch(error => {
				Indicator.close();
				if(error.data.code===400){
					window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/Thanksgiving";
				}
			})
		},
		getAward(type){
			var params = {
				"level":type
			};
			LivePost.getThanksgivingAward(params)
			.then(res => {
				wx.closeWindow();
			})
			.catch(error => {
				if(error.data.code===400){
					window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/Thanksgiving";
				}
				if(error.data.code===3011){
					let instance = Toast('您还没有完成该活动');
					setTimeout(() => {
						instance.close();
					}, 2000);
				}
			})


		},
		//去月月奖不停
		goMonthActive(){
			let _this = this;
			_this.$router.push('/MyActive');
		},
		interRule(type){
			let _this = this;
			_this.$router.push('/rule/'+type);
		},
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
				let instance = Toast('加载配置失败，请刷新重新重试');
				setTimeout(() => {
					instance.close();
				}, 2000);
			})
		}
	},
	mounted(){
		this.getThanksgivingActive();
		this.share();
	}
}
</script>

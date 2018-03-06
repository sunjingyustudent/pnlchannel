<template>
	<div class="my-active">
		<!-- 		体验课活动 -->
		<div class="active-new">
			<img src="../assets/images/class-reward-banner.png" alt="" class="active-banner">
			<div class="active-info">
				<span class="active-title">每月邀请{{classBase}}位琴童体验VIP陪练</span>
				<span class="active-rate">当前进度 
					<span class="now-num">{{currentClass}}</span>
					<span class="base-num">/{{classBase}}</span>
				</span>
				<span class="active-money" v-if="classAwardButton==0">完成可获得
					<span class="active-real-money">{{pullStudentMoney}}</span>
					元奖励
				</span>
				<span class="active-money" v-else>
					已领取
					<span class="active-real-money">{{getStudentMoney}}元 </span>红包
				</span>
			</div>
			<div class="reward-button" v-if="classAwardButton==0">
				<span v-if="currentClass>=classBase" @click="getAward(2)">领取奖励</span>
				<span v-else @click="goPullStudent">去完成</span>
			</div>
			<img src="../assets/icon/awarded.png" alt="" class="award-img" v-else>
		</div>
		<!-- 	    微课活动 -->
		<div class="active-new">
			<img src="../assets/images/weike-new-banner.png" alt="" class="active-banner">
			<div class="active-info">
				<span class="active-title">每月通过分享微课邀请{{pullBase}}位新用户关注VIP微课</span>
				<span class="active-rate">当前进度 
					<span class="now-num">{{currentPull}}</span>
					<span class="base-num">/{{pullBase}}</span>
				</span>
				<span class="active-money" v-if="pullNewAwardButton==0">最高抽取 
					<span class="active-real-money">{{pullTeacherMoney}}</span>
					元奖励
				</span>
				<span class="active-money" v-else>
					已领取
					<span class="active-real-money">{{getTeacherMoney}}元 </span>红包
				</span>
			</div>
			<div class="reward-button" v-if="pullNewAwardButton==0">
				<span v-if="currentPull>=pullBase" @click="getAward(1)">领取奖励</span>
				<span v-else @click="goPullTeacher">去完成</span>
			</div>
			<img src="../assets/icon/awarded.png" alt="" class="award-img" v-else>
		</div>
		<!-- 		底部活动说明 -->
		<div class="footer-info">
			<span class="footer-info-title">活动说明</span>
			<span class="footer-pull-new">
				<span class="footer-pull-new-b">体验达人奖</span>
				每月每位用户推荐{{classBase}}位琴童完成VIP陪练体验课,可获得{{pullStudentMoney}}元奖励
			</span>
			<span class="footer-pull-new">
				<span class="footer-pull-new-b">微课拉新奖</span>
				每位用户报名并分享微课，带来{{pullBase}}位新关注老师可以参与红包抽奖一次， 最高领取{{pullTeacherMoney}}元奖励
			</span>
			
			<div class="reward-button">
				<span v-if="monthFlag==1" @click="changeMonth">本月活动</span>
				<span v-else @click="changeMonth">上月活动</span>
			</div>
		</div>
		<!-- 	    抽奖遮罩层 -->
		<div class="award-cover" v-if="awardCover">
			<div class="award-cover-bg">
			</div>
			<div class="award-cover-content">
				<div class="award-bg" :class="{'award-bg-animation':awardButton}">
				</div>
				<div class="award-money" v-show="awardMoneyFlag">
					<span class="">{{awardMoney}}</span><span class="award-money-danwei">元</span>
					<span class="award-money-info">奖励已发送到您的账户</span>
				</div>
				<img src="../assets/images/award-top-bg.png" class="award-top-bg" :class="{'award-animation':awardAnimation}">
				<img src="../assets/images/award-button.png"  class="award-button" :class="{'award-button-animation':awardAnimation}" v-show="awardButton">
				<img src="../assets/images/award-hand.png"  class="award-hand">
			</div>
			<img src="../assets/icon/close.png"  class="award-cover-close" @click="closeCover">
		</div>
	</div>
</template>
<style lang="less">
	.my-active{
		width: 100%;
		padding-top: .3rem;
		background-color: #F4F7F8;
		position: relative;
		.active-new{
			width: 363/20rem;
			height: 230/20rem;
			margin: 0 .3rem .3rem .3rem;
			position: relative;
			.active-banner{
				width: 100%;
				height: 7rem;
				vertical-align: middle;
			}
			.active-info{
				width: 100%;
				height: 4.5rem;
				padding: .5rem;
				background-color: #fff;
				border-radius: 0 0 .2rem .2rem;
				.active-title{
					display: block;
					width: 100%;
					height: .7rem;
					line-height: .7rem;
					font-size: .7rem;
					color: #555555;
					margin-bottom: .6rem;
				}
				.active-rate{
					display: block;
					font-size: .6rem;
					color: #A0A0A0;
					margin-bottom: .5rem;
					.now-num{
						font-size: .7rem;
						color: #ff4646;
					}
					.base-num{
						font-size: .7rem;
						color: #A0A0A0;
					}
				}
				.active-money{
					width: 100%;
					height: .9rem;
					font-size: .6rem;
					color: #A0A0A0;
					.active-real-money{
						font-size: .9rem;
						color: #ff4646;
					}
				}
			}
			.reward-button{
				width: 70/20rem;
				height: 26/20rem;
				text-align: center;
				line-height: 26/20rem;
				position: absolute;
				bottom: .7rem;
				right: .45rem;
				font-size: .6rem;
				color: #fff;
				background-color: #FF4646; 
				border-radius: .2rem;
			}
			.award-img{
				position: absolute;
				width: 2.5rem;
				height: 2.5rem;
				bottom: .7rem;
				right: .45rem;
			}
		}
		.footer-info{
			width: 363/20rem;
			height: 170/20rem;
			margin: 0 .3rem 0 .3rem;
			background-color: #fff;
			border-radius: .2rem;
			padding: .8rem .45rem;
			position: relative;
			.footer-info-title{
				display: block;
				height: .7rem;
				line-height: .7rem;
				color: #555;
				font-size: .75rem;
				margin-bottom: .5rem;
			}
			.footer-pull-new{
				display: block;
				height: 36/20rem;
				font-size: .65rem;
				color: #A0A0A0;
				line-height: .9rem;
				margin-bottom: .5rem;
				.footer-pull-new-b{
					color: #555;
				}
			}
			.reward-button{
				width: 70/20rem;
				height: 26/20rem;
				text-align: center;
				line-height: 26/20rem;
				position: absolute;
				bottom: .7rem;
				right: .45rem;
				font-size: .6rem;
				color: #fff;
				background-color: #FF4646; 
				border-radius: .2rem;
			}
		}
		.award-cover{
			width: 100%;
			height: 100%;
			z-index: 999;
			position: absolute;
			top: 0;
			.award-cover-bg{
				width: 100%;
				height: 100%;
				background-color: #000;
				opacity: .2;
			}
			.award-cover-content{
				width: 15rem;
				height: 20rem;
				position: absolute;
				top: 2rem;
				left: 75/40rem;
				background-image: url("../assets/images/award-bg.png");
				background-size: 100% 100%;
				border-radius: .2rem;
				overflow: hidden;
				.award-money{
					position: absolute;
					top: 7rem;
					width: 100%;
					text-align: center;
					font-size: 3.2rem;
					color: #E45A56;
					.award-money-danwei{
						font-size: 1rem;
					}
					.award-money-info{
						display: block;
						font-size: 1rem;
						text-align: center;
						width: 100%;
						position: absolute;
						top: 4rem;
						color: #E45A56;
					}
				}
				.award-bg{
					width: 100%;
					height: 100%;
					position: absolute;
					top:0;
					background-color: #E45A56;
					opacity: 0;
				}
				.award-top-bg{
					width: 100%;
					height: 10rem;
					position: absolute;
					top:-4rem;
				}
				.award-animation{
					animation:open 1s infinite;
					-moz-animation:open 1s infinite; /* Firefox */
					-webkit-animation:open 1s infinite; /* Safari and Chrome */
					-o-animation:open 1s infinite; /* Opera */
				}
				@keyframes open
				{
					0%{top:0}
					100%{top:-4rem;}
				}

				@-moz-keyframes open /* Firefox */
				{
					0%{top:0}
					100%{top:-4rem;}
				}

				@-webkit-keyframes open /* Safari and Chrome */
				{
					0%{top:0}
					100%{top:-4rem;}
				}

				@-o-keyframes open /* Opera */
				{
					0%{top:0}
					100%{top:-4rem;}
				}
				.award-bg-animation{
					animation:bgcolor 1s infinite;
					-moz-animation:bgcolor 1s infinite; /* Firefox */
					-webkit-animation:bgcolor 1s infinite; /* Safari and Chrome */
					-o-animation:bgcolor 1s infinite; /* Opera */
				}
				@keyframes bgcolor
				{
					0%{opacity: 1;}
					100%{opacity: 0;}
				}

				@-moz-keyframes bgcolor /* Firefox */
				{
					0%{opacity: 1;}
					100%{opacity: 0;}
				}

				@-webkit-keyframes bgcolor /* Safari and Chrome */
				{
					0%{opacity: 1;}
					100%{opacity: 0;}
				}

				@-o-keyframes bgcolor /* Opera */
				{
					0%{opacity: 1;}
					100%{opacity: 0;}
				}
				.award-button{
					width: 2rem;
					height: 2rem;
					position: absolute;
					left: 6.5rem;
					top: 4.5rem;
					opacity: 0;
				}
				.award-button-animation{
					animation:buttonanimation 1s infinite;
					-moz-animation:buttonanimation 1s infinite; /* Firefox */
					-webkit-animation:buttonanimation 1s infinite; /* Safari and Chrome */
					-o-animation:buttonanimation 1s infinite; /* Opera */
				}
				@keyframes buttonanimation
				{
					0%{top:9rem;opacity: 1;}
					100%{top:4.5rem;opacity: 0;}
				}

				@-moz-keyframes buttonanimation /* Firefox */
				{
					0%{top:9rem;opacity: 1;}
					100%{top:4.5rem;opacity: 0;}
				}

				@-webkit-keyframes buttonanimation /* Safari and Chrome */
				{
					0%{top:9rem;opacity: 1;}
					100%{top:4.5rem;opacity: 0;}
				}

				@-o-keyframes buttonanimation /* Opera */
				{
					0%{top:9rem;opacity: 1;}
					100%{top:4.5rem;opacity: 0;}
				}
				.award-hand{
					width: 100%;
					height: 7rem;
					position: absolute;
					bottom: 0;
				}
			}
			.award-cover-close{
				width: 2rem;
				height: 2rem;
				position: absolute;
				top: 25rem;
				left: 335/40rem;
			}
			.award-cover-gif{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
<script>
	import Vue from 'vue';
	import LivePost from '../service/live';
	import { Toast } from 'mint-ui';
	// Vue.use(Toast);
	//加载
	import { Indicator } from 'mint-ui';
	Vue.use(Indicator);

	export default {
		data() {
			return {
	    	//返回数据
	    	//页面数据渲染
	    	pullNewAwardButton:true,//是否可以参加拉老师奖励
	    	classAwardButton:true,//是否可以体验课奖励
	    	pullBase:0,//拉老师基数
	    	currentPull:0,//当前拉老师人数
	    	classBase:0,//体验课活动基数
	    	currentClass:0,//当前拉学生人数
	    	monthFlag:0,//月份表示，0表示当月1表示上个月
	    	pullTeacherMoney:0,//拉老师奖励金额
	    	pullStudentMoney:0,//拉学生奖励金额
	    	getTeacherMoney:0, //获取拉老师金额
	    	getStudentMoney:0, //获取拉学生金额

	    	awardCover:false,//红包遮罩层
	    	awardAnimation:false,//红包动画效果
	    	awardButton:true,//控制红包上面的开关和背景颜色flag
	    	awardMoney:0,//红包金钱
	    	awardMoneyFlag:false,//控制红包奖金div是否出现flag

	    	//点击flag
	    	dianjiFlag:true,//防止多次点击
	    }
	},
	created(){
	},
	components:{
		//组件
	},
	methods: {
		//调用方法
		//获取用户当前活动进度
		getMyActive(){
			let _this = this;
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});

			var params = {
				"monthNum":_this.monthFlag
			}
			LivePost.getMyActive(params).then(res => {
				Indicator.close();
				//拉老师奖励
				_this.pullNewAwardButton = res.data.teacher_task.is_get_reward;//领取标志
				_this.currentPull = res.data.teacher_task.current_num;
				_this.pullBase = res.data.teacher_task.task_num;
				_this.pullTeacherMoney = res.data.teacher_task.task_money;
				_this.getTeacherMoney = res.data.teacher_task.current_money;

				//拉学生奖励
				_this.classAwardButton = res.data.exclass_task.is_get_reward;//领取标志
				_this.currentClass = res.data.exclass_task.current_num;
				_this.classBase = res.data.exclass_task.task_num;
				_this.pullStudentMoney = res.data.exclass_task.task_money;
				_this.getStudentMoney = res.data.exclass_task.current_money;
			})
			.catch(error => {
				Indicator.close();
				if(error.data.code===400){
					window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/myActive";
				}
			})
		},
		changeMonth(){
			let _this = this;
			//切换月份
			(_this.monthFlag == 0) ? _this.monthFlag=1 : _this.monthFlag=0;
			_this.getMyActive();
		},
		//获取奖励
		getAward(type){
			let _this = this;
			_this.dianjiFlag = false;
			_this.awardCover = true;
			_this.awardAnimation = true;

			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});
            //关闭背景颜色和红包信封按钮
            setTimeout(function () {
            	_this.awardButton = false;
            }, 1000);

            var params = {
            	"rewardType":type,
            	"monthNum" : _this.monthFlag
            }
            LivePost.getActiveRedPackage(params).then(res => {
            	setTimeout(function () {
            		Indicator.close();
            		_this.awardAnimation = false;
            		_this.awardMoneyFlag = true;
            		_this.awardButton = false;
            		_this.awardMoney = res.data.money;
            		if(type == 1){
            			_this.pullNewAwardButton = 1;
            			_this.getTeacherMoney = res.data.money;
            		}else{
            			_this.classAwardButton = 1;
            			_this.getStudentMoney = res.data.money;
            		}
            	}, 2000);
            })
            .catch(error => {
            	if(error.data.code===3008){
            		let instance = Toast('您还没有完成该活动任务');
            		setTimeout(() => {
            			instance.close();
            		}, 2000);
            	}
            	if(error.data.code===3007){
            		let instance = Toast('您已领取过该奖励，如有异常，请联系专属客服');
            		setTimeout(() => {
            			instance.close();
            		}, 2000);
            	}
            	if(error.data.code===4003){
            		let instance = Toast('操作异常，请联系专属客服');
            		setTimeout(() => {
            			instance.close();
            		}, 2000);
            	}
            	if(error.data.code===400){
            		window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/myActive";
            	}
            })
        },
		//关闭抽奖遮罩层
		closeCover(){
			let _this = this;
			_this.awardCover = false;
			_this.awardButton = true;
			_this.awardMoneyFlag = false;
			_this.dianjiFlag = true;
			Indicator.close();
		},
		//去完成拉老师活动
		goPullTeacher(){
			let _this = this;
			// _this.$router.push('/recently');
			LivePost.pullTeacher().then(res => {
				wx.closeWindow();
			})
			.catch(error => {
				if(error.data.code===400){
					window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/myActive";
				}
			});
		},
		//去拉学生完成体验课
		goPullStudent(){
			LivePost.getRecommend().then(res => {
				//拉老师奖励
				wx.closeWindow();
			})
			.catch(error => {
				if(error.data.code===400){
					window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/myActive";
				}
			})
		}
	},
	mounted(){
		this.getMyActive();
	}
}
</script>

<template>
	<div class="personal-wrap">
		<div class="personal-head">
			<img :src="userHead" class="user-head">
			<span class="user-name">{{userName}}</span>
			<span class="user-money" v-if="userMoney>0">{{userMoney}}元</span>
			<span class="get-money-button" v-if="userMoney>0" @click="getMyMoney">去提现</span>
		</div>
		<div class="my-grade" @click="goMyGrade">
			<img src="../assets/images/my-grade-icon.png" class="my-grade-icon">
			<span class="my-grade-title">
				我的成绩
			</span>
			<span class="my-grade-tip">查看学生陪练单
			</span>
			<img src="../assets/images/my-grade-extend.png" class="my-grade-extend">
		</div>
		<div class="my-grade-info">
			<div class="grade-info-item">
				<span class="grade-info-title">邀请体验课</span>
				<span class="grade-info-people-num">
					{{inviteExNum}}<span class="unit">人</span>
				</span>
			</div>
			<div class="grade-info-item">
				<span class="grade-info-title">完成体验课</span>
				<span class="grade-info-people-num">
					{{completedExNum}}<span class="unit">人</span>
				</span>
			</div>
			<div class="grade-info-item">
				<span class="grade-info-title">邀请关注</span>
				<span class="grade-info-people-num">
					{{inviteFocusNum}}<span class="unit">人</span>
				</span>
			</div>
		</div>
		<!-- 排行榜标题 -->
		<div class="my-grade ranking-list" v-if="completedExNum >= 1" @click="goRanking">
			<img src="../assets/images/rink.png" class="my-grade-icon">
			<span class="my-grade-title">
				排行榜
			</span>
			<span class="my-grade-tip">查看排行榜
			</span>
			<img src="../assets/images/my-grade-extend.png" class="my-grade-extend">
		</div>
		<!-- 今日小任务标题 -->
		<div class="my-grade">
			<img src="../assets/images/today-tark.png" class="my-grade-icon">
			<span class="my-grade-title">
				今日小任务
			</span>
		</div>
		<!-- 今日进度 -->
		<div class="today-trak-box">
			<div class="today-trak-item">
				<span class="today-trak-rate" :class="{'weikeClass':todayExInvite>=todayExBase}">
					{{todayExInvite}}/{{todayExBase}}
				</span>
				<span class="today-work-top today-work">
					邀请{{todayExBase}}位小琴童预约
				</span>
				<span class="today-work-bottom today-work">
					VIP陪练体验课
				</span>
				<span class="today-trak-button no-finsih" v-if="todayExInvite<todayExBase" @click="recommendStudent">
					去完成
				</span>
				<span class="today-trak-button finished" v-else>
					已完成
				</span>

			</div>
			<div class="today-trak-item">
				<span class="today-trak-rate" :class="{'weikeClass':todayFocus >= todayBase}">
					{{todayFocus}}/{{todayBase}}
				</span>
				<span class="today-work-top today-work">
					邀请{{todayBase}}位好友关注
				</span>
				<span class="today-work-bottom today-work">
					VIP微课
				</span>
				<span class="today-trak-button no-finsih" v-if="todayFocus<todayBase" @click="recommendTeacher">
					去完成
				</span>
				<span class="today-trak-button finished" v-else>
					已完成
				</span>
			</div>
		</div>
		<!-- 本月小目标 -->
		<div class="my-grade">
			<img src="../assets/images/month-tark.png" class="my-grade-icon">
			<span class="my-grade-title">
				本月小目标
			</span>
		</div>
		<!-- 本月进度 -->
		<div class="month-tark-box">
			<div class="month-tark-item">
				<span class="month-tark-rate" :class="{'finished-rate':monthExInvite>=monthExBase}">
					{{monthExInvite}}/{{monthExBase}}
				</span>
				<span class="month-tark-word">
					邀请{{monthExBase}}位小琴童完成
				</span>
				<span class="month-tark-word">
					VIP陪练体验课
				</span>
				<span class="month-tark-button button-finished" v-if="monthExInvite>=monthExBase" >已完成
				</span>
				<span class="month-tark-button button-no-finish" v-else>
					完成后获得<span class="numFont">188</span>元奖励
				</span>
			</div>
			<div class="month-tark-item">
				<span class="month-tark-rate" :class="{'finished-rate':monthFocus>=monthBase}">
					{{monthFocus}}/{{monthBase}}
				</span>
				<span class="month-tark-word">
					邀请{{monthBase}}位好友关注
				</span>
				<span class="month-tark-word">
					VIP微课
				</span>
				<span class="month-tark-button button-finished"v-if="monthFocus>=monthBase" >已完成
				</span>
				<span class="month-tark-button button-no-finish" v-else>
					最高抽取<span class="numFont">58</span>元奖励
				</span>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	.personal-wrap{
		width: 100%;
		height: 100%;
		background-color: #fff;
		.personal-head{
			position: relative;
			border-bottom: 8/20rem solid #eee;
			width: 100%;
			height: 131/20rem;
			background-image: linear-gradient(-225deg, #644393 0%, #524589 100%);
			background-image: -webkit-linear-gradient(-225deg, #644393 0%, #524589 100%);
			background-image: -moz-linear-gradient(-225deg, #644393 0%, #524589 100%);
			.user-head{
				width: 55/20rem;
				height: 55/20rem;
				border-radius: 100%;
				border: 2/20rem solid rgba(255,255,255,0.23);
				position: absolute;
				top: 34/20rem;
				left: 12/20rem;
			}
			.user-name{
				display: inline-block;
				width: 162/20rem;
				height: 21/20rem;
				line-height: 21/20rem;
				position: absolute;
				top: 50/20rem;
				left: 80/20rem;
				color: #fff;
				font-size: 15/20rem;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
			}
			.user-money{
				display: inline-block;
				width: 5rem;
				height: 29.5/20rem;
				line-height: 29.5/20rem;
				text-align: right;
				font-size: 21/20rem;
				color: #fff;
				position: absolute;
				top: 29/20rem;
				right: 13/20rem;
			}
			.get-money-button{
				display: block;
				width: 69/20rem;
				height: 28/20rem;
				line-height: 28/20rem;
				text-align: center;
				font-size: .7rem;
				color: #fff;
				border: 1px solid #FFFFFF;
				border-radius: 6/20rem;
				position: absolute;
				top: 67.5/20rem;
				right: .7rem;
			}
		}
		.my-grade{
			position: relative;
			width: 100%;
			height: 45.5/20rem;
			background-color: #fff;
			border-bottom: 0.5px solid #eee;
			.my-grade-icon{
				position: absolute;
				width: 25/20rem;
				height: 24/20rem;
				top: .5rem;
				left: 9/20rem;
			}
			.my-grade-title{
				width: 170/20rem;
				height: 22.5/20rem;
				line-height: 22.5/20rem;
				position: absolute;
				top: 11/20rem;
				left: 34/20rem;
				font-size: .8rem;
				color: #4A4A4A;
				letter-spacing: -1.57px;
			}
			.my-grade-tip{
				display: inline-block;
				position: absolute;
				width: 90/20rem;
				height: 14/20rem;
				line-height: 14/20rem;
				top: 15.5/20rem;
				right: 26/20rem;
				text-align: right;
				font-size: 12/20rem;
				color: #9B9B9B;
				letter-spacing: -1.18px;
			}
			.my-grade-extend{
				position: absolute;
				width: 7.5/20rem;
				height: 14/20rem;
				top: 15.5/20rem;
				right: 13.5/20rem;
			}
		}
		.ranking-list{
			height: 52.5/20rem;
			border-bottom: 8/20rem solid #eee;
		}
		.my-grade-info{
			width: 100%;
			height: 113/20rem;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			border-bottom: 8/20rem solid #eee;
			.grade-info-item{
				height: 43/20rem;
				position: relative;
				top: 31/20rem;
				-webkit-box-flex: 1;
				-webkit-flex: 1;
				flex: 1;
				border-right: 1.5px solid #eee;
				.grade-info-title{
					display: inline-block;
					width: 100%;
					height: 21/20rem;
					position: relative;
					top: -10/20rem;
					font-size: 15/20rem;
					color: #9B9B9B;
					text-align: center;
				}
				.grade-info-people-num{
					display: inline-block;
					width: 100%;
					height: 26/20rem;
					position: absolute;
					bottom: 0rem;
					text-align: center;
					font-size: 26/20rem;
					color: #4A4A4A;
					.unit{
						color: #999;
						font-size: .5rem;
					}
				}
			}
			.grade-info-item:last-child{
				border-right: none; 
			}
		}
		.today-trak-box{
			width: 100%;
			height: 180/20rem;
			padding: 17.5/20rem .7rem;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			border-bottom: 8/20rem solid #eee;
			.today-trak-item{
				-webkit-box-flex: 1;
				-webkit-flex: 1;
				flex: 1;
				height: 100%;
				margin-right: 16.5/20rem;
				border: 1px solid #E0E0E0;
				border-radius: .8rem;
				position: relative;
				.today-trak-rate{
					position: relative;
					width: 100%;
					height: 21/20rem;
					top: 18/20rem;
					line-height: 21/20rem;
					text-align: center;
					display: inline-block;
					font-size: 21/20rem;
				}
				.weikeClass{
					color: #42C579;
				}
				.today-work{
					display: inline-block;
					position: absolute;
					width: 118/20rem;
					height: 16/20rem;
					line-height: 16/20rem;
					font-size: 13/20rem;
					text-align: center;
					color: #9B9B9B;
				}
				.today-work-top{
					top: 46/20rem;
					left: 23.5/20rem;
				}
				.today-work-bottom{
					top: 62/20rem;
					left: 23.5/20rem;
				}
				.today-trak-button{
					display: inline-block;
					width: 110/20rem;
					height: 31/20rem;
					line-height: 31/20rem;
					text-align: center;
					position: absolute;
					top: 89/20rem;
					left: 27.5/20rem;
					font-size: .7rem;
					border-radius: 100/20rem;
				}
				.no-finsih{
					color: #fff;
					border: 1px solid #FFBC00;
					background-color: #FFBC00;
				}
				.finished{
					color: #BEBEBE;
					border: 1px solid #BEBEBE;
					border-radius: 100/20rem;
				}
			}
			.today-trak-item:last-child{
				margin-right: 0;
			}
		}
		.month-tark-box{
			width: 100%;
			height: 161/20rem;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			padding: 17.5/20rem .7rem;
			.month-tark-item{
				-webkit-box-flex: 1;
				-webkit-flex: 1;
				flex: 1;
				height: 100%;
				margin-right: 16.5/20rem;
				border: 1px solid #E0E0E0;
				border-radius: .8rem;
				padding-top: 18/20rem;
				position: relative;
				.month-tark-rate{
					display: inline-block;
					width: 100%;
					height: 21/20rem;
					line-height: 21/20rem;
					text-align: center;
					font-size: 21/20rem;
					margin-bottom: 12/20rem;
				}
				.finished-rate{
					color: #42C579;
				}
				.month-tark-word{
					display: block;
					width: 100%;
					height: 16/20rem;
					text-align: center;
					line-height: 16/20rem;
					font-size: 13/20rem;
					color: #9B9B9B;
				}
				.month-tark-button{
					display: block;
					width:90%;
					height: 32/20rem;
					position: absolute;
					bottom: 0;
					left: 5%;
					text-align: center;
					line-height: 32/20rem;
					font-size: .65rem;
					border-top: 0.5px solid #EBEBEB;
					color: #9B9B9B;
				}
				.numFont{
					font-size: 16/20rem;
				}
				.button-finished{
					color: #42C579;
				}
				.button-no-finish{
					color: #524589;
				}
			}
			.month-tark-item:last-child{
				margin-right: 0;
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

	export default {
		data() {
			return {
	    		//返回数据
			    userHead:'',//用户头像
				userName:'',//用户昵称
				userMoney:'',//用户提现金额
				inviteExNum:0,//邀请体验课人数
				completedExNum:0,//完成体验课人数
				inviteFocusNum:0,//邀请关注人数

				todayExBase:0,//今日小任务体验课基数
				todayExInvite:0,//今日小任务邀请数
				todayBase:0,//今日邀请老师基数
				todayFocus:0,//今日邀请老师完成数

                monthExBase:0,//每月小任务体验课基数
                monthExInvite:0,//每月小任务邀请数
                monthBase:0,//每月邀请老师基数
                monthFocus:0,//每月邀请老师完成数
            }
        },
        created(){
        	this.getPersonal();
        },
        components:{
			//组件
		},
		methods: {
			//调用方法
			getPersonal(){
				let _this = this;
				LivePost.personal()
				.then(res => {
					_this.userHead = res.data.head;
					_this.userName = res.data.name;
					_this.userMoney = res.data.all_money;

					let myTask = res.data.my_task_info;
					_this.inviteExNum = myTask.ex_num;
					_this.completedExNum = myTask.ex_finish_num;
					_this.inviteFocusNum = myTask.recommend_num;

					let today = res.data.day_task_info;
					_this.todayExInvite = today.task_ex_num;
					_this.todayExBase = today.task_ex_set_num;
					_this.todayFocus = today.task_teacher_num;
					_this.todayBase = today.task_teacher_set_num;
					
					let month = res.data.month_target_info;
					_this.monthExInvite = month.task_ex_num;
					_this.monthExBase = month.task_ex_set_num;
					_this.monthFocus = month.task_teacher_num;
					_this.monthBase = month.task_teacher_set_num;

				})
				.catch(error => {
					if(error.data.code===400){
						window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/personal";
					}
				})
			},
			goMyGrade(){
				let _this = this;
				_this.$router.push('/myStudent');
			},
			//推荐学生
			recommendStudent(){
				LivePost.getRecommend().then(res => {
					wx.closeWindow();
				})
				.catch(error => {
					if(error.data.code===400){
						window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/personal";
					}
				});
			},
			//推荐老师
			recommendTeacher(){
				LivePost.pullTeacher().then(res => {
					wx.closeWindow();
				})
				.catch(error => {
					if(error.data.code===400){
						window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/personal";
					}
				});
			},
			//立即提现
			getMyMoney(){
				let _this = this;
				_this.$router.push('/myReward');
			},
			//去排行榜页面
			goRanking(){
				let _this = this;
				window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/ranking";
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
			this.share();
		}
	}
</script>
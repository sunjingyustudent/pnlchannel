<template>
	<div class="live-show">
		<!-- 直播详情板块 -->
		<div v-show="classExit&&!interClassFlag">
			<div class="class-banner">
				<img :src="classImg" class="class-banner-img">
			</div>
			<div class="class-title">
				{{classTitle}}
			</div>
			<div class="class-info" @click=lookRenqi(classid)>
				<span class="class-info-span">
					{{classTime}}
				</span>
				<img src="../assets/icon/fire.png" alt="" class="class-num-icon">
				<span class="class-num-span">{{shareCounts}}人气</span>
				<span v-for="(item,index) in HeadList">
					<img :src="item.head" alt="" class="people-icon">
				</span>
				<img src="../assets/icon/inter.png" alt="" class="inter-icon">
			</div>
			<div class="class-content">
				<img :src="content" alt="" class="class-content-img">
			</div>
			<div class="class-footer" @click="bookClass">
				<a href="javascript:;" class="class-footer-a" v-if="is_book==0">
					{{buttonTitle}}
				</a>
				<a href="javascript:;" class="class-footer-a" v-else-if="inter==1">
					进入课程
				</a>
				<a href="javascript:;" class="class-footer-a" v-else>
					课程开始前十五分钟开启
				</a>
			</div>
			<!-- 预约提醒遮罩层 -->
			<div class="book-cover-box" v-show="booCover" @click=hiddenCover()>
				<div class="book-cover">
				</div>
				<img src="../assets/images/share-book.png" alt="" class="book-cover-img">
			</div>
			<!-- 预约成功遮罩层 -->
			<div class="book-success-box" v-show="bookSuccess" @click=hiddenBook()>
				<div class="book-success-cover">
				</div>
				<div class="book-success-button-box" > 
					<img src="../assets/icon/x.png" alt="" class="book-success-x">
					<div class="book-success-top">
						<img src="../assets/icon/ic-success.png" alt="" class="book-success-icon">
						<span class="book-success-span">
							分享成功
						</span>
					</div>
					<div class="book-success-bottm">
						确认
					</div>
				</div>
			</div>
		</div>
		<!-- 课程已下架 -->
		<class-down v-show="!classExit"></class-down>
		<inter-class v-show="interClassFlag"></inter-class>
	</div>
</template>
<style lang="less">
	.live-show{
		width: 100%;
		position: relative;
		.book-cover-box{
			width: 100%;
			height: 100%;
			z-index: 999;
			position: absolute;
			top: 0;	
			.book-cover{
				width: 100%;
				height: 100%;
				background-color: #000;
				opacity: .5;
			}
			.book-cover-img{
				position: fixed;
				top: 0;	
				right: 0;
				width: 164/20rem;
				height: 154/20rem;
			}
		}
		.book-success-box{
			width: 100%;
			height: 100%;
			z-index: 999;
			position: fixed;
			top: 0;	
			.book-success-cover{
				width: 100%;
				height: 100%;
				background-color: #000;
				opacity: .5;
			}
			.book-success-button-box{
				position: absolute;
				width: 240/20rem;
				height: 140/20rem;
				background-color: #fff;
				top: 180/20rem;
				left: 68/20rem;
				.book-success-x{
					width: 1rem;
					height: 1rem;
					position: absolute;
					top: .75rem;
					right: .75rem;
				}
				.book-success-top{
					height: 30/20rem;
					position: absolute;
					top: 25/20rem;
					left: 55/20rem;
					text-align: center;
					line-height: 30/20rem;
					font-size: 17/20rem;
					.book-success-icon{
						width: 30/20rem;
						height: 30/20rem;
						margin-right: .5rem;
						display: inline-block;
					}
					.book-success-span{
						width: 100/20rem;
						height: 30/20rem;
						line-height: 30/20rem;
						display: inline-block;
						position: absolute;
						top: 0;
						left: 2rem;
					}
				}
				.book-success-bottm{
					width: 90/20rem;
					height: 1.5rem;
					position: absolute;
					top: 4rem;
					left: 75/20rem;
					text-align: center;
					border:1px solid #ff4646;
					border-radius: .1rem;
					font-size: 15/20rem;
					color: #ff4646;
					line-height: 1.5rem;
				}
			}
		}
		.class-banner{
			width: 100%;
			.class-banner-img{
				width: 100%;
			}
		}
		.class-title{
			width: 345/20rem;
			height: 72/20rem;
			margin: .5rem .75rem 0rem .75rem;
			border-bottom: 1px solid #E5E5E5;
		}
		.class-info{
			width: 375/20rem;
			height: 39/20rem;
			padding:0 15/20rem;
			line-height: 39/20rem;
			color: #8E8E8E;
			position: relative;
			.class-info-span{
				line-height: 39/20rem;
				width: 121/20rem;
				height: 39/20rem;
				padding: 0px 10px 0px 0px;
				border-right: 0.5px solid #979797;
				font-size: .6rem;
			}
			.class-num-icon{
				width: 12/20rem;
				height: 12/20rem;
				vertical-align: middle;
				margin-left: .5rem;
				margin-right: .25rem;
			}
			.class-num-span{
				line-height: 39/20rem;
				width: 51/20rem;
				height: 39/20rem;
				font-size: .6rem;
				margin-right: .25rem;
			}
			.people-icon{
				width: 1rem;
				height: 1rem;
				vertical-align: middle;
				margin-right: .5rem;
				border-radius: 100rem;
			}
			.inter-icon{
				width: 6/20rem;
				height: 12/20rem;
				vertical-align: middle;
				position: absolute;
				right: 15/20rem;
				top: 12.5/20rem;
			}
		}
		.class-content{
			width: 100%;
			border-top: 5px solid #efefef;
			padding-bottom: 3rem;
			.class-content-img{
				width: 100%;
			}
		}
		.class-footer{
			width: 375/20rem;
			height: 3rem;
			padding:.5rem .75rem;
			text-align: center;
			line-height: 2rem;
			position: fixed;
			z-index: 999;
			bottom: 0;
			background-color: #fff;
			.class-footer-a{
				width: 100%;
				height: 100%;
				display: block;
				background-color: #ff4f4d;
				color: #fff;
				border-radius: 4/20rem;
			}
		}
	}
</style>
<script>
	import Vue from 'vue';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import LivePost from '../service/live';
	import Env from '../api/env';
	import {wxShare} from '../util/wxapi';
	import classDown from '../components/classDown';
	import interClass from '../components/interClass';


	export default {
		data() {
			return {
	    	//返回数据
	    	classImg:'',//课程banner图
	    	classTitle:'',//课程标题
	    	classTime:'2017-01-01',//开课时间
	    	shareCounts:0,//分享人数
	    	content:'',//课程内容
	    	is_book:0,//用户是否预约
	    	classid:0,//课程id
	    	booCover:false,//预约遮罩层
	    	bookSuccess:false,//预约成功小弹窗
	    	HeadList:[],//头像列表
	    	head:'',//用户头像，分享 的时候用
	    	openid:'',//用户openid，分享的时候用
	    	inter:0,//用户是否能进入荔枝微课
	    	url:'',//荔枝微课地址
	    	classExit:true,//课程是否存在标志
	    	isBack:0,//是否是回顾课
	    	type: 0,//进入直播来源详情
	    	fromId: 0,//来源用户id
	    	interClassFlag:false,//进入荔枝微课前的跳转页falg
	    	buttonTitle:'立即预约直播课程',//预约提示button
	    }
	},
	created(){
		
	},
	components:{
		//组件
		classDown,
		interClass
	},
	methods: {
		//调用方法
		//获取直播详情
		getClassInfo(){
			let _this =this;
			_this.classid = _this.$route.params.id;

			let params ={
				classid:_this.classid,
				type:_this.type,
				fromId:_this.fromId
			}
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});
			LivePost.getClassShow(params).then(res => {
				
				if(res.code===200){
					Indicator.close();
				}
				if(_this.type == 7 && res.data.courseinfo.inter == 1){
					this.interClass();
				}

				_this.isBack = res.data.courseinfo.is_back;
				_this.buttonTitle = _this.isBack==0?'立即预约直播课程':'立即报名回顾课程';
				_this.classImg=res.data.courseinfo.banner_img;
				_this.classTitle=res.data.courseinfo.title;
				_this.classTime=res.data.courseinfo.class_time;
				_this.shareCounts=res.data.share_count;
				_this.content=res.data.courseinfo.content;
				_this.HeadList=res.data.shareinfo;
				_this.head = res.data.userinfo.head;
				_this.openid = res.data.userinfo.openid;
				_this.is_book = res.data.is_book;
				_this.inter = res.data.courseinfo.inter;
				_this.url = res.data.courseinfo.url;

				_this.share();
			})
			.catch(error => {
				Indicator.close();
				if(error.data.code===400){
					window.location.href = APIMSG.weixapi+APIMSG.wxUrl+"/liveshow/"+_this.classid;
				}
				//课程不存在或已下架
				if(error.data.code===3002){
					_this.classExit = false;
				}
			})	
		},
		//进入荔枝微课
		bookClass(){
			let _this =this;
			if(_this.is_book == 0){
				_this.booCover = true;
			}else if(_this.inter==0){
				alert("亲~开课十五分钟前才能进入课程呦~");
			}else{
				//进入荔枝微课
				_this.interClass();
			}
		},
		interClass(){
			let _this = this;
			_this.interClassFlag = true;

			let params ={
				classid:_this.classid,
				type: parseInt(_this.type) + 1,
				fromId:_this.fromId
			}
			//添加用户统计
			LivePost.addStatistics(params).then(res => {
				window.location.href = _this.url;
				_this.interClassFlag = false;
			})
			.catch(error => {
				if(error.data.code===400){
					window.location.href = APIMSG.weixapi+APIMSG.wxUrl+"/liveshow/"+_this.classid;
				}else{
					window.location.href = _this.url;
					_this.interClassFlag = false;
				}
			});
		},
		urlCut(){
			let _this = this;
			_this.type = _this.GetQueryString("type")||0;
			_this.fromId = _this.GetQueryString("fromId")||0;
			let params ={
				classid:_this.$route.params.id,
				type:_this.type,
				fromId:_this.fromId,
			}

			if(_this.type == 7){
				let type7 = sessionStorage.getItem("StatisticsType7") || 0;
				console.log("type7:" + type7);
				let newType7 = type7 + 1;
				if(type7 == 0){
					//添加用户统计
					LivePost.addStatistics(params).then(res => {
					})
					.catch(error => {
					});
					sessionStorage.setItem("StatisticsType7",newType7);
				} else {
					sessionStorage.setItem("StatisticsType7",newType7);
				}
			}
			if(_this.type == 9){
				let type9 = sessionStorage.getItem("StatisticsType9") || 0;
				console.log("type9:" + type9);
				let newType9 = type9 + 1;
				if(type9 == 0){
					//添加用户统计
					LivePost.addStatistics(params).then(res => {
					})
					.catch(error => {
					});
					sessionStorage.setItem("StatisticsType9",newType9);
				} else {
					sessionStorage.setItem("StatisticsType9",newType9);
				}
			}
			if(_this.type == 11){
				let type11 = sessionStorage.getItem("StatisticsType11") || 0;
				console.log("type11:" + type11);
				let newType11 = type11 + 1;
				if(type11 == 0){
					//添加用户统计
					LivePost.addStatistics(params).then(res => {
					})
					.catch(error => {
					});
					sessionStorage.setItem("StatisticsType11",newType11);
				} else {
					sessionStorage.setItem("StatisticsType11",newType11);
				}
			}
		},
		GetQueryString(name)
		{
			var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if(r!=null)return  unescape(r[2]); return null;
		},
		//隐藏预约遮盖层
		hiddenCover(){
			let _this =this;
			_this.booCover = false;
		},
		//隐藏预约成功层，并刷新界面
		hiddenBook(){
			let _this =this;
			_this.bookSuccess = false;

			let classid = _this.$route.params.id;
			window.location.href = window.location.href;
		},
		//查看人气
		lookRenqi(classid){
			let _this =this;
			_this.$router.push('/renqi/'+classid);
		},
		//分享到朋友圈
		share(){
			let _this =this;
			var params = {
				"url":window.location.href
			};
			var shareParams = {
				title : '我已预约《' +_this.classTitle + '》微课，免费听干货！',
				desc: "",
				link: APIMSG.wxUrl+"/sharePage/"+ _this.classid+'/'+_this.openid,
				imgUrl: _this.head,
				jsApiList:['hideMenuItems','onMenuShareTimeline']
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
					wx.hideMenuItems({
						menuList: [
						'menuItem:share:qq',
						'menuItem:share:weiboApp',
						'menuItem:share:QZone',
						'menuItem:share:appMessage',
						]
					});

				    //分享给朋友圈
				    wx.onMenuShareTimeline({
				    	title: shareParams.title||Env.share.defaultTitle,
				    	desc: shareParams.desc||Env.share.defaultDesc,
				    	link: shareParams.link||Env.share.defaultUrl,
				    	imgUrl: shareParams.imgUrl||Env.share.defaultImg,
				    	success: function () {
				            //用户确认分享后执行的回调函数
				            let params ={
				            	classid : _this.$route.params.id
				            }
							//添加分享记录()
							LivePost.addShareRecord(params).then(res => {
								//弹出预约成功
								_this.bookSuccess = true;	
							})
							.catch(error => {
								if(error.data.code===400){
									window.location.href = APIMSG.weixapi+APIMSG.wxUrl+"/liveshow/"+_this.classid;
								}
								//重复预约
								if(error.data.code===3006){
									_this.bookSuccess = true;
								}
							})
						},
						cancel: function () {
					            //用户取消分享后执行的回调函数
					        }
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
		this.urlCut();
		this.getClassInfo();
	}
}
</script>

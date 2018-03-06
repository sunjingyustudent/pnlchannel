<template>
	<div class="student-detail" id="student-detail">
		<!-- 头部用户信息 -->
		<div class="student-info" id="student-info">
			<img :src="studentHead" class="student-info-head">
			<div class="student-info-name">
				<div class="student-name">
					<img src="../assets/icon/studentname.png" class="student-name-icon">
					<span class="student-name-key">学生姓名</span>
					<span class="student-name-value">{{studentName}}</span>
				</div>
				<div class="student-name">
					<img src="../assets/icon/wechat.png" class="student-name-icon">
					<span class="student-name-key">微信名称</span>
					<span class="student-name-value">{{wechatName}}</span>
				</div>
			</div>
		</div>
		<!-- 学生课程列表 -->
		<div class="student-class" id="student-class">
			<div class="list-title">
				<span class="list-title-span">课后陪练单</span>
				<span class="list-title-span">已完成<span class="class-num"> {{counts}} </span>节</span>
			</div>
			<div class="student-class-list">
				<ul v-infinite-scroll="loadMore">
					<li v-for="(item,index) in classList">
						<div class="list-item" @click="interClassInfo(item)">
							<span class="class-time">
								{{item.time_class}}
							</span>
							<span class="class-type">
								{{item.name}}
							</span>
							<img src="../assets/icon/extend.png" class="class-extend">
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 底部添加意见反馈记录按钮 -->
		<div class="feed-back" @click="showFeedBack" id="feed-back">
			<a href="javascript:;" class="feed-back-a">
				填写学生情况反馈
			</a>
		</div>
		<!-- 意见反馈遮罩层 -->
		<div class="feed-back-cover" v-show="feedBackFlag">
			<div class="feed-back-cover-bg" @click="hiddenFeedBack"></div>
			<div class="feed-box">
				<div class="feed-box-title">
					<span class="feed-box-title-span">填写反馈</span>
				</div>
				<div class="feed-box-text">
					<textarea class="feed-box-textarea" placeholder="请填写意见反馈" v-model="content">
					</textarea>
				</div>
				<span>
					<a href="javascript:;" class="feed-submit" @click="addFeedBack">提交</a>
				</span>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	.student-detail{
		width: 100%;
		position: relative;
		//头部用户信息
		.student-info{
			width: 100%;
			padding: .5rem .75rem;
			height: 70/20rem;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			border-bottom: 5px solid #E5E5E5;
			.student-info-head{
				width: 45/20rem;
				height: 45/20rem;
				border-radius: 65/40rem;
			}
			.student-info-name{
				-webkit-box-flex: 1;
				-webkit-flex: 1;
				flex: 1;
				height: 45/20rem;
				padding-left: .75rem;
				.student-name{
					width: 100%;
					height: 45/40rem;
					line-height: 45/40rem;
					.student-name-icon{
						width: 1rem;
						height: 1rem;
						vertical-align: middle;
					}
					.student-name-key{
						font-size: 13/20rem;
						color: #5F5F5F;
						margin-right: .75rem;
					}
					.student-name-value{
						font-size: 15/20rem;
						color: #212121;
					}
				}
			}
		}
		//学生课程列表
		.student-class{
			.list-title{
				width: 100%;
				height: 35/20rem;
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				border-bottom: 0.5px solid #D7D7D7;
				.list-title-span{
					display: inline-block;
					-webkit-box-flex: 1;
					-webkit-flex: 1;
					flex: 1;
					height: 35/20rem;
					line-height: 35/20rem;
					font-size: .75rem;
					color: #212121;
					text-align: center;
					.class-num{
						color: #ff4646;
					}
				}
			}
			.student-class-list{
				padding-bottom: 3rem;
				.list-item{
					position: relative;
					width: 325/20rem;
					height: 44/20rem;
					margin: 0 23/20rem 0 22/20rem;
					line-height: 44/20rem;
					border-bottom: 0.5px solid #D7D7D7;
					display: -webkit-box;
					display: -webkit-flex;
					display: flex;
					font-size: .7rem;
					color: #323232;
					text-align: center;
					.class-time{
						padding-left: 5px;
						width: 325/40rem;
						height: 44/20rem;
					}
					.class-type{
						-webkit-box-flex: 1;
						-webkit-flex: 1;
						flex: 1;
					}
					.class-extend{
						position: absolute;
						width: 6/20rem;
						height: .5rem;
						right: 0;
						top: 34/40rem;
					}
				}
			}
		}
		//底部添加反馈按钮
		.feed-back{
			width: 375/20rem;
			height: 3rem;
			position: fixed;
			bottom: 0;
			border-top: 0.5px solid #D7D7D7;
			background-color: #fff;
			.feed-back-a{
				display: block;
				width: 17rem;
				height: 2rem;
				margin: .5rem 35/40rem;
				text-align: center;
				background-color: #ff4646; 
				line-height: 2rem;
				color: #fff;
				border-radius: .2rem;
				font-size: .8rem;
			}
		}
		//反馈遮罩层
		.feed-back-cover{
			position:absolute;
			width: 100%;
			height: 100%;
			top: 0;
			z-index: 999;
			.feed-back-cover-bg{
				position:absolute;
				width: 100%;
				height: 100%;
				top: 0;
				background-color: #000;
				opacity: .3;
			}
			.feed-box{
				position: fixed;
				bottom: 0;
				width: 375/20rem;
				height: 15rem;
				background-color: #fff;
				.feed-box-title{
					width: 100%;
					height: 34/20rem;
					border-bottom: 1px solid #d7d7d7;
					line-height: 34/20rem;
					padding-left: .75rem;
					margin-bottom: 9/20rem;
					.feed-box-title-span{
						font-size: .7rem;
						padding-left: .25rem;
						border-left: 2px solid #ff4747;
					}
				}
				.feed-box-text{
					width: 345/20rem;
					height: 10rem;
					margin: 0 auto;
					border:0.5px solid #D7D7D7;
					.feed-box-textarea{
						width: 100%;
						height: 100%;
						line-height: 21/20rem;
						letter-spacing: 2px;
						padding:2px;
					}
				}
				.feed-submit{
					width: 345/20rem;
					height: 2rem;
					margin: .25rem auto;
					background-color: #ff4747;
					display: block;
					text-align: center;
					line-height: 2rem;
					color: #fff;
					border-radius: .2rem;
				}
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
	import { InfiniteScroll } from 'mint-ui';
	Vue.use(InfiniteScroll);
	import Env from '../api/env';

	let loadingFlag = true;
	export default {
		data() {
			return {
	    	//返回数据
	    	studentHead:'',
	    	studentName:'',
	    	wechatName:'',
	    	classList:[],
	    	feedBackFlag:false,
	    	studentId:this.$route.params.id || 0,
	    	curPage:1,
	    	pageSize:15,
	    	counts:0,
	    	content:''
	    }
	},
	created(){
		this.curPage = 1;
		loadingFlag = true;
	},
	components:{
		//组件
	},
	methods: {
		//调用方法
		//获取学生陪练数据
		loadMore(){
			let _this =this;
			_this.loading = loadingFlag;
			if(loadingFlag){
				_this.getStudentDetail();
				_this.loading = false;
				loadingFlag =false;
			}
		},
		getStudentDetail(){
			let _this = this;
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});

			let params ={
				studentid:_this.studentId,
				curPage:_this.curPage,
				pageSize:_this.pageSize
			}
			
			//获取学生陪练情况
			LivePost.getStudentClassList(params).then(res => {
				loadingFlag =true;
				_this.loading = true;
				Indicator.close();
				_this.curPage +=1;
				_this.classList = _this.classList.concat(res.data.classinfo);
				_this.studentHead = res.data.studentinfo.head || Env.link.index+"/static/img/moren.png";
				_this.studentName = res.data.studentinfo.nick || '未绑定';
				_this.wechatName = res.data.studentinfo.name || '未绑定';
				_this.counts = res.data.page.totalRow;
			})
			.catch(error => {
				Indicator.close();
				//授权
				if(error.data.code===400){
					window.location.href = APIMSG.weixapi+APIMSG.wxUrl+"/studentDetail";
				}
				//没有数据了
				if(error.data.code===3999){
					_this.curPage -=1;
					let instance = Toast('没有数据了');
					setTimeout(() => {
						instance.close();
					}, 2000);
				}
			});
		},
		//显示添加反馈遮罩层
		showFeedBack(){
			let _this = this;
			_this.feedBackFlag = true;
			loadingFlag = false;
		},
		//隐藏反馈遮罩层
		hiddenFeedBack(){
			let _this = this;
			_this.feedBackFlag = false;
			loadingFlag = true;
		},
		//添加意见反馈
		addFeedBack(){
			let _this = this;
			if(_this.content == ""){
				let instance = Toast('反馈意见不能为空');
				setTimeout(() => {
					instance.close();
				}, 2000);
				return false;
			}
			Indicator.open({
				text: '提交中...',
				spinnerType: 'fading-circle'
			});
			let params ={
				studentid:_this.studentId,
				feedback:_this.content
			}
			LivePost.addFeedBack(params).then(res => {
				Indicator.close();
				_this.feedBackFlag = false;
				_this.content = "";
				let instance = Toast('添加成功');
				setTimeout(() => {
					instance.close();
				}, 2000);
			})
			.catch(error => {
				Indicator.close();
			})
		},
		//进入课单
		interClassInfo(item){
			window.location.href = APIMSG.link.studentUrl+ "/class/record-detail?is_student= 0 &record_id=" + item.record_id;
		}
	},
	mounted(){
	}
}
</script>

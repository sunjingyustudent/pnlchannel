<template>
	<div class="my-course" id="my-course">
		<!--我预约的近期直播课-->
		<div class="my-recently">
			<ul>
				<li v-for="(item,index) in myRecently">
					<a @click="interClass(item)" class="myCourse_a">
						<div class="my-recently-item" >
							<div class="my-recently-item-box">
								<div class="my-recently-item-icon">
									<img src="item.icon"  :src="item.icon" alt="" class="my-recently-item-icon-img">
								</div>
								<div class="my-recently-item-classinfo">
									<div class="my-recently-item-classinfo-title">
										{{item.title}}
									</div>
									<div class="my-recently-item-classinfo-speak">
										主讲人：{{item.teacher_name}}
									</div>
									<div class="my-recently-item-classinfo-time">
										<img src="../assets/icon/time.png" alt="" class="recently-item-time-icon">
										{{item.class_time}}
										<img src="../assets/icon/personnum.png" alt="" class="recently-item-time-icon">
										{{item.counts}}人
									</div>

									<div class="book-button" v-if="item.is_back == 0">
										已预约
									</div>
								</div>
							</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<!--课程分隔线--> 
		<div class="split-line" v-if="SplitFlag">
		</div>
		<!--我预约过的回顾课-->
		<div class="my-recently">
			<ul>
				<li v-for="(item,index) in myLiveBack">
					<a @click="interClass(item)" class="myCourse_a">
						<div class="my-recently-item" >
							<div class="my-recently-item-box">
								<div class="my-recently-item-icon">
									<img src="item.icon"  :src="item.icon" alt="" class="my-recently-item-icon-img">
								</div>
								<div class="my-recently-item-classinfo">
									<div class="my-recently-item-classinfo-title">
										{{item.title}}
									</div>
									<div class="my-recently-item-classinfo-speak">
										主讲人：{{item.teacher_name}}
									</div>
									<div class="my-recently-item-classinfo-time">
										<img src="../assets/icon/time.png" alt="" class="recently-item-time-icon">
										{{item.class_time}}
										<img src="../assets/icon/personnum.png" alt="" class="recently-item-time-icon">
										{{item.counts}}人
									</div>

									<div class="book-button" v-if="item.is_back == 0">
										已预约
									</div>
								</div>
							</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<!--列表结束页-->
		<div class="over-line">
		</div>
		<!--无数据模块-->
		<no-data v-if="NodataFlag"></no-data>
	</div>
</template>
<style lang="less">
	.myCourse_a{
		color: #000;
	}
	.my-recently-item{
		height: 5rem;
		padding: 0rem 0.75rem;
		position:relative;
		.my-recently-item-box{
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			height: 5rem;
			border-bottom: 0.5px solid #dfdfdf;
			padding: .6rem 0rem;
			.my-recently-item-icon{
				width: 3.75rem;
				height: 3.8rem;
				padding: .4rem .75rem .4rem 0rem;
				border-radius: .5rem;
				.my-recently-item-icon-img{
					width: 3rem;
					height: 3rem;
					border-radius: .5rem;
				}
			}
			.my-recently-item-classinfo{
				-webkit-box-flex: 1;
				-webkit-flex: 1;
				flex: 1;
				height: 3.8rem;
				// position:relative;
				.my-recently-item-classinfo-title{
					height: 1.8rem;
					font-size: 0.65rem;
				}
				.my-recently-item-classinfo-speak{
					height: 1.4rem;
					font-size: 0.6rem;
					line-height: 1.4rem;
				}
				.my-recently-item-classinfo-time{
					height: .6rem;
					font-size: .5rem;
					line-height: .6rem;
					.recently-item-time-icon{
						width: .6rem;
						height: .6rem;
						vertical-align: middle;
						margin-right: .05rem;
					}

				}
				.book-button{
					width: 2.5rem;
					height: 1.25rem;
					position: absolute;
					right: .5rem;
					top: 2.25rem;
					border: 1px solid #FF4646;
					border-radius: .1rem;
					line-height: 1.25rem;
					z-index: 100;
					font-size: .6rem;
					text-align: center;
					color: #ff4646;
				}
			}
		}
	}
	li:last-child .my-recently-item-box{
		border-bottom: 0;
	}
	.split-line{
		height: .3rem;
		background-color: #f7f7f7;
	}
	.over-line{
		height: 0.5px;
		width: 90%;
		margin: 0 auto;
		background-color: #d7d7d7;
	}
</style>
<script>
	import Vue from 'vue';
	import MyRecently from '../components/myRecently';
	import NoData from '../components/noData';
	import LivePost from '../service/live';
	import { Indicator } from 'mint-ui';

	export default {
		data() {
			return {
	    	//返回数据
	    	NodataFlag:false,
	    	SplitFlag:true,
	    	myRecently:[],
	    	myLiveBack:[]
	    }
	},
	created(){
	},
	components:{
		//组件
		MyRecently,
		NoData,
	},
	methods: {
		//调用方法
		//获取我的课程
		getMyCourse(){
			let _this =this;
			console.log("获取我的课程");
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});
			LivePost.getMyCourse().then(res => {
				Indicator.close();
				_this.myRecently = res.data.recently;
				_this.myLiveBack = res.data.back;
				if(res.data.back.length<1&&res.data.recently.length<1){
					_this.NodataFlag = true;
				}
				if(res.data.back.length<1 || res.data.recently.length<1){
					_this.SplitFlag = false;
				}
			})
			.catch(error => {
				Indicator.close();
				if(error.data.code===400){
					window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/mycourse";
				}
			})
		},
		interClass(item){
			let _this = this;

			let params ={
				classid:item.id,
				type:5,
				fromId:0,
			}

			//添加用户统计
			LivePost.addStatistics(params).then(res => {
				_this.$router.push('/liveshow/'+item.id+"?type=5");
			})
			.catch(error => {
				if(error.data.code===400){
					window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/mycourse";
				}else{
					_this.$router.push('/liveshow/'+item.id+"?type=5");
				}
				
			});
		}
	},
	mounted(){
		this.getMyCourse();
	}
}
</script>

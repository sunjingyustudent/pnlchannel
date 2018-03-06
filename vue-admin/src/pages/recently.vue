<template>
	<div class="live-recently" id="live-recently">
		<!-- 近期直播列表start -->
		<ul v-infinite-scroll="loadMore">
			<li v-for="(item,index) in RecentlyList">
				<div class="live-recently-item" @click="interClass(item)">
					<div class="live-recently-icon">
						<img src="item.banner_img"  :src="item.banner_img" alt="" class="live-recently-icon-img">
					</div>
					<div class="live-recently-info">
						<div class="live-recently-info-title">
							{{item.title}}
						</div>
						<div class="live-recently-info-button">
							<img src="../assets/icon/personnum.png" alt="" class="live-recently-num-icon">
							<span>{{item.counts}}人</span>
							<div class="live-recently-book-button" v-if="item.isbook==1">
								已预约
							</div>
							<div class="live-recently-nobook-button live-recently-book-button" v-if="item.isbook != 1">
								立即预约
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<!--近期直播列表end-->
		<!--更多往期课程按钮start-->
		<div class="loadMoreList">
			<div class="loadMoreList-button" @click="getMoreCourse()">
				查看更多往期课程
			</div>
		</div>
		<!--更多往期课程按钮end-->
		<!--无数据模块start-->
		<no-data v-if="nodata"></no-data>
		<!--无数据模块end-->
	</div>
</template>
<style lang="less" scoped>
	.live-recently-icon{
		width: 100%;
		.live-recently-icon-img{
			display: block;
			width: 100%;
		}
	}
	.live-recently-info{
		height: 120/20rem;
		padding: 15/20rem;
		.live-recently-info-title{
			height: 40/20rem;
			font-size: .7rem;
			line-height: 40/40rem;
		}
		.live-recently-info-button{
			margin-top: .5rem;
			height: 1.5rem;
			font-size: .65rem;
			position: relative;
			line-height: 1.5rem;
			.live-recently-num-icon{
				width: 19/20rem;
				height: 19/20rem;
				vertical-align: middle;
				margin-right: 6/20rem;
			}
			.live-recently-num-icon + span {
				color: #818181;
			}
			.live-recently-book-button{
				position:absolute;
				width: 85/20rem;
				height: 25/20rem;
				line-height: 25/20rem;
				text-align: center;
				right: 0;
				top: 0;
				border-radius: 4px;
				background-color: #FFBF37;
				color: #fff;
			}
			.live-recently-nobook-button{
				background-color: #FF4F4D;
			}
		}
	}
	.loadMoreList{
		height: 3rem;
		width: 100%;
		padding: .5rem .75rem;
		text-align: center;
		border:1px solid #efefef;
		.loadMoreList-button{
			height: 2rem;
			line-height: 2rem;
			color: #ff4646;
			border-radius: .2rem;
			border:1px solid #ff4646;
		}
	}
</style>
<script>
	import Vue from 'vue';
	import LivePost from '../service/live';
	import { InfiniteScroll } from 'mint-ui';
	import NoData from '../components/noData';
	import { Toast } from 'mint-ui';
	Vue.use(InfiniteScroll);
	//加载
	import { Indicator } from 'mint-ui';

	let loadingFlag = true;
	var value = parseInt(sessionStorage.getItem("topCr"))||1;
	export default {
		data() {
			return {
	    	//返回数据
	    	curPage:value,
	    	pageSize:10,
	    	RecentlyList:[],
	    	nodata:false
	    }
	},
	created(){

	},
	components:{
		//组件
		NoData
	},
	methods: {
		//调用方法
		//滚动加载
		loadMore(){
			let _this =this;
			_this.loading = loadingFlag;
			if(loadingFlag){
				_this.getRecentlyList();
				_this.loading = false;
				loadingFlag =false;
			}
		},
		//获取近期直播列表
		getRecentlyList(){
			let _this =this;
			let params ={
				curPage:_this.curPage,
				pageSize:_this.pageSize,
				isBack:0,
				classifyid:0,
			}
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});
			//请求近期直播列表接口接口
			LivePost.getCourseList(params).then(res => {
				Indicator.close();
				loadingFlag =true;
				_this.loading = true;
				_this.curPage +=1;
				_this.RecentlyList = _this.RecentlyList.concat(res.data.items);
			})
			.catch(error => {
				if(error.data.code===400){
					window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/recently";
				}

				Indicator.close();
				loadingFlag = false;
				//暂无数据
				if(error.data.code===3001){
					_this.nodata = true;
				}
				//没有数据了
				if(error.data.code===3999){
					_this.curPage -=1;
					let instance = Toast('没有数据了');
					setTimeout(() => {
						instance.close();
					}, 2000);
				}
			})
		},
		//进入课程
		interClass(item){
			let _this =this;
			let topCr = _this.curPage-1;
			sessionStorage.setItem("topCr", topCr);

			let params ={
				classid:item.id,
				type:1,
				fromId:0,
			}
            //添加用户统计近期直播
            LivePost.addStatistics(params).then(res => {
            	window.location.href = APIMSG.wxUrl + '/liveshow/'+item.id + '?v=' + Math.random()+'&type=1';
            })
            .catch(error => {
            	if(error.data.code===400){
            		window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/recently";
            	}else{
            		window.location.href = APIMSG.wxUrl + '/liveshow/'+item.id + '?v=' + Math.random()+'&type=1';
            	}
            });
        },
		//获取更多往期课程，到回顾课页面
		getMoreCourse(){
			window.location.href = APIMSG.wxUrl;
		}
	},
	mounted(){
	}
}
</script>

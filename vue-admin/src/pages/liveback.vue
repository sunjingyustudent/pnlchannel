<template>
	<div class="liveback">
		<!--分类组件-->
		<class-classify :classify="classify" :classifyid="classifyid" v-on:postDat="postDat"></class-classify>
		<!--回顾课列表start-->
		<div class="liveback-box">
			<ul v-infinite-scroll="loadMore">
				<li v-for="(item,index) in LiveBackList">
					<a href="javascript:;" class="LiveBackList-a">
						<div class="liveback-item" @click="interClass(item,$event)">
							<div class="liveback-item-box">
								<div class="liveback-item-icon">
									<img :src="item.icon" class="liveback-icon-img">
								</div>
								<div class="liveback-item-info">
									<div class="liveback-title">
										{{item.title}}
									</div>
									<div class="liveback-time">
										<img src="../assets/icon/time.png" alt="" class="liveback-icon">
										{{item.class_time}}
									</div>
									<div class="liveback-time">
										<img src="../assets/icon/personnum.png" alt="" class="liveback-icon">
										<span class="liveback-backshare-num">
											{{item.counts}}
										</span>人
									</div>
									<div class="liveback-price" :class="{'price-red':item.price!=0}">
										<span v-if="item.price==0">
											限时免费
										</span>
										<span v-else>
											{{item.price}}元
										</span>
									</div>
								</div>
							</div>
						</div>
					</a>
				</li>
			</ul>
		</div>
		<!--回顾课列表end-->
		<!--无数据模块-->
		<no-data v-if="Livebacknodata"></no-data>
	</div>
</template>
<style lang="less">
	.LiveBackList-a{
		color: #000;
		.liveback-item{
			height: 134/20rem;
			.liveback-item-box{
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				margin: 0 .75rem;
				padding:1rem 0rem;
				border-bottom: 1px solid #ccc;
				position: relative;

				.liveback-item-icon{
					width: 132/20rem;
					height: 94/20rem;
					display: inline-block;
					.liveback-icon-img{
						width: 100%;
						height: 100%;
						border-radius: .5rem;
					}
				}
				.liveback-item-info{
					-webkit-box-flex: 1;
					-webkit-flex: 1;
					flex: 1;
					height: 94/20rem;
					display: inline-block;
					padding-left: .5rem;
					.liveback-title{
						width: 203/20rem;
						height: 44/20rem;
						font-size: .8rem;
						margin-bottom: .75rem;
					}
					.liveback-time{
						width: 203/20rem;
						height: 12/20rem;
						font-size: .6rem;
						line-height: 12/20rem;
						margin-bottom: .5rem;
						.liveback-icon{
							width: 12/20rem;
							height: 12/20rem;
							vertical-align: middle;
							margin-right: .25rem;
						}
					}
					.liveback-price{
						position:absolute;
						width: 80/20rem;
						height: 16/20rem;
						font-size: 16/20rem;
						color:#7ED321;
						bottom: 1rem;
						right: 0;
						text-align: right;
						line-height: 16/20rem;
					}
					.price-red{
						color:#ff4d4d;
					}
				}
			}
		}
	}
</style>
<script>
	import Vue from 'vue';
	import ClassClassify from '../components/classClassify';
	import LivePost from '../service/live';
	import { InfiniteScroll } from 'mint-ui';
	import { Toast } from 'mint-ui';
	Vue.use(InfiniteScroll);
	//加载
	import { Indicator } from 'mint-ui';
	import NoData from '../components/noData';

	let loadingFlag = true;
	let livebackCrValue = parseInt(sessionStorage.getItem("livebackCr"))||1;
	let classidCrvalue = parseInt(sessionStorage.getItem("classidCr"))||0;
	
	export default {
		data() {
			return {
	    	//返回数据
		    	curPage:livebackCrValue,//当前页码
		    	pageSize:10,//每页数据个数
		    	classify: [],//课程分类列表
		    	LiveBackList:[],//回顾课列表
		    	classifyid:classidCrvalue,//列表分类id
		    	Livebacknodata: false,//回顾课无数据标志
		    }
		},
		created(){
			loadingFlag = true;
			this.curPage = parseInt(sessionStorage.getItem("livebackCr"))||1;
			this.classifyid = parseInt(sessionStorage.getItem("classidCr"))||0;
		},
		components:{
		//组件
		ClassClassify,
		NoData
	},
	methods: {
		//调用方法
		loadMore(){
			let _this =this;
			_this.loading = loadingFlag;
			if(loadingFlag){
				_this.getLiveBackList();
				_this.loading = false;
				loadingFlag =false;
			}
		},
		getLiveBackList(){
			let _this =this;
			let params ={
				curPage:_this.curPage,
				pageSize:_this.pageSize,
				isBack:1,
				classifyid:_this.classifyid,
			}
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});
			LivePost.getCourseList(params).then(res => {
				_this.classify = res.data.classifyinfo;
				Indicator.close();
				loadingFlag =true;
				_this.loading = true;
				_this.curPage = parseInt(_this.curPage) + 1;
				_this.LiveBackList = _this.LiveBackList.concat(res.data.items);
				_this.Livebacknodata = false;
			})
			.catch(error => {
				if(error.data.code===400){
					window.location.href =APIMSG.weixapi+APIMSG.wxUrl;
				}
				Indicator.close();
				loadingFlag = false;
				//暂无数据
				if(error.data.code===3001){
					_this.Livebacknodata = true;
				}
				//没有数据了
				if(error.data.code===3999){
					_this.Livebacknodata = false;
					let instance = Toast('没有数据了');
					setTimeout(() => {
						instance.close();
					}, 2000);
				}
			})
		},
		interClass(item,$event){		
			let _this =this;
			//存储回顾课第几页
			
			let livebackCr = parseInt(_this.curPage)-1;
			sessionStorage.setItem("livebackCr", livebackCr);
			//存储分类id
			let classidCr = _this.classifyid;
			sessionStorage.setItem("classidCr", classidCr);

			let params ={
				classid:item.id,
				type:3,
				fromId:0,
			}
            //添加用户统计
            LivePost.addStatistics(params).then(res => {
            	window.location.href = APIMSG.wxUrl + '/liveshow/'+item.id + '?v=' + Math.random()+'&type=3';
            })
            .catch(error => {
            	if(error.data.code===400){
            		window.location.href =APIMSG.weixapi+APIMSG.wxUrl;
            	}else{
            		window.location.href = APIMSG.wxUrl + '/liveshow/'+item.id + '?v=' + Math.random()+'&type=3';
            	}
            });
        },
        postDat(val){
        	this.curPage =1;
        	this.classifyid = val;
        	this.LiveBackList = [];
        	this.getLiveBackList();
        }
    },
    mounted(){
    }
}
</script>

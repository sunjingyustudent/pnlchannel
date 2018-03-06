<template>
	<div class="ranking-wrap">
		<!-- 排行榜有数据 -->
		<div class="have-data" v-if="dataFlag">
			<div class="ranking-list">
				<ul v-infinite-scroll="loadMore">
					<li v-for="(item,index) in rankingList">
						<div class="ranking-item">
							<div class="ranking-item-top">
								<div class="ranking-num">
									<img src="../assets/images/first.png" class="ranking-num-img" v-if="item.record==1">
									<img src="../assets/images/second.png" class="ranking-num-img" v-if="item.record==2">
									<img src="../assets/images/three.png" class="ranking-num-img" v-if="item.record==3">
									<span class="ranking-No" v-if="item.record>3">
										{{item.record}}
									</span>
								</div>
								<div class="ranking-userinfo">
									<img :src="item.head" class="userhead">
									<span class="username">{{item.name}}</span>
									<span class="user-money">{{item.money}}元</span>
								</div>
							</div>
							<div class="ranking-item-bottom">
								<span class="ranking-item-bottom-item">
									完成体验：{{item.ex_finish_num}}
								</span>
								<span class="ranking-item-bottom-item alighCenter">
									买单：{{item.order_num}}
								</span>
								<span class="ranking-item-bottom-item alighRight">
									邀请关注：{{item.pull_teacher_num}}
								</span>
							</div>
						</div>
					</li>
				</ul>
				<!-- 用户自己的排名 -->
				<div class="ranking-item my-ranking">
					<div class="ranking-item-top">
						<div class="ranking-num">
							<img :src="userRankImg" class="ranking-num-img" v-if="userRankImg!=''">
							<span class="ranking-No" v-else>{{userRank}}</span>
						</div>
						<div class="ranking-userinfo">
							<img :src="userHead" class="userhead">
							<span class="username">{{userName}}</span>
							<span class="user-money">{{userMoney}}元</span>
						</div>
					</div>
					<div class="ranking-item-bottom">
						<span class="ranking-item-bottom-item">
							完成体验：{{completedEx}}
						</span>
						<span class="ranking-item-bottom-item alighCenter">
							买单：{{billNum}}
						</span>
						<span class="ranking-item-bottom-item alighRight">
							邀请关注：{{inviteFoucs}}
						</span>
					</div>
				</div>
			</div>
		</div>
		<!-- 排行榜无数据 -->
		<div class="no-data" v-if="!dataFlag">
			<img src="../assets/images/rank-no-data.png" class="no-data-img" />
			<span class="no-data-tip">
				暂时无人上榜，各位老师多多努力做任务吧～
			</span>
		</div>
	</div>
</template>
<style lang="less">
	.ranking-wrap{
		width: 100%;
		background-color: #fff;
		.have-data{
			width: 100%;
			background-color: #fff;
			.ranking-list{
				width: 100%;
				padding-bottom: 110.5/20rem;
				.ranking-item{
					width: 100%;
					height: 95.5/20rem;
					border-bottom: 5/20rem solid #eee;
					.ranking-item-top{
						width: 100%;
						height: 58.5/20rem;
						display: -webkit-box;
						display: -webkit-flex;
						display: flex;
						.ranking-num{
							width: 39/20rem;
							height: 100%;
							.ranking-num-img{
								width: 19/20rem;
								height: 24/20rem;
								margin: 17/20rem .5rem;
							}
							.ranking-No{
								width: 100%;
								display: block;
								text-align: center;
								height: 100%;
								line-height: 58.5/20rem;
								font-size: 15/20rem;
								color: #4A4A4A;
							}
						}
						.ranking-userinfo{
							display: inline-block;
							width: 322/20rem;
							height: 59/20rem;
							border-bottom: 0.5/20rem solid #EBEBEB;
							position: relative;
							.userhead{
								width: 38.5/20rem;
								height: 38.5/20rem;
								border-radius: 1rem;
								margin-top: .5rem;
							}
							.username{
								position: absolute;
								width: 200/20rem;
								display: inline-block;
								height: 58.5/20rem;
								line-height: 58.5/20rem;
								font-size: .8rem;
								left: 46.5/20rem;
								color: #4A4A4A;
							}	
							.user-money{
								position: absolute;
								width: 100/20rem;
								display: inline-block;
								height: 58.5/20rem;
								line-height: 58.5/20rem;
								font-size: 19/20rem;
								right: 0rem;
								text-align: right;
								color: #4A4A4A;
							}
						}
					}
					.ranking-item-bottom{
						width: 100%;
						height: 31.5/20rem;
						display: -webkit-box;
						display: -webkit-flex;
						display: flex;
						padding: 0 14/20rem 0 39/20rem;
						.ranking-item-bottom-item{
							height: 31.5/20rem;
							line-height: 31.5/20rem;
							-webkit-box-flex: 1;
							-webkit-flex: 1;
							flex: 1;
							font-size:.6rem;
							color: #9B9B9B; 
						}
						.alighCenter{
							text-align: center;
						}
						.alighRight{
							text-align: right;
						}
					}
				}
				.my-ranking{
					position: fixed;
					bottom: 0;
					width: 100%;
					height: 110.5/20rem;
					background: #FFFFFF;
					border-top: 1px solid #DCDCDC;
					box-shadow: 0 39px 88px 0 rgba(56,37,110,0.50);
					padding-top: 5/20rem;
					border-bottom:none;

				}

			}
		}
		.no-data{
			position: relative;
			width: 100%;
			height: 100%;
			background-color: #fff;
			.no-data-img{
				position: absolute;
				width: 111/20rem;
				height: 117/20rem;
				top: 170.5/20rem;
				left: 132.5/20rem;
			}
			.no-data-tip{
				width: 100%;
				height: 18.5/20rem;
				display: block;
				color: #9B9B9B;
				font-size: 13/20rem;
				line-height: 18.5/20rem;
				text-align: center;
				position: absolute;
				top: 294.5/20rem;
			}

		}
	}
</style>
<script>
	import Vue from 'vue';
	import LivePost from '../service/live';
	import { InfiniteScroll } from 'mint-ui';
	import { Toast } from 'mint-ui';
	Vue.use(InfiniteScroll);
	import { Indicator } from 'mint-ui';
	let loadingFlag = true;

	export default {
		data(){
			return {
				dataFlag:true,//排行榜是否有数据
				rankingList:[],//排行榜列表
				userHead:'',//用户头像
				userRank:0,//用户排名
				userName:'',//用户昵称
				userMoney:0,//用户金额
				completedEx:0,//完成体验课
				billNum:0,//买单数
				inviteFoucs:0,//用户邀请关注数
				userRankImg:'',//用户排名图标

				loadingFlag:true,
				curPage:1,
				pageSize:20,
				loading:true,
			}
		},
		create(){
			loadingFlag = true;
		},
		components:{
 			//组件
 		},
 		methods:{
 			loadMore(){
 				let _this =this;
 				_this.loading = loadingFlag;
 				if(loadingFlag){
 					_this.getRanking();
 					_this.loading = false;
 					loadingFlag = false;
 				}
 			},
 			getRanking(){
 				let _this = this;
 				let params = {
 					'curPage': _this.curPage,
 					'pageSize': _this.pageSize,
 				}
 				Indicator.open({
 					text: '加载中...',
 					spinnerType: 'fading-circle'
 				});
 				LivePost.getRanking(params).then(res => {
 					Indicator.close();
 					
 					_this.curPage = parseInt(_this.curPage) + 1;
 					_this.rankingList = _this.rankingList.concat(res.data.list_info);
 					loadingFlag =true;
 					_this.loading = true;

 					let userinfo = res.data.user_info;
 					_this.userRank = userinfo.record>99?'99+':userinfo.record;
 					if(_this.userRank<=3){
 						_this.getUserRankImg(_this.userRank);
 					}
 					_this.userName = userinfo.name;
 					_this.userMoney = userinfo.money;
 					_this.userHead = userinfo.head;
 					_this.completedEx = userinfo.ex_finish_num;
 					_this.billNum = userinfo.order_num;
 					_this.inviteFoucs = userinfo.pull_teacher_num;
 				})
 				.catch(error => {
 					Indicator.close();
 					if(error.data.code===400){
						window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/ranking";
					}
 					if(error.data.code===3014){
						_this.$router.replace('/personal');
					}
					//暂无数据
					if(error.data.code===3001){
						_this.dataFlag = false;
					}
					//没有数据了
					if(error.data.code===3999){
						let instance = '';
						if(_this.curPage >= 6){
							instance = Toast('排行榜仅显示前100条');
						}else{
							instance = Toast('没有数据了');
						}
						setTimeout(() => {
							instance.close();
						}, 2000);
					}
				});
 			},
			//获取用户排名图标
			getUserRankImg(rank){
				let _this = this;
				if(rank == 1){
					_this.userRankImg='../../static/img/first.png';
				} else if (rank == 2){
					_this.userRankImg='../../static/img/second.png';
				} else {
					_this.userRankImg='../../static/img/three.png';
				}
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
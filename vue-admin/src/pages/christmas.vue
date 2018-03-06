<template>
	<div class="christmas">
		<!-- 圣诞节活动banner图 -->
		<img src="../assets/images/christmas/banner.png"  class="christmas-banner" />
		<!-- 我的圣诞节活动 -->
		<div class="christmas-active">
			<!-- 显示抽奖次数 -->
			<div class="christmas-chance-box" v-if="chanceCount!=0&&isEnd==0">
				<img src="../assets/images/christmas/chance.png"  class="christmas-chance"/>
				<span class="christmas-chance-span">
					你还有{{chanceCount}}次抽奖机会
				</span>
			</div>
			<!-- 抽奖区 -->
			<div class="award-area" v-if="isEnd==0">
				<img src="../assets/images/christmas/frame.png"  class="christmas-frame" />
				<img src="../assets/images/christmas/light.gif"  class="christmas-light" />
				<div class="award-box">
					<div class="award-box-hang">
						<div class="award-box-items" :class="{'select-items':LightFlag == 1}">
							<img src="../assets/images/christmas/Redpackage1.png" class="redpack" />
							<span class="redpack-span">手气红包
							</span>
						</div>
						<div class="award-box-items" :class="{'select-items':LightFlag == 2}">
							<img src="../assets/images/christmas/sack1.png" class="fudai" />
							<span class="redpack-span">音乐周边福袋
							</span>
						</div>
						<div class="award-box-items" :class="{'select-items':LightFlag == 3}">
							<img src="../assets/images/christmas/iPhone1.png" class="iphone" />
							<span class="iphone-span">iPhone X
							</span>
						</div>
					</div>
					<div class="award-box-hang">
						<div class="award-box-items" :class="{'select-items':LightFlag == 8}">
							<img src="../assets/images/christmas/Redpackage1.png" class="redpack" />
							<span class="redpack-span">手气红包
							</span>
						</div>
						<div class="award-box-items-center" @click="getRewardGift">
							<a href="javascript:;">
								<img src="../assets/images/christmas/button.png"  class="award-button"/>
							</a>
						</div>
						<div class="award-box-items" :class="{'select-items':LightFlag == 4}">
							<img src="../assets/images/christmas/Nocturne1.png" class="redpack" />
							<span class="redpack-span">正版钢琴谱
							</span>
						</div>
					</div>
					<div class="award-box-hang">
						<div class="award-box-items" :class="{'select-items':LightFlag == 7}">
							<img src="../assets/images/christmas/flower1.png" class="huahua" />
							<span class="redpack-span">感谢有你
							</span>
						</div>
						<div class="award-box-items" :class="{'select-items':LightFlag == 6}">
							<img src="../assets/images/christmas/Redpackage1.png" class="redpack" />
							<span class="redpack-span">手气红包
							</span>
						</div>
						<div class="award-box-items" :class="{'select-items':LightFlag == 5}">
							<img src="../assets/images/christmas/sack1.png" class="fudai" />
							<span class="redpack-span">音乐周边福袋
							</span>
						</div>
					</div>	
				</div>
			</div>
			<!-- 中奖记录区 -->
			<div class="award-record-area" v-if="isEnd==0">
				<div class="award-record-list record-list-an">
					<span class="award-record-item" v-for="(item,index) in userlist">
						{{item.wechat_name}}抽中{{item.award_name}}  {{item.at_time}}
					</span>
				</div>
			</div>
			<!-- 我的抽奖奖品 -->
			<div class="my-reward-gift" v-if="myRewardFlag" :class="{'martop':isEnd==1}">
				<!-- 奖品区标题 -->
				<div class="my-reward-gift-title">
					<img src="../assets/images/christmas/title.png"  class="my-reward-title" />
					<span class="my-reward-gift-span">
						我的奖品
					</span>
				</div>
				<!-- 我的实物奖品 -->
				<div class="my-reward-entityinfo" v-if="entityinfo!=0">
					<div class="entityinfo-item" v-for="(item,index) in entityinfo">
						<div class="entityinfo-item-gift">
							<img src="../assets/images/christmas/iphone-gift.png"  class="gift-img-iphone" v-if="item.type==1"/>
							<img src="../assets/images/christmas/note-gift.png"  class="gift-img" v-else-if="item.type==2"/>
							<img src="../assets/images/christmas/sack-gift.png"  class="gift-img" v-else/>
						</div>
						<div class="entityinfo-item-info">
							{{item.name}}
							<span class="line">
								- - - - - -
							</span>
							<span class="num">
								x{{item.count}}
							</span>
						</div>
					</div>
					<span class="entityinfo-tip">
						活动结束后5个工作日内统一发放
					</span>
					<span class="entityinfo-address-button" @click="addressInfo" v-if="isEnd==0">
						<span v-if="addressFlag == 1">
							修改配送信息
						</span>
						<span v-else>
							填写配送信息 
						</span>
					</span>
				</div>
				<!-- 我的红包奖品 -->
				<div class="my-reward-entityinfo" v-if="redMoney!=0">
					<div class="entityinfo-item">
						<div class="entityinfo-item-gift">
							<img src="../assets/images/christmas/redpackage-gift.png"  class="redpackage" />

						</div>
						<div class="entityinfo-item-info">
							手气红包
							<span class="line">
								- - - - - -
							</span>
							<span class="num">
								{{redMoney}}元
							</span>
						</div>
					</div>
					<span class="entityinfo-address-button" @click="goMyHome">
						查看我的红包
					</span>
				</div>
			</div>
			<!-- 活动规则 -->
			<christmas-rule v-if="isEnd==0"></christmas-rule>
		</div>
		
		<!-- 奖品展示遮罩层 -->
		<div class="christmas-cover" v-if="giftCover">
			<div class="christmas-cover-bg">
			</div>
			<div class="cover-box">
				<div class="cover-box-title">
					<img src="../assets/images/christmas/gift-tip.png"  class="title-img" />
					<span class="title-span">
						<span v-if="!imgFlag">
							只差一步
						</span>
						<span v-else-if="type==0">
							感谢参与
						</span>
						<span v-else>
							中奖啦
						</span>
					</span>
					<img src="../assets/images/christmas/close-reward.png"  class="close-button" @click="closeGiftCover"/>
				</div>
				<span class="reward-tip">
					<span v-if="!imgFlag">
						成功邀请一位琴童完成体验课即可抽奖</br>         邀请步骤可在「VIP微课」直接回复</br>【邀请】了解哦
					</span>
					<span v-else-if="type==0">
						<!-- 感谢你的参与，再邀请一位好友</br>
						完成体验课即可再次参与抽奖哦～ -->
						感恩你的参与，邀请越多琴童完成体验课，可获得越多的抽奖机会哦～
					</span>
					<span v-else>
						{{GiftText}}
					</span>
				</span>
				<img :src="GiftImg"  :class="GiftClass" v-if="imgFlag"/>
				<span class="cover-button">
					<span v-if="type==4" @click="goMyHome">
						查看我的红包
					</span>
					<span v-else-if="isFirstEntity==1&&type!=0" @click="addressInfo">
						填写配送信息
					</span>
					<span v-else @click="closeGiftCover">
						我知道了
					</span>
				</span>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	.christmas{
		background-color: #FDE430;
		padding-bottom: 50/20rem;
		min-height: 100%;
		position: relative;
		.christmas-cover{
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1000000;
			.christmas-cover-bg{
				width: 100%;
				height: 100%;
				background-color: #000;
				opacity: .68;
			}
			.cover-box{
				position: fixed;
				top: 115/20rem;
				left: .75rem;
				width: 345/20rem;
				background-color: #fff;
				border-radius: .5rem;
				padding-bottom: 1.5rem;
				.cover-box-title{
					width: 345/20rem;
					height: 77/20rem;
					position: relative;
					background-color: #FEE532;
					border-radius: .5rem .5rem 0 0;
					.title-img{
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						border-radius: .5rem .5rem 0 0;
					}
					.title-span{
						width: 100%;
						height: 100%;
						line-height: 77/20rem;
						display: block;
						text-align: center;
						font-size: 1.2rem;
					}
					.close-button{
						position: absolute;
						width: 30/20rem;
						height: 30/20rem;
						right: -15/20rem;
						top: -15/20rem;
					}
				}
				.reward-tip{
					width: 260/20rem;
					display: block;
					line-height: 22/20rem;
					font-size: .7rem;
					text-align: center;
					margin: 1.5rem auto;
				}
				.cover-repackage{
					width: 66/20rem;
					height: 77/20rem;
					margin: 0rem 139.5/20rem 29/20rem 139.5/20rem;
				}
				.cover-flower{
					width: 50/20rem;
					height: 69/20rem;
					margin: 0rem 146.5/20rem 29/20rem 146.5/20rem;
				}
				.cover-sick{
					width: 77/20rem;
					height: 74/20rem;
					margin: 0rem 133.5/20rem 29/20rem 133.5/20rem;
				}
				.cover-note{
					width: 73/20rem;
					height: 74/20rem;
					margin: 0rem 146.5/20rem 29/20rem 146.5/20rem;
				}
				.cover-iPhone{
					width: 56/20rem;
					height: 105/20rem;
					margin: 0rem 144.5/20rem 19/20rem 144.5/20rem;
				}
				.cover-button{
					width: 166/20rem;
					height: 2rem;
					margin: 0rem auto;
					display: block;
					text-align: center;
					line-height: 36/20rem;
					background: #FE5E01;
					border: 2px solid #2B2921;
					border-radius: 1rem;
					color: #fff;
					font-size: .8rem;
				}
			}
		}
		.christmas-banner{
			width: 100%;
			vertical-align: middle;
		}
		//关注用户的显示
		.christmas-active{
			padding-top: 26/20rem;
			//抽奖机会
			.christmas-chance-box{
				height: 42/20rem;
				position: relative;
				.christmas-chance{
					display: block;
					height: 42/20rem;
					margin: 0rem auto;
				}
				.christmas-chance-span{
					position: absolute;
					height: 36/20rem;
					width: 176/20rem;
					line-height: 36/20rem;
					text-align: center;
					top: 0;
					left: 199/40rem;
					font-size: .8rem;
					color: #2B2921;
				}
			}
			//抽奖区域
			.award-area{
				height: 357/20rem;
				position: relative;
				.christmas-frame{
					display: block;
					height: 357/20rem;
					margin: 0rem auto;
				}
				.christmas-light{
					position: absolute;
					height: 320/20rem;
					top: 9/20rem;
					width: 100%;
				}
				.award-point{
					width: 86/20rem;
					height: 86/20rem;
					position: absolute;
					
					background-color: #FAF58F;
					z-index: 999;
					border-radius: .3rem;
				}
				.award-box{
					position: absolute;
					width: 288/20rem;
					height: 288/20rem;
					top: 25/20rem;
					left: 87/40rem;
					padding: .25rem;
					.award-box-hang{
						display: -webkit-box;
						display: -webkit-flex;
						display: flex;
						height: 86/20rem;
						margin-bottom: .5rem;
						.award-box-items{
							height: 86/20rem; 
							-webkit-box-flex: 1;
							-webkit-flex: 1;
							flex: 1;
							background-color: #E4E4E4;
							margin-right: .5rem;
							border-radius: .3rem;
							position: relative;
							color: #2B2921;
							font-size: .7rem;
							.redpack{
								position: absolute;
								width: 30.9/20rem;
								height: 36/20rem;
								top: 13/20rem;
								left: 28/20rem;
								z-index: 10000;
							}
							.huahua{
								position: absolute;
								width: 27.6/20rem;
								height: 37/20rem;
								top: 13/20rem;
								left: 28/20rem;
								z-index: 10000;
							}
							.fudai{
								position: absolute;
								width: 35/20rem;
								height: 34/20rem;
								top: 15/20rem;
								left: 26/20rem;
								z-index: 10000;
							}
							.redpack-span{
								display: block;
								width: 100%;
								height: .7rem;
								text-align: center;
								position: absolute;
								top: 55/20rem;
								z-index: 10000;
							}
							.iphone{
								position: absolute;
								width: 29/20rem;
								height: 54/20rem;
								top: 6/20rem;
								left: 28/20rem;
								z-index: 10000;
							}
							.iphone-span{
								display: block;
								width: 100%;
								height: .7rem;
								text-align: center;
								position: absolute;
								top: 59/20rem;
								z-index: 10000;
							}
						}
						.select-items{
							background-color: #FAF58F;
						}
						.award-box-items-center{
							height: 96/20rem; 
							width: 96/20rem;
							background-color: red;
							position: relative;
							top: -.25rem;
							left: -.25rem;
							border-radius: .3rem;
							.award-button{
								height: 96/20rem;
							}
						}
						.award-box-items:last-child{
							margin-right: 0rem;
						}
					}
				}
			}
			//抽奖记录
			.award-record-area{
				width: 247/20rem;
				height: 82/20rem;
				background-color: #FFF;
				margin: .5rem 128/40rem  68/20rem 128/40rem;
				border-radius: .4rem;
				border:0.5px solid #000;
				padding: 9/20rem 0rem;
				overflow: hidden;
				position: relative;
				.award-record-list{
					width: 100%;
					position: absolute;
					.award-record-item{
						display: block;
						width: 100%;
						height: .7rem;
						line-height: .7rem;
						text-align: center;
						margin-bottom: 11/20rem;
						font-size: .7rem;
						color: #2B2921;
					}
				}
				.record-list-an{
					animation:recordAn 40s infinite linear;
					-moz-animation:recordAn 40s infinite linear; /* Firefox */
					-webkit-animation:recordAn 40s infinite linear; /* Safari and Chrome */
					-o-animation:recordAn 40s infinite linear; /* Opera */
				}
				@keyframes recordAn
				{
					0%{top: 0rem;}
					100%{top: -70rem;}
				}
				@-moz-keyframes recordAn /* Firefox */
				{
					0%{top: 0rem;}
					100%{top: -70rem;}
				}
				@-webkit-keyframes recordAn /* Safari and Chrome */
				{
					0%{top: 0rem;}
					100%{top: -70rem;}
				}
				@-o-keyframes recordAn /* Opera */
				{
					0%{top: 0rem;}
					100%{top: -70rem;}
				}
			}
			//我的奖品
			.my-reward-gift{
				width: 345/20rem;
				border-radius: .5rem;
				border:2px solid #000;
				margin: 0rem auto;
				position: relative;
				padding-top: 55/20rem;
				background-color: #fff;
				margin-bottom: 66/20rem;
				.my-reward-gift-title{
					position: absolute;
					width: 201/20rem;
					height: 59/20rem;
					top: -1.6rem;
					left: 85/20rem;
					.my-reward-title{
						width: 100%;
						height: 100%;
					}
					.my-reward-gift-span{
						position: absolute;
						width: 175/20rem;
						height: 30/20rem;
						bottom: 7/20rem;
						left: 0rem;
						text-align: center;
						line-height: 30/20rem;
					}
				}
				//我的实物(红包)奖励
				.my-reward-entityinfo{
					padding-bottom: 36/20rem;
					border-bottom: .5px solid #E7E7E7;
					width: 315/20rem;
					margin: 0 auto;
					.entityinfo-item{
						width: 100%;
						height: 72/20rem;
						display: -webkit-box;
						display: -webkit-flex;
						display: flex;
						margin-bottom: 23/20rem;
						.entityinfo-item-gift{
							width: 72/20rem;
							height: 72/20rem;
							background-color: #F8F8F8;
							border-radius: .2rem;
							margin-right: .5rem;
							position: relative;
							.gift-img{
								width: 39/20rem;
								height: 37/20rem;
								position: absolute;
								top: 18/20rem;
								left: .8rem;
							}
							.redpackage{
								width: 32/20rem;
								height: 38/20rem;
								position: absolute;
								top: 16/20rem;
								left: 1rem;
							}
							.gift-img-iphone{
								width: 32/20rem;
								height: 3rem;
								position: absolute;
								top: 7/20rem;
								left: 1rem;
							}
						}
						.entityinfo-item-info{
							-webkit-box-flex: 1;
							-webkit-flex: 1;
							flex: 1;
							line-height: 72/20rem;
							font-size: .75rem;
							color: #2B2921;
							position: relative;
							.line{
								position: absolute;
								width: 3rem;
								display: block;
								right: 3rem;
								top: 0;
								color: #D0D0D0;
							}
							.num{
								position: absolute;
								width: 3rem;
								text-align: right;
								display: block;
								right: 0;
								top: 0;
								overflow: hidden;
							}
						}
					}
					.entityinfo-tip{
						display: block;
						height: .6rem;
						line-height: .6rem;
						font-size: .6rem;
						width: 100%;
						text-align: center;
						color: #2B2921;
						margin-bottom: 23/20rem;
					}
					.entityinfo-address-button{
						width: 169/20rem;
						height: 2rem;
						display: block;
						margin: 0rem auto;
						background: #FE5E01;
						border: 2px solid #2B2921;
						border-radius: 5rem;
						color: #fff;
						font-size: .8;
						color: #FFFFFF;
						letter-spacing: 0;
						line-height: 1.9rem;
						text-align: center;
					}
				}
				.my-reward-entityinfo:last-child{
					border:none;
				}
				
			}
			.my-reward-gift{
				margin-top: 2rem;
			}
			.my-reward-gift:last-child{
				margin-bottom: 0;
			}
		}	
	}
</style>
<script>
	import Vue from 'vue';
	import ChristmasRule from '../components/christmasRule';
	import LivePost from '../service/live';
	import { InfiniteScroll } from 'mint-ui';
	import { Toast } from 'mint-ui';
	Vue.use(InfiniteScroll);
    //加载
    import { Indicator } from 'mint-ui';
    import Env from '../api/env';

    export default {
    	data() {
    		return {
	    	//返回数据
	    	giftCover:false,//展示奖品区
	    	chanceCount:0,
	    	entityinfo:[],//我的奖品区域
	    	redpakinfo:[],//我的红包奖品
	    	userlist:[],//中奖记录表

	    	myRewardFlag:false,//我的奖品区是否显示
	    	redMoney:0,//中奖红包总金额
	    	imgFlag:true,//奖品遮罩层的图片是否显示
	    	addressFlag:0,//是否有收货地址
	    	isEnd:1,//活动是否结束
	    	LightFlag:0,//转盘指示灯
	    	
	    	getFlag:true,//是否可以抽奖
	    	type:0,//奖品类型
	    	isFirstEntity:0,//是否是第一个实物奖品
	    	GiftImg:'/static/img/redpackage-gift.png',
	    	GiftClass:'cover-repackage',
	    	GiftText:'恭喜你获得手气红包',
	    	GiftBox:[
	    	{
	    		"img": "/static/img/flower-gift.png",
	    		"text": "感恩你的参与，邀请越多琴童完成体验课即可获得越多的抽奖机会哦～",
	    		"className": "cover-flower"
	    	},
	    	{
	    		"img": "/static/img/iphone-gift.png",
	    		"text": "恭喜你获得iPhone X一台",
	    		"className": "cover-iPhone"
	    	},
	    	{
	    		"img": "/static/img/note-gift.png",
	    		"text": "恭喜你获得正版钢琴谱",
	    		"className": "cover-note"
	    	},
	    	{
	    		"img": "/static/img/sack-gift.png",
	    		"text": "恭喜你获得音乐周边福袋",
	    		"className": "cover-sick"
	    	},
	    	{
	    		"img": "/static/img/redpackage-gift.png",
	    		"text": "恭喜你获得手气红包",
	    		"className": "cover-repackage"
	    	},
	    	]
	    }
	},
	created(){

	},
	components:{
		//组件
		ChristmasRule
	},
	methods: {
		//调用方法
		//获取活动信息
		getActiveInfo(){
			let _this = this;
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});
			LivePost.getChristmas().then(res => {
				Indicator.close();

				_this.chanceCount = res.data.chance_count;
				_this.addressFlag = res.data.addressinfo;
				_this.isEnd = res.data.is_end;

				if(res.data.awardinfo.entityinfo.length == 0 && res.data.awardinfo.redpackinfo.length == 0){

					if(_this.isEnd == 1){
						_this.goAttention(1);
					}
				}else{
					_this.myRewardFlag = true;
					_this.entityinfo = res.data.awardinfo.entityinfo;

					_this.redpackinfo = res.data.awardinfo.redpackinfo;
					if(res.data.awardinfo.redpackinfo.length != 0){
						_this.redMoney = res.data.awardinfo.redpackinfo.money;
					}
				}
				
				//调用中奖名单
				_this.getRewardUser();

			})
			.catch(error => {
				if(error.data.code===400){
					window.location.href = APIMSG.weixapi+APIMSG.wxUrl+"/christmas";
				}
				Indicator.close();
			});
		},
		goAttention(type){
			this.$router.push('/activeAttention/'+ type);
		},
		//获取中奖者名单
		getRewardUser(){
			let _this = this;
			LivePost.getUserList().then(res => {
				_this.userlist = res.data.userinfo;
			})
			.catch(error => {
			});
		},
		addressInfo(){
			let _this = this;
			let type = _this.type;
			this.$router.push('/christmasAddress/'+ type);
		},
		getRewardGift(){
			let _this = this;
			if(_this.getFlag){
				_this.getFlag = false;
				_this.getReward();
			}
		},
		getReward(){
			let _this = this;
			if(_this.chanceCount == 0){
				_this.giftCover = true;
				_this.imgFlag = false;
				_this.getFlag = true;
			}else{
				LivePost.getChristmasGift().then(res => {
					_this.isFirstEntity = res.data.is_first_entity;
					_this.chanceCount = _this.chanceCount - 1;
					_this.LightFlag = 1;
					//执行动画
					let num = 0;
					let flag = 4*8;
					var my_interval = setInterval(function () {
						num += 1;
						if (num < flag) {
							_this.LightFlag = _this.LightFlag == 8?_this.LightFlag = 1:_this.LightFlag += 1;
						} else {
							clearInterval(my_interval);
							_this.pl(res);
						}
					}, 100);
				})
				.catch(error => {
					if(error.data.code===3013){
						_this.isEnd = 1;
						let instance = Toast('圣诞节活动已结束');
						setTimeout(() => {
							instance.close();
						}, 2000);
						if(_this.entityinfo.length == 0 && _this.redMoney == 0){
							_this.goAttention(1);
						}
					}
					if(error.data.code===4003){
						let instance = Toast('当前抽奖人数过多........请重试');
						setTimeout(() => {
							instance.close();
						}, 2000);
					}
					_this.getFlag = true;
				});
			}
		},
		pl(res){
			let _this = this;
			if(res.data.entityinfo.length!=0){
				_this.type = res.data.entityinfo[0].type;
			}else{
				_this.type = res.data.redpackinfo.type;
			}
			_this.LightFlag = 1;
			let num = 0;
			let step = _this.getType(_this.type);	
			let flag = 1*8 + step;

			var my_interval = setInterval(function () {
				num += 1;
				if (num < flag) {
					_this.LightFlag = _this.LightFlag == 8?_this.LightFlag = 1:_this.LightFlag += 1;
				} else {
					clearInterval(my_interval);
					_this.showGiftCover(res);
				}
			}, 300);
		},
		getType(type){
			if(type == 0){
				return 7;
			}
			if(type == 1){
				return 3;
			}
			if(type == 0){
				return 7;
			}
			if(type == 2){
				return 4;
			}
			if(type == 3){
				return 2;
			}
			if(type == 4){
				return 1;
			}
		},
		showGiftCover(res){
			let _this = this;
			if(res.data.entityinfo.length!=0){
				_this.type = res.data.entityinfo[0].type;
				if (_this.type != 0 ) {
					_this.myRewardFlag = true;
					let flag = 0;
					for(let i=0;i<_this.entityinfo.length;i++){
						if (_this.entityinfo[i].type==_this.type) {
							_this.entityinfo[i].count =parseInt(_this.entityinfo[i].count)+1;
							flag = 1;
						}
					}
					if (flag == 0) {
						_this.entityinfo = _this.entityinfo.concat(res.data.entityinfo);
					}
				}
			}else{
				_this.myRewardFlag = true;
				_this.type = res.data.redpackinfo.type;
				_this.redpackinfo = res.data.redpackinfo;
			}

			_this.getFlag = true;
			_this.giftCover = true;//奖品遮罩层弹起
			_this.GiftImg = _this.GiftBox[_this.type].img;
			_this.GiftClass = _this.GiftBox[_this.type].className;
			_this.GiftText = _this.GiftBox[_this.type].text;
			if(_this.type == 4){
				_this.redMoney = parseFloat(_this.redMoney) + res.data.redpackinfo.money;
				_this.redMoney = _this.redMoney.toFixed(2);
			}
		},
		closeGiftCover(){
			let _this = this;
			_this.giftCover = false;
			_this.type = 0;
		},
		//去我的个人中心
		goMyHome(){
			this.$router.push('/myReward');
		},
		//分享到朋友圈
		share(){
			let _this =this;
			var params = {
				"url":window.location.href
			};
			var shareParams = {
				title : '圣诞月活动iPhone X等你来拿～',
				desc: "圣诞月活动iPhone X等你来拿～",
				link: window.location.href,
				imgUrl: Env.link.index+"/static/img/zilogo.png",
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
				    	},
				    	cancel: function () {
				    	}
				    });
				});
			})
			.catch(error => {
			})
		},
	},
	mounted(){
		this.getActiveInfo();
		this.share();
	}
}
</script>

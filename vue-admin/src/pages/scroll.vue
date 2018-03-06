<template>
	<div class="my-reward">
		<my-reward :money="money" :historyMoney="historyMoney" v-on:getMyMoney="getMyMoney" v-show="dataFlag"></my-reward>
		<div v-show="dataFlag">
			<div class="money-list">
				<div class="money-list-title">
					收益明细
				</div>
			</div>
			<div class="money-list-box">
				<ul v-infinite-scroll="loadMore" class="page-infinite-list">
					<li v-for="(item,index) in MyRewardList">
						<div class="money-list-item">
							<span class="money-source">
								{{item.studentName}}
							</span>
							<span class="money-name">
								{{item.comment}}
							</span>
							<span class="money-price">
								{{item.money}}
							</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 		没有数据 -->
		<no-reward v-if="!dataFlag" :kefuBanner="kefuBanner"></no-reward>
	</div>
</template>
<style lang="less">
	.my-reward{
		width: 100%;
		//收益明细
		.money-list{
			width: 100%;
			border-top: 5px solid #f7f7f7;
			.money-list-title{
				width: 100%;
				height: 50/20rem;
				padding:17/20rem 15/20rem;
				color: #353232;
				font-size: 16/20rem;
				border-bottom: 1px solid #E5E5E5;
			}
		}
		//收益列表
		.money-list-box{
			.money-list-item{
				width: 345/20rem;
				height: 50/20rem;
				margin: 0 .75rem;
				color: #8E8E8E;
				font-size: .7rem;
				line-height: 50/20rem;
				border-bottom: 1px solid #E5E5E5;
				text-align: center;
				.money-source{
					display: inline-block;
					width: 6rem;
					height: 50/20rem;
				}
				.money-name{
					display: inline-block;
					width: 175/20rem;
					height: 50/20rem;
				}
				.money-price{
					display: inline-block;
					width: 2rem;
					height: 50/20rem;
				}
			}
		}
	}
</style>
<script>
	import Vue from 'vue';
	import NoReward from '../components/noReward';
	import MyReward from '../components/myReward';
	import LivePost from '../service/live';
	import { InfiniteScroll } from 'mint-ui';
	import { Toast } from 'mint-ui';
	Vue.use(InfiniteScroll);
	import { Indicator } from 'mint-ui';

	let loadingFlag = true;

	export default {
		data() {
			return {
	    	//返回数据
	    	dataFlag:true,
	    	curPage:1,
	    	pageSize:15,
	    	MyRewardList:[],
	    	kefuBanner:'',
	    	money:0,
	    	historyMoney:0
	    }
	},
	created(){
		loadingFlag = true;
	},
	components:{
		//组件
		NoReward,
		MyReward
	},
	methods: {
		//调用方法
        //获取列表
        loadMore(){
        	let _this =this;
        	_this.loading = loadingFlag;
        	if(loadingFlag){
        		_this.getMyReward();
        		_this.loading = false;
        		loadingFlag =false;
        	}
        },
        //获取我的奖励列表
        getMyReward(){
        	let _this =this;
        	let params ={
        		curPage:_this.curPage,
        		pageSize:_this.pageSize,
        	}
        	Indicator.open({
        		text: '加载中...',
        		spinnerType: 'fading-circle'
        	});
        	LivePost.getMyReward(params).then(res => {
        		if(res.code===200){
        			Indicator.close();
        		}
        		if(_this.curPage <= res.data.page.totalPage){
        			_this.curPage += 1;
        		}
        		loadingFlag =true;
        		_this.loading = true;
        		
        		_this.MyRewardList = _this.MyRewardList.concat(res.data.incomeinfo);
        		_this.money = res.data.store_income;
        		_this.historyMoney = res.data.drew_income;

        	})
        	.catch(error => {
        		Indicator.close();
        		if(error.data.code===400){
        			window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/myreward";
        		}else{
        			if(error.data.code===3001){
        				//没有奖励数据，显示无数据页面
        				LivePost.getKefucard().then(res => {
        					_this.kefuBanner=res.data.banner;
        				})
        				.catch(error => {

        				})
        				_this.dataFlag=false;
        			}
        			if(error.data.code===3999){
        				let instance = Toast('没有数据了');
        				setTimeout(() => {
        					instance.close();
        				}, 2000);
        			}
        		}
        	})
        },
        //点击立即提现
        getMyMoney(){
        	LivePost.drawMyMoney().then(res => {
        		wx.closeWindow();
        	})
        	.catch(error => {
        		if(error.data.code===400){
        			window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/myreward";
        		}else{
        			let instance = Toast('网络繁忙，请稍后重试，或联系客服');
        			setTimeout(() => {
        				instance.close();
        			}, 2000);
        		}
        	});
        }
    },
    mounted(){
    	
    }
}
</script>

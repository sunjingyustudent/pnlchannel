<template>
	<div class="ativeAttention">
		<img src="../assets/images/christmas/banner.png"  class="christmas-banner" />
		<!-- 未关注的用户 -->
		<div class="christmas-no-attention">
			<div class="title">
				<img src="../assets/images/christmas/title.png"  class="title-bg" />
				<span class="title-span" v-if="isEnd==0">
					扫码继续参与活动
				</span>
				<span class="title-span" v-else>
					本次活动已结束
				</span>
			</div>
			<img src="../assets/images/christmas/share.jpg"  class="qrcode" />
			<div class="attention-tip">
				<span class="attention-span" v-if="isEnd==0">
					长按关注我们
				</span>
				<span class="attention-span" v-else>
					更多精彩活动正在赶来
				</span>
				<span class="attention-span" v-if="isEnd==0">
					成为VIP微课用户即可参与抽奖!
				</span>
				<span class="attention-span" v-else>
					请长按二维码关注我们
				</span>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	//未关注用户的显示
	.ativeAttention{
		background-color: #FDE430;
		padding-bottom: 50/20rem;
		min-height: 100%;
		position: relative;
		.christmas-banner{
			width: 100%;
			vertical-align: middle;
		}
		.christmas-no-attention{
			width: 345/20rem;
			height: 267/20rem;
			background-color: #fff;
			margin:2rem .75rem 0 .75rem;
			border: 2px solid #2B2921;
			border-radius: .5rem;
			position: relative;
			padding-top: 47/20rem;
			.title{
				position: absolute;
				width: 201/20rem;
				height: 59/20rem;
				top: -1.6rem;
				left: 85/20rem;
				color: #2B2921;
				font-size: .8rem;
				.title-bg{
					width: 100%;
					height: 100%;
				}
				.title-span{
					position: absolute;
					width: 175/20rem;
					height: 30/20rem;
					bottom: 7/20rem;
					left: 0rem;
					text-align: center;
					line-height: 30/20rem;
				}
			}
			.qrcode{
				position: absolute;
				width: 118/20rem;
				height: 118/20rem;
				top: 49/20rem;
				left:227/40rem;
			}
			.attention-tip{
				width: 100%;
				position: absolute;
				height: 2rem;
				top: 175/20rem;
				.attention-span{
					display: block;
					width: 100%;
					height: 1rem;
					line-height: 1rem;
					font-size: .7rem;
					color: #2B2921;
					text-align: center;
				}
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
	//加载
	import { Indicator } from 'mint-ui';
	
	export default {
		data() {
			return {
	    	//返回数据
	    	isEnd:0,
	    }
	},
	created(){

	},
	components:{
		//组件
	},
	methods: {
		//调用方法
		
	},
	mounted(){
		this.isEnd = this.$route.params.isEnd;
	}
}
</script>

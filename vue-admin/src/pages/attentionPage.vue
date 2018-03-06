<template>
	<div class="attentionPage">
		<div class="attentionPage-top">
			<span class="top-span">您可以尝试
				<span class="top-span-light">取消关注公众号</span>
			</span>
			<span class="top-span-bottom">并重新搜索：
				<span class="top-span-light">VIP微课 关注我们修复这个问题</span>
			</span>
		</div>
		<div class="attentionPage-bottom">
			<img :src="kefuimg" alt="" class="attentionPage-bottom-img">
			<span class="attentionPage-bottom-span">
				您还可以尝试联系我们的工作人员
			</span>
		</div>
	</div>
</template>
<style lang="less" scoped>
	.attentionPage{
		.attentionPage-top{
			text-align: center;
			color: #212121;
			font-size: .75rem;
			padding-top: 18/20rem;
			height: 4rem;
			.top-span-light{
				color: #ff4646;
			}
			.top-span{
				display: block;
				height: 21/20rem;
				line-height: 21/20rem;
				margin-bottom: .4rem;
			}
			.top-span-bottom{
				font-size: 13/20rem;
			}
		}
		.attentionPage-bottom{
			border-top: .5rem solid #efefef;
			position: relative;
			text-align: center;
			.attentionPage-bottom-img{
				width: 7rem;
				height: 7rem;
				position: absolute;
				top: 8rem;
				left: 118/20rem;
			}
			.attentionPage-bottom-span{
				width: 100%;
				height: 21/20rem;
				line-height: 21/20rem;
				font-size: .75rem;
				color: #212121;
				display: block;
				position: absolute;
				top: 331/20rem;
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
	import { Indicator } from 'mint-ui';
	Vue.use(Indicator);

	export default {
		data() {
			return {
	    	//返回数据
	    	kefu:1,
	    	kefuimg:''
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
		this.kefu = Math.floor(Math.random()*4 + 1);
		this.kefuimg = Env.link.index+"/static/img/"+this.kefu+".jpeg";
	}
}
</script>

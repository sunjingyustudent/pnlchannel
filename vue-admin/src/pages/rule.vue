<template>
	<div class="rule">
		<div class="rule-title">
			<span v-if="type==1">史上最公平抽奖规则</span>
			<span v-else>感恩节活动规则</span>
		</div>
		<div class="rule-body">
			<div v-if="type==1">
				<p>
					所有完成5节课的用户每位用户会按照完成顺序得到一个数字编号，我们采用12月6日上证指数收盘点位乘以100，取所有抽iphone用户总数取余数，这个余数所对应的用户编号即可获得IPHONE X一部。
				</p>
				<p>
					举例，假设所有完成5节课用户为75人，12月6日上证指数收盘3418.34。所有抽奖用户会得到1-75的编号（若余数为0则为75号）。
				</p>
				<p>341834对75取余数，得到结果59，编号59的用户获奖。</p>
				<p>因为12月6日上证指数收盘点位是未知随机的，用户编号都提前公布发放，我们保证本次抽奖的公平公正性。</p>
				<p>11月1日-11月30日期间完成5节体验课用户我们会通知您编号以及公布参与抽奖的总用户数。您也可以直接留言咨询您的专属服务顾问。</p>
			</div>
			<div v-else>
				<p>1. 11月推荐任意一位琴童免费体验陪练课程即可平分十万元现金大奖</p>
				<p>2. 11月推荐三位琴童免费体验陪练课的用户参与体验达人奖立即获得188现金红包</p>
				<p>3. 11月推荐五位琴童免费体验陪练课程即可参与抽取IPHONE X一部</p>
				<p>4. 以上三种奖励可同时领取，第1,3种奖励12月在公众号领取</p>

				<p>5. 需要了解更多本次活动细则可以在公众号回复:“感恩”，咨询您的专属服务顾问</p>
			</div>
			
		</div>

	</div>
</template>
<style lang="less">
	.rule{
		position: relative;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(-90deg, #A564DE 0%, #5B4FED 100%);
		background-image: -webkit-linear-gradient(-90deg, #A564DE 0%, #5B4FED 100%);
		background-image: -moz-linear-gradient(-90deg, #A564DE 0%, #5B4FED 100%);
		.rule-title{
			width: 10rem;
			height: 48/20rem;
			line-height: 48/20rem;
			text-align: center;
			color: #FD6105;
			position: absolute;
			border-radius: 19/20rem;
			background-color: #fff;
			top: 14/20rem;
			left: 88.5/20rem;
			z-index: 999;
		}
		.rule-body{
			width: 345/20rem;
			height: 489/20rem;
			position: absolute;
			top: 39/20rem;
			left: 15/20rem;
			background-color: #fff;
			border-radius: 1rem;
			padding: 1rem 12/20rem;
			font-size: .7rem;
			color: #333333;
			line-height: 1rem;
			p{
				margin-bottom: 1rem;
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

	export default {
		data() {
			return {
	    	//返回数据
	    	type:0,
	    }
	},
	created(){
		this.type = this.$route.params.type;
	},
	components:{
		//组件
	},
	methods: {
		//调用方法
	},
	mounted(){

	}
}
</script>

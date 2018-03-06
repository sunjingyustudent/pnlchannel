<template>
	<div class="about-us">
		<img src="../assets/images/aboutus/banner.png" class="about-us-img" />
		<span class="tip">用我们的专业解决孩子的练琴问题</span>
		<div class="qrcode-box">
			<img src="../assets/images/aboutus/pic2.png" class="pic2" />
			<img src="../assets/images/aboutus/qrcode.jpg" class="qrcode" />
		</div>
		<img src="../assets/images/aboutus/pic3.png" class="about-us-img" />
		<span class="about-span">师资力量</span>
		<img src="../assets/images/aboutus/pic4.png" class="about-us-img" />
		<span class="about-span">专属服务</span>
		<img src="../assets/images/aboutus/pic5.png" class="about-us-img" />
		<span class="about-span Margin">VIP陪练</span>
		<div class="promise promiseMargin">
			<img src="../assets/images/aboutus/kid.png" class="promise-img" />
			<span class="promise-span">专注服务于5-16岁孩子练琴问题</span>
		</div>
		<div class="promise">
			<img src="../assets/images/aboutus/money.png" class="promise-img" />
			<span class="promise-span">三轮融资，顶级机构过亿风投</span>
		</div>
		<div class="promise">
			<img src="../assets/images/aboutus/time.png" class="promise-img" />
			<span class="promise-span">承诺课时使用无期限，退款安全有保障</span>
		</div>
		<div class="footer">
			<img src="../assets/images/aboutus/qrcode.jpg" class="qrcode" />
			<div class="footer-span">
				<span class="footer-span-item">长按关注VIP陪练</span>
				<span class="footer-span-item">30000+妈妈的共同选择</span>
			</div>
			
		</div>
	</div>
</template>
<style lang="less">
	.about-us{
		width: 100%;
		.about-us-img{
			width: 100%;
		}
		.tip{
			display: block;
			width: 100%;
			height: 22/20rem;
			line-height: 22/20rem;
			text-align: center;
			margin-top: 28/20rem;
			font-size: .8rem;
			color: #645C58;
		}
		.qrcode-box{
			position: relative;
			width: 339/20rem;
			margin:15/20rem 36/40rem 16/20rem 36/40rem;
			.pic2{
				width: 100%;
			}
			.qrcode{
				position: absolute;
				width: 75/20rem;
				height: 75/20rem;
				top: 23/20rem;
				right: 45/20rem;
			}

		}
		.about-span{
			display: block;
			width: 300/20rem;
			font-size: 1rem;
			height: 1rem;
			line-height: 1rem;
			padding-left: 4/20rem;
			border-left: 5/20rem solid #FD5E02;
			color: #FD5E02;
			margin-top: 35/20rem;
			margin-left: 18/20rem;
			margin-bottom: 1rem;
		}
		.Margin{
			margin-bottom: 35/20rem;
		}
		.promise{
			width: 100%;
			height: 41/20rem;
			margin-bottom: 9/20rem;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			padding-left: 43/20rem;
			.promise-img{
				width: 41/20rem;
				height: 41/20rem;
				margin-right: .5rem;
			}
			.promise-span{
				font-size: .7rem;
				color: #645C58;
				line-height: 41/20rem;
			}
		}
		.footer{
			width: 100%;
			height: 262/20rem;
			background-color: #FD6105;
			position: relative;
			margin-top: 44/20rem;
			.qrcode{
				width: 113/20rem;
				height: 113/20rem;
				position: absolute;
				top: 51/20rem;
				left: 131/20rem;
			}
			.footer-span{
				width: 100%;
				height: 40/20rem;
				position: absolute;
				top: 178/20rem;
				font-size: .7rem;
				color: #fff;
				text-align: center;
				.footer-span-item{
					display: block;
					width: 100%;
					height: 1rem;
					line-height: 1rem;
				}
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
		
		//用户分享
		share(){
			var params = {
				"url":window.location.href
			};
			var shareParams = {
				title : "VIP陪练，让练琴不再迷糊，真人1对1在线陪练!",
				desc: "目前已服务来自13个国家，超过3万名小朋友，赶紧来加入他们吧!",
				link: window.location.href,
				imgUrl: Env.link.index+"/static/img/bailogo.jpg",
				jsApiList:['onMenuShareAppMessage', 'onMenuShareTimeline']
			};
			//获取分享配置
			LivePost.getWxJsConfig(params)
			.then(res => {
				wxShare(res.data,shareParams);
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

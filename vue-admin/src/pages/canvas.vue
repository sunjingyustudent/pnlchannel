<template>
	<div class="share-page">
		<div v-show="!classExit" id="imgSave">
			<img src="../assets/images/haibao.jpg" class="share-page-bg">
			<img :src="headImg" class="share-page-head" id="headImg">
			<div class="share-page-info">
				<span class="share-page-name">{{studentName}}</span>
				<span class="share-page-name">向您推荐了很棒的在线课程</span>
			</div>
			<img :src="qrCodeImg" class="share-page-code">
		</div>
		<class-down v-show="classExit"></class-down>
		<div class="down-Img" @click="savePosterImg">
			保存图片
		</div>
		<div class="save-img-box" v-if="saveImgBox">
			<img :src="saveImg" class="saveImg" crossOrigin = "anonymous" id="saveImg" />
		</div>
	</div>
</template>
<style lang="less">
	.share-page{
		position: relative;
		.down-Img{
			width: 5rem;
			height: 2rem;
			border:0.1rem solid #ccc;
			color: #ccc;
			line-height: 2rem;
			position: absolute;
			bottom: 2rem;
			right: 2rem;
			z-index: 99;
			font-size: .8rem;
			text-align: center;
			border-radius: 2rem;
		}
		.save-img-box{
			width: 100%;
			position: absolute;
			top: 0;
			.saveImg{
				position: absolute;
				width: 100%;
				top: 0%;

			}

		}
		.share-page-bg{
			width: 100%;
			vertical-align:middle;
		}
		.share-page-head{
			position: absolute;
			top: 177/20rem;
			width: 3rem;
			height: 3rem;
			left: 157/20rem;
			border-radius: 3rem;
			margin-bottom: .5rem;
		}
		.share-page-info{
			width: 100%;
			height: 42/20rem;
			text-align: center;
			color: #fff;
			position: absolute;
			top: 247/20rem;
			font-size: 14/20rem;
			margin-bottom: 1rem;
			.share-page-name{
				display: block;
				width: 100%;
				height: 21/20rem;
				line-height: 21/20rem;
			}
		}
		.share-page-code{
			width: 155/20rem;
			height: 155/20rem;
			position: absolute;
			top: 309/20rem;
			left: 110/20rem;
		}
	}
</style>
<script>
	import Vue from 'vue';
	import html2canvas from 'html2canvas';
	import LivePost from '../service/live';
	import { Toast } from 'mint-ui';
	//加载
	import { Indicator } from 'mint-ui';
	Vue.use(Indicator);

	import classDown from '../components/classDown';

	export default {
		data() {
			return {
	    	//返回数据
	    	title:'',
	    	studentName:'',
	    	posterImg:'',
	    	headImg:'',
	    	qrCodeImg:'',
	    	classExit:false,
	    	saveImgBox:false,
	    	saveImg:'',
	    }
	},
	created(){
	},
	components:{
		//组件
		classDown
	},
	methods: {
		//调用方法
		sharePage(){
			let _this = this;
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});
			let params ={
				classid:299,
				openid:'oLVaQ1Y-B5_hXi7bZ2gOQnApvcN0',
			}
			LivePost.getSharePage(params).then(res => {
				Indicator.close();
				_this.title = res.data.courseinfo.title;
				document.title = this.title;
				_this.posterImg = res.data.courseinfo.poster;
				_this.studentName = res.data.userinfo.wechat_name;
				_this.headImg = res.data.userinfo.head;
				_this.image2Base64();
				_this.qrCodeImg = res.data.qr_code;
				console.log(_this.qrCodeImg);
			})
			.catch(error => {
				Indicator.close();
				//当前课程已下架
			})
		},
		savePosterImg(){
			let _this = this;
			_this.saveImgBox = true;
			html2canvas(document.querySelector("#imgSave")).then(canvas => {
				var url = canvas.toDataURL(); 
				console.log(url);
				window.location.href = url;
				_this.saveImg = url;
			}); 
		},
		image2Base64() {
			let _this = this;
			console.log("1");
			// var img = _this.qrCodeImg;
			var img = 'http://c2.xinstatic.com/f1/20170413/1559/58ef2fe4601f1835091.png';
			var image = new Image();
			image.crossOrigin = "anonymous";
			image.src = img;
			image.onload = function(){
				console.log("2");
				_this.aa(image);
			}
		},
		aa(img){
			let _this = this;
			var canvas = document.createElement("canvas");
			canvas.width = img.width;
			canvas.height = img.height;
			var ctx = canvas.getContext("2d");
			ctx.drawImage(img, 0, 0, img.width, img.height);
			var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
			var dataURL = canvas.toDataURL("image/"+ext);
			_this.qrCodeImg = dataURL;
			console.log(dataURL);
			_this.savePosterImg();
		},
	},
	mounted(){
		this.sharePage();
	}
}
</script>

<template>
	<div class="christmasAddress">
		<img src="../assets/images/christmas/banner.png"  class="christmas-banner" />
		<!-- 收货地址 -->
		<div class="christmasAddress-area">
			<div class="title">
				<img src="../assets/images/christmas/title.png"  class="title-bg" />
				<span class="title-span">
					奖品收货信息
				</span>
			</div>
			<div class="address-item">
				<span class="item-title">
					姓名
				</span>
				<div class="item-info"> 
					<input type="text" name="" class="item-full-input" v-model="expressname" :class="{'item-info-light-put':checkEx == 1}" placeholder="收货人姓名">
				</div>
			</div>
			<div class="address-item">
				<span class="item-title">
					电话
				</span>
				<div class="item-info"> 
					<select class="item-phone-area">
						<option value="">+86</option>
					</select>
					<input type="tel" name="" class="item-phone-input" v-model="mobile" :class="{'item-info-light-put':checkEx == 2}" maxlength="11" placeholder="收货人手机号">
				</div>
			</div>
			<div class="address-item">
				<span class="item-title">
					地址
				</span>
				<div class="item-info"> 
					<select name="" class="item-full-input" id="aa" @change="valuechange" v-model="proviceValue" :class="{'item-info-light-put':checkEx == 4}">  
						<option v-for="(item,index) in Province"  >{{item}}</option> 
					</select>
				</div>
			</div>
			<div class="address-item">
				<span class="item-title">
				</span>
				<div class="item-info"> 
					<select name="" class="item-info-adress" id="bb" @change="changeCity()" :class="{'item-info-light-put':checkEx == 4}" v-model="cityValue"> 
						<option v-for="(item,index) in City">{{item}}</option> 
					</select>
					<select name="" class="item-info-adress" id="cc" :class="{'item-info-light-put':checkEx == 4}" v-model="areaValue"> 
						<option v-for="(item,index) in county"  >{{item}}</option> 
					</select>
				</div>
			</div>
			<div class="address-item">
				<span class="item-title">
				</span>
				<textarea class="item-full-address" v-model="address" :class="{'item-info-light-put':checkEx == 4}" placeholder="详细街道地址"></textarea>
			</div>
			<span class="address-tip" v-if="tips">
				*海外用户烦请填写可收货的国内地址
			</span>
			<span class="address-tip address-tip-light" v-else>
				请填写正确的 姓名／电话／省（直辖市）／城市／
				区（县）／详细地址
			</span>
		</div>
		<span class="rule-tip">
			*仅用于快递信息填写，并严格遵守相关法律法规要求，
			保障个人隐私安全。
		</span>
		<span class="submit-button" @click="submitAdress">
			<span v-if="ifFirst">
				确认提交
			</span>
			<span v-else>
				确认修改
			</span>
		</span>
		<!-- 奖品展示遮罩层 -->
		<div class="christmas-cover" v-if="giftCover">
			<div class="christmas-cover-bg">
			</div>
			<div class="cover-box">
				<div class="cover-box-title">
					<img src="../assets/images/christmas/gift-tip.png"  class="title-img" />
					<span class="title-span" v-if="ifFirst">
						填写成功
					</span>
					<span class="title-span" v-else>
						修改成功
					</span>
					<img src="../assets/images/christmas/close-reward.png"  class="close-button" @click="closeGiftCover"/>
				</div>
				<span class="reward-tip" v-if="ifFirst">
					活动结束后5个工作日内统一发放
				</span>
				<span class="reward-tip" v-else>
					奖品配送信息修改成功！
				</span>
				<img :src="giftImg"  class="cover-repackage" v-if="giftImg!=''"/>

				<span class="cover-button" @click="goMainPage">
					我知道了
				</span>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	.christmasAddress{
		background-color: #FDE430;
		padding-bottom: 50/20rem;
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
					width: 100%;
					display: block;
					// height: 22/20rem;
					line-height: 22/20rem;
					font-size: .8rem;
					text-align: center;
					margin: 2rem 0rem;
				}
				.cover-repackage{
					width: 66/20rem;
					height: 77/20rem;
					margin: 0 139.5/20rem;
				}
				.cover-button{
					width: 166/20rem;
					height: 2rem;
					margin: 30/20rem auto;
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
		.christmasAddress-area{
			width: 345/20rem;
			height: 377/20rem;
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
			.address-item{
				width: 345/20rem;
				padding:0 26/20rem;
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				margin-bottom: 15/20rem;
				.item-title{
					display: block;
					height: 100%;
					width: 56/20rem;
					text-align: left;
					font-size: .9rem;
					color: #2B2921;
				}
				input,select{
					padding-left: .5rem;
				}
				.item-info{
					-webkit-box-flex: 1;
					-webkit-flex: 1;
					flex: 1;

					height: 35/20rem;
					line-height: 35/20rem;
					display: -webkit-box;
					display: -webkit-flex;
					display: flex;
					.item-full-input{
						display: block;
						width: 100%;
						height: 100%;
						border: 2px solid #2B2921;
						border-radius: 10px;
					}
					.item-phone-area{
						display: inline-block;
						width: 4rem;
						height: 35/20rem;
						border: 2px solid #2B2921;
						border-radius: 10px 0 0 10px;
						font-size: .7rem;
						padding-left: .1rem;
					}
					.item-phone-input{
						width: 156/20rem;
						display: inline-block;
						height: 100%;
						border: 2px solid #2B2921;
						border-radius: 0 10px 10px 0;
						border-left: none;
					}
					.item-info-adress{
						width: 110/20rem;
						display: block;
						height: 100%;
						border: 2px solid #2B2921;
						border-radius:10px;
						margin-right: 1rem;
					}
					.item-info-adress:last-child{
						margin-right: 0rem;
					}
					.item-info-light-put{
						border: 2px solid #FE5E01;
					}
				}

				.item-full-address{
					width: 237/20rem;
					height: 70/20rem;
					border: 2px solid #2B2921;
					border-radius: 10px;
					padding: .5rem;
				}
				.item-info-light-put{
					border: 2px solid #FE5E01;
				}
			}

			.address-tip{
				display: block;
				height: 30/20rem;
				width: 237/20rem;
				margin-left:82/20rem;
				line-height: 15/20rem;
				text-align: center;
				font-size: .6rem;
				color: #645C58;
			}
			.address-tip-light{
				width: 270/20rem;
				margin: 0 auto;
				color: #FE5E01;
			}
		}
		.rule-tip{
			margin: 29/20rem auto;
			display: block;
			width: 309/20rem;
			height: 34/20rem;
			font-size: .6rem;
			color: #2B2921;
			letter-spacing: 0.55px;
		}
		.submit-button{
			width: 345/20rem;
			height: 44/20rem;
			line-height: 40/20rem;
			text-align: center;
			display: block;
			background-color: #FE5E01;
			border: 2px solid #2B2921;
			border-radius: 1.1rem;
			margin: 0 auto;
			color: #fff;
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
	import myaddress from '../../static/jsonData/address3.json';

	export default {
		data() {
			return {
	    	//返回数据
	    	Province:[],//省
	    	City:[],//市
	    	county:[],//城市
	    	giftCover:false,
	    	type:0,
	    	ifFirst:false,
	    	tips:true,

	    	id:0,

	    	expressname:'',
	    	mobile:'',
	    	proviceValue:'',
	    	cityValue:'',
	    	areaValue:'',
	    	address:'',
	    	giftImg:'',
	    	checkEx:0,

	    }
	},
	created(){
		
	},
	components:{
		//组件
	},
	methods: {
		//调用方法
		first(){
			let Province = Object.keys(myaddress);
			this.Province = Province;
			if(this.proviceValue == ''){
				this.proviceValue = Province[0];
			}
			
	        //市
	        let citys = Object.keys(myaddress[this.proviceValue]);
	        this.City = citys;
	        

	        if(this.cityValue == ''){
	        	this.cityValue = citys[0];
	        }

	        //区
	        let countys = Object.values(myaddress[this.proviceValue]);

	        if(this.areaValue == ''){
	        	var objCity = this.cityValue;
	        	let len = citys.length;

	        	for(var i = 0;i < len ; i++){
	        		if(citys[i] == objCity){
				        //区
				        let countys = Object.values(myaddress[this.proviceValue]);
				        this.county = countys[i];
				        this.areaValue = countys[i][0];
				    }
				}
			}else{
				var objCity = this.cityValue;
				let len = citys.length;
				for(var i = 0;i < len ; i++){
					if(citys[i] == objCity){
				        //区
				        let countys = Object.values(myaddress[this.proviceValue]);
				        this.county = countys[i];
				    }
				}
			}
		},
		valuechange(){
			this.proviceValue = document.getElementById("aa").value;
			this.cityValue = '';
			this.areaValue = '';
			this.first();
		},
		changeCity(){
			this.proviceValue = document.getElementById("aa").value;
			this.cityValue = document.getElementById("bb").value;
			this.areaValue = '';
			this.first();
		},
		//获取地址详情
		getAddressinfo(){
			let _this = this;
			LivePost.getAddressinfos().then(res => {
				_this.id = res.data.id;
				_this.expressname = res.data.expressname;
				_this.mobile = res.data.mobile;
				_this.proviceValue = res.data.province;
				_this.cityValue = res.data.city;
				_this.areaValue = res.data.area;
				_this.address = res.data.address;
				_this.first();
			})
			.catch(error => {
				_this.first();
			});
		},
		//新增或修改地址详情
		submitAdress(){
			let _this = this;
			_this.checkEx = 0;

			if(_this.expressname.trim() == ""){
				_this.tips = false;
				_this.checkEx = 1;
				return ;
			}
			
			let reg = /^\d{11}$/;
			if(_this.mobile.trim() == "" || !reg.test(_this.mobile)){
				_this.tips = false;
				_this.checkEx = 2;
				return ;
			}


			_this.proviceValue = document.getElementById("aa").value;
			_this.cityValue = document.getElementById("bb").value;
			_this.areaValue = document.getElementById("cc").value;

			if(_this.proviceValue == '省(直辖市)' || _this.cityValue == '城市' || _this.areaValue == '区(县)' || _this.address.trim() == ""){
				_this.tips = false;
				_this.checkEx = 4;
				return ;
			}
			
			let params ={
				id:_this.id,
				expressname:_this.expressname,
				mobile:_this.mobile,
				province:_this.proviceValue,
				city:_this.cityValue,
				area:_this.areaValue,
				address:_this.address
			}
			LivePost.submitAddress(params).then(res => {
				_this.type = 0;
				_this.giftCover = true;
				_this.id = res.data.id;
			})
			.catch(error => {
				if(error.data.code===400){
					window.location.href = APIMSG.weixapi+APIMSG.wxUrl+"/christmas";
				}
				if(error.data.code===3012){
					let instance = Toast('地址填写不完全');
					setTimeout(() => {
						instance.close();
					}, 2000);
				}
				if(error.data.code===3013){
					let instance = Toast('圣诞节活动已结束');
					setTimeout(() => {
						instance.close();
					}, 2000);
				}

			});
		},
		closeGiftCover(){
			let _this = this;
			_this.giftCover = false;
		},
		goMainPage(){
			// this.$router.push('/christmas');
			window.location.href = APIMSG.weixapi+APIMSG.wxUrl+"/christmas";
		},
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
		}
	},
	mounted(){
		this.getAddressinfo();
		this.share();
		
		this.type = this.$route.params.type;
		console.log(this.type);
		if(this.type == 1){
			this.giftImg = '/static/img/iphone-gift.png';
		}
		if(this.type == 2){
			this.giftImg = '/static/img/note-gift.png';
		}
		if(this.type == 3){
			this.giftImg = '/static/img/sack-gift.png';
		}
		if(this.type != 0){
			this.ifFirst = true;
		}
	}
}
</script>

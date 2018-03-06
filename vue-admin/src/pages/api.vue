<template>
	<div class="api">
		<div class="api-url">
			<span>接口地址：</span>
			<input type="text" class="api-url-text" v-model="apiUrl"/>
		</div>
		<div class="api-type">
			<span class="type-item">
				<input type="radio" name="type" value="1" v-model="checkedValue">get
			</span>
			<span class="type-item">
				<input type="radio" name="type" value="2" v-model="checkedValue">post
			</span>
		</div>
		<div class="addbox">
			<img src="../assets/images/add.png" class="addPar" @click="addPar"/>
			<img src="../assets/images/cut.png" class="addPar cut" @click="cutPar"/>
		</div>
		<div class="Par-box">
			<div class="Par-item" v-for="(item,index) in ParList">
				<span class="Par-item-span">
					<input  type="text" class="ParamsInput" v-model="item.key" />
				</span>
				<span class="Par-item-span-splid">:</span>
				<span class="Par-item-span">
					<input  type="text" class="ParamsInput" v-model="item.value"/>
				</span>
			</div>
		</div>
		<div class="submit-button" @click="submitButton">
			获取
		</div>
		<div class="api-data">
			<textarea class="dataTextarea">

			</textarea> 
		</div>
	</div>
</template>
<style lang="less" scoped>
	.api{
		position: relative;
		width: 375/20rem;
		padding: 2rem 1rem;
		.api-url{
			width: 100%;
			.api-url-text{
				width: 100%;
				height: 2rem;
				line-height: 2rem;
				border:2px solid #eee;
				margin-bottom: 1rem;
			}
		}
		.api-type{
			width: 100%;
			height: 30/20rem;
			line-height: 30/20rem;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			text-align: center;
			margin-bottom: 1rem;
			.type-item{
				-webkit-box-flex: 1;
				-webkit-flex: 1;
				flex: 1;
			}
		}
		.addbox{
			width: 100%;
			position: relative;
			.addPar{
				width: 1rem;
				height: 1rem;
			}
			.cut{
				position: absolute;
				right: 0;
			}
		}
		.Par-box{
			width: 100%;
			.Par-item{
				width: 100%;
				height: 2rem;
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				margin-bottom: .5rem;
				.Par-item-span-splid{
					width: 2rem;
					height: 2rem;
					line-height: 2rem;
					text-align: center;
				}
				.Par-item-span{
					position: relative;
					height: 2rem;
					border: 0.1rem solid #ccc;
					-webkit-box-flex: 1;
					-webkit-flex: 1;
					flex: 1;
					line-height: 2rem;
					.ParamsInput{
						position: absolute;
						top: 0;
						width: 100%;
						height: 1.8rem;
					}
				}
			}
		}
		.submit-button{
			width: 100/20rem;
			height: 2rem;
			margin:1rem auto;
			border:0.1rem solid green;
			border-radius: 1rem;
			text-align: center;
			line-height: 2rem;
			color: green;
		}
		.api-data{
			width: 100%;
			height: 15rem;
			background-color: #fff;
			border: 0.2rem solid #999;
			overflow: scroll;
			z-index: 999;
			.dataTextarea{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
<script>
	import Vue from 'vue';
	import axios from 'axios';
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
	    	ParList:[
	    	
	    	],
	    	apiUrl:'',//apiurl
	    	checkedValue:1,


	    }
	},
	created(){
	},
	components:{
		//组件
	},
	methods: {
		//调用方法
		addPar(){
			console.log("添加参数");
			let _this = this;
			let item = [
			{key:'',value:''}
			];
			_this.ParList  = _this.ParList.concat(item);	
		},
		//减少参数
		cutPar(){
			let _this = this;
			let length = _this.ParList.length;
			if(length>=1){
				_this.ParList.splice(length-1,length);
			}else{
				let instance = Toast('已经全部清除参数');
				setTimeout(() => {
					instance.close();
				}, 2000);
			}
		},
		//提交数据
		submitButton(){
			let _this = this;
			_this.apiUrl = _this.apiUrl.trim();

			var student = new Object(); 
			for(let i = 0;i<_this.ParList.length;i++){
				student[_this.ParList[i].key.trim()] = _this.ParList[i].value.trim();
			}
			var params = JSON.stringify(student); 
			let url = "http://channelwx-test.pnlyy.com/"+_this.apiUrl;
			if(_this.checkedValue == 1){
				console.log("!");
				axios.get(url,params)
				.then(function(res){
					console.log(res);
				})
				.catch(function(error){
					console.log(error);
					if(error.data.code==400){
						window.location.href = APIMSG.weixapi+APIMSG.wxUrl+"/api";
					}else{
						console.log(error);
					}
				})
			}else{
				console.log("!222");
				axios.post(url,params)
				.then(function(res){
					console.log(res);
				})
				.catch(function(error){
					if(error.data.code==400){
						window.location.href =APIMSG.weixapi+APIMSG.wxUrl+"/api";
					}else{
						console.log(error);
					}
				})
			}
		}
	},
	mounted(){
		
	}
}
</script>

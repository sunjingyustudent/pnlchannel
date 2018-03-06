<template>
	<div class="inter-class">
		<div class="inter-class-tip">
			火速赶往听课中
		</div>
		<img src="../assets/icon/inter-class.gif" alt="" class="inter-class-img">
	</div>
</template>
<style lang="less">
	.inter-class{
		width: 375/20rem;
		height: 100%;
		background-color: #F6F6F6;
		position: relative;
		.inter-class-tip{
			letter-spacing: 2px;
			width: 100%;
			height: 1rem;
			text-align: center;
			line-height: 1rem;
			font-size: .7rem;
			color: #645C58;
			position: absolute;
			top: 164/20rem;
		}
		.inter-class-img{
			width: 182/20rem;
			height: 3rem;
			position: absolute;
			left: 193/40rem;
			top: 211/20rem;
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

	export default {
		data() {
			return {
	    	//返回数据
	    	
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

	}
}
</script>

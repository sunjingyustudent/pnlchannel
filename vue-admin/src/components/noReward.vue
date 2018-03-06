<template>
	<div class="no-my-reward">
		<img src="../assets/images/my-reward-title.png" alt="" class="no-reward-img" v-if="type==1">
		<img src="../assets/images/norecommend1.png" alt="" class="no-reward-img" v-else>
		<img src="../assets/images/about_us.png" alt="" class="no-reward-img" @click="aboutUs()">
		<img src="../assets/images/extend.png" alt="" class="no-reward-img" @click="tuiguang()">
		<img :src="kefuBanner" alt="" class="no-reward-img" v-if="kefuBanner!=''">
	</div>
</template>
<style lang="less">
	.no-my-reward{
		width: 100%;
		.no-reward-img{
			width: 100%;
		}
	}
</style>
<script> 
	import livePost from '../service/live';
	export default {
		props:['kefuBanner','type'],
		data () {
			return {
			}
		},
		created(){
		},
		methods:{
			aboutUs(){
				let _this = this;
				_this.$router.push('/aboutUs');
			},
			tuiguang(){
               window.location.href = APIMSG.api+"/introduce/extend";
			}
		}
	}
</script>
<template>
	<div class="myCourse-noData" v-if="true">
		<img src="../assets/images/nodata.png" alt="" class="myCourse-noData-img">
		<div class="myCourse-noData-span">
			<span>
				暂无数据
			</span>
		</div>
	</div>
</template>
<style lang="less">
	.myCourse-noData{
		position: absolute;
		width: 100%;
		height: 100%;
		text-align: center;
		.myCourse-noData-img{
			position: absolute;
			width: 40%;
			height: 20%;
			top: 30%;
			left: 30%;
		}
		.myCourse-noData-span{
			position: absolute;
			top: 55%;
			line-height: 1rem;
			height: 1rem;
			font-size: 0.7rem;
			width: 100%;
		}
	}
</style>
<template>
	<div class="my-recently">
		<ul>
			<li v-for="(item,index) in myRecently">
				<div class="my-recently-item" @click="interClass(item)">
					<div class="my-recently-item-box">
						<div class="my-recently-item-icon">
							<img src="item.icon"  :src="item.icon" alt="" class="my-recently-item-icon-img">
						</div>
						<div class="my-recently-item-classinfo">
							<div class="my-recently-item-classinfo-title">
								{{item.title}}
							</div>
							<div class="my-recently-item-classinfo-speak">
								主讲人：{{item.teacher_name}}
							</div>
							<div class="my-recently-item-classinfo-time">
								<img src="../assets/icon/time.png" alt="" class="recently-item-time-icon">
								{{item.class_time}}
								<img src="../assets/icon/personnum.png" alt="" class="recently-item-time-icon">
								{{item.counts}}人
							</div>

							<div class="book-button" v-if="item.is_back == 0">
								已预约
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<style lang="less">
	.my-recently-item{
		height: 5rem;
		padding: 0rem 0.75rem;
		position:relative;

		.my-recently-item-box{
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			height: 5rem;
			border-bottom: 0.5px solid #dfdfdf;
			padding: .6rem 0rem;
			.my-recently-item-icon{
				width: 3.75rem;
				height: 3.8rem;
				padding: .4rem .75rem .4rem 0rem;
				border-radius: .5rem;
				.my-recently-item-icon-img{
					width: 3rem;
					height: 3rem;
					border-radius: .5rem;
				}
			}
			.my-recently-item-classinfo{
				-webkit-box-flex: 1;
				-webkit-flex: 1;
				flex: 1;
				height: 3.8rem;
				// position:relative;
				.my-recently-item-classinfo-title{
					height: 1.8rem;
					font-size: 0.65rem;
				}
				.my-recently-item-classinfo-speak{
					height: 1.4rem;
					font-size: 0.6rem;
					line-height: 1.4rem;
				}
				.my-recently-item-classinfo-time{
					height: .6rem;
					font-size: .5rem;
					line-height: .6rem;
					.recently-item-time-icon{
						width: .6rem;
						height: .6rem;
						vertical-align: middle;
						margin-right: .05rem;
					}

				}
				.book-button{
					width: 2.5rem;
					height: 1.25rem;
					position: absolute;
					right: .5rem;
					top: 2.25rem;
					border: 1px solid #FF4646;
					border-radius: .1rem;
					line-height: 1.25rem;
					z-index: 100;
					font-size: .6rem;
					text-align: center;
					color: #ff4646;
				}
			}
		}
	}
	li:last-child .my-recently-item-box{
		border-bottom: 0;
	}
</style>
<script> 
	import livePost from '../service/live';
	export default {
		props:['myRecently','myRecently'],
		data () {
			return {

			}
		},
		created(){

		},
		methods:{
			interClass(item){
				let _this = this;
				_this.$router.push('/liveshow/'+item.id+"?type=5");

			}
		}
	}
</script> 

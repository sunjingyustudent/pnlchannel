<template>
	<div class="no-exclass">
		<ul v-infinite-scroll="loadMore">
			<li>
				<div class="exclass-item">
					<span class="exclass-item-span">
						学生姓名
					</span>
					<span class="exclass-item-span">
						手机号
					</span>
					<span class="exclass-item-span">
						关注时间
					</span>
				</div>
			</li>
			<li v-for="(item,index) in noExClassList">
				<div class="exclass-item">
					<span class="exclass-item-span">
						{{item.name}}
					</span>
					<span class="exclass-item-span">
						{{item.mobile}}
					</span>
					<span class="exclass-item-span">
						{{item.subscribe_time}}
					</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<style lang="less">
	.no-exclass{
		li:first-child .exclass-item{
			color: #353232;
			background-color: #ff4646;
		}
		.exclass-item{
			width: 100%;
			height: 2.5rem;
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			border-bottom: 1px solid #E5E5E5;
			.exclass-item-span{
				line-height: 2.5rem;
				font-size: .7rem;
				text-align: center;
				display: inline-block;
				-webkit-box-flex: 1;
				-webkit-flex: 1;
				flex: 1;
			}
		}
	}
</style>
<script>
	import Vue from 'vue';
	import LivePost from '../service/live';
	import { Toast } from 'mint-ui';
	// Vue.use(Toast);
	//加载
	import { Indicator } from 'mint-ui';
	Vue.use(Indicator);
	import { InfiniteScroll } from 'mint-ui';
	Vue.use(InfiniteScroll);

	let loadingFlag = true;
	export default {
		data() {
			return {
	    	//返回数据
	    	noExClassList:[],
	    	curPage:1,//当前页码
		    pageSize:15,//每页数据个数
		    studentName:this.$route.params.studentName||'',
		    startTime:this.$route.params.startTime||0,
		    endTime:this.$route.params.endTime||0
		}
	},
	created(){
		this.curPage = 1;
		loadingFlag = true;
	},
	components:{
		//组件	
	},
	methods: {
		//调用方法
		loadMore(){
			let _this =this;
			_this.loading = loadingFlag;
			if(loadingFlag){
				_this.getNoExStudent();
				_this.loading = false;
				loadingFlag =false;
			}
		},
		getNoExStudent(){
			let _this = this;
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});

			let params ={
				curPage:_this.curPage,
				pageSize:_this.pageSize,
				studentName:_this.studentName,
				startTime:_this.startTime,
				endTime:_this.endTime
			}
			LivePost.getNoExList(params).then(res => {
				Indicator.close();
				loadingFlag =true;
				_this.loading = true;
				_this.curPage +=1;
				_this.noExClassList = _this.noExClassList.concat(res.data.studentinfo);
			})
			.catch(error => {
				Indicator.close();
				//授权
				if(error.data.code===400){
					window.location.href = APIMSG.weixapi+APIMSG.wxUrl+"/noExclass";
				}
				//没有学生
				if(error.data.code===3001){
					let instance = Toast('当前时间段没有未完成体验课的学生');
					setTimeout(() => {
						instance.close();
					}, 2000);
				}
				//没有数据了
				if(error.data.code===3999){
					_this.curPage -=1;
					let instance = Toast('没有数据了');
					setTimeout(() => {
						instance.close();
					}, 2000);
				}
			})
		},
	},
	mounted(){
	}
}
</script>

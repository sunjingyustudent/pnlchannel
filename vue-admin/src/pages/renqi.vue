<template>
	<div class="renqi-box">
		<!-- 	    人气列表 -->
		<div class="renqi-haveData" v-show="!nodata">
			<div class="renqi-title">
				<img src="../assets/icon/fire.png" alt="" class="renqi-num-icon">
				<span class="renqi-num-span">{{counts}}人</span>
			</div>
			<div class="renqi-list">
				<ul v-infinite-scroll="loadMore">
					<li v-for="(item,index) in RenqiList">
						<div class="renqi-item">
							<img :src="item.head" alt="" class="renqi-icon">
							<div class="renqi-name" v-if="item.wechat_name!=''">
								{{item.wechat_name}}
							</div>
							<div class="renqi-name" v-else>
								匿名者
							</div>

							<div class="renqi-share-time">
								{{item.share_time}}前
							</div>
							<div class="renqi-share-control">
								订阅了课程
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 		暂无数据 -->
		<no-data v-if="nodata"></no-data>
	</div>
</template>
<style lang="less">
	.renqi-box{
		width: 100%;
		.renqi-title{
			width: 100%;
			height: 35/20rem;
			line-height: 35/20rem;
			font-size: .7rem;
			text-align: center;
			color: #5F5C5C;
			border-bottom: 1px solid #efefef;
			.renqi-num-icon{
				width: 12/20rem;
				height: 14/20rem;
				vertical-align: middle;
				margin-right: .5rem;
			}
		}
		.renqi-list{
			width: 100%;
			.renqi-item{
				width: 345/20rem;
				height: 50/20rem;
				line-height: 50/20rem;
				margin:0 15/20rem;
				border-bottom: 1px solid #E5E5E5;
				position: relative;
				.renqi-icon{
					width: 1.5rem;
					height: 1.5rem;
					vertical-align: middle;
					border-radius: .75rem;
				}
				.renqi-name{
					width: 130/20rem;
					height: 50/20rem;
					margin: 0 .5rem 0 .5rem;
					display: inline-block;
					font-size: .7rem;
					color: #5F5C5C;
					// overflow: hidden; /*自动隐藏文字*/
					text-overflow: ellipsis;/*文字隐藏后添加省略号*/
					white-space: nowrap;/*强制不换行*/
				}
				.renqi-share-time{
					display: inline-block;
					width: 60/20rem;
					font-size: .6rem;
					color: #5F5C5C;
					margin-right: .5rem;
				}
				.renqi-share-control{
					position: absolute;
					right:0;
					display: inline-block;
					width: 65/20rem;
					font-size: .6rem;
					color: #5F5C5C;
				}
			}
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
	import NoData from '../components/noData';

	let loadingFlag = true;
	export default {
		data() {
			return {
	    	//返回数据
	    	curPage:1,
	    	pageSize:15,
	    	RenqiList:[],
	    	nodata:false,
	    	counts:0,
	    }
	},
	created(){
		loadingFlag = true;
	},
	components:{
		//组件
		NoData
	},
	methods: {
		//调用方法
		//获取列表
		loadMore(){
			let _this =this;
			_this.loading = loadingFlag;
			if(loadingFlag){
				_this.getRenqi();
				_this.loading = false;
				loadingFlag =false;
			}
		},
		getRenqi(){
			let _this =this;
			let params ={
				curPage:_this.curPage,
				pageSize:_this.pageSize,
				classid:_this.$route.params.classid,
			}
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});
			LivePost.getClassRenqi(params).then(res => {
				if(res.code===200){
					Indicator.close();
				}
				if(_this.curPage <= res.data.page.totalPage){
					_this.curPage += 1;
				}
				loadingFlag =true;
				_this.loading = true;
				_this.counts = res.data.count;
				_this.RenqiList = _this.RenqiList.concat(res.data.shareinfo);
			})
			.catch(error => {
				Indicator.close();
				if(error.data.code===400){
					window.location.href =APIMSG.weixapi+APIMSG.wxUrl;
				}else{
					if(error.data.code===3001){
   						//暂无数据
   						_this.nodata=true;
   					}else{
                       //没有数据了
                       let instance = Toast('没有数据了');
                       setTimeout(() => {
                       	instance.close();
                       }, 2000);
                   }
               }
           })
		},
	},
	mounted(){

	}
}
</script>

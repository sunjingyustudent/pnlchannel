<template>
	<div class="my-student" v-infinite-scroll="loadMore">
		<!-- 学生列表 -->
		<div class="my-student-list" v-show="dataFlag">
			<ul>
				<li>
					<div class="list-item">
						<span class="title-name">学生姓名</span>
						<span class="title-name">陪练次数</span>
						<span class="title-name">最近陪练</span>
					</div>
				</li>
				<li v-for="(item,index) in myStudentList">
					<div class="list-item" @click="getStudentClasslist(item)">
						<span class="title-name">{{item.nick}}</span>
						<span class="title-name">{{item.counts}}次</span>
						<span class="title-name">{{item.time_class}}</span>
						<img src="../assets/icon/extend.png" class="title-extend">
					</div>
				</li>
			</ul>
		</div>
		<no-reward v-if="!dataFlag" :kefuBanner="kefuBanner" :type="type"></no-reward>
	</div>
</template>
<style lang="less">
	.my-student{
		width:100%;
		//我推荐的学生列表
		.my-student-list{
			width: 375/20rem;
			li:first-child .list-item{
				font-size: .8rem;
				color: #353232;
			}
			.list-item{
				height: 2.5rem;
				width: 345/20rem;
				margin: 0 .75rem;
				line-height: 2.5rem;
				color: #8E8E8E;
				font-size: .7rem;
				border-bottom: 1px solid #E5E5E5;
				position: relative;
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				.title-name{
					padding-right: .5rem;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
					display: inline-block;
					-webkit-box-flex: 1;
					-webkit-flex: 1;
					flex: 1;
				}
				.title-extend{
					width: 8/20rem;
					height: 13/20rem;
					position: absolute;
					right: 0;
					top:37/40rem;
				}
			}
		}
	}
</style>
<script>
	import Vue from 'vue';
	import LivePost from '../service/live';
	import NoReward from '../components/noReward';
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
	    	myStudentList:[],
	    	curPage:1,//当前页码
		    pageSize:15,//每页数据个数
		    dataFlag:true,
		    type:2,
		    kefuBanner:''
		}
	},
	created(){
		this.curPage = 1;
		loadingFlag = true;
	},
	components:{
		//组件
		NoReward	
	},
	methods: {
		//调用方法
		//获取学生陪练课情况
		loadMore(){
			let _this =this;
			_this.loading = loadingFlag;
			if(loadingFlag){
				_this.getMyStudent();
				_this.loading = false;
				loadingFlag =false;
			}
		},
		getMyStudent(){
			let _this = this;
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});

			let params ={
				curPage:_this.curPage,
				pageSize:_this.pageSize,
			}
			LivePost.getMyStudent(params).then(res => {
				loadingFlag =true;
				_this.loading = true;
				Indicator.close();
				_this.curPage +=1;
				_this.myStudentList = _this.myStudentList.concat(res.data.classinfo);
			})
			.catch(error => {
				Indicator.close();
				//授权
				if(error.data.code===400){
					window.location.href = APIMSG.weixapi+APIMSG.wxUrl+"/myStudent";
				}
				//没有学生
				if(error.data.code===3001){
					_this.dataFlag = false;
					LivePost.getKefucard().then(res => {
						_this.kefuBanner=res.data.banner;
					})
					.catch(error => {
					})
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
		getStudentClasslist(item){
			let _this = this;
			_this.$router.push('/studentDetail/'+item.student_id);
		}
	},
	mounted(){
		
	}
}
</script>

/**/ 
import httpRequest from '../api/http'

const CLASS_POST = {
	//获取课程分类
	getClassify:function(params){
		return httpRequest("get", "/api/course/get-classify", params)
	},
	//获取我的课程
	getMyCourse:function(params){
		return httpRequest("get", "/api/course/my-course-list", params)
	},
	//获取最近直播课列表
	getCourseList:function(params){
		return httpRequest("get", "/api/course/get-course-list", params)
	},
	//获取用户客服名片
	getKefucard:function(params){
		return httpRequest("get", "/api/about/us", params)
	},
	//获取微信配置
	getWxJsConfig:function(params){
		return httpRequest("get", "/api/other/jsconfig", params)
	},
	//获取我的奖励列表
	getMyReward:function(params){
		return httpRequest("get", "/api/user/get-my-harvest", params)
	},
	//直播详情页面
	getClassShow:function(params){
		return httpRequest("get", "/api/course/show-live-detail", params)
	},
	//获取直播课人气
	getClassRenqi:function(params){
		return httpRequest("get", "/api/course/get-share-list", params)
	},
	//添加分享记录
	addShareRecord:function(params){
		return httpRequest("post", "/api/course/share-course", params)
	},
	//立即体现
	drawMyMoney:function(params){
		return httpRequest("post", "/api/user/draw-my-money", params)
	},
	//获取客服名片
	getKefuqQrcode:function(params){
		return httpRequest("get", "/api/other/get-kefuqrcode", params)
	},
	//月月奖不停
	getMyActive:function(params){
		return httpRequest("get", "/api/user/month-month-active", params)
	},
	//月月奖不停，获取活动红包
	getActiveRedPackage:function(params){
		return httpRequest("post", "/api/user/get-task-reward", params)
	},
	//我要推荐
	getRecommend:function(params){
		return httpRequest("get", "/api/user/go-recommend", params)
	},
	//分享页面
	getSharePage:function(params){
		return httpRequest("post", "/api/other/share-page", params)
	},
	//获取我推荐的学生
	getMyStudent:function(params){
		return httpRequest("get", "/api/user/all-student-class", params)
	},
	//获取我学生的陪练情况
	getStudentClassList:function(params){
		return httpRequest("get", "/api/user/student-self-class", params)
	},
	//添加意见反馈
	addFeedBack:function(params){
		return httpRequest("post", "/api/user/add-channel-feedback", params)
	},
	//获取未上体验课名单
	getNoExList:function(params){
		return httpRequest("get", "/api/user/student-not-experience", params)
	},
	//进荔枝微课数据汇总
	addInterRecord:function(params){
		return httpRequest("post", "/api/other/add-course-into-statistics", params)
	},
	//获取感恩节活动
	getThanksgivingActive:function(params){
		return httpRequest("get", "/api/user/thanksgiving-day-active", params)
	},
	//获取感恩节奖励
	getThanksgivingAward:function(params){
		return httpRequest("get", "/api/user/go-thanksgiving-message", params)
	},
	//获取圣诞节活动
	getChristmas:function(params){
		return httpRequest("get", "/api/user/get-christmas-activity-info", params)
	},
	//获取圣诞节活动奖品
	getChristmasGift:function(params){
		return httpRequest("get", "/api/user/draw-christmas-gift", params)
	},
	//获取圣诞节中奖名单
	getUserList:function(params){
		return httpRequest("get", "/api/user/get-discard-info", params)
	},
	//获取地址详情
	getAddressinfos:function(params){
		return httpRequest("get", "/api/user/get-channel-address", params)
	},
	//提交地址详情
	submitAddress:function(params){
		return httpRequest("post", "/api/user/update-channel-address", params)
	},
	//添加用户课程访问统计...
	addStatistics:function(params){
		return httpRequest("post", "/api/course/add-course-into-statistics", params)
	},
	//用户个人中心
	personal:function(params){
		return httpRequest("get", "/api/user/center-info", params)
	},
	//拉老师海报
	pullTeacher:function(params){
		return httpRequest("get", "/api/user/to-finish-pull-teacher", params)
	},
	//排行榜页面
	getRanking:function(params){
		return httpRequest("get", "/api/user/task-award-list", params)
	},


	/*
	微课临时活动
	*/
	//获取年终数据
	getYearData:function(params){
		return httpRequest("get", "/api/activity/user-class-statistics-info", params)
	},
	//获取用户角色
	getUserRole:function(params){
		return httpRequest("get", "/api/activity/get-user-role", params)
	},
	//设置用户角色
	setUserRole:function(params){
		return httpRequest("get", "/api/activity/add-user-role", params)
	},
	//获取用户openid
	getOpenid:function(params){
		return httpRequest("get", "/api/activity/get-user-info", params)
	},
	//获取用户二维码
	getUserQrcode:function(params){
		return httpRequest("get", "/api/other/get-user-qrcode", params)
	},


	/*
	app活动中心
	*/
	//获取app活动中心活动列表
	getAppCenter:function(params){
		return httpRequest("get", "/api/app-activity/center", params)
	},
	//查询当前活动是否结束
	getActiveStatus:function(params){
		return httpRequest("get", "/api/app-activity/get-activity-status-one", params)
	},




}
export default CLASS_POST

/*
* 路由配置
*/
import Vue from 'vue';
import Router from 'vue-router';
import title from 'vue-wechat-title';//页面标题
Vue.use(title);
Vue.use(Router);

//路由入口
const Index = r => require.ensure([], () => r(require('../pages/index.vue')), 'Index');//入口

//近期直播页面
const Recently = r => require.ensure([], () => r(require('../pages/recently.vue')), 'Recently');

//回顾课
const Liveback = r => require.ensure([], () => r(require('../pages/liveback.vue')), 'Liveback');//入口

//我的课程页面
const MyCourse = r => require.ensure([], () => r(require('../pages/myCourse.vue')), 'MyCourse');//入口

//关于我们
const AboutUs = r => require.ensure([], () => r(require('../pages/aboutUs.vue')), 'AboutUs');//入口

//直播详情页
const LiveShow = r => require.ensure([], () => r(require('../pages/liveshow.vue')), 'LiveShow');//入口

//人气分享榜
const Renqi = r => require.ensure([], () => r(require('../pages/renqi.vue')), 'Renqi');//入口

//我的奖励
const MyReward = r => require.ensure([], () => r(require('../pages/myReward.vue')), 'MyReward');//入口

//火速进入
const InterClass = r => require.ensure([], () => r(require('../pages/interClass.vue')), 'InterClass');//入口

//月月奖不停
const MyActive = r => require.ensure([], () => r(require('../pages/myActive.vue')), 'MyActive');//入口

//微课分享页面
const SharePage = r => require.ensure([], () => r(require('../pages/sharePage.vue')), 'SharePage');//入口

//我推荐的学员
const MyStudent = r => require.ensure([], () => r(require('../pages/myStudent.vue')), 'MyStudent');//入口

//我学生的陪练单
const StudentDetail = r => require.ensure([], () => r(require('../pages/studentDetail.vue')), 'StudentDetail');//入口

//在线陪练情况
const LivePractice = r => require.ensure([], () => r(require('../pages/livePractice.vue')), 'LivePractice');//入口

//家长有话说
const ParentSpeak = r => require.ensure([], () => r(require('../pages/parentSpeak.vue')), 'ParentSpeak');//入口

//未上体验课学生名单
const NoExclass = r => require.ensure([], () => r(require('../pages/noExclass.vue')), 'NoExclass');//入口

//个人中心
const Personal = r => require.ensure([], () => r(require('../pages/personal.vue')), 'Personal');//入口

//排行榜页面
const Ranking = r => require.ensure([], () => r(require('../pages/ranking.vue')), 'Ranking');//入口

//测试用
const Api = r => require.ensure([], () => r(require('../pages/api.vue')), 'Api');//入口

//测试canvas画图
const Canvas = r => require.ensure([], () => r(require('../pages/canvas.vue')), 'Canvas');//入口


/*app活动*/
const ActiveCenter = r => require.ensure([], () => r(require('../pages/app/activeCenter.vue')), 'ActiveCenter');//入口





/*活动*/
//感恩节活动
const Thanksgiving = r => require.ensure([], () => r(require('../pages/Thanksgiving.vue')), 'Thanksgiving');//入口

//感恩节活动规则
const Rule = r => require.ensure([], () => r(require('../pages/rule.vue')), 'Rule');//入口

//动画测试页面
const Animation = r => require.ensure([], () => r(require('../pages/animation.vue')), 'Animation');//入口

//引导关注页面
const AttentionPage = r => require.ensure([], () => r(require('../pages/attentionPage.vue')), 'AttentionPage');//入口

//圣诞节
const Christmas = r => require.ensure([], () => r(require('../pages/christmas.vue')), 'Christmas');//入口

//圣诞节地址页面
const ChristmasAddress = r => require.ensure([], () => r(require('../pages/christmasAddress.vue')), 'ChristmasAddress');//入口

//圣诞节活动关注页面
const ActiveAttention= r => require.ensure([], () => r(require('../pages/activeAttention.vue')), 'ActiveAttention');//入口

//省市区 地区控件 
const City = r => require.ensure([], () => r(require('../pages/city.vue')), 'City');//入口


//公司介绍页
const Company = r => require.ensure([], () => r(require('../pages/company.vue')), 'Company');//入口

//推广计划
const Extend = r => require.ensure([], () => r(require('../pages/extend.vue')), 'Extend');//入口

//年终数据
const YearData = r => require.ensure([], () => r(require('../pages/active/yearData.vue')), 'YearData');//入口

//年终数据选择角色 
const SelectRole = r => require.ensure([], () => r(require('../pages/active/selectRole.vue')), 'SelectRole');//入口

//年终数据选愿望
const SelectWish = r => require.ensure([], () => r(require('../pages/active/selectWish.vue')), 'SelectWish');//入口

//年终数据分享页面
const ActiveShare = r => require.ensure([], () => r(require('../pages/active/activeShare.vue')), 'ActiveShare');//入口

//
const ActivePage = r => require.ensure([], () => r(require('../pages/active/activePage.vue')), 'ActivePage');//入口


//微信上传图片
const WxUploadImg = r => require.ensure([], () => r(require('../pages/wxUploadImg.vue')), 'WxUploadImg');
//微信分享
const WxShare = r => require.ensure([], () => r(require('../pages/wxShare.vue')), 'WxShare');
//微信禁止分享
const WxShareForbids = r => require.ensure([], () => r(require('../pages/wxShareForbids.vue')), 'WxShareForbids');
//微信支付
const WxPay = r => require.ensure([], () => r(require('../pages/wxPay.vue')), 'WxPay');

export default new Router({
  mode: 'history',
  routes: [
    //入口
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {
        title: 'h5组件库(vue)'
      }
    },
    {
      path: '/',
      name: 'liveback',
      component: Liveback,
      meta: {
        title: '回顾列表'
      }
    },
    {
      path: '/recently',
      name: 'recently',
      component: Recently,
      meta: {
        title: '近期直播'
      }
    },
    {
      path: '/mycourse',
      name: 'mycourse',
      component: MyCourse,
      meta: {
        title: '我的课程'
      }
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUs,
      meta: {
        title: '关于我们'
      }
    },
    {
      path: '/liveshow/:id',
      name: 'liveshow',
      component: LiveShow,
      meta: {
        title: '直播详情页'
      }
    },
    {
      path: '/renqi/:classid',
      name: 'renqi',
      component: Renqi,
      meta: {
        title: '人气分享榜'
      }
    },
    {
      path: '/myreward',
      name: 'myreward',
      component: MyReward,
      meta: {
        title: '我的奖励'
      }
    },
    {
      path: '/interClass',
      name: 'interClass',
      component: InterClass,
      meta: {
        title: '火速进入'
      }
    },
    {
      path: '/myActive',
      name: 'myActive',
      component: MyActive,
      meta: {
        title: '月月奖不停'
      }
    },
    {
      path: '/sharePage/:classid/:openid',
      name: 'SharePage',
      component: SharePage,
      meta: {
        title: '微课分享页面'
      }
    },
    {
      path: '/myStudent',
      name: 'MyStudent',
      component: MyStudent,
      meta: {
        title: '我推荐的学员'
      }
    },
    {
      path: '/studentDetail/:id',
      name: 'StudentDetail',
      component: StudentDetail,
      meta: {
        title: '我学生的陪练单'
      }
    },
    {
      path: '/livePractice/:kid',
      name: 'LivePractice',
      component: LivePractice,
      meta: {
        title: '在线陪练情况'
      }
    },
    {
      path: '/parentSpeak/:kid',
      name: 'ParentSpeak',
      component: ParentSpeak,
      meta: {
        title: '家长有话说'
      }
    },
    {
      path: '/noExclass/:studentName/:startTime/:endTime',
      name: 'NoExclass',
      component: NoExclass,
      meta: {
        title: '未上体验课学生名单'
      }
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal,
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/api',
      name: 'Api',
      component: Api,
      meta: {
        title: '测试用 - 测api'
      }
    },
    {
      path: '/canvas',
      name: 'Canvas',
      component: Canvas,
      meta: {
        title: 'Canvas'
      }
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking,
      meta: {
        title: '本月排行榜'
      }
    },
    {
      path: '/Thanksgiving',
      name: 'Thanksgiving',
      component: Thanksgiving,
      meta: {
        title: '感恩节活动'
      }
    },
    {
      path: '/animation',
      name: 'Animation',
      component: Animation,
      meta: {
        title: '动画测试页面'
      }
    },
    {
      path: '/rule/:type',
      name: 'rule',
      component: Rule,
      meta: {
        title: '感恩节活动'
      }
    },
    {
      path: '/attentionPage',
      name: 'AttentionPage',
      component: AttentionPage,
      meta: {
        title: '引导关注页面'
      }
    },
    {
      path: '/company/:id',
      name: 'Company',
      component: Company,
      meta: {
        title: '公司介绍页'
      }
    },
    {
      path: '/extend',
      name: 'Extend',
      component: Extend,
      meta: {
        title: '推广计划'
      }
    },
    {
      path: '/christmas',
      name: 'Christmas',
      component: Christmas,
      meta: {
        title: '圣诞节活动'
      }
    },
    {
      path: '/christmasAddress/:type',
      name: 'ChristmasAddress',
      component: ChristmasAddress,
      meta: {
        title: '圣诞节活动地址'
      }
    },
    {
      path: '/city',
      name: 'City',
      component: City,
      meta: {
        title: '地区控件'
      }
    },
    {
      path: '/activeAttention/:isEnd',
      name: 'ActiveAttention',
      component: ActiveAttention,
      meta: {
        title: '圣诞节活动'
      }
    },
    {
      path: '/yearData',
      name: 'YearData',
      component: YearData,
      meta: {
        title: 'VIP微课年度成绩单'
      }
    },
    {
      path: '/selectRole',
      name: 'SelectRole',
      component: SelectRole,
      meta: {
        title: 'VIP微课年度成绩单'
      }
    },
    {
      path: '/selectWish/:type',
      name: 'SelectWish',
      component: SelectWish,
      meta: {
        title: 'VIP微课年度成绩单'
      }
    },
    {
      path: '/activeShare/:role/:num',
      name: 'ActiveShare',
      component: ActiveShare,
      meta: {
        title: 'VIP微课年度成绩单'
      }
    },
    {
      path: '/activePage/:role/:num/:openid',
      name: 'ActivePage',
      component: ActivePage,
      meta: {
        title: 'VIP微课年度成绩单'
      }
    },
    {
      path: '/activeCenter',
      name: 'ActiveCenter',
      component: ActiveCenter,
      meta: {
        title: '活动中心'
      }
    },
    //微信上传图片
    {
      path: '/wxUploadImg',
      name: 'wxUploadImg',
      component: WxUploadImg,
      meta: {
        title: '微信api-上传图片'
      }
    },
    //微信分享
    {
      path: '/wxShare',
      name: 'wxShare',
      component: WxShare,
      meta: {
        title: '微信api-分享'
      }
    },
    //微信禁止分享
    {
      path: '/wxShareForbids',
      name: 'wxShareForbids',
      component: WxShareForbids,
      meta: {
        title: '微信api-禁止分享'
      }
    },
    //微信支付
    {
      path: '/wxPay',
      name: 'wxPay',
      component: WxPay,
      meta: {
        title: '微信api-支付'
      }
    }
    ]
  });

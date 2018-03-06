/*
 * 环境配置
 * localhost／development／pre／production
 */
 const config = {
    // 本地环境
    localhost: {
        api: 'http://channelwx-test.pnlyy.com',//测试接口调用地址
        wxUrl:'http://192.168.10.204',//本地项目ip地址
        // weixapi:'http://channelwx-test.pnlyy.com/site/login?returnUrl=',//微信授权地址
        weixapi:'http://channelwx-test.pnlyy.com/access/login?returnUrl=',//微信授权地址
        link: {
            index: 'http://localhost:8080',
            studentUrl:'http://yii.peilian.com/',
        },
        share: {
            defaultTitle: 'VIP陪练，让练琴不再迷糊，真人1对1在线陪练', //默认分享标题
            defaultDesc: '目前已服务来自13个国家，超过3万名小朋友，赶紧来加入他们吧!', //默认分享描述
            defaultUrl: '', //默认分享地址-为空则默认获取当前地址
            defaultImg: 'http://localhost:8080'+"/static/img/sharelogo.png", //默认分享图片
            defaultApi: ['onMenuShareAppMessage', 'onMenuShareTimeline'] //默认分享渠道
        }
    },
    // DEV环境
    development: {
        api: 'http://channelwx-test.pnlyy.com',
        wxUrl:'http://webchannel.dev.pnlyy.com',
        weixapi:'http://channelwx-test.pnlyy.com/access/login?returnUrl=',//微信授权地址
        // weixapi:'http://channelwx-test.pnlyy.com/site/login?returnUrl=',
        link: {
            index: 'http://webchannel.dev.pnlyy.com',
            studentUrl:'http://yii.peilian.com/',
        },
        share: {
            defaultTitle: 'VIP陪练，让练琴不再迷糊，真人1对1在线陪练', //默认分享标题
            defaultDesc: '目前已服务来自13个国家，超过3万名小朋友，赶紧来加入他们吧!', //默认分享描述
            defaultUrl: '', //默认分享地址-为空则默认获取当前地址
            defaultImg: 'http://webchannel.dev.pnlyy.com'+"/static/img/sharelogo.png", //默认分享图片
            defaultApi: ['onMenuShareAppMessage', 'onMenuShareTimeline'] //默认分享渠道
        }
    },
    // PRE环境
    pre: {
        api: 'http://channel.pnlyy.cn',
        wxUrl:'http://webchannel.pre.pnlyy.com',
        weixapi:'http://channel.pnlyy.cn/access/login?returnUrl=',
        link: {
            index: 'http://webchannel.pre.pnlyy.com',
            studentUrl:'http://wx.peilian.com/',
        },
        share: {
            defaultTitle: 'VIP陪练，让练琴不再迷糊，真人1对1在线陪练', //默认分享标题
            defaultDesc: '目前已服务来自13个国家，超过3万名小朋友，赶紧来加入他们吧!', //默认分享描述
            defaultUrl: '', //默认分享地址-为空则默认获取当前地址
            defaultImg: 'http://webchannel.pre.pnlyy.com'+"/static/img/sharelogo.png", //默认分享图片
            defaultApi: ['onMenuShareAppMessage', 'onMenuShareTimeline'] //默认分享渠道
        }
    },
    // production环境
    production: {
        api: 'http://channel.pnlyy.cn',
        wxUrl:'http://webchannel.pnlyy.com',
        weixapi:'http://channel.pnlyy.cn/access/login?returnUrl=',
        link: {
            index: 'http://webchannel.pnlyy.com',
            studentUrl:'http://wx.peilian.com/',
        },
        share: {
            defaultTitle: 'VIP陪练，让练琴不再迷糊，真人1对1在线陪练', //默认分享标题
            defaultDesc: '目前已服务来自13个国家，超过3万名小朋友，赶紧来加入他们吧!', //默认分享描述
            defaultUrl: '', //默认分享地址-为空则默认获取当前地址
            defaultImg: 'http://webchannel.pnlyy.com'+"/static/img/sharelogo.png", //默认分享图片
            defaultApi: ['onMenuShareAppMessage', 'onMenuShareTimeline'] //默认分享渠道
        }
    }
};

//检测环境
const host = window.location.host;
if (host.indexOf('webchannel.dev.pnlyy.com') > -1) {
    global.APIMSG = config.development;
} else if (host.indexOf('webchannel.pre.pnlyy.com') > -1) {
    global.APIMSG = config.pre;
} else if (host.indexOf('webchannel.pnlyy.com') > -1) {
    global.APIMSG = config.production;
} else {
    global.APIMSG = config.localhost;
}

export default global.APIMSG
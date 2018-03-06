/*
 * axios http请求配置
 * @baseURL 请求api地址
 * @headers 头文件设置
 * @timeout 超时时间
 */
 import Vue from 'vue';
 import Axios from 'axios';
 import Qs from 'qs';
 import { Toast } from 'mint-ui';
 import Env from './env';
 import Tips from './tips';
 Vue.component(Toast.name, Toast);

 Axios.defaults.timeout = 10000;
 Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
Axios.defaults.baseURL = Env.api || "http://localhost:8080"; //当前环境地址

//POST传参序列化
Axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = Qs.stringify(config.data);
    }
    return config;
}, (error) => {
    Toast(Tips.request.errorData);
    return Promise.reject(error);
});

//code状态码200判断
Axios.interceptors.response.use((res) => {
    if (res.data.code !== 200) {
        //Toast(res.data.msg);
        if (res.data.code == 401){
            //去关注页
            window.location.href = "/attentionPage";
        } else if (res.data.code == 402) {
            window.location.href = "/activeAttention/"+res.data.data.is_end; 
        } else {
            return Promise.reject(res);
        }
        
    }
    //Toast(res.data.msg);
    return res;
}, (error) => {
    Toast(Tips.request.errorNet);
    return Promise.reject(error);
});

export default Axios;

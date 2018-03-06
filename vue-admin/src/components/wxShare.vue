<template>
</template>
<script> 
  import LivePost from '../service/live';
  import Env from '../api/env';
  export default {
    data () {
      return {

      }
    },
    created(){
      // this.share();
    },
    methods:{
      share(){
        var params = {
          "url":window.location.href
        };
        LivePost.getWxJsConfig(params)
        .then(res => {
          wx.config({
            debug:false,
            appId:res.data.appId,
            timestamp:res.data.timestamp,
            nonceStr: res.data.nonceStr,
            signature: res.data.signature,
            jsApiList: shareParams.jsApiList||Env.share.defaultApi
          });
        })
        .catch(error => {
        })
      }
    }
  }
</script>  
<style>

</style>
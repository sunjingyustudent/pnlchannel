<template>
  <div class="my-reard-sp">
    <div class="my-reward-top" ref="myRewardTop">
      <div class="my-reward-money">
        <div class="left-title">
          <img src="../assets/icon/left_money.png" alt="" class="left-title-img">
          <span class="">可提现金额</span>
        </div>
        <div class="left-money">
          {{money}}
        </div>
        <div class="left-button" @click="getMyMoneys">
          立即提现
        </div>
      </div>
      <div class="my-history-reward-money">
        <div class="right-title">
          <img src="../assets/icon/right_money.png" alt="" class="right-title-img">
          <span class="">累计提现金额</span>
        </div>
        <div class="right-money">
          {{historyMoney}}
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .my-reard-sp{
    width: 100%;
    height: 5rem;
    .my-reward-top{
      width: 375/20rem;
      height: 6rem;
      padding:6/20rem 15/20rem;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      .my-reward-money{
        width: 168/20rem;
        height: 96/20rem;
        border-right: 1px solid #E5E5E5;
        .left-title{
          width: 116/20rem;
          height: 26/20rem;
          font-size: .7rem;
          color: #5F5C5C;
          line-height: 26/20rem;
          .left-title-img{
            width: 26/20rem;
            height: 26/20rem;
            vertical-align: middle;
            margin-right: .5rem;
          }
        }
        .left-money{
          width: 116/20rem;
          height: 24/20rem;
          margin: .5rem 0;
          text-align: center;
          color: #FF4F4D;
          font-size: 24/20rem;
        }
        .left-button{
          width: 116/20rem;
          height: 16/20rem;
          line-height: 16/20rem;
          text-align: center;
          font-size: 16/20rem;
          color: #56ADFF;
        }
      }
      .my-history-reward-money{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        height: 86/20rem;
        .right-title{
          width: 168/20rem;
          height: 26/20rem;
          font-size: .7rem;
          color: #5F5C5C;
          line-height: 26/20rem;
          margin-left: 1.2rem;
          .right-title-img{
            width: 26/20rem;
            height: 26/20rem;
            vertical-align: middle;
            margin: 0 .5rem;
          }
        }
        .right-money{
          width: 168/20rem;
          height: 24/20rem;
          margin-left: 1.2rem;
          text-align: center;
          color: #FF4F4D;
          margin: .5rem 0 1.2rem .5rem;
        }
      }
    }
  }
</style>
<script> 
  import livePost from '../service/live';
  export default {
    props:['money','historyMoney'],
    data () {
      return {

      }
    },
    created(){

    },
    methods:{
      getMyMoneys(){
        let _this = this;
        this.$emit('getMyMoney',1)
      }
    },
    mounted(){

    }
  }
</script>  

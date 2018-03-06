<template>
  <div class="my-reward-gift">
    <!-- 标题 -->
    <div class="my-reward-gift-title">
      <img src="../assets/images/christmas/title.png"  class="my-reward-title" />
      <span class="my-reward-gift-span">
        活动规则
      </span>
    </div>
    <div class="active-rule">
      <span class="active-rule-span">
        <span class="rule-step">
          1.
        </span>
        <span class="step-info">
          活动时间
        </span>
        <span class="step-info">
          北京时间2017年12月14日00:00-2017年12月31 日23:59分
        </span>
      </span>
      <span class="active-rule-span">
        <span class="rule-step">
          2.
        </span>
        <span class="step-info">
          所有关注「VIP微课」的用户均可参与此次活动，活动期间新关注的用户同样可以参与该活动
        </span>
      </span>
      <span class="active-rule-span">
        <span class="rule-step">
          3.
        </span>
        <span class="step-info space">
          step1.  邀请琴童关注微信公众号「VIP陪练」，并于北京时间2017年12月14日00:00-2017年12月31日23:59分期间完成体验课，即可参加抽奖活动
        </span>
        <span class="step-info space">
          step2.  每成功邀请1位琴童完成体验课，即获得活动抽奖资格，抽奖机会上不封顶，例如：活动期间小张共邀请3位琴童完成体验课获得3次抽奖机会，小李邀请10位琴童完成体验课获得10次抽奖机会
        </span>
        <span class="step-info space">
          step3.  依次点击「VIP微课」公众号下方「推广活动」—「一爱一世」即可进入抽奖页面，点击「抽奖」进行抽奖
        </span>
        <span class="step-info space">
          Tips： 抽奖机会保留5个工作日，即未使用的抽奖机会将于北京时间2018年01月05日23:59分失效
        </span>
      </span>
      <span class="active-rule-span">
        <span class="rule-step">
          4.
        </span>
        <span class="step-info space">
          奖品领取方式:
        </span>
        <span class="step-info space">
          a.  红包奖励：红包奖励将自动发放到微信账户
        </span>
        <span class="step-info space">
          b.  实物奖励：用户通过抽奖抽中实物奖励后，需在北京时间2018年01月05日23:59分前,在获奖页面填写或修改收货地址，所有实物奖励按北京时间2018年01月05日23:59分登记的最终收货地址进行发货
        </span>
        <span class="step-info space">
          c.  实物奖励将于活动结束后5个工作日内由快递形式寄出
        </span>
      </span>
      <span class="active-rule-span">
        <span class="rule-step">
          5.
        </span>
        <span class="step-info">
          活动期间原有红包奖励继续发放，不受活动影响
        </span>
      </span>
      <span class="active-rule-span">
        <span class="rule-step">
          6.
        </span>
        <span class="step-info">
          本次活动由VIP微课主办，与Apple Inc.无关。
        </span>
      </span>
    </div>
  </div>
</template>
<style lang="less">
  .my-reward-gift{
    width: 345/20rem;
    border-radius: .5rem;
    border:2px solid #000;
    margin: 0rem auto;
    position: relative;
    padding-top: 55/20rem;
    background-color: #fff;
    margin-bottom: 66/20rem;
    .my-reward-gift-title{
      position: absolute;
      width: 201/20rem;
      height: 59/20rem;
      top: -1.6rem;
      left: 85/20rem;
      .my-reward-title{
        width: 100%;
        height: 100%;
      }
      .my-reward-gift-span{
        position: absolute;
        width: 175/20rem;
        height: 30/20rem;
        bottom: 7/20rem;
        left: 0rem;
        text-align: center;
        line-height: 30/20rem;
      }
    }
    //活动规则
    .active-rule{
      width: 317/20rem;
      padding: 0rem 0rem 1rem .5rem;
      color: #645C58;
      .active-rule-span{
        width: 100%;
        display: block;
        font-size: 13/20rem;
        line-height: 16/20rem;
        margin-bottom: 1rem;
        position: relative;
        color: #645C58;
        .rule-step{
          display: block;
          width: 1rem;
          height: 16/20rem;
          position: absolute;
          top: 0;
          left: 0;
        }
        .step-info{
          display: block;
          margin-left: 1.5rem;
        }
        .space{
          margin-bottom: .5rem;
        }
      }
    }
  }

</style>
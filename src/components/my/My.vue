<template>
  <div id="my">
    <div class="title-wrapper">
      <div class="title">
        <img src="../../common/img/Login.png" alt=""><br/>
        <span>点击头像进行账号登录</span>
      </div>
    </div>
    <div class="content-wrapper">
      <ul>
        <li class="content-item" v-for="(item,index) in myArr">
          <img :src="'../../common/img/mylogo'+(index+1)+'.png'" alt="">
          <span>{{item}}</span><span class="gt">&gt</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        myArr: ['推荐看漫', '赐予评价', '意见反馈', '软件设置', '本地阅读', '联系我们']
      }
    }
  }
</script>

<style lang="less" scoped>
  #my {
    position: relative;
    .title-wrapper {
      position: relative;
      top: 0px;
      width: 100%;
      height: 200px;
      background: #FA7669;
      color: #ffffff;
      .title {
        position: relative;
        padding-top: 40px;
        text-align: center;
        img {
          height: 100px;
          width: 80px;
        }
        span {
          margin: 0 auto;

        }
      }
    }
    .content-wrapper {
      position: relative;
      ul {
        width: 100%;
        height: 100%;
        color: #656565;
        .content-item {
          line-height: 50px;
          height: 50px;
          width: 100%;
          border-bottom: 1px solid #E5E5E5;
          img {
            height: 28px;
            width: 30px;
          }
          .gt {
            float: right;
          }
        }
      }
    }
  }
</style>

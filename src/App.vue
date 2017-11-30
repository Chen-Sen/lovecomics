<template>
  <div id="app">
    <div class="tab bottom" ref="act">
      <div class="tab-item" @click="activeFn(1)">
        <router-link to="/nominate">
          <div class="img index1" :class="{'index5':imgindex === 1}"></div>
          推荐
        </router-link>
      </div>
      <div class="tab-item" @click="activeFn(2)">
        <router-link to="/stacks">
          <div class="img index2" :class="{'index6':imgindex === 2}"></div>
          书库
        </router-link>
      </div>
      <div class="tab-item" @click="activeFn(3)">
        <router-link to="/bookshelf">
          <div class="img index3 " :class="{'index7':imgindex === 3}"></div>
          书架
        </router-link>
      </div>
      <div class="tab-item" @click="activeFn(4)">
        <router-link to="/my">
          <div class="img index4" :class="{'index8':imgindex === 4}"></div>
          我的
        </router-link>
      </div>
    </div>
    <router-view :nominate="nominate"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        nominate: [],
        imgindex: 1
      }
    },
    methods: {
      activeFn (index) {
        this.imgindex = index
      }
    },
    created () {
      let self = this
      this.$axios.get('api/nominate')
        .then((response) => {
          response = response.data
          if (response.error === 0) {
            self.nominate = response.data
          }
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
</script>

<style lang="less">
  #app {
    position: relative;
    .tab {
      position: fixed;
      display: flex;
      width: 100%;
    }
    .bottom {
      height: 77px;
      bottom: 0;
      border-top: 1px solid #888;
      background-color: #fff;
    }
    .tab-item {
      position: relative;
      flex: 1;
      text-align: center;
      & > a {
        display: block;
        bottom: 25px;
        font-size: 16px;
        color: #666666;
        & > div {
          margin: 0 auto;
          margin-top: 9px;
          width: 30px;
          height: 42px;
        }
        .index1 {
          background-image: url("./common/img/logo1.jpg");
          background-size: 30px 42px;
        }
        .index2 {
          background-image: url("./common/img/logo2.jpg");
          background-size: 30px 42px;
        }
        .index3 {
          background-image: url("./common/img/logo3.jpg");
          background-size: 30px 42px;
        }
        .index4 {
          background-image: url("./common/img/logo4.jpg");
          background-size: 30px 42px;
        }
        .index5 {
          background-image: url("./common/img/logo1-1.jpg");
          background-size: 30px 42px;
        }
        .index6 {
          background-image: url("./common/img/logo2-1.jpg");
          background-size: 30px 42px;
        }
        .index7 {
          background-image: url("./common/img/logo3-1.jpg");
          background-size: 30px 42px;
        }
        .index8 {
          background-image: url("./common/img/logo4-1.jpg");
          background-size: 30px 42px;
        }
        &.active {
          color: #EB7C71;
        }
      }
    }

  }
</style>

<template>
  <div id="bookshelf">
    <div class="title-wrapper">
      <div class="title">
        <ul ref="titleul">
          <li v-for="(item,index) in bookshelfArr" class="title-item" @click="atvFn(index)"
              :class="{'active': currentIndex === index}">
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="logo">
        <span><img src="../../common/img/add.png" alt=""></span>
        <span><img src="../../common/img/des.png" alt=""></span>
      </div>
    </div>
    <div class="content-wrapper" ref="contentWrapper">
      <div class="content" ref="nenuContent">
        <ul ref="nenuContentU">
          <li class="item-hoot" v-for="(item,index) in bookshelfArr">
            <div class="content-item">
              <div class="content-comics">
                我的{{item}}
                <!--<ul>-->
                <!--<li class="comics-item" v-for="(item, index) in stack[index].data">-->
                <!--<a :href="'http://m.kanman.com/sort/'+index+'.html'">-->
                <!--<img :src="'http://image.samanlehua.com/file/kanmanhua_images/sort/'+ index+'.png'"-->
                <!--alt=""><br>-->
                <!--<span class="comic_name">{{item}}</span>-->
                <!--</a>-->
                <!--</li>-->
                <!--</ul>-->
              </div>
              <div class="item-End" v-bind:style="{height:offsetHeight + 'px',}"><span>已经没有了</span></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  export default {
    data () {
      return {
        bookshelfArr: ['收藏', '历史', '缓存'],
        currentIndex: 0,
        offsetHeight: 0,
        offsetWidth: 0,
        indexH: 0,
        listWidth: [],
        num: 0,
        oldNum: null,
        show: true
      }
    },
    methods: {
      atvFn (index) {
        var selectLi = this.$refs.nenuContent.getElementsByClassName('content-item')[index]
        this.currentIndex = index
        console.log(selectLi)
        this.menuContent.scrollToElement(selectLi, 300)
      },
      _initScrool1 () {
        for (var i = 0; i < this.$refs.nenuContentU.getElementsByClassName('item-hoot').length; i++) {
          this.menuContentL = new IScroll(this.$refs.nenuContentU.getElementsByClassName('item-hoot')[i], {
            click: true,
            scrollY: true,
            probeType: 3
          })
        }
        this.menuContent = new IScroll(this.$refs.nenuContent, {
          click: true,
          scrollX: true,
          probeType: 3
        })
        let self = this
        this.menuContent.on('scroll', function () {
          if (Math.round(this.x) <= 0) {
            self.num = Math.abs(Math.round(this.x))
          } else {
            return
          }
        })
      },
      getCurrentIndex (num) {
        let heigh1 = this.listWidth[2]
        for (let i = 0; i < this.listWidth.length - 1; i++) {
          let heighI = this.listWidth[i + 1]
          let heigh = this.listWidth[i]
          let x = 0
          if (this.currentIndex >= 4) {
            this.menuTitle.scrollTo(-76, 0, 100)
          }
          if (num < heighI && num > heigh && (i + 1) % 2 === 0) {
            this.currentIndex = (i + 1) / 2
            x = heigh1 * this.currentIndex
            this.menuContent.scrollTo(-x, 0, 300)
            return
          } else if (num < heighI && num > heigh && i % 2 === 0) {
            this.currentIndex = i / 2
            x = heigh1 * this.currentIndex
            this.menuContent.scrollTo(-x, 0, 300)
            console.log('a')
            return
          }
        }
      },
      touchendFn () {
        let self = this
        this.$refs.nenuContentU.addEventListener('touchend', function (e) {
          console.log(self.num)
          self.getCurrentIndex(self.num)
        })
      },
      indexFn () {
        for (let i = 0; i <= this.bookshelfArr.length * 2; i++) {
          this.listWidth.push(i * this.offsetWidth / 2)
        }
      }
    },
    created () {
      this.$nextTick(() => {
        console.log(1)
        this.offsetWidth = this.$refs.contentWrapper.offsetWidth
        this.offsetHeight = this.$refs.contentWrapper.offsetHeight
        this._initScrool1()
        this.touchendFn()
        this.indexFn()
      })
    }
  }
</script>

<style lang="less">
  #bookshelf {
    position: relative;
    overflow: hidden;
    .title-wrapper {
      position: fixed;
      top: 0px;
      width: 100%;
      height: 103px;
      background: #FA7669;
      .title {
        position: absolute;
        bottom: 0px;
        height: 42px;
        overflow: hidden;
        ul {
          width: 135%;
          padding-left: 23px;
          .active:after {
            display: block;
            color: #fff;
            content: "";
            width: 40px;
            height: 4px;
            background: #fff;
            border-radius: 100px;
            margin: 15px auto;
          }
          .title-item {
            padding-right: 23px;
            font-size: 20px;
            line-height: 20px;
            height: 38px;
            float: left;
            span {
              color: #FDD4D0;

            }
          }
        }
      }
      .logo {
        position: absolute;
        bottom: 0px;
        right: 20px;
        width: 100px;
        height: 41px;
        background: #FA7669;
        span {
          margin-left: 20px;
          img {
            width: 26px;
            height: 28px;
          }
        }
      }
    }
    .content-wrapper {
      position: fixed;
      top: 103px;
      width: 100%;
      bottom: 78px;
      overflow: hidden;
      .content {
        position: relative;
        overflow: hidden;
        ul {
          position: relative;
          width: 300%;
          /*height: 840px;*/
          .item-hoot {
            .content-item {
              position: relative;
              width: 33.333333333333333333333333333333333333%;
              float: left;
              .content-comics {
                position: relative;
                width: 100%;
                overflow: hidden;
                ul {
                  width: 100%;
                  text-align: center;
                  .comics-item {
                    position: relative;
                    height: 110px;
                    width: 33.333333%;
                    float: left;
                    img {
                      border-radius: 5px;
                      height: 82px;
                      border-radius: 50%;
                    }
                    .comic_name {
                      position: relative;
                      width: 107px;
                      height: 28px;
                      line-height: 28px;
                      text-align: center;
                      color: #565656;
                    }
                  }
                }

              }
              .item-End {
                position: relative;
                text-align: center;
                span{
                  position: absolute;
                  bottom: 0px;
                  color: red;
                }
              }
            }
          }

        }
      }
    }
  }

</style>

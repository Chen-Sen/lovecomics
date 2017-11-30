<template>
  <div class="substance" v-if="nominate.length">
    <comics></comics>
    <transition name="search">
      <div class="search-wrapper" v-if="show">
        <div class="search-title">
          <div class="retreat" @click="showFn">&lt</div>
          <input type="text" class="inp" value="" onclick="this.value='';focus()" placeholder="搜索漫画名"
                 v-model="searchText">
          <span class="search-logo" @click="searchShowFn"><img src="../../common/img/sousou1.png" alt=""></span>
        </div>
        <div class="search-content" v-bind:style="{height:offsetHeight + 'px'}" v-if="hotArr.length>0">
          <ul>
            <li v-for="item in hotArr" @click="diyfun(item)">
              <a :href="'http://m.kanman.com/'+item.comic_id+'/'"><span>{{item.comic_name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="search">
      <div class="search-nav" v-if="searchshow" ref="aaa">
        <div class="search-content">
          <div class="search-comics">
            <ul>
              <li v-for="time in searchTextArr" class="search-item" @click="diyfun(time.comic_name)">
                <a :href="'http://m.kanman.com/'+time.comic_id+'/'">
                  <img :src="'http://image.samanlehua.com/mh/'+time.comic_id+'.jpg'" alt="">
                  <span class="last_chapter_name">{{time.last_chapter_name}}</span>
                  <div class="comic_name">{{time.comic_name}}</div>
                </a>
              </li>
            </ul>
          </div>
          <div class="item-End" v-bind:style="{height:offsetHeight + 'px'}">已经没有了</div>
        </div>
        <div class="search-header">
          <span class="retreat" @click="retreatFn">&lt</span>
          <span class="search-text">{{searchText}}</span>
          <span class="search-option" @click="aaa">人气</span>
        </div>
      </div>
    </transition>
    <div class="title-wrapper">
      <div class="title" ref="nenuWrapper">
        <ul ref="titleul">
          <li v-for="(item,index) in nominate" class="title-item" @click="atvFn(index)"
              :class="{'active': currentIndex === index}">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="search-img" @click="showFn">
        <span><img src="../../common/img/sousuo.png" alt=""></span>
      </div>
    </div>
    <div class="content-wrapper" ref="contentWrapper">
      <div class="content" ref="nenuContent">
        <ul ref="nenuContentU">
          <li class="item-hoot">
            <div class="content-item">
              <div class="carousel">
                <ul ref="suppots0" v-if="nominate[0].slide">
                  <li class="carousel-item"
                      v-for="(item1,index) in nominate[0].slide.concat([nominate[0].slide[0]])">
                    <img :src="item1.image" alt="" ref="cimg">
                    <span class="slide_desc">{{item1.slide_desc}}</span>
                    <div class="slide_desc-index"><span
                      class="slide_desc-act">{{index + 1}}</span>\{{nominate[0].slide.length}}
                    </div>
                  </li>
                </ul>
              </div>
              <div class="content-comics">
                <ul>
                  <li class="comics-item" v-for="item1 in  nominate[0].data" @click="diyfun(item1)">
                    <a :href="'http://m.kanman.com/'+item1.comic_id+'/'">
                      <img :src="'http://image.samanlehua.com/mh/'+item1.comic_id+'.jpg'" alt="">
                      <span class="last_chapter_name">{{item1.last_chapter_name}}</span>
                      <div class="comic_name">{{item1.comic_name}}</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="item-End" v-bind:style="{height:offsetHeight + 'px'}">已经没有了</div>
            </div>
          </li>
          <li class="item-hoot">
            <div class="content-item">
              <div class="carousel">
                <ul ref="suppots1" v-if="nominate[1].slide">
                  <li class="carousel-item"
                      v-for="(item1,index) in nominate[1].slide.concat([nominate[1].slide[0]])">
                    <img :src="item1.image" alt="">
                    <span class="slide_desc">{{item1.slide_desc}}</span>
                    <div class="slide_desc-index"><span
                      class="slide_desc-act">{{index + 1}}</span>\{{nominate[1].slide.length}}
                    </div>
                  </li>
                </ul>
              </div>
              <div class="content-comics">
                <ul>
                  <li class="comics-item" v-for="item1 in  nominate[1].data" @click="diyfun(item1)">
                    <a :href="'http://m.kanman.com/'+item1.comic_id+'/'">
                      <img :src="'http://image.samanlehua.com/mh/'+item1.comic_id+'.jpg'" alt="">
                      <span class="last_chapter_name">{{item1.last_chapter_name}}</span>
                      <div class="comic_name">{{item1.comic_name}}</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="item-End" v-bind:style="{height:offsetHeight + 'px'}">已经没有了</div>
            </div>
          </li>
          <li class="item-hoot">
            <div class="content-item">
              <div class="carousel">
                <ul ref="suppots2" v-if="nominate[2].slide">
                  <li class="carousel-item"
                      v-for="(item1,index) in nominate[2].slide.concat([nominate[2].slide[0]])">
                    <img :src="item1.image" alt="">
                    <span class="slide_desc">{{item1.slide_desc}}</span>
                    <div class="slide_desc-index"><span
                      class="slide_desc-act">{{index + 1}}</span>\{{nominate[2].slide.length}}
                    </div>
                  </li>
                </ul>
              </div>
              <div class="content-comics">
                <ul>
                  <li class="comics-item" v-for="item1 in  nominate[2].data" @click="diyfun(item1)">
                    <a :href="'http://m.kanman.com/'+item1.comic_id+'/'">
                      <img :src="'http://image.samanlehua.com/mh/'+item1.comic_id+'.jpg'" alt="">
                      <span class="last_chapter_name">{{item1.last_chapter_name}}</span>
                      <div class="comic_name">{{item1.comic_name}}</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="item-End" v-bind:style="{height:offsetHeight + 'px'}">已经没有了</div>
            </div>
          </li>
          <li class="item-hoot">
            <div class="content-item">
              <div class="carousel">
                <ul ref="suppots3" v-if="nominate[3].slide">
                  <li class="carousel-item"
                      v-for="(item1,index) in nominate[3].slide.concat([nominate[3].slide[0]])">
                    <img :src="item1.image" alt="">
                    <span class="slide_desc">{{item1.slide_desc}}</span>
                    <div class="slide_desc-index"><span
                      class="slide_desc-act">{{index + 1}}</span>\{{nominate[3].slide.length}}
                    </div>
                  </li>
                </ul>
              </div>
              <div class="content-comics">
                <ul>
                  <li class="comics-item" v-for="item1 in  nominate[3].data" @click="diyfun(item1)">
                    <a :href="'http://m.kanman.com/'+item1.comic_id+'/'">
                      <img :src="'http://image.samanlehua.com/mh/'+item1.comic_id+'.jpg'" alt="">
                      <span class="last_chapter_name">{{item1.last_chapter_name}}</span>
                      <div class="comic_name">{{item1.comic_name}}</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="item-End" v-bind:style="{height:offsetHeight + 'px'}">已经没有了</div>
            </div>
          </li>
          <li class="item-hoot">
            <div class="content-item">
              <div class="carousel">
                <ul ref="suppots4" v-if="nominate[4].slide">
                  <li class="carousel-item"
                      v-for="(item1,index) in nominate[4].slide.concat([nominate[4].slide[0]])">
                    <img :src="item1.image" alt="">
                    <span class="slide_desc">{{item1.slide_desc}}</span>
                    <div class="slide_desc-index"><span
                      class="slide_desc-act">{{index + 1}}</span>\{{nominate[4].slide.length}}
                    </div>
                  </li>
                </ul>
              </div>
              <div class="content-comics">
                <ul>
                  <li class="comics-item" v-for="item1 in  nominate[4].data" @click="diyfun(item1)">
                    <a :href="'http://m.kanman.com/'+item1.comic_id+'/'">
                      <img :src="'http://image.samanlehua.com/mh/'+item1.comic_id+'.jpg'" alt="">
                      <span class="last_chapter_name">{{item1.last_chapter_name}}</span>
                      <div class="comic_name">{{item1.comic_name}}</div>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="item-End" v-bind:style="{height:offsetHeight + 'px'}">已经没有了</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import comics from '../comics/Comics.vue'
  import IScroll from 'iscroll/build/iscroll-probe'
  import {mapActions, mapMutations} from 'vuex'
  export default {
    props: {
      nominate: {
        type: Array
      }
    },
    data () {
      return {
        show: false,
        searchshow: false,
        searchText: '',
        searchTextArr: [],
        hotArr: [],
        str: '',
        arr: [],
        ind: 0,
        offsetWidth: 0,
        offsetHeight: 0,
        indexH: 0,
        currentIndex: 0,
        listWidth: [],
        num: 0,
        oldNum: null
      }
    },
    methods: {
      ...mapActions(['transitionAgain', 'startTransition', 'startTransition1', 'transitionEnd']),
      ...mapMutations(['RECEIVE_LENGTH']),
      // 搜索内容的拼音装换
      diyfun (item) {
        console.log(item)
      },
      // 搜索页的显示与隐藏
      showFn () {
        this.show = !this.show
      },
      aaa () {
        this.menuSearch = new IScroll(this.$refs.aaa, {
          click: true,
          scrollY: true,
          probeType: 3
        })
      },
      searchShowFn () {
        var arr = []
        if (this.searchText) {
          for (var i = 0; i < this.nominate.length; i++) {
            var data = this.nominate[i].data
            for (var j = 0; j < data.length; j++) {
              if (data[j].comic_name.indexOf(this.searchText) !== -1) {
                arr.push(data[j])
                arr.sort(function (a, b) {
                  return a.comic_id > b.comic_id
                })
              }
            }
          }
          for (var z = 0; z < arr.length - 1; z++) {
            if (arr[z].comic_id !== arr[z + 1].comic_id) {
              this.searchTextArr.push(arr[z])
            }
          }
          this.searchshow = !this.searchshow
        } else {
          alert('请输入漫画名')
        }
      },
      retreatFn () {
        this.searchTextArr = []
        this.searchshow = !this.searchshow
      },
      //  分类的按钮滑动
      atvFn (index) {
        var selectLi = this.$refs.nenuContent.getElementsByClassName('content-item')[index]
        this.currentIndex = index
        this.menuContent.scrollToElement(selectLi, 300)
      },
      // 页面的滑动
      _initScrool () {
        this.menuWrapper = new IScroll(this.$refs.nenuWrapper, {
          click: true,
          scrollX: true,
          probeType: 3
        })
        this.menuContent = new IScroll(this.$refs.nenuContent, {
          click: true,
          scrollX: true,
          probeType: 3
        })
        for (var i = 0; i < this.$refs.nenuContentU.getElementsByClassName('item-hoot').length; i++) {
          this.menuContentL = new IScroll(this.$refs.nenuContentU.getElementsByClassName('item-hoot')[i], {
            click: true,
            scrollY: true,
            probeType: 3
          })
        }
        let self = this
        this.menuContent.on('scroll', function () {
          console.log(Math.round(this.x))
          if (Math.round(this.x) <= 0) {
            self.num = Math.abs(Math.round(this.x))
          } else {
            return
          }
        })
      },
      // 滑动的跳转
      getCurrentIndex (num) {
        let heigh1 = this.listWidth[2]
        for (let i = 0; i < this.listWidth.length - 1; i++) {
          let heighI = this.listWidth[i + 1]
          let heigh = this.listWidth[i]
          let x = 0
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
      // 松开时执行
      touchendFn () {
        let self = this
        this.$refs.nenuContentU.addEventListener('touchend', function (e) {
          self.getCurrentIndex(self.num)
          self.activeFn(self.currentIndex)
          this.menuContent.scrollTo(0, 0, 100)
        })
      },
      // 轮播图
      activeFn (atcNum) {
        var num = 0
        if (atcNum) {
          num = atcNum
        }
        this.RECEIVE_LENGTH(this.nominate[num].slide.length)
        let objs = this.$refs['suppots' + num]
        this.startTransition({obj: objs, imgWidth: this.$refs.cimg[0].offsetWidth})
        this.transitionEnd({
          obj: objs,
          callback: () => {
            this.transitionAgain({obj: objs, modules: 'nominate'})
          }
        })
        this.oldNum = num
      },
      //  创建数据
      indexFn () {
        for (let i = 0; i < this.nominate.length; i++) {
          this.arr.push(i)
        }
        for (let j = 0; j <= this.nominate.length * 2; j++) {
          this.listWidth.push(j * this.offsetWidth / 2)
        }
        for (let z = 0; z < 10; z++) {
          this.hotArr.push(this.nominate[0].data[z])
        }
      }
    },
    watch: {
      nominate (val) {
        if (val.length > 0) {
          this.$nextTick(() => {
            this.offsetWidth = this.$refs.cimg[0].offsetWidth
            this.offsetHeight = this.$refs.contentWrapper.offsetHeight
            this.activeFn()
            this._initScrool()
            this.indexFn()
            this.touchendFn()
          })
        }
      }
    },
    created () {
      this.$nextTick(() => {
        this.offsetWidth = this.$refs.cimg[0].offsetWidth
        this.offsetHeight = this.$refs.contentWrapper.offsetHeight
        this.activeFn()
        this._initScrool()
        this.indexFn()
        this.touchendFn()
      })
    },
    components: {
      comics
    }
  }
</script>

<style lang="less">
  .substance {
    position: relative;
    overflow: hidden;
    .search-wrapper {
      position: relative;
      height: 100%;
      width: 100%;
      z-index: 20;
      transition: all 0.5s;
      transform: translate3D(0, 0, 0);
      &.search-enter, &.search-leave-active {
        opacity: 0;
        transform: translate3D(200%, 0, 0);
      }
      .search-title {
        position: relative;
        top: 0px;
        left: 20px;
        width: 100%;
        height: 103px;
        background: #FA7669;
        .retreat {
          position: absolute;
          bottom: 25px;
          width: 30px;
          height: 20px;
          border-radius: 10px;
          border: 1px solid #fff;
          color: #ffffff;
          font-size: 18px;
          text-align: center;
          line-height: 20px;
        }
        .inp {
          position: absolute;
          bottom: 20px;
          left: 45px;
          padding-left: 15px;
          width: 260px;
          height: 24px;
          font-size: 18px;
          line-height: 18px;
          color: #666;
          border-radius: 25px;
        }
        .search-logo {
          position: absolute;
          bottom: 18px;
          right: 50px;
          height: 30px;
          width: 30px;
          border-radius: 25px;
          img {
            height: 24px;
            width: 24px;
          }
        }
      }
      .search-content {
        position: relative;
        padding-top: 20px;
        padding-left: 20px;
        width: 100%;
        background-color: #fff;
        text-align: center;
        ul {
          li {
            float: left;
            height: 30px;
            line-height: 30px;
            margin-right: 23px;
            margin-bottom: 5px;
            padding: 5px;
            background-color: #FA7669;
            color: #fff;
            border-radius: 15px;
            font-size: 18px;

          }
        }
      }
    }
    .search-nav {
      position: fixed;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      z-index: 100;
      transition: all 0.5s;
      transform: translate3D(0, 0, 0);
      &.search-enter, &.search-leave-active {
        opacity: 0;
        transform: translate3D(200%, 0, 0);
      }
      .search-header {
        position: absolute;
        top: 0px;
        padding-left: 20px;
        width: 100%;
        height: 103px;
        background: #FA7669;
        .retreat {
          position: absolute;
          bottom: 25px;
          width: 30px;
          height: 20px;
          border-radius: 10px;
          border: 1px solid #fff;
          color: #ffffff;
          font-size: 18px;
          text-align: center;
          line-height: 20px;
        }
        .search-text {
          position: absolute;
          bottom: 20px;
          left: 35px;
          width: 260px;
          height: 24px;
          font-size: 24px;
          text-align: center;
          line-height: 18px;
          color: #ffffff;
        }
        .search-option {
          position: absolute;
          bottom: 30px;
          right: 40px;
          font-size: 18px;
          line-height: 18px;
          color: #ffffff;
        }
      }
      .search-content {
        position: absolute;
        top: 103px;
        width: 100%;
        background-color: #fff;
        overflow: hidden;
        .search-comics {
          position: relative;
          overflow: hidden;
          ul {
            margin-top: 20px;
            width: 100%;
            text-align: center;
            .search-item {
              position: relative;
              height: 170px;
              width: 33.333333%;
              float: left;
              img {
                border-radius: 5px;
                width: 107px;
                height: 142px;
              }
              .last_chapter_name {
                position: absolute;
                width: 91px;
                height: 12px;
                bottom: 30px;
                left: 5px;
                text-align: center;
                font-size: 12px;
                color: #fff;
                overflow: hidden;
              }
              .comic_name {
                position: relative;
                width: 107px;
                height: 28px;
                line-height: 28px;
                text-align: center;
                color: #FA7669;
              }
            }
          }
        }
        .item-End {
          text-align: center;
          line-height: 250px;
          color: #FA7669;
        }
      }
    }
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
      .search-img {
        position: absolute;
        bottom: 0px;
        right: -30px;
        width: 67px;
        height: 41px;
        background: #FA7669;
        img {
          width: 26px;
          height: 28px;
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
          width: 500%;
          .item-hoot {
            .content-item {
              position: relative;
              width: 20%;
              float: left;
              .carousel {
                position: relative;
                width: 100%;
                margin-bottom: 14px;
                overflow: hidden;
                ul {
                  position: relative;
                  width: 700%;
                  .carousel-item {
                    position: relative;
                    width: 14.2857142857%;
                    float: left;
                    img {
                      width: 100%;
                      height: 187.5px;
                    }
                    .slide_desc {
                      position: absolute;
                      padding-left: 15px;
                      text-align: left;
                      bottom: 0px;
                      line-height: 45px;
                      width: 100%;
                      height: 45px;
                      color: #fff;
                      background-color: rgba(0, 0, 0, 0.4);
                    }
                    .slide_desc-index {
                      position: absolute;
                      bottom: 0px;
                      text-align: right;
                      line-height: 45px;
                      width: 90%;
                      height: 45px;
                      color: #fff;
                      .slide_desc-act {
                        color: #1BC3AC;
                      }
                    }
                  }
                }
              }
              .content-comics {
                position: relative;
                width: 100%;
                display: inline-block;
                height: 100%;
                overflow: hidden;
                ul {
                  width: 100%;
                  text-align: center;
                  .comics-item {
                    position: relative;
                    height: 170px;
                    width: 33.333333%;
                    float: left;
                    img {
                      border-radius: 5px;
                      width: 107px;
                      height: 142px;
                    }
                    .last_chapter_name {
                      position: absolute;
                      width: 91px;
                      height: 12px;
                      bottom: 30px;
                      left: 5px;
                      text-align: center;
                      font-size: 12px;
                      color: #fff;
                      overflow: hidden;
                    }
                    .comic_name {
                      position: relative;
                      width: 107px;
                      height: 28px;
                      line-height: 28px;
                      text-align: center;
                      color: #FA7669;
                    }
                  }
                }

              }
              .item-End {
                text-align: center;
                line-height: 250px;
                color: #FA7669;
              }
            }
          }

        }
      }
    }
  }
</style>

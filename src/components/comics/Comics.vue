<template>
  <div class="comics">
    <div class="comics-header">
      <div class="retreat"><span>&lt</span>&<span></span></div>
      <div class="header-content">
        <h1 class="comic_name">{{comics.comic_name}}</h1><span class="comic_author">{{comics.comic_name}}</span>
        <p>{{comics.chapter_type}}至 {{comics.last_chapter_id}} {{comics.comic_chapter.chapter_list[0].chapter_name}}</p>
        <p><span></span><span>{{update_time}}</span></p>
      </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        comics: [],
        update_time: 0
      }
    },
    methods: {
      dataFn () {
        this.servicetime = new Date(parseInt(this.comics.update_time) * 1000).toLocaleString().substr(0, 17)
        console.log(this.servicetime)
      }
    },
    created () {
      let self = this
      this.$axios.get('api/comics')
        .then((response) => {
          response = response.data
          if (response.error === 0) {
            self.comics = response.data
            console.log(self.comics.comic_name)
          }
        })
        .catch((error) => {
          alert(error)
        })
    },
    watch: {
      comics (val) {
        if (val) {
          this.$nextTick(() => {
            this.dataFn()
          })
        }
      }
    }

  }
</script>

<style lang="less">

</style>

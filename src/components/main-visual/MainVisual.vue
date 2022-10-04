<template>
    <div class="main-visual-container">
        <img :src="getImg()" alt="">
    </div>
</template>
<script>
    export default {
      name: 'MainVisual',
      data() {
        return {
            imgPath: require("../../assets/Images/Header Image.jpg")
        }
      },
      methods: {
        getImg() {
            return (this.imgPath)
        }
      }
    }
</script>

<style scoped lang="scss">
    @import './main_visual.scss';
</style>
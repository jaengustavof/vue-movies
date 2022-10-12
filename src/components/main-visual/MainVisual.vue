<template>
    <div class="main-visual-container">
      <div id="container-slider">
        <img :src="getImg()" alt="" class="slider-image">
        <img :src="getImg2()" alt="" class="slider-image">
        <img :src="getImg3()" alt="" class="slider-image">
      </div>

    </div>
    
</template>
<script>
window.addEventListener('load', function(){
  const containerLength = -Math.abs(document.getElementById('container-slider').children.length-1);
  const containerImages = document.getElementsByClassName('slider-image');

  const carousel=()=>{
    let initial = 0;
    setInterval(() => {
      initial -= 100
      for(let image of containerImages){
        image.style.left = initial+'%'
      }
      initial <= containerLength+'00'? initial = 100: initial;
    }, 3000);
  }
  carousel()
})

  
    export default {
      name: 'MainVisual',
      data() {
        return {
            imgPath: require("../../assets/Images/Header Image.jpg"),
            imgPath2: require("../../assets/Images/Batman.jpg"),
            imgPath3: require("../../assets/Images/Spiderman.jpg"),
            
        }
      },
      methods: {
        getImg() {
            return (this.imgPath)
        },
        getImg2() {
            return (this.imgPath2)
        },
        getImg3() {
            return (this.imgPath3)
        },

      }
    }
</script>

<style scoped lang="scss">
    @import './main_visual.scss';
</style>
<template>
    <div class="site-introduction">
        <div class="site-introduction_container">
            <h1 class="container-title">movie Library</h1>
            <p class="container-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quaerat illo doloribus distinctio cupiditate et ratione praesentium dignissimos officiis enim, quae illum alias sequi.</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'SiteIntroduction',
  props: {
    msg: String
  }
}
</script>
<style scoped lang="scss">
    @import './site_introduction.scss';
</style>
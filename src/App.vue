<template>
  <Header></Header>
  <MainVisual></MainVisual>
  <SiteIntroduction></SiteIntroduction>
  <QuickView></QuickView>
  <ContactUs></ContactUs>
  <Footer></Footer>
</template>

<script>

import Header from './components/header/Header.vue';
import MainVisual from './components/main-visual/MainVisual.vue';
import SiteIntroduction from './components/site-introduction/SiteIntroduction.vue';
import QuickView from './components/quick-view/QuickView.vue';
import ContactUs from './components/contact-us/ContactUs.vue';
import Footer from './components/footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    MainVisual,
    SiteIntroduction,
    QuickView,
    ContactUs,
    Footer
}
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;

  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>

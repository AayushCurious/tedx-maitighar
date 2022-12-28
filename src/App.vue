<template>

  <transition name="black">
    <Nav v-if="!iswhiteNav"></Nav>
  </transition>

  <transition name="white">
    <NavLight v-if="iswhiteNav"></NavLight>
  </transition>

  <!-- <transition name="fade" mode="out-in"> -->
  <router-view/>
  <!-- </transition> -->

  <Footer></Footer>
</template>

<script>
import Nav from '@/components/Nav.vue';
import NavLight from '@/components/NavLight.vue';
import Footer from '@/components/Footer.vue';
import styles from '@/assets/styles/main.css'
import phonestyles from '@/assets/styles/phone.css'

export default {
  name: 'Home',
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  components: {
    Nav,
    NavLight,
    Footer,
  },
  data() {
    return{
      iswhiteNav: false,
    }
  },
  methods:{
    handleScroll(event){
      // 520
      if (window.top.scrollY > 690) {
        this.iswhiteNav = true;
      }
      if (window.top.scrollY < 690) {
        this.iswhiteNav = false;
      }
    }
  },
};
</script>

<style scoped>
.white-enter-from{
  opacity: 0;
}
.white-enter-active{
  transition: all 1s ease;
}
.white-enter-to{
  opacity: 1;
}

.fade-enter-from{
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active{
  transition: all 1s ease;
}
.fade-enter-to{
  opacity: 1;
}



.black-enter-from{
  opacity: 0;
}
.black-enter-active{
  transition: all 1s ease;
}
.black-enter-to{
  opacity: 1;
}
</style>

<template>
  <div class="front-page">
      <div class="text">
        <animated-component animation-type="slide-from-left">
        Welcome to
        <span style="color: #FF2B06;">Tedx</span>Maitighar 2021
        </animated-component>
      </div>
      <!-- <div class=""> -->
        <!-- <animated-component animation-type="slide-from-right"> -->
        <img src="Facing-the-uncertain-logo.png" alt="LargetedX thing">
        <!-- </animated-component> -->

      <!-- </div> -->
  </div>
</template>

<script>
import AnimatedComponent from '@/components/AnimatedComponent.vue';
export default {
  name: 'Welcome',
  components:{
    AnimatedComponent,
  },
};
</script>

<style media="screen">
  span {
    margin: 0px;
    padding: 0px;
  }

  /* animated-component */
</style>

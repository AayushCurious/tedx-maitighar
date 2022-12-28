<template id="">
  <div class="socials-section">
    <h4>Stay tuned for news about this year’s <span style="color: #FF2B06;">TEDx</span> by following us on <span style="color: #FF2B06;">Social Media</span>!</h4>
    <div class="social-icons">
      <animated-component animation-type="slide-from-left">
        <a href="https://www.facebook.com/tedxmaitighar" target="_blank" rel="noopener noreferrer">
          <img src="facebook.svg" alt="facebook">
        </a>
      </animated-component>
      <animated-component>
      <a href="https://www.instagram.com/tedxmaitighar/" target="_blank" rel="noopener noreferrer">
        <img src="insta.svg" alt="Insta">
      </a>
    </animated-component>
      <animated-component animation-type="slide-from-right">
      <a href="https://twitter.com/TMaitighar?fbclid=IwAR1wSIUTraI6D4asTPqLo9g5cJLFfvV01kMr8WzLrKPltCRp57i92H93N_M" target="_blank" rel="noopener noreferrer">
        <img src="twitter.svg" alt="Twitter">
      </a>
    </animated-component>
    </div>

  </div>
</template>

<script>
import AnimatedComponent from '@/components/AnimatedComponent.vue';
export default {
  name: 'InfoSection',
  components: {
    AnimatedComponent,
  }
};
</script>

<template id="">
  <div class="soon-section">
    <animated-component animation-type="zoom">
      <h2><br> <span style="color: #FF2B06;"> On </span>August 21<sup>st</sup>, 2021</h2>
    </animated-component>
    <p>In these desperate times, we’re here <br> determined to face the uncertain!</p>
    <Counter :endDate="1629483300000" :type='4' :timeUnit="['days','hrs','mins','secs']" @timeUp="func"/>
    <p style="font-bold">Until the <span style="color: #FF2B06;"> Event </span></p>
  </div>
</template>

<script>

import AnimatedComponent from '@/components/AnimatedComponent.vue';
import Counter from '@/components/Counter.vue';
export default {
  name: 'InfoSection',
  components: {
    AnimatedComponent,
    Counter,
  }
};
</script>

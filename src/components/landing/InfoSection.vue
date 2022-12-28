<template id="">
  <div class="info-section">

    <div class="content-info">
      <div class="content-text" ref="aim">
        <animated-component animation-type="slide-from-left">
        <h4>Our <span style="color: #FF2B06;">Aim</span></h4>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      </animated-component>
      </div>
      <!-- <animated-component> -->
        <img src="Target-arrow.svg" alt="">
      <!-- </animated-component> -->
    </div>

    <div class="content-info" ref="vision">
      <!-- <animated-component> -->
        <img src="Binocularsbinoculars.svg" alt="">
      <!-- </animated-component> -->
      <div class="content-text">
        <animated-component animation-type="slide-from-right">
        <h4>Our <span style="color: #FF2B06;">Vision</span></h4>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
      </animated-component>
      </div>
    </div>

    <div class="content-info" ref="tedx">
      <div class="content-text">
        <animated-component animation-type="slide-from-left">
        <h4>What is <span style="color: #FF2B06;">TedX</span>?</h4>
        A TEDx event is a local gathering where live TED-like talks and performances are shared with the community. TEDx events are fully planned and coordinated independently, on a community-by-community basis. The content and design of each TEDx event are unique and developed independently, but all of them have features in common.
      </animated-component>
      </div>
      <!-- <animated-component> -->
        <img src="Tex.svg" alt="">
      <!-- </animated-component> -->
    </div>

    <div class="content-info" ref="do">
      <!-- <animated-component> -->
        <img src="Speakers-sound.svg" alt="">
      <!-- </animated-component> -->
      <div class="content-text">
        <animated-component animation-type="slide-from-right">
          <h4>What do we <span style="color: #FF2B06;">do</span>?</h4>
        At TEDxMaitighar, we are known for creating two things: a Conference, and a Community. 
        We host one highly anticipated Conference annually, where live Speakers and TED Talks videos combine to explore a range of new, important, and often little-heard ideas and perspectives.
        In addition, our series of smaller, dinner-party style Salon events provide a chance to continue conversations and explore in-depth ideas between annual Conferences.
      </animated-component>
      </div>
    </div>

  </div>
</template>

<script>
import AnimatedComponent from '@/components/AnimatedComponent.vue';
export default {
  name: 'InfoSection',
  components: {
    AnimatedComponent,
  },
};
</script>

<style media="screen">
.contentImage-enter-from{
  opacity: 0;
}
.contentImage-enter-active{
  transition: all 1s ease;
}
.contentImage-enter-to{
  opacity: 1;
}
</style>

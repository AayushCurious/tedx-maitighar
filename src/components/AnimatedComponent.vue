<template>
    <div ref="target">
        <transition :name="animationType">
            <div v-show="animate" class="animated-component">
                <slot />
            </div>
        </transition>
    </div>
</template>

<script lang="js">
import { onMounted, ref } from 'vue';export default {
  name: 'AnimatedComponent',
  props: {
    animationType: {
      type: String,
      required: false,
      default: 'fade'
    }
  },
  setup() {
    const target = ref();
    const animate = ref(false);    const observer = new IntersectionObserver(
      ([entry]) => {
        animate.value = entry.isIntersecting;
      },
      {
        threshold: 0
      }
    );    onMounted(() => {
      observer.observe(target.value);
    });    return {
      animate,
      target
    };
  }
};
</script>

<style scoped>
template div{
    margin:0px;
    padding:0px;
}

.animated-component.fade-enter-from, .animated-component.zoom-enter-from {
  transition: none;
}/* Fade animation */

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}/* Zoom animation */

.zoom-enter-active, .zoom-leave-active {
  transition: transform 2ms ease;
}

.zoom-enter-from, .zoom-leave-to {
  transform: scale(0.9);
}

.slide-from-right-enter-from, .slide-from-right-leave-to {
  transform:translateX(40px);
}

.slide-from-right-enter-active, .slide-from-right-leave-active, .slide-from-left-enter-active, .slide-from-left-leave-active {
  transition: transform 1s ease;
}

.slide-from-left-enter-from, .slide-from-left-leave-to {
  transform:translateX(-40px);
}

@media only screen and (max-width: 600px) {

  * {
    -o-transition-property: none !important;
    -moz-transition-property: none !important;
    -ms-transition-property: none !important;
    -webkit-transition-property: none !important;
    transition-property: none !important;
    overflow-x: hidden;
  }
}

</style>

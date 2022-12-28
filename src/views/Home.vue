<template>
  <div class="home">
    <Welcome msg="Welcome to Your Vue.js App"/>
    <InfoSection>
    </InfoSection>
    <DateSection>
    </DateSection>
    <SocialSection>
    </SocialSection>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/landing/Welcome.vue';
import InfoSection from '@/components/landing/InfoSection.vue';
import DateSection from '@/components/landing/DateSection.vue';
import SocialSection from '@/components/landing/SocialSection.vue';


export default {
  name: 'Home',
  components: {
    Welcome,
    InfoSection,
    DateSection,
    SocialSection,
  },
};
</script>

<template>
  <div class="xmas">
    <iframe width="70%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/549354723&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
    <card-container></card-container>
  </div>
</template>

<script>
import CardContainer from './CardContainer.vue';

export default {
  name: 'christmasContainer',
  components: {
    CardContainer
  }
};
</script>


<style scoped lang="scss">
  .xmas {
    height: 100%;
    width: 100%;
    margin: 0;
    background: url('../assets/background.png');
    background-position: center;
    background-size: auto;
    padding: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    iframe {
      max-width: 100%;
      min-width: 300px;
    }
  }
</style>

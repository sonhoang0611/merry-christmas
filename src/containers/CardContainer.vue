<template>
  <div class="card-wrapper">
    <div class="columns is-8">
      <christmas-card class="column is-half"></christmas-card>
      <christmas-card class="column"></christmas-card>
      <christmas-card class="column"></christmas-card>
    </div>
    <div class="columns is-8">
      <christmas-card class="column"></christmas-card>
      <christmas-card class="column"></christmas-card>
      <christmas-card class="column is-half"></christmas-card>
    </div>
  </div>
</template>

<script>
import ChristmasCard from '../components/ChristmasCard.vue';

export default {
  name: "cardContainer",
  components: {
    ChristmasCard
  }
}
</script>

<style lang="scss" scoped>
  .card-wrapper {
    width: 70%;
    padding: 50px;
    background: white;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    z-index: 2;
    margin-top: 40px;
  }
</style>


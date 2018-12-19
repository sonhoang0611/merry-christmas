<template>
  <div class="card-container">
    <div class="wrapper">
      <christmas-card v-for="card in cards" :key="card.key" :card="card"></christmas-card>
    </div>
  </div>
</template>

<script>
import ChristmasCard from '../components/ChristmasCard.vue';

export default {
  name: "cardContainer",
  components: {
    ChristmasCard
  },
  data () {
    return {
      cards: [{
        key: 1,
        img: require('../assets/card1.gif'),
        title: 'Ông già Noel',
        subtitle: '@Noel',
        content: ['Luôn luôn vui vẻ và hạnh phúc nha ốc sên', 'Chúc mừng Giáng sinh'],
        tag: ['@son.ht','#snow', '#winter'],
        time:'10:07 PM - 25 Dec 2018'
      },{
        key: 2,
        img: require('../assets/card2.png'),
        title: 'Ngôi nhà tuyết',
        subtitle: '@Home',
        content: 'Merry Christmas',
        tag: ['@son.ht','#home', '#noel'],
        time:'10:07 PM - 25 Dec 2018'
      },{
        key: 3,
        img: require('../assets/card5.gif'),
        title: 'Ông già Noel',
        subtitle: '@Noel',
        content: 'Merry Christmas',
        tag: ['@son.ht','#snow', '#winter'],
        time:'10:07 PM - 25 Dec 2018'
      },{
        key: 4,
        img: require('../assets/card3.png'),
        title: 'Ngôi nhà tuyết',
        subtitle: '@Home',
        content: 'Merry Christmas',
        tag: ['@son.ht','#home', '#noel'],
        time:'10:07 PM - 25 Dec 2018'
      },{
        key: 5,
        img: require('../assets/card6.gif'),
        title: 'Ông già Noel',
        subtitle: '@Noel',
        content: 'Merry Christmas',
        tag: ['@son.ht','#snow', '#winter'],
        time:'10:07 PM - 25 Dec 2018'
      },{
        key: 6,
        img: require('../assets/card4.jpg'),
        title: 'Ngôi nhà tuyết',
        subtitle: '@Home',
        content: 'Merry Christmas',
        tag: ['@son.ht','#home', '#noel'],
        time:'10:07 PM - 25 Dec 2018'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-container {
    width: 70%;
    padding: 50px;
    background: white;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    z-index: 2;
    margin-top: 40px;

    .wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
</style>

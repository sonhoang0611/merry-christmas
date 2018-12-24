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
        title: 'Mèo nghịch phá',
        subtitle: '@Thiệp 1',
        content: ['Giáng sinh vui vẻ và an lành nhé người.', 'À mà con mèo con nhà ta cũng lớn như con trong hình rồi á.', 'Nó ngoan lắm, ko phá phách lung tung như con mèo mẹ.', 'Lông nó giờ có thêm màu đỏ nữa. Bữa nào ta gửi ảnh mi xem hihi.'],
        tag: ['@son.ht','#snow', '#winter'],
        time:'10:07 PM - 25 Dec 2018'
      },{
        key: 2,
        img: require('../assets/card1.jpg'),
        title: 'Hai chú sóc',
        subtitle: '@Thiệp 2',
        content: ['Những điều nhỏ nhoi.', 'Đôi khi lại là những thứ bất chợt khiến ta mỉm cười mỗi khi nhớ về.', 'Đừng bỏ lỡ điều gì để rồi hối tiếc nghen.', '(Link nhạc: https://www.nhaccuatui.com/bai-hat/nhung-dieu-nho-nhoi-vy-oanh.L7D8S51p0p7s.html)'],
        tag: ['@son.ht','#home', '#noel'],
        time:'10:07 PM - 25 Dec 2018'
      },{
        key: 3,
        img: require('../assets/card5.gif'),
        title: 'Cây thông Noel',
        subtitle: '@Thiệp 3',
        content: ['60 mấy kí lô rùi....????', '*Lăn qua lăn lại*'],
        tag: ['@son.ht','#snow', '#winter'],
        time:'10:07 PM - 25 Dec 2018'
      },{
        key: 4,
        img: require('../assets/card3.png'),
        title: 'Hộp quà màu sắc',
        subtitle: '@Thiệp 4',
        content: ['Tấm này để chơi thui chứ không có gì đâu lêu lêu.'],
        tag: ['@son.ht','#home', '#noel'],
        time:'10:07 PM - 25 Dec 2018'
      },{
        key: 5,
        img: require('../assets/card6.gif'),
        title: 'Ông già Noel',
        subtitle: '@Thiệp 5',
        content: ['Vẫn chưa nói ta biết bữa mi khám sao bị bệnh thế nào haizz...', 'Giận mi thiệt đó.', '(Đá *bụp bụp*, cốc *cộc cộc*)'],
        tag: ['@son.ht','#snow', '#winter'],
        time:'10:07 PM - 25 Dec 2018'
      },{
        key: 6,
        img: require('../assets/card4.jpg'),
        title: 'Gửi gắm ước mơ',
        subtitle: '@Thiệp 6',
        content: ['"Muốn kể cho em nghe bao nhiêu là điều','Mà không biết em sẽ hiểu lòng này bao nhiêu','Về ký ức và những câu chuyện tình yêu', 'Nhưng nói chung là..."', '(Sợ mi mất ngủ nên ghi vậy thôi chứ ko dám hát hihi)'],
        tag: ['@son.ht','#home', '#noel'],
        time:'10:07 PM - 25 Dec 2018'
      },{
        key: 7,
        img: require('../assets/card10.gif'),
        title: 'Đi phát quà nào',
        subtitle: '@Thiệp 7',
        content: ['Đùa chứ nếu mi thích thì ta sẽ lại hát cho mi nghe mỗi ngày mà.'],
        tag: ['@son.ht','#home', '#noel'],
        time:'10:07 PM - 25 Dec 2018'
      },{
        key: 8,
        img: require('../assets/card9.jpg'),
        title: 'Cười nhiều lên nhé',
        subtitle: '@Thiệp 8',
        content: ['Thật sự muốn chở mi đi dạo đâu đó lòng vòng dịp noel lắm.', 'Nhưng chắc không may mắn rồi...', 'Chắc vẫn còn nhiều dịp khác gặp nhau mà, phải không?'],
        tag: ['@son.ht','#home', '#noel'],
        time:'10:07 PM - 25 Dec 2018'
      },{
        key: 9,
        img: require('../assets/card11.gif'),
        title: 'Giáng sinh vui vẻ',
        subtitle: '@Thiệp 9',
        content: ['Tấm cuối cùng rồi', 'Chỉ muốn nhắc mi ăn và uống thuốc đầy đủ để chóng khỏe và đỡ bệnh', 'Chơi game ít ít thôi còn ngủ sớm nha.', 'Đi làm về khuya nhớ chạy xe cẩn thận đó.', 'Merry Christmas!!!'],
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
    min-width: 300px;
    padding: 50px;
    background: #f8fafc;
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

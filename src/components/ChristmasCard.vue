<template>
  <div class="card" @click="openCard">
    <div class="christmas-card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="card.img" :alt="card.title">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="card.img" :alt="card.title">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{card.title}}</p>
            <p class="subtitle is-6">{{card.subtitle}}</p>
          </div>
        </div>

        <div class="content">
          {{card.content}}
          <br>
          <time datetime="2016-1-1">10:07 PM - 25 Dec 2018</time>
        </div>
      </div>
    </div>
     <!-- The Modal -->
    <div id="myModal" class="card-modal">
      <!-- The Close Button -->
      <span class="card-modal__close" @click="closeCard"><i class="fa fa-times" aria-hidden="true"></i></span>
      <div class="card-modal__content">
        <!-- Modal Content (The Image) -->
        <img class="card-modal__img" :src="card.img">
        <!-- Modal Caption (Image Text) -->
        <p :id="card.key" class="card-modal__caption"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'christmasCard',
  props: {
    card: {
      type: Object,
    }
  },
  methods: {
    openCard() {
      const modal = this.$el.querySelector('.card-modal');
      modal.style.display = "flex";

      // set up text to print, each item in array is new line
      const aText = this.card.content;
      let iIndex = 0; // start printing array at this posision
      let iArrLength = aText[0].length; // the length of the text array
      const iScrollAt = 20; // start scrolling up at this many lines
      let iRow;

      let iTextPos = 0; // initialise text position
      let sContents = ''; // initialise contents constiable

      this.typewritter(aText, iIndex, iScrollAt, iRow, iArrLength, iTextPos, sContents);
    },
    closeCard(e) {
      e.stopPropagation();
      const modal = this.$el.querySelector('.card-modal');
      modal.style.display = "none";
    },
    typewritter(aText, iIndex, iScrollAt, iRow, iArrLength, iTextPos, sContents) {
      const self = this;
      sContents = ' ';
      iRow = Math.max(0, iIndex-iScrollAt);
      let destination = document.getElementById(this.card.key);
      while ( iRow < iIndex ) {
        sContents += aText[iRow++] + '<br />';
      }
      destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
      if ( iTextPos++ == iArrLength ) {
        iTextPos = 0;
        iIndex++;
        if ( iIndex != aText.length ) {
        iArrLength = aText[iIndex].length;
        setTimeout(() => this.typewritter(aText, iIndex, iScrollAt, iRow, iArrLength, iTextPos, sContents), 500);
        }
      } else {
        setTimeout(() => this.typewritter(aText, iIndex, iScrollAt, iRow, iArrLength, iTextPos, sContents), 200);
      }

    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    min-width: 300px;
    width: 30%;
    margin: 20px 0;

    .card-modal {
      display: none; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 99999; /* Sit on top */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
      justify-content: center;
      align-items: center;

      /* Modal Content */
      &__content {
        position: relative;
        background: white;
        animation: zoomIn 0.6s;
        padding: 20px;
        border-radius: 5px;
        @keyframes zoomIn {
          from {transform:scale(0)}
          to {transform:scale(1)}
        }
      }

      /* Modal Image */
      &__img {
        width: 100%;
        max-width: 900px;
      }

      /* The Close Button */
      &__close {
          position: fixed;
          top: 8px;
          right: 15px;
          font-size: 28px;
          transition: 0.3s;
          color: rgba(255, 255, 255, 0.4);

        &:hover,
        &:focus {
          text-decoration: none;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.9);
        }
      }

      /* Caption of Modal Image (Image Text) - Same Width as the Image */
      &__caption {
        margin: auto;
        display: block;
        text-align: center;
        padding: 30px 0 15px;
        font-size: 1.5em;
        font-weight: bold;
        letter-spacing: 3px;
        word-spacing: 6px;
      }
    }
  }
</style>

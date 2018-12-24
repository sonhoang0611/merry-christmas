<template>
  <div class="card">
    <div class="christmas-card" @click="openCard">
      <div class="card-hover">
        Bấm vào để mở thiệp nhen
      </div>
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="card.img" :alt="card.title">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{card.title}}</p>
            <p class="subtitle is-6">{{card.subtitle}}</p>
          </div>
        </div>
      </div>
    </div>
     <!-- The Modal -->
    <div id="myModal" class="card-modal" @click="closeCard">
      <!-- The Close Button -->
      <span class="card-modal__close"><i class="fa fa-times" aria-hidden="true"></i></span>
      <div class="card-modal__content">
        <!-- Modal Content (The Image) -->
        <div class="card-modal__img">
          <img :src="card.img">
        </div>
        <!-- Modal Caption (Image Text) -->
        <div class="card-modal__text">
          <p :id="card.key" class="card-modal__caption"></p>
          <p class="card-modal__hide">{{card.content}}</p>
        </div>
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
  data() {
    return {
      timeouts: []
    }
  },
  mounted() {
    const modalContent = this.$el.querySelector('.card-modal__content');
    modalContent.onclick = function(e){
      e.stopPropagation();
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

      for(var i=0; i<this.timeouts.length; i++)
      {
        clearTimeout(this.timeouts[i]);
      }
      timeouts = [];
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
        this.timeouts.push(setTimeout(() => this.typewritter(aText, iIndex, iScrollAt, iRow, iArrLength, iTextPos, sContents), 800));
        }
      } else {
        this.timeouts.push(setTimeout(() => this.typewritter(aText, iIndex, iScrollAt, iRow, iArrLength, iTextPos, sContents), 150));
      }

    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    min-width: 275px;
    width: 30%;
    margin: 20px 0;

    .card-hover {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: none;
    }

    .christmas-card {
      &:hover {
        cursor: pointer;
        .card-hover {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.7);
          color: white;
          z-index: 2;
        }
      }
    }

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
        display: flex;
        align-items: center;
        width: 90%;
        position: relative;
        background: #f9ffff;
        animation: zoomIn 0.6s;
        padding: 20px;
        border-radius: 5px;
        @keyframes zoomIn {
          from {transform:scale(0)}
          to {transform:scale(1)}
        }

        @media (max-width: 498px) {
          flex-direction: column;
        }
      }

      /* Modal Image */
      &__img {
        width: 100%;
        max-width: 750px;
        min-width: 320px;
      }

      &__hide {
        visibility: hidden;
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

      &__text {
        padding: 0 30px;
      }

      /* Caption of Modal Image (Image Text) - Same Width as the Image */
      &__caption {
        font-size: 1.3em;
        font-weight: 600;
        letter-spacing: 2px;
        word-spacing: 5px;
      }
    }
  }
</style>

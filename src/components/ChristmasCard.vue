<template>
  <div class="christmas-card card">
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
        {{card.content}} <a>@son.ht</a>.
        <a href="#">#snow</a> <a href="#">#winter</a>
        <br>
        <time datetime="2016-1-1">10:07 PM - 25 Dec 2018</time>
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
  }
}
</script>

<style lang="scss" scoped>
  .christmas-card {
    min-width: 30%;
  }
</style>

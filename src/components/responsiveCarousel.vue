<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
        <slot></slot>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'responsiveCarousel',
    data(){
      return {
        settings: {
  "dots": true,
  "infinite": false,
  "speed": 500,
  "slidesToShow": 3,
  "slidesToScroll": 1,
  "initialSlide": 0,
  "responsive": [
    {
      "breakpoint": 1200,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "infinite": true,
        "dots": true
      }
    },
    {
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "infinite": true,
        "initialSlide": 0
      }
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "infinite": true,
      }
    }
  ]
}
      }
    },
    components: { VueSlickCarousel },
  }
</script> 
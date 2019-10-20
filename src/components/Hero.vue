<template>
  <div>
    <div id="Hero">
      <agile
        ref="main"
        class="main"
        :options="options1"
        :as-nav-for="asNavFor1"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide"
          :class="`slide--${index}`"
        >
          <img :src="slide" />
        </div>
      </agile>
      <agile
        ref="thumbnails"
        class="thumbnails"
        :options="options2"
        :as-nav-for="asNavFor2"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide slide--thumbniail"
          :class="`slide--${index}`"
          @click="$refs.thumbnails.goTo(index)"
        >
          <img :src="slide" />
        </div>
        <template slot="prevButton">
          <icon
            class=" text-white"
            name="arrow-left-circle"
            stroke-width="2"
            height="28"
            width="28"
          />
        </template>
        <template slot="nextButton">
          <icon
            class=" text-white"
            name="arrow-right-circle"
            stroke-width="2"
            height="28"
            width="28"
          />
        </template>
      </agile>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  mounted() {
    this.asNavFor1.push(this.$refs.thumbnails);
    this.asNavFor2.push(this.$refs.main);
  },
  data() {
    return {
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        speed: 750,
        dots: false,
        fade: true,
        navButtons: false
      },

      options2: {
        autoplay: false,
        centerMode: true,
        speed: 750,

        dots: false,
        navButtons: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5
            }
          },

          {
            breakpoint: 1000,
            settings: {
              navButtons: true
            }
          }
        ]
      },

      slides: [
        "https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562370/client-img-10_1_asbbfb.webp",
        // "https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562312/client-img-9_1_magmx4.webp",
        // "https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562258/client-img-8_1_qoxzwt.webp",
        "https://res.cloudinary.com/dgkw9qspp/image/upload/v1571561966/client-img-3_1_qhsxmz.webp",
        "https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562211/client-img-7_1_ik7x2x.webp",
        "https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562093/client-img-5_1_qimmco.webp",
        "https://res.cloudinary.com/dgkw9qspp/image/upload/v1571561733/client-img-1_1_pk3ip6.webp",
        "https://res.cloudinary.com/dgkw9qspp/image/upload/v1571561885/client-img-2_1_qencbx.webp",
        // "https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562031/client-img-4_1_k0zfzc.webp",
        "https://res.cloudinary.com/dgkw9qspp/image/upload/v1571562143/client-img-6_1_idhztt.webp"
      ]
    };
  }
};
</script>
<style>
.main {
  margin: 6px;
}

.thumbnails {
  margin: 0 4px;
  width: calc(100% - 10px);
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
}
.thumbnails .agile__nav-button {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.thumbnails .agile__nav-button--prev {
  left: 25px;
}
.thumbnails .agile__nav-button--next {
  right: 25px;
}

.slide {
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  height: 76vh;
  justify-content: center;
}
.slide--thumbniail {
  cursor: pointer;
  height: 100px;
  padding: 0 2px;
  transition: opacity 0.3s;
}
.slide--thumbniail:hover {
  opacity: 0.75;
}
.slide img {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  width: 100%;
  border-radius: 6px;
}
</style>

<template>
  <div>
    <div id="app">
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
          <img loading="lazy" :src="slide" />
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
          <img loading="lazy" :src="slide" />
        </div>
        <template slot="prevButton">
          <icon name="arrow-left" />
        </template>
        <template slot="nextButton">
          <icon name="arrow-right" />
        </template>
      </agile>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: false
      },

      options2: {
        autoplay: true,
        centerMode: true,
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
        "https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1472926373053-51b220987527?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      ],
      images: [
        {
          id: 0,
          pic: "client-img-1"
        },
        {
          id: 1,
          pic: "client-img-2"
        },
        {
          id: 2,
          pic: "client-img-3"
        },
        {
          id: 3,
          pic: "client-img-4"
        },
        {
          id: 4,
          pic: "client-img-5"
        },
        {
          id: 6,
          pic: "client-img-7"
        },
        {
          id: 7,
          pic: "client-img-8"
        },
        {
          id: 8,
          pic: "client-img-9"
        },
        {
          id: 9,
          pic: "client-img-10"
        }
      ]
    };
  },
  mounted() {}
};
</script>
<style>
.main {
  /* margin-bottom: 5px; */
  margin: 5px;
}

.thumbnails {
  margin: 0 5px;
  width: calc(100% - 11px);
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
  left: -45px;
}
.thumbnails .agile__nav-button--next {
  right: -45px;
}
.agile__nav-button:hover {
  color: #888;
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #888;
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
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
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
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>

<template>
  <div id="Gallery">
    <div class="container mx-auto px-4 lg:px-12">
      <div class="text-center pt-32">
        <h1
          class="text-gray-700 font-light text-2xl lg:text-4xl tracking-wide uppercase"
        >
          Exciting tours for adventurous people
        </h1>
      </div>
      <div class="lg:flex pb-32">
        <div class="w-full lg:w-1/2 mt-12 lg:mt-32">
          <div class="inline-block pb-16 w-full text-center">
            <h2 class="capitalize bg-red-100 text-red-600 rounded-lg p-2">
              You're going to fall in love with shiraz
            </h2>
            <p class="text-md px-4 py-4 leading-loose text-gray-700 text-left">
              Shiraz is a city in south-central Iran, known for its literary
              history and many gardens. The marble Tomb of Hafez, honoring the
              revered poet, sits within its own garden. To the east, the
              Mausoleum of Saadi houses the 13th-century writer’s mosaic-tiled
              tomb and an underground pool. Shiraz is a gateway to Persepolis,
              the ruined 6th-century-B.C. capital to the northeast, with its
              immense gateways, columns and friezes.
            </p>
            <router-link
              class="float-left ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
              to="/read more  "
            >
              Read more
              <icon
                name="arrow-right"
                width="20"
                height="20"
                stroke-width="1.6"
              />
            </router-link>
          </div>
          <div class="inline-block mt-w-full text-center">
            <h2 class="capitalize text-red-600 bg-red-100 rounded-lg p-2">
              Once Called "Half The World", Isfahan Is an Astonishing City
            </h2>
            <p class="text-md px-4 py-4 leading-loose text-gray-700 text-left">
              Isfahan is a city in central Iran, known for its Persian
              architecture. In the huge Naqsh-e Jahan Square is the 17th-century
              Imam (Shah) Mosque, whose dome and minarets are covered with
              mosaic tiles and calligraphy. Ali Qapu Palace, built for Shah
              Abbas and completed in the late 16th century, has a music room and
              a verandah overlooking the square’s fountains. Sheikh Lotfollah
              Mosque is known for its intricate tiling.
            </p>
            <router-link
              class="float-left ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
              to="/read more  "
            >
              Read more
              <icon
                name="arrow-right"
                width="20"
                height="20"
                stroke-width="1.6"
              />
            </router-link>
          </div>
        </div>

        <div class="lg:w-1/2 relative hidden xl:block">
          <svg
            class="mt-16"
            width="700"
            height="700"
            viewBox="20 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(300,300)">
              <path
                d="M110.4,-136.8C145.9,-101.9,179.3,-69.7,181.2,-35.4C183.1,-1.2,153.5,35.2,127.1,66.3C100.7,97.5,77.5,123.4,47.2,138.1C16.9,152.9,-20.6,156.3,-51.8,144.2C-82.9,132,-107.7,104.2,-143.8,69.5C-179.9,34.9,-227.3,-6.8,-230.5,-49.7C-233.7,-92.6,-192.7,-136.7,-146.9,-169.8C-101.1,-202.9,-50.6,-224.9,-6.5,-217.1C37.5,-209.4,75,-171.7,110.4,-136.8Z"
                fill="#eb144c"
              />
            </g>
          </svg>
          <img
            class="w-1/2 h-56 ml-56 mt-20 rounded-lg absolute inset-center shadow-2xl z-20 cursor-pointer "
            src="@/assets/images/client-img-8.webp"
            :title="imageList[0].desc1"
            @click="showLightbox(image1)"
          />
          <img
            class="w-1/2 rounded absolute inset-center mt-4 shadow-2xl z-10   cursor-pointer"
            src="@/assets/images/client-img-2.webp"
            :title="imageList[1].desc2"
            @click="showLightbox(image2)"
          />
          <img
            class="w-1/2 rounded-lg absolute inset-center mt-40 ml-16 shadow-2xl z-30 cursor-pointer "
            src="@/assets/images/client-img-3.webp"
            :title="imageList[2].desc3"
            @click="showLightbox(image3)"
          />

          <lightbox
            id="mylightbox"
            ref="lightbox"
            :images="imageList"
            :directory="thumbnailDir"
            :timeout-duration="5000"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thumbnailDir: "_nuxt/assets/images/",
      image1: "client-img-8.webp",
      image2: "client-img-2.webp",
      image3: "client-img-3.webp",
      imageList: [
        {
          name: "client-img-8.webp",
          alt: "Nasir-ol-molk Mosque",
          desc1:
            "The Nasir al-Mulk Mosque, also known as the Pink Mosque, is a traditional mosque in Shiraz, Iran. It is located in Gawd-i Arabān quarter, near Shāh Chérāgh Mosque. It was built during Qajar dynasty rule of Iran"
        },
        {
          name: "client-img-2.webp",
          alt: "Qavam House",
          desc2:
            "Qavam House is a traditional and historical house in Shiraz, Iran. It is at walking distance from the Khan Madrassa. It was built between 1879 and 1886 by Mirza Ibrahim Khan. The Qavam family were merchants originally from Qazvin."
        },
        {
          name: "client-img-3.webp",
          alt: "Tomb of Hafez",
          desc3:
            "The Tomb of Hafez and its associated memorial hall, the Hāfezieh, are two memorial structures erected in the northern edge of Shiraz, Iran, in memory of the celebrated Persian poet Hafez."
        }
      ]
    };
  },
  methods: {
    showLightbox(imageName) {
      this.$refs.lightbox.show(imageName);
    }
  }
};
</script>

<style scoped>
.inset-center {
  left: 45%;
  top: 45%;
  transform: translate(-55%, -55%);
}

.thumbnailfade-leave-active,
.thumbnailfade-enter-active {
  transition: all 0.4s ease;
}

.thumbnailfade-enter-active {
  transition-delay: 0.4s;
}

.thumbnailfade-enter,
.thumbnailfade-leave-to {
  opacity: 0;
}
</style>

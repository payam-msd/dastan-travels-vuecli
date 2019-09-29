<template>
  <div>
    <ul class="mx-8 lg:mx-0 lg:flex lg:justify-center  lg:my-20 ">
      <li
        v-for="card in cards"
        :key="card.id"
        class="w-full lg:w-1/5 mx-2 inline-block bg-white rounded-lg overflow-hidden shadow-xl lg:mx-4"
      >
        <div class=" bg-green-100 pt-3 block text-center">
          <template v-for="props in card.icon">
            <icon
              :key="props.name"
              class="my-2 bg-green-100 rounded-lg"
              height="50"
              width="50 "
              :name="props.name"
              color="#38a169"
            />
          </template>
          <h2 class="capitalize text-xl pb-2 text-green-900">
            {{ card.header }}
          </h2>
        </div>
        <p class="text-center break-all text-gray-700 p-6">
          {{ card.content }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: "@/assets/images/client-img-1.webp",
      cards: [
        {
          id: 0,
          header: "explore the iran",
          icon: [
            {
              name: "map"
            }
          ],
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa ipsam velit deleniti maxime! Cumque quod hic Suscipit culpa ipsam velit deleniti maxime! Cumque quod hic   commodi ducimus. Officiis"
        },
        {
          id: 1,
          header: "meet the nature",
          icon: [
            {
              name: "feather"
            }
          ],
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa ipsam velit deleniti maxime! Cumque quod hic Suscipit culpa ipsam velit deleniti maxime! Cumque quod hic   commodi ducimus. Officiis"
        },
        {
          id: 2,
          header: "follow your heart",
          icon: [
            {
              name: "heart"
            }
          ],
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa ipsam velit deleniti maxime! Cumque quod hic Suscipit culpa ipsam velit deleniti maxime! Cumque quod hic   commodi ducimus. Officiis"
        },
        {
          id: 3,
          header: "camp in forrest",
          icon: [
            {
              name: "compass"
            }
          ],
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa ipsam velit deleniti maxime! Cumque quod hic Suscipit culpa ipsam velit deleniti maxime! Cumque quod hic   commodi ducimus. Officiis"
        }
      ]
    };
  }
};
</script>

<style scoped>
.mt-50 {
  margin-top: calc(100vh - 34.8%);
}
.img-parent {
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url(../assets/images/client-img-3.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}
.img-parent::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.61);
  mix-blend-mode: soft-light;
}
</style>

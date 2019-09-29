<template>
  <div id="Detail">
    <div class="bg-props lg:py-32">
      <ul class="mx-8 lg:mx-0 lg:flex lg:justify-center mb-32 ">
        <li
          v-for="card in cards"
          :key="card.id"
          class="w-full lg:w-1/5 my-2 lg:my-0  inline-block bg-white rounded-lg overflow-hidden shadow-xl lg:mx-4"
        >
          <div class="bg-green-100 pt-3 block text-center">
            <div
              class="h-20 w-20 mx-auto flex justify-center items-center rounded-full shadow-lg mb-3"
              v-for="props in card.icon"
              :key="props.name"
            >
              <icon
                class="my-2 rounded-lg"
                height="50"
                width="50 "
                :name="props.name"
                color="#276749"
              />
            </div>
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
@media only screen and (min-width: 600px) {
  .bg-props {
    background-color: #f7fafc;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='525' viewBox='0 310 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%2348bb78' fill-opacity='0.44'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
}
</style>

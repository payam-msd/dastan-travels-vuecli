<template>
  <div>
    <h1
      class="text-xl lg:text-4xl  uppercase text-gray-700 text-center pt-40  pb-4 "
    >
      Follow us on social media
    </h1>
    <div class=" container mx-auto mb-32 flex items-center justify-center">
      <div class="w-screen py-8 lg:px-64 lg:py-16 ">
        <SocialSVG />
      </div>
    </div>
  </div>
</template>

<script>
import SocialSVG from "@/components/SocialSVG";
export default {
  components: { SocialSVG },
  data() {
    return {
      social: [
        {
          name: "instagram"
        },
        {
          name: "twitter"
        },
        {
          name: "facebook"
        },
        {
          name: "send"
        }
      ]
    };
  }
};
</script>

<style scoped></style>

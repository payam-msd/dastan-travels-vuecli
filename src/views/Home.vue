<template>
  <div>
    <Navbar />
    <Hero />
    <Gallery />
    <Detail />
    <SignUp />
    <SocialMedia />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Gallery from "@/components/Gallery.vue";
import Detail from "@/components/Detail.vue";
import SignUp from "@/components/Sign-up.vue";
import SocialMedia from "@/components/Social-media.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "home",
  components: {
    Navbar,
    Hero,
    Gallery,
    Detail,
    SignUp,
    SocialMedia,
    Footer
  }
};
</script>

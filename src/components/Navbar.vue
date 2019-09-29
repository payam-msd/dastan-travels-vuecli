<template>
  <header
    :class="[
      showNavbar ? 'navbar--showed' : 'navbar--hidden',
      lastScrollPosition > 80 ? 'fixed inset-x-0 z-40 top-0' : 'relative',
      lastScrollPosition == 0 ? 'relative' : ''
    ]"
    class="shadow-md rounded-b-lg bg-white flex flex-wrap items-center px-6
    py-2 lg:px-16 lg:py-1"
  >
    <div class="flex-1 flex justify-between items-center">
      <a href="#Hero">
        <svg
          width="32"
          height="36"
          viewBox="0 0 32 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z"
          ></path>
        </svg>
      </a>
    </div>

    <label for="menu-toggle" class="cursor-pointer lg:hidden block"
      ><svg
        class="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg
    ></label>
    <input id="menu-toggle" class="hidden" type="checkbox" />

    <div id="menu" class="hidden lg:flex lg:items-center lg:w-auto w-full">
      <nav>
        <ul
          class="lg:flex items-center justify-center text-base text-gray-700 lg:mr-2 pt-4 lg:pt-0"
        >
          <li>
            <a
              class="lg:p-4 py-3 px-0 anim-prop block border-b-2 border-transparent hover:border-gray-500"
              href="#Detail"
              >Features</a
            >
          </li>
          <li>
            <a
              class="lg:p-4 py-3 px-0 block anim-prop border-b-2 border-transparent hover:border-gray-500"
              href="#Gallery"
              >Gallery</a
            >
          </li>
          <li>
            <a
              class="lg:p-4 py-3 px-0 block anim-prop border-b-2 border-transparent hover:border-gray-500"
              href="#SocialMedia"
              >Social Media</a
            >
          </li>
        </ul>
      </nav>

      <a
        href="#SignUp"
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded inline-flex items-center"
      >
        <icon
          class="mr-2"
          name="log-out"
          width="24"
          height="24"
          stroke-width="1.4"
        />
        <span>Sign-up</span>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 80) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    }
  }
};
</script>

<style>
#menu-toggle:checked + #menu {
  display: block;
}
.inset-x-center {
  left: 50%;
  transform: translateX(-50%);
}
.navbar--hidden {
  box-shadow: none;
  transition: 0.2s all ease-in-out;
  transform: translate3d(0, -100%, 0);
}
.navbar--showed {
  transform: translate3d(0, 0, 0);
  transition: 0.4s all ease-in-out;
}
.anim-prop {
  transition: 0.2s all ease-out;
}
</style>

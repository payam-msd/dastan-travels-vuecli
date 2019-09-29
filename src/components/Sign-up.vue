<template>
  <div id="SignUp">
    <div class="w-full bg-red-500 h-auto p-6 lg:p-16">
      <div
        class="h-auto lg:h-80 lg:bg-cover lg:bg-center rounded-lg shadow-2xl bg-gray-100 props text-center"
      >
        <form
          action="https://formcarry.com/s/nSYJCGTbz73"
          method="POST"
          accept-charset="UTF-8"
          class="pb-20 px-8 lg:px-10 lg:w-1/2 lg:py-16"
        >
          <div class="py-12 lg:py-0">
            <h1 class="text-3xl uppercase text-gray-800 pb-0 lg:pb-12">
              sign up
              <span class="text-sm text-gray-700 block capitalize px-12"
                >by registring you will recieve newsletter and the latest tours
                we offer
              </span>
            </h1>
          </div>
          <div class="lg:ml-16 ">
            <label
              class="block text-left text-gray-800  text-sm tracking-wider "
              for="fullname"
            >
              <icon class="mb-1" name="user" height="28" width="28" />
              FullName
            </label>
          </div>
          <input
            id="fullname"
            required
            class="w-full lg:w-3/4 h-12 shadow-inner border border-gray-300 focus:shadow-outline px-2 rounded focus:outline-none"
            type="text"
            name="FullName"
            placeholder="Enter your fullname"
          />
          <div class="lg:ml-16 mt-8">
            <label
              class="block text-left text-gray-800 text-sm  tracking-wider "
              for="email"
            >
              <icon class="mb-1" name="mail" height="28" width="28" />
              Email
            </label>
          </div>
          <input
            id="email"
            class="w-full lg:w-3/4 h-12 px-2 rounded shadow-inner border border-gray-300 focus:shadow-outline  focus:outline-none"
            type="text"
            name="Email"
            placeholder="Enter your email"
          />
          <button
            class="p-3 rounded-full bg-red-500 block w-64 text-white font-bold
          uppercase mt-16 mx-auto shadow-2xl cursor-pointer hover:bg-red-600  focus:shadow-outline"
            type="submit"
          >
            sign up
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.h-80 {
  height: 80vh;
}
@media only screen and (min-width: 1100px) {
  .props {
    background-image: linear-gradient(
        105deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.9) 50%,
        transparent 50%
      ),
      url("https://source.unsplash.com/AxhfHp6fJ2M/1800x1200");
  }
}
</style>

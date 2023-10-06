<template>
  <div class="shadow-sm">
    <div class="flex flex-row justify-between container mx-auto">
      <!-- <div> -->
      <img
        src="../assets/Dog_logo-removebg-preview.png"
        alt=""
        width="100"
        height="100"
      />
      <!-- </div> -->
      <div class="hidden lg:flex lg:items-center">
        <router-link class="px-3 font-medium" to="/">Home</router-link>
        <!-- <router-link class="px-3 font-medium" to="/">About</router-link> -->
        <router-link class="px-3 font-medium" to="/gallery"
          >Gallery</router-link
        >
        <!-- <router-link class="px-3 font-medium" to="/">Blog</router-link> -->
        <!-- <router-link class="px-3 font-medium" to="/">Contact</router-link> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>
<style></style>

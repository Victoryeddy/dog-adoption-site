<template>
  <div class="shadow-sm ">
    <div class="flex flex-row justify-between container mx-auto">
      <!-- <div> -->
        <img src="../assets/Dog_logo.jpeg" alt="" width="100" height="50" />
      <!-- </div> -->
      <div class="flex items-center collapse md:visible">
        <router-link class="px-3 font-medium"  to="/">Home</router-link>
        <router-link class="px-3 font-medium" to="/">About</router-link>
        <router-link class="px-3 font-medium" to="/">Services</router-link>
        <router-link class="px-3 font-medium" to="/">Gallery</router-link>
        <router-link class="px-3 font-medium" to="/">Blog</router-link>
        <router-link class="px-3 font-medium" to="/">Contact</router-link>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {}
  },
}
</script>
<style></style>

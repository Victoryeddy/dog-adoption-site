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
        <div v-if="!$auth.loading">
          <!-- show login when not authenticated -->
          <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
          <!-- show logout when authenticated -->
          <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
        </div>
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

   methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        logoutParams: {
          returnTo: window.location.origin
        }
      });
    }
  }
};
</script>
<style></style>

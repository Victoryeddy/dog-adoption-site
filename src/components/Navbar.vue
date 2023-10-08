<template>
  <div class="shadow-sm">
    <div class="flex flex-row justify-between container mx-auto px-2">
      <!-- <div> -->

      <div>
        <img
          src="../assets/Dog_logo-removebg-preview.png"
          alt=""
          width="100"
          height="100"
        />
      </div>

      <button class="mt-4 p-3 lg:hidden" @click="toggleNavBar">
        <img src="../assets/align-right.svg" alt=""  />
      </button>

      <div class="hidden lg:flex lg:items-center">
        <router-link class="px-3 font-medium hover:underline" to="/">Home</router-link>
        <router-link class="px-3 font-medium hover:underline" to="/gallery"
          >Gallery</router-link
        >
        <router-link
          v-if="$auth.isAuthenticated"
          to="/profile"
          class="btn-outline ms-3"
          >Profile</router-link
        >
        <div v-if="!$auth.loading" class="ms-4">
          <!-- show login when not authenticated -->
          <button v-if="!$auth.isAuthenticated" @click="login" class="btn">
            Log in
          </button>
          <!-- show logout when authenticated -->
          <button v-if="$auth.isAuthenticated" @click="logout" class="btn">
            Log out
          </button>
        </div>
      </div>
    </div>

    <div class="lg:hidden" v-show="showSmallScreenNavBar">
      <ul class="text-right">
        <li class="my-5 border border-t-0 border-b-2 border-s-0 border-e-0 border-gray-400">
          <router-link class="px-3 font-medium" to="/">Home</router-link>
        </li>
        <li class="my-5  border border-b-2 border-t-0 border-s-0 border-e-0 border-gray-400">
          <router-link class="px-3 font-medium" to="/gallery"
            >Gallery</router-link
          >
        </li>
        <li class="my-5">
          <router-link
            v-if="$auth.isAuthenticated"
            to="/profile"
            class="btn-outline ms-3"
            >Profile</router-link
          >
        </li>
        <li class="my-5">
          <div v-if="!$auth.loading" class="ms-4">
            <button v-if="!$auth.isAuthenticated" @click="login" class="btn">
              Log in
            </button>
            <button v-if="$auth.isAuthenticated" @click="logout" class="btn">
              Log out
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      showSmallScreenNavBar: false,
    };
  },


  watch: {
    
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
          returnTo: window.location.origin,
        },
      });
    },

    toggleNavBar(){
      this.showSmallScreenNavBar = !this.showSmallScreenNavBar;
    }
  },
};
</script>
<style></style>

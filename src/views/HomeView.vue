<template>
  <div class="home">
    <Navbar />
    <div class="bg-primary hidden lg:flex">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 gap-3 relative top-20">
          <div class="">
            <p class="text-5xl text-white font-bold mt-10">
              Find Your Furry Friend: Where Paws Meet Hearts!
            </p>
            <p class="text-white mt-6 text-xl">
              Our mission is to connect these precious pups with compassionate
              families and individuals who are ready to embrace the joy of pet
              adoption.
            </p>
            <p class="mt-7">
              <button
                class="rounded-full bg-white py-5 px-10 shadow-sm font-medium"
              >
                Get Started
              </button>
            </p>
          </div>
          <div>
            <img src="../assets/dog-for-home-page.png" alt="" />
          </div>
        </div>
        <!-- <div v-for="single in data" :key="single.id">
         <img :src="single.image.url" width="400" height="400" />
        </div> -->
      </div>
    </div>

    <!-- small screen -->
    <div class="lg:hidden block bg-primary  container mx-auto">
      <div class="grid grid-cols-1 gap-2 py-3">
        <p class="text-3xl text-white font-bold mt-10">
          Find Your Furry Friend: Where Paws Meet Hearts!
        </p>
        <p class="text-white mt-6 text-xl">
          Our mission is to connect these precious pups with compassionate
          families and individuals who are ready to embrace the joy of pet
          adoption.
        </p>
        <p class="mt-7">
          <button
            class="rounded-full bg-white py-5 px-10 shadow-sm font-medium"
          >
            Get Started
          </button>
        </p>
      </div>
      <div class="grid grid-cols-1 gap-2 py-2">
        <img src="../assets/dog-for-home-page.png" alt="" />
      </div>
    </div>
    <img src="../assets/wave.svg" alt="" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar.vue"

export default {
  name: "HomeView",
  components: {
    Navbar,
  },

  data() {
    return {
      data: [],
      currentPage: 0,
    }
  },

  methods: {
    getDogs() {
      // this.$http.get(`?limit=20?page=0-2`)
      this.$http
        .get(`?limit=15&page=${this.currentPage}`)
        .then((response) => {
          console.log(response.data)
          this.data = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },

  mounted() {
    this.getDogs()
  },
}
</script>

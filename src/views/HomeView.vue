<template>
  <div class="home">
    <Navbar />
    <section class="header">

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
              <p class="mt-12">
                <button class="rounded-full bg-white py-5 px-10 shadow-sm font-medium">
                  Browse
                </button>
              </p>
            </div>
            <div class="relative">
              <img src="../assets/dog-for-home-page.png" alt="" />
              <div class="bg-white absolute px-10 py-3 left-[14rem] bottom-8 h-20 drop-shadow-lg rounded-full">
                <div class="grid grid-cols-3 gap-5">
                  <div>
                    <p class="text-center font-extrabold text-2xl">{{ rescueCount }}K+</p>
                    <p>Rescues</p>
                  </div>
                  <div>
                    <p class="text-center font-extrabold text-2xl">{{ shelterCount }}</p>

                    <p>Shelters</p>
                  </div>
                  <div>
                    <p class="text-center font-extrabold text-2xl">{{ breedsCount }}K+</p>

                    <p>Breeds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div class="lg:hidden block bg-primary px-6">
        <div class="grid grid-cols-1 gap-1 py-3">
          <p class="text-3xl text-white font-bold mt-10">
            Find Your Furry Friend: Where Paws Meet Hearts!
          </p>
          <p class="text-white mt-6 text-xl">
            Our mission is to connect these precious pups with compassionate
            families and individuals who are ready to embrace the joy of pet
            adoption.
          </p>
          <p class="mt-12">
            <button class="rounded-full bg-white py-5 px-10 shadow-sm font-medium">
              Browse
            </button>
          </p>
        </div>
        <div class="grid grid-cols-1 gap-2 py-2 relative">
          <img src="../assets/dog-for-home-page.png" alt="" />
          <div class="bg-white absolute px-10 py-3 md:left-48 bottom-0 h-20 drop-shadow-lg rounded-full">
            <div class="grid grid-cols-3 gap-7">
              <div>
                <p class="text-center font-extrabold text-2xl">{{ rescueCount }}K+</p>
                <p>Rescues</p>
              </div>
              <div>
                <p class="text-center font-extrabold text-2xl">{{ shelterCount }}</p>

                <p>Shelters</p>
              </div>
              <div>
                <p class="text-center text-2xl font-extrabold">{{ breedsCount }}K+</p>

                <p>Breeds</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <img src="../assets/wave.svg" alt="" class="border-0" />
    </section>

    <section class="main-content outline-black">
      <div class="container mx-auto px-2">
        <h2 class="text-center font-extrabold text-4xl">Say Hello To Your New Family Member</h2>
        <p class="text-center mt-5 lg:w-3/4 mx-auto text-gray-500">As their warm, fuzzy paws enter your lives, you'll be
          enchanted by the unconditional love and boundless joy
          they offer, creating lasting memories and unforgettable moments. From the playful romps in the park to the
          comforting cuddles on the couch, your new canine companion will weave their way into your hearts, teaching
          valuable life lessons about responsibility, empathy, and compassion.
        <p class="mt-9 mx-auto w-1/2 text-center">
          <button
            class="rounded-full bg-primary py-5 px-10 drop-shadow-lg font-medium text-white hover:outline hover:text-primary hover:bg-transparent">
            See all Pets
          </button>
        </p>
        </p>
      </div>


      <div class="services my-32">
        <div class="container mx-auto">

          <h2 class="text-center font-extrabold text-4xl"> Our Services</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 px-3">
            <div class="block md:flex">
              <div class="me-5">

                <img src="../assets/icons8-stethoscope-100.png" alt="" class="w-64">
              </div>
              <div class="mb-6">
                <!-- <img src="../assets/stethoscope.svg" alt="" width="100" height="100"> -->
                <h5 class="font-medium text-2xl">Vet</h5>
                <p class="mt-2 text-gray-500">
                  We take pride in our state-of-the-art facilities and cutting-edge medical technology, which allow us to
                  diagnose and treat various health conditions accurately and efficiently.
                </p>
              </div>
            </div>
            <div class="block md:flex">
              <div class="me-3">

                <img src="../assets/icons8-whistle-100.png" alt="" class="w-64">
              </div>
              <div class="mb-6">
                <h5 class="font-medium text-2xl">Training</h5>
                <p class="mt-2 text-gray-500">
                  Our team of certified and experienced dog trainers is committed to using positive reinforcement
                  techniques to teach your furry friend essential obedience skills and behavior modification.
                </p>

              </div>
            </div>
            <div class="block md:flex">
              <div class="me-3">

                <img src="../assets/icons8-leash-100.png" alt="" class="w-64">
              </div>
              <div>
                <h5 class="font-medium text-2xl">Walks</h5>
                <p class="mt-2 text-gray-500">
                  Whether you have a young and energetic pup or a senior dog in need of a leisurely stroll, we tailor our
                  walks to meet their individual needs.

                  When you entrust your dog to our care, you can rest assured that they will be in loving hands.
                </p>

              </div>
            </div>
            <div class="block md:flex">
              <div class="me-3">

                <img src="../assets/icons8-grooming-100.png" alt="" class="w-64">
              </div>
              <div>
                <h5 class="font-medium text-2xl">Salon</h5>
                <p class="mt-2 text-gray-500">
                  Our team of experienced and gentle pet groomers is passionate about providing top-notch care for all
                  breeds and sizes. Whether your dog needs a routine bath, a stylish haircut, or a special spa treatment,
                  we've got you covered.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      rescueCount: 0,
      shelterCount: 0,
      breedsCount: 0,
      rescueLimit: 9,
      shelterLimit: 282,
      breedsLimit: 9
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

    counter() {
      const startRescueCount = setInterval(() => this.rescueCount < this.rescueLimit ? this.rescueCount++ : clearInterval(startRescueCount), 100)
      const startShelterCount = setInterval(() => this.shelterCount < this.shelterLimit ? this.shelterCount++ : clearInterval(startShelterCount), 5)
      const startBreedsCount = setInterval(() => this.breedsCount < this.breedsLimit ? this.breedsCount++ : clearInterval(startBreedsCount), 100)
    }

  },

  mounted() {
    this.getDogs()
    this.counter();
  },
}
</script>

<style scoped>
.left-13 {
  left: 15rem !important;
}
</style>

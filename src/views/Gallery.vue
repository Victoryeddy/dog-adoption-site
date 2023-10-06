<template>
  <div>
    <section
      class="py-[10rem] bg-fixed bg-cover bg-bottom"
      :style="`background-image: url(${require('../assets/dog-adoption-animals.jpeg')})`"
      style="background-blend-mode: multiply; background-color: #0000006e"
    >
      <div class="container mx-auto">
        <p class="text-white font-bold text-5xl">
          Best Friend for <br class="hidden lg:block" />
          Your Best Time
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-2">
        <div class="flex justify-center" v-if="loading">
          <img src="../assets/480 (1).gif" alt="">
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2" v-else>
          <div v-for="item in data" :key="item.id" class="relative">
            <div class="dog-card">
              <div class="w-full h-60">
                <img
                  :src="item.url"
                  alt=""
                  class="w-full h-full"
                />
              </div>
              <div class="overlay"></div>
            </div>
            <div class="card flex items-stretch flex-col p-7">

              <p class="mt-7 mb-2"><span class="font-bold">Name</span>: {{ item.breeds.length !== 0 ? item.breeds[0].name : "No Data" }}</p>
              <p class="mb-2"><span class="font-bold">Speciality</span>: {{ item.breeds.length !== 0 ? item.breeds[0].bred_for : "No Data" }}</p>
              <p class="mb-2"><span class="font-bold">Breed Group</span>: {{ item.breeds.length !== 0 ? item.breeds[0].breed_group : "No Data" }}</p>
              <p class="mb-2"><span class="font-bold">Temperament</span>: {{item.breeds.length !== 0 ? item.breeds[0].temperament : "No Data" }}</p>
              <!-- <p>Width: {{ item.width }}</p>
              <p>Height: {{ item.height }}</p> -->
              <!-- <p class="mt-3">
                <button type="submit" @click="getSingleDog(item.id)" class="mt-3 btn w-75">View More</button>
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      data: [],
      loading:true
    };
  },
  methods: {
    getDogs() {
      this.$http
        .get(`search?limit=18&api_key=${process.env.VUE_APP_DOG_API_KEY}`)
        .then((response) => {
          // console.log(response.data);
          this.loading = false;
          this.data = response.data;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },

    getSingleDog(dogId){
      this.$http
      .get(`${dogId}`)
      .then(response =>{
        console.log(response);
      })
      .catch(error =>{
        console.log(error);
      })
    }
  },
  mounted() {
    this.getDogs();
  },
};
</script>
<style scoped>
/* * {
  outline: 2px solid blue;
} */

.dog-card {
  position: relative;
  overflow: hidden;
}

.dog-card img {
  transition: transform 0.3s ease;
}

.dog-card:hover img {
  transform: scale(1.1);
}

.dog-card:hover .card-overlay {
  opacity: 1;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  opacity: 0;
  transition: opacity 0.3s ease;
}
</style>

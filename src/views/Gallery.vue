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
      <div class="container mx-auto">
        <div class="grid grid-cols-3 gap-2">
          <div v-for="item in data" :key="item.id" class="dog-card">
            <div>
              <div class="w-full h-60">
                <img
                  :src="item.url"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>
              <p>Hello world</p>
              <div class="overlay"></div>
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
    };
  },
  methods: {
    getDogs() {
      this.$http
        .get(`search?limit=20&api_key=${process.env.VUE_APP_DOG_API_KEY}`)
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getDogs();
  },
};
</script>
<style scoped>
* {
  outline: 2px solid blue;
}

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

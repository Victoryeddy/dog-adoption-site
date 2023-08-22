<template>
  <div >
   <section class="py-[10rem] bg-fixed bg-cover bg-bottom" :style="`background-image: url(${require('../assets/dog-adoption-animals.jpeg')})`" style="background-blend-mode: multiply; background-color: #0000006e">
     <div class="container mx-auto">
       <p class="text-white font-bold text-5xl">Best Friend for <br class="hidden lg:block"/> Your Best Time</p>
     </div>
   </section>
  </div>
</template>
<script>
export default{
  data(){
    return{
      currentPage: 1,
      data: []
    }
  },
  methods: {
     getDogs() {
      // this.$http.get(`?limit=20?page=0-2`)
      this.$http
        .get(`?limit=15&page=${this.currentPage}`)
        .then((response) => {
          console.log(response.data);
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted(){
    this.getDogs();
  }
}
</script>

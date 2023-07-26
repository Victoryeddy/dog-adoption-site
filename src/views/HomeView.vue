<template>
  <div class="home">
    <p v-for="single in data" :key="single.id">
     <img :src="single.image.url" width="500" height="400" />
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',

  data(){
    return{
      data: [],
      currentPage: 0,
    }
  },

  methods:{
    getDogs(){
      // this.$http.get(`?limit=20?page=0-2`)
      this.$http.get(`?limit=15&page=${this.currentPage}`)
      .then(response =>{
        console.log(response.data)
        this.data = response.data
      }).catch(error =>{
        console.log(error)
      })
    }
  },

  mounted(){
    this.getDogs()
  }
}
</script>

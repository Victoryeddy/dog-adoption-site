<template>
  <div class="home">
    <p>hello {{ data }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',

  data(){
    return{
      data: []
    }
  },

  methods:{
    getDogs(){
      this.$http.get(`?limit=10?api_key=${process.env.VUE_APP_DOG_API_KEY}`)
      .then(response =>{
        console.log(response)
        this.data = response
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

<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a class="navbar-brand" href="#">Vue Store</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <router-link to="/" tag="a" class="nav-link">Home</router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input @blur="statusSubbox = false" @focus="statusSubbox = true" v-model="searchPhim" class="form-control mr-sm-2" type="text" placeholder="Search">
            <button @click.prevent="search" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div v-show="statusSubbox" id="autobox">
        <div v-for="phim in timPhim" :key="phim.tenPhim" class="alert alert-primary alert-dismissible fade show" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
          </button>
          <strong>Film name: </strong> {{ phim.tenPhim }}
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchPhim: '',
      statusSubbox: false,
      result: '',
      phims: this.$store.getters.getPhim
    }
  },
  methods: {
    search () {
      let status = false
      this.$store.getters.getPhim.filter(e => {
        if (e.tenPhim === this.searchPhim) {
          console.log(e)
          status = true
        }
      })
      if (status === false) {
        console.log('not found !')
      }
    }
  },
  computed: {
    timPhim () {
      return this.phims.filter(e => {
        if (this.searchPhim === '') return undefined
        return e.tenPhim.toUpperCase().match(this.searchPhim.toUpperCase())
      })
    }
  }
}
</script>

<style scoped>
.subbox {
  width: 350px;
  position: absolute;
  top: 7%;
  right: 0;
  z-index: 9;
}
nav {
  position: relative;
}
</style>

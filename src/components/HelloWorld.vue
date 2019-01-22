<template>
  <div class="hello">
    <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <div v-for="phim in phims" :key="phim.tenPhim" class="card text-left">
              <img class="card-img-top" :src="phim.img" alt="">
              <div class="card-body">
                <h4 class="card-title">{{ phim.tenPhim }}</h4>
                <p class="card-text">{{ phim.mieuTa }}</p>
                <button @click="addPhim(phim)" type="button" name="" id="" class="btn btn-primary btn-lg btn-block">Them vao gio hang</button>
              </div>
            </div>
          </div>
          <!-- end menu phim -->
          <div class="col-sm-3">
            <div class="card bg-primary text-white">
              <div class="card-header">
                Danh sach phim da dat ve
              </div>
              <div v-show="sanPham.soLuong > 0" v-for="sanPham in gioHang" :key="sanPham.ten" class="card-body">
                <h4 class="card-title">{{ sanPham.main.tenPhim }}</h4>
                <p class="card-text">{{ sanPham.main.gia }}</p>
                <p>So luong <span style="cursor: pointer" @click="sanPham.soLuong++">+</span> {{ sanPham.soLuong }} <span v-show="sanPham.soLuong > 0" style="cursor: pointer" @click="sanPham.soLuong--">-</span></p>
              </div>
            </div>
            <div v-if="gioHang.length">
            <b>Tong gia tien: {{ tongTien[tongTien.length-1] }}$</b>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phims: this.$store.state.dataPhim,
      gioHang: [],
      giaCa: this.$store.state.count
    }
  },
  methods: {
    checkPhim (phim) {
      for (let i = 0; i < this.gioHang.length; i++) {
        if (this.gioHang[i].main.tenPhim === phim.tenPhim) {
          return i
        }
      }
      return false
    },
    addPhim (phim) {
      if (this.checkPhim(phim) === false) {
        this.gioHang.push({
          main: phim,
          soLuong: 1
        })
      } else {
        this.gioHang[this.checkPhim(phim)].soLuong += 1
      }
    }
  },
  computed: {
    tongTien () {
      var tongGia = this.giaCa
      return this.gioHang.map(e => {
        return (tongGia += Number(e.main.gia.substring(0, e.main.gia.indexOf('$'))) * e.soLuong)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

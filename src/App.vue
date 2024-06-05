<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        Aside
        <MainMenu />
      </el-aside>
      <el-container>
        <el-header>
          Header
          <p>Value keep in VUEX Storage: <b>{{ $store.state.storeKey }}</b> / Counter: {{ $store.getters.getCounter }}</p>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>
          Footer
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'

export default {

  // https://www.koderhq.com/

  name: 'app',
  components: {
    MainMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

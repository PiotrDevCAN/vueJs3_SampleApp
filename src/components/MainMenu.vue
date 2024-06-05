<template>
  <div>
    <p>Main Menu Components</p>

    <pretty-menu />
    <ugly-menu :isMenuOpen="isMenuOpen" @openMenuEvent="openMenuEvent" @closeMenuEvent="closeMenuEvent" />

  </div>
</template>

<script>
import UglyMenu from '@/components/UglyMenu.vue'
import PrettyMenu from '@/components/PrettyMenu.vue'

export default {
  components: {
    UglyMenu,
    PrettyMenu
  },
  data() {
    return {
      isMenuOpen: true,
      attachedDataOpen: 'sample open',
      attachedDataClose: 'sample close'
    }
  },
  methods: {
    openMenuEvent() {
      this.isMenuOpen = true
    },
    closeMenuEvent() {
      this.isMenuOpen = false
    }
  },
  emits: ['openMenuEvent', 'closeMenuEvent']
}
</script>

<style>
li {
  color: blue
}

.router-link-exact-active {
  color: red
}
</style>
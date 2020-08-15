<template>
  <div>
    <div v-show="opened" @mouseleave="dissappear()">
      <Side class="cursor-pointer" />
    </div>
    <div v-show="closed" @mouseenter="show()">
      <Small class="cursor-pointer" />
    </div>
  </div>
</template>
<script>
import Side from './sideNav'
import Small from './smallNav'
export default {
  components: {
    Side,
    Small,
  },
  data() {
    return {}
  },
  computed: {
    opened() {
      return this.$store.state.nav.open
    },
    closed() {
      return this.$store.state.nav.close
    },
  },
  methods: {
    show() {
      this.$store.commit('nav/show')
    },
    dissappear() {
      this.$store.commit('nav/dissappear')
    },
  },
}
</script>
<style scoped></style>

<template>
  <div>
    <div class="flex flex-row">
      <div class="bg-white lg:block hidden">
        <Navigation />
      </div>
      <div class="flex-grow bg-gray-200 p-12 min-h-screen lg:block hidden">
        <Main />
      </div>
    </div>
    <div class="flex flex-col">
      <div class="bg-white lg:hidden flex">
        <MobileNav />
      </div>
      <div
        class="lg:hidden block bg-gray-200 p-12 min-h-screen"
        @click="pause()"
      >
        <Main />
      </div>
    </div>
  </div>
</template>
<script>
import MobileNav from '../Navigation/mobile'
import Navigation from '../Navigation/index'
import Main from '../Content/index'
export default {
  components: {
    Navigation,
    Main,
    MobileNav,
  },
  methods: {
    pause() {
      this.$store.commit('mobile/disappear')
    },
  },
}
</script>
<style scoped></style>

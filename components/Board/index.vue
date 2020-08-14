<template>
  <div>
    <div class="flex flex-row">
      <div class="bg-white lg:block hidden">
        <Navigation />
      </div>
      <div class="bg-white lg:hidden block">
        <MobileNav />
      </div>
      <div class="flex-grow bg-gray-700 p-12">
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
}
</script>
<style scoped></style>

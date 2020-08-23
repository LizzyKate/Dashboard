<template>
  <div>
    <div class="lg:flex lg:flex-row lg:justify-between block mt-6 mb-8">
      <div class="flex-grow lg:-mx-5">
        <Tabled class="lg:px-5" />
      </div>
      <div class="lg:w-1/3 w-full lg:-mx-5 lg:mt-0 mt-5">
        <Map class="lg:px-5" />
      </div>
    </div>
  </div>
</template>
<script>
import Tabled from './table'
import Map from './map'
export default {
  components: {
    Tabled,
    Map,
  },
}
</script>
<style scoped></style>

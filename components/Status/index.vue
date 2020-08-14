<template>
  <div>
    <div class="lg:flex lg:flex-row lg:justify-between lg:items-center block">
      <div class="flex-grow">
        <Tabled />
      </div>
      <div>
        <Map />
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

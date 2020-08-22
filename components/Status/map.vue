<template>
  <div>
    <div class="card bg-white flex flex col">
      <div class="p-4 flex flex-row item-center justify-between">
        <div class="">
          <h5 class="text-default font-semibold text-base">Real time</h5>
        </div>
        <div>
          <button
            class="btn btn-secondary btn-sm btn-secondary-sec focus:border-0 px-4 hover:text-default target"
          >
            Action
          </button>
        </div>
      </div>
      <div
        class="border border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-25"
      ></div>
      <div class="p-5 m-auto">
        <GmapMap :center="{ lat: 10, lng: 10 }" :zoom="7" class="map">
          <GmapMarker
            v-for="(m, index) in markers"
            :key="index"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center = m.position"
          />
        </GmapMap>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.map {
  width: 300px !important;
  height: 300px;
}
@media screen and (max-width: 320px) {
  .map {
    width: 210px !important;
  }
}
/* @media screen and (max-width: 405px) {
  .map {
    width: 292px !important;
  }
} */
/* @media screen and (min-width: 410px) {
  .map {
    width: 343px;
  }
} */
/* @media screen and (max-width: 460px) {
  .map {
    width: 376px;
  }
} */
/* @media screen and (max-width: 330px) {
  .map {
    width: 250px !important;
  }
} */
/* @media screen and (min-width: 768px) {
  .map {
    width: 694px !important;
  }
} */
/* @media screen and (min-width: 1024px) {
  .map {
    width: 951px !important;
  }
} */
</style>

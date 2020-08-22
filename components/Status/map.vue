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
      <div class="p-5 mt-4">
        <div
          v-for="(point, i) in map"
          :key="i"
          class="flex flex-row justify-between items-center mt-4"
        >
          <div>
            <i :class="point.font"></i>
          </div>
          <div class="flex flex-col items-center">
            <div>
              <p class="text-gray-800 text-sm">{{ point.world }}</p>
            </div>
            <div>
              <p class="text-default text-sm font-bold">{{ point.place }}</p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div>
              <p class="text-gray-800 text-sm">{{ point.go }}</p>
            </div>
            <div>
              <p class="text-default text-sm font-bold">{{ point.no }}</p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div>
              <p class="text-gray-800 text-sm">{{ point.land }}</p>
            </div>
            <div>
              <p class="text-default text-sm font-bold">{{ point.percent }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      map: [
        {
          font: 'fas fa-flag-usa',
          world: 'Country :',
          place: 'United States',
          go: 'Visits',
          no: 2500,
          land: 'Bounce',
          percent: 30 + '%',
        },
        {
          font: 'fas fa-flag-usa',
          world: 'Country :',
          place: 'Germany',
          go: 'Visits',
          no: 2500,
          land: 'Bounce',
          percent: 30 + '%',
        },
        {
          font: 'fas fa-flag-usa',
          world: 'Country :',
          place: 'Great Britain',
          go: 'Visits',
          no: 2500,
          land: 'Bounce',
          percent: 30 + '%',
        },
      ],
    }
  },
}
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
</style>

<template>
  <div>
    <div class="card bg-white flex flex col">
      <div class="p-4">
        <h5 class="text-default font-semibold text-base">Progress Track</h5>
      </div>
      <div
        class="border border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-25"
      ></div>
      <div v-for="(track, i) in progress" :key="i" class="p-5">
        <div class="flex flex-row items-center">
          <div class="">
            <i class="text-2xl" :class="track.font"></i>
          </div>
          <div class="ml-8 flex flex-col w-full">
            <div>
              <h6 class="text-gray-800 font-sm font-semibold">
                {{ track.title }}
              </h6>
            </div>
            <!-- <div class="">
              <p class="font-xs text-gray-700 font-light">
                hi
              </p>
            </div> -->
            <div
              class="flex progress rounded h-1 bg-gray-200 overflow-hidden shadow"
            >
              <div
                class="shadow-none rounded-none h-auto"
                :class="[track.width, track.color]"
              ></div>
            </div>
          </div>
        </div>
        <div
          class="border border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-25 py-2"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      progress: [
        {
          font: ' text-gray-800 fab fa-bootstrap',
          title: 'Argon Design System',
          color: 'bg-warning',
          width: 'w-7/12',
        },
        {
          font: 'text-danger fab fa-angular',
          title: 'Angular Now UI Kit PRO',
          color: 'bg-success',
          width: 'w-full',
        },
        {
          font: 'text-yellow-500 fab fa-python',
          title: 'Black Dasboard',
          color: 'bg-danger',
          width: 'w-8/12',
        },
        {
          font: 'text-info fab fa-react',
          title: 'React Material Dashboard',
          color: 'bg-info',
          width: 'w-11/12',
        },
        {
          font: 'text-success fab fa-vuejs',
          title: 'Vue Paper UI Kit PRO',
          color: 'bg-success',
          width: 'w-full',
        },
      ],
    }
  },
}
</script>
<style scoped>
.progress {
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
}
</style>

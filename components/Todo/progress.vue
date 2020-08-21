<template>
  <div>
    <div class="card bg-white flex flex col">
      <div class="p-4 flex flex-row item-center justify-between">
        <div class="flex flex-col">
          <div>
            <p class="text-gray-600 font-light text-xs">{{ detail }}</p>
          </div>
          <div>
            <h5 class="text-default font-semibold text-base">{{ topic }}</h5>
          </div>
        </div>
        <div>
          <button
            class="btn btn-secondary btn-sm btn-secondary-sec focus:border-0 px-4 hover:text-default target"
          >
            {{ action }}
          </button>
        </div>
      </div>
      <div
        class="border border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-25"
      ></div>
      <div v-for="(track, i) in check" :key="i" class="p-5">
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
            <div
              class="flex progressing rounded h-1 bg-gray-200 overflow-hidden shadow"
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
  props: {
    check: {
      type: Array,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  // data() {
  //   return {
  //     progress: [
  //       {
  //         font: ' text-gray-800 fab fa-bootstrap',
  //         title: 'Argon Design System',
  //         color: 'bg-warning',
  //         width: 'w-7/12',
  //       },
  //       {
  //         font: 'text-danger fab fa-angular',
  //         title: 'Angular Now UI Kit PRO',
  //         color: 'bg-success',
  //         width: 'w-full',
  //       },
  //       {
  //         font: 'text-yellow-500 fab fa-python',
  //         title: 'Black Dasboard',
  //         color: 'bg-danger',
  //         width: 'w-8/12',
  //       },
  //       {
  //         font: 'text-info fab fa-react',
  //         title: 'React Material Dashboard',
  //         color: 'bg-info',
  //         width: 'w-11/12',
  //       },
  //       {
  //         font: 'text-success fab fa-vuejs',
  //         title: 'Vue Paper UI Kit PRO',
  //         color: 'bg-success',
  //         width: 'w-full',
  //       },
  //     ],
  //   }
  // },
}
</script>
<style scoped></style>

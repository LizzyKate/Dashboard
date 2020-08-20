<template>
  <div>
    <div class="card bg-white flex flex col">
      <div class="p-4">
        <h5 class="text-default font-semibold text-base">To do list</h5>
      </div>

      <div
        class="border border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-25"
      ></div>
      <div v-for="(item, i) in list" :key="i" class="p-5">
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-row items-center">
            <div
              class="w-4 h-12 border-3 border-solid border-r-0 border-t-0 border-b-0 border-opacity-100"
              :class="item.color"
            ></div>

            <div class="ml-4 flex flex-col">
              <div>
                <h6
                  class="text-gray-800 font-sm font-semibold"
                  :class="item.check ? item.text : null"
                >
                  {{ item.task }}
                </h6>
              </div>
              <div class="">
                <p
                  class="font-xs text-gray-700 font-light"
                  :class="item.check ? item.text : null"
                >
                  {{ item.time }}
                </p>
              </div>
            </div>
          </div>
          <div>
            <!-- <input
              v-model="item.check"
              type="checkbox"
              :class="item.check ? item.background : null"
            /> -->

            <input
              v-model="item.check"
              type="checkbox"
              class="form-checkbox focus:outline-none focus:border-0 focus:shadow-none cursor-pointer"
              :class="item.check ? item.background : 'bg-gray-200'"
            />
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
      list: [
        {
          background: 'text-success',
          color: 'border-success',
          task: 'Call with Dave',
          time: 10 + ':' + 30 + ' AM',
          text: 'line-through',
          check: false,
        },
        {
          background: 'text-danger',
          color: 'border-danger',
          task: 'Lunch Meeting',
          time: 10 + ':' + 30 + ' AM',
          text: 'line-through',
          check: false,
        },
        {
          background: 'text-info',
          color: 'border-info',
          task: 'Argon Dashboard Launch',
          time: 10 + ':' + 30 + ' AM',
          text: 'line-through',
          check: true,
        },
        {
          background: 'text-warning',
          color: 'border-warning',
          task: 'Winter Hackathon',
          time: 10 + ':' + 30 + ' AM',
          text: 'line-through',
          check: true,
        },
        {
          background: 'text-success',
          color: 'border-success',
          task: 'Dinner with Family',
          time: 10 + ':' + 30 + ' AM',
          text: 'line-through',
          check: true,
        },
      ],
    }
  },
}
</script>
<style scoped></style>

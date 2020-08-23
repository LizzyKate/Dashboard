<template>
  <div>
    <div
      class="card bg-white flex flex col lg:mr-12 overflow-x-scroll push max-h-full"
    >
      <div class="p-4">
        <div>
          <h5 class="text-default font-semibold text-base">Light table</h5>
        </div>
      </div>

      <div class="flex flex-col shift">
        <div
          class="border border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-25"
        ></div>
        <div class="py-1 flex flex-row items-center bg-gray-100">
          <div v-for="(item, i) in topic" :key="i">
            <div
              :style="{ width: item.width }"
              class="flex flex-row items-center"
            >
              <div class="pl-8">
                <p class="text-sm text-gray-700">{{ item.table }}</p>
              </div>
              <div class="flex flex-col items-center ml-4">
                <div class="cursor-pointer" :class="item.show">
                  <i :class="item.up"></i>
                </div>
                <div class="-mt-4 cursor-pointer" :class="item.show">
                  <i :class="item.down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="border border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-25"
        ></div>
        <div v-for="(task, a) in detail" :key="a">
          <div class="py-4 flex flex-row items-center">
            <div class="flex flex-row items-center pl-8" style="width: 25rem;">
              <div>
                <i class="text-2xl" :class="task.font"></i>
              </div>
              <div class="ml-8">
                <h6 class="text-base text-gray-700 font-semibold">
                  {{ task.project }}
                </h6>
              </div>
            </div>
            <div style="width: 12rem;" class="pl-8">
              <p class="font-sm text-gray-700">{{ task.budget }}</p>
            </div>
            <div class="flex flex-row items-center pl-8" style="width: 12rem;">
              <div class="w-2 h-2 rounded-full" :class="task.color"></div>
              <div class="ml-2">
                <p class="font-sm text-gray-700">{{ task.status }}</p>
              </div>
            </div>
            <div class="relative pl-8" style="width: 12rem;">
              <div class="cursor-pointer">
                <img
                  src="/img/profile-small-1.jpg"
                  class="rounded-full border-0 __profile"
                  alt=""
                />
              </div>
              <div class="absolute z-20 adjust top-0 cursor-pointer">
                <img
                  src="/img/profile-small-1.jpg"
                  class="rounded-full border-0 __profile"
                  alt=""
                />
              </div>
              <div class="absolute z-30 second top-0 cursor-pointer">
                <img
                  src="/img/profile-small-1.jpg"
                  class="rounded-full border-0 __profile"
                  alt=""
                />
              </div>
              <div class="absolute z-50 third top-0 cursor-pointer">
                <img
                  src="/img/profile-small-1.jpg"
                  class="rounded-full border-0 __profile"
                  alt=""
                />
              </div>
            </div>
            <div class="flex flex-row items-center pl-20" style="width: 29rem;">
              <div>
                <p class="font-sm text-gray-700">{{ task.percent }}</p>
              </div>
              <div
                class="flex progress rounded h-1 bg-gray-200 overflow-hidden shadow ml-4"
              >
                <div
                  class="shadow-none rounded-none h-auto"
                  :class="[task.color, task.width]"
                ></div>
              </div>
            </div>
          </div>
          <div
            class="border border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-25 my-4"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topic: [
        {
          table: 'Project',
          up: 'fas fa-caret-up',
          down: 'fas fa-caret-down',
          width: '25rem',
          show: 'block',
        },
        {
          table: 'Budget',
          up: 'fas fa-caret-up',
          down: 'fas fa-caret-down',
          width: '12rem',
          show: 'block',
        },
        {
          table: 'Status',
          up: 'fas fa-caret-up',
          down: 'fas fa-caret-down',
          width: '12rem',
          show: 'block',
        },
        {
          table: 'Users',
          up: 'fas fa-caret-up',
          down: 'fas fa-caret-down',
          width: '15rem',
          show: 'hidden',
        },
        {
          table: 'Completion',
          up: 'fas fa-caret-up',
          down: 'fas fa-caret-down',
          width: '29rem',
          show: 'block',
        },
      ],
      detail: [
        {
          font: ' text-gray-800 fab fa-bootstrap',
          project: 'Argon Design System',
          budget: '$' + 2500 + ' USD',
          status: 'Pending',
          color: 'bg-warning',
          width: 'w-3/5',
          percent: 60 + '%',
        },
        {
          font: 'text-danger fab fa-angular',
          project: 'Angular Now UI Kit PRO',
          budget: '$' + 1800 + ' USD',
          status: 'Completed',
          color: 'bg-success',
          width: 'w-full',
          percent: 100 + '%',
        },
        {
          font: 'text-yellow-500 fab fa-python',
          project: 'Black Dasboard',
          budget: '$' + 3150 + ' USD',
          status: 'Delayed',
          color: 'bg-danger',
          width: 'w-3/4',
          percent: 75 + '%',
        },
        {
          font: ' text-info fab fa-react',
          project: 'React Material Dashboard',
          budget: '$' + 4400 + ' USD',
          status: 'On schedule',
          color: 'bg-info',
          width: 'w-11/12',
          percent: 91 + '%',
        },
        {
          font: ' text-success fab fa-vuejs',
          project: 'Vue Paper UI Kit PRO',
          budget: '$' + 2200 + ' USD',
          status: 'Completed',
          color: 'bg-success',
          width: 'w-full',
          percent: 100 + '%',
        },
      ],
    }
  },
}
</script>
<style scoped>
.push {
  max-width: 45.5rem;
  scroll-padding: 0;
  height: 650px;
}
.push::-webkit-scrollbar {
  display: none !important;
}
.shift {
  width: 93rem;
}
.__profile {
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.adjust {
  left: 47px;
}
.second {
  left: 63px;
}
.third {
  left: 80px;
}
.progress {
  width: 12rem;
}
</style>

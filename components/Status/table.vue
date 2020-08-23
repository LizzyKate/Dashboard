<template>
  <div>
    <div class="card bg-white flex flex col lg:mr-12 overflow-x-scroll push">
      <div class="p-4">
        <div>
          <h5 class="text-default font-semibold text-base">Light table</h5>
        </div>
      </div>

      <div
        class="border border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-25"
      ></div>
      <div class="flex flex-col shift">
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
        <div class="py-4 flex flex-row items-center">
          <div class="flex flex-row items-center pl-8" style="width: 25rem;">
            <div>hi</div>
            <div class="ml-8">
              <h6 class="text-base text-gray-700 font-semibold">
                Argon Design System
              </h6>
            </div>
          </div>
          <div style="width: 12rem;" class="pl-8">
            <p class="font-sm text-gray-700">$2500 USD</p>
          </div>
          <div class="flex flex-row items-center pl-10" style="width: 12rem;">
            <div class="w-2 h-2 rounded-full bg-success"></div>
            <div class="ml-2">
              <p class="font-sm text-gray-700">Pending</p>
            </div>
          </div>
          <div class="relative pl-16" style="width: 15rem;">
            <div>
              <img
                src="/img/profile-small-1.jpg"
                class="rounded-full border-0 __profile"
                alt=""
              />
            </div>
            <div class="absolute z-10 adjust top-0">
              <img
                src="/img/profile-small-1.jpg"
                class="rounded-full border-0 __profile"
                alt=""
              />
            </div>
            <div class="absolute z-20 second top-0">
              <img
                src="/img/profile-small-1.jpg"
                class="rounded-full border-0 __profile"
                alt=""
              />
            </div>
            <div class="absolute z-30 third top-0">
              <img
                src="/img/profile-small-1.jpg"
                class="rounded-full border-0 __profile"
                alt=""
              />
            </div>
          </div>
          <div class="flex flex-row items-center pl-10" style="width: 29rem;">
            <div>
              <p class="font-sm text-gray-700">60%</p>
            </div>
            <div
              class="flex progressing rounded h-1 bg-red-900 overflow-hidden shadow"
            >
              <div class="shadow-none rounded-none h-auto w-3/4"></div>
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
    }
  },
}
</script>
<style scoped>
.push {
  max-width: 45.5rem;
  scroll-padding: 0;
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
  left: 12px;
}
.second {
  left: 30px;
}
.third {
  left: 45px;
}
</style>

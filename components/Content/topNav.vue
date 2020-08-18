<template>
  <div class="w-full">
    <div class="flex flex-row justify-between items-center px-12 pt-4">
      <div class="relative flex-grow">
        <input
          type="text"
          placeholder="Search"
          class="p-3 rounded-full bg-default placeholder-gray-400 text-gray-400 new w-64 pl-12"
        />
        <div class="text-gray-400 absolute search">
          <i class="fas fa-search"></i>
        </div>
      </div>
      <div class="flex flex-row justify-between items-center">
        <div class="relative text-default p-4">
          <div>
            <span class="">
              <button
                id="options-menu"
                type="button"
                class="flex items-center focus:outline-none transition ease-in-out duration-150"
                aria-haspopup="true"
                aria-expanded="true"
                @click="show()"
              >
                <i class="fas fa-bell"></i>
                <svg
                  class="-mr-1 ml-1 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </span>
          </div>

          <div
            v-show="open"
            class="origin-top-right second absolute mt-10 add rounded-md shadow-lg"
          >
            <div class="rounded-md bg-white shadow-xs">
              <div
                class="p-3 flex flex-col"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div class="mb-4">
                  <p class="text-gray-700 font-medium text-sm">
                    You have <b class="text-primary">13</b> notifications
                  </p>
                </div>
                <div v-for="(note, f) in notify" :key="f" class="py-4">
                  <div class="flex flex-row">
                    <div>
                      <img
                        :src="`/img/${note.image}`"
                        class="rounded-full border-0 __profiling"
                        alt=""
                      />
                    </div>
                    <div class="flex-col flex ml-4 spec w-full">
                      <h6 class="text-default text-sm font-semibold mb-1">
                        {{ note.name }}
                      </h6>
                      <p class="text-gray-600 text-sm">
                        {{ note.test }}
                      </p>
                    </div>
                    <div>
                      <p class="text-sm text-gray-600">{{ note.time }}</p>
                    </div>
                  </div>
                  <div
                    class="border mt-4 border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-50"
                  ></div>
                </div>
                <div>
                  <p class="text-primary text-base font-semibold text-center">
                    View all
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative text-default p-4">
          <div>
            <span class="">
              <button
                id="options-menu"
                type="button"
                class="flex items-center focus:outline-none transition ease-in-out duration-150"
                aria-haspopup="true"
                aria-expanded="true"
                @click="hide()"
              >
                <i class="far fa-copy"></i>
                <svg
                  class="-mr-1 ml-1 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </span>
          </div>

          <div
            v-show="close"
            class="origin-top-right absolute adding third mt-10 rounded-md shadow-lg"
          >
            <div class="rounded-md bg-default shadow-xs">
              <div
                class="py-4 px-8 flex flex-col"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div class="flex flex-row justify-between items-center mt-4">
                  <div class="flex flex-col items-center">
                    <div
                      class="rounded-full bg-danger text-center text-white icon"
                    >
                      <i class="far fa-calendar-alt boost"></i>
                    </div>
                    <div class="text-white font inc-bold mt-2">
                      <h6>Calendar</h6>
                    </div>
                  </div>
                  <div class="flex flex-col items-center">
                    <div
                      class="rounded-full bg-warning text-center text-white icon"
                    >
                      <i class="fas fa-envelope boost"></i>
                    </div>
                    <div class="text-white inc font-bold mt-2">
                      <h6>Message</h6>
                    </div>
                  </div>
                  <div class="flex flex-col items-center">
                    <div
                      class="rounded-full bg-primary text-center text-white icon"
                    >
                      <i class="fas fa-credit-card boost"></i>
                    </div>
                    <div class="text-white fo incnt-bold mt-2">
                      <h6>Payment</h6>
                    </div>
                  </div>
                </div>
                <div class="flex flex-row justify-between items-center my-8">
                  <div class="flex flex-col items-center">
                    <div
                      class="rounded-full bg-success text-center text-white icon"
                    >
                      <i class="fas fa-receipt boost"></i>
                    </div>
                    <div class="text-white inc font-bold mt-2">
                      <h6>Report</h6>
                    </div>
                  </div>
                  <div class="flex flex-col items-center">
                    <div
                      class="rounded-full bg-purple-600 text-center text-white icon"
                    >
                      <i class="fas fa-map-marker-alt boost"></i>
                    </div>
                    <div class="text-white font- incbold mt-2">
                      <h6>Map</h6>
                    </div>
                  </div>
                  <div class="flex flex-col items-center">
                    <div
                      class="rounded-full bg-yellow-500 text-center text-white icon"
                    >
                      <i class="fas fa-shopping-basket boost"></i>
                    </div>
                    <div class="text-white font-b incold mt-2">
                      <h6>Shop</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-between items-center p-4">
          <div>
            <img
              src="/img/profile-small-1.jpg"
              class="rounded-full border-0 __profile"
              alt=""
            />
          </div>
          <div>
            <h6 class="ml-4 font-semibold text-default font-sm">Jhon Snow</h6>
          </div>
        </div>
      </div>
    </div>
    <div
      class="border mt-2 border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-50"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false,
      close: false,
      notify: [
        {
          image: 'profile-small-1.jpg',
          time: 2 + ' hrs ago',
          name: 'Jhon Snow',
          test: 'Let"s meet at Starbucks at 11:30. Wydt',
        },
        {
          image: 'profile-small-5.jpg',
          time: 2 + ' hrs ago',
          name: 'Jhon Snow',
          test: 'A new issue has been reported for Argon',
        },
        {
          image: 'profile-small-6.jpg',
          time: 2 + ' hrs ago',
          name: 'Jhon Snow',
          test: 'Your Post have been liked a lot',
        },
        {
          image: 'profile-small-9.jpg',
          time: 2 + ' hrs ago',
          name: 'Jhon Snow',
          test: 'Let"s meet at Starbucks at 11:30. Wydt',
        },
        {
          image: 'profile-small-15.jpg',
          time: 2 + ' hrs ago',
          name: 'Jhon Snow',
          test: 'Let"s meet at Starbucks at 11:30. Wydt',
        },
      ],
    }
  },
  methods: {
    show() {
      this.open = !this.open
      if (this.open) {
        this.close = false
      }
    },
    hide() {
      this.close = !this.close
      if (this.close) {
        this.open = false
      }
    },
  },
}
</script>
<style scoped>
.new {
  font-size: 14px !important;
}
.search {
  top: 12px;
  left: 20px;
}
.second {
  right: 40px;
}
.third {
  right: 25px;
}
.__profile {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.icon {
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.__profiling {
  width: 50px;
  height: 35px;
  cursor: pointer;
}
.add {
  width: 35rem;
  height: 500px;
  overflow-y: scroll;
}
.adding {
  width: 24rem;
}
.boost {
  font-size: 1.5rem;
  margin-top: 1.25rem;
}
.inc h6 {
  font-size: 1rem;
}
</style>

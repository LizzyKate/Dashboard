<template>
  <div>
    <div class="relative">
      <div
        class="flex flex-row bg-gray-200 justify-between items-center w-screen px-4"
      >
        <div class="flex flex-row justify-between items-center">
          <div class="p-4 text-default" @click="play()">
            <i class="fas fa-bars"></i>
          </div>
          <div class="p-4 text-default">
            <i class="fas fa-search-plus"></i>
          </div>
          <div class="relative p-4 text-default">
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
              class="origin-top-right second z-50 absolute mt-10 add rounded-md shadow-lg"
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
          <div class="relative p-4 text-default">
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
              class="origin-top-right absolute z-50 adding third mt-10 rounded-md shadow-lg"
            >
              <div class="rounded-md bg-default shadow-xs">
                <div
                  class="p-4 flex flex-col"
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
        </div>
        <div class="p-4">
          <img
            src="/img/profile-small-1.jpg"
            class="rounded-full border-0 __profile"
            alt=""
          />
        </div>
      </div>
      <div
        class="border border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-50"
      ></div>
      <div v-show="side" class="fixed w-64 top-0 z-30">
        <Side />
      </div>
    </div>
  </div>
</template>
<script>
import Side from './sideNav'
export default {
  components: {
    Side,
  },
  data() {
    return {
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
  computed: {
    side() {
      return this.$store.state.mobile.side
    },
    open() {
      return this.$store.state.mobile.open
    },
    close() {
      return this.$store.state.mobile.close
    },
  },
  methods: {
    show() {
      this.$store.commit('mobile/show')
    },

    hide() {
      this.$store.commit('mobile/hide')
    },

    play() {
      this.$store.commit('mobile/appear')
    },
  },
}
</script>
<style scoped>
.second {
  left: -48px;
}
.third {
  left: -130px;
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
  width: 18rem;
  height: 500px;
  overflow-y: scroll;
}
.adding {
  width: 18rem;
}
.boost {
  font-size: 1.5rem;
  margin-top: 1.25rem;
}
.inc h6 {
  font-size: 1rem;
}
@media screen and (max-width: 320px) {
  .add {
    width: 12rem;
  }
  .adding {
    width: 16rem;
  }
  .icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  .boost {
    font-size: 1rem;
    margin-top: 0.75rem;
  }
  .inc h6 {
    font-size: 0.75rem;
  }
}
@media screen and (max-width: 290px) {
  .adding {
    width: 14rem;
  }
  .boost {
    font-size: 1rem;
    margin-top: 0.75rem;
  }
  .inc h6 {
    font-size: 0.75rem;
  }
}
@media screen and (min-width: 450px) {
  .add,
  .adding {
    width: 24rem !important;
  }
  .__profiling {
    width: 70px;
    height: 65px;
  }
  .spec {
    width: 75%;
  }
}
</style>

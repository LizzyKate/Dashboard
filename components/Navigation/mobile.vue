<template>
  <div>
    <div class="relative">
      <div
        class="flex flex-row bg-white justify-between items-center w-screen px-4"
      >
        <div class="flex flex-row bg-white justify-between items-center">
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
              class="origin-top-right absolute mt-10 w-56 rounded-md shadow-lg"
            >
              <div class="rounded-md bg-white shadow-xs">
                <div
                  class="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    role="menuitem"
                    >Account settings</a
                  >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    role="menuitem"
                    >Support</a
                  >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    role="menuitem"
                    >License</a
                  >
                  <form method="POST" action="#">
                    <button
                      type="submit"
                      class="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </form>
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
                  @click="show()"
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
              v-show="open"
              class="origin-top-right absolute second mt-10 w-56 rounded-md shadow-lg"
            >
              <div class="rounded-md bg-white shadow-xs">
                <div
                  class="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    role="menuitem"
                    >Account settings</a
                  >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    role="menuitem"
                    >Support</a
                  >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    role="menuitem"
                    >License</a
                  >
                  <form method="POST" action="#">
                    <button
                      type="submit"
                      class="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4">
          <img
            src="img/profile-small-1.jpg"
            class="rounded-full border-0 __profile"
            alt=""
          />
        </div>
      </div>
      <div v-show="side" class="absolute w-64 top-0 z-30">
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
      open: false,
    }
  },
  computed: {
    side() {
      return this.$store.state.mobile.side
    },
  },
  methods: {
    show() {
      this.open = !this.open
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
.__profile {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
</style>

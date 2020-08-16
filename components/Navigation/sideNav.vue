<template>
  <div>
    <!-- component -->
    <div class="flex flex-col min-h-screen w-full relative">
      <div
        class="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 min-h-screen"
        :class="{ absolute: !changed, relative: changed, 'z-30': !changed }"
      >
        <div
          class="flex-shrink-0 px-6 py-8 flex flex-row items-center justify-between"
        >
          <div class="">
            <h3 class="text-green-600 text-lg font-bold">Argon</h3>
          </div>
          <div class="ml-auto" @click="paste()">
            <div v-if="!changed">
              <i class="fas fa-bars"></i>
            </div>
            <div v-else>
              <i class="fas fa-align-right"></i>
            </div>
          </div>
        </div>
        <nav class="flex flex-col px-4 pb-4 overflow-y-auto">
          <div
            v-for="(pick, i) in bar"
            :key="i"
            class="flex flex-row justify-between items-center"
          >
            <div class="p-2 flex flex-row w-full">
              <div>
                <i :class="pick.fonts"></i>
              </div>
              <div class="text-default ml-4">
                <h5 class="cursor-pointer" @click="show(i)">
                  {{ pick.content }}
                </h5>
                <div v-show="pick.open" class="py-2">
                  <a
                    v-for="(item, a) in pick.list"
                    :key="a"
                    class="block text-sm text-gray-500 font-light focus:outline-none"
                    href="#"
                    >{{ item }}</a
                  >
                </div>
              </div>
              <div class="ml-auto">
                <div>
                  <button class="focus:outline-none" @click="show(i)">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      :class="{
                        'rotate-180': pick.open,
                        'rotate-0': !pick.open,
                      }"
                      class="inline w-4 transition-transform duration-200 transform"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="p-2 flex flex-row">
            <div class="text-danger">
              <i class="far fa-calendar-alt"></i>
            </div>
            <div class="text-default ml-4">
              <h5 class="">Calendar</h5>
            </div>
          </div>

          <div
            class="p-3 border border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-50"
          ></div>
          <div v-for="(item, b) in below" :key="b" class="p-2 flex flex-row">
            <div>
              <i :class="item.fonts"></i>
            </div>
            <div class="text-default ml-4">
              <h5 class="">{{ item.content }}</h5>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bar: [
        {
          fonts: 'text-info fas fa-home',
          content: 'Dashboard',
          list: ['Dashboard', 'Alternative'],
          open: false,
        },
        {
          fonts: 'far fa-copy text-warning',
          content: 'Examples',
          list: ['Pricing', 'Login', 'Register', 'Lock', 'Timeline', 'Profile'],
          open: false,
        },
        {
          fonts: 'fas fa-cubes text-info ',
          content: 'Components',
          list: [
            'Buttons',
            'Cards',
            'Grid',
            'Notifications',
            'Icons',
            'Typography',
            'Multi Level',
          ],
          open: false,
        },
        {
          fonts: 'form fas fa-book',
          content: 'Forms',
          list: ['Element', 'Components', 'Validation'],
          open: false,
        },
        {
          fonts: 'text-default fa-align-left',
          content: 'Tables',
          list: ['Tables', 'Sortable', 'Paginated Tables'],
          open: false,
        },
        {
          fonts: 'fas fa-map text-primary',
          content: 'Maps',
          list: ['Google', 'Vector'],
          open: false,
        },
      ],
      below: [
        {
          fonts: 'text-default fas fa-plane-departure',
          content: 'Getting Started',
        },
        {
          fonts: 'text-default fas fa-fan',
          content: 'Foundation',
        },
        {
          fonts: 'text-default fas fa-cubes',
          content: 'Component',
        },
        {
          fonts: 'text-default fas fa-globe',
          content: 'Plugins',
        },
      ],
    }
  },
  computed: {
    changed() {
      return this.$store.state.nav.clicked
    },
  },
  methods: {
    show(i) {
      this.bar.forEach((e, f) => {
        if (f !== i) {
          e.open = false
        }
      })
      this.bar[i].open = !this.bar[i].open
    },
    paste() {
      this.$store.commit('nav/stayed')
    },
  },
}
</script>
<style scoped></style>

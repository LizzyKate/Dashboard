<template>
  <div>
    <div class="lg:w-64 w-full p-4 text-white flex flex-col">
      <div class="flex flex-row justify-between items-center">
        <div class="flex-grow">
          <h6 class="font-sm font-semibold">{{ con.title }}</h6>
        </div>

        <div class="relative inline-block text-left">
          <div>
            <button class="btn btn-secondary btn-sm" @click="show()">
              <i class="fas fa-ellipsis-h text-primary"></i>
            </button>

            <div
              v-show="open"
              class="origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg"
            >
              <div class="rounded-md bg-white shadow-xs">
                <div
                  class="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    v-for="(down, i) in con.drop"
                    :key="i"
                    href="#"
                    class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                    role="menuitem"
                    >{{ down }}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h6 class="font-base font-semibold">{{ con.rate }}</h6>
      </div>
      <div>hi</div>
      <div>
        <h6 class="font-xs font-semibold">{{ con.full }}</h6>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    con: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    open() {
      return this.$store.state.rate.open
    },
  },
  methods: {
    show() {
      this.$store.commit('rate/show')
    },
  },
}
</script>
<style scoped></style>

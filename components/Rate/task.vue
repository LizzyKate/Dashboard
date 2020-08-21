<template>
  <div
    class="lg:flex md:flex md:flex-wrap md:-mx-5 lg:flex-row block lg:justify-between lg:items-center mt-6 lg:-mx-5"
  >
    <div
      v-for="(con, i) in property"
      :key="i"
      class="lg:w-1/4 md:w-1/2 lg:px-5 w-full md:px-5"
    >
      <div
        class="p-4 text-white flex flex-col lg:mt-0 card mt-4"
        :class="con.gradient"
      >
        <div class="flex flex-row justify-between items-center">
          <div class="flex-grow">
            <h6 class="font-sm font-semibold">{{ con.title }}</h6>
          </div>

          <div class="relative inline-block text-left">
            <div>
              <button class="btn btn-secondary btn-sm" @click="show(i)">
                <i class="fas fa-ellipsis-h text-primary"></i>
              </button>

              <div
                v-show="con.open"
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
                      v-for="(down, a) in con.drop"
                      :key="a"
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
        <div
          class="flex progress rounded h-1 my-4 bg-gray-200 overflow-hidden shadow"
        >
          <div
            class="shadow-none rounded-none h-auto bg-success"
            :class="con.width"
          ></div>
        </div>
        <div>
          <h6 class="font-xs font-semibold">{{ con.full }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },

  computed: {
    property() {
      return this.$store.state.rate.property
    },
    changed() {
      return this.$store.state.nav.clicked
    },
  },
  methods: {
    show(i) {
      if (this.property[i].open) {
        this.$store.commit('rate/show', { index: i, show: false })
      } else {
        this.$store.commit('rate/show', { index: i, show: true })
      }
    },
  },
}
</script>
<style scoped>
.gradientD {
  background: linear-gradient(87deg, #f5365c, #f56036);
}
.gradientP {
  background: linear-gradient(87deg, #5e72e4, #825ee4);
}
.gradientI {
  background: linear-gradient(87deg, #11cdef, #1171ef) !important;
}
.gradientDe {
  background: linear-gradient(87deg, #172b4d, #1a174d);
}
.progress {
  max-width: 12rem;
}
</style>

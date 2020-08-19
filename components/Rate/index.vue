<template>
  <div>
    <div
      class="lg:flex lg:flex-row block lg:justify-between lg:items-center mt-6"
    >
      <div>
        <Task class="gradientP card mt-4 lg:mt-0" :con="property" />
      </div>
      <div>
        <Contact class="gradientI card mt-4 lg:mt-0" />
      </div>
      <div>
        <Item class="gradientD card mt-4 lg:mt-0" />
      </div>
      <div>
        <Notification class="gradientDe card mt-4 lg:mt-0" />
      </div>
    </div>
  </div>
</template>
<script>
import Task from './task'
import Contact from './contact'
import Item from './item'
import Notification from './notification'
export default {
  components: {
    Task,
    Contact,
    Item,
    Notification,
  },
  data() {
    return {}
  },
  computed: {
    property() {
      return this.$store.state.rate.property
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
</style>

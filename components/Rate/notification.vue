<template>
  <div>
    <Notify :con="notification" :page="page" />
  </div>
</template>
<script>
import Notify from './task'
export default {
  components: {
    Notify,
  },
  data() {
    return {
      page: 'notify',
    }
  },
  computed: {
    notification() {
      return this.$store.state.rate.notification
    },
  },
}
</script>
<style scoped></style>

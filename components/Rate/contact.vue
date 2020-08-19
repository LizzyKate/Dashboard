<template>
  <div>
    <NewTask :con="contact" />
  </div>
</template>
<script>
import NewTask from './task'
export default {
  components: {
    NewTask,
  },
  data() {
    return {}
  },
  computed: {
    contact() {
      return this.$store.state.rate.contact
    },
  },
}
</script>
<style scoped></style>

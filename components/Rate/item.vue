<template>
  <div>
    <List :con="item" />
  </div>
</template>
<script>
import List from './task'
export default {
  components: {
    List,
  },
  data() {
    return {}
  },
  computed: {
    item() {
      return this.$store.state.rate.item
    },
  },
}
</script>
<style scoped></style>

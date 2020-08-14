<template>
  <div>
    <div class="lg:flex lg:flex-row block lg:justify-between lg:items-center">
      <div>
        <Task />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Item />
      </div>
      <div>
        <Notification />
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
}
</script>
<style scoped></style>

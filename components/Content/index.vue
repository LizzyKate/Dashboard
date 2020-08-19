<template>
  <div>
    <div class="flex flex-col">
      <div class="lg:flex justify-between items-center hidden">
        <Nav />
      </div>
      <div class="lg:px-12 px-4">
        <Texter />
      </div>
      <div class="lg:px-12 lg:block hidden px-4">
        <Rate />
      </div>
      <div class="lg:px-12 lg:hidden block w-full px-4">
        <mobileRate />
      </div>
      <div class="lg:px-12 px-4">
        <Graph />
      </div>
      <div class="lg:px-12 px-4">
        <Status />
      </div>
      <div class="lg:px-12 px-4">
        <Todo />
      </div>
    </div>
  </div>
</template>
<script>
import mobileRate from '../Rate/mobileTask'
import Nav from './topNav'
import Texter from './text'
import Rate from './rate'
import Graph from './graph'
import Status from './status'
import Todo from './todo'
export default {
  components: {
    Nav,
    Texter,
    Rate,
    Graph,
    Status,
    Todo,
    mobileRate,
  },
}
</script>
<style scoped></style>

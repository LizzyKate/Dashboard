<template>
  <div>
    <div class="flex flex-col">
      <div class="lg:flex hidden">
        <Nav />
      </div>
      <div>
        <Text />
      </div>
      <div>
        <Rate />
      </div>
      <div>
        <Graph />
      </div>
      <div>
        <Status />
      </div>
      <div>
        <Todo />
      </div>
    </div>
  </div>
</template>
<script>
import Nav from './topNav'
import Text from './text'
import Rate from './rate'
import Graph from './graph'
import Status from './status'
import Todo from './todo'
export default {
  components: {
    Nav,
    Text,
    Rate,
    Graph,
    Status,
    Todo,
  },
}
</script>
<style scoped></style>

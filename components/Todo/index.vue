<template>
  <div>
    <div class="lg:flex lg:flex-row lg:justify-between lg:items-center block">
      <div>
        <Team />
        <Todo />
        <Progress />
      </div>
    </div>
  </div>
</template>
<script>
import Team from './team'
import Todo from './todo'
import Progress from './progress'
export default {
  components: {
    Team,
    Todo,
    Progress,
  },
}
</script>
<style scoped></style>

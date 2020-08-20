<template>
  <div>
    <div
      class="lg:flex lg:flex-row lg:justify-between lg:items-start block mt-6 mb-8"
    >
      <div class="lg:w-1/3 w-full lg:-mx-5">
        <Team class="lg:px-5" />
      </div>
      <div class="lg:w-1/3 w-full lg:-mx-5 lg:mt-0 mt-5">
        <Todo class="lg:px-5" />
      </div>
      <div class="lg:w-1/3 w-full lg:-mx-5">
        <Progress class="lg:px-5" />
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

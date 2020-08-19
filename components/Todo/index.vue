<template>
  <div>
    <div
      class="lg:flex lg:flex-row lg:justify-between lg:items-center block mt-6 mb-8"
    >
      <div>
        <Team class="lg:block hidden" />
      </div>
      <div>
        <mobileTeam class="lg:hidden block" />
      </div>
      <div>
        <Todo />
      </div>
      <div>
        <Progress />
      </div>
    </div>
  </div>
</template>
<script>
import Team from './team'
import Todo from './todo'
import Progress from './progress'
import mobileTeam from './mobileTeam'
export default {
  components: {
    Team,
    Todo,
    Progress,
    mobileTeam,
  },
}
</script>
<style scoped></style>

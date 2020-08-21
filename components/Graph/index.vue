<template>
  <div>
    <div
      class="lg:flex lg:flex-row lg:justify-between lg:items-start block mt-6"
    >
      <div class="lg:w-1/3 w-full lg:-mx-5">
        <Sales class="lg:px-5" />
      </div>
      <div class="lg:w-1/3 w-full lg:-mx-5 lg:mt-0 mt-5">
        <Total class="lg:px-5" />
      </div>
      <div class="lg:w-1/3 w-full lg:-mx-5 lg:mt-0 mt-5">
        <Progress class="lg:px-5" />
      </div>
    </div>
  </div>
</template>
<script>
import Sales from './sales'
import Total from './total'
import Progress from './progress'
export default {
  components: {
    Sales,
    Total,
    Progress,
  },
}
</script>
<style scoped></style>

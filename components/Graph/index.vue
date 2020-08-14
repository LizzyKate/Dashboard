<template>
  <div>
    <div class="lg:flex lg:flex-row lg:justify-between lg:items-center block">
      <div>
        <Sales />
      </div>
      <div>
        <Total />
      </div>
      <div>
        <Progress />
      </div>
    </div>
  </div>
</template>
<script>
import Sales from './sales'
import Total from './total'
import Progress from './progress'
export default {
  Sales,
  Total,
  Progress,
}
</script>
<style scoped></style>

<template>
  <div>
    <div class="flex flex-row justify-between items-center mt-8">
      <div class="flex flex-row justify-between items-center">
        <div>
          <h5 class="text-default font-semibold text-xl">Alternative</h5>
        </div>
        <div class="text-primary ml-4 lg:block hidden">
          <i class="fas fa-home"></i>
        </div>
        <div class="text-primary text-sm ml-3 lg:block hidden">
          <h5>- Dashboard</h5>
        </div>
        <div class="text-gray-700 text-sm ml-3 lg:block hidden">
          <h5>- Alternative</h5>
        </div>
      </div>
      <div class="flex flex-row justify-between items-center">
        <div>
          <button
            class="btn btn-sm btn-secondary btn-secondary-sec focus:border-0 hover:text-primary"
          >
            New
          </button>
        </div>
        <div class="ml-4">
          <button
            class="btn btn-secondary btn-sm btn-secondary-sec focus:border-0 px-4 hover:text-default"
          >
            Filters
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped></style>

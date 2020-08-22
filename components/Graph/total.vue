<template>
  <div>
    <div class="card bg-white flex flex col">
      <div class="p-4 flex flex-col">
        <div>
          <p class="text-gray-600 font-light text-xs">PERFORMANCE</p>
        </div>
        <div>
          <h5 class="text-default font-semibold text-base">Total orders</h5>
        </div>
      </div>
      <div
        class="border border-gray-700 border-solid w-full border-t-0 border-r-0 border-l-0 border-opacity-25"
      ></div>
      <div>
        <canvas
          ref="myChart"
          width="400"
          height="400"
          class="mt-4 mb-12 p-5"
        ></canvas>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from 'chart.js'
export default {
  mounted() {
    const total = this.$refs.myChart
    total.height = 510
    // total.radius = 12
    // eslint-disable-next-line no-unused-vars
    const order = new Chart(total, {
      type: 'bar',
      data: {
        labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Sales',
            data: [25, 20, 30, 22, 17, 29],
            backgroundColor: 'red',
            // barPercentage: 0.5,
            // barThickness: 6,
            maxBarThickness: 15,
            barradius: 3,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              gridLines: { borderDash: [3, 3], display: true },

              ticks: {
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: { display: false },
            },
            {},
          ],
        },
      },
    })
  },
}
</script>
<style scoped></style>

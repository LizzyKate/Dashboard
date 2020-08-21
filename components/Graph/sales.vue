<template>
  <div>
    <div class="card bg-white flex flex col">
      <div class="p-4 flex flex-col">
        <div>
          <p class="text-gray-600 font-light text-xs">OVERVIEW</p>
        </div>
        <div>
          <h5 class="text-default font-semibold text-base">Sales Value</h5>
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
    const sale = this.$refs.myChart
    sale.height = 510
    // eslint-disable-next-line no-unused-vars
    const x = new Chart(sale, {
      type: 'line',
      data: {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        datasets: [
          {
            label: 'Perfomance',
            data: [0, 20, 10, 30, 15, 40, 20, 60],
            backgroundColor: 'transparent',
            borderColor: '#5e72e4',
            labelsColor: 'red',
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
          ],
        },
      },
    })
  },
}
</script>
<style scoped></style>

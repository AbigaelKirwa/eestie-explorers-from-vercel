import { Chart, CategoryScale } from "chart.js/auto"
import { Line, Doughnut } from "react-chartjs-2"

Chart.register(CategoryScale)

const labels = ["January", "February", "March", "April", "May", "June", "July"]

//line chart data
const lineData = {
  labels: labels,
  datasets: [
    {
      label: "Bookings",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132)",
      data: [20, 10, 5, 30, 20, 30, 45],
      tension: 0.3,
      pointRadius: 0,
    },
    {
      label: "Payments",
      backgroundColor: "#43BE83",
      borderColor: "#43BE83",
      data: [40, 20, 5, 10, 50, 20, 15],
      tension: 0.3, 
      pointRadius: 0,
    },
  ],
}

//doughnut chart data
const doughnutData = {
  labels: [
    'Kadriog Park',
    'Viru Gates',
    'Old Town',
    'Narva Bog',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 100, 60, 30],
    backgroundColor: [
      '#F57906',
      '#43BE83',
      '#979797',
      '#4880FF'
    ],
    hoverOffset: 4
  }]
};

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks:{
        color: "#6B7280",
        font:{
          size:10,
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks:{
        color: "#6B7280",
        font:{
          size:10,
        },
      },
      grid: {
        display: false,
      },
    },
  },
}

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
}

export default function MainCharts() {
  return (
    <div
      id="charts"
      className="flex gap-5 my-5 mx-5">
      <div
        id="left-chart"
        className="border-[1.3px] rounded-xl px-7 py-3 border-[#D3CBFB] w-3/4 h-48">
        <Line
          data={lineData}
          options={lineOptions}
        />
      </div>
      <div
        id="right-chart"
        className="border-[1.3px] rounded-xl px-7 py-3 mr-10 border-[#D3CBFB] h-48">
        <Doughnut
          data={doughnutData}
          options={doughnutOptions}
        />
      </div>
    </div>
  )
}

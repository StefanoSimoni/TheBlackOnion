<template>
  <div class="conteiner">
    <Radar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import { Radar } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement
);

export default {
  name: "Chart-Item",
  components: {
    Radar,
  },
  props: {
    newDataSet:{
      type: String,
    },
    chartId: {
      type: String,
      default: "radar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      chartData: {
        labels: ["CPU", "GPU", "RAM", "DISK"],
        datasets: [
          {
            label: "Configuración recomendada",
            backgroundColor: "rgba(0,181,198,0.2)",
            borderColor: "rgba(0,255,198,1)",
            pointBackgroundColor: "rgba(0,255,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(0,255,198,1)",
            data: [65, 59, 90, 181],
          },
          {
            label: "Tu Ejemplo",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: {
              color: "grey",
            },
            grid: {
              color: "grey",
            },
            pointLabels: {
              color: "white",
            },
            ticks: {
              color: "white",
              backdropColor: "rgba(255, 255, 255, 0)",
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            labels: {
              color: "white",
            },
          },
        },
      },
    };
  },
  created(){
    this.$watch(
      () => this.$router.params,
      () => {
        this.fetchData()
      },
      {immediate: true}
    )
  },
  methods:{
    fetchData() {
      this.chartData.datasets = JSON.parse(this.newDataSet)
    }
  }
};
</script>

<style scoped>
.conteiner {
  height: 40%;
}
</style>

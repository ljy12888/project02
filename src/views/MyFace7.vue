<template>
  <div>
    <h3>데이터 갯수를 선택하세요.</h3>
    <h5><small>데이터는 1분간격으로 저장됩니다.</small></h5>
    <div class="sel">
      <select name="num_count" id="" v-model="data_sel">
        <option value="selected" disabled>선택하세요.</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="All">전체</option>
      </select>
      <button @click="send_data">조회</button>
    </div>
    <h3>{{ name_data }}</h3>
    <h4>{{ price_data }}</h4>
    <Line
      :data="data"
      :options="options"
      v-if="chart_info"
      style="width: 80%; height: 600px; margin: auto"
    />
  </div>
</template>
<script>
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "App",
  components: {
    Line,
  },
  data() {
    return {
      sort_array: [],
      data_sel: "selected",
      name_data: "",
      price_data: "",
      chart_info: false,
      data: {
        labels: [], // x축 이름
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [], // 그래프 값
          },
        ],
      },
      options: {
        responsive: false,
        maintainAspectRatio: true,
        scales: {
          x: {
            reverse: true,
          },
          y: {
            suggestedMin: "",
            suggestedMax: "",
          },
        },
      },
    };
  },
  methods: {
    send_data() {
      this.chart_info = false;
      this.name_data = "조회중입니다.";
      this.data.labels = [];
      axios
        .post("/samsungDB", {
          chartData: this.data_sel,
        })
        .then((res) => {
          this.chart_info = true;
          this.name_data = `${res.data[0].name}의 주식입니다.`;
          const info_data = res.data;
          this.data.datasets[0].data = info_data.map((data) =>
            Number(data.data.replace(",", ""))
          );
          info_data.forEach((v, i) => {
            // const price_data = Number(v.data.replace(",", ""));
            if (i === info_data.length - 1) {
              this.data.labels.push(v.time);
            } else if (
              i >= 0 &&
              info_data[i].time.substring(0, 13) ===
                info_data[i + 1].time.substring(0, 13)
            ) {
              this.data.labels.push(v.time.substring(13));
            } else {
              this.data.labels.push(v.time);
            }
          });
          this.sort_array = res.data.sort((a, b) => {
            Number(a.data.replace(",", "")) - Number(b.data.replace(",", ""));
          });
          this.options.scales.y.suggestedMax =
            Number(
              this.sort_array[this.sort_array.length - 1].data.replace(",", "")
            ) + 500;
          this.options.scales.y.suggestedMin =
            Number(this.sort_array[0].data.replace(",", "")) - 500;
          this.price_data = `현재 ${info_data[0].time}의 가격은 ${info_data[0].data}입니다.`;
        });
    },
  },
};
</script>
<style scoped>
h3,
h5 {
  text-align: center;
}
div.sel {
  display: flex;
  justify-content: center;
  align-items: center;
}
div.sel select {
  width: 300px;
  margin-right: 30px;
}
</style>

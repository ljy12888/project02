<template>
  <div class="chart_in">
    <h1>실시간 음악차트(멜론)</h1>
    <h2>{{ chart_date }}시 기준</h2>
    <button @click="[load_chart(), date()]">업데이트</button>
  </div>
  <div class="chart_out">
    <span v-if="loading">{{ load_msg }}</span>
    <span v-for="(v, i) in chart_data" :key="i"
      >{{ i + 1 }}위 {{ v.song }} - {{ v.artist }}</span
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "melon_chart",
  data() {
    return {
      chart_data: [],
      load_msg: "",
      loading: true,
      chart_date: "",
    };
  },
  mounted() {
    this.load_chart();
    this.date();
  },
  methods: {
    load_chart() {
      this.load_msg = "데이터를 읽어오는 중입니다.";
      axios.post("/chart", {}).then((res) => {
        this.loading = false;
        this.chart_data = res.data;
      });
    },
    date() {
      let today = new Date();
      let hours = today.getHours();
      this.chart_date = hours + ":00";
    },
  },
};
</script>

<style scoped>
.chart_in {
  display: flex;
  justify-content: center;
  align-items: center;
}
.chart_in h1 {
  margin-right: 30px;
  font-size: 30px;
}
.chart_in h2 {
  margin-right: 30px;
  font-size: 20px;
}
.chart_out {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

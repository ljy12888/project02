<template>
  <div>
    <h1>지역을 선택해주세요.</h1>
    <div class="inner">
      <select name="area" id="" v-model="area_L">
        <option value="" disabled>선택해주세요</option>
        <option value="서울">서울</option>
        <option value="부산">부산</option>
        <option value="인천">인천</option>
        <option value="대구">대구</option>
        <option value="대전">대전</option>
        <option value="광주">광주</option>
      </select>
      <button @click="send_area">지역 선택</button>
    </div>
    <hr />
    <div class="show">
      <div class="show_1">
        <select name="receive_area" id="" v-model="receive_area">
          <option value="" disabled>지역구를 선택하세요.</option>
          <option v-for="v in area_station" :key="v" :value="v">{{ v }}</option>
        </select>
        <button @click="showData">조 회</button>
      </div>
      <div v-if="show">
        <span>{{ sidoName }}의 {{ stationName }} 대기정보입니다.</span>
        <span>측정일시 : {{ dataTime }}</span>
        <span>통합대기환경수치 : {{ khaiValue }}</span>
        <span>미세먼지 등급 : {{ pm10Grade }}</span>
        <span>미세먼지 농도 : {{ pm10Value }}</span>
        <span>초미세먼지 등급 : {{ pm25Grade }}</span>
        <span>초미세먼지 농도 : {{ pm25Value }}</span>
        <span>오존지수 : {{ o3Grade }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "exchange",
  data() {
    return {
      area_L: "",
      receive_area: "",
      show_data: false,
      show: false,
      area_station: [],
      area: [],
      sidoName: "",
      stationName: "",
      dataTime: "",
      khaiValue: "",
      pm10Grade: "",
      pm10Value: "",
      pm25Grade: "",
      pm25Value: "",
      o3Grade: "",
    };
  },
  methods: {
    send_area() {
      this.area = [];
      this.area_station = [];
      this.show_data = "데이터를 불러오는 중입니다.";
      axios
        .post("/air", {
          air_area: this.area_L,
        })
        .then((res) => {
          this.area = res.data;
          this.area.forEach((v) => {
            this.area_station.push(v.stationName);
          });
        });
    },
    showData() {
      this.show = false;
      console.log(this.receive_area);
      this.area.forEach((v) => {
        console.log(v.stationName);
        if (this.receive_area == v.stationName) {
          this.sidoName = v.sidoName;
          this.stationName = v.stationName;
          this.dataTime = v.dataTime;
          this.khaiValue = v.khaiValue;
          this.pm10Grade = v.pm10Grade;
          this.pm10Value = v.pm10Value;
          this.pm25Grade = v.pm25Grade;
          this.pm25Value = v.pm25Value;
          this.o3Grade = v.o3Grade;
          this.show = true;
        }
      });
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.inner {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
.inner select {
  width: 200px;
  margin-right: 30px;
}
.show .show_1 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.show .show_1 select {
  width: 200px;
  margin-right: 30px;
}
.show div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

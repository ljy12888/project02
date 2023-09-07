<template>
  <div>
    <div class="send_data">
      <div class="send_text">환전할 돈을 입력하세요</div>
      <div class="send_input">
        <input
          type="number"
          min="0"
          v-model="send_money"
          @keyup.enter="exchange"
          class="exchange"
        />
        <input type="submit" @click="exchange" class="submit" />
      </div>
    </div>
    <div class="receive_data">{{ receive_money }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "exchange",
  data() {
    return {
      send_money: "",
      receive_money: "",
    };
  },
  methods: {
    exchange() {
      this.receive_money = "환율 계산 중입니다.";
      axios
        .post("/exchange", {
          kor_money: this.send_money,
        })
        .then((res) => {
          console.log(res.data);
          this.receive_money = `환전요청하신 달러는 ${res.data.sendmoney}  달러 입니다.`;
        });
    },
  },
};
</script>

<style scoped>
.send_data {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.send_text {
  margin: 30px;
  font-size: 30px;
}
.send_input .exchange {
  width: 300px;
  height: 30px;
  margin-right: 30px;
}
.send_input .submit {
  width: 50px;
  height: 30px;
}
.receive_data {
  text-align: center;
  font-size: 3rem;
  margin: 30px;
}
</style>

<template>
  <div>
    <h2>번역할 언어와 입력하는 언어를 선택하세요.</h2>
    <div class="org">
      <select name="ori_lang" id="" v-model="ori_lang" class="org_lang">
        <option value="ko" selected>한국어</option>
        <option value="en">영어</option>
        <option value="zh-CN">중국어 간체</option>
        <option value="zh-TW">중국어 번체</option>
      </select>
      <input
        type="text"
        v-model="trans_text"
        placeholder="번역할 문장을 입력하세요."
        @keyup.enter="translate"
        class="org_text"
      />
      <button @click="translate" class="org_send">번역</button>
    </div>
    <div class="mark">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        fill="currentColor"
        class="bi bi-caret-down"
        viewBox="0 0 16 16"
      >
        <path
          d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
        />
      </svg>
    </div>
    <div class="trans">
      <select name="trans_lang" id="" v-model="trans_lang" class="trans_leng">
        <template v-if="ori_lang === 'ko'">
          <option value="en">영어</option>
          <option value="ja">일본어</option>
          <option value="zh-CN">중국어 간체</option>
          <option value="zh-TW">중국어 번체</option>
          <option value="es">스페인어</option>
          <option value="fr">프랑스어</option>
          <option value="ru">러시아어</option>
          <option value="vi">베트남어</option>
          <option value="th">태국어</option>
          <option value="id">인도네시아어</option>
          <option value="de">독일어</option>
          <option value="it">이탈리아어</option>
        </template>
        <template v-if="ori_lang === 'en'">
          <option value="ja">일본어</option>
          <option value="zh-CN">중국어 간체</option>
          <option value="zh-TW">중국어 번체</option>
          <option value="fr">프랑스어</option>
        </template>
        <template v-if="ori_lang === 'zh-CN'">
          <option value="zh-TW">중국어 번체</option>
          <option value="ja">일본어</option>
        </template>
        <template v-if="ori_lang === 'zh-TW'">
          <option value="ja">일본어</option>
        </template>
      </select>
      <div class="trans_text">{{ tran_ing }}</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "translate",
  data() {
    return {
      tran_ing: "",
      trans_info: false,
      trans_text: "",
      trans_data: "",
      ori_lang: "ko",
      trans_lang: "en",
    };
  },
  methods: {
    translate() {
      this.tran_ing = "번역 중입니다.";
      this.trans_info = false;
      axios
        .post("/translate", {
          ori_lang: this.ori_lang,
          trans_lang: this.trans_lang,
          trans_text: this.trans_text,
        })
        .then((res) => {
          this.trans_info = true;
          this.tran_ing = res.data;
        });
    },
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
}
.org {
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.org .org_lang {
  width: 10%;
  height: 50px;
  margin: 10px 10px 10px 0;
  text-align: center;
  font-size: 16px;
}
.org .org_text {
  width: 75%;
  height: 50px;
  margin: 10px 10px 10px 0;
  border: 0;
  border-bottom: 1px solid black;
  font-size: 16px;
}
.org .org_text:focus {
  outline-style: none;
}
.org .org_send {
  width: 10%;
  height: 50px;
  text-align: center;
  font-size: 16px;
}

div.mark {
  display: flex;
  justify-content: center;
}
.trans {
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.trans .trans_leng {
  width: 15%;
  height: 50px;
  margin: 10px 10px 10px 0;
  text-align: center;
  font-size: 16px;
}
.trans .trans_text {
  width: 85%;
  margin: 10px 10px 10px 0;
}
</style>

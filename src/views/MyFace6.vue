<template>
  <div>
    <div id="map"></div>
    <button @click="displayInfoWindow">현재위치 마크!</button>
    <div class="div_btn">{{ textContent }}</div>
  </div>
</template>

<script>
import Vue from "vue";
import VueGeolocationApi from "vue-geolocation-api";
export default {
  name: "KakaoMap",
  data() {
    return {
      latitude: "",
      longitude: "",
      textContent: "",
      infowindow: null,
      iwPosition: "",
      lat: "",
      lon: "",
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      this.geofind();
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=272695eface2e5a0142e6434ba2323e6";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(this.latitude, this.longitude),
        level: 5,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
    },
    displayInfoWindow() {
      if (this.infowindow && this.infowindow.getMap()) {
        //이미 생성한 인포윈도우가 있기 때문에 지도 중심좌표를 인포윈도우 좌표로 이동시킨다.
        this.map.setCenter(this.infowindow.getPosition());
        return;
      }

      var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(this.latitude, this.longitude), //인포윈도우 표시 위치입니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

      this.infowindow = new kakao.maps.InfoWindow({
        map: this.map, // 인포윈도우가 표시될 지도
        position: iwPosition,
        content: iwContent,
        removable: iwRemoveable,
      });

      this.map.setCenter(iwPosition);
    },
    geofind() {
      if (!("geolocation" in navigator)) {
        this.textContent = "Geolocation is not available.";
        return;
      }
      this.textContent = "Locating...";

      // get position
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.latitude = pos.coords.latitude;
          this.longitude = pos.coords.longitude;
          this.textContent = `현재 위치 좌표는 위도 ${this.latitude}이고 경도 ${this.longitude}입니다.`;
        },
        (err) => {
          this.textContent = err.message;
        }
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 600px;
  height: 600px;
  margin: 30px auto;
}

button {
  margin-left: 45%;
  width: 10%;
}
div.div_btn {
  margin-left: 20%;
  width: 60%;
  text-align: center;
  margin-top: 30px;
}
</style>

<template>
  <div id="app">
    <video src="./assets/img/bg.mp4" loop autoplay muted></video>
    <div id="nav">
      <ul>
        <li>
          <a href="/"
            ><img src="./assets/img/bars-solid.svg" v-on:click="on2"
          /></a>
        </li>
        <li v-on:click="on1">
          <router-link to="/face1">실시간 미세먼지 정보</router-link>
        </li>
        <li v-on:click="on1">
          <router-link to="./face2">실시간 환율정보</router-link>
        </li>
        <li v-on:click="on1">
          <router-link to="./face3">실시간 음원순위</router-link>
        </li>
        <li v-on:click="on1">
          <router-link to="./face4">실시간 번역기</router-link>
        </li>
        <li v-on:click="on1">
          <router-link to="./face5"> <div>버스도착정보</div></router-link>
        </li>
        <li v-on:click="on1">
          <router-link to="./face6">내 위치</router-link>
        </li>
        <li v-on:click="on1">
          <router-link to="./face7">주식</router-link>
        </li>
      </ul>
    </div>

    <!-- section -->
    <section id="article_wrap">
      <article
        id="article_face1"
        v-on:mouseenter="paused"
        v-on:mouseleave="running"
      >
        <div>
          <h1>1.Members</h1>
          <div class="inner">
            <div>
              <div class="pic"></div>
              <div class="con">
                <h2>L.J.Y</h2>
                <p>Mission:Front-end</p>
                <span>2023/07/06~07/10</span>
              </div>
            </div>
            <div>
              <div class="pic"></div>
              <div class="con">
                <h2>R.Y.C</h2>
                <p>Mission:Back-end</p>
                <span>2023/07/06~07/10</span>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article
        id="article_face2"
        v-on:mouseenter="paused"
        v-on:mouseleave="running"
      >
        <h1>8.Stock</h1>
        <router-link to="/face7">
          <div class="inner" @click="on1" click="gotoPage('/face7')">
            <div>
              <div>
                <img id="img1" src="./assets/img/6.주식/coins.svg" />
                <h2>Improve<br />Your<br />fortune</h2>
                <img id="img2" src="./assets/img/6.주식/txt2.png" />
                <img id="img3" src="./assets/img/6.주식/line.png" />
              </div>
            </div>
          </div>
        </router-link>
      </article>
      <article
        id="article_face3"
        v-on:mouseenter="paused"
        v-on:mouseleave="running"
      >
        <div>
          <h1>7.My location</h1>
          <router-link to="/face6">
            <div class="inner" @click="on1" click="gotoPage('/face6')">
              <div>
                <img src="./assets/img/7.위치/location-circle.svg" />
                <div class="con">
                  <h2>Location Services</h2>
                  <p>
                    Here comes the contents for Network<br />Show this in Detail
                  </p>
                </div>
              </div>
              <div>
                <img src="./assets/img/7.위치/location-dot.svg" />
                <div class="con">
                  <h2>Location Services</h2>
                  <p>
                    Here comes the contents for Network<br />Show this in Detail
                  </p>
                </div>
              </div>
              <div>
                <img src="./assets/img/7.위치/magnifying-glass.svg" />
                <div class="con">
                  <h2>Location Services</h2>
                  <p>
                    Here comes the contents for Network<br />Show this in Detail
                  </p>
                </div>
              </div>
              <div>
                <img src="./assets/img/7.위치/street-view.svg" />
                <div class="con">
                  <h2>Location Services</h2>
                  <p>
                    Here comes the contents for Network<br />Show this in Detail
                  </p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </article>
      <article
        id="article_face4"
        v-on:mouseenter="paused"
        v-on:mouseleave="running"
      >
        <div>
          <h1>6.Bus stop info.</h1>
          <router-link to="/face5">
            <div class="inner" @click="on1" click="gotoPage('/face5')">
              <div>
                <img src="./assets/img/5.버스도착/map-location.svg" />
                <P>My location</P>
              </div>
              <div>
                <img src="./assets/img/5.버스도착/bus.svg" />
                <P>Bus</P>
              </div>
              <div>
                <img src="./assets/img/5.버스도착/car.svg" />
                <P>Car</P>
              </div>
              <div>
                <img src="./assets/img/5.버스도착/road.svg" />
                <P>Road</P>
              </div>
              <div>
                <img src="./assets/img/5.버스도착/taxi.svg" />
                <P>Taxi</P>
              </div>
              <div>
                <img src="./assets/img/5.버스도착/train-subway.svg" />
                <P>Subway</P>
              </div>
            </div>
          </router-link>
        </div>
      </article>
      <article
        id="article_face5"
        v-on:mouseenter="paused"
        v-on:mouseleave="running"
      >
        <div>
          <h1>5.Translation</h1>
          <router-link to="/face4">
            <div class="inner" @click="on1" click="gotoPage('/face4')">
              <div>
                <!-- <img src="./assets/img/4.번역/tit.png"> -->
                <div class="pic"></div>
                <img src="./assets/img/4.번역/txt2.png" />
                <img src="./assets/img/4.번역/btn.png" />
                <img class="reflection" src="./assets/img/4.번역/reflect.png" />
              </div>
            </div>
          </router-link>
        </div>
      </article>
      <article
        id="article_face6"
        v-on:mouseenter="paused"
        v-on:mouseleave="running"
      >
        <div>
          <h1>4.Music rank</h1>
          <router-link to="/face3">
            <div class="inner" @click="on1" click="gotoPage('/face3')">
              <div>
                <h2>가요 탑 텐</h2>
                <img src="./assets/img/3.음원/ranking-star-solid.svg" />
                <h3>What's the rank of the song?</h3>
                <p>Clik here!</p>
              </div>
            </div>
          </router-link>
        </div>
      </article>
      <article
        id="article_face7"
        v-on:mouseenter="paused"
        v-on:mouseleave="running"
      >
        <div>
          <h1>3.Exchange rate</h1>
          <router-link to="/face2">
            <div class="inner" @click="on1">
              <div>
                <img src="./assets/img/2.환율/hand-holding-dollar.svg" />
                <h2>Other contury</h2>
                <p>
                  USD 1308.00<br />JPY 920.72<br />EUR 1,432.91<br />CNY
                  180.60<br />
                </p>
              </div>
              <div>
                <h2>More infomation?</h2>
                <p>Click here!</p>
                <em>2023.07.11 am 08:00</em>
              </div>
            </div>
          </router-link>
        </div>
      </article>
      <article
        id="article_face8"
        v-on:mouseenter="paused"
        v-on:mouseleave="running"
      >
        <div>
          <h1>2.Weather</h1>
          <router-link to="/face1">
            <div class="inner" @click="on1">
              <div>
                <h2>Weather</h2>
                <img
                  src="./assets/img/1.미세먼지/temperature-three-quarters-solid.svg"
                />
                <span>26<em>0</em></span>
              </div>
              <div>
                <img src="./assets/img/1.미세먼지/sun-solid.svg" />
                <h3>Sunny</h3>
                <p>Afternoon temperature</p>
                <h4>23<b>0</b></h4>
              </div>
              <div>
                <img src="./assets/img/1.미세먼지/bolt-solid.svg" />
                <h3>Lightning</h3>
                <p>Night temperature</p>
                <h4>18<b>0</b></h4>
              </div>
            </div>
          </router-link>
        </div>
      </article>
    </section>

    <!-- aside -->
    <div id="aside_wrap">
      <aside id="aside_face1">
        <router-view />
        <!-- <router-link to="/">
          <h1 class="close">Close</h1>
        </router-link> -->
        <h1 class="close" @click="gotoPage('/')">Close</h1>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    paused: function () {
      const articleWrap = document.querySelector("#article_wrap");
      articleWrap.style.animationPlayState = "paused";
    },
    running: function () {
      const articleWrap = document.querySelector("#article_wrap");
      articleWrap.style.animationPlayState = "running";
    },

    on1: function () {
      const asideFace1 = document.querySelector("#aside_face1");
      const articleWrap = document.querySelector("#article_wrap");
      asideFace1.classList.add("on");
      articleWrap.classList.add("off");
    },
    gotoPage(url) {
      this.$router.push(url);
      location.href = url; // <== 새로고침이 필요해서 추가함
    },
  },
};
</script>

<style>
.close:hover {
  cursor: pointer;
  color: orange;
}
body {
  margin: 0;
}
ul,
ol,
li {
  list-style: none;
}
#app {
  font: 14px/1.4 "orbitron";
  letter-spacing: 1px;
  color: black;
  background: #0b0b0b;
  position: fixed;
  width: 100%;
  height: 100%;
  perspective: 1300px;
}
#app video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  opacity: 0.5;
}
#app #nav {
  /* border: 3px solid aqua; */
  position: relative;
  /* color: white; */
  width: 100%;
  height: 50px;
}
#app #nav ul {
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
  padding: 0;
  height: 5vh;
}
#app #nav ul li a {
  color: white;
}
/* #app #nav ul li:hover {
  color: blue;
  cursor: pointer;
} */
#app #nav img {
  width: 30px;
}

/* aside */
#app #aside_wrap #aside_face1 {
  width: 100%;
  height: 92.5vh;
  background: white;
  position: relative;
  top: 0;
  left: -100%;
  opacity: 0;
  z-index: 2;
  box-sizing: border-box;
  transition: 1s;
  overflow: auto;
}
#app #aside_wrap #aside_face1.on {
  opacity: 1;
  left: 0%;
}

/* articel */
#app #article_wrap {
  width: 600px;
  height: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -400px;
  margin-left: -300px;
  /* border: 3px solid aqua; */
  transform-style: preserve-3d;
  animation: ani linear 30s infinite;
  z-index: 1;
}
#app #article_wrap.off {
  opacity: 0;
}
#app #article_wrap article {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgba(255, 255, 255, 0.4);
  backface-visibility: hidden;
}
#app #article_wrap article h1 {
  color: rgba(255, 255, 255, 0.7);
  position: absolute;
  left: 0px;
  top: 0px;
  font-size: 30px;
  opacity: 0;
  transition: all 0.5s;
}
#app #article_wrap article:hover h1 {
  top: -80px;
  opacity: 1;
}
#app #article_wrap article .inner {
  width: 100%;
  height: 100%;
}
#app #article_wrap article .inner > div {
  width: 100%;
  height: 100%;
  border: 1px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.06);
  padding: 50px;
  position: relative;
  opacity: 0.7;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s;
}
#app #article_wrap article .inner > div:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.03);
  opacity: 1;
}
/* 1.Member */
#app #article_wrap #article_face1 {
  display: block;
}
#app #article_wrap #article_face1 .inner > div {
  width: 100%;
  height: 253px;
  margin-bottom: 20px;
}
#app #article_wrap #article_face1 .inner > div .pic {
  width: 120px;
  height: 120px;
  background-position: center top;
  overflow: hidden;
  border-radius: 60px;
  border: 1px solid #fff;
  float: left;
  position: relative;
  top: 15px;
  background-size: cover;
}
#app #article_wrap #article_face1 .inner > div:nth-of-type(1) .pic {
  background-image: url(../src/assets/img/robot.png);
}
#app #article_wrap #article_face1 .inner > div:nth-of-type(2) .pic {
  background-image: url(../src/assets/img/member2.jpg);
}
#app #article_wrap #article_face1 .inner > div .con {
  width: 340px;
  float: right;
}
#app #article_wrap #article_face1 .inner > div .con {
  width: 340px;
  float: right;
}
#app #article_wrap #article_face1 .inner > div .con h2 {
  color: #fff;
}
#app #article_wrap #article_face1 .inner > div .con p {
  font: 18px/1.3 "arial";
  color: #ddd;
  margin-top: 20px;
}
#app #article_wrap #article_face1 .inner > div .con span {
  position: absolute;
  bottom: 50px;
  right: 50px;
  font: 12px/1 "orbitron";
  color: aqua;
  opacity: 0.5;
}

/* 2.미세먼지 정보 */
#app #article_wrap #article_face8 {
  display: block;
}
#app #article_wrap #article_face8 .inner > div:nth-of-type(1) {
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
}
#app #article_wrap #article_face8 .inner > div:nth-of-type(1) img {
  color: #fff;
  width: 130px;
  position: absolute;
  bottom: 60px;
  left: 50px;
  opacity: 0.9;
}
#app #article_wrap #article_face8 .inner > div:nth-of-type(1) span {
  font-weight: bold;
  font-size: 120px;
  position: absolute;
  bottom: 60px;
  right: 60px;
}
#app #article_wrap #article_face8 .inner > div:nth-of-type(1) span em {
  font: bold normal 60px/1 "arial";
  position: relative;
  right: -10px;
  top: -60px;
}
#app #article_wrap #article_face8 .inner > div:nth-of-type(2) {
  width: 290px;
  height: 380px;
  margin-right: 20px;
  float: left;
  text-align: center;
}
#app #article_wrap #article_face8 .inner > div:nth-of-type(2) img {
  width: 120px;
  color: #fff;
  opacity: 0.8;
}
#app #article_wrap #article_face8 .inner > div:nth-of-type(2) h3 {
  margin-top: 30px;
  margin-bottom: 14px;
  font: bold 20px/1 "orbitron";
}
#app #article_wrap #article_face8 .inner > div:nth-of-type(2) p {
  font: 16px/1 "arial";
  color: #ccc;
}
#app #article_wrap #article_face8 .inner > div:nth-of-type(2) h4 {
  font-size: 40px;
  margin-top: 20px;
  letter-spacing: 3px;
  position: relative;
}
#app #article_wrap #article_face8 .inner > div:nth-of-type(2) h4 b {
  font: bold 24px/1 "arial";
  color: #ddd;
  position: absolute;
  top: 0px;
  right: 40px;
}
#app #article_wrap #article_face8 .inner > div:nth-of-type(3) {
  width: 290px;
  height: 380px;
  float: left;
  text-align: center;
}
#app #article_wrap #article_face8 .inner > div:nth-of-type(3) img {
  width: 120px;
  color: #fff;
  opacity: 0.8;
}
#app #article_wrap #article_face8 .inner > div:nth-of-type(3) h3 {
  margin-top: 30px;
  margin-bottom: 14px;
  font: bold 20px/1 "orbitron";
}
#app #article_wrap #article_face8 .inner > div:nth-of-type(3) p {
  font: 16px/1 "arial";
  color: #ccc;
}
#app #article_wrap #article_face8 .inner > div:nth-of-type(3) h4 {
  font-size: 40px;
  margin-top: 20px;
  letter-spacing: 3px;
  position: relative;
}
#app #article_wrap #article_face8 .inner > div:nth-of-type(3) h4 b {
  font: bold 24px/1 "arial";
  color: #ddd;
  position: absolute;
  top: 0px;
  right: 40px;
}
/* 3.환율정보 */
#app #article_wrap #article_face7 {
  display: block;
}
#app #article_wrap #article_face7 .inner > div p {
  font: 16px/1.3 "arial";
  color: #bbb;
  margin-top: 20px;
}
#app #article_wrap #article_face7 .inner > div:nth-of-type(1) {
  width: 100%;
  height: 600px;
  margin-bottom: 20px;
}
#app #article_wrap #article_face7 .inner > div:nth-of-type(1) img {
  width: 100%;
  margin-bottom: 30px;
  object-fit: cover;
}
#app #article_wrap #article_face7 .inner > div:nth-of-type(2) {
  width: 100%;
  height: 180px;
}
#app #article_wrap #article_face7 .inner > div:nth-of-type(2) p {
  float: left;
}
#app #article_wrap #article_face7 .inner > div:nth-of-type(2) em {
  float: right;
  font-size: 12px;
  color: #ccc;
  margin-top: 23px;
}
/* 4.음원사이트 순위 */
#app #article_wrap #article_face6 {
  display: block;
}
#app #article_wrap #article_face6 .inner > div {
  width: 100%;
  height: 100%;
}
#app #article_wrap #article_face6 > div img {
  width: 100%;
  margin-top: 30px;
  margin-bottom: 40px;
}
#app #article_wrap #article_face6 > div h3 {
  width: 100%;
  margin-top: 30px;
  margin-bottom: 40px;
}
#app #article_wrap #article_face6 > div h3 {
  color: #fff;
  margin-bottom: 20px;
}
#app #article_wrap #article_face6 > div p {
  font: 18px/1.3 "arial";
  color: #ccc;
}
/* 5.번역기 */
#app #article_wrap #article_face5 {
  display: block;
}
#app #article_wrap #article_face5 .inner > div {
  width: 100%;
  height: 100%;
}
#app #article_wrap #article_face5 .inner div img {
  margin-bottom: 40px;
}
#app #article_wrap #article_face5 .inner div .pic {
  width: 100%;
  height: 250px;
  border: 1px solid #bbb;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.3) url(./assets/img/4.번역/A\ to\ mun.svg)
    no-repeat center center/cover;
  margin-bottom: 50px;
}
#app #article_wrap #article_face5 .inner div .reflection {
  position: absolute;
  top: 100%;
  right: 0%;
  transition: all 0.5s;
}
#app #article_wrap #article_face5:hover .inner div .rflection {
  top: -40%;
}
/* 6.버스 */
#app #article_wrap #article_face4 {
  display: block;
}
#app #article_wrap #article_face4 .inner > div {
  width: 290px;
  height: 254px;
  float: left;
  margin-bottom: 20px;
  text-align: center;
}
#app #article_wrap #article_face4 .inner img {
  width: 100px;
  transition: all 0.5s;
  opacity: 0.7;
}
#app #article_wrap #article_face4 .inner > div h2 {
  margin-top: 20px;
  letter-spacing: 2px;
  transition: all 0.5s;
}
#app #article_wrap #article_face4 .inner > div:nth-of-type(odd) {
  margin-right: 20px;
}
#app #article_wrap #article_face4 .inner > div:hover img {
  color: lightcyan;
  box-shadow: 0px 0px 10px aqua;
  transform: scale(1.2);
  opacity: 1;
}
#app #article_wrap #article_face4 .inner > div:hover h2 {
  color: lightcyan;
  text-shadow: 0px 0px 10px aqua;
}
/* 7.위치정보 */
#app #article_wrap #article_face3 {
  display: block;
}
#app #article_wrap #article_face3 .inner > div {
  width: 100%;
  height: 185px;
  margin-bottom: 20px;
}
#app #article_wrap #article_face3 .inner > div img {
  width: 22%;
  height: 100%;
  border-right: 1px solid #bbb;
  float: left;
  /* font-size:50px; */
  color: #fff;
  position: relative;
  text-align: left;
  line-height: 90px;
  box-sizing: border-box;
  padding-left: 0px;
}
#app #article_wrap #article_face3 .inner > div .con {
  width: 75%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 40px;
  float: right;
}
#app #article_wrap #article_face3 .inner > div .con p {
  font: 18px/1 "arial";
  color: #999;
}
/* 8.주식 */
#app #article_wrap #article_face2 {
  display: block;
}
#app #article_wrap #article_face2 .inner > div {
  width: 100%;
  height: 100%;
}
#app #article_wrap #article_face2 .inner > div > div {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid #aaa;
  box-sizing: border-box;
}
#app #article_wrap #article_face2 .inner > div #img1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
}
#app #article_wrap #article_face2 .inner > div h2 {
  position: absolute;
  top: 140px;
  left: 50px;
  font-size: 40px;
  color: #fff;
  text-align: left;
  line-height: 1.1;
  text-shadow: 2px 2px 5px #555;
  z-index: 2;
}
#app #article_wrap #article_face2 .inner > div #img2 {
  position: absolute;
  bottom: 0px;
  right: 0px;
}
#app #article_wrap #article_face2 .inner > div #img3 {
  position: absolute;
  bottom: 85px;
  right: -18px;
  width: 90%;
}

/* 애니메이션 */

#article_face1 {
  transform: rotateY(0deg) translateZ(-764px);
}
#article_face2 {
  transform: rotateY(45deg) translateZ(-764px);
}
#article_face3 {
  transform: rotateY(90deg) translateZ(-764px);
}
#article_face4 {
  transform: rotateY(135deg) translateZ(-764px);
}
#article_face5 {
  transform: rotateY(180deg) translateZ(-764px);
}
#article_face6 {
  transform: rotateY(225deg) translateZ(-764px);
}
#article_face7 {
  transform: rotateY(270deg) translateZ(-764px);
}
#article_face8 {
  transform: rotateY(315deg) translateZ(-764px);
}
@keyframes ani {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>

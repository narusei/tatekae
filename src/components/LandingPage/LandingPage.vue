<template>
  <app-base>
    <b-navbar class="is-mainColor">
      <template slot="brand">
        <b-navbar-item>Tatekae</b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="a">
          <router-link :to="{ name: 'SignIn' }">
            Sign In
          </router-link>
        </b-navbar-item>
        <b-navbar-item tag="a">
          <router-link :to="{ name: 'SignUp' }">
            Sign Up
          </router-link>
        </b-navbar-item>
      </template>
    </b-navbar>
    <main-content>
      <div class="landing-hero">
        <div class="background-circle1"></div>
        <div class="background-circle2"></div>
        <div class="background-circle3"></div>
        <div class="landing-hero-brand">
          <div class="landing-hero-brand-title">Tatekae</div>
          <div class="landing-hero-brand-detail">
            メンドくさい精算処理から解放する
          </div>
        </div>
        <div class="landing-hero-detail">
          Tatekaeは<br />
          ”グループでの旅行”などのイベントでの<br />
          メンバー間で起こる「立て替え」を<br />
          メモするだけで自動精算してくれる<br />
          Webサービスです
        </div>
        <div class="landing-hero-buttons">
          <b-button
            tag="router-link"
            to="/signin"
            class="is-mainColor is-inverted"
            >Sign In</b-button
          >
          <b-button
            tag="router-link"
            to="/signup"
            class="is-mainColor is-inverted"
            >Sign Up</b-button
          >
        </div>
      </div>
    </main-content>
  </app-base>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import AppBase from "@/components/common/AppBase";
import MainContent from "@/components/common/MainContent";
@Component({
  components: {
    AppBase,
    MainContent
  }
})
export default class LandingPage extends Vue {
  // 1.@Prop
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>
<style lang="scss" scoped>
.landing-hero {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 52px);
  overflow: hidden;
}

.landing-hero-brand {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20%;
}

.landing-hero-brand-title {
  font-size: 48px;
}

.landing-hero-brand-detail {
  font-size: 18px;
}

.landing-hero-detail {
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 10%;
  font-size: 14px;
  line-height: 26px;
}

.landing-hero-buttons {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10% 20% 10% 20%;
}

.background-circle1 {
  z-index: -1;
  width: 200px;
  height: 200px;
  position: absolute;
  top: -50px;
  right: -20px;
  border-radius: 50%;
  background: rgba(242, 201, 76, 0.8);
  border: 10px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}

.background-circle2 {
  z-index: -1;
  width: 200px;
  height: 200px;
  position: absolute;
  left: -20px;
  bottom: -40px;
  border-radius: 50%;
  background: rgba(242, 201, 76, 0.8);
  border: 10px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}

.background-circle3 {
  z-index: -1;
  width: 100px;
  height: 100px;
  position: absolute;
  left: 100px;
  bottom: -20px;
  border-radius: 50%;
  background: rgba(242, 201, 76, 0.8);
  border: 10px solid rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}
</style>
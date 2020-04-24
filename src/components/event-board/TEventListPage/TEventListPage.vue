<template>
  <div>
    <p>TEventListPage</p>
    <b-field>
      <p class="control">
        <button class="button is-primary" @click="signOut()">Sign Out</button>
      </p>
    </b-field>
    <b-field label="event_title">
      <b-input maxlength="20" type="textarea" v-model="eventName"></b-input>
    </b-field>
    <b-field>
      <p class="control">
        <button class="button is-primary" @click="onAddEvent()">AddEvent</button>
      </p>
    </b-field>
    <div v-for="(event, index) in eventList" :key="index">
      <div>{{ event.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class TEventListPage extends Vue {
  // 1.@Prop
  @Prop({ default: () => [] })
  eventList!: [];
  // 2.property
  eventName?: string = "";
  // 3.getter
  // 4.@Watch
  // 5.method
  signOut() {
    this.$emit("signOut");
  }

  onAddEvent() {
    this.$emit("addEvent", this.eventName);
  }
}
</script>
<style lang="scss" scoped></style>

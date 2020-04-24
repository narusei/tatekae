<template>
  <div>
    <t-event-list-page
      @signOut="signOut($event)"
      @addEvent="onAddEvent($event)"
      :eventList="eventList"
    ></t-event-list-page>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import firebase from "firebase";
import EventBoardStore from "@/store/event-board";
import TEventListPage from "@/components/event-board/TEventListPage";

@Component({
  components: {
    TEventListPage
  }
})
export default class EventListPage extends Vue {
  private eventBoardStore = getModule(EventBoardStore, this.$store);
  // 1.@Prop
  // 2.property
  loading?: boolean = false;
  // 3.getter
  get eventList() {
    return this.eventBoardStore.eventList;
  }
  // 4.@Watch
  // 5.method
  signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.push("/signin");
      });
  }

  async onAddEvent(eventName: string) {
    try {
      this.loading = true;
      await this.eventBoardStore.addEvent(eventName);
    } catch (error) {
      alert(error.message);
    } finally {
      // this.$router.push("/event-detail");
      this.loading = false;
    }
  }

  async created() {
    try {
      this.loading = true;
    } finally {
      this.loading = false;
    }
  }

  mounted() {
    this.eventBoardStore.startGetEventListListener();
  }

  destroyed() {
    this.eventBoardStore.stopGetEventListListener();
  }
}
</script>
<style lang="scss" scoped></style>

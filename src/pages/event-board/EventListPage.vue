<template>
  <div>
    <t-event-list-page
      @addEvent="onAddEvent($event)"
      @deleteEvent="onDeleteEvent($event)"
      :eventList="eventList"
      :isLoading="loading"
    ></t-event-list-page>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import firebase from "firebase";
import EventBoardStore from "@/store/event-board";
import TEventListPage from "@/components/event-board/TEventListPage";
import { EventItem } from "@/models/EventItem";

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
  async onAddEvent(eventItem: EventItem) {
    try {
      this.loading = true;
      await this.eventBoardStore.addEvent(eventItem);
    } catch (error) {
      alert(error.message);
    } finally {
      this.loading = false;
      this.$buefy.toast.open("イベントを追加しました");
    }
  }

  async onDeleteEvent(eventId: string) {
    try {
      this.loading = true;
      await this.eventBoardStore.deleteEvent(eventId);
    } catch (error) {
      alert(error.message);
    } finally {
      this.loading = false;
      this.$buefy.toast.open("イベントを削除しました");
    }
  }

  async mounted() {
    try {
      this.loading = true;
      await this.eventBoardStore.startGetEventListListener();
    } finally {
      this.loading = false;
    }
  }

  destroyed() {
    this.eventBoardStore.stopGetEventListListener();
  }
}
</script>
<style lang="scss" scoped></style>

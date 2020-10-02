<template>
  <app-base>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item>Tatekae</b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <button class="button is-primary" @click="signOut()">
            Sign Out
          </button>
        </b-navbar-item>
      </template>
    </b-navbar>
    <main-content>
      <div class="event-list-header">
        イベント一覧
      </div>
      <div v-for="event in eventList" :key="event.id">
        <div class="event-list-item">
          <div class="event-list-item-menu">
            <b-icon
              icon="delete"
              @click.native="onDeleteEvent(event.id)"
            ></b-icon>
          </div>
          <router-link
            :to="{ name: 'EventDetail', params: { eventId: event.id } }"
          >
            <div class="event-list-item-title">
              {{ event.name }}
            </div>
          </router-link>
        </div>
      </div>
    </main-content>
    <floating-button
      :iconType="'plus'"
      @click="onOpenAddEventDialog()"
    ></floating-button>
    <b-loading
      :is-full-page="true"
      :active.sync="isLoading"
      :can-cancel="false"
    >
      <b-icon pack="fas" icon="sync-alt" size="is-large" custom-class="fa-spin">
      </b-icon>
    </b-loading>
  </app-base>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import authApi from "@/api/auth";
import { EventItem } from "@/models/EventItem";
import AppBase from "@/components/common/AppBase";
import MainContent from "@/components/common/MainContent";
import FloatingButton from "@/components/common/FloatingButton";

@Component({
  components: {
    AppBase,
    MainContent,
    FloatingButton,
  },
})
export default class TEventListPage extends Vue {
  // 1.@Prop
  @Prop({ default: () => [] })
  eventList!: EventItem[];

  @Prop({ default: false })
  isLoading!: boolean;
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
  async signOut() {
    try {
      await authApi.signOut();
      this.$router.push("/signin");
    } catch (error) {
      alert(error.message);
    }
  }

  onOpenAddEventDialog() {
    this.$buefy.dialog.prompt({
      message: "イベント名を入力してください",
      inputAttrs: {
        placeholder: "イベント名",
        maxlength: 15,
      },
      trapFocus: true,
      onConfirm: (value) => {
        this.onAddEvent(value);
      },
    });
  }

  onAddEvent(value: string) {
    this.$emit("addEvent", {
      name: value,
    });
  }

  onDeleteEvent(eventId: string) {
    this.$buefy.dialog.confirm({
      title: "イベントを削除",
      message: "一度イベントを削除したら元には戻せません。削除しますか？",
      confirmText: "削除",
      type: "is-danger",
      hasIcon: true,
      onConfirm: () => {
        this.$emit("deleteEvent", eventId);
      },
    });
  }
}
</script>

<style lang="scss" scoped>
.event-list-header {
  padding-left: 8px;
}

.event-list-item {
  margin: 8px 16px;
  border: solid 1px;
}

.event-list-item-menu {
  display: flex;
  justify-content: flex-end;
  padding: 8px 8px 0 0;
}

.event-list-item-title {
  margin-top: 16px;
  color: #000000;
  padding: 0 0 8px 8px;
}
</style>

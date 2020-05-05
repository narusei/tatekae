<template>
  <div>
    <t-member-list-page
      @addMember="onAddMember($event)"
      @deleteMember="onDeleteMember($event)"
      :isLoading="loading"
      :eventId="eventId"
      :memberList="memberList"
    ></t-member-list-page>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import EventBoardStore from "@/store/event-board";
import TMemberListPage from "@/components/event-board/TMemberListPage";
import { MemberItem } from "@/models/MemberItem";

@Component({
  components: {
    TMemberListPage
  }
})
export default class MemberListPage extends Vue {
  private eventBoardStore = getModule(EventBoardStore, this.$store);
  // 1.@Prop
  @Prop({ default: "" })
  eventId!: string;
  // 2.property
  loading?: boolean = false;
  // 3.getter
  get memberList() {
    return this.eventBoardStore.memberList;
  }
  // 4.@Watch
  // 5.method
  async onAddMember(memberItem: MemberItem) {
    try {
      this.loading = true;
      const params = {
        eventId: this.eventId,
        memberItem
      };
      await this.eventBoardStore.addMember(params);
    } catch {
      alert("failed add member");
    } finally {
      this.$buefy.toast.open("新規追加しました");
      this.loading = false;
    }
  }

  async onDeleteMember(memberId: string) {
    try {
      this.loading = true;
      await this.eventBoardStore.deleteMember({
        eventId: this.eventId,
        memberId: memberId
      });
    } catch {
      alert("failed delete member");
    } finally {
      this.loading = false;
      this.$buefy.toast.open("削除しました");
    }
  }

  async mounted() {
    try {
      this.loading = true;
      await this.eventBoardStore.startGetMemberListListener(this.eventId);
    } finally {
      this.loading = false;
    }
  }

  destroyed() {
    this.eventBoardStore.stopGetMemberListListener();
  }
}
</script>

<style lang="scss" scoped></style>

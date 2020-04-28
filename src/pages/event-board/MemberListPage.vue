<template>
  <div>
    <t-member-list-page
      @addMember="onAddMember($event)"
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
  // 3.getter
  get memberList() {
    return this.eventBoardStore.memberList;
  }
  // 4.@Watch
  // 5.method
  async onAddMember(memberItem: MemberItem) {
    try {
      const params = {
        eventId: this.eventId,
        memberItem
      };
      await this.eventBoardStore.addMember(params);
    } catch {
      alert("failed add member");
    }
  }

  mounted() {
    this.eventBoardStore.startGetMemberListListener(this.eventId);
  }

  destroyed() {
    this.eventBoardStore.stopGetMemberListListener();
  }
}
</script>

<style lang="scss" scoped>
</style>
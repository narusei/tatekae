<template>
  <div>
    <p>TEventDetailPage</p>
    <div>
      <router-link :to="{ name: 'EventList' }">
        <button class="button is-primary">BackEventList</button>
      </router-link>
    </div>
    <div>test: {{ eventDetail }}</div>
    <div>{{ eventDetail.name }}のページ</div>
    <div>
      <router-link :to="{ name: 'MemberList', params: { eventId: eventId } }">
        <button class="button is-primary">MemberList</button>
      </router-link>
    </div>
    <t-bill-list :eventId="eventId" :billList="billList"></t-bill-list>
    <t-result-list :resultList="resultList"></t-result-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import TBillList from "@/components/event-board/TBillList";
import TResultList from "@/components/event-board/TResultList";
import { EventItem } from "@/models/EventItem";
import { BillItem } from "@/models/BillItem";
import { MemberItem } from "@/models/MemberItem";
import { ResultItem } from "@/models/ResultItem";

@Component({
  components: {
    TBillList,
    TResultList,
  },
})
export default class TEventDetailPage extends Vue {
  // 1.@Prop
  @Prop({ default: "" })
  eventId!: string;

  @Prop({ default: () => ({}) })
  eventDetail!: EventItem;

  @Prop({ default: () => [] })
  billList!: BillItem[];

  @Prop({ default: () => [] })
  resultList!: ResultItem[];
  // 2.property
  // 3.getter
  // 4.@Watch
  // 5.method
}
</script>

<style lang="scss" scoped></style>

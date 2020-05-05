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
        <b-navbar-item tag="div">
          <router-link :to="{ name: 'EventList' }">
            <button class="button is-primary">BackEventList</button>
          </router-link>
        </b-navbar-item>
        <b-navbar-item>
          <router-link
            :to="{ name: 'MemberList', params: { eventId: eventId } }"
          >
            <button class="button is-primary">MemberList</button>
          </router-link>
        </b-navbar-item>
      </template>
    </b-navbar>
    <main-content>
      <div class="event-detail-header">{{ eventDetail.name }}のページ</div>
      <section>
        <b-tabs
          position="is-centered"
          type="is-boxed"
          v-model="selectedTabIndex"
          expanded
        >
          <b-tab-item label="請求書"></b-tab-item>
          <b-tab-item label="結果"></b-tab-item>
        </b-tabs>
      </section>
      <div v-if="selectedTabIndex === 0">
        <t-bill-list :eventId="eventId" :billList="billList"></t-bill-list>
      </div>
      <div v-else>
        <t-result-list :resultList="resultList"></t-result-list>
      </div>
    </main-content>
  </app-base>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import authApi from "@/api/auth";
import TBillList from "@/components/event-board/TBillList";
import TResultList from "@/components/event-board/TResultList";
import { EventItem } from "@/models/EventItem";
import { BillItem } from "@/models/BillItem";
import { ResultItem } from "@/models/ResultItem";
import AppBase from "@/components/common/AppBase";
import MainContent from "@/components/common/MainContent";

@Component({
  components: {
    TBillList,
    TResultList,
    AppBase,
    MainContent,
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
  selectedTabIndex?: number = 0;
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
}
</script>

<style lang="scss" scoped>
.event-detail-header {
  padding: 0 0 8px 8px;
}
</style>

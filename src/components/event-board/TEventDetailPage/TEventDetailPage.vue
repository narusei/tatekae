<template>
  <app-base>
    <b-navbar class="is-mainColor">
      <template slot="brand">
        <b-navbar-item tag="a">
          <router-link :to="{ name: 'EventList' }">
            <b-icon icon="chevron-left"></b-icon>
          </router-link>
        </b-navbar-item>
        <b-navbar-item tag="div">イベント詳細</b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="a" @click="signOut()">
          Sign Out
        </b-navbar-item>
        <b-navbar-item tag="a">
          <router-link
            :to="{ name: 'MemberList', params: { eventId: eventId } }"
            style="color: #2c3e50;"
          >
            MemberList
          </router-link>
        </b-navbar-item>
      </template>
    </b-navbar>
    <main-content>
      <div class="event-detail-header">
        <div class="event-detail-header-title">
          {{ eventDetail.name }}
        </div>
        <div class="event-detail-header-menu">
          <router-link
            :to="{ name: 'MemberList', params: { eventId: eventId } }"
            style="color: #2c3e50;"
          >
            <b-icon icon="account-plus"></b-icon>
          </router-link>
        </div>
      </div>
      <section class="event-detail-tabs">
        <b-tabs position="is-centered" v-model="selectedTabIndex" expanded>
          <b-tab-item label="請求書">
            <t-bill-list :eventId="eventId" :billList="billList"></t-bill-list>
          </b-tab-item>
          <b-tab-item label="結果">
            <t-result-list :resultList="resultList"></t-result-list>
          </b-tab-item>
        </b-tabs>
      </section>
    </main-content>
    <b-loading
      :is-full-page="true"
      :active.sync="isLoading"
      :can-cancel="false"
    >
    </b-loading>
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
    MainContent
  }
})
export default class TEventDetailPage extends Vue {
  // 1.@Prop
  @Prop({ default: false })
  isLoading!: boolean;

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
  display: flex;
  font-size: 16px;
  padding-top: 16px;
  padding-left: 16px;
}

.event-detail-header-menu {
  margin-left: auto;
  margin-right: 14px;
}

.event-detail-tabs {
  padding-top: 8px;
}
</style>

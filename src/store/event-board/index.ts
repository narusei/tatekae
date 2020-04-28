import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "@/store/event-board/mutation-types";
import eventBoardApi from "@/api/evennt-board";
import { EventItem } from "@/models/EventItem";
import { BillItem } from "@/models/BillItem";
import { MemberItem } from "@/models/MemberItem";

@Module({ name: "eventBoard", namespaced: true })
export default class EventBoardStore extends VuexModule {
  eventList: EventItem[] = [];
  eventDetail: EventItem = {};
  billList: BillItem[] = [];
  billDetail: BillItem = {};
  memberList: MemberItem[] = [];
  unSubscribeEventList: any;
  unSubscribeBillList: any;
  unSubscribeMemberList: any;

  @Action({ rawError: true })
  startGetEventListListener() {
    if (this.unSubscribeEventList) {
      this.unSubscribeEventList();
      this.unSubscribeEventList = null;
    }

    this.unSubscribeEventList = eventBoardApi
      .getEventListSnapshot()
      .onSnapshot((querySnapsot) => {
        const eventListData = querySnapsot.docs.map((docSnapshot) => {
          const eventData = docSnapshot.data();
          eventData.id = docSnapshot.id;
          return eventData;
        });
        this.context.commit(MUTATION.SET_EVENT_LIST, eventListData);
      });
  }

  @Action({ rawError: true })
  stopGetEventListListener() {
    if (this.unSubscribeEventList) {
      this.unSubscribeEventList();
      this.unSubscribeEventList = null;
    }
  }

  @Action({ rawError: true })
  async addEvent(eventItem: EventItem) {
    await eventBoardApi
      .addEvent(eventItem)
      .then((result) => console.log("Add event success!"))
      .catch((error) => alert(error.message));
  }

  @Action({ rawError: true })
  async getEventDetail(eventId: string) {
    if (this.eventList.length) {
      const eventDetailIndex = this.eventList.findIndex(
        (event) => event.id === eventId
      );
      this.context.commit(
        MUTATION.SET_EVENT_DETAIL,
        this.eventList[eventDetailIndex]
      );
    } else {
      await eventBoardApi.getEventDetail(eventId).then((result) => {
        const eventDetailData = result.data();
        if (eventDetailData) {
          eventDetailData.id = result.id;
          this.context.commit(MUTATION.SET_EVENT_DETAIL, eventDetailData);
        }
      });
    }
  }

  @Action({ rawError: true })
  startGetBillListListener(eventId: string) {
    if (this.unSubscribeBillList) {
      this.unSubscribeBillList();
      this.unSubscribeBillList = null;
    }

    this.unSubscribeBillList = eventBoardApi
      .getBillListSnapshot(eventId)
      .onSnapshot((querySnapshot) => {
        const billListData = querySnapshot.docs.map((docSnapshot) => {
          const billData = docSnapshot.data();
          billData.id = docSnapshot.id;
          return billData;
        });
        this.context.commit(MUTATION.SET_BILL_LIST, billListData);
      });
  }

  @Action({ rawError: true })
  stopGetBillListListener() {
    if (this.unSubscribeBillList) {
      this.unSubscribeBillList();
      this.unSubscribeBillList = null;
    }
  }

  @Action({ rawError: true })
  async addBill(params: { eventId: string; billItem: BillItem }) {
    await eventBoardApi
      .addBill(params.eventId, params.billItem)
      .then((result) => console.log("Add bill success!"))
      .catch((error) => alert(error.message));
  }

  @Action({ rawError: true })
  startGetMemberListListener(eventId: string) {
    if (this.unSubscribeMemberList) {
      this.unSubscribeMemberList();
      this, (this.unSubscribeMemberList = null);
    }

    this.unSubscribeMemberList = eventBoardApi
      .getMemberListSnapshot(eventId)
      .onSnapshot((querySnapshot) => {
        const memberListData = querySnapshot.docs.map((docSnapshot) => {
          const memberData = docSnapshot.data();
          memberData.id = docSnapshot.id;
          return memberData;
        });
        this.context.commit(MUTATION.SET_MEMBER_LIST, memberListData);
      });
  }

  @Action({ rawError: true })
  stopGetMemberListListener() {
    if (this.unSubscribeMemberList) {
      this.unSubscribeMemberList();
      this, (this.unSubscribeMemberList = null);
    }
  }

  @Action({ rawError: true })
  async addMember(params: { eventId: string; memberItem: MemberItem }) {
    await eventBoardApi
      .addMember(params.eventId, params.memberItem)
      .then((result) => console.log("Add member success!"))
      .catch((error) => alert(error.message));
  }

  @Mutation
  [MUTATION.SET_EVENT_LIST](payload: EventItem[]) {
    this.eventList = payload;
  }

  @Mutation
  [MUTATION.SET_EVENT_DETAIL](payload: EventItem) {
    this.eventDetail = payload;
  }

  @Mutation
  [MUTATION.SET_BILL_LIST](payload: BillItem[]) {
    this.billList = payload;
  }

  @Mutation
  [MUTATION.SET_MEMBER_LIST](payload: MemberItem[]) {
    this.memberList = payload;
  }
}

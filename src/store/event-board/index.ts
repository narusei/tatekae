import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "@/store/event-board/mutation-types";
import firebase from "firebase";
import eventBoardApi from "@/api/evennt-board";
import { EventItem } from "@/models/EventItem";
import { BillItem } from "@/models/BillItem";
import { MemberItem } from "@/models/MemberItem";
import { ResultItem } from "@/models/ResultItem";
import TatekaeFunc from "@/utils/TatekaeFunc";

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
  resultList: ResultItem[] = [];

  @Action({ rawError: true })
  async getEventList() {
    const snapshot = await eventBoardApi.getEventList();
    const eventListData = snapshot.docs.map((doc) => {
      const eventData = doc.data();
      eventData.id = doc.id;
      return eventData;
    });
    this.context.commit(MUTATION.SET_EVENT_LIST, eventListData);
  }

  @Action({ rawError: true })
  async addEvent(eventItem: EventItem) {
    await eventBoardApi.addEvent(eventItem);
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
      const result = await eventBoardApi.getEventDetail(eventId);
      const eventDetailData = result.data();
      if (eventDetailData) {
        eventDetailData.id = result.id;
      }
      this.context.commit(MUTATION.SET_EVENT_DETAIL, eventDetailData);
    }
  }

  @Action({ rawError: true })
  async getBillList(eventId: string) {
    const snapshot = await eventBoardApi.getBillList(eventId);
    const billListData = snapshot.docs.map((doc) => {
      const billData = doc.data();
      billData.id = doc.id;
      return billData;
    });
    this.context.commit(MUTATION.SET_BILL_LIST, billListData);
  }

  @Action({ rawError: true })
  async addBill(params: { eventId: string; billItem: BillItem }) {
    await eventBoardApi.addBill(params.eventId, params.billItem);
  }

  @Action({ rawError: true })
  async getMemberList(eventId: string) {
    const snapshot = await eventBoardApi.getMemberList(eventId);
    const memberListData = snapshot.docs.map((doc) => {
      const memberData = doc.data();
      memberData.id = doc.id;
      return memberData;
    });
    this.context.commit(MUTATION.SET_MEMBER_LIST, memberListData);
  }

  @Action({ rawError: true })
  async addMember(params: { eventId: string; memberItem: MemberItem }) {
    await eventBoardApi.addMember(params.eventId, params.memberItem);
  }

  @Action({ rawError: true })
  async getResultList() {
    const kumiawaseData: MemberItem[][] = await TatekaeFunc.kumiawase(
      this.memberList
    );
    const resultListData: ResultItem[] = await TatekaeFunc.resultList(
      kumiawaseData,
      this.billList
    );
    this.context.commit(MUTATION.SET_RESULT_LIST, resultListData);
  }

  // listener
  @Action({ rawError: true })
  startGetEventListListener() {
    if (this.unSubscribeEventList) {
      this.unSubscribeEventList();
      this.unSubscribeEventList = null;
    }

    this.unSubscribeEventList = eventBoardApi
      .getEventListReference()
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
  startGetBillListListener(eventId: string) {
    if (this.unSubscribeBillList) {
      this.unSubscribeBillList();
      this.unSubscribeBillList = null;
    }

    this.unSubscribeBillList = eventBoardApi
      .getBillListReference(eventId)
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
  startGetMemberListListener(eventId: string) {
    if (this.unSubscribeMemberList) {
      this.unSubscribeMemberList();
      this, (this.unSubscribeMemberList = null);
    }

    this.unSubscribeMemberList = eventBoardApi
      .getMemberListReference(eventId)
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

  @Mutation
  [MUTATION.SET_RESULT_LIST](payload: ResultItem[]) {
    this.resultList = payload;
  }
}

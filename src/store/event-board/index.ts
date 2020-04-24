import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import * as MUTATION from "@/store/event-board/mutation-types";
import eventBoardApi from "@/api/evennt-board";

@Module({ name: "eventBoard", namespaced: true })
export default class EventBoardStore extends VuexModule {
  eventList: [] = [];
  eventDetail: any;
  unSubscribeEventList: any;

  @Action({ rawError: true })
  startGetEventListListener() {
    if (this.unSubscribeEventList) {
      this.unSubscribeEventList();
      this.unSubscribeEventList = null;
    }

    this.unSubscribeEventList = eventBoardApi
      .getEventListSnapshot()
      .onSnapshot((querySnapsot) => {
        const eventListData = querySnapsot.docs.map((docSnapshot) =>
          docSnapshot.data()
        );
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
  async addEvent(name: string) {
    await eventBoardApi
      .addEvent(name)
      .then((result) => {
        this.context.commit(MUTATION.ADD_EVENT, result);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  @Mutation
  [MUTATION.SET_EVENT_LIST](payload: []) {
    this.eventList = payload;
  }

  @Mutation
  [MUTATION.ADD_EVENT](payload: any) {
    this.eventDetail = payload;
  }
}

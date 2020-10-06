<template>
  <app-base>
    <b-navbar class="is-mainColor">
      <template slot="brand">
        <b-navbar-item tag="a">
          <router-link
            :to="{ name: 'EventDetail', params: { eventId: eventId } }"
          >
            <b-icon icon="chevron-left"></b-icon>
          </router-link>
        </b-navbar-item>
        <b-navbar-item tag="id">メンバーリスト</b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="a" @click="signOut()">
          Sign Out
        </b-navbar-item>
      </template>
    </b-navbar>
    <main-content>
      <div class="member-list-header">メンバー一覧</div>
      <div class="member-list">
        <div v-for="member in memberList" :key="member.id">
          <div class="member-list-item">
            <div class="member-list-item-name">{{ member.name }}</div>
            <b-button
              class="member-list-item-delete"
              icon-right="delete"
              @click="onDeleteMember(member.id)"
            ></b-button>
          </div>
        </div>
      </div>
      <floating-button
        :iconType="'plus'"
        @click="onOpenAddMemberDialog()"
      ></floating-button>
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
import { MemberItem } from "@/models/MemberItem";
import AppBase from "@/components/common/AppBase";
import MainContent from "@/components/common/MainContent";
import FloatingButton from "@/components/common/FloatingButton";

@Component({
  components: {
    AppBase,
    MainContent,
    FloatingButton
  }
})
export default class TMemberListPage extends Vue {
  // 1.@Prop
  @Prop({ default: false })
  isLoading!: boolean;

  @Prop({ default: "" })
  eventId!: string;

  @Prop({ default: () => [] })
  memberList!: MemberItem[];
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

  onOpenAddMemberDialog() {
    this.$buefy.dialog.prompt({
      message: "メンバーの名前を入力してください",
      inputAttrs: {
        placeholder: "メンバーの名前",
        maxlength: 15
      },
      trapFocus: true,
      onConfirm: value => {
        this.onAddMember(value);
      }
    });
  }

  onAddMember(value: string) {
    this.$emit("addMember", {
      name: value
    });
  }

  onDeleteMember(memberId: string) {
    this.$buefy.dialog.confirm({
      title: "メンバーを削除",
      message:
        "一度メンバーを削除したら元には戻せません。このメンバーが請求した請求書も削除されます。削除しますか？",
      confirmText: "削除",
      type: "is-danger",
      hasIcon: true,
      onConfirm: () => {
        this.$emit("deleteMember", memberId);
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.member-list-header {
  padding-top: 16px;
  padding-left: 16px;
}

.member-list {
  padding-top: 8px;
}

.member-list-item {
  display: flex;
  align-items: center;
  border: solid 1px;
  border-radius: 5px;
  margin: 8px 16px;
  padding: 8px 16px;
}

.member-list-item-name {
  margin-right: auto;
}

.member-list-item-delete {
  border: none;
}
</style>

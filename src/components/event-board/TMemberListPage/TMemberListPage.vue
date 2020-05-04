<template>
  <div>
    <p>TMemberListPage</p>
    <div>
      <router-link :to="{ name: 'EventDetail', params: { eventId: eventId } }">
        <button class="button is-primary">BackDetailPage</button>
      </router-link>
    </div>
    <b-field label="memberName">
      <b-input maxlength="20" type="textarea" v-model="memberName"></b-input>
    </b-field>
    <b-field>
      <p class="control">
        <button class="button is-primary" @click="onAddMember()">
          AddMember
        </button>
      </p>
    </b-field>
    <div>test: {{ memberList }}</div>
    <div v-for="member in memberList" :key="member.id">
      <div>{{ member.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { MemberItem } from "@/models/MemberItem";

@Component({
  components: {},
})
export default class TMemberListPage extends Vue {
  // 1.@Prop
  @Prop({ default: "" })
  eventId!: string;

  @Prop({ default: () => [] })
  memberList!: MemberItem[];
  // 2.property
  memberName?: string = "";
  // 3.getter
  // 4.@Watch
  // 5.method
  onAddMember() {
    this.$emit("addMember", {
      name: this.memberName,
    });
  }
}
</script>

<style lang="scss" scoped></style>

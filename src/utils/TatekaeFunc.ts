import { MemberItem } from "@/models/MemberItem";
import { BillItem } from "@/models/BillItem";
import { ResultItem } from "@/models/ResultItem";

export default {
  resultList(kumiawaseMember: MemberItem[][], billList: BillItem[]) {
    return new Promise<ResultItem[]>((resolve, reject) => {
      const resultListData = [];
      for (let i = 0; i < kumiawaseMember?.length; i++) {
        const kumiawase = kumiawaseMember[i];
        const rightMemberAllPayment = billList
          .filter((bill) => {
            return (
              bill.billingPerson === kumiawase[1].name && bill.payer === "ALL"
            );
          })
          .map((bill) => bill.money)
          .reduce((previous, current) => {
            return Number(previous) + Number(current);
          }, 0);

        const leftMemberAllPayment = billList
          .filter((bill) => {
            return (
              bill.billingPerson === kumiawase[0].name && bill.payer === "ALL"
            );
          })
          .map((bill) => bill.money)
          .reduce((previous, current) => {
            return Number(previous) + Number(current);
          }, 0);

        const rightToLeftPayment = billList
          .filter((bill) => {
            return (
              bill.billingPerson === kumiawase[1].name &&
              bill.payer === kumiawase[0].name
            );
          })
          .map((bill) => bill.money)
          .reduce((previous, current) => {
            return Number(previous) + Number(current);
          }, 0);

        const leftToRightPayment = billList
          .filter((bill) => {
            return (
              bill.billingPerson === kumiawase[0].name &&
              bill.payer === kumiawase[1].name
            );
          })
          .map((bill) => bill.money)
          .reduce((previous, current) => {
            return Number(previous) + Number(current);
          }, 0);

        if (
          rightMemberAllPayment !== undefined &&
          leftMemberAllPayment !== undefined &&
          rightToLeftPayment !== undefined &&
          leftToRightPayment !== undefined
        ) {
          const resultPayment =
            rightMemberAllPayment -
            leftMemberAllPayment +
            (rightToLeftPayment - leftToRightPayment);
          let fromMember;
          let toMember;
          if (resultPayment > 0) {
            fromMember = kumiawase[0];
            toMember = kumiawase[1];
          } else {
            fromMember = kumiawase[1];
            toMember = kumiawase[0];
          }
          const resultData: ResultItem = {
            from: fromMember,
            to: toMember,
            payment: resultPayment,
          };
          resultListData.push(resultData);
        }
      }
      resolve(resultListData);
    });
  },

  kumiawase(memberList: MemberItem[]) {
    return new Promise<MemberItem[][]>((resolve, reject) => {
      const kumiawaseResult: MemberItem[][] = [];
      for (let i = 0; i < memberList.length; i++) {
        const memberArray = memberList.slice(i + 1);
        for (let j = 0; j < memberArray.length; j++) {
          kumiawaseResult.push([memberList[i]].concat([memberArray[j]]));
        }
      }
      resolve(kumiawaseResult);
    });
  },
};

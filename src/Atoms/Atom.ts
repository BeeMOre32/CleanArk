import { atom } from "recoil";
import { IJobState, IJobwork } from "../interface/interface";

export const character = atom<IJobState>({
  key: "job",
  default: {
    job: [
      {
        id: 0,
        name: "name",
        class: "bard",
        Work: {
          DailyWork: [{ id: 0, name: "에포나 3회 클리어", eponaQuest: true }],
        },
      },
      {
        id: 2,
        name: "name2",
        class: "bard",
        Work: {},
      },
    ],
  },
});

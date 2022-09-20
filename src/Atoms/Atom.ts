import { atom } from "recoil";
import { IJobState } from "../interface/interface";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "job",
  storage: localStorage,
});

export const Job = atom<IJobState>({
  key: "job",
  default: {
    job: [
      {
        id: 0,
        class: "소서리스",
        name: "test",
        Work: {
          DailyWork: [],
          WeeklyWork: [],
        },
      },
    ],
  },
});

export const DarkMode = atom({
  key: "DarkMode",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

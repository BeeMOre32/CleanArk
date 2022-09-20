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
    job: [],
  },
  effects_UNSTABLE: [persistAtom],
});

export const DarkMode = atom<boolean>({
  key: "DarkMode",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

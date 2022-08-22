import { atom } from "recoil";
import { IJobState } from "../interface/interface";

export const character = atom<IJobState>({
  key: "job",
  default: {
    job: [
      { id: 0, name: "name", class: "bard" },
      { id: 2, name: "name", class: "bard" },
    ],
  },
});

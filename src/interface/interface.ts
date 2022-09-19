export interface Ijob {
  id: number;
  class: string;
  name: string;
  Work: IJobwork;
}

export interface IJobState {
  job: Ijob[];
}

export interface JobComProps {
  index: number;
  class: string;
  name: string;
  id: number;
}

export interface IJobwork {
  DailyWork?: IDailyWork[];
  WeeklyWork?: IWeekyWork[];
}

export interface IDailyWork {
  id: number;
  name: string;
  done: boolean;
}

export interface IWeekyWork {
  id: number;
  name: string;
  done: boolean;
}

export interface IHomeWorkProp {
  DailyWork?: IDailyWork[];
  WeeklyWork?: IWeekyWork[];
}

export interface IAddJobFormProp {
  toggleAddCharacterForm: () => void;
}

export interface IJobForm {
  name: string;
  class: string;
}

export interface IDeleteJobComProp {
  onClickHandle: () => void;
  JobName: string;
}

export interface IAddHomeWorkForm {
  type: "DailyWork" | "WeeklyWork";
  name: string;
}

export interface Ijob {
  id: number;
  class: string;
  name: string;
  Work: IJobwork;
}

export interface IJobState {
  job: Ijob[];
}

export interface IFormSubmit {
  class: string;
  name: string;
}

export interface JobComProps {
  index: number;
  class: string;
  name: string;
}

export interface IJobwork {
  DailyWork?: IDailyWork[];
}

export interface IDailyWork {
  id: number;
  name: string;
  eponaQuest?: boolean;
  dailyGuradian?: boolean;
  chaosDungeon?: boolean;
}

export interface IHomeWorkProp {
  DailyWork?: IDailyWork[];
}

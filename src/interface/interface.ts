export interface Ijob {
  id: number;
  class: string;
  name: string;
}

export interface IJobState {
  job: Ijob[];
}

export interface IFormSubmit {
  class: string;
  name: string;
}

export interface JobComProps {
  class: string;
  name: string;
}

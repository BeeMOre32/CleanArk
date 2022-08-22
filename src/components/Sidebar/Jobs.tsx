import { JobComProps } from "../../interface/interface";

export default function Jobs(job: JobComProps) {
  return (
    <div className="character">
      <img
        src={process.env.PUBLIC_URL + "images/" + job.class + ".png"}
        width="50px"
      />
      <span>{job.name}</span>
    </div>
  );
}

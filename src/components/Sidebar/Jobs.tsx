import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { JobComProps } from "../../interface/interface";
import "../../styles/main/main.css";
import DeleteJob from "./DeleteJob";
import cn from "classnames";
import { useRecoilValue } from "recoil";
import { DarkMode } from "../../Atoms/Atom";

function Jobs(job: JobComProps) {
  const [jobmodal, setJobmodal] = useState(false);
  const darkmode = useRecoilValue(DarkMode);
  const onClickHandle = () => setJobmodal((prev) => !prev);
  return (
    <>
      <Draggable key={job.name} index={job.index} draggableId={job.id + ""}>
        {(p) => (
          <div
            ref={p.innerRef}
            {...p.dragHandleProps}
            {...p.draggableProps}
            className={cn(
              "character",
              darkmode ? "dark_mode_job" : "light_mode_job"
            )}
          >
            <Link to={job.id + ""} className="job_link">
              <img
                src={process.env.PUBLIC_URL + "/images/" + job.class + ".png"}
                width="45px"
                alt=""
              />
              <span>{job.name}</span>
            </Link>
            <button onClick={onClickHandle} className="job_delete_btn">
              ❌
            </button>
          </div>
        )}
      </Draggable>
      <AnimatePresence>
        {jobmodal ? (
          <DeleteJob onClickHandle={onClickHandle} JobName={job.name} />
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default React.memo(Jobs);

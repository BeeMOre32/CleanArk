import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { JobComProps } from "../../interface/interface";
import "../../styles/main/main.css";

function Jobs(job: JobComProps) {
  return (
    <Draggable key={job.name} index={job.index} draggableId={job.name + ""}>
      {(p) => (
        <div
          ref={p.innerRef}
          {...p.dragHandleProps}
          {...p.draggableProps}
          className="character"
        >
          <Link to={job.name} className="job_link">
            <img
              src={process.env.PUBLIC_URL + "images/" + job.class + ".png"}
              width="50px"
            />
            <span>{job.name}</span>
          </Link>
        </div>
      )}
    </Draggable>
  );
}

export default React.memo(Jobs);

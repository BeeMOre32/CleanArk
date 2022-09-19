import { useRecoilState } from "recoil";
import { Job } from "../../Atoms/Atom";
import "../../styles/main/main.css";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import Jobs from "./Jobs";
import styled from "styled-components";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AddJobForm from "./AddJobForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Area = styled.ul<{ isDraggingOver: boolean }>`
  background-color: ${(p) => (p.isDraggingOver ? "#dff9fb" : "inhert")};
`;

export default function LeftSideBar() {
  const [job, setJob] = useRecoilState(Job);
  const onDrag = ({ destination, source }: DropResult) => {
    if (!destination) return;
    setJob((AllJob) => {
      const copied = [...AllJob.job];
      const removeJob = AllJob.job[source.index];
      copied.splice(source.index, 1);
      copied.splice(destination?.index, 0, removeJob);
      return {
        job: copied,
      };
    });
  };
  const [showAddCharacter, setshowAddCharacter] = useState(false);
  const toggleAddCharacterForm = () => setshowAddCharacter((prev) => !prev);

  return (
    <DragDropContext onDragEnd={onDrag}>
      <Droppable droppableId="Job_Board">
        {(p, s) => (
          <Area
            isDraggingOver={s.isDraggingOver}
            className="sidebar left_SideBars"
            ref={p.innerRef}
            {...p.droppableProps}
          >
            {job.job.map((job, i) => (
              <Jobs
                id={job.id}
                key={i}
                class={job.class!}
                name={job.name!}
                index={i}
              />
            ))}
            {p.placeholder}
            <button
              className="add_character_btn"
              onClick={toggleAddCharacterForm}
            >
              <FontAwesomeIcon icon={solid("plus")}></FontAwesomeIcon>
            </button>
          </Area>
        )}
      </Droppable>
      <AnimatePresence>
        {showAddCharacter ? (
          <AddJobForm toggleAddCharacterForm={toggleAddCharacterForm} />
        ) : null}
      </AnimatePresence>
    </DragDropContext>
  );
}

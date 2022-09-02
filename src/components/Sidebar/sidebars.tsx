import { useRecoilState } from "recoil";
import { character } from "../../Atoms/Atom";
import { useForm } from "react-hook-form";
import "../../styles/main/main.css";
import { IFormSubmit } from "../../interface/interface";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import Jobs from "./Jobs";
import styled from "styled-components";

const Area = styled.ul<{ isDraggingOver: boolean }>`
  background-color: ${(p) => (p.isDraggingOver ? "#dff9fb" : "inhert")};
`;

export default function LeftSideBar() {
  const [job, setJob] = useRecoilState(character);
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
  const { register, handleSubmit } = useForm<IFormSubmit>();
  const onSubmit = (data: IFormSubmit) => {
    const NewJob = {
      id: Date.now(),
      class: data.class,
      name: data.name,
      Work: {},
    };
    setJob((AllJob) => {
      console.log(AllJob);
      return { job: [...AllJob.job, NewJob] };
    });
  };
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
              <Jobs key={i} class={job.class} name={job.name} index={i} />
            ))}
            {p.placeholder}
          </Area>
        )}
      </Droppable>
      {/* <form onSubmit={handleSubmit(onSubmit)} className="add_job">
        <input type="text" {...register("class")} placeholder="Class" />
        <input type="text" {...register("name")} placeholder="Name" />
        <button>Add It!</button>
      </form> */}
    </DragDropContext>
  );
}

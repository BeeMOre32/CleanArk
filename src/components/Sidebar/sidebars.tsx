import { useRecoilState } from "recoil";
import { character } from "../../Atoms/Atom";
import { useForm } from "react-hook-form";
import "../../styles/main/main.css";
import { IFormSubmit } from "../../interface/interface";
import Jobs from "./Jobs";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function LeftSideBar() {
  const [job, setJob] = useRecoilState(character);
  const onDrag = () => {};
  const { register, handleSubmit } = useForm<IFormSubmit>();
  const onSubmit = (data: IFormSubmit) => {
    const NewJob = {
      id: Date.now(),
      class: data.class,
      name: data.name,
    };
    setJob((AllJob) => {
      console.log(AllJob);
      return { ...AllJob, job: [...AllJob.job, NewJob] };
    });
  };
  return (
    <DragDropContext onDragEnd={onDrag}>
      <div className="sidebar left_SideBars">
        <Droppable droppableId="one">
          {(m) => (
            <div ref={m.innerRef}>
              <Draggable index={0} draggableId="one">
                {(m) => (
                  <div
                    ref={m.innerRef}
                    {...m.draggableProps}
                    {...m.dragHandleProps}
                  >
                    <span>1</span>
                  </div>
                )}
              </Draggable>
              <Draggable index={1} draggableId="two">
                {(m) => (
                  <div
                    ref={m.innerRef}
                    {...m.draggableProps}
                    {...m.dragHandleProps}
                  >
                    <span>2</span>
                  </div>
                )}
              </Draggable>
              {/* <form onSubmit={handleSubmit(onSubmit)} className="add_job">
                <input type="text" {...register("class")} placeholder="Class" />
                <input type="text" {...register("name")} placeholder="Name" />
                <button>Add It!</button>
              </form> */}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

// //   {job.job.map((job, i) => (
//   <Jobs key={i} {...job} />
//   ))}

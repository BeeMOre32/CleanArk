import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useRecoilState } from "recoil";
import { Job } from "../../Atoms/Atom";
import { IAddHomeWorkForm } from "../../interface/interface";
import "../../styles/main/addhomework.css";
import { motion, Variants } from "framer-motion";

const addTaskmenuVars: Variants = {
  start: {
    opacity: 0,
    y: 200,

    transition: {
      duration: 0.25,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 200,

    transition: {
      duration: 0.25,
    },
  },
};

export default function AddHomeWork({ onClickHandel }: any) {
  const [JobList, setHomeWork] = useRecoilState(Job);

  const Param = useParams();
  const currentJob = JobList.job.find((index) => index.name === Param.id);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddHomeWorkForm>();

  const onSubmitHandle = (data: IAddHomeWorkForm) => {
    setValue("name", "");
    setHomeWork((prev) => {
      const copiedAllJob = [...prev.job];
      const copiedCurrentJob = currentJob!;

      const arrIndex = copiedAllJob.findIndex((object) => {
        return object.id === currentJob?.id;
      });

      //  1. 현재에 기반한 데이터로 Work 내용을 모두 복사한다
      const copiedCurrentJobTask = copiedCurrentJob.Work;
      // 2. 이전에 있던 data.type 의 내용을 복사를 한다
      const copiedCurrentTypeTaskList = [...copiedCurrentJobTask[data.type]!];
      // 3. 폼으로 받은 데이터를 기반으로 object 생성 및 기본 배열 업데이트
      const updatedCurrentTypeTaskList = copiedCurrentTypeTaskList;
      updatedCurrentTypeTaskList.push({
        id: Date.now(),
        name: data.name,
        done: false,
      });
      const updatedCurrentJobTask = {
        ...copiedCurrentJobTask,
        [data.type]: [...updatedCurrentTypeTaskList],
      };
      //  5. 업데이트한 job task를 현재 있는 직업으로 바꾸기
      const updateCurrentJob = {
        ...copiedCurrentJob,
        Work: {
          ...updatedCurrentJobTask,
        },
      };
      // 6. 마지막으로 현재 있던 모든 직업들을 복사 한 것에 currentjob을 추가해주기
      copiedAllJob.splice(arrIndex, 1);
      copiedAllJob.splice(arrIndex, 0, updateCurrentJob);

      return {
        job: [...copiedAllJob],
      };
    });
  };

  return (
    <motion.div
      variants={addTaskmenuVars}
      initial="start"
      animate="animate"
      exit="exit"
      className="add_homework_menu"
    >
      <div className="add_homework_menu_header">
        <span>매주 및 매일 할일 설정</span>
      </div>
      <form onSubmit={handleSubmit(onSubmitHandle)}>
        <select {...register("type")}>
          <option value="DailyWork">매일 할 일</option>
          <option value="WeeklyWork">매주 할 일</option>
        </select>
        <input
          {...register("name", {
            required: "표시할 내용을 반드시 설정 해야 합니다",
          })}
          type="text"
          placeholder="하단에 표시할 이름을 설정"
        />
        {errors.name ? <p>{errors.name?.message}</p> : null}
        <button>추가하기</button>
      </form>
      <button className="add_homework_menu_btn" onClick={onClickHandel}>
        창 닫기
      </button>
    </motion.div>
  );
}

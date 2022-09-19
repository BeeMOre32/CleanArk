import { motion, Variants } from "framer-motion";
import { IAddJobFormProp, IJobForm } from "../../interface/interface";
import { JobList } from "../../JobList";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { Job } from "../../Atoms/Atom";
import "../../styles/main/addcharacter.css";

const AddCharacterFormVar: Variants = {
  start: { y: -200, opacity: 0 },
  animation: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  exit: { y: -200, opacity: 0 },
};

export default function AddJobForm({
  toggleAddCharacterForm,
}: IAddJobFormProp) {
  const [char, setChar] = useRecoilState(Job);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IJobForm>();

  const onSubmit = (data: IJobForm) => {
    console.log(errors);

    const NewJob = {
      id: Date.now(),
      class: data.class,
      name: data.name,
      Work: {
        DailyWork: [],
        WeeklyWork: [],
      },
    };
    setValue("class", "");
    setValue("name", "");
    setChar((AllJob) => {
      return { job: [...AllJob.job, NewJob] };
    });
  };

  const checkValidateonJob = (value: string) =>
    JobList.some((element) => {
      if (element.job === value) {
        return true;
      }
      return false;
    });

  return (
    <motion.div
      variants={AddCharacterFormVar}
      initial="start"
      animate="animation"
      exit="exit"
      className="add_character"
    >
      <div className="add_character_form">
        <div className="add_character_form_header">
          <h1>캐릭터 추가</h1>
          <button onClick={toggleAddCharacterForm}>❌</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>추가하고 싶은 캐릭터 이름 입력</span>
          <input
            {...register("name", {
              required: "캐릭터 이름이 반드시 필요합니다.",
            })}
            type="text"
            placeholder="캐릭터 명"
          />
          {errors.class ? <p>{errors.name?.message}</p> : null}
          <span>추가하고 싶은 클래스 명 입력</span>
          <input
            {...register("class", {
              required: "클래스 명은 반드시 필요합니다.",
              validate: (value) =>
                checkValidateonJob(value)
                  ? true
                  : "클래스명이 유효하지 않습니다",
            })}
            type="text"
            list="job-list"
          />
          {errors.class ? <p>{errors.class?.message}</p> : null}
          <datalist id="job-list">
            {JobList.map((p, i) => (
              <option key={i} value={p.job}></option>
            ))}
          </datalist>
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            생성하기
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

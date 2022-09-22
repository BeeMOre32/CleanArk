import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  IJobState,
  IPasteForm,
  IPasteFormProp,
} from "../../../interface/interface";
import { useSetRecoilState } from "recoil";
import { Job } from "../../../Atoms/Atom";

export default function PasteCom({ togglePasteCom }: IPasteFormProp) {
  const setJobList = useSetRecoilState(Job);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPasteForm>();

  const onSubmit = (data: IPasteForm) => {
    togglePasteCom();
    setJobList((prev) => {
      const copiedValue = JSON.parse(data.pasted);
      console.log(copiedValue);
      function instanceOfIJob(data: any): data is IJobState {
        return "job" in data;
      }
      if (instanceOfIJob(copiedValue)) {
        return copiedValue;
      }
      alert("something wrong");
      return prev;
    });
  };
  return (
    <motion.div
      className="paste_form_div"
      initial={{
        opacity: 0,
        y: -200,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -200,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <textarea
            {...register("pasted", { required: "❗내용이 반드시 필요 합니다" })}
            placeholder="이곳에 전달 받은 데이터를 입력 해주십시오"
          ></textarea>
          <button>제출하기</button>
        </div>
        {errors.pasted ? <p>{errors.pasted.message}</p> : null}
      </form>
    </motion.div>
  );
}

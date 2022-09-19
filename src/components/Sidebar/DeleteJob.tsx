import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { Job } from "../../Atoms/Atom";
import { IDeleteJobComProp } from "../../interface/interface";

export default function DeleteJob({
  onClickHandle,
  JobName,
}: IDeleteJobComProp) {
  const setJob = useSetRecoilState(Job);

  const onDeleteButtonClickHandel = () => {
    onClickHandle();
    setJob((prev) => {
      const copiedJobList = [...prev.job];

      const arrIndex = copiedJobList.findIndex((obejct) => {
        return obejct.name === JobName;
      });

      copiedJobList.splice(arrIndex, 1);

      console.log(copiedJobList);

      return {
        job: [...copiedJobList],
      };
    });
  };
  return (
    <div className="job_delete_modal">
      <div className="job_delete_modal_div">
        <span>
          이 작업이 실행되면 전에 했던 데이터가 모두 삭제 됩니다. 캐릭터를 삭제
          하시겠습니까?
        </span>
        <div>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={onDeleteButtonClickHandel}
            >
              삭제한다
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={onClickHandle}
          >
            그만둔다
          </motion.button>
        </div>
      </div>
    </div>
  );
}

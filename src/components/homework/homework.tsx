import "../../styles/main/TaskList.css";
import { motion } from "framer-motion";
import { IHomeWorkProp } from "../../interface/interface";

export default function HomeWork(task: IHomeWorkProp) {
  const Daily = task.DailyWork;
  return (
    <div className="tasklist">
      <div className="dailytask">
        <div className="task_header">
          <h1>매일 해야 할 일</h1>
          <motion.button>할 일 추가</motion.button>
        </div>
        <div className="dailytasks">
          {Daily == null ? (
            <h1 className="notset_span">
              ❗아직 매일 할 일을 설정하지 않았습니다.
            </h1>
          ) : (
            Daily.map((p, i) => (
              <div key={i}>
                <span>{p.name}</span>
                <button>✔️</button>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="weeklytask">
        <div className="task_header">
          <h1>매주 해야 할 일</h1>
          <button>할 일 추가</button>
        </div>
      </div>
    </div>
  );
}

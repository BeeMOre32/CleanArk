import "../../styles/main/TaskList.css";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { DarkMode, Job } from "../../Atoms/Atom";
import cn from "classnames";
import AddHomeWork from "./AddHomeWork";
import { useState } from "react";

export default function HomeWork() {
  const darkmode = useRecoilValue(DarkMode);
  // 직업리스트 받아오는 함수
  const [JobList, setHomework] = useRecoilState(Job);
  // 파람 가져오는 함수
  const Param = useParams();
  const Parameter = Number(Param.id);
  // 현재 파람을 기반으로 보여지고 있는 페이지의 직업의 오브젝트를 가져오는 작업
  const currentJob = JobList.job.find((index) => Parameter === index.id);
  // 현재 보고 있는 직업의 숙제를 가져오는 변수
  const currentJobTask = currentJob?.Work;

  const [sidebarShowing, setSiebarShowing] = useState(false);

  const onClickHandel = () => {
    setSiebarShowing((prev) => !prev);
  };

  return (
    <div className="tasklist_wrapper">
      <AnimatePresence>
        {sidebarShowing ? <AddHomeWork onClickHandel={onClickHandel} /> : null}
      </AnimatePresence>
      <div className="tasklist">
        <div className="dailytask">
          <div className="task_header">
            <h1>매일 해야 할 일</h1>
            <motion.button
              className={cn("tasks_btn", darkmode ? "dark_mode_task_btn" : "")}
              onClick={onClickHandel}
            >
              할 일 추가
            </motion.button>
          </div>
          <div className="dailytaskes">
            {!currentJobTask?.DailyWork?.length ? (
              <h1 className="notset_span">
                ❗아직 매일 할 일을 설정하지 않았습니다.
              </h1>
            ) : (
              currentJobTask.DailyWork.map((task, i) => (
                <div className="tasks_list" key={i}>
                  <span className={cn({ task_checked: task.done })}>
                    {task.name}
                  </span>
                  <div className="tasks_btn">
                    <button
                      className={cn()}
                      onClick={() =>
                        setHomework((prev) => {
                          const copiedAllJob = [...prev.job];
                          const copiedCurrentJob = currentJob!;

                          const arrIndex = copiedAllJob.findIndex((object) => {
                            return object.id === currentJob?.id;
                          });

                          const copiedCurrentJobDailyTask =
                            copiedCurrentJob?.Work.DailyWork!;

                          const copiedCurrentJobWeeklyTaks =
                            copiedCurrentJob.Work.WeeklyWork;

                          const updateCurrentJobDailyTask =
                            copiedCurrentJobDailyTask.map((object) => {
                              if (object.id === task.id) {
                                return { ...object, done: !task.done };
                              }
                              return object;
                            });

                          const updateCurrentJob = {
                            ...copiedCurrentJob,
                            Work: {
                              DailyWork: updateCurrentJobDailyTask,
                              WeeklyWork: copiedCurrentJobWeeklyTaks,
                            },
                          };

                          copiedAllJob.splice(arrIndex, 1);
                          copiedAllJob.splice(arrIndex, 0, updateCurrentJob);

                          return {
                            job: [...copiedAllJob],
                          };
                        })
                      }
                    >
                      ✔️
                    </button>
                    <button
                      onClick={() =>
                        setHomework((prev) => {
                          let confirmed = window.confirm(
                            "매주 할일을 지우게 됩니다. 진행 하시겠습니까?"
                          );
                          if (confirmed) {
                            const copiedAllJob = [...prev.job];
                            const copiedCurrentJob = currentJob!;

                            const arrIndex = copiedAllJob.findIndex(
                              (object) => {
                                return object.id === currentJob?.id;
                              }
                            );

                            const copiedCurrentJobDailyTask = [
                              ...copiedCurrentJob?.Work.DailyWork!,
                            ];

                            const copiedCurrentJobWeeklyTask =
                              copiedCurrentJob.Work.WeeklyWork;

                            const copiedCurrentJobWeeklyTaskIndex =
                              copiedCurrentJob.Work.DailyWork!.findIndex(
                                (object) => {
                                  return object.id === task.id;
                                }
                              );

                            copiedCurrentJobDailyTask.splice(
                              copiedCurrentJobWeeklyTaskIndex,
                              1
                            );

                            const updateCurrentJob = {
                              ...copiedCurrentJob,
                              Work: {
                                DailyWork: copiedCurrentJobDailyTask,
                                WeeklyWork: copiedCurrentJobWeeklyTask,
                              },
                            };

                            copiedAllJob.splice(arrIndex, 1);
                            copiedAllJob.splice(arrIndex, 0, updateCurrentJob);

                            return {
                              job: [...copiedAllJob],
                            };
                          }
                          return prev;
                        })
                      }
                    >
                      ❌
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="weeklytask">
          <div className="task_header">
            <h1>매주 해야 할 일</h1>
            <button
              className={cn("tasks_btn", darkmode ? "dark_mode_task_btn" : "")}
              onClick={onClickHandel}
            >
              할 일 추가
            </button>
          </div>
          <div className="weeklytasks">
            {!currentJobTask?.WeeklyWork?.length ? (
              <h1 className="notset_span">
                ❗아직 매주 할 일을 설정하지 않았습니다.
              </h1>
            ) : (
              currentJobTask.WeeklyWork.map((task, i) => (
                <div className="tasks_list" key={i}>
                  <span className={cn({ task_checked: task.done })}>
                    {task.name}
                  </span>
                  <div className="tasks_btn">
                    <button
                      onClick={() =>
                        setHomework((prev) => {
                          const copiedAllJob = [...prev.job];
                          const copiedCurrentJob = currentJob!;

                          const arrIndex = copiedAllJob.findIndex((object) => {
                            return object.id === currentJob?.id;
                          });

                          const copiedCurrentJobWeeklyTask =
                            copiedCurrentJob?.Work.WeeklyWork!;

                          const copiedCurrentJobDailyTakes =
                            copiedCurrentJob.Work.DailyWork;

                          const updateCurrentJobWeeklyTask =
                            copiedCurrentJobWeeklyTask.map((object) => {
                              if (object.id === task.id) {
                                return { ...object, done: !task.done };
                              }
                              return object;
                            });

                          const updateCurrentJob = {
                            ...copiedCurrentJob,
                            Work: {
                              DailyWork: copiedCurrentJobDailyTakes,
                              WeeklyWork: updateCurrentJobWeeklyTask,
                            },
                          };

                          copiedAllJob.splice(arrIndex, 1);
                          copiedAllJob.splice(arrIndex, 0, updateCurrentJob);

                          return {
                            job: [...copiedAllJob],
                          };
                        })
                      }
                    >
                      ✔️
                    </button>
                    <button
                      onClick={() =>
                        setHomework((prev) => {
                          let confirmed = window.confirm(
                            "매주 할일을 지우게 됩니다. 진행 하시겠습니까?"
                          );
                          if (confirmed) {
                            const copiedAllJob = [...prev.job];
                            const copiedCurrentJob = currentJob!;

                            const arrIndex = copiedAllJob.findIndex(
                              (object) => {
                                return object.id === currentJob?.id;
                              }
                            );

                            const copiedCurrentJobWeeklyTask = [
                              ...copiedCurrentJob?.Work.WeeklyWork!,
                            ];

                            const copiedCurrentJobDailyTask =
                              copiedCurrentJob.Work.DailyWork;

                            const copiedCurrentJobWeeklyTaskIndex =
                              copiedCurrentJob.Work.WeeklyWork!.findIndex(
                                (object) => {
                                  return object.id === task.id;
                                }
                              );

                            copiedCurrentJobWeeklyTask.splice(
                              copiedCurrentJobWeeklyTaskIndex,
                              1
                            );

                            const updateCurrentJob = {
                              ...copiedCurrentJob,
                              Work: {
                                DailyWork: copiedCurrentJobDailyTask,
                                WeeklyWork: copiedCurrentJobWeeklyTask,
                              },
                            };

                            copiedAllJob.splice(arrIndex, 1);
                            copiedAllJob.splice(arrIndex, 0, updateCurrentJob);

                            return {
                              job: [...copiedAllJob],
                            };
                          }
                          return prev;
                        })
                      }
                    >
                      ❌
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

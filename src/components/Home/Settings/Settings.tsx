import "../../../styles/main/setting.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { DarkMode, Job } from "../../../Atoms/Atom";
import { useState } from "react";
import PasteCom from "./PasteCom";
import { AnimatePresence, motion } from "framer-motion";
import ClipBoard from "../../../Svgs/copy-icon.svg";
import cn from "classnames";

export default function Settings() {
  const darkMode = useRecoilValue(DarkMode);

  const [copiedData, setCopiedData] = useRecoilState(Job);

  const [openPaste, setOpenPaste] = useState(false);

  const [openClipBoard, setOpenClipBoard] = useState(false);

  const onClickHandel = () => {
    setOpenPaste((prevState) => !prevState);
  };

  return (
    <div className="setting">
      <div className="setting_list">
        <div className="setting_list_copy">
          <button
            className={cn(darkMode ? "dark_mode_task_btn" : "")}
            onClick={() => {
              setOpenClipBoard((prevState) => !prevState);
              setTimeout(() => {
                setOpenClipBoard((prevState) => !prevState);
              }, 2000);
              navigator.clipboard
                .writeText(JSON.stringify(copiedData))
                .then(() => {});
            }}
          >
            데이터 복사하기
          </button>
          <AnimatePresence>
            {openClipBoard ? (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{ opacity: 0, y: -50 }}
                className={cn(
                  "setting_list_copy_clipboard",
                  darkMode ? "dark_mode_clipboard_modal" : ""
                )}
              >
                <motion.img
                  initial={{}}
                  animate={{
                    rotateZ: [-40, 0, -40],
                  }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  src={ClipBoard}
                  alt="clipboard"
                />
                <span>클립보드에 복사가 완료 되었습니다.</span>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
        <div className="setting_list_paste">
          <button
            className={cn(darkMode ? "dark_mode_task_btn" : "")}
            onClick={onClickHandel}
          >
            데이터 붙여넣기
          </button>
          <AnimatePresence>
            {openPaste ? <PasteCom togglePasteCom={onClickHandel} /> : null}
          </AnimatePresence>
        </div>
        <div className="setting_list_reset">
          <button
            className={cn(darkMode ? "dark_mode_task_btn" : "")}
            onClick={() => {
              setCopiedData((prev) => {
                let confirmed = window.confirm(
                  "모든 데이터를 초기화 하게 됩니다. 확실하십니까?"
                );
                if (confirmed) {
                  return {
                    job: [],
                  };
                }
                return prev;
              });
            }}
          >
            데이터 초기화 하기
          </button>
        </div>
      </div>
    </div>
  );
}

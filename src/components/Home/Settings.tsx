import "../../styles/main/setting.css";
import { useRecoilState } from "recoil";
import { DarkMode } from "../../Atoms/Atom";

export default function Settings() {
  const [, setDarkMode] = useRecoilState(DarkMode);

  return (
    <div className="setting">
      <div>
        <button
          onClick={() => {
            setDarkMode((prev) => {
              return !prev;
            });
          }}
        >
          다크 모드 설정
        </button>
      </div>
    </div>
  );
}

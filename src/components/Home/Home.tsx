import "../../styles/main/main.css";
import moment from "moment";
import { useEffect, useState } from "react";

export default function Home() {
  const NowTime = moment().format("kk시 mm분 ss초");
  const [time, setTime] = useState(NowTime);
  useEffect(() => {
    const time = setInterval(() => {
      const Now = moment().format("kk시 mm분 ss초");
      setTime(Now);
    }, 1000);
    return () => clearInterval(time);
  }, []);
  return (
    <div className="home">
      <div className="time">
        <h1>{time}</h1>
      </div>
      <div className="link">
        <div className="page_link">
          <span>로스트아크 공식 홈페이지</span>
          <a href="https://lostark.game.onstove.com/Main" target="_blank">
            <img
              src="https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/icon/favicon-192.png?v=20220615072511"
              alt=""
              width="50"
            ></img>
          </a>
        </div>
        <div className="page_link">
          <span>로스트아크 공식 유튜브</span>
          <a
            href="https://www.youtube.com/channel/UCL3gnarNIeI_M0cFxjNYdAA"
            target="_blank"
          >
            <img
              src="https://www.youtube.com/s/desktop/a14aba22/img/favicon_144x144.png"
              alt=""
              width="50"
            ></img>
          </a>
        </div>
        <div className="page_link">
          <span>로스트아크 채널</span>
          <a href="https://arca.live/b/lostark" target="_blank">
            <img
              src="https://arca.live/static/apple-icon.png?t=8154b4ba9f304d19d44deeb43e1dc9ee9718bb6b"
              alt=""
              width="50"
            ></img>
          </a>
        </div>
      </div>
      <div className="credit"></div>
    </div>
  );
}

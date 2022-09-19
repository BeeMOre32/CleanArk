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
              src="https://w.namu.la/s/87546109836cfc54559026f859c2a818bd0024329f06afb1142a98660f01ffdb3ddd6ca5fddf3fea6c7b6f19c34f71d9bd630da0843a33056119c1f8289a8b0c3420e2c51e8713e6f55981b9a0d4feec3f452a85427afe814a332d6086ffef72"
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

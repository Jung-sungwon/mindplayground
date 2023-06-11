import React from "react";
import style from "../../../styles/sociopath.module.css";
import { useRouter } from "next/router";
import MindTest from "../../../components/MindTest";


function Sociopath() {
  const router = useRouter();
  const query = router.query.index;

  const intro = () => {
    if (query === "intro") {
      return (
        <div className={style.socio}>
          <h3>소시오패스 테스트</h3>
          <img
            src="/소시오패스.jpg"
            alt="소시오패스"
            className={style.socioImg}
          />
          <p>
            소시오패스 테스트에 오신것을 환영합니다.
            <br />
            <br />
            당신의 내면에 숨겨진 소시오패스 성향을 확인해보세요.
          </p>
          <button onClick={() => router.push("/test/Sociopath/start")}>
            시작하기
          </button>
        </div>
      );
    } else if (query === "start") {
      return (
        <div>
          <MindTest type="socio"/>
        </div>
      );
    }
  };

  return <div className={style.testBoard}>{intro()}</div>;
}

export default Sociopath;

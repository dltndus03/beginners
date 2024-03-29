/** 메인 js */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  // 기존에 영화목록 보여줬었는데, 이제는 router를 render할 것.
  // router란 URL을 보고있는 component임.
  return (
    <Router>
      {/** Switch가 하는 일 ? Route를 찾아서 컴포넌트를 랜더링. */}
      {/** Switch => 버전6부터 Routes로 바뀜 */}
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        {/** ':'를 빼놓지말고 꼭 써야함! 안그럼 단순 string으로 id가 출력됨 */}
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;

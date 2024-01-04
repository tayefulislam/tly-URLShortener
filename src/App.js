import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import UrlShortDone from "./Pages/UrlShortDone/UrlShortDone";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route
          path="/:shortUrlId"
          element={<UrlShortDone></UrlShortDone>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

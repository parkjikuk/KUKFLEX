import {BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Group from "./routes/Group";
import Nav from "./components/Nav";
import { RecoilRoot } from 'recoil';


function App() {
 return (
    <RecoilRoot>
      <Router basename={process.env.PUBLIC_URL}>
        <Nav />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={`/page/:group/:page`} element={<Group />} />
          <Route path={`/movie/:id`} element={<Detail />} />
        </Routes>
      </Router>
    </RecoilRoot>

 );
}

export default App;
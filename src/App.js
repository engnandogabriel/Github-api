import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import More from "./Pages/More/More";

import { GithubContext } from "./Context/GlobalContext";
import Users from "./Pages/Users/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GithubContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/" element={<Users />} />
            <Route path="/user/:name" element={<More />} />
          </Routes>
        </GithubContext>
      </BrowserRouter>
    </div>
  );
}

export default App;

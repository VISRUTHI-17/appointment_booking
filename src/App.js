import "./App.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Header from "./pages/Header";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/create' element={<CreateAccount />} />
        <Route path='/home' element={<Header />}>
          <Route path='/home/' element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

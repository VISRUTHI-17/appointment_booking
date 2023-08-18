import "./App.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/create' element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-200 h-screen ">
        <Routes>
          <Route Component={Login} path="/login" />
          <Route Component={Signup} path="/signUp" />
          <Route Component={Profile} path={`/profile/:userId`} />
          <Route Component={ResetPassword} path="/reset-password" />
          <Route Component={Update} path="/update/:userId" />
          <Route Component={Home} path="/" />
          <Route Component={NotFound} path="*" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

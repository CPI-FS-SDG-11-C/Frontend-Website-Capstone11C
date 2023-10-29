import { BrowserRouter, Routes, Route } from "react-router-dom";
import Places from "./components/Home/Places";
import Login from "./components/UserAccount/Login";
import Map from "./components/InteractiveMapView/Map";
import SignUp from "./components/UserAccount/Signup";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Places />} />
        <Route path="/home" element={<Places />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Places from "./components/Home/Places";
import Login from "./components/UserAccount/Login";
import Map from "./components/InteractiveMapView/Map";
// import SignUp from "./components/UserAccount/Signup";
import Profile from "./components/UserAccount/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Places />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
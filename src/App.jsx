import { BrowserRouter, Routes, Route } from "react-router-dom";
import Places from "./components/Home/Places";
import Login from "./components/UserAccount/Login";
import Profile from "./components/UserAccount/Profile";
import SignUp from "./components/UserAccount/Signup";
import ListOfArticles from "./components/ListOfArticles/ListOfArticles";
import ReadArticle from './components/ReadArticle/ReadArticle';
import Sidebar from "./components/Sidebar/Sidebar";
import "./index.css";

function App() {  
  return (
    <BrowserRouter>
      <div className="app-container">
        {location.pathname !== "/login" && location.pathname !== "/signup" && <Sidebar />}
        <Routes>
          <Route index element={<Places />} />
          <Route path="/home" element={<Places />} />
          <Route path="/articles" element={<ListOfArticles />} />
          <Route path="/read-article" element={<ReadArticle/>}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
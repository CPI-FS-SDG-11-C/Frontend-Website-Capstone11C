import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/UserAccount/Login";
import Profile from "./components/UserAccount/Profile";
import Edit from "./components/UserAccount/editProfile";
import ChangePassword from "./components/UserAccount/changePassword";
import SignUp from "./components/UserAccount/Signup";
import ListOfArticles from "./components/ListOfArticles/ListOfArticles";
import ReadArticle from "./components/ReadArticle/ReadArticle";
import Sidebar from "./components/Sidebar/Sidebar";
import "./index.css";
import MainView from "./components/Home/MainView";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route index element={<MainView />} />
          <Route
            index
            path="/home"
            element={<MainView />}
          />
          <Route
            path="/articles"
            element={
              <div>
                <Sidebar />
                <ListOfArticles />
              </div>
            }
          />
          <Route
            path="/read-article"
            element={
              <div>
                <Sidebar />
                <ReadArticle />
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div>
                <Sidebar />
                <Profile />
              </div>
            }
          />
          <Route
            path="/edit"
            element={
              <div>
                <Sidebar />
                <Edit />
              </div>
            }
          />
          <Route
            path="/changepassword"
            element={
              <div>
                <Sidebar />
                <ChangePassword />
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

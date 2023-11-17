import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
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
      <div
        style={{
          display: "grid",
          gridTemplateAreas: `"sidebar main"`,
          gridTemplateColumns: "5% 95%",
          backgroundColor: "main-background",
        }}
      >
        <div style={{ gridArea: "main" }}>
          <Routes>
            {/* <Route
              index
              element={
                <>
                  <ProtectedRoute component={Sidebar} />
                  <ProtectedRoute component={MainView} />
                </>
              }
            /> */}
            <Route
              index
              path="/home"
              element={
                <>
                  <ProtectedRoute component={Sidebar} />
                  <ProtectedRoute component={MainView} />
                </>
              }
            />
            <Route
              path="/articles"
              element={
                <>
                  {/* <Sidebar style={{ gridArea: "sidebar" }} /> */}
                  <ProtectedRoute component={Sidebar} />
                  <ProtectedRoute component={ListOfArticles} />
                </>
              }
            />
            <Route
              path="/read-article"
              element={
                <>
                  {/* <Sidebar style={{ gridArea: "sidebar" }} /> */}
                  <ProtectedRoute component={Sidebar} />
                  <ProtectedRoute component={ReadArticle} />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  {/* <Sidebar style={{ gridArea: "sidebar" }} /> */}
                  <ProtectedRoute component={Sidebar} />
                  <ProtectedRoute component={Profile} />
                </>
              }
            />
            <Route
              path="/edit"
              element={
                <>
                  {/* <Sidebar style={{ gridArea: "sidebar" }} /> */}
                  <ProtectedRoute component={Sidebar} />
                  <ProtectedRoute component={Edit} />
                </>
              }
            />
            <Route
              path="/changepassword"
              element={
                <>
                  {/* <Sidebar style={{ gridArea: "sidebar" }} /> */}
                  <ProtectedRoute component={Sidebar} />
                  <ProtectedRoute component={ChangePassword} />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

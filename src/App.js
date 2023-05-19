import { createTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Auth from "./authPage/Auth";
import NavigationBar from "./globalComponents/NavigationBar";
import HomePage from "./homePage/HomePage";
import ProfilePage from "./profilePage/ProfilePage";
import { themeSettings } from "./theme";
import ProtectedRoutes from "./ProtectedRoutes";
import { useEffect, useState } from "react";
import { getAllPosts, getUser } from "./apiCalls";
import { authAction } from "./store/authSlice";
import { postAction } from "./store/postsSlice";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //getting the color mode
  const mode = useSelector((state) => {
    return state.mode.mode;
  });

  //console.log(mode);
  //creating theme with the updated mode, need to put in the ThemeProvider element
  const theme = createTheme(themeSettings(mode));

  const userApi = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    //console.log(user, "from local");
    dispatch(authAction.setLogin(true));
    if (user) {
      const data = await getUser(user);
      const dataPosts = await getAllPosts();
      console.log(dataPosts.posts, "from local");
      dispatch(authAction.setUser(data.user));
      dispatch(postAction.setPosts(dataPosts.posts));
      //navigate("/home");
    }
  };
  //userApi();
  useEffect(() => {
    userApi();
  });
  userApi();
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        {/* {"CssBaseline is doing restart of css when render"} */}
        <CssBaseline />
        <NavigationBar />
        <Routes>
          <Route path="/auth/login" element={<Auth />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Route>
          <Route path="/auth/signup" element={<Auth />} />

          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;

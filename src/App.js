import { createTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./authPage/Auth";
import NavigationBar from "./globalComponents/NavigationBar";
import HomePage from "./homePage/HomePage";
import ProfilePage from "./profilePage/ProfilePage";
import { themeSettings } from "./theme";
import ProtectedRoutes from "./ProtectedRoutes";
import { useEffect, useState } from "react";
import { getUser } from "./apiCalls";
import { authAction } from "./store/authSlice";

function App() {
  const [u, setU] = useState(null);
  const dispatch = useDispatch();
  //getting the color mode
  const mode = useSelector((state) => {
    return state.mode.mode;
  });
  const userSelect = useSelector((state) => {
    return state.auth.user;
  });
  //console.log(mode);
  //creating theme with the updated mode, need to put in the ThemeProvider element
  const theme = createTheme(themeSettings(mode));
  let user;
  const userApi = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const data = await getUser();
      dispatch(authAction.setUser(data.user));
      user = data.user;
      setU(user);
    }
  };
  useEffect(() => {
    // let user = JSON.parse(localStorage.getItem("user"));
    const f = async () => {
      await userApi();
    };
    f();
  }, []);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        {/* {"CssBaseline is doing restart of css when render"} */}
        <CssBaseline />
        <NavigationBar />
        <Routes>
          <Route path="/auth/login" element={<Auth />} />
          <Route element={<ProtectedRoutes user={user} u={u} />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Route>
          <Route path="/auth/signup" element={<Auth />} />

          <Route path="/" element={<Navigate to="/auth/login" />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;

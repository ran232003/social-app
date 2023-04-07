import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./authPage/Auth";
import NavigationBar from "./globalComponents/NavigationBar";
import HomePage from "./homePage/HomePage";
import ProfilePage from "./profilePage/ProfilePage";
import { themeSettings } from "./theme";

function App() {
  //getting the color mode
  const mode = useSelector((state) => {
    return state.mode.mode;
  });
  //console.log(mode);
  //creating theme with the updated mode, need to put in the ThemeProvider element
  const theme = createTheme(themeSettings(mode));
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        {/* {"CssBaseline is doing restart of css when render"} */}
        <CssBaseline />
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;

import "./App.css";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Body from "./components/Body";
import appStore from "./utils/Redux-Store/appStore";
import Browse from "./components/Browse";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Body />
      </Router>
    </Provider>
  );
}

export default App;

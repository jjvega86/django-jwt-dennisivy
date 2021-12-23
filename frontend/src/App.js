import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import PrivatePage from "./pages/PrivatePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/private"
          element={
            <PrivateRoute>
              <PrivatePage user="JJ Vega" />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

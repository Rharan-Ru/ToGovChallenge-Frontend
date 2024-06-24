import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import ToDo from "./pages/ToDo";
import LoginPage from "./pages/Login";
import AppLayout from "./components/Navigation/NavigationMenu";

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <AppLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;

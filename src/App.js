import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";

function App() {
    return (
        <Router>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/user/:userId" element={<User />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

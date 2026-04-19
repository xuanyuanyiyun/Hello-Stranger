import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import Match from "@/pages/Match";
import Chat from "@/pages/Chat";
import Profile from "@/pages/Profile";
import Community from "@/pages/Community";
import Game from "@/pages/Game";
import Local from "@/pages/Local";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Settings from "@/pages/Settings";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/match" element={<Match />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/community" element={<Community />} />
            <Route path="/game" element={<Game />} />
            <Route path="/local" element={<Local />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <BottomBar />
      </div>
    </Router>
  );
}

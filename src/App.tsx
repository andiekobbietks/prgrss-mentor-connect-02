
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import AppLayout from "./components/AppLayout";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CallHistory from "./pages/CallHistory";
import Chat from "./pages/Chat";
import Settings from "./pages/Settings";

// Styles
import "./App.css";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-black");
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="call-history" element={<CallHistory />} />
          <Route path="chat" element={<Chat />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

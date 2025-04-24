
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TourProvider } from "./contexts/TourContext";

// Layouts
import AppLayout from "./components/AppLayout";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CallHistory from "./pages/CallHistory";
import Chat from "./pages/Chat";
import Settings from "./pages/Settings";
import Index from "./pages/Index";

// Styles
import "./App.css";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-black");
  }, []);

  return (
    <TourProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Index />} />
            <Route path="home" element={<Home />} />
            <Route path="call-history" element={<CallHistory />} />
            <Route path="chat" element={<Chat />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </TourProvider>
  );
}

export default App;

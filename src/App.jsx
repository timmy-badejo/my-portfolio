import { useCallback, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";
import LoadingScreen from "./components/LoadingScreen";
import ThemeToggle from "./components/ThemeToggle";

import LandingPage from "./pages/LandingPage";
import WorkPage from "./pages/WorkPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import BcrpaPage from "./pages/BcrpaPage";
import StudioSystemPage from "./pages/StudioSystemPage";

import "./App.css";

function App() {
  const [isAppReady, setIsAppReady] = useState(false);
  const handleLoadingComplete = useCallback(() => {
    setIsAppReady(true);
  }, []);

  return (
    <BrowserRouter>
      {!isAppReady && <LoadingScreen onComplete={handleLoadingComplete} />}
      <ThemeToggle />

      {isAppReady && (
        <>
          <ScrollToHash />

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/bcrpa" element={<BcrpaPage />} />
            <Route path="/studio-system" element={<StudioSystemPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;

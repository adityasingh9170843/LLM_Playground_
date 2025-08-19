
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import PromptWithResults from "./components/promptInput"
import Settings from "./components/Settings"
import LandingPage from "./components/LandingPage";
function App() {
  return (
    <Router>
      
      
        
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/prompt" element={<PromptWithResults />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        
      
    </Router>
  );
}

export default App

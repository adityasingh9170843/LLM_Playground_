
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import PromptWithResults from "./components/promptInput"
import Settings from "./components/Settings"
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Navbar */}
        <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-700">Multi-LLM Playground</h1>
          <div className="space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/settings"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              Settings
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<PromptWithResults />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App

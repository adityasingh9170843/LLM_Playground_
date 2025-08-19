
import React, { useState } from "react";
import { fetchGeminiAi,fetchGroqAi } from "../utils/api";

const PromptWithResults = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResults([]);

    
    const geminiKey = localStorage.getItem("geminiKey");
    const groqKey = localStorage.getItem("groqKey");
    const responses = await Promise.all([

      fetchGeminiAi(prompt, geminiKey),
      fetchGroqAi(prompt, groqKey),
    ]);

    setResults([
     
      { model: "Google Gemini", text: responses[0] },
      { model: "Groq", text: responses[1] },
    ]);

    setLoading(false);
  };

  return (
    <div className="p-6 space-y-6">
     
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt..."
          className="flex-grow border rounded-lg px-3 py-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          {loading ? "Loading..." : "Send"}
        </button>
      </form>

   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {results.map((res, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-4 bg-gray-50 shadow-sm"
          >
            <h3 className="font-semibold mb-2">{res.model}</h3>
            <p className="whitespace-pre-wrap text-sm">{res.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromptWithResults;

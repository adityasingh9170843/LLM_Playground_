import React, { useState } from "react";
import { fetchGeminiAi, fetchGroqAi } from "../utils/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white relative">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto p-6 space-y-6">
        {/* Prompt input */}
        <form
          onSubmit={handleSubmit}
          className="flex space-x-2 items-center"
        >
          <Input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask the LLMs something..."
            className="flex-grow bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
          />
          <Button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {loading ? "Loading..." : "Send"}
          </Button>
        </form>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((res, idx) => (
            <Card
              key={idx}
              className="bg-gray-900 border border-gray-700 shadow-lg hover:shadow-xl transition-all"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-blue-400">
                  {res.model}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap text-sm text-gray-300">
                  {res.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromptWithResults;

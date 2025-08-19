import { useState } from "react";
import { fetchGeminiAi, fetchGroqAi } from "../utils/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Settings, Sparkles, Zap, Send, Brain } from "lucide-react";
import { Link } from "react-router-dom";
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
      { model: "Google Gemini", text: responses[0], icon: Sparkles },
      { model: "Groq", text: responses[1], icon: Zap },
    ]);

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse [animation-delay:0s] [animation-duration:3s]" />
      <div className="absolute top-40 right-32 w-56 h-56 bg-cyan-400/15 rounded-full blur-3xl animate-pulse [animation-delay:1s] [animation-duration:4s]" />
      <div className="absolute bottom-32 left-1/3 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl animate-pulse [animation-delay:2s] [animation-duration:3.5s]" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-teal-400/15 rounded-full blur-3xl animate-pulse [animation-delay:3s] [animation-duration:4.5s]" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse [animation-delay:1.5s] [animation-duration:5s] transform -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto p-6 space-y-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <Brain className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-white">LLM Playground</h1>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-blue-500/40 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400/60 bg-slate-800/50 backdrop-blur-sm"
          >
            <Settings className="w-4 h-4 mr-2" />
            <Link to="/settings">Settings</Link>
          </Button>
        </div>

        {/* Prompt input */}
        <form onSubmit={handleSubmit} className="flex space-x-3 items-center">
          <Input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask the LLMs something..."
            className="flex-grow bg-slate-800/60 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 backdrop-blur-sm h-12 text-base"
          />
          <Button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-lg shadow-blue-600/25 h-12 px-6"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Loading...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send
              </>
            )}
          </Button>
        </form>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((res, idx) => {
            const IconComponent = res.icon;
            return (
              <Card
                key={idx}
                className="bg-slate-800/40 border border-blue-500/20 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all backdrop-blur-sm hover:border-blue-400/40"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-white flex items-center space-x-2">
                    <IconComponent className="w-5 h-5 text-blue-400" />
                    <span>{res.model}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap text-sm text-slate-200 leading-relaxed">
                    {res.text}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PromptWithResults;

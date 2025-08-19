import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function Settings() {
  const [gemini, setGemini] = useState(localStorage.getItem("geminiKey") || "");
  const [groq, setGroq] = useState(localStorage.getItem("groqKey") || "");

  const saveKeys = () => {
    localStorage.setItem("geminiKey", gemini);
    localStorage.setItem("groqKey", groq);
  };

  return (
    <Card className="bg-gray-900 border border-gray-700 shadow-lg text-white">
      <CardHeader>
        <CardTitle className="text-blue-400">⚙️ API Keys</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="text"
          placeholder="Groq API Key"
          value={groq}
          onChange={(e) => setGroq(e.target.value)}
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
        />
        <Input
          type="text"
          placeholder="Gemini API Key"
          value={gemini}
          onChange={(e) => setGemini(e.target.value)}
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
        />
        <Button
          onClick={saveKeys}
          className="bg-green-600 hover:bg-green-700 text-white w-full"
        >
          Save Keys
        </Button>
      </CardContent>
    </Card>
  );
}

export default Settings;

import { useState } from "react";

function Settings() {
  const [gemini, setGemini] = useState(localStorage.getItem("geminiKey"));
  const [groq, setGroq] = useState(localStorage.getItem("groqKey"));

  const saveKeys = () => {
    localStorage.setItem("geminiKey", gemini);
    localStorage.setItem("groqKey", groq);
  };

  return (
    <div className="p-4 border rounded shadow bg-gray-100">
      <h2 className="font-bold mb-2">⚙️ API Keys</h2>
      <input
        type="text"
        placeholder="Groq Key"
        value={groq}
        onChange={(e) => setGroq(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <input
        type="text"
        placeholder="Gemini API Key"
        value={gemini}
        onChange={(e) => setGemini(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <button
        onClick={saveKeys}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Save
      </button>
    </div>
  );
}

export default Settings;

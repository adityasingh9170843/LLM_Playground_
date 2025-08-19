import axios from "axios";

export async function fetchGeminiAi(prompt, apiKey) {
  if (!apiKey) {
    console.error("No API key provided");
    return;
  }

  try {
    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      }
    );

    return res.data.candidates[0]?.content?.parts[0]?.text || "No response";
  } catch (e) {
    console.error("Gemini API Error:", e.response?.data || e.message);
  }
}

export async function fetchGroqAi(prompt, apiKey) { 
  if (!apiKey) throw new Error("Groq API key not found in localStorage");

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "openai/gpt-oss-20b",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Groq API Error:", error.response?.data || error.message);
    throw new Error("Failed to fetch from Groq API");
  }
}



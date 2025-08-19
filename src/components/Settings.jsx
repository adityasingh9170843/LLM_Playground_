"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { SettingsIcon, Key, Save } from "lucide-react"

function Settings() {
  const [gemini, setGemini] = useState(localStorage.getItem("geminiKey") || "")
  const [groq, setGroq] = useState(localStorage.getItem("groqKey") || "")
  const[deepseek, setDeepseek] = useState(localStorage.getItem("deepseekKey") || "")
  const[meta, setMeta] = useState(localStorage.getItem("metaKey") || "")
  const [isSaving, setIsSaving] = useState(false)

  const saveKeys = async () => {
    setIsSaving(true)
    localStorage.setItem("geminiKey", gemini)
    localStorage.setItem("groqKey", groq)
    localStorage.setItem("deepseekKey", deepseek)
    localStorage.setItem("metaKey", meta)

    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
  }

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s" }}
        ></div>
      </div>

      <Card className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl text-white relative z-10 w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-cyan-400 flex items-center justify-center gap-2 text-xl">
            <SettingsIcon className="w-6 h-6" />
            API Keys Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-slate-200 text-sm font-medium flex items-center gap-2">
              <Key className="w-4 h-4" />
              Groq API Key
            </label>
            <Input
              type="password"
              placeholder="Enter your Groq API key..."
              value={groq}
              onChange={(e) => setGroq(e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-slate-200 text-sm font-medium flex items-center gap-2">
              <Key className="w-4 h-4" />
              Gemini API Key
            </label>
            <Input
              type="password"
              placeholder="Enter your Gemini API key..."
              value={gemini}
              onChange={(e) => setGemini(e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20"
            />
          </div>

           <div className="space-y-2">
            <label className="text-slate-200 text-sm font-medium flex items-center gap-2">
              <Key className="w-4 h-4" />
              Deepseek API Key
            </label>
            <Input
              type="password"
              placeholder="Enter your Gemini API key..."
              value={deepseek}
              onChange={(e) => setDeepseek(e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-slate-200 text-sm font-medium flex items-center gap-2">
              <Key className="w-4 h-4" />
              Meta API Key
            </label>
            <Input
              type="password"
              placeholder="Enter your Gemini API key..."
              value={meta}
              onChange={(e) => setMeta(e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20"
            />
          </div>

          <Button
            onClick={saveKeys}
            disabled={isSaving}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white w-full flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSaving ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Saving Keys...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Save API Keys
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Settings

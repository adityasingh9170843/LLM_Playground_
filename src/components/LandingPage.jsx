import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Zap, Key, GitCompare, Brain } from "lucide-react"
import { Link } from "react-router-dom"
export default function LandingPage() {
  return (
    <div className="dark min-h-screen bg-slate-900 text-white">
      <div className="fixed top-6 left-6 z-50">
        <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 hover:bg-card/90 transition-colors">
          <Brain className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-white">LLM Playground</span>
        </div>
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent/30 rounded-full blur-xl animate-pulse [animation-delay:1s]"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-secondary/15 rounded-full blur-xl animate-pulse [animation-delay:2s]"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-primary/25 rounded-full blur-xl animate-pulse [animation-delay:0.5s]"></div>
      </div>

      <div className="relative z-10">
        <header className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Compare Multiple LLMs
            <br />
            Side by Side
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Test and compare responses from different language models in real-time. Bring your own API keys and discover
            which LLM works best for your needs.
          </p>
          <Button size="lg" className="group" asChild>
            <Link to="/prompt">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </header>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors">
              <CardHeader>
                <GitCompare className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-white">Side-by-Side Comparison</CardTitle>
                <CardDescription className="text-white/70">
                  Compare responses from multiple LLMs simultaneously to find the best model for your use case.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors">
              <CardHeader>
                <Key className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-white">Bring Your Own Keys</CardTitle>
                <CardDescription className="text-white/70">
                  Use your own API keys for complete control and privacy. No data stored on our servers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-white">Real-Time Testing</CardTitle>
                <CardDescription className="text-white/70">
                  Get instant responses and compare performance, quality, and style across different models.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">See It In Action</h2>
            <p className="text-white/70 mb-6">
              Experience the power of comparing multiple LLMs with a simple, intuitive interface.
            </p>
            <Button size="lg" className="group" asChild>
              <Link to="/prompt">
                Try the Playground
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-6">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="flex-1 bg-input rounded-lg px-4 py-3 text-white/60">Type your prompt here...</div>
                  <Button>Send</Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-muted/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm text-primary">Google Gemini</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-white/60">Response from Gemini will appear here...</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm text-primary">Groq</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-white/60">Response from Groq will appear here...</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <footer className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to Compare LLMs?</h2>
          <p className="text-white/70 mb-8">Start testing different language models with your own API keys today.</p>
          <Button size="lg" variant="outline" className="group bg-transparent" asChild>
            <Link to="/playground">
              Launch Playground
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </footer>
      </div>
    </div>
  )
}

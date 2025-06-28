
import { Switch, Route, Link } from "wouter";
import Homepage from "./pages/homepage";
import ExamplePage from "./pages/example-page";  
import NotFound from "./pages/not-found";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/">
            <h1 className="text-2xl font-bold text-blue-600">Python by Example</h1>
          </Link>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Switch>
          <Route path="/" component={Homepage} />
          <Route path="/example/:slug" component={ExamplePage} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
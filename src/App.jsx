import Container from "./components/layout/Container";
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Container>
        <h1 className="text-4xl font-bold py-10">Cafe Grind ☕</h1>
        <p className="text-stone-600">Fresh coffee, calm vibes.</p>
      </Container>
    </div>
  );
}

export default App;

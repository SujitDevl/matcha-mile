import Container from "./components/layout/Container";
import React from "react";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      <main>
        <Container>
          <h1 className="text-4xl font-bold py-20">Welcome to Cafe Grind ☕</h1>
        </Container>
      </main>
    </div>
  );
}

export default App;

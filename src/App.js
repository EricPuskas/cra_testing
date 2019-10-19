import React from "react";
import Header from "./components/Header/Header";
import Headline from "./components/Headline/Headline";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" description="Click button to render posts." />
      </section>
    </div>
  );
}

export default App;

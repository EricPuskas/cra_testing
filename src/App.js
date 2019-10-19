import React from "react";
import Header from "./components/Header/Header";
import Headline from "./components/Headline/Headline";
import "./App.scss";

const tempArr = [
  {
    firstName: "Joe",
    lastName: "Bloggs",
    email: "jbloggs@gmail.com",
    age: 34,
    onlineStatus: true
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          description="Click button to render posts."
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;

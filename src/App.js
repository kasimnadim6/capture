import React from "react";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
//global style
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;

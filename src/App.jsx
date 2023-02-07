import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import {
  Header,
  Content,
  Footer,
  NavigationBar,
  Login,
} from "./components/Main/Index";

function App() {
  // set card height equal
  const setCardHeight= () => {
    const rs = document.querySelectorAll(".row-section");
    rs.forEach((r) => {
      const cards = r.querySelectorAll(".collapse .card");
      const cardHeight = Math.max(
        ...Array.from(cards).map((c) => c.clientHeight)
      );
     
      cards.forEach((c) => {
        c.style.height = `${cardHeight}px`;
        c.style.maxHeight = "500px";
      });
    });
  }
  const [message, setMessage] = useState(1); // useState for Count
  function getResponse(msg) {
    setMessage(msg);
  }
    useEffect(() => {
      setCardHeight();
    }, []);
  return (
    <div className="App">
      {!message ? (
        <Login getResponse={getResponse} />
      ) : (
        <div className="main-content">
          <Header />
          <NavigationBar />
          <Content />
          <Footer />
        </div>
      )}
    </div>
  );

}
export default App;

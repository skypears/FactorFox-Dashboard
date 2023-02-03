import { useState } from "react";
import "./App.scss";
import {
  Header,
  Content,
  Footer,
  NavigationBar,
  Login,
} from "./components/Main";

// Main App Function Declaration
function App() {
  const [message, setMessage] = useState(0); // useState for Count
  function getResponse(msg) {
    setMessage(msg);
  }
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

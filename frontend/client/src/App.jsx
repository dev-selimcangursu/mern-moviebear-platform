import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import '@splidejs/react-splide/css';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;

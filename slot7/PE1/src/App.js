import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Director from "./components/Director";
import Star from "./components/Star";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/director" element={<Director />}></Route>
          <Route path="/star" element={<Star />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
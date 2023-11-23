import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* The page for not found url path */}
          <Route
            path="*"
            element={
              <h1 className="d-flex flex-row justify-content-center align-items-center vh-100">
                404 Page Not Found
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

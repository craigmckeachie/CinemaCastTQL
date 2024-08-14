import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import NavPanel from "./NavPanel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./IndexPage";
import VendorsPage from "./vendors/VendorsPage";

function App() {
  return (
    <BrowserRouter>
      <>
        <div>
          <Header />
          <main className="d-flex">
            <NavPanel />
            <section className="content container-fluid mx-5 my-2 py-4">
              <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/vendors" element={<VendorsPage />} />
              </Routes>
            </section>
          </main>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;

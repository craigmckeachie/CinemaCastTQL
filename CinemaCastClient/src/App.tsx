import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Header";
import NavPanel from "./NavPanel";

function App() {
  return (
    <>
      <div>
        <Header />
        <main className="d-flex">
          <NavPanel />
          <section className="content container-fluid mx-5 my-2 py-4">
            <header className="d-flex justify-content-between pb-4 mb-4 border-bottom border-2">
              <h2>Purchase Request System</h2>
              <a href="vendor-create.html" className="btn btn-primary">
                <svg
                  className="bi pe-none me-2"
                  width={32}
                  height={32}
                  fill="#FFFFFF"
                >
                  <use xlinkHref="./images/bootstrap-icons.svg#plus" />
                </svg>
                Create a vendor
              </a>
            </header>

            <section className="d-flex bg-light gap-5 p-4 rounded-4"></section>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

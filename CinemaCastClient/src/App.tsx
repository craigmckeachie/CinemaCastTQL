import "bootstrap/dist/css/bootstrap.min.css";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <header>
          <div className="navbar bg-body-tertiary py-4 border-bottom">
            <div className="container-fluid">
              <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
              >
                <svg
                  id="logo-35"
                  width={50}
                  height={39}
                  viewBox="0 0 50 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                    className="ccompli1"
                    fill="#007AFF"
                  />
                  <path
                    d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                    className="ccustom"
                    fill="#312ECB"
                  />
                </svg>
                <span className="small mx-2 fw-semibold">
                  Purchase Request System
                </span>
              </a>
              <div className="dropdown me-4">
                <a
                  href="#"
                  className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="./images/users/image-34.png"
                    alt
                    width={32}
                    height={32}
                    className="rounded-circle me-2"
                  />
                  <strong>James Roday</strong>
                </a>
                <ul className="dropdown-menu text-small shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a href="signin.html" className="dropdown-item">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <main className="d-flex">
          <nav
            className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary border-end min-vh-100 position-sticky"
            style={{ width: 280 }}
          >
            <a href className="mb-4 text-decoration-none fw-bolder">
              <svg
                className="bi pe-none me-2"
                width={16}
                height={16}
                fill="#007AFF"
              >
                <use xlinkHref={`${bootstrapIcons}#plus-circle-fill`} />
              </svg>
              Create new
            </a>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="text-secondary fw-bold mb-2">Purchase</li>
              <li>
                <a href="requests.html" className="nav-link">
                  <svg
                    className="bi pe-none me-2"
                    width={16}
                    height={16}
                    fill="#007AFF"
                  >
                    <use xlinkHref={`${bootstrapIcons}#cart`} />
                  </svg>
                  Requests
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-body-emphasis">
                  <svg
                    className="bi pe-none me-2"
                    width={16}
                    height={16}
                    fill="#007AFF"
                  >
                    <use xlinkHref="./images/bootstrap-icons.svg#grid" />
                  </svg>
                  Products
                </a>
              </li>
              <li>
                <a href="vendors.html" className="nav-link active">
                  <svg
                    className="bi pe-none me-2"
                    width={16}
                    height={16}
                    fill="#FFFFFF"
                  >
                    <use xlinkHref="./images/bootstrap-icons.svg#building" />
                  </svg>
                  Vendors
                </a>
              </li>
              <li>
                <a href="users.html" className="nav-link link-body-emphasis">
                  <svg
                    className="bi pe-none me-2"
                    width={16}
                    height={16}
                    fill="#007AFF"
                  >
                    <use xlinkHref="./images/bootstrap-icons.svg#people" />
                  </svg>
                  Users
                </a>
              </li>
            </ul>
          </nav>
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

            <section className="d-flex bg-light gap-5 p-4 rounded-4">
                
            </section>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

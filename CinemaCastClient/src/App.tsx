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
            <div className="d-flex justify-content-between pb-4 mb-4 border-bottom border-2">
              <h2>Vendors</h2>
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
            </div>
            <section className="list d-flex flex-row flex-wrap bg-light gap-5 p-4 rounded-4">
              <div className="card w-25">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <address className="py-4 px-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      {" "}
                      <strong>Amazon</strong>{" "}
                      <span className="badge text-bg-secondary">AMAZ</span>{" "}
                    </span>
                    <div className="dropdown d-inline">
                      <button
                        className="btn btn-light"
                        style={{ background: "none" }}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          className="bi pe-none me-2"
                          width={20}
                          height={20}
                          fill="#007AFF"
                        >
                          <use xlinkHref="./images/bootstrap-icons.svg#three-dots-vertical" />
                        </svg>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="vendor-edit.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onclick="confirm('Are you sure you want to delete this vendor?')"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  123 Amazon Way
                  <br />
                  Seattle, WA 83474
                  <br />
                  {/* <abbr title="Phone">P:</abbr> */}
                  (800) 454-7890
                  <br />
                  primebusiness@amazon.com
                </address>
              </div>
              <div className="card w-25">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <address className="py-4 px-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      <strong>TechSolutions Inc.</strong>{" "}
                      <span className="badge text-bg-secondary">TS Inc.</span>
                    </span>
                    <div className="dropdown d-inline">
                      <button
                        className="btn btn-light"
                        style={{ background: "none" }}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          className="bi pe-none me-2"
                          width={20}
                          height={20}
                          fill="#007AFF"
                        >
                          <use xlinkHref="./images/bootstrap-icons.svg#three-dots-vertical" />
                        </svg>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="vendor-edit.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onclick="confirm('Are you sure you want to delete this vendor?')"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  123 Main Street <br />
                  Anytown, USA <br />
                  (555) 123-4567 <br />
                  purchasing@techsolutions.com
                </address>
              </div>
              <div className="card w-25">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <address className="py-4 px-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      <strong>Global Trade Enterprises</strong>{" "}
                      <span className="badge text-bg-secondary">GTE</span>
                    </span>
                    <div className="dropdown d-inline">
                      <button
                        className="btn btn-light"
                        style={{ background: "none" }}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          className="bi pe-none me-2"
                          width={20}
                          height={20}
                          fill="#007AFF"
                        >
                          <use xlinkHref="./images/bootstrap-icons.svg#three-dots-vertical" />
                        </svg>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="vendor-edit.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onclick="confirm('Are you sure you want to delete this vendor?')"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  456 Oak Avenue <br />
                  Metro City, Canada <br />
                  (555) 987-6543 <br />
                  procurement@globaltradeent.com
                </address>
              </div>
              <div className="card w-25">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <address className="py-4 px-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      <strong>Precision Manufacturing Group</strong>{" "}
                      <span className="badge text-bg-secondary">PMG</span>
                    </span>
                    <div className="dropdown d-inline">
                      <button
                        className="btn btn-light"
                        style={{ background: "none" }}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          className="bi pe-none me-2"
                          width={20}
                          height={20}
                          fill="#007AFF"
                        >
                          <use xlinkHref="./images/bootstrap-icons.svg#three-dots-vertical" />
                        </svg>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="vendor-edit.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onclick="confirm('Are you sure you want to delete this vendor?')"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  789 Elm Street <br />
                  Industrial Zone, Europe <br />
                  +44 1234 567890 <br />
                  purchasing@precisionmfggrp.com
                </address>
              </div>
              <div className="card w-25">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <address className="py-4 px-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      <strong>EcoFarms Co.</strong>{" "}
                      <span className="badge text-bg-secondary">EFC</span>
                    </span>
                    <div className="dropdown d-inline">
                      <button
                        className="btn btn-light"
                        style={{ background: "none" }}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          className="bi pe-none me-2"
                          width={20}
                          height={20}
                          fill="#007AFF"
                        >
                          <use xlinkHref="./images/bootstrap-icons.svg#three-dots-vertical" />
                        </svg>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="vendor-edit.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onclick="confirm('Are you sure you want to delete this vendor?')"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  321 Green Way <br />
                  Agro Valley, Australia <br />
                  +61 1234 5678 <br />
                  procurement@ecofarmsco.com
                </address>
              </div>
              <div className="card w-25">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <address className="py-4 px-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      <strong>HealthCare Solutions Ltd.</strong>
                      <span className="badge text-bg-secondary">HCS Ltd.</span>
                    </span>
                    <div className="dropdown d-inline">
                      <button
                        className="btn btn-light"
                        style={{ background: "none" }}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          className="bi pe-none me-2"
                          width={20}
                          height={20}
                          fill="#007AFF"
                        >
                          <use xlinkHref="./images/bootstrap-icons.svg#three-dots-vertical" />
                        </svg>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="vendor-edit.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onclick="confirm('Are you sure you want to delete this vendor?')"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  888 Wellness Lane <br />
                  Medical District, Europe <br />
                  +44 9876 543210 <br />
                  purchasing@healthcaresolutions.com
                </address>
              </div>
              <div className="card w-25">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <address className="py-4 px-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      <strong>GlobalEnergy Innovations</strong>{" "}
                      <span className="badge text-bg-secondary">GEI</span>
                    </span>
                    <div className="dropdown d-inline">
                      <button
                        className="btn btn-light"
                        style={{ background: "none" }}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          className="bi pe-none me-2"
                          width={20}
                          height={20}
                          fill="#007AFF"
                        >
                          <use xlinkHref="./images/bootstrap-icons.svg#three-dots-vertical" />
                        </svg>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="vendor-edit.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onclick="confirm('Are you sure you want to delete this vendor?')"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  999 Power Avenue <br />
                  Energy Hub, South America <br />
                  +55 1234 5678 <br />
                  procurement@globalenergyinnov.com
                </address>
              </div>
              <div className="card w-25">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <address className="py-4 px-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      <strong>FoodWorks Ltd.</strong>{" "}
                      <span className="badge text-bg-secondary">FW Ltd.</span>
                    </span>
                    <div className="dropdown d-inline">
                      <button
                        className="btn btn-light"
                        style={{ background: "none" }}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          className="bi pe-none me-2"
                          width={20}
                          height={20}
                          fill="#007AFF"
                        >
                          <use xlinkHref="./images/bootstrap-icons.svg#three-dots-vertical" />
                        </svg>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="vendor-edit.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onclick="confirm('Are you sure you want to delete this vendor?')"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  101 Grocery Street <br />
                  Food District, Africa <br />
                  +27 1234 5678 <br />
                  purchasing@foodworks.com
                </address>
              </div>
              <div className="card w-25">
                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <address className="py-4 px-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      <strong>Apex Construction Supplies</strong>{" "}
                      <span className="badge text-bg-secondary">ACS</span>
                    </span>
                    <div className="dropdown d-inline">
                      <button
                        className="btn btn-light"
                        style={{ background: "none" }}
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          className="bi pe-none me-2"
                          width={20}
                          height={20}
                          fill="#007AFF"
                        >
                          <use xlinkHref="./images/bootstrap-icons.svg#three-dots-vertical" />
                        </svg>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            href="vendor-edit.html"
                            className="dropdown-item"
                            type="button"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onclick="confirm('Are you sure you want to delete this vendor?')"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <br />
                  111 Builders Boulevard <br />
                  Construction Zone, North America <br />
                  +1 (555) 765-4321 <br />
                  procurement@apexconstructionsupplies.com&lt;
                </address>
              </div>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

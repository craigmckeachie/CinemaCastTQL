import { Link } from "react-router-dom";

function VendorsPage() {
  return (
    <>
      <header className="d-flex justify-content-between pb-4 mb-4 border-bottom border-2">
        <h2>Vendors</h2>
        <Link to="/vendors/create" className="btn btn-primary">
          Add Vendor
        </Link>
      </header>

      <section className="d-flex bg-light gap-5 p-4 rounded-4">Test</section>
    </>
  );
}

export default VendorsPage;

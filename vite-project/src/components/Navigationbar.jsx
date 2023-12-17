import React from 'react'

function Navigationbar() {
  return (
    <>
    <nav className="navbar navbar-light bg-body-secondary sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand ms-3" href="#">
      {/* <img
        src="./images/Zehnab fashify logo.png"
        alt=""
        width={40}
        height={34}
        className="d-inline-block align-text-top "
      /> */}
      <b className="align-text-top h3 text-white me-3"> ZenHab Fashify</b>
    </a>
    <nav className="navbar navbar-expand-lg me-auto">
      <div className="container-fluid ">
        <button
          className="navbar-toggler ms-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-arrows-move"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8"
              />
            </svg>{" "}
            MENU
          </span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item mx-3">
              <a
                className="nav-link active"
                id="certificate"
                aria-current="page"
                href="./index.html"
              >
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                className="nav-link active text-black"
                aria-current="page"
                href="./aboutus.html"
              >
                About Us
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                className="nav-link active text-black"
                aria-current="page"
                href="./ourproduct.html"
              >
                Our Products
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                className="nav-link active text-black"
                aria-current="page"
                href="./sustainability.html"
              >
                Sustainability
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                className="nav-link active text-black"
                aria-current="page"
                href="./certfication.html"
              >
                Certification
              </a>
            </li>
            <li className="nav-item mx-3">
              <a
                className="nav-link active text-black"
                aria-current="page"
                href="./contact.html"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</nav>

    </>
  )
}

export default Navigationbar;

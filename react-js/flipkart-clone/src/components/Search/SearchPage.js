import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getProducts } from "../../redux/ProductSlice";

function SearchPage() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { productList } = useSelector((state) => state.products);
  const [searchParams] = useSearchParams();
  let [id] = useState(searchParams.get("id"));
  let [name] = useState(searchParams.get("name"));

  useEffect(() => {
    if (id === null) window.location.replace("/");
    else dispatch(getProducts(id));
  }, []);
  return (
    <>
      {id ? (
        <>
          <div className="container-fluid bg_blue fixed-top">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#">
                  <img src="/img/flipkartlogo.png" width="75px" alt="" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span
                    className="navbar-toggler-icon text-white"
                    style={{ color: "#fff" }}
                  ></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <form className="d-flex col-md-7">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search for product brands and more"
                      aria-label="Search"
                    />
                    <button className="btn btn-primary" type="submit">
                      <i className="bi bi-search"></i>
                    </button>
                  </form>
                  <ul className="navbar-nav  mb-2 mr-auto mb-lg-0 ms-3">
                    {/* <!-- <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                              data-bs-toggle="dropdown" aria-expanded="false">
                              Avinash
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a className="dropdown-item" href="#">My Profile</a></li>
                              <li><a className="dropdown-item" href="#">Order</a></li>
                              <li><a className="dropdown-item" href="#">Wishlist</a></li>
                              <li><a className="dropdown-item" href="#">Notification</a></li>
                              <li><a className="dropdown-item" href="#">Logout</a></li>
                          </ul>
                      </li> --> */}

                    <li className="nav-item">
                      <a
                        className="nav-link  bg-white text-dark px-3 rounded"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-whatever="@mdo"
                      >
                        Login
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link " href="#">
                        Become a Seller
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        More
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Notification Preprensences
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            27/7 Customer Care
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Download App
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="bi bi-cart-fill"></i>
                        Cart
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className="container" style={{ marginTop: "60px" }}>
            <div className="py-3">
              <h5>
                <span className="text-capitalize">{name}</span> Product
              </h5>
            </div>

            <div className="row mb-3">
              {productList.map((product) => {
                return (
                  <div className="col-md-3 mb-3 " key={product.id}>
                    <div
                      className="card size p-2 add-shadow"
                      style={{ overflow: "hidden" }}
                      onClick={() =>
                        navigate(
                          `/product?id=${product.id}&name=${product.title}&c_id=${id}&c_name=${name}`
                        )
                      }
                    >
                      <img
                        src={product.image}
                        className="card-img-top-img"
                        style={{ height: "50vh" }}
                        alt="..."
                      />
                      <div className="card-body text-center">
                        <h6 className="product-style d-none">Smartees</h6>
                        <div className="overflow">
                          <p className="product-name">{product.title}</p>
                        </div>
                        <div className="">
                          <span className="pe-2">₹ {product.price}</span>
                          <span className="text-secondary pe-2">
                            <del>₹ {product.price * 2}</del>
                          </span>
                          <span className="text-success">50% off</span>
                        </div>
                        <div>
                          <p className="product-sizes">
                            <span className="text-secondary">Rating</span>
                            <span className="product-sizes-level ms-1">
                              {product.rating.rate}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Login
                    </h5>

                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <p className="p-3 p-3 pb-0">
                    Get access to your Orders, Wishlist and Recommendations
                  </p>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Name"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Email/Mobile no"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Password"
                        />
                      </div>

                      {/* <!-- <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Enter OTP" />
                    </div> --> */}
                    </form>
                  </div>
                  <div className="modal-footer  justify-content-center">
                    {/* <!-- <button type="button" className="btn btn-primary">Login</button> -->
                  <button type="button" className="btn btn-primary">Sign Up</button>
                <!-- <p className="text-sm">By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default SearchPage;

import { useState } from "react";

const App = () => {
  return (
    <>
      <section className="container-fluid">
        <section className="row">
          <section className="col-6 m-auto">
            <p className="text-center h3 text-primary mt-2">Todo App</p>
            <section className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Todo Name"
              />
              <button className="btn btn-success input-group-text ">
                <i class="fa fa-floppy-o me-2" aria-hidden="true"></i>
                Save
              </button>
            </section>
            <section>
              <ul className="list-group mt-3">
                <li className="list-group-item">
                  <div className="row gap-5">
                    <section className="form-check col-9">
                      <input type="checkbox" className="form-check-input" />
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Officia sit dolor consectetur repellendus sunt velit,
                    </section>
                    <section className="col-2">
                      <button className="btn btn-sm btn-danger me-1">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </button>
                      <button className="btn btn-sm btn-info">
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                      </button>
                    </section>
                  </div>
                </li>

                <li className="list-group-item">
                  <div className="row gap-5">
                    <section className="form-check col-12">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        disabled
                      />
                      <span className=" fst-italic text-danger">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Officia sit dolor consectetur repellendus sunt
                        velit,
                      </span>
                    </section>
                  </div>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default App;
